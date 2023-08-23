import React, {useEffect, useState} from 'react';
import MessageService from "../API/MessageService";
import useFetching from "../hooks/useFetching";
import MessageList from '../components/MessageList';

const Messages = () => {

    const [messages, setMessage] = useState([])
    const [text, setText] = useState("")

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll()
        setMessage([...response.data])
    })

    const [postMessage] = useFetching(async (data) => {
        console.log(data)
        const response = await MessageService.postMessage(data)
        setMessage([...response.data])
    })

    useEffect(() => {
        fetchMessages()
    }, [])

    const saveMessage = () => {
        postMessage({text: text})
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Write something"
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => saveMessage()}
            >
                Save
            </button>
            <MessageList messages={messages}/>
            
        </div>
    );
};

export default Messages;