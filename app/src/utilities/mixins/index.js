const nameSplitter = (name)=> {
  const nameSplitted = name.split(' ')
  const firstName = nameSplitted[0].split('')
  const lasttName = nameSplitted[1].split('')
  return firstName[0].toUpperCase() + lasttName[0].toUpperCase()
}

const backgrandColorSelector= (index)=> {
  const colors=  [
    "#2CA5C2",
    "#E36491",
    "#4DC5E3",
    "#E3D436",
    "#968D2C"
  ]
  const color = index%5
  return {'background': `${colors[color]}`}
}


const selectUncompletedTodo = (todos) => {
  return todos.filter(todo => todo.completed && todo)
}

export {
  nameSplitter,
  backgrandColorSelector,
  selectUncompletedTodo
}