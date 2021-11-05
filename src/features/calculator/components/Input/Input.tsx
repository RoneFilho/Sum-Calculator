import React from "react";
import "./Input.css";

interface InputProps{
    id: string; 
}

export const Input:React.FC<InputProps> = ({id}) => {
    return(
        <input type="number" id={id} />
    )
}