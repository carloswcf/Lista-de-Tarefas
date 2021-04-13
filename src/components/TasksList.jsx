import React, { useContext } from 'react';
import {FiTrash2} from 'react-icons/fi';

import { TodoListContext } from '../contexts/TodoListContext';

import '../styles/TasksList.css';

const TasksList = () =>{
  const {ListaDeTarefas, handleRemoveTask} = useContext(TodoListContext);
  
  return(
    <div className="container">
      <div className="tasks">
        <h2>Minhas Tarefas</h2>

        <ul className="list">
          {ListaDeTarefas.map((tarefa, index) => (
          <li key={index}>
              <input 
                type="checkbox"
              />
              
              <input 
                type="text"
                value={tarefa}
                readOnly={true}
                />
                <button
                  onClick={() => handleRemoveTask(index)}
                >
                    <FiTrash2/>
                </button>
          </li>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default TasksList;