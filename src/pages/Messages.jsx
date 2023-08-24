import React, {useEffect, useState} from 'react';
import MessageService from "../API/MessageService";
import useFetching from "../hooks/useFetching";
import MessageList from '../components/MessageList';
import CreationForm from '../components/UI/creationForm/CreationForm'
import '../styles/App.css'


const Messages = () => {

    const [messages, setMessage] = useState([])
    const [text, setText] = useState("")

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll()
        setMessage([...response.data])
    })

    const [postMessage] = useFetching(async (data) => {
        const response = await MessageService.postMessage(data)
        setMessage([...response.data])
    })

    useEffect(() => {
        fetchMessages()
    }, [])

    function saveMessage (e) {
        e.preventDefault()
        postMessage({text: text})
    }

    return (
        <div className="messages__page">
            <CreationForm
                text={text} 
                setText={setText}
                saveMessage={saveMessage}
            />
            <MessageList messages={messages}/>
        </div>
    );
};

export default Messages;