import React, { useState } from 'react'

import style from '../assets/css/newtodo.module.css'

export default function Newtodo(props) {
  const [todo, setTodo] = useState({title: '', description: ''})
  const {title, description} = todo;

  const handleChange = (e) => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
    setTodo({title: '', description: ''})
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>

    <div className={style['form-field']}>
        <label htmlFor="title">Title:</label>
        <input type="text" 
          name='title' 
          id='title'
          value={title}
          onChange={handleChange} />
    </div>

    <div className={style['form-field']}>
        <label htmlFor="description">Description: </label>
        <textarea type="text" name="description" 
            id="description"
            value={description} 
            onChange={handleChange}></textarea>
    </div>

   
    <button type='submit'>add todo</button>
    

    </form>
  )
}
