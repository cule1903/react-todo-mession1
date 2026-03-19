import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('')

  const handleClick = () => {
    onAdd(input)
    setInput('')
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={handleClick}>추가</button>
    </div>
  )
}

export default TodoForm
