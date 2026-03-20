function TodoWriteForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.todo
    const value = input.value.trim()
    
    if (!value) return
    
    onAdd(value)
    input.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        name="todo"
        className="flex-1 border px-2 py-1 rounded"
        placeholder="할 일 입력"
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded">
        추가
      </button>
    </form>
  )
}

export default TodoWriteForm
