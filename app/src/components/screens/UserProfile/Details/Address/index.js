import React from 'react'

const Address = ({ addressData }) => {
  return (
    <div className="details-user-address">
      <div>
        <p>
          <span className="details-title">Address</span>
        </p>
      </div>
      <div>
        <p>
          <span className="details-title">Street</span>
          <span className="details-value">{addressData.street}</span>
        </p>
        <p>
          <span className="details-title">Suite</span>
          <span className="details-value">{addressData.suite}</span>
        </p>
        <p>
          <span className="details-title">City</span>
          <span className="details-value">{addressData.city}</span>
        </p>
        <p>
          <span className="details-title">Zip Code</span>
          <span className="details-value">{addressData.zipcode}</span>
        </p>
      </div>
    </div>
  )
}

export default Address