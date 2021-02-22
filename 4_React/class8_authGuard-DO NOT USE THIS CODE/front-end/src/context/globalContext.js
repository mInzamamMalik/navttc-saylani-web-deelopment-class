
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalStateContext = React.createContext()
const GlobalStateUpdateContext = React.createContext()

export const useGlobalState = () => useContext(GlobalStateContext)
export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)

export function GlobalStateProvider({ children }) {

    useEffect(() => {


        axios.post('http://localhost:5000/profile')
            .then(function (response) {
                // handle success
                console.log("response: ", response.status);
            })
            .catch(function (error) {
                // handle error
                
                if(error && error.response && error.response.status){
                    console.log("error ==============> ", error.response.status);
                    setData(prev => ({ ...prev, login: false }))
                }

            })
            .then(function () {
                // always executed
            });

        return () => {
            console.log("cleanup")
        }
    }, [])




    const [data, setData] = useState({
        user: null,
        darkTheme: false,
        loginStatus: false,
        token: null
    })

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
} 