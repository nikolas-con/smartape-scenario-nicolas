import qql from 'graphql-tag'


const getUsers = qql`
  query getUsers{
    users {
      data {
        id,
        name
      }
    }
  }
`

export default getUsers