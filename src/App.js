import React from 'react'
import './App.css'
import ToDoList from './ToDo/ToDoList'
import Context from './context'
import AddTodo from './ToDo/AddTodo'

function App() {
  let [todos, setTodos] = React.useState(
  [
    {id: 1, completed: true, title: 'learn js'},
    {id: 2, completed: false, title: 'learn components'},
    {id: 3, completed: false, title: 'make a project'},
  ]
  )

  function toggleToDo(id) {
    setTodos(
      todos = todos.map(todo => {
      if (todo.id === id) { 
        todo.completed = !todo.completed
      }
      return todo
      })
    )
  } 


function addTodo(title) {
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false,
  }]))
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

  return (

    <Context.Provider value={{ removeTodo }}>
      <div className= "wrapper">
        
        <h1>React todo tutorial</h1>
        <AddTodo onCreate= {addTodo}/>
        {todos.length ? (
        <ToDoList todos={todos} onToggle= {toggleToDo}/>
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>

  )
}

export default App;
