import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import getUserTodos from '../../utilities/apollo/querys/getUserTodos'
import Context from '../../utilities/context'


const UserProdile = () => {
  const {id} = useParams()
  const { setUserId } = useContext(Context)
  const {loading, data} = useQuery(getUserTodos, {variables: {id}})
  useEffect(()=> {
    setUserId(id)
  },[id])
  return ( 
    <div>
      UserProdile
    </div>
   );
}
 
export default UserProdile;