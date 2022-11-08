import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {useState} from 'react'

const Alltask = ({allUsers, setuse}) => {

  const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  const [currentTodo, setCurrentTodo] = useState(false);

  function editTodo(event){
    setCurrentTodo({ event});
    console.log(currentTodo);
  }

  function compTodoState(id){
    console.log(id)
    displayUsers.map((user) => {
      if(user.id === id && user.completed === false){
        user.completed = true;
      }

      else if(user.id === id && user.completed === true){
        user.completed = false;
      }
      setuse([...allUsers, user])
    })
    // id.completed = true;
    
  }

  function deleteTodo(id){

  const removeItem = displayUsers.filter((eUser) => {
    // return the rest of the todos that don't match the item we are deleting
    return eUser.id !== id;
  });
  // removeItem returns a new array - so now we are setting the todos to the new array
  setuse(removeItem);

}


const displayUsers = allUsers.slice(0, 20);

  return (
  <section className="Todo-body">
    <ul>
      {displayUsers.map((eUser) =>       
      <li key={eUser.id} className={eUser.completed === true ? 'cancel' : ''}>{eUser.id} - {eUser.title}<span className='Todo-icons'><FaCheckCircle className={eUser.completed === true ? 'doneall' : ''} onClick={()=>{compTodoState(eUser.id)}}/> <FaTrashAlt onClick={()=>{deleteTodo(eUser.id)}}/> <FaEdit onClick={()=>{editTodo(eUser)}}/></span></li>
      
      )}

    </ul>
    
  </section>
  )
}

export default Alltask