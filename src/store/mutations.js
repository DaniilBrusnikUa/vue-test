export default {
    add_todo(state, todo) {
        state.todos.push(todo);
    },
    delete_todo(state, id) {
        state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
        let index = state.todos.findIndex((t) => t.id == todo.id);
        if (index != -1) {
            state.todos[index] = todo;
        }
    },
    change_complete(state, id) {
        let index = state.todos.findIndex((t) => t.id == id);
        if (index != -1) {
            state.todos[index].complete = !state.todos[index].complete;
        }
    },
}
