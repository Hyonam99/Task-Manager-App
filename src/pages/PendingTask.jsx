import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const PendingTask = () => {
  return (
    <section className="Todo-body">
    <ul>
      <li>PENDING TASK <span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
    </ul>
  </section>
  )
}

export default PendingTask