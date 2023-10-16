import './MessageForm.css'
import useFetching from "../../../../hooks/useFetching";
import MessageService from "../../../../services/MessageService";
import {useDispatch, useSelector} from "react-redux";
import {setChat, setChatMessages} from "../../../../store/chatReducer";

const MessageForm = ({inputMessage, setInputMessage}) => {

    const chat = useSelector(select => select.chat)
    const dispatch = useDispatch()

    const [postMessage] = useFetching(async (message) => {
        let response = await MessageService.postMessage(chat.id, message)
        dispatch(setChatMessages({messages: [...chat.messages, response.data]}))
    })

    const [putMessage] = useFetching(async (message) => {
        let index = chat.messages.findIndex(m => m.id === message.id)
        chat.messages.splice(index, 1, message)
        dispatch(setChatMessages({messages: [...chat.messages]}))
        await MessageService.putMessage(chat.id, message)
    })

    function saveMessage (e) {
        e.preventDefault()
        if(inputMessage.id){
            putMessage(inputMessage)
        } else {
            postMessage(inputMessage)
        }
        setInputMessage({
            id: "",
            text: "",
            creationDate: "",
            userId: ""
        })
    }

    return (
        <form className="creation__form">
            <input
                type="text"
                placeholder="Write something"
                value={inputMessage.text}
                onChange={(e) => setInputMessage({...inputMessage, text: e.target.value})}
            />
            <button
                onClick={saveMessage}
            >
                Save
            </button>
        </form>
    )
}

export default MessageForm