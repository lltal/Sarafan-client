import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetching from "../hooks/useFetching";
import ChatService from "../services/ChatService";
import {HttpStatusCode} from "axios";
import MessageBlock from "../components/UI/messages/MessageBlock";
import {addHandler, connect} from "../ws";
import {useDispatch} from "react-redux/es";
import {addMessage, removeMessage, setChat} from "../store/chatReducer";
import '../styles/ChatPage.css'

const ChatPage = () => {
    const params = useParams()

    const chatInfo = useSelector(select => select.chatInfo)
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

            addHandler(( data) => {
                if(data.objectType === 'MESSAGE'){
                    switch (data.eventType) {
                        case 'CREATE':
                        case 'UPDATE':
                            dispatch(addMessage({message: data.payload}))
                            break;
                        case 'REMOVE':
                            dispatch(removeMessage({message: data.payload}))
                            break;
                        default:
                            console.error(`Looks like the event type if unknown "${data.eventType}"`)
                    }
                } else {
                    console.error(`Looks like the data type if unknown "${data.objectType}"`)
                }
            })
        }
        return () => {
            dispatch(setChat({id: "", messages: []}))
        }
    }, [])

    return (
        <div className="chat__page">
            <div className="chat__user__info">
                <img src={chatInfo.imgUrl}/>
                {chatInfo.name}
            </div>
            <MessageBlock/>
        </div>
    );
};

export default ChatPage;