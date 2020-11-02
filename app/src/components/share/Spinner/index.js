import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const Spinner = () => {
  return (
    <div className="spiner-container">
      <FontAwesomeIcon size="9x" color="#4a4a4b" icon={faSpinner} spin />
    </div>
  )
}

export default Spinner