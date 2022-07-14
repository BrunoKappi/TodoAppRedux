import TarefaForm from './TarefaForm'
import Tarefa from './Tarefa'
import { connect } from 'react-redux'
import { addTarefaAction, clearAllTarefas, setTarefas } from '../store/actions/tarefasActions'
import { v4 as uuidv4 } from 'uuid';

const ListaTarefas = (props) => {


    function addTarefa(tarefaToAdd) {
        if (!tarefaToAdd)
            return        
        const newTarefa = { id: uuidv4(), descricao: tarefaToAdd, completa: false }
        props.dispatch(addTarefaAction(newTarefa))        
    }

    function toggleCheckbox(id) {
        const TarefasCopia = [...props.tarefas]
        const TarefaToggle = TarefasCopia.find(tarefa => tarefa.id === id)
        TarefaToggle.completa = !TarefaToggle.completa
        props.dispatch(setTarefas(TarefasCopia))       
    }

    function LimparTudo() {           
       props.dispatch(clearAllTarefas())
    }

    function clearConcluded() {
        const apenasConcuidas = props.tarefas.filter((tarefa) => {            
                return !tarefa.completa === true            
        })
        props.dispatch(setTarefas(apenasConcuidas))       
     }
 

    return (
        <div>
            <TarefaForm clearConcluded={clearConcluded} clearAll = {LimparTudo} addTarefa={addTarefa} />

            <br></br>

            {props.tarefas.map(tarefaItem => {
                return <Tarefa key={tarefaItem.id} tarefa={tarefaItem} toggleCheckbox={toggleCheckbox} />
            })}

        </div>
    )
}


const ConnectedListaTarefas = connect((state) => {
    return {
        tarefas: state.tarefas
    }
})(ListaTarefas)

export default ConnectedListaTarefas

