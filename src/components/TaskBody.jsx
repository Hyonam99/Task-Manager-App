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

  const  base = "https://mockend.com/Hyonam99/Task-Manager-App/posts";

   useEffect (()  => { 
     axios.get(base)
    .then((data) => {
      console.log(data.data)
      setAllUser(data.data)
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

  {allItems && <Alltask allUsers={alluser}/>}
  {pendingitems && <PendingTask allUsers={alluser}/>}
  {completeditems && <CompletedTask allUsers={alluser}/>}

  </>

  )
}

export default TaskBody