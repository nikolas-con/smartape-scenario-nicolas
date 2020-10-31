import qql from 'graphql-tag'


const CREATE_TODO = qql `
  mutation ($input: CreateTodoInput!) {
    createTodo(input: $input) {
      title,
      completed
    }
  }
`


export default CREATE_TODO
