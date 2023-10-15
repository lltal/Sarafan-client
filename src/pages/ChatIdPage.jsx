import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetching from "../hooks/useFetching";
import ChatService from "../services/ChatService";
import {HttpStatusCode} from "axios";
import MessageBlock from "../components/UI/messages/MessageBlock";
import {addHandler, connect} from "../ws";
import {useDispatch} from "react-redux/es";
import {setChat} from "../store/chatReducer";

const ChatPage = () => {
    const params = useParams()

    const chat = useSelector(select => select.chat)
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
            dispatch(setChat({id: params.chatId, messages: []}))
            fetchChat()
            connect(params.chatId)
            
            addHandler((data) => {
                console.log(data)
                if(data.objectType === 'MESSAGE'){
                    const index = chat.messages.findIndex(m => m.id === data.payload.id)
                    switch (data.eventType){
                        case 'CREATE':
                        case 'UPDATE':
                            if (index >= 0) {
                                chat.messages.push(data.payload)        
                            } else {
                                chat.messages.splice(index, 1, data.payload)
                            }
                            setChat({...chat, messages: [...chat.messages]})
                            break;
                        case 'REMOVE':
                            chat.messages.splice(index, 1)
                            break;
                        default: 
                            console.error(`Looks like the event type if unknown "${data.eventType}"`)
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