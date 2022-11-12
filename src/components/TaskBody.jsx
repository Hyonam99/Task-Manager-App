import React from 'react'
import TaskNavigation from '../components/TaskNavigation';
import Alltask from '../pages/Alltask'
import PendingTask from '../pages/PendingTask'
import CompletedTask from '../pages/CompletedTask'
import { useState, useEffect } from 'react'
// import axios from 'axios';

const TaskBody = () => {

  const [alluser, setAllUser] = useState([]) 
  
  const [allItems, setAllItems] = useState(true)  
  const [pendingitems, setPendingitems] = useState(false)  
  const [completeditems, setCompleteditems] = useState(false)  
  const Todo_GetData_LocalStorage = JSON.parse(localStorage.getItem('All_Tasks')) || []
  const depLen = Todo_GetData_LocalStorage.length
  
  let Todo_UpdateData;
  // const  base = "https://jsonplaceholder.typicode.com/todos";




   useEffect (()  => { 
      setAllUser(Todo_GetData_LocalStorage)
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