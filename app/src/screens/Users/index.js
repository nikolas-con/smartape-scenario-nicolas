import React from 'react';
import './style.scss'
import { useQuery } from '@apollo/react-hooks'
import getUsers from '../../utilities/apollo/querys/getUsers'
import{ useHistory } from 'react-router-dom'
const Users = () => {

  const {loading, data} = useQuery(getUsers)

  const history = useHistory()

  if(loading) return <h1>loading...</h1>
  
  return ( 
    <div className="users-container">
      {data.users.data.map((user) => (
        <div className="users-card" onClick={()=> history.push(`/profile/${user.id}`)} key={user.id}>
          <span>{user.username}</span>
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
   );
}
 
export default Users;