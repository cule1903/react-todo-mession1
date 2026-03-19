function TodoWriteForm({ onAdd }) {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const value = form.todo.value.trim()
    
    if (!value) return
    
    onAdd(value)
    form.reset()
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        name="todo"
        className="border border-gray-300 rounded px-3 py-1 text-sm flex-1"
        placeholder="할 일을 입력하세요"
      />
      <button
        type="submit"
        className="bg-green-400 text-white text-sm px-4 py-1 rounded"
      >
        추가
      </button>
    </form>
  )
}

export default TodoWriteForm
