import React, {useEffect, useState} from 'react';
import MessageService from "../../../services/MessageService";
import useFetching from "../../../hooks/useFetching";
import MessageList from './MessageList';
import MessageForm from './creationForm/MessageForm'
import './MessageBlock.css'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addHandler} from "../../../ws";

const MessageBlock = ({chatId, chat}) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState({
        id: "",
        text: "",
        creationDate: "",
        userId: ""
    })

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll(chatId)
        setMessages([...response.data])
    })

    useEffect(() => {
        if(isAuth){
            if (chat != null){
                setMessages([...messages, ...chat.messages])
            }
            addHandler((data) => {
                //console.log(data)
            })
            fetchMessages()
        }
    }, [chat])

    function getIndex(message){
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === message.id){
                return i
            }
        }

        return -1
    }
    
    return (<div>
                {isAuth
                    ?
                    <div className="messages__page">
                        <MessageForm
                            inputMessage={inputMessage}
                            setInputMessage={setInputMessage}
                            messages={messages}
                            setMessages={setMessages}
                            chatId={chatId}
                            getIndex={getIndex}
                        />
                        <MessageList
                            inputMessage={inputMessage}
                            setInputMessage={setInputMessage}
                            messages={messages}
                            setMessages={setMessages}
                            getIndex={getIndex}
                            chatId={chatId}
                        />
                    </div>
                    :
                    <div>is Loading...</div>
                }
            </div>)
};

export default MessageBlock;