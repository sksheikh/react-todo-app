import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6"

import style from '../assets/css/todo.module.css'

export default function Todo(props) {
    const {title,description} = props.todo;
    const {id} = props
    // console.log(id);

    const handleClick = ()=> {
        props.onRemoveTodo(id);
    }

  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        <div>
            <button className={style.btn}
                onClick={handleClick}>
                <FaRegTrashCan />
            </button>
        </div>
    </article>
  )
}
