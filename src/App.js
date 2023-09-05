import './styles/App.css'
import AppRouter from "./components/AppRouter";
import AppHeader from './components/AppHeader';
import { Provider } from 'react-redux/es';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <AppHeader/>
          <AppRouter/>
      </Provider>
        
    </div>
  );
}

export default App;
