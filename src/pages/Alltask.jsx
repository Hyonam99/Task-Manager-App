import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {useState} from 'react'
import Swal from "sweetalert2";

const Alltask = ({allUsers, setuse}) => {

  const displayUsers = allUsers.slice(0, 20);

  const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  const [currentTodo, setCurrentTodo] = useState(false);

  function editTodo(task){
    console.log(task)

    let inputVal = title
    let ntitle = inputVal

    const newTitle = displayUsers.map(obj =>
      obj.id === task.id ? { ...obj, title: ntitle } : obj
  );
    
    const {id, completed, title} = task
       
    
     const { value: input } = Swal.fire({
      title: 'Edit this todo app',
      input: 'text',
      inputLabel: 'Your task details is shown below',
      inputValue: inputVal,
      showCancelButton: true,

      // inputValidator: (value) => {
      //   if (value) {
      //     Swal.fire(`Your IP address is ${inputValue}`)
      //   }
      // }
    })
    .then((result) => {

    
      if (result.isConfirmed) {
        
      
      setuse(newTitle);
      localStorage.setItem('All_Tasks', JSON.stringify(newTitle))
        // Swal.fire("Well done!", `Your task has been edited to ${inputVal}`, "success")
        
      }
    })
    
    
  }

  function compTodoState(task){
    
    const newTodo = displayUsers.map(obj =>
      obj.id === task.id && obj.completed === false ? { ...obj, completed: true } : obj.id === task.id && obj.completed === true ? { ...obj, completed: false } : obj
      
  );
  setuse(newTodo);
  localStorage.setItem('All_Tasks', JSON.stringify(newTodo))
  }

  function deleteTodo(id){

  const removeItem = displayUsers.filter((eUser) => {
    // return the rest of the todos that don't match the item we are deleting
    return eUser.id !== id;
  });
  // removeItem returns a new array - so now we are setting the todos to the new array
  setuse(removeItem);
  
  localStorage.setItem('All_Tasks', JSON.stringify(removeItem))
}




  return (
  <section className="Todo-body">
    <ul>
      {displayUsers.map((eUser) =>       
      <li key={eUser.id} className={eUser.completed === true ? 'cancel' : ''}>{eUser.id} - {eUser.title}<span className='Todo-icons'><FaCheckCircle className={eUser.completed === true ? 'doneall' : ''} onClick={()=>{compTodoState(eUser)}}/> <FaTrashAlt onClick={()=>{deleteTodo(eUser.id)}}/> <FaEdit onClick={()=>{editTodo(eUser)}}/></span></li>
      
      )}

    </ul>
    
  </section>
  )
}

export default Alltask



