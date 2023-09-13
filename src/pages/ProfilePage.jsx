import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/ProfilePage.css'

const ProfilePage = () => {
    return (
        <div className="profile__page">
            <div className="profile__navigation">
                <NavLink className="messages__link" to="/messages">Messages</NavLink>
            </div>
        </div>
    );
};

export default ProfilePage;