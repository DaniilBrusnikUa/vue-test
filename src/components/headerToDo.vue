<template>
	<div class="header-container">
		<h1>{{ msg }}</h1>
		<div class="action-container">
			<button
				class="btn"
				v-if="isList"
				@click="navigateAddToDo">
				<addIcon></addIcon>
			</button>

			<template v-if="this.id">
				<button
					class="btn btn-check"
					@click="updateTodoI"
					v-if="isInput">
					<bigCheckIcon></bigCheckIcon>
				</button>
				<button
					class="btn"
					v-if="isInput"
					@click="deleteTodoI">
					<deleteIcon></deleteIcon>
				</button>
			</template>
		</div>
	</div>
</template>


<script>


import { mapActions } from 'vuex';
import { router } from '@/main';

import addIcon from '@/assets/components/add-icon';
import bigCheckIcon from '@/assets/components/big-check-icon';
import deleteIcon from '@/assets/components/delete-icon';

export default {
	name: 'HeaderToDo',
	components: {
		addIcon,
		bigCheckIcon,
		deleteIcon
	},
	data() {
		return {
			todo: {},
			id: null
		}
	},
	props: {
		msg: String
	},
	created() {
		if (this.$route.params.id) {
			this.id = +this.$route.params.id;
		}
	},
	methods: {
		...mapActions(['deleteTodo', 'changeCompleted']),
		deleteTodoI() {
			this.deleteTodo(+this.$route.params.id)
			router.push('/list')
		},
		navigateAddToDo() {
			router.push('/detail')
		},

		updateTodoI() {
			this.changeCompleted(this.id);
			router.push('/list')
		},
	},
	computed: {
		isList() {
			return this.$route.name === 'list'
		},
		isInput() {
			return this.$route.name === 'detail'
		}
	}

}
</script>

<style scoped>
.action-container {
	display: flex;
	justify-content: space-between;
}

.btn {
	width: 46px;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: #1F1F1F;
	cursor: pointer;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.075);
	border-radius: 10px;
}

.btn-check {
	margin-right: 10px;
}

.header-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

h1 {
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 48px;
	color: #FFFFFF;
}


</style>
