import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
import axios from 'axios'

import {routes} from './routes'
axios.defaults.baseURL='https://project-stock-trader.firebaseio.com';


Vue.use(VueRouter);

const router=new VueRouter({
  mode:'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
