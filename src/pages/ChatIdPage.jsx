import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetching from "../hooks/useFetching";
import ChatService from "../services/ChatService";
import {HttpStatusCode} from "axios";
import MessageBlock from "../components/UI/messages/MessageBlock";
import {addHandler, connect} from "../ws";
import {useDispatch} from "react-redux/es";
import {setChat, setChatMessages} from "../store/chatReducer";

const ChatPage = () => {
    const params = useParams()

    const chat = useSelector(select => select.chat)
    const principalId = useSelector(select => select.user.id)
    const isAuth = useSelector(select => select.auth.isAuth)

    const dispatch = useDispatch()

    const [fetchChat] = useFetching( () => {
        ChatService.getById(params.chatId)
            .then(response => {
                dispatch(setChat({...response.data}))
            })
            .catch(error => {
                const responseStatus = error.response.data.status
                if (responseStatus === HttpStatusCode.NotFound){
                    ChatService.postChat( {id: params.chatId, messages: []})
                        .then(response => {
                            dispatch(setChat({...response.data}))
                        })
                }
            })
    })

    useEffect(() => {
        if (isAuth){
            fetchChat()
            connect(params.chatId)
            
            addHandler((data) => {
                if(data.objectType === 'MESSAGE'){
                    const index = chat.messages.findIndex(m => m.id === data.payload.id)
                    console.log(data.payload.user.id)
                    console.log(principalId)
                    if(data.payload.user.id === principalId){
                        switch (data.eventType) {
                            case 'CREATE':
                            case 'UPDATE':
                                if (index >= 0) {
                                    chat.messages.push(data.payload)
                                } else {
                                    chat.messages.splice(index, 1, data.payload)
                                }
                                dispatch(setChatMessages({messages: [...chat.messages]}))
                                break;
                            case 'REMOVE':
                                chat.messages.splice(index, 1)
                                dispatch(setChatMessages({messages: [...chat.messages]}))
                                break;
                            default:
                                console.error(`Looks like the event type if unknown "${data.eventType}"`)
                        }
                    }

                } else {
                    console.error(`Looks like the data type if unknown "${data.objectType}"`)
                }
            })
            
        }
    }, [])

    return (
        <div className="chat__page">
            <div>{chat.id}</div>
            <MessageBlock/>
        </div>
    );
};

export default ChatPage;