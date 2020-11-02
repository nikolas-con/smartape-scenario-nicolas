import React, { useState } from 'react'
import Avatar from '../../../share/Avatar'
import Informnetions from './Informnetions'
import Address from './Address'
import './style.scss'
const Details = ({ user, index }) => {

  const [informnetionsData] = useState({ username: user.username, id: user.id, website: user.website, phone: user.phone, email: user.email })

  const [addressData] = useState({ street: user.address.street, suite: user.address.suite, city: user.address.city, zipcode: user.address.zipcode })

  return (
    <div className="details-contener">
      <div className="details-name">
        <Avatar name={user.name} index={index} />
        <div style={{ marginTop: '30px' }}>
          <span className="details-title">{user.name}</span>
        </div>
      </div>
      <Informnetions informnetionsData={informnetionsData} />
      <Address addressData={addressData} />
    </div>
  )
}

export default Details