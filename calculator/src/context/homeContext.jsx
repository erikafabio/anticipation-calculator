import { useState } from "react";
import { createContext } from "react";
import { api } from "../service/index"

export const HomeContext = createContext()

const HomeProviders = ({ children }) => {

    const [response, setResponse] = useState([])

    const onSubmitCalc = (data) => {
        api.post("", data)
        .then((resp) => {
            setResponse(resp.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }
console.log(response)
    return(
        <HomeContext.Provider value={{onSubmitCalc, response}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProviders