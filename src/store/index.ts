import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        completed: true,
        ttdos: [],
        todos: [
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
    },
    getters,
    actions,
    mutations,
    modules: {},
});
