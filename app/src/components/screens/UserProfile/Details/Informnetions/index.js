import React from 'react'

const Informnetions = ({informnetionsData}) => {
  return (
    <div className="details-user-informetions">
      <div>
        <p>
          <span className="details-title">Username</span>
          <span className="details-value">{informnetionsData.username}</span>
        </p>
        <p>
          <span className="details-title">ID</span>
          <span className="details-value">{informnetionsData.id}</span>
        </p>
        <p>
          <span className="details-title">Website</span>
          <span className="details-value">{informnetionsData.website}</span>
        </p>
      </div>
      <div>
        <p>
          <span className="details-title">Phone</span>
          <span className="details-value">{informnetionsData.phone}</span>
        </p>
        <p>
          <span className="details-title">Email</span>
          <span className="details-value">{informnetionsData.email}</span>
        </p>
      </div>
    </div>
  )
}

export default Informnetions