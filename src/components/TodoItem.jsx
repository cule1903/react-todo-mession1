function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <div className="flex items-center justify-between border px-3 py-2 rounded mb-2">
      <div className="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="cursor-pointer"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.value}
        </span>
      </div>
      <button onClick={() => onRemove(todo.id)} className="bg-red-500 text-white px-3 py-1 rounded">
        삭제
      </button>
    </div>
  )
}

export default TodoItem
