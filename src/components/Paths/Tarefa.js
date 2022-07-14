import React from 'react'
import './css/Tarefa.css'

export default function Tarefa({ tarefa, toggleCheckbox }) {

    function handleCheckboxChange(e) {
        toggleCheckbox(tarefa.id)
    }

   
    return (
        <div>

    
            <label className="container"  > {tarefa.descricao}
                <input onChange={handleCheckboxChange} type="checkbox" checked = {tarefa.completa === true ? 'checked' : ''}/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}
