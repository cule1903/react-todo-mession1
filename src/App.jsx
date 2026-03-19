import { useTodos } from './useTodos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const { todos, addTodo, removeTodo } = useTodos()

  return (
    <div className="app">
      <h1>React Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} />
    </div>
  )
}

export default App
