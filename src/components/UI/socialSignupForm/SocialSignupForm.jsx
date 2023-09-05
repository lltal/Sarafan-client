import { GOOGLE_AUTH_URL } from "../../../constants"
import googleLogo from "../../../img/google-logo.png"
import './SocialSignupForm.css'

const SocialSignupForm = () => {
    return (
        <form className="social-container">
            <a
                className="btn btn-block social-btn google" 
                href={GOOGLE_AUTH_URL}
            >
                <img
                    src={googleLogo} 
                    alt="Google" 
                />
                Sign up with Google
            </a>
        </form>)
}

export default SocialSignupForm