const defaultState = {
    id: "",
    messages: []
}

const SET_CHAT = "SET_CHAT"
const SET_CHAT_MESSAGES = "SET_CHAT_MESSAGES"
const ADD_MESSAGE = "ADD_MESSAGE"
const REMOVE_MESSAGE = "REMOVE_MESSAGE"

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
        case ADD_MESSAGE: {
            const index = state.messages.findIndex(m => m.id === action.payload.message.id)
            if (index > -1) {
                state.messages.splice(index, 1, action.payload.message)
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    messages: [...state.messages, action.payload.message]
                }
            }
        }
        case REMOVE_MESSAGE: {
            const index = state.messages.findIndex(m => m.id === action.payload.message.id)
            if (index > -1) {
                state.messages.splice(index, 1)
            }
            return {
                ...state
            }
        }
        default:
            return state
    }
}

export const setChat = (payload) => ({type: SET_CHAT, payload})
export const setChatMessages = (payload) => ({type: SET_CHAT_MESSAGES, payload})
export const addMessage = (payload) => ({type: ADD_MESSAGE, payload})
export const removeMessage = (payload) => ({type: REMOVE_MESSAGE, payload})

export default chatReducer