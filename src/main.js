import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import TodoList from '@/components/TodoList'
import TodoInput from '@/components/TodoInput'
import store from '/src/store/index.ts';

Vue.use(Router)
Vue.config.productionTip = false

const routes = [
    {
        path: '/',
        redirect: '/TodoList'
    },
    {
        path: '/TodoList', name: 'TodoList', component: TodoList
    },
    {
        path: '/TodoInput/:id', name: 'TodoInput', component: TodoInput, props: true
    },
    {
        path: '/TodoInput', name: 'TodoInput', component: TodoInput, props: true
    }
]


export const router = new Router({
    routes,
})

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app')


