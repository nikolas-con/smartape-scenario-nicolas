import qql from 'graphql-tag'


const UPDATE_TODO = qql`
  mutation ($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id,input: $input) {
      id,
      title,
      completed
    }
  }
`


export default UPDATE_TODO