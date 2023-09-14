import './styles/App.css'
import AppRouter from "./components/AppRouter";
import AppHeader from './components/UI/navbar/Navbar';
import { Provider, useDispatch } from 'react-redux/es';
import { store } from './store';
import UserService from './services/UserService';
import { loginUser, logoutUser } from './store/userReducer';
import { login, logout } from './store/authReducer';
import { useEffect } from 'react';
import { ACCESS_TOKEN } from './constants';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    loadCurrentlyLoggedUser()
  })

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

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN)
    dispatch(logout())
    dispatch(logoutUser())
  }


  return (
  <div className="App">
    <Provider store={store}>
      <div className="app-body">
        <div className="app-top">
          <AppHeader logout={handleLogout}/>
        </div>
        <AppRouter/>
      </div>
    </Provider>
      
  </div>
  );
}

export default App;
