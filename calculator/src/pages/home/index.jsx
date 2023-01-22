import { Days } from "../../components/day/Day"
import { Form } from "../../components/form"
import "../home/style.css"

export const Home = () => {

    return(
        <div className="home-container">
            <Form />
            <Days />
        </div>
    )
}