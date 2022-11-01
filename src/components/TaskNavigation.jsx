import React from 'react'
import {Link} from 'react-router-dom'

const TaskNavigation = ({allItem, pendingItem, completeItem}) => {

  return (
    
    <div className='task-navigation-panel'>

      <Link onClick={() => {allItem(true); pendingItem(false); completeItem(false); }}>All tasks</Link>
      <Link onClick={() => {allItem(false); pendingItem(true); completeItem(false); }}>Ongoing tasks</Link>
      <Link onClick={() => {allItem(false); pendingItem(false); completeItem(true); }}>Completed tasks</Link>
      
    </div>
  )
}

export default TaskNavigation