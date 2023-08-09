import React, { useState } from 'react'


export const EditToDoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    const handleSumbit = e => {
      e.preventDefault();

      editTodo(value, task.id);

      setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSumbit}>
        <input type='text' className='todo-input' value = {value} placeholder='Update Task' onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
