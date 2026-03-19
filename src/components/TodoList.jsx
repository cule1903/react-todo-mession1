import TodoItem from './TodoItem'

function TodoList({ todos, onRemove }) {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 py-4">할 일이 없습니다.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      )}
    </div>
  )
}

export default TodoList
