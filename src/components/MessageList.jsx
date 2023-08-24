import Message from './Message'
import '../styles/App.css'

const MessageList = ({messages}) => {

    return (
        <div className="messages">
            {messages.map((message, index) =>
                <Message 
                    key={message.id} 
                    message={message} 
                    index={index}
                />
            )}       
        </div>)
}

export default MessageList