import React from 'react'
import '../stylings/Main.css';


import { useState } from 'react';
import Taskheader from '../components/Taskheader'
import TaskBody from '../components/TaskBody';


const Main = () => {
  
  const Iconstyle = {fontSize: '14px', color: 'purple'}

  return (
    <section className="main-todo-section">
      
        <Taskheader/>

        <TaskBody />

        </section>
  )
}

export default Main