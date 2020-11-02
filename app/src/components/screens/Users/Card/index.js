import React from 'react'
import { useHistory } from 'react-router-dom'
import Avatar from '../../../share/Avatar'
import './style.scss'

const Card = ({ user, index }) => {
  const history = useHistory()
  return (
    <div className="users-card" onClick={() => history.push(`/profile/${user.id}/${index}`)} key={user.id}>
      <Avatar name={user.name} index={index} />
      <div className="users-card-details">
        <span>{user.name}</span>
      </div>
    </div>
  )
}

export default Card