const defaultState = {
    id: "",
    messages: []
}

const SET_CHAT = "SET_CHAT"
const SET_CHAT_MESSAGES = "SET_CHAT_MESSAGES"

const chatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHAT: {
            return {
                ...state,
                id: action.payload.id,
                messages: [...action.payload.messages]
            }
        }
        case SET_CHAT_MESSAGES: {
            return {
                ...state,
                messages: [...action.payload.messages]
            }
        }
        default:
            return state
    }
}

export const setChat = (payload) => ({type: SET_CHAT, payload})
export const setChatMessages = (payload) => ({type: SET_CHAT_MESSAGES, payload})

export default chatReducer