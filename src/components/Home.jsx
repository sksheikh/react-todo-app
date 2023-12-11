import React from 'react'
import Todos from './Todos'
import style from './home.module.css'

export default function Home() {
    const dummyTodos =[
        {
            id: 1,
            title: 'Todos title 1',
            description: 'Todos description 1'
        },
        {
            id: 2,
            title: 'Todos title 2',
            description: 'Todos description 2'
        }
    ]
  return (
    <div className={style.container}>
        <h1 style={{ color: 'white' }}>Todo App</h1>
      <Todos todos={dummyTodos} />
    </div>
  )
}
