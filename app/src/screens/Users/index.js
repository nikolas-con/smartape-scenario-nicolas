import React from 'react';
import './style.scss'
import { useQuery } from '@apollo/react-hooks'
import getUsers from '../../utilities/apollo/querys/getUsers'
import Card from '../../components/users/card'
import Spinner from '../../components/Spinner'
const Users = () => {

  const {loading, data} = useQuery(getUsers)

  if(loading) return <Spinner/>
  
  return ( 
    <div className="users-container">
      {data.users.data.map((user) => <Card key={user.id} user={user}/>)}
    </div>
   );
}
 
export default Users;