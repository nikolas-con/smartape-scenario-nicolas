import React, { useContext } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Context from '../../utilities/context'

const BackToUsers =()=> {
  const history = useHistory()
  return (
    <div>
      <FontAwesomeIcon onClick={()=> history.replace('/users')} icon={faChevronLeft}/>
    </div>
  )
}
const NavicationBar = () => {
  const {userId} = useContext(Context)
  console.log(userId)
  const { pathname } = useLocation()
  return (
    <div className="navication-container">
      <div className="navication-title">
        {(pathname === '/' || pathname === '/users') && <span>Users</span>}
        {pathname === `/profile/${userId}` &&<> <BackToUsers/> <span>Back to Users</span></>}
      </div>
    </div>
  );
}

export default NavicationBar;