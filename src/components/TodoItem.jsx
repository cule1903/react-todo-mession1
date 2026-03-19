function TodoItem({ todo, onRemove }) {
  return (
    <div className="todo-item">
      <span>{todo.value}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem
