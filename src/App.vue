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
  </div>
</template>

<script>

import { router } from '@/main';

export default {
  name: 'App',
  components: {},
  created() {
    console.log(this.$route)
  },
  methods: {
    navigateToTask: function () {
      router.push({path: '/TodoList'})
    },
  },
  computed: {
    isInput() {
      return this.$route.name === 'TodoInput'
    }
  }
}

const taskList = [
  {title: 'test', text: 'dfjandfk fm ksefe'}
]

localStorage.setItem('taskList', JSON.stringify(taskList))
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  display: flex;
  color: #2c3e50;
  background: rgb(0, 0, 0);
}

#app {
  margin: 0 auto;
  padding-top: 110px;
}

.container {
  position: relative;
  box-sizing: border-box;
  padding: 50px 190px;
  width: 1110px;
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
