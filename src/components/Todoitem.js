import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edittask, removetask } from '../crud/todoslice/Todoslice';
import EditTodo from './EditTodo';

function Todoitem({todo}) {
  const dispatch = useDispatch();
  
  return (
    <div className={`todoitem ${todo.isDone ? "done":"notdone"} `}>
      <div >
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      </div>
      <span onClick={()=>dispatch(edittask({id:todo.id}))}>{
        todo.isDone?"Done":"NotDone"
        }</span>
      <EditTodo id={todo.id}/>
      <button onClick={()=>dispatch(removetask({id:todo.id}))}>Delete</button>
    </div>
  )
}

export default Todoitem