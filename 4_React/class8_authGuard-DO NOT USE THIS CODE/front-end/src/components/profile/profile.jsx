
import { useGlobalState, useGlobalStateUpdate } from "./../../context/globalContext"

const Profile = () => {

    const globalState = useGlobalState()
    const setGlobalState = useGlobalStateUpdate()



    return (<div>

        <h1>Profile</h1>
        <button onClick={() => {
            setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
        }}

        >toggle</button>

        <p>this is a protexted route</p>

    </div>)
}
export default Profile;
