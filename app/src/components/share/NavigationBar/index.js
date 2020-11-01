import React from 'react';
import { useLocation, useParams } from 'react-router-dom'
import BackToUsers from './BackToUsers'
import './style.scss'

const NavigationBar = () => {
  const { pathname } = useLocation()
  const {id} = useParams()
  
  return (
    <div className="navication-container">
      {pathname === `/profile/${id}` &&<BackToUsers/>}
      <div className="navication-title">
        {(pathname === '/' || pathname === '/users') && <span>Users</span>}
        {pathname === `/profile/${id}` &&<span>Back to Users</span>}
      </div>
    </div>
  );
}

export default NavigationBar;