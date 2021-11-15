import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import List from '@/pages/list'
import Detail from '@/pages/detail'
import store from '/src/store/index.ts';

Vue.use(Router)
Vue.config.productionTip = false

const routes = [
    {
        path: '/',
        redirect: '/list'
    },
    {
        path: '/list', name: 'list', component: List
    },
    {
        path: '/detail/:id', name: 'detail', component: Detail, props: true
    },
    {
        path: '/detail', name: 'detail', component: Detail, props: true
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


