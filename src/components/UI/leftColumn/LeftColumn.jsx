import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import './LeftColumn.css'

const LeftColumn = () => {

    const isAuth = useSelector(select => select.auth.isAuth)

    return (
        <div className="left__column">
            {isAuth
                ?
                <div>
                    <div style={{padding: 10}}>
                        <NavLink className="messages__link" to="/chats">Messages</NavLink>
                    </div>
                    <div style={{padding: 10}}>
                        <NavLink className="users__link" to="/users">Search</NavLink>
                    </div>
                </div>
                :
                <div/>
            }
        </div>
    );
};

export default LeftColumn;