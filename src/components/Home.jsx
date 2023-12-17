import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import style from '../assets/css/home.module.css'
import Newtodo from './Newtodo'

export default function Home() {
    const [todos, setTodos] = useState([]);
  
    const handleNewTodo = (todo) => {
      setTodos([...todos, {id: uuidv4(),todo}])
    }

    const handleRemoveTodo = (id) => {
      setTodos((prevTodos) => {
        const filteredTodo = prevTodos.filter((todo)=> todo.id !== id);
        return filteredTodo;
      });
    }
  return (
    <div className={style.container}>
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <Newtodo onNewTodo={handleNewTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}
