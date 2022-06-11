//import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navebar from './Navebar';
import Shop from './Shop';
function App() {
  return (
    <div className="App ">
      <Router>
     <Navebar/>
     <Shop />
     </Router>
    </div>
  );
}

export default App;
