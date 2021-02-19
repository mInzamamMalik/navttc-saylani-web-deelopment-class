
import * as React from "react"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    useLocation,
    useHistory
} from 'react-router-dom'

import fakeAuth from "../auth"

function Login() {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)

    const { state } = useLocation()

    const login = () => fakeAuth.authenticate(() => {
        setRedirectToReferrer(true)
    })

    if (redirectToReferrer === true) {
        return <Redirect to={'/dashboard'} />
    }

    return (
        <div>

            <h3>this is login page</h3>
            <button onClick={login}>Log in</button>
        </div>
    )
}
export default Login;
