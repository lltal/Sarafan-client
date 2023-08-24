
import '../styles/App.css'

const Message = ({message, index}) => {

    return (
        <div className="message">
            <div>{index}. {message.text}</div>
        </div>)
}

export default Message