import React, {useEffect, useState} from 'react';
import ChatService from "../services/ChatService";
import useFetching from "../hooks/useFetching";
import {useSelector} from "react-redux";
import ChatList from "../components/UI/chats/ChatList";
import '../styles/ChatPage.css'
const ChatsPage = () => {

    const [chats, setChats] = useState([])
    const isAuth = useSelector(select => select.auth.isAuth)

    const [fetchChat] = useFetching(async () => {
        const response = await ChatService.getAllChats()
        setChats([...response.data])
    })

    useEffect(() => {
        fetchChat()
    }, [])

    return (<div>
        {isAuth
            ?
            <div className="chats__page">
                <ChatList chats={chats}/>
            </div>
            :
            <div>isLoading...</div>
        }
    </div>)
};

export default ChatsPage;