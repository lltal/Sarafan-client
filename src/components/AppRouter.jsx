import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/route";
import {ACCESS_TOKEN} from "../constants";
import {login} from "../store/authReducer";

const AppRouter = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            dispatch(login({auth: true}))
        }
    }, []);

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/profile" replace={true}/>}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/" replace={true}/>}
                />
            </Routes>
    );
};

export default AppRouter;