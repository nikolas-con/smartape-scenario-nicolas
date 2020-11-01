import React from 'react';
import Avatar from '../../../share/Avatar'
import './style.scss'
const Details= ({user})=> {
  return (
    <div className="details-contener">
      <div>
        <span>{user.name}</span>
      </div>
      <div>
        <span>{user.username}</span>
        <span>{user.id}</span>
        <span>{user.website}</span>
        <span>{user.phone}</span>
        <span>{user.email}</span>
      </div>
      <div>
        <span>{user.address.city}</span>
        <span>{user.address.street}</span>
        <span>{user.address.suite}</span>
        <span>{user.address.zipcode}</span>
      </div>
      
    </div>
  )
}

export default Details