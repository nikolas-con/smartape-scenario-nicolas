import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import getUserTodos from '../../../utilities/apollo/queries/getUserTodos'
import Spinner from '../../share/Spinner'
import Details from './Details'
import Todos from './Todos'
import Layout from '../../share/Layout'
import './style.scss'


const UserProdile = () => {
  const { id, index } = useParams()

  const { loading, data } = useQuery(getUserTodos, { 
    variables: { 
      id,
      options: {
        operators: {
          kind: "LIKE",
          field: "completed",
          value: "false"
        }
      }
    }
  })


  if (loading) return <Spinner />
  return (
    <Layout>
      <div className="user-profile-container">
        <Details index={index} user={data.user} />
        <Todos todos={data.user.todos.data} id={id} />
      </div>
    </Layout>
  );
}

export default UserProdile;