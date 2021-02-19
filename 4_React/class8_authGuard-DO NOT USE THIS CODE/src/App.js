import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import React, { useContext } from "react";


import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Dashboard from "./components/dashboard/dashboard"

import { useGlobalState, useGlobalStateUpdate } from "./context/globalContext"

function App() {

  const globalState = useGlobalState()
  const setGlobalState = useGlobalStateUpdate()


  const themeStyles = {
    backgroundColor: globalState.darkTheme ? "#333" : "#ccc",
    color: globalState.darkTheme ? "#ccc" : "#333",
    padding: "2rem",
  }
  const navStyles = {
    display: "inline",
    border: globalState.darkTheme ? "1px solid white" : "1px solid black",
    padding: "5px",
    marginLeft: "5px"
  }

  return (
    <div style={themeStyles}>

      <Router>

        <nav>
          <ul>
            <li style={navStyles}>  <Link to="/">login</Link>     </li>
            <li style={navStyles}>  <Link to="/signup">Signup</Link>     </li>
            <li style={navStyles}>  <Link to="/dashboard">Dashboard</Link>     </li>
            <button style={navStyles} onClick={() => setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))} >toggle</button>

            {"===>" + JSON.stringify(globalState)}

          </ul>
        </nav>



        {(globalState.loginStatus === false) ?

          <Route exact={true} path="/">
            <Login />
          </Route> :

          <Route path="/">
            <Dashboard />
          </Route>}


        <Route path="/signup">
          <Signup />
        </Route>




      </Router >
    </div>
  );
}

export default App;
