const defaultState = {
    isAuth: false
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const authReducer = (state = defaultState, action) => {
    switch (action.type){
        case LOGIN:
            return {...state, isAuth: action.auth}
        case LOGOUT:
            return {...state, isAuth: action.auth}
        default:
            return state
    }
}

export default authReducer

export const login = (payload) => ({type: LOGIN, payload})
export const logout = (payload) => ({type: LOGOUT, payload})