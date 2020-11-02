import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const BackToUsers = () => {
  const history = useHistory()
  return (
    <div className="navication-back-button" onClick={() => history.replace('/users')}>
      <FontAwesomeIcon style={{ marginLeft: '20px' }} size="1x" icon={faChevronLeft} />
    </div>
  )
}

export default BackToUsers