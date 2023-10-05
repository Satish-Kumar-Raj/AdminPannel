import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Login from './Pages/Login'
import Style from './Pages/style.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
