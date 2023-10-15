const defaultState = {
    id: "",
    messages: []
}

const SET_CHAT = "SET_CHAT"

const chatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHAT: {
            return {
                ...state,
                id: action.payload.id,
                messages: [...action.payload.messages]
            }
        }
        default:
            return state
    }
}

export const setChat = (payload) => ({type: SET_CHAT, payload})

export default chatReducer