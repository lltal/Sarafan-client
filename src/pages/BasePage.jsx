import '../styles/App.css'
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux";

const BasePage = ({children}) => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <div>
            <div className="app__body">
            
                <div className="app__left__column">
                    {isAuth 
                        ?
                        <div>
                            <div style={{padding: 10}}>
                                <NavLink className="messages__link" to="/messages">Messages</NavLink>
                            </div>
                            <div style={{padding: 10}}>
                                <NavLink className="users__link" to="/users">Search</NavLink>
                            </div>
                        </div>
                        :
                        <div/>
                    }
                </div>

                <div className="app__center__column">
                    {children}
                </div>

                <div className="app__right__column">
                </div>

            </div>
        </div>
    )
}

export default BasePage