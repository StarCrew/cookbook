import Vue from 'vue'

const routes = [{
  path: '/',
  redirect: '/home'
},{
	path: '/login',
	component: resolve => require(['./views/Login.vue'], resolve)
},{
  path: '/register',
  component: resolve => require(['./views/Register.vue'], resolve)
},{
  path: '/',
  component: resolve => require(['./views/Default.vue'], resolve),
  children : [{
    path : 'home',
    component : resolve => require(['./views/Home.vue'],resolve),
  },{
    path: 'recipe',
    component: resolve => require(['./views/Recipe.vue'],resolve)
  }]
}]

module.exports = routes

























