import React from 'react'
import './style.scss'
import { backgrandColorSelector, nameSplitter } from '../../../utilities/mixins'

const Avatar = ({ name, index }) => {
  return (
    <div className="avatar-contener" style={backgrandColorSelector(index)}>
      <span>{nameSplitter(name)}</span>
    </div>
  )
}

export default Avatar