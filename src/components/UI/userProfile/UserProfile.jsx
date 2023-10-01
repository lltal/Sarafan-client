import React from 'react';
import './UserProfile.css'
import MyButton from "../MyButtom/MyButton";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const UserProfile = ({user}) => {

    const navigate = useNavigate()
    const principal = useSelector(select => select.user)

    const chatId = [user.id, principal.id].sort().join('-')

    function onClickHandler(){
        navigate(`/chats/${chatId}`)
    }

    return (
        <div className="user">
            <img src={user.imageUrl}/>
            <span className="user__name">
                {user.name}
            </span>
            <MyButton onClick={() => onClickHandler()} style={{marginTop: 30}}>
                Написать сообщение
            </MyButton>
        </div>
    );
};

export default UserProfile;