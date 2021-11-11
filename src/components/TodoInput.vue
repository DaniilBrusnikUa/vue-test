<template>
  <div>
    <HeaderToDo msg="To do"/>
    <div class="container-input">
      <input
          @change="todoTitleChange"
          v-bind:value="todoTitle"
          type="text"
      />
      <input
          @change="todoTextChange"
          v-bind:value="todoText"
          type="text"
      />
      <button class="btn-save" @click="saveTodo">SAVE</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import HeaderToDo from '@/components/HeaderToDo';
import { router } from '@/main';

export default {
  name: 'TodoInput',
  components: {
    HeaderToDo
  },
  data() {
    return {
      todoTitle: '',
      todoText: '',
      id: null
    };
  },

  created() {
    if (this.$route.params.id) {
      this.id = +this.$route.params.id;
      this.todoTitle = this.$store.getters.getTodoById(this.id).title;
      this.todoText = this.$store.getters.getTodoById(this.id).text;
    }
  },

  methods: {
    ...mapActions(['addTodo', 'updateTodo']),
    todoTitleChange(e) {
      this.todoTitle = e.target.value;
    },
    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    saveTodo() {
      if (this.id) {
        this.updateTodoI()
      } else {
        this.addTodoI();
      }
    },

    addTodoI() {
      this.addTodo({
        id: this.$store.getters.getTodoCount + 1,
        title: this.todoTitle,
        text: this.todoText,
        complete: false
      });
      router.replace('/TodoList')

    },
  }


};
</script>

<style scoped>

.container-input {
  position: relative;
  width: 730px;
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #1F1F1F;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}

input {
  background: none;
  border: none;
  border-bottom: 1px rgba(255, 255, 255, 0.1) solid;
  padding: 12px;
  width: calc(100% - 24px);
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  outline: none;
}

.btn-save {
  padding: 8px 16px;
  position: absolute;
  width: 330px;
  height: 46px;
  left: calc(50% - 330px / 2);
  bottom: 50px;
  background: linear-gradient(94.73deg, #007BFF 0%, #29FDCA 100%);
  box-shadow: 0px 0px 10px rgba(41, 253, 202, 0.5);
  border-radius: 20px;
  border: none;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
  cursor: pointer;
}
</style>
