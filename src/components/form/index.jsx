import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { HomeContext } from "../../context/homeContext"
import "../form/style.css"

export const Form = () => {

    const { onSubmitCalc } = useContext(HomeContext)

    const formSchema = yup.object().shape({
        amount: yup.string().required("Valor obrigatótio"),
        installments: yup.string().max(12).required("Máximo de 12 parcelas"),
        mdr: yup.string().required("Valor do MDR é obrigatório")
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSubmit((data) => {onSubmitCalc(data)})(event);
        }
    }

    const onSubmit = (event) => {
        handleSubmit((data) => {onSubmitCalc(data)})(event);
    }

    return(
        <div className="form-container">
            <form onKeyDown={onKeyDown} onSubmit={onSubmit} className="form">
                <h2>Simule a sua Antecipação</h2>
                
                <div className="form-text">
                    <label htmlFor="amount">Informe o valor da venda*</label>
                    <input 
                        type="text" 
                        className="input-value-entry"
                        id="amount"
                        {...register("amount")}
                        />
                        <span>{errors.amount?.message}</span>

                    <label htmlFor="installments">Em quantas parcelas*</label>
                    <input 
                        type="text" 
                        className="input-value-entry"
                        id="installments"
                        {...register("installments")}
                        />
                    <span>{errors.installments?.message}</span>

                    <label htmlFor="mdr">Informe o percentual de MDR*</label>
                    <input
                        type="text" 
                        className="input-value-entry"
                        id="mdr"
                        {...register("mdr")}
                        />
                    <span>{errors.mdr?.message}</span>
                </div>
            </form>
        </div>
    )
}

