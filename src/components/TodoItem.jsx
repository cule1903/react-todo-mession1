function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 bg-gray-50 hover:bg-gray-100">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 cursor-pointer"
        />
        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.value}
        </span>
      </div>
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
