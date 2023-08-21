import React, {useEffect, useState} from 'react';
import MessageService from "../API/MessageService";
import useFetching from "../hooks/useFetching";

const Messages = () => {

    const [messages, setMessage] = useState([])
    const [text, setText] = useState("")

    const [fetchMessages] = useFetching(async () => {
        const response = await MessageService.getAll()
        setMessage([...response.data])
    })

    const [postMessage] = useFetching(async (data) => {
        const response = await MessageService.postMessage(JSON.stringify(data))
        setMessage([...response.data])
    })

    useEffect(() => {
        fetchMessages()
    }, [])

    const saveMessage = () => {
        const data = {id: new Date().toString(), text: text}
        setMessage([...messages, data])
        postMessage(data)
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
            {messages.map((message) =>
                <span>
                    {message.id}. {message.text}
                </span>
            )}
        </div>
    );
};

export default Messages;