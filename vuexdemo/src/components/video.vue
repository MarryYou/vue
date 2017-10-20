<template>
	<div id="app">
		<div class="panel_in">
			<div class="panel panel-default">
				<div class="panel-body">
					<ol class="breadcrumb">
						<li>
							<a href="javascript:;">gank.io</a>
						</li>
						<li>
							video
						</li>
					</ol>
				</div>
			</div>
			<table class="table table-striped table-bordered table-hover tb_list">
				<thead>
					<th>who</th>
					<th>desc</th>
					<th>type</th>
					<th>createdAt</th>
					<th>url</th>
				</thead>
				<tbody>
					<tr v-for=" item in AllList">
						<td v-text="item.who"></td>
						<td v-text="item.desc"></td>
						<td v-text="item.type"></td>
					<td >{{item.createdAt| datefmt('YYYY - MM - DD HH:mm:ss')}}</td>
						<td>
							<a :href="item.url">链接地址</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import common from "../common/common.js";
	export default {
		name: 'app',
		data() {
			return {
				AllList: []
			}
		},
		created() {
			this.getAll();
		},
		methods: {
			getAll() {
				const url = common.apidoman + "休息视频/20/0";
				this.$http.get(url).then(function(res) {
					this.AllList = res.body.results;
				})
			}
		}
	}
</script>

<style lang="less">
	.panel-body {
		padding: 0;
	}
	
	.panel_in {
		width: 100%;
		height: 100%;
		padding: 0 10px;
		.breadcrumb {
			margin: 0;
			background: #fff;
			li {
				color: #8C8C8C;
			}
		}
		.tb_list {
			text-align: center;
			th {
				text-align: center;
			}
		}
	}
</style>