import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/react-hooks'
import CREATE_TODO from '../../../../../utilities/apollo/mutation/createTodo'
import getUserTodos from '../../../../../utilities/apollo/queries/getUserTodos'
import './style.scss'
const Add = ({ setShowAddTodo, id }) => {
  const [title, setTitle] = useState('')

  const [createTodo, { error }] = useMutation(CREATE_TODO, {
    variables: { input: { title, completed: false } },
    refetchQueries: [{
      query: getUserTodos,
      variables: { 
        id,
        options: {
          operators: {
            kind: "LIKE",
            field: "completed",
            value: "false"
          }
        }
      }
    }]
  })
  
  if (error) {
    alert('Something went wrong')
  }

  const create = ()=> {
    createTodo()
    setShowAddTodo(false)
  }

  return (
    <div className="todos-add-todo-container">
      <input placeholder="Add tags" onChange={(e) => setTitle(e.target.value)} />
      <div className="todos-add-todo-buttons">
        <FontAwesomeIcon onClick={create} icon={faCheck} />
        <FontAwesomeIcon style={{ marginLeft: '12px' }} onClick={() => setShowAddTodo(false)} icon={faTimes} />
      </div>
    </div>
  )
}

export default Add