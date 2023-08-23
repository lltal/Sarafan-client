
import '../styles/App.css'

const Message = ({message, index}) => {
    return (
        <div className="message">
            <span>{index}. {message.text}</span>
        </div>)
}

export default Message