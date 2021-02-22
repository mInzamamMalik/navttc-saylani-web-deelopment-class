
import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext"

const Dashboard = () => {

    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()



    return (<div>

        <h1>Dashboard</h1>

        <p>this is a protected route</p>


        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={() => {
            setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
        }}
        >toggle</button>
        {JSON.stringify(globalState)}
    </div>)
}
export default Dashboard;
