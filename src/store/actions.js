export default {
    changeCompleted({ commit }, id) {
        commit('change_complete', id);
    },
    addTodo({ commit }, todo) {
        commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
        commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
        commit('update_todo', todo);
    },
}
