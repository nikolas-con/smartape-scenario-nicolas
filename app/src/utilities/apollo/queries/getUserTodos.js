import qql from 'graphql-tag'

const getUserTodos = qql`
query getUserTodos($id: ID!, $options: PageQueryOptions!) {
  user (id: $id ) {
    username,
    name,
    email,
    website,
    phone,
    id,
    address {
      street,
      suite,
      city,
      zipcode
    }
    todos (options: $options) {
      data {
      id,
        title,
        completed
      }
    }
  }
}
`

export default getUserTodos