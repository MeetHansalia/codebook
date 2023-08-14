import React from 'react'
import './TaskCard.css'


const TaskCard = ({task, deleteHandler, abc}) => {
    
  return (
    <div className="taskcard">
        <li className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name} </span>
            <button onClick={() => deleteHandler(task.id)} className="delete">Delete</button>
        </li>
    </div>
  )
}

export default TaskCard
