import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import Context from '../../utilities/context'
import BackToUsers from './backToUsers'
import './style.scss'

const NavicationBar = () => {
  const {userId} = useContext(Context)
  const { pathname } = useLocation()
  
  return (
    <div className="navication-container">
      {pathname === `/profile/${userId}` &&<BackToUsers/>}
      <div className="navication-title">
        {(pathname === '/' || pathname === '/users') && <span>Users</span>}
        {pathname === `/profile/${userId}` &&<span>Back to Users</span>}
      </div>
    </div>
  );
}

export default NavicationBar;