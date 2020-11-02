import React, { useState } from 'react'
import ViewAll from './ViewAll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Todo from './Todo'
import Add from './Add'
import './style.scss'

const Todos = ({ todos, id }) => {
  const [showAddTodo, setShowAddTodo] = useState(false)

  const [showAll, setShowAll] = useState(false)

  return (
    <div className="todos-contener">
      <div className="todos-title">
        <div>
          <span>To-do's</span>
        </div>
        <div className="todos-title-add-button" onClick={() => setShowAddTodo(true)}>
          <FontAwesomeIcon color={"#7bdccd"} icon={faPlusCircle} />
        </div>
      </div>
      {showAddTodo && <Add id={id} setShowAddTodo={setShowAddTodo} />}
      <div className="todo-contener">
        {todos.length <= 5 && todos.map(todo => <Todo key={todo.id} id={id} todo={todo} />)}
        {!showAll ? todos.slice(0, 5).map(todo => <Todo key={todo.id} id={id} todo={todo} />) : todos.map(todo => <Todo key={todo.id} id={id} todo={todo} />)}
      </div>
      <ViewAll showAll={showAll} setShowAll={setShowAll} todosLength={todos.length} />
    </div>
  )
}

export default Todos