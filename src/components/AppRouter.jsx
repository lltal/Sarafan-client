import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes} from "../router/route";

const AppRouter = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

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
            </Routes>
            :
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
    );
};

export default AppRouter;