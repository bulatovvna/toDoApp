import './App.css'
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { Context } from './context';

function App() {

  const start_todo = [
    {id: 1, title: 'Помыть руки', complited: true},
    {id: 2, title: 'Сделать зарядку', complited: false},
    {id: 3, title: 'Наконец изучить React', complited: true}
  ]

  const [todos, setTodos] = useState(start_todo)

  const deleteTodo = (id) => {
    let filtered_todos = todos.filter((elem) => elem.id !== id)
    setTodos(filtered_todos)
  }

  const changeTodo = (id) => {
    let changed_todos = todos.map(elem => {
      if(elem.id === id){
        elem.complited = !elem.complited
      }
      return elem
    })
    setTodos(changed_todos)
  }

  const addTodo = (title) => {
      let todo = {
        id: Date.now(),
        title,
        complited: false
      }
      setTodos([...todos, todo])
  }

  useEffect(() => {
    let local_data = JSON.parse(localStorage.getItem('todos'))
    setTodos(local_data)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])  

  return (
    <div>
      <Context.Provider value = {{deleteTodo, changeTodo}}>
        <AddItem addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </Context.Provider>
    </div>
  );
}

export default App;
