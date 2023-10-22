import React from 'react';
import UserItem from "../users/UserItem";
import ChatItem from "./ChatItem";
import '../../../styles/ChatPage.css'

const ChatList = ({chats}) => {
    return (
        <div className="chats">
            {chats.map((chat) =>
                <ChatItem
                    key={chat.id}
                    chat={chat}
                />
            )}
        </div>
    )
};

export default ChatList;