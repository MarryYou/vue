<template>
	<div id="app">
		<div class="asilde_l">
			<div class="info">
				<div class="logo">

				</div>
				<div class="nav-sub">
					<div class="list-group">
						<router-link to="/all" class="list-group-item">
							<i class="fa fa-dashboard"></i> 所有分类
						</router-link>
						<router-link to="/love" class="list-group-item">
							<i class="fa fa-gratipay"></i> 福利
						</router-link>
						<router-link to="/android" class="list-group-item">
							<i class="fa  fa-android"></i> Android
						</router-link>
						<router-link to="/ios" class="list-group-item">
							<i class="fa fa-apple"></i> iOS
						</router-link>
						<router-link to="/video" class="list-group-item">
							<i class="fa fa-file-video-o"></i> 休息视频 
						</router-link>
						<router-link to="/resource" class="list-group-item">
							<i class="fa fa-indent"></i>  拓展资源
						</router-link>
						<router-link to="/web" class="list-group-item">
							<i class="fa fa-chrome"></i> 前端 
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="main">
			<nav class="navbar navbar-default header">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<a class="navbar-brand" href="javascript:;"><i class="fa fa-bars" aria-hidden="true"></i></a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav navbar-right">
							<li>
								<a href="javascript:;"><i class="fa fa-user-circle-o" aria-hidden="true"></i> 个人中心</a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-sign-out" aria-hidden="true"></i> 退出</a>
							</li>
							<li>
								<a href="javascript:;"><i class="fa fa-tasks"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<!--<router-link to="/hello">hello</router-link>-->
			<div class="content">
				<router-view></router-view>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import common from "./common/common.js";
	export default {
		name: 'app',
		data() {
			return {}
		},
		created() {},
		computed: {},
		methods: {
			classToggle() {
				this.openSubNav = !this.openSubNav
			}
		}
	}
</script>
<style lang="less">
	#app {
		margin: 0;
		padding: 0;
		height: 1000px;
		width: 100%;
		height: 1000px;
		display: flex;
		background-color: #f4f6f8;
		.asilde_l {
			flex: 1.5;
			height: 100%;
			background-color: #000;
			.info {
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				background: #243443;
			}
			.logo {
				flex: 2;
			}
			.nav-sub {
				flex: 8;
				background: #2F4050;
				.list-group {
					margin-top: 30px;
					border: 0;
				}
				.list-group {
					.list-group-item {
						margin: 5px 0;
						border: 0;
						color: #a9b0c2;
						background: none;
						&:hover {
							color: #F6F6F6;
							background: #243443;
						}
						i {
							margin-right: 10px;
						}
						.right {
							float: right;
							margin-top: 2px;
						}
					}
					.list-group-item.active {
						color: #f6f6f6;
						background: #243443;
					}
					.sub_nav {
						/*margin-left: 27px;*/
						text-indent: 27px;
					}
				}
			}
		}
		.main {
			flex: 8.5;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			background: #f7f7f7;
			.header {
				background-image: none;
				background-color: #fff;
			}
			.navbar-header {
				margin: 15px;
			}
			.navbar-brand {
				float: none;
				padding: 6px;
				color: #fff;
				background-color: #5cb85c;
			}
			.navbar-nav li a {
				color: #31B0D5;
			}
			.content {
				flex: 1;
			}
		}
	}
</style>