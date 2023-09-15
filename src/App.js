import './styles/App.css'
import AppRouter from "./components/AppRouter";
import { Provider } from 'react-redux/es';
import { store } from './store';
import UserService from './services/UserService';
import { loginUser, logoutUser } from './store/userReducer';
import { login, logout } from './store/authReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es';
import { ACCESS_TOKEN } from './constants';
import Navbar from './components/UI/navbar/Navbar'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    loadCurrentlyLoggedUser()
  })

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN)
    dispatch(logout())
    dispatch(logoutUser())
}

  function loadCurrentlyLoggedUser () {
    UserService.getCurrentUser()
    .then(response => {
      const user = {...response.data}
      dispatch(loginUser({
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl }))
      dispatch(login())
    }).catch(error => {
      dispatch(logout())
    })
  }

  return (
  <div className="app">
    <Provider store={store}>
      <Navbar logout={handleLogout}/>
      <AppRouter/>
    </Provider>
  </div>
  );
}

export default App;
