import React from 'react';
import './style.scss'
import { useQuery } from '@apollo/react-hooks'
import getUsers from '../../../utilities/apollo/queries/getUsers'
import Card from './Card'
import Spinner from '../../share/Spinner'
import Layout from '../../share/Layout'

const Users = () => {

  const { loading, data } = useQuery(getUsers)

  if (loading) return <Spinner />
  console.log('user')
  return (
    <Layout>
      <div className="users-container">
        {data.users.data.map((user, index) => <Card key={user.id} user={user} index={index} />)}
      </div>
    </Layout>
  );
}

export default Users;