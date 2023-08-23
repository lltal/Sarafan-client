import '../styles/App.css'
import Message from './Message'

const MessageList = ({messages}) => {

    return (
        <div className="messages">
            {messages.map((message, index) =>
                <Message message={message} index={index}/>
            )}       
        </div>)
}

export default MessageList