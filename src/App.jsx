import { useTodos } from './useTodos'
import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">React Todo List</h1>
        <TodoWriteForm onAdd={addTodo} />
        <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
      </div>
    </div>
  )
}

export default App