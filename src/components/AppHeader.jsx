import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/authReducer";

const AppHeader = () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    return (
        <header className="app-header">
            <div className="container">
                <div className="app-branding">
                    {/*<Link to="/" className="app-title">Spring Social</Link>*/}
                </div>
                <div className="app-options">
                    <nav className="app-nav">
                        {isAuth
                            ?
                            (<ul>
                                <li>
                                    {/*<NavLink to="/profile">Profile</NavLink>*/}
                                </li>
                                <li>
                                    <a onClick={() => dispatch(login({auth: false}))}>Logout</a>
                                </li>
                            </ul>)
                            :
                            (<ul>
                                <li>
                                    {/*<NavLink to="/login">Login</NavLink>*/}
                                </li>
                                <li>
                                    {/*<NavLink to="/signup">Signup</NavLink>*/}
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;