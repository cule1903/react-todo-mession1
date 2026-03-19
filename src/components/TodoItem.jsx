function TodoItem({ todo, onRemove }) {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 bg-gray-50 hover:bg-gray-100">
      <span className="text-gray-700">{todo.value}</span>
      <button
        onClick={() => onRemove(todo.id)}
        className="bg-red-400 text-white text-sm px-3 py-1 rounded hover:bg-red-500"
      >
        삭제
      </button>
    </div>
  )
}

export default TodoItem
