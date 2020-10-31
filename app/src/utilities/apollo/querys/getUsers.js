import qql from 'graphql-tag'


const getUsers = qql`
  query getUsers{
    users {
      data {
        id,
        name,
        username,
        email,
        website,
        phone,
        address {
          street,
          city,
          zipcode,
          suite
        }
      }
    }
  }
`

export default getUsers