import './MessageForm.css'
import useFetching from "../../../../hooks/useFetching";
import MessageService from "../../../../services/MessageService";

const MessageForm = ({inputMessage, setInputMessage, messages, setMessages, getIndex, chatId}) => {

    const [postMessage] = useFetching(async (message) => {
        let response = await MessageService.postMessage(chatId, message)
        setMessages([...messages, response.data])
    })

    const [putMessage] = useFetching(async (message) => {
        let index = getIndex(inputMessage)
        messages.splice(index, 1, inputMessage)
        setMessages([...messages])
        await MessageService.putMessage(chatId, message)
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