import React from 'react'
import TaskNavigation from '../components/TaskNavigation';
import Alltask from '../pages/Alltask'
import PendingTask from '../pages/PendingTask'
import CompletedTask from '../pages/CompletedTask'
import { useState, useEffect } from 'react'
import axios from 'axios';

const TaskBody = () => {

  const [alluser, setAllUser] = useState([])  

  const [allItems, setAllItems] = useState(true)  
  const [pendingitems, setPendingitems] = useState(false)  
  const [completeditems, setCompleteditems] = useState(false)  
  let Todo_GetData_LocalStorage = JSON.parse(localStorage.getItem('AllTodo'));
  let Todo_StoreData_LocalStorage ; 
  let Todo_UpdateData;
  const  base = "https://jsonplaceholder.typicode.com/todos";

   useEffect (()  => { 
     axios.get(base)
    .then((data) => {
      Todo_StoreData_LocalStorage = localStorage.setItem('AllTodo', JSON.stringify(data.data));
      setAllUser(Todo_GetData_LocalStorage)
    })

    .catch((error => {
      console.log(error)
    }))

  }, [])


  return (
    <>  

     <TaskNavigation 
        allItem={setAllItems}
        pendingItem={setPendingitems}
        completeItem={setCompleteditems}
     />

  {allItems && <Alltask allUsers={alluser} setuse={setAllUser}/>}
  {pendingitems && <PendingTask allUsers={alluser}/>}
  {completeditems && <CompletedTask allUsers={alluser}/>}

  </>

  )
}

export default TaskBody