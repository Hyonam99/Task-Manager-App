import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const CompletedTask = ({allUsers}) => {

  const displayUsers = allUsers.filter(ussser => ussser.Completed === true)

  return (
    <section className="Todo-body">
    <ul>
      {displayUsers.slice(0, 20).map((eUser) => 
      <li key={eUser.id} > {eUser.id} - {eUser.title} - {eUser.Completed}<span className='Todo-icons'><FaCheckCircle /> <FaTrashAlt /> <FaEdit /></span></li>
      
      )}

    </ul>
    
  </section>
  )
}

export default CompletedTask