import UserItem from './UserItem'
import '../../../styles/UserPage.css'

const UserList = ({users}) => {


    return (
        <div className="users">
            {users.map((user) => 
                <UserItem
                    key={user.email}
                    user={user}
                />
            )}
        </div>
    )
}

export default UserList