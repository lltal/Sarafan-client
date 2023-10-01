import MessageItem from './MessageItem'
import './MessageBlock.css'
import useFetching from "../../../hooks/useFetching";
import MessageService from "../../../services/MessageService";

const MessageList = ({inputMessage, setInputMessage, messages, setMessages, getIndex}) => {

    const [deleteMessage] = useFetching(async (message) => {
        let index = getIndex(message)
        messages.splice(index, 1)
        setMessages([...messages])
        await MessageService.deleteById(message.id)
        if (message.id === inputMessage.id) {
            inputMessage.id = ""
        }
    })

    function updateMessage(message) {
        setInputMessage({...message})
    }

    return (
        <div className="messages">
            {messages.map((message, index) =>
                <MessageItem
                    key={message.id} 
                    message={message}
                    index={index}
                    removeMessage={deleteMessage}
                    updateMessage={updateMessage}
                />
            )}       
        </div>)
}

export default MessageList