import './MessageForm.css'
import useFetching from "../../../hooks/useFetching";
import MessageService from "../../../API/MessageService";

const MessageForm = ({inputMessage, setInputMessage, messages, setMessages, getIndex}) => {

    const [postMessage] = useFetching(async (message) => {
        let response = await MessageService.postMessage(message)
        setMessages([...messages, response.data])
    })

    const [putMessage] = useFetching(async (message) => {
        let index = getIndex(inputMessage)
        messages.splice(index, 1, inputMessage)
        setMessages([...messages])
        await MessageService.putMessage(message)
    })

    function saveMessage (e) {
        e.preventDefault()
        if(inputMessage.id){
            putMessage({inputMessage})
        } else {
            postMessage({inputMessage})
        }
        setInputMessage({id: "", text: ""})
    }

    return (
        <form className="creation__form">
            <input
                type="text"
                placeholder="Write something"
                value={inputMessage.text}
                onChange={(e) => setInputMessage({id: inputMessage.id, text: e.target.value})}
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