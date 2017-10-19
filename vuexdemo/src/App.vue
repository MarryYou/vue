<template>
	<div id="app">
		<!-- Count is {{$store.state.count}} -->
		<!-- Count is {{count}}
		<button @click="increment">+5</button>
		<button @click="decrement">-3</button> -->
		<router-link to="/hello">hello</router-link>
		 <router-view></router-view>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from "vuex";
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		computed:{
			...mapGetters([]),
			count(){
				return this.$store.state.count;
			}
		},
		methods:{
			...mapActions([
				'increment',
				'decrement'
			])
		}
	}
</script>

<style lang="less">

   #app{

   }
</style>
