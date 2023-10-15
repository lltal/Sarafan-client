import classes from "./MessageBlock.module.css";
import {useSelector} from "react-redux";

const MessageItem = ({message, index, removeMessage, updateMessage}) => {

    const principalId = useSelector(select => select.user.id)
    const messageStyles = [classes.message]
    const messageContentStyles = [classes.message__content]
    if (message.user.id === principalId) {
        messageStyles.push(classes.principal)
        messageContentStyles.push(classes.principal__content)
    } else {
        messageStyles.push(classes.other)
        messageContentStyles.push(classes.other__content)
    }


    return (
        <div className={messageStyles.join(' ')}>
            <div className={messageContentStyles.join(' ')}>
                {message.text}
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