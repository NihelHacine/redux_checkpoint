import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import Addtodo from './Addtodo'


function Todolist() {
  const todos = useSelector(state => (state.todo.todolist))
  console.log(todos)
  return (
    <div className='todolist'>
      <Addtodo/>
      {todos.map((todo)=> (<Todoitem todo={todo}/>) )}
    </div>
  )
}

export default Todolist