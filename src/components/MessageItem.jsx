import '../styles/App.css'

const MessageItem = ({message, index, removeMessage, updateMessage}) => {

    return (
        <div className="message">
            <div>
                {index + 1}. {message.text}
                <div style={{position: "absolute", right: 10, bottom: 15}}>
                    <button onClick={() => updateMessage(message)}>
                        Edit
                    </button>
                    <button onClick={() => removeMessage(message)}>
                        X
                    </button>
                </div>
            </div>
        </div>)
}

export default MessageItem