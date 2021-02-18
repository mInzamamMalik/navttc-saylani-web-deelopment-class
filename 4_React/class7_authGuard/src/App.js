import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom'


import Login from "./components/login/login"
import Signup from "./components/signup/signup"
import Dashboard from "./components/dashboard/dashboard"

import fakeAuth from "./components/auth"


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


        <Route exact={true} path="/">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>


        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>


      </Router>

    </div>
  );
}


function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true
        ? children
        : <p>You are not logged in. <Link to="/"> goto login poage</Link></p>
    }} />
  )
}

export default App;
