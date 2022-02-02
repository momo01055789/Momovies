require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

window.Vue = require('vue').default;

Vue.use(VueRouter)

Vue.component('nbar', require('./components/Nbar.vue').default);
Vue.component('app-footer', require('./components/AppFooter.vue').default);

const app = new Vue({
    el: '#app',
    router:routes,
});
