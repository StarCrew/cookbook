// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App'
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
//import 'jquery'
import 'bootstrap/dist/js/bootstrap.js'

import './plugins/font-awesome/css/font-awesome.min.css'
//import './plugins/font-awesome/fonts/fontawesome-webfont.woff'
//import './plugins/font-awesome/fonts/fontawesome-webfont.woff2'
//import './plugins/font-awesome/fonts/fontawesome-webfont.ttf'
//import './plugins/font-awesome/fonts/fontawesome-webfont.svg'
//import './plugins/font-awesome/fonts/fontawesome-webfont.eot'
//import './plugins/font-awesome/fonts/FontAwesome.otf'
import './plugins/AdminLTE/css/AdminLTE.css'
import './plugins/AdminLTE/css/skins/_all-skins.min.css'
import './plugins/AdminLTE/js/app.min.js'
import './plugins/layer.js'

import './common/common.css'
import './common/common.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

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
