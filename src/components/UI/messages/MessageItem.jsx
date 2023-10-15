import classes from "./MessageBlock.module.css";
import {useSelector} from "react-redux";

const MessageItem = ({message, index, removeMessage, updateMessage}) => {

    const principalId = useSelector(select => select.user.id)
    const messageStyles = [classes.message]
    if (message.user.id === principalId) {
        messageStyles.push(classes.principal)
    } else {
        messageStyles.push(classes.other)
    }
    return (
        <div className={messageStyles.join(' ')}>
            <div className={classes.message__content}>
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