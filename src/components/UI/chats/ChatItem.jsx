import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import googleLogo from "../../../img/google-logo.png";
import MyButton from "../MyButtom/MyButton";
import '../../../styles/ChatPage.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux/es";
import {setChatInfoReducer} from "../../../store/chatInfoReducer";

const ChatItem = ({chat}) => {

    const navigate = useNavigate()
    const principalId = useSelector(select => select.user.id)
    const [chatInfo, setChatInfo] = useState({imageUrl: "", name: ""})
    const dispatch = useDispatch()

    function handleChoice(){
        console.log(chat)
        dispatch(setChatInfoReducer({name: chatInfo.name, imgUrl: chatInfo.imageUrl}))
        navigate(`/chats/${chat.id}`)
    }

    useEffect(() => {
        chat.users.length > 1
            ?
            chat.users
                .filter(u => u.id !== principalId)
                .forEach(u =>
                    setChatInfo({
                    ...chatInfo,
                    imageUrl: u.imageUrl,
                    name: (u.name + " " + chatInfo.name).trim()}))
            :
            setChatInfo({imageUrl: chat.users[0].imageUrl, name: chat.users[0].name})
    }, [])

    return (
        <div className="chat__item" onClick={() => handleChoice()}>
            <img src={chatInfo.imageUrl} />
            <span style={{marginLeft: 20}}>
                {chatInfo.name}
            </span>
        </div>
    )
};

export default ChatItem;