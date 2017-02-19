import Vue from 'vue'

const routes = [{
	path: '/login',
	component: resolve => require(['./views/Login.vue'], resolve)
},{
  path: '/register',
  component: resolve => require(['./views/Register.vue'], resolve)
},{
  path: '/',
  component: resolve => require(['./views/home.vue'], resolve)
}]

module.exports = routes
