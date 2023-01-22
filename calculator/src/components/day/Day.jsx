import { useContext } from "react"
import { HomeContext } from "../../context/homeContext"
import "../day/style.css"

export const Days = () => {
    const { response } = useContext(HomeContext)
   
    return(
        <div className="response-container">
            <i><h4>VOCÊ RECEBERÁ:</h4></i>
            <hr />
            <div className="days-container">
                <i> <p>Amanhã <b> R$ {response[1] ? response[1].toLocaleString("pt-br", {style: "currency", currency:"BRL"}) : "0,00"}</b></p></i>
                 <i><p>Em 15 dias <b> R$ {response[15] ? response[15].toLocaleString("pt-br", {style: "currency", currency:"BRL"}) : "0,00"}</b></p></i>
                 <i><p>Em 30 dias <b> R$ {response[30] ? response[30].toLocaleString("pt-br", {style: "currency", currency:"BRL"}) : "0,00"}</b></p></i>
                 <i><p>Em 90 dias <b> R$ {response[90] ? response[90].toLocaleString("pt-br", {style: "currency", currency:"BRL"}) : "0,00"}</b></p></i>
            </div>
        </div>
    )
}