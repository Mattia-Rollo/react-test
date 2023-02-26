import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from   './TodoList';
import uuid from 'react-uuid';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, completed: false}]
    })
    todoNameRef.current.value = null

  }
  return (
   <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef}className="" type="text" />
    <button onClick={handleAddTodo}>add todo</button>
    <button>Clear completed</button>
    <div>O left to do</div>
    </>
  )
}

export default App
