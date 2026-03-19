import TodoItem from './TodoItem'

function TodoList({ todos, onRemove }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">할 일이 없습니다.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      )}
    </div>
  )
}

export default TodoList
