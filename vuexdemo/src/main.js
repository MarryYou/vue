import Vue from 'vue'
import App from './App.vue'
import store from '../vuex/store.js'
import vueRouter from 'vue-router'
import hello from './components/hello.vue'
import VueResource from "vue-resource"
Vue.use(vueRouter);
Vue.use(VueResource);
const router = new vueRouter({
      routes:[
        {
          path:'/hello',
          component:hello
        }
      ]
})
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
