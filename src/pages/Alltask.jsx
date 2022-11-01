import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
// import {useState} from 'react'

const Alltask = ({allUsers}) => {



  return (
  <section className="Todo-body">
    <ul>
      {allUsers.map((eUser) => 
      <li>{eUser.id} - {eUser.title}<span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
      
      )}
      
    </ul>
    
  </section>
  )
}

export default Alltask