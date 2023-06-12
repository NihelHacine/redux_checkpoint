import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addnewtask } from '../crud/todoslice/Todoslice';

function Addtodo() {
    const dispatch = useDispatch ();
    const [task, settask] = useState({
        id:Math.random(),
        title: "",
        description:"",
        isDone:false,
    })
  return (
    <div className='addnt'>
        <input type = "text" onChange={(e)=>settask({...task,title:e.target.value})}/>
        <input type = "text" onChange={(e)=>settask({...task,description:e.target.value})}/>
        <Button variant="primary" onClick={()=> dispatch(addnewtask(task))}>Add new task</Button>
    </div>
  )
}

export default Addtodo