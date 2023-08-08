
import { useState } from 'react';
import React from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';

const TaskList = ({xyz}) => {

    const[tasks, setTask]=useState([
        {id:5271, name:"Record React Lectures", completed:true}, 
        {id:7825, name:"Edit React Lectures", completed:false}, 
        {id:8391, name:"Watch Lectures", completed:false}
      ])
    
      const [show, setShow]= useState(false);
    
    
      function deleteHandler(id){
        setTask(tasks.filter(task => id !== task.id))
      }
    
  return (
    <div>
       <h1>Task List </h1>
      <ul>
        <button className='trigger' onClick={() =>setShow(!show)}>Toggle</button>
        {show &&
         tasks.map((task) =>(
        <TaskCard key={task.id} abc={xyz}  task={task} deleteHandler={deleteHandler}/>
        )) }
      </ul>
      <BoxCard result ="success">
        <p className="title">Lorem ipsum dolor sit amet</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, quia.</p>
      </BoxCard>
      <BoxCard result ="warning">
          <p className="title">Lorem ipsum dolor sit.</p>
          <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem consequuntur dicta sequi earum. Cupiditate, dolorem neque. Alias nam impedit qui, praesentium cupiditate architecto consequatur tempora neque libero, accusantium sapiente! Ab praesentium porro, nemo aliquam eveniet at aspernatur quod amet, deserunt nihil dolorem laudantium placeat aut eius animi voluptatibus, rerum veniam?</p>
          <p> lorem</p>
      </BoxCard>
    </div>
  )
}

export default TaskList
