import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext"
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "./../../core"


function Login() {

    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()


    function handleLogin(e) {
        e.preventDefault()
        axios({
            url: baseUrl + "/login",
            method: "POST",
            data: {
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value
            },
            withCredentials: true
        }).then(function (response) {
            console.log("response: ", response.data);

            setGlobalState(prev => {
                return { ...prev, loginStatus: true }
            })

        }).catch(function (error) {
            // handle error
            console.log("error: ==== ", error);
            if (error && error.response && error.response.status) {
                console.log("error ==============> ", error.response.status);
            }

        })
    }

    return (
        <div>
            <h1>Login:</h1>
            <form onSubmit={handleLogin}>

                Email: <input type="email" id="email" placeholder="john@gmail.com" />
                <br />
                Password: <input type="password" id="password" placeholder="123456" />
                <br />

                <button>Log in</button>
            </form>
            <br />
            <Link to="/forget_password">forget password</Link>
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => {
                setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
            }}
            >toggle</button>
            {JSON.stringify(globalState)}        </div>
    )
}
export default Login;
