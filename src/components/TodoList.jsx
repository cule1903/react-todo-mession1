import TodoItem from './TodoItem'

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center py-4">할 일이 없습니다</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
        ))
      )}
    </div>
  )
}

export default TodoList
