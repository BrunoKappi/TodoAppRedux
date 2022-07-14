    var initial 

    if (localStorage.getItem("Tarefas")) {
        var {tarefas : initial = []} = JSON.parse(localStorage.getItem("Tarefas"))                 
    }else{
        initial = []
    }


const tarefas = (state = initial, action) => {
switch (action.type) {
    case 'ADD_TAREFA': 
        return state.concat(action.novaTarefa)
    case 'CLEAR_ALL':
        return []
    case 'SET_TAREFAS':
            return action.tarefas
    default: 
        return state
}
}


export default tarefas
