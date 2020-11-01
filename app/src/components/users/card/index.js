import React from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '../../avatar'

const Card = ({ user }) => {
  const history = useHistory()
  return (
    <div className="users-card" onClick={() => history.push(`/profile/${user.id}`)} key={user.id}>
      <Avatar name={user.name}/>
      <div className="user-card-Details">
        <span>{user.name}</span>
      </div>
    </div>
  )
}

export default Card