import React from 'react';
import {useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";

const SignupPage = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        {isAuth
            ?
            <Navigate
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}
            />
            :
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup with SpringSocial</h1>
                    <SocialSignup />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
            </div>
        })



export default SignupPage;