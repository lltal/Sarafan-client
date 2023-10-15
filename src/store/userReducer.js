const defaultState = {
    id: -1,
    name: "",
    email: "",
    imageUrl: ""
}

const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                imageUrl: action.payload.imageUrl
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                id: -1,
                name: "",
                email: "",
                imageUrl: ""
            }
        }
        default: 
            return state
    }
}

export const loginUser = (payload) => ({type: LOGIN_USER, payload})
export const logoutUser = (payload) => ({type: LOGOUT_USER, payload})

export default userReducer
