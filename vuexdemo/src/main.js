import Vue from 'vue'
import App from './App.vue'
import store from '../vuex/store.js'
import vueRouter from 'vue-router'
import all from './components/all.vue'
import love from './components/love.vue'
import android from './components/android.vue'
import ios from './components/ios.vue'
import video from './components/video.vue'
import resource from './components/resource.vue'
import web from './components/web.vue'
import VueResource from "vue-resource"
import moment from 'moment';

Vue.use(vueRouter);
Vue.use(VueResource);
const router = new vueRouter({
	linkActiveClass: "list-group-item active",
	routes: [{
			path: '/all',
			component: all
		},
		{
			path: '/love',
			component: love
		},
		{
			path: '/android',
			component: android
		},
		{
			path: '/ios',
			component: ios
		},
		{
			path: '/video',
			component: video
		},
		{
			path: '/resource',
			component: resource
		},
		{
			path: '/web',
			component: web
		}, {
			path: '/',
			redirect: '/all'
		}
	]
})
Vue.filter('datefmt', function(input, fmtstring) {
	return moment(input).format(fmtstring);
})
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})