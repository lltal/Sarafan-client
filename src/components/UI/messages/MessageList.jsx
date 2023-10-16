import MessageItem from './MessageItem'
import './MessageBlock.module.css'
import useFetching from "../../../hooks/useFetching";
import MessageService from "../../../services/MessageService";
import {useDispatch, useSelector} from "react-redux";
import {setChatMessages} from "../../../store/chatReducer";

const MessageList = ({inputMessage, setInputMessage}) => {

    const chat = useSelector(select => select.chat)
    const dispatch = useDispatch()

    const [deleteMessage] = useFetching(async (message) => {
        let index = chat.messages.findIndex(m => m.id === message.id)
        chat.messages.splice(index, 1)
        dispatch(setChatMessages({messages: [...chat.messages]}))
        await MessageService.deleteById(chat.id, message.id)
        if (message.id === inputMessage.id) {
            inputMessage.id = ""
        }
    })

    function updateMessage(message) {
        setInputMessage({...message})
    }

    return (
        <div className="messages">
            {chat.messages.map((message, index) =>
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