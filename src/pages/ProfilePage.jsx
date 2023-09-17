import React from 'react';
import '../styles/ProfilePage.css'
import { useSelector } from 'react-redux';
import googleLogo from "../img/google-logo.png"

const ProfilePage = () => {

    const user = useSelector(select => select.user)

    return (<div className="profile__page">
            <div className="profile__content">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img 
                            src={user.imageUrl} 
                            alt={googleLogo}
                        />
                    </div>
                    <div className="progile__name">
                        <span>{user.name}</span>
                    </div>
                </div>
            </div>
        </div>)
};

export default ProfilePage;