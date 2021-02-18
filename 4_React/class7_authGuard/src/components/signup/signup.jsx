import {
    useHistory
} from "react-router-dom";



function Signup() {

    var history = useHistory();
    function handleClick() {
        history.push("/login"); 
        
        // docs: 
        // https://stackoverflow.com/a/42121109/4378475
        // https://reactrouter.com/web/api/history
    }

    return (
        <div>
            <h1>Signup</h1>


            <br /> name:  <input type="text" />
            <br /> email:  <input type="text" />
            <br /> password:  <input type="text" />
            <br /> re-password:  <input type="text" />
            <br /> <button>Submit</button>

            <br /><button onClick={handleClick}> I already have an account take me back to login page</button>
        </div>


    )
}
export default Signup;
