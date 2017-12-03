import Vuex from 'vue'
import Vue from 'vuex'

Vue.use(Vuex);

const state = {
    count: 2
}

const mutations = {
    add(state, num) {
        state.count += num;
    },
    reduce(state, num) {
        state.count -= num;
    }
}

const actions = {
    addAction({ commit }) {
        commit('add', 10);
    },
    reduceAction({ commit }) {
        commit('reduce', 6)
    }
}

export default new Vue.Store({
    state,
    mutations,
    action
})