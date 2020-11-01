import React from 'react';
import {useParams} from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import getUserTodos from '../../../utilities/apollo/queries/getUserTodos'
import Spinner from '../../share/Spinner'
import Details from './Details'
import Todo from './Todo'
import Layout from '../../share/Layout'
import './style.scss'

const UserProdile = () => {
  const {id} = useParams()

  const {loading, data} = useQuery(getUserTodos, {variables: {id}})
  
  if(loading) return <Spinner/>
  console.log(data)
  return (
    <Layout>
      <div className="user-profile-container">
        <Details user={data.user}/>
        <Todo todos={data.user.todos}/>
      </div>
    </Layout>
   );
}
 
export default UserProdile;