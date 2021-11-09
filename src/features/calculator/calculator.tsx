import React from "react";
import { Input } from "features/calculator/components/Input";
import './calculator.css';

export const Calculator: React.FC = () => {
    const Soma = () =>{
        const n1 = document.getElementById("number1") as HTMLInputElement
        const n2 = document.getElementById("number2") as HTMLInputElement
        const sum = parseInt(n1.value) + parseInt(n2.value)
        const result = document.getElementById("resultado") as HTMLParagraphElement
        result.innerHTML = sum.toString()
    }
    return(
        <div className="Calculadora">
            <h1>{process.env.REACT_APP_HEADER}</h1>
            <Input id="number1" />
            <Input id="number2" />
            <div>
                <button onClick={Soma}>+</button>
            </div>
            <div>
                <label id="resultado"></label>
            </div>
        </div>
    )
}