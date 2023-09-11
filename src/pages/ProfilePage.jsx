import React from 'react';
import {NavLink} from "react-router-dom";
import '../styles/ProfilePage.css'

const ProfilePage = () => {
    return (
        <div className="profile__body">
            <NavLink to="/messages">Сообщения</NavLink>
        </div>
    );
};

export default ProfilePage;