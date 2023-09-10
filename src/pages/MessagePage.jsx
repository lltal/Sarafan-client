import React, {useEffect, useState} from 'react';
import MessageService from "../services/MessageService";
import useFetching from "../hooks/useFetching";
import MessageList from '../components/MessageList';
import MessageForm from '../components/UI/creationForm/MessageForm'
import '../styles/App.css'
import {useDispatch, useSelector} from "react-redux";
import AppHeader from '../components/Navbar';


const MessagePage = () => {

    const isAuth = useSelector(state => state.isAuth)

    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState({id: "", text: ""})

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll()
        setMessages([...response.data])
    })

    useEffect(() => {
        if(isAuth){
            fetchMessages()
        }
    }, [])

    function getIndex(message){
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === message.id){
                return i
            }
        }

        return -1
    }

    return (
        <div>
            {isAuth
                ?
                <div className="messages__page">
                    <MessageForm
                        inputMessage={inputMessage}
                        setInputMessage={setInputMessage}
                        messages={messages}
                        setMessages={setMessages}
                        getIndex={getIndex}
                    />
                    <MessageList
                        inputMessage={inputMessage}
                        setInputMessage={setInputMessage}
                        messages={messages}
                        setMessages={setMessages}
                        getIndex={getIndex}
                    />
                </div>
                :
                <div>is Loading...</div>
            }
        </div>


    );
};

export default MessagePage;