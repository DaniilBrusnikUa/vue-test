<template>
	 <div>
		  <div class="todo-container row">
				<div class="row">
					 <label class="container-check">
						  <input :checked="todo.complete" class="mr-1" @change="onCompleted(todo.id)" type="checkbox">
						  <span class="checkmark">
             <check-icon v-if="todo.complete"></check-icon>
          </span>
					 </label>
					 <router-link v-bind:to="'/detail/' + todo.id">
						  <div class="todo-title" v-bind:class="{ completedTodo: todo.complete }">{{ todo.title }}</div>
					 </router-link>
				</div>

				<button @click="deleteTodoI(todo.id)" class="btn-delete">
					 <deleteIcon></deleteIcon>
				</button>
		  </div>
	 </div>
</template>

<script>
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

import { mapActions, mapGetters } from 'vuex';
import CheckIcon from '@/assets/components/check-icon';
import deleteIcon from '@/assets/components/delete-icon';

export default {
	 name: 'TodoItem',
	 components: {CheckIcon, deleteIcon},
	 props: {
		  todo: {}
	 },
	 data() {
		  return {
				todoText: '',
				editing: false,
				completed: false
		  };
	 },
	 computed: {
		  ...mapGetters(['allTodos'])
	 },
	 methods: {
		  ...mapActions(['deleteTodo', 'changeCompleted', 'setData']),
		  onCompleted(id) {
				this.changeCompleted(id);
				this.setData(this.allTodos);
		  },
		  todoTextChange(e) {
				this.todoText = e.target.value;
		  },

		  deleteTodoI(id) {
				this.deleteTodo(id);
				this.setData(this.allTodos);
		  }
	 }
};
</script>

<style scoped>
.row {
	 display: flex;
	 align-items: center;
}

.todo-container {
	 width: 690px;
	 justify-content: space-between;
	 padding: 12px 0;
	 border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
}

.todo-title {
	 font-style: normal;
	 font-weight: normal;
	 font-size: 20px;
	 line-height: 30px;
	 margin: 0;
	 color: #FFFFFF;
	 cursor: pointer;
}

.container-check {
	 position: relative;
	 padding-left: 25px;
	 margin-bottom: 12px;
	 cursor: pointer;
	 -webkit-user-select: none;
	 -moz-user-select: none;
	 -ms-user-select: none;
	 user-select: none;
}

.container-check input {
	 position: absolute;
	 opacity: 0;
	 cursor: pointer;
	 height: 0;
	 width: 0;
}

.checkmark {
	 position: absolute;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 top: 0;
	 left: 0;
	 width: 13px;
	 height: 13px;
	 background: #282828;
	 border: 1px solid rgba(255, 255, 255, 0.1);
	 box-sizing: border-box;
	 border-radius: 2px;
}

.container-check input:checked ~ .checkmark {
	 border: 1px solid #1F1F1F;
}

.btn-delete {
	 width: 32px;
	 height: 32px;
	 background: #1F1F1F;
	 box-shadow: 0px 2px 20px rgb(0 0 0 / 8%);
	 border-radius: 10px;
	 border: none;
	 cursor: pointer;
}
.completedTodo {
	 text-decoration: line-through;
	 color: rgba(255, 255, 255, 0.4);
}
a {
	 text-decoration: none;
}
</style>
