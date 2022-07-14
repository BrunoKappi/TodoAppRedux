import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './components/store/store';
import { Provider } from 'react-redux'
import { db } from './components/firebase/index'
import { collection, getDocs } from "firebase/firestore";
import { setTarefas } from './components/store/actions/tarefasActions'


/////////////FIREBASE///////////////////
const usersCollectionRef = collection(db, "tarefas");

getDocs(usersCollectionRef).then((data) =>{
    const dados = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log("Dados do Firebase",dados)
    store.dispatch(setTarefas(dados))
})

/////////////FIREBASE///////////////////


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>


);


