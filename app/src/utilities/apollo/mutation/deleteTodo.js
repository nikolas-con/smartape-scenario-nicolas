import qql from 'graphql-tag'


const DELETE_TODO = qql `
  mutation ($id: ID!) {
    deleteTodo(id: $id) 
  }
`

export default DELETE_TODO