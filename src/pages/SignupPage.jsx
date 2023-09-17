import React from 'react';
import {useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import SocialSignupForm from '../components/UI/socialSignupForm/SocialSignupForm';
import '../styles/SignupPage.css'

const SignupPage = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (<div>
                {isAuth
                ?
                <Navigate to="messages" replace={true}/>
                :
                <div className="signup-container">
                    <div className="signup-content">
                        <h1 className="signup-title">
                            Signup with Social
                        </h1>
                        <SocialSignupForm />
                        <div className="or-separator">
                            <span className="or-text">OR</span>
                        </div>
                        {/* <SignupForm {...this.props} /> */}
                        <span className="login-link">
                            Already have an account?&nbsp;
                            <Link to="/login">
                                Login!
                            </Link>
                        </span>
                    </div>
                </div>
                }
            </div>)
}

export default SignupPage