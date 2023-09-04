import MessagePage from "./pages/MessagePage";
import './styles/App.css'
import AppHeader from "./components/AppHeader";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter/>
            <AppHeader/>
            <MessagePage/>
        <BrowserRouter/>
    </div>
  );
}

export default App;
