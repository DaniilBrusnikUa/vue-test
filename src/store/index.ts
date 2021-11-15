import Vue from 'vue';
import Vuex from 'vuex';
import DataService from '../services/data.service.ts'

Vue.use(Vuex);
const restDataService = new DataService();

export default new Vuex.Store({
	state: {
		completed: true,
		todos: [],
	},
	getters: {
		allTodos: (state) => state.todos,
		completed: (state) => state.completed,
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		},
		getTodoCount: (state) => {
			return state.todos.length
		}
	},
	actions: {
		setData({ commit }, todo) {
			restDataService.setData(todo);
			commit('set_data', todo)
		},
		getData({ commit }) {
			commit('get_data', restDataService.getData())
		},

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
	},
	mutations: {
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

		set_data(state, todo) {
			state.todos = todo;
		},

		get_data(state, todo) {
			state.todos = todo;
		}
	},
	modules: {},
});
