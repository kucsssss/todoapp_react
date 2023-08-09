import React, { useState } from 'react'


export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSumbit = e => {
      e.preventDefault();

      addTodo(value);

      setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSumbit}>
        <input type='text' className='todo-input' value = {value} placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
