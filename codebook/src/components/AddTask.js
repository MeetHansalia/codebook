import React, { useState } from 'react'
import './AddTask.css'

const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue]=useState("");
    const [progress, setProgress]= useState(false)
    // const taskRef = useRef("");



    const changeHandler=(event)=>{
        setTaskValue(event.target.value)
        
    }

    const resetHandler=()=>{
        setTaskValue('');
        setProgress(false)
        
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        
        const task ={
            id: Math.floor(Math.random() * 1000000),
            name: taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task])
        console.log(task)
        resetHandler();
    }

  return (
    <section className="addtask">
      <form onSubmit={submitHandler}>        
        <input onChange={changeHandler} type="text" name="task" id="task" placeholder="Task Name" autoCapitalize='off' value={taskValue} />
        <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
            <option value="false">Pending</option>
            <option value="true">Completed</option>
        </select>

        <span onClick={resetHandler} className="reset">Reset</span>
        <button type="submit">Add Task</button>
      </form>
       <p>{taskValue}</p> 
       
    </section>
  )
}

export default AddTask
