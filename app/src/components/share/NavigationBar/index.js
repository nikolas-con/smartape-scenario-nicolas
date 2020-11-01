import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import BackToUsers from './BackToUsers'
import './style.scss'

const NavigationBar = () => {
  const { pathname } = useLocation()
  const {id, index} = useParams()
  
  return (
    <div className="navication-container">
      {pathname === `/profile/${id}/${index}` &&<BackToUsers/>}
      <div className="navication-title">
        {(pathname === '/' || pathname === '/users') && <span>Users</span>}
        {pathname === `/profile/${id}/${index}` &&<span>Back to Users</span>}
      </div>
    </div>
  );
}

export default NavigationBar;