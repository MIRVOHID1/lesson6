import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTask(){
  const dispatch = useDispatch()
  const [ taskName, setTaskName ] = useState("")


  const handleTask = (e) =>{
  e.preventDefault()
  if (taskName) {
    const payload = {
      taskName
    }
    dispatch({ type: "SEND_TASK", payload})
  }
  else{
    alert("inputlarni to'ldiring")
  }
  }

  return(
    <div className="col-3 mx-auto">
      <form onSubmit={handleTask}>
        <input className="form-control my-3" type="text" placeholder="Enter task" onChange={ e=> setTaskName(e.target.value)} />       
        <button type='submit' className='btn btn-info form-control'>Add task</button>
      </form>
    </div>
  )
}