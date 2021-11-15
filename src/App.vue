<template>
	<div id="app">
		<div class="container">
			<div class="btn-back"
			     v-if="isInput"
			     @click="navigateToTask">
				Back to all
			</div>
			<transition name="slide">
				<router-view/>
			</transition>
		</div>
		<div class="background-top-circle"></div>
		<div class="background-bottom-circle"></div>
	</div>
</template>

<script>

import { router } from '@/main';
import { mapActions } from 'vuex';


export default {
	name: 'App',
	components: {},
	data() {
		return {
			todoList: [
				{
					id: 1,
					title: 'One',
					text: 'one qwe ' +
						'qwe',
					complete: false,
				},
				{
					id: 2,
					title: 'Three',
					text: '',
					complete: false,
				},
				{
					id: 3,
					title: 'Four',
					text: '',
					complete: false,
				},
			],
		}
	},
	created() {
		this.setDataDefault();
	},
	methods: {
		...mapActions(['setData']),
		setDataDefault() {
			this.setData(this.todoList)
		},
		navigateToTask: function () {
			router.push({path: '/list'})
		},
	},
	computed: {
		isInput() {
			return this.$route.name === 'detail'
		}
	}
}

</script>

<style>
body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	width: 100%;
	display: flex;
	color: #2c3e50;
	background: rgb(0, 0, 0);
}

.background-top-circle {
	top: 0;
	right: 0;
	width: 920px;
	height: 333px;
	z-index: -1;
	position: absolute;
	background-size: contain;
	background-image: url(assets/background.svg);
	background-repeat: no-repeat, repeat;
}

.background-bottom-circle {
	bottom: 25%;
	left: 0;
	width: 633px;
	height: 333px;
	z-index: -1;
	position: absolute;
	background-size: contain;
	background-image: url(assets/background1.svg);
	background-repeat: no-repeat, repeat;
}

#app {
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-content: center;
}

.container {
	position: relative;
	box-sizing: border-box;
	padding: 50px 190px;
	margin-top: 110px;
	max-width: 1110px;
	height: 579px;
	background: #282828;
	box-shadow: 0px 0px 20px rgb(41 253 202 / 50%);
	border-radius: 20px;
}

.btn-back {
	position: absolute;
	left: 0;
	top: -40px;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	background: -webkit-linear-gradient(
		94.73deg, #007BFF 0%, #29FDCA 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	cursor: pointer;
}
</style>
