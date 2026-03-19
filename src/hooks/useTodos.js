import { useState, useEffect } from 'react'
import { loadTodos, saveTodos, createTodo } from '../utils/storage'

export const useTodos = () => {
  const [todos, setTodos] = useState([])

  // 앱 최초 로딩 시 localStorage에서 todos 불러오기
  useEffect(() => {
    const loadedTodos = loadTodos()
    setTodos(loadedTodos)
  }, [])

  // todos 배열이 변경될 때마다 localStorage에 자동 저장
  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  // 할 일 추가
  const addTodo = (value) => {
    if (!value.trim()) return
    const newTodo = createTodo(value)
    setTodos([...todos, newTodo])
  }

  // 할 일 삭제
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 할 일 완료 상태 토글
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }
}
