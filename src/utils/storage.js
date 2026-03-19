// localStorage에 저장된 할 일을 불러오기
export const loadTodos = () => {
  try {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  } catch (error) {
    console.error('localStorage 로드 실패:', error)
    return []
  }
}

// 할 일을 localStorage에 저장
export const saveTodos = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch (error) {
    console.error('localStorage 저장 실패:', error)
  }
}

// 새로운 할 일 객체 생성
export const createTodo = (value) => ({
  id: Date.now().toString(),
  value,
  completed: false
})
