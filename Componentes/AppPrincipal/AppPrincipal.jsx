import React, { useState } from "react";
import './AppPrincipal.css'
import TaskList from "../TaskList/TaskList";

function AppPrincipal(){

    const [listaTarefas] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function AddTarefas(){
        let tarefas = document.getElementById('input-adicionar').value
        if(tarefas.trim() !== ""){
            listaTarefas.push(tarefas)
            setInputValue("");
        }else{
            console.log("Digite algo valido")
        }
        
    }

    return(
        <div className="btn-input">

            <input type="text"  
            id="input-adicionar" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>

            <button className="btn-adicionar" onClick={AddTarefas}>Adicionar</button>
            <TaskList tarefasList={listaTarefas}/>
        </div>

    )
    
}

export default AppPrincipal;