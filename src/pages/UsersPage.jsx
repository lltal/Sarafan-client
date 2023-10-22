import { useEffect, useState } from "react"
import useFetching from "../hooks/useFetching"
import UserService from "../services/UserService"
import { useSelector } from "react-redux"
import UserList from "../components/UI/users/UserList"
import '../styles/UserPage.css'

const UsersPage = () => {

    const [users, setUsers] = useState([])
    const isAuth = useSelector(select => select.auth.isAuth)

    const [fetchUsers] = useFetching(async () => {
        const response = await UserService.getAll()
        setUsers([...response.data])
    })

    useEffect(() => {
        if(isAuth){
            fetchUsers()
        }
    }, [])

    return (<div>
                {isAuth
                    ?
                    <div className="users__page">
                        <UserList users={users}/>
                    </div>
                    :
                    <div>isLoading...</div>
                } 
            </div>)
}

export default UsersPage