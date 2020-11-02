import React from 'react'
import './style.scss'
import { useMutation } from '@apollo/react-hooks'
import UPDATE_TODO from '../../../../../utilities/apollo/mutation/updateTodo'
import DELETE_TODO from '../../../../../utilities/apollo/mutation/deleteTodo'
import getUserTodos from '../../../../../utilities/apollo/queries/getUserTodos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo, id }) => {

  const [updateTodo, { error: errorUpDateTodo }] = useMutation(UPDATE_TODO,
    {
      variables: { id: todo.id, input: { completed: true } },
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
      }],
      awaitRefetchQueries: true
    })

  const [deleteTodo, { error: errorDeleteTodo }] = useMutation(DELETE_TODO,
    {
      variables: { id: todo.id },
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
      }],
      awaitRefetchQueries: true
    })

  if (errorUpDateTodo || errorDeleteTodo) {
    alert('Something went wrong')
  }

  return (
    <div className="todo-card">
      <span>{todo.title}</span>
      <div className="todo-card-buttons">
        <FontAwesomeIcon onClick={updateTodo} icon={faCheck} />
        <FontAwesomeIcon onClick={deleteTodo} style={{ marginLeft: '12px' }} icon={faTimes} />
      </div>
    </div>
  )

}

export default Todo