import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/ProfilePage.css'
import { useSelector } from 'react-redux';

const ProfilePage = () => {

    const user = useSelector(select => select.user)
    console.log(user.imageUrl)
    return (
        <div className="profile__page">
            <div className="profile__content">
                <div className="profile__navigation">
                    <NavLink className="messages__link" to="/messages">Messages</NavLink>
                </div>
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img 
                            src={user.imageUrl} 
                        />
                    </div>
                    <div className="progile__name">
                        <span>{user.name}</span>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default ProfilePage;