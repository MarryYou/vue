<template>
	<div id="app">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<a class="navbar-brand" href="#">Brand</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#"><i class="fa fa-user-circle-o" aria-hidden="true"></i>个人中心</a>
						</li>
						<li>
							<a href="#">退出</a>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
		<router-link to="/hello">hello</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		computed: {
			...mapGetters([]),
			count() {
				return this.$store.state.count;
			}
		},
		methods: {
			...mapActions([
				'increment',
				'decrement'
			])
		}
	}
</script>

<style lang="less">
	#app {}
</style>