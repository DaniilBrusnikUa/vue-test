<template>
	<div>
		<HeaderToDo msg="To do list"/>
		<div v-if="allTodos.length">
			<div v-for="todo in allTodos" :key="todo.id">
				<TodoItem :todo="todo"/>
			</div>
		</div>
		<div v-else class="empty-list">
			<div class="empty-list-icon">
				<emptyListIcon></emptyListIcon>
			</div>
			<div class="empty-list-text">
				No list yet <br>
				Create your first list
			</div>

		</div>
	</div>
</template>

<script>

import TodoItem from '@/components/todoItem';
import HeaderToDo from '@/components/headerToDo';
import emptyListIcon from '@/assets/components/empty-list';

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'list',
	components: {
		TodoItem,
		HeaderToDo,
		emptyListIcon
	},
	created() {
		this.getTodoList();
	},
	computed: {
		...mapGetters(['allTodos', 'completed']),
	},
	methods: {
		...mapActions(['getData']),
		getTodoList() {
			this.getData()
		}
	}
}
</script>

<style scoped>
.empty-list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 50px;
}

.empty-list-text {
	width: 260px;
	height: 68px;
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 34px;
	text-align: center;
	color: rgba(255, 255, 255, 0.8);

}
</style>
