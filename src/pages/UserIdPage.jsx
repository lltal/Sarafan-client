import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserService from "../services/UserService";
import useFetching from "../hooks/useFetching";
import UserItem from "../components/UI/users/UserItem";
import UserProfile from "../components/UI/userProfile/UserProfile";

const UserIdPage = () => {

    const params = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetchUserById()
    }, [])

    const [fetchUserById, isLoading, error] = useFetching(async () => {
        const response = await UserService.getById(params.id)
        setUser({...user, ...response.data})
    })

    return (
        <div>
            <UserProfile user={user}/>
        </div>
    );
};

export default UserIdPage;