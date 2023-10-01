import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetching from "../hooks/useFetching";
import ChatService from "../services/ChatService";
import {HttpStatusCode} from "axios";
import MessageBlock from "../components/UI/messages/MessageBlock";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const ChatPage = () => {

    const [chat, setChat] = useState({})

    const params = useParams()
    const isAuth = useSelector(select => select.auth.isAuth)

    const [fetchChat] = useFetching( () => {
        ChatService.getById(params.chatId)
            .then(response => {
                setChat({...response.data});
            })
            .catch(error => {
                const responseStatus = error.response.data.status
                if (responseStatus === HttpStatusCode.NotFound){
                    ChatService.postChat( {id: params.chatId, messages: []})
                        .then(response => {
                            setChat({...response.data})
                        })
                }
            })
    })

    useEffect(() => {
        if (isAuth){
            fetchChat()
            const socket = SockJS()
        }
    }, [])

    return (
        <div className="chat__page">
            <div>{chat.id}</div>
            {console.log(chat)}
            <MessageBlock messages={chat.messages} chatId={params.chatId}/>
        </div>
    );
};

export default ChatPage;