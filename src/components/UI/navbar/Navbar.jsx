import React from 'react';
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = ({logout}) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div className="navbar__body">
            <div className="navbar__left__column">
                <Link to="/" className="app__title">Sarafan</Link>
            </div>
            <div className="navbar__center__column"></div>
            <div className="navbar__right__column">
                <nav className="app__nav">
                    {isAuth
                        ?
                        (<ul>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <a onClick={() => {logout()}}>Logout</a>
                            </li>
                        </ul>)
                        :
                        (<ul>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;