import React, {useEffect, useState} from 'react';
import MessageService from "../../../services/MessageService";
import useFetching from "../../../hooks/useFetching";
import MessageList from './MessageList';
import MessageForm from './creationForm/MessageForm'
import './MessageBlock.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setChat} from "../../../store/chatReducer";

const MessageBlock = () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const chat = useSelector(select => select.chat)

    const dispatch = useDispatch()

    const [inputMessage, setInputMessage] = useState({
        id: "",
        text: "",
        creationDate: "",
        userId: ""
    })

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll(chat.id)
        dispatch(setChat({...chat, messages: [...response.data]}))
    })

    useEffect(() => {
        if(isAuth && chat.id){
            fetchMessages()
        }
    }, [chat.id])
    
    return (<div>
                {isAuth
                    ?
                    <div className="messages__page">
                        <MessageForm
                            inputMessage={inputMessage}
                            setInputMessage={setInputMessage}
                        />
                        <MessageList
                            inputMessage={inputMessage}
                            setInputMessage={setInputMessage}
                        />
                    </div>
                    :
                    <div>is Loading...</div>
                }
            </div>)
};

export default MessageBlock;