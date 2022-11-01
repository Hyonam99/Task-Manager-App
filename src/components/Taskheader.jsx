import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Taskheader = ({addT, takeHome}) => {

  const Iconstyle = {fontSize: '14px', color: 'purple'}
  const Inputstyle = {color: 'purple'}
  return (
    
    <section className="Todo-header">
        <h4>What's your plan for today</h4>

        {takeHome ? (<input type={'text'} style={Inputstyle} />) : (
        <input type={'text'} />) }
        
        <div className='Todo-action-buttons-holder'>
          <Link to='/Alltask'><button>All</button></Link>
          <button onClick={addT}><FaPlus style={Iconstyle}/>  Add</button>
          <button>Theme</button>
        </div>
      </section>
  )
}

export default Taskheader