import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </article>
  )
}
