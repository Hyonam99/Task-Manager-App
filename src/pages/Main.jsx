import React from 'react'
import './Main.css'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { useState } from 'react';
import Taskheader from './Taskheader';


const Main = () => {

  const [Tasks, setTasks] = useState([
    {
      id: 1,
      title: 'everything',
      completed: false
    },
  ]
  )




  const addTo = () => {
    setTasks(Tasks)

  }
   

  const Iconstyle = {fontSize: '14px', color: 'purple'}
  return (
    <section className="main-todo-section">
      
        <Taskheader addT={addTo}/>

      <section className="Todo-body">
        <ul>
          <li>{Tasks} <span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
          <li>Reimburse <span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
          <li>Sell aggressively <span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
        </ul>
      </section>
    </section>
  )
}

export default Main