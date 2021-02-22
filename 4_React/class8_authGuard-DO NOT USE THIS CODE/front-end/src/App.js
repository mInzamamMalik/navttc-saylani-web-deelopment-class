import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import React, { useContext } from "react";


import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import ForgetPassword from "./components/forgetPassword/forgetPassword"

import Dashboard from "./components/dashboard/dashboard"
import Profile from "./components/profile/profile"

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
          {(globalState.loginStatus === true) ?
            <ul>
              <li style={navStyles}>  <Link to="/">Dashboard</Link>     </li>
              <li style={navStyles}>  <Link to="/profile">Profile</Link>     </li>
              &nbsp;<button>Logout</button>

            </ul> :
            <ul>
              <li style={navStyles}>  <Link to="/">login</Link>     </li>
              <li style={navStyles}>  <Link to="/signup">Signup</Link>     </li>
            </ul>}

          {/* <button style={navStyles} onClick={() => setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))} >toggle</button>
          {"===>" + JSON.stringify(globalState)} */}

        </nav>



        {/* public routes */}
        {(globalState.loginStatus === false) ?
          <>
            <Route exact={true} path="/">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forget_password">
              <ForgetPassword />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
          : null}


        {/* private routes */}

        {(globalState.loginStatus === true) ?

          <>
            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </>
          : null}







      </Router >
    </div>
  );
}

export default App;
