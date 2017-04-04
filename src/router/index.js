//import Vue from 'vue'

const routes = [{
  path: '/',
  redirect: '/home'
},{
  path: '/login',
  component: resolve => require(['../views/Login.vue'], resolve)
},{
  path: '/register',
  component: resolve => require(['../views/Register.vue'], resolve)
},{
  path: '/',
  component: resolve => require(['../views/Default.vue'], resolve),
  children : [{
    path : 'home',
    component : resolve => require(['../views/Home.vue'],resolve)
  },{
    path: 'recipe',
    component: resolve => require(['../views/Recipe.vue'],resolve)
  },{
    path : 'updateUser',
    component : resolve => require(['../views/updateUser.vue'],resolve)
  },{
    path : 'follower',
    component : resolve => require(['../views/Follower.vue'],resolve)
  },{
    path : 'following',
    component : resolve => require(['../views/Following.vue'],resolve)
  },{
    path : 'collection',
    component : resolve => require(['../views/Collection.vue'],resolve)
  },{
    path : 'personal',
    component : resolve => require(['../views/Personal.vue'],resolve)
  },{
    path : 'uploadMenu',
    component : resolve => require(['../views/UploadMenu.vue'],resolve)
  }]
}];

module.exports = routes;

























