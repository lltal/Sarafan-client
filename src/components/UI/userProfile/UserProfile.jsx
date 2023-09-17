import React from 'react';
import './UserProfile.css'
import MyButton from "../MyButtom/MyButton";

const UserProfile = ({user}) => {
    return (
        <div className="user">
            <img src={user.imageUrl}/>
            <span className="user__name">
                {user.name}
            </span>
            <MyButton style={{marginTop: 30}}>
                Написать сообщение
            </MyButton>
        </div>
    );
};

export default UserProfile;