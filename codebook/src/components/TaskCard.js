import React from 'react'

const TaskCard = ({task, deleteHandler, abc}) => {
    
  return (
    <div>
        <li className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name} - {abc}</span>
            <button onClick={() => deleteHandler(task.id)} className="delete">Delete</button>
        </li>
    </div>
  )
}

export default TaskCard
