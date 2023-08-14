import './TaskList.css'
import { useState } from 'react';
import React from 'react'
import TaskCard from './TaskCard';

 

const TaskList = ({tasks, setTasks}) => {

   
      const [show, setShow]= useState(false);
    
    
      function deleteHandler(id){
        setTasks(tasks.filter(task => id !== task.id))
      }
    
  return (
    <div className="tasklist">
      <ul>
        <div className="header">
          <h1>Task List </h1>
          <button className='trigger' onClick={() =>setShow(!show)}>{show ? "Hide button": "Show"}</button>
        </div>
        {show &&
         tasks.map((task) =>(
        <TaskCard key={task.id} task={task} deleteHandler={deleteHandler}/>
        )) }
      </ul>
    
    </div>
  )
}

export default TaskList
