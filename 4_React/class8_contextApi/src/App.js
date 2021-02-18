import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Dashboard from "./components/dashboard/dashboard"


function App() {

  return (<Router>

    <nav>
      <ul>
      
        <li>  <Link to="/">login</Link>     </li>
        <li>  <Link to="/signup">Signup</Link>     </li>
        <li>  <Link to="/dashboard">Dashboard</Link>     </li>

      </ul>
    </nav>


    <Route exact={true} path="/">
      <Login />
    </Route>

    <Route path="/signup">
      <Signup />
    </Route>

    <Route path="/dashboard">
      <Dashboard />
    </Route>


  </Router>);
}

export default App;
