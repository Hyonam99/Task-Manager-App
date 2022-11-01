import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const CompletedTask = () => {
  return (
    <section className="Todo-body">
    <ul>
      <li>COMPLETED TASK <span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
    </ul>
  </section>
  )
}

export default CompletedTask