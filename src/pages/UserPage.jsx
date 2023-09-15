import { useEffect, useState } from "react"
import useFetching from "../hooks/useFetching"
import UserService from "../services/UserService"
import { useSelector } from "react-redux"
import UserList from "../components/UserList"
import BasePage from "./BasePage"
import '../styles/UserPage.css'

const UserPage = () => {

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

    return (
        <BasePage>
            <div>
                {isAuth
                    ?
                    <div className="users__page">
                        <UserList users={users}/>
                    </div>
                    :
                    <div>isLoading...</div>
                } 
            </div>
        </BasePage>
    )
}

export default UserPage