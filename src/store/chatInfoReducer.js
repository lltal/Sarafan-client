const defaultState = {
    name: "",
    imgUrl: ""
}

const SET_CHAT_INFO = 'SET_CHAT_INFO'

const chatInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHAT_INFO: {
            return {
                ...state,
                name: action.payload.name,
                imgUrl: action.payload.imgUrl
            }
        }
        default:
            return state
    }
}

export const setChatInfoReducer = (payload) => ({type: SET_CHAT_INFO, payload})

export default chatInfoReducer