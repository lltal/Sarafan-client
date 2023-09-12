import './styles/App.css'
import AppRouter from "./components/AppRouter";
import AppHeader from './components/Navbar';
import { Provider } from 'react-redux/es';
import { store } from './store';

function App() {
    return (
    <div className="App">
      <Provider store={store}>
          <div className="app-body">
            <div className="app-top">
              <AppHeader/>
            </div>
            <AppRouter/>
          </div>
      </Provider>
    </div>
    );
}

export default App;
