import React from 'react';
import './style.scss'
const ViewAll =({showAll, setShowAll, todosLength})=> {
  return (
    <div className={showAll ? "todo-view-all" : "todo-view-all-short todo-view-all"} onClick={()=> setShowAll(!showAll)}>
      {showAll ? <span>Showing {todosLength} to {todosLength} To-do's</span> : <span>View all</span>}
    </div>
  )
}

export default ViewAll