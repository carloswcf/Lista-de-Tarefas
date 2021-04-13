import React, { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext({});

const TodoListProvider = (props) => {
  const[taskTitle, setTaskTitle] = useState("");
  const[ListaDeTarefas, SetListaDeTarefas] = useState([]);

  useEffect(() =>{
    const minhaLista = localStorage.getItem('lista-de-tarefas');
    
    if(minhaLista){
      SetListaDeTarefas(JSON.parse(minhaLista));
    }

  },[]);
  
  //Função vai ser chamada quando clicar no botão de adicionar
  const handleCreateNewTask = () =>{
    SetListaDeTarefas([...ListaDeTarefas, taskTitle]);

    localStorage.setItem('lista-de-tarefas', JSON.stringify([...ListaDeTarefas, taskTitle]) );

    setTaskTitle("");
  }

  const handleRemoveTask = (indicetarefa) => {
    const novaListaDeTarefas = ListaDeTarefas.filter(
      (tarefa, index) => {
        return index !== indicetarefa;
      });
      
      SetListaDeTarefas(novaListaDeTarefas);
      localStorage.setItem('lista-de-tarefas', JSON.stringify(novaListaDeTarefas));
  }
  
  return(
    <TodoListContext.Provider value={{
      taskTitle,
      setTaskTitle,
      handleCreateNewTask,
      ListaDeTarefas,
      handleRemoveTask,
    }}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListProvider;
