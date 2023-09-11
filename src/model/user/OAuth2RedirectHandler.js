import {Navigate, useSearchParams} from "react-router-dom";
import {ACCESS_TOKEN} from "../../constants";
import {useDispatch} from "react-redux";
import {login} from "../../store/authReducer";


const OAuth2RedirectHandler = () => {

    const [searchParams, setSearchParams]= useSearchParams()
    const token = searchParams.get("token")

    if (token){
        localStorage.setItem(ACCESS_TOKEN, token)
        return <Navigate to="/profile" replace={true}/>
    } else {
        return <Navigate to="/error"/>
    }
}

export default OAuth2RedirectHandler