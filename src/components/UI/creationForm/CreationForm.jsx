import './CreationForm.css'

const CreationForm = ({text, setText, saveMessage}) => {
    return (
        <form className="creation__form">
            <input
                type="text"
                placeholder="Write something"
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={saveMessage}
            >
                Save
            </button>
        </form>
    )
}

export default CreationForm