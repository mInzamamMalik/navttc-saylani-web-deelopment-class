import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Dashboard from "./components/dashboard/dashboard"

function App() {
 
  return (
    <div >

      <Router>

        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>


        <button onClick={
          () => {
            window.location.href = "./dashboard"
          }
        }> goto dashboard usin button click </button>


        <Switch>

          <Route exact={true} path="/">
            <Login />
          </Route>

         

          <Route path="/signup">
            <Signup />
          </Route>


          <Route path="/dashboard">
            <Dashboard />
          </Route>

          
        </Switch>

      </Router>

    </div>
  );
}

export default App;
