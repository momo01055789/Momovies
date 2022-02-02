import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from './components/Details'
import Nbar from './components/Nbar.vue'

Vue.use(VueRouter)

const routes = 
[
    {
        name:'home',
        component:Nbar,
        path:'/',
    },
    {
        name:'details',
        component:Details,
        path:'/details/:id',
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router ;