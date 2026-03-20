import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";
import { useTodos } from "./useTodos";

function App() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
      <TodoWriteForm onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
