import { useState, useEffect } from 'react'
import { loadTodos, saveTodos, createTodo } from '../utils/storage'

export const useTodos = () => {
  const [todos, setTodos] = useState([])

  // 초기 로드 - 마운트될 때 localStorage에서 로드
  useEffect(() => {
    const loadedTodos = loadTodos()
    setTodos(loadedTodos)
  }, [])

  // 할 일 추가
  const addTodo = (value) => {
    if (!value.trim()) return
    const newTodo = createTodo(value)
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  // 할 일 삭제
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  // 할 일 완료 상태 토글
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }
}
