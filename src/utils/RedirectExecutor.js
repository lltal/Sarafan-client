import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/authReducer";
import {Navigate} from "react-router-dom";
import {useEffect} from "react";
import {ACCESS_TOKEN} from "../constants";

const RedirectExecutor = ({token}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem(ACCESS_TOKEN, token)
        dispatch(login({auth: true}))
    }, []);

    return <Navigate to="/profile" replace={true}/>
}

export default RedirectExecutor