import React, {useState} from 'react';
import MessageService from "../../../services/MessageService";
import useFetching from "../../../hooks/useFetching";
import MessageList from './MessageList';
import MessageForm from './creationForm/MessageForm'
import classes from './MessageBlock.module.css'
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
    
    return (<div>
                {isAuth
                    ?
                    <div className={classes.messages__block}>
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