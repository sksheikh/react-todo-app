import React from 'react'

import Todo from './Todo'
import style from './todos.module.css'

export default function Todos(props) {
    const {todos} = props;
  return (
    <section className={style.todos}>
      {todos.map((todo) => 
      <Todo key={todo.id} todo={todo} />)}
    </section>
  )
}
