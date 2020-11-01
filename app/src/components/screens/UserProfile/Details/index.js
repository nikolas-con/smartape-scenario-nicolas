import React from 'react';
import Avatar from '../../../share/Avatar'
import './style.scss'
const Details = ({ user, index }) => {
  return (
    <div className="details-contener">
      <div className="details-name">
        <Avatar name={user.name} index={index} />
        <div style={{ marginTop: '30px' }}>
          <span className="details-title">{user.name}</span>
        </div>
      </div>
      <div className="details-user-informetions">
        <div>
          <p>
            <span className="details-title">Username</span>
            <span className="details-value">{user.username}</span>
          </p>
          <p>
            <span className="details-title">ID</span>
            <span className="details-value">{user.id}</span>
          </p>
          <p>
            <span className="details-title">Website</span>
            <span className="details-value">{user.website}</span>
          </p>
        </div>
        <div>
          <p>
            <span className="details-title">Phone</span>
            <span className="details-value">{user.phone}</span>
          </p>
          <p>
            <span className="details-title">Email</span>
            <span className="details-value">{user.email}</span>
          </p>      
        </div>
      </div>
      <div className="details-user-address">
        <div>
          <p>
            <span className="details-title">Address</span>
          </p>
        </div>
        <div>
          <p>
            <span className="details-title">Street</span>
            <span className="details-value">{user.address.street}</span>
          </p>
          <p>
            <span className="details-title">Suite</span>
            <span className="details-value">{user.address.suite}</span>
          </p>
          <p>
            <span className="details-title">City</span>
            <span className="details-value">{user.address.city}</span>
          </p>
          <p>
            <span className="details-title">Zip Code</span>
            <span className="details-value">{user.address.zipcode}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details