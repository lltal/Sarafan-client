import googleLogo from '../img/google-logo.png'
import '../styles/UserPage.css'

const UserItem = ({user}) => {
    return (
        <div className="user"> 
            <img src={user.imageUrl} alt={googleLogo}/>
            <span>{user.name}</span>
        </div>
    )
}

export default UserItem