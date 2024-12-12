import { useState,  useEffect} from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"



function App() {
 
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  //   ]

  

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo (newTodo){
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodos = newTodoList[index]
    completedTodos['complete'] = true
    newTodoList[index] = completedTodos
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSavedData(newTodoList)
  }

    // function handleSavedData 
    function handleSavedData (currTodos) {
      localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos}))
    }


    useEffect(() => {
      if (!localStorage || !localStorage.getItem('todo-app')) { return }
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
    }, [])
  

  return (
    <>
      <Header todos = {todos}/>
      <Tabs todos = {todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TodoList todos = {todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>
    </>
  )
}

export default App
 