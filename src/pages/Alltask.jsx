import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import {useState} from 'react'

const Alltask = ({allUsers}) => {



  return (
  <section className="Todo-body">
    <ul>
      {allUsers.slice(0, 10).map((eUser) => 
      <li key={eUser.id}>{eUser.id} - {eUser.todo}<span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
      
      )}

    </ul>
    
  </section>
  )
}

export default Alltask