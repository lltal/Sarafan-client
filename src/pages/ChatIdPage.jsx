import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import useFetching from "../hooks/useFetching";
import ChatService from "../services/ChatService";
import {HttpStatusCode} from "axios";
import MessageBlock from "../components/UI/messages/MessageBlock";
import {addHandler, connect} from "../ws";


const ChatPage = () => {

    const [chat, setChat] = useState({id: "", messages: []})

    const params = useParams()
    const isAuth = useSelector(select => select.auth.isAuth)

    const [fetchChat] = useFetching( () => {
        ChatService.getById(params.chatId)
            .then(response => {
                setChat({...chat, ...response.data});
            })
            .catch(error => {
                const responseStatus = error.response.data.status
                if (responseStatus === HttpStatusCode.NotFound){
                    ChatService.postChat( {id: params.chatId, messages: []})
                        .then(response => {
                            setChat({...chat, ...response.data})
                        })
                }
            })
    })

    useEffect(() => {
        if (isAuth){
            connect(params.chatId)
            addHandler((data) => {console.log(data)})
            fetchChat()
        }
    }, [])

    return (
        <div className="chat__page">
            <div>{chat.id}</div>
            <MessageBlock
                chatId={params.chatId}
                chat={chat}
            />
        </div>
    );
};

export default ChatPage;