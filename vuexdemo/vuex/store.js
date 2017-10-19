import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex);
const state = {
	count: 0
}
const mutations = {
	/*		'increment',
			'decrement'*/
	increment(state) {
		state.count = state.count + 5;
	},
	decrement(state) {
		state.count = state.count - 3;
	}
}
const actions = {
	increment: ({
		commit
	}) => commit('increment'),
	decrement: ({
		commit
	}) => commit('decrement')
}
const getters ={
	count(state){
		return state.count;
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
