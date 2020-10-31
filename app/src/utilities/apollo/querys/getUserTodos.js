import qql from 'graphql-tag'


const getUserTodos = qql `
  query getUserTodos($id: ID!) {
    user (id: $id) {
      todos {
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