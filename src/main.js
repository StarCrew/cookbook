// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App'
import routes from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './plugins/font-awesome/css/font-awesome.min.css'
import './plugins/AdminLTE/css/AdminLTE.css'
import './plugins/AdminLTE/css/skins/_all-skins.min.css'
import './plugins/AdminLTE/js/app.min.js'
import './plugins/layer.js'

import './common/common.css'
import './common/common.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false

// 开启 debug 模式
Vue.config.debug = true

const router = new VueRouter({
  // mode: 'history',
  saveScrollPosition: true,
  routes
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  ...App
})
