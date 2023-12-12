import React from 'react'

import style from '../assets/css/newtodo.module.css'

export default function Newtodo() {
  return (
    <form className={style.form}>

    <div className={style['form-field']}>
        <label htmlFor="title">Title:</label>
        <input type="text" name='title' id='title' />
    </div>

    <div className={style['form-field']}>
        <label htmlFor="description">Description: </label>
        <textarea type="text" name="description" 
            id="description" ></textarea>
    </div>

   
    <button type='submit'>add todo</button>
    

    </form>
  )
}
