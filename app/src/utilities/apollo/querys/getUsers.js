import qql from 'graphql-tag'


const getUsers = qql`
  query getUsers{
    users {
      data {
        id,
        name,
        username,
        email
      }
    }
  }
`

export default getUsers