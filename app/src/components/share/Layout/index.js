import React from 'react';
import NavicationBar from '../NavigationBar'

const Layout =({children})=> {
  return (
    <div>
      <NavicationBar/>
      {children}
    </div>
  )
}

export default Layout