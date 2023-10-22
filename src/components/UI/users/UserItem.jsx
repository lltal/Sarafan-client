import googleLogo from '../../../img/google-logo.png'
import '../../../styles/UserPage.css'
import {Navigate, useNavigate} from "react-router-dom";
import MyButton from "../MyButtom/MyButton";

const UserItem = ({user}) => {

    const navigate = useNavigate()

    function handleSubmit(e){
        e.stopPropagation()
        navigate(`/users/${user.id}`)
    }

    return (
        <div className="user__item">
            <img src={user.imageUrl} alt={googleLogo}/>
            <span style={{marginLeft: 20}}>
                {user.name}
            </span>
            <MyButton
                style={{position: "absolute", right: 10}}
                onClick={e => handleSubmit(e)}
            >
                Перейти к профилю
            </MyButton>
        </div>
    )
}

export default UserItem