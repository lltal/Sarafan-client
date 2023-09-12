import {Navigate, useSearchParams} from "react-router-dom";
import RedirectExecutor from "../../utils/RedirectExecutor";


const OAuth2RedirectHandler = () => {

    const [searchParams, setSearchParams]= useSearchParams()
    const token = searchParams.get("token")

    if (token){
        return <RedirectExecutor token={token}/>
    } else {
        return <Navigate to="/error"/>
    }
}

export default OAuth2RedirectHandler