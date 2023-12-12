import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6"

import style from './todo.module.css'

export default function Todo(props) {
    const {id,title,description} = props.todo;

  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        <div>
            <button className={style.btn}>
                <FaRegTrashCan />
            </button>
        </div>
    </article>
  )
}
