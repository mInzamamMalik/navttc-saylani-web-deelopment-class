import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext"
import axios from "axios";

function Login() {

    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()


    function handleLogin() {
        axios({
            url: "https://reqres.in/api/login", // these are fake apis for testing purposes. see more: https://reqres.in/
            method : "POST", 
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then(function(response){
            console.log("response: ", response.data);

            setGlobalState(prev=>{
                return {...prev, loginStatus: true, token: response.data.token}
            })

        })
    }

    return (
        <div>
            <h1>Login:</h1>

            Email: <input type="email" />
            <br />
            Password: <input type="password" />
            <br />

            <button onClick={handleLogin}>Log in</button>

            {JSON.stringify(globalState)}
        </div>
    )
}
export default Login;
