export default {
    allTodos: (state) => state.todos,
    completed: (state) => state.completed,
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    },
    getTodoCount: (state) => {
        return state.todos.length
    }
}
