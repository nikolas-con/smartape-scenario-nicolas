import React from 'react';
import './style.scss'

const Avatar = ({name})=> {

  const nameSpiter = (name)=> {
    const nameSplied = name.split(' ')
    const firstName = nameSplied[0].split('')
    const lasttName = nameSplied[1].split('')
    return firstName[0].toUpperCase() + lasttName[0].toUpperCase()
  }

  const backgrandColorSelector= ()=> {
    const colors=  {
      1: "#2CA5C2",
      2 : "#E36491",
      3 : "#4DC5E3",
      4 : "#E3D436",
      5 : "#968D2C"
    }
    const color = Math.floor(Math.random() * (5 - 1) + 1)
    return {'background': `${colors[color]}`}
  }
  
  return(
    <div className="avatar-contener" style={backgrandColorSelector()}>
      <span>{nameSpiter(name)}</span>
    </div>
  )
}

export default Avatar