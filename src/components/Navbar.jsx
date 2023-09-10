import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

const AppHeader = () => {

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    return (
        <header className="navbar">
            <div className="container">
                <div className="app-branding">
                    <Link to="/" className="app-title">Sarafan</Link>
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
                                    {/* <a onClick={() => dispatch(login({auth: false}))}>Logout</a> */}
                                </li>
                            </ul>)
                            :
                            (<ul>
                                <li>
                                    {/*<NavLink to="/login">Login</NavLink>*/}
                                </li>
                                <li>
                                    <NavLink to="/signup">Signup</NavLink>
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