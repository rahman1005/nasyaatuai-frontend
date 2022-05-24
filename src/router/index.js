import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AllEvents from '../views/AllEvents.vue'
import EventsUai from '../views/EventsUai.vue'
import EventsOrmawa from '../views/EventsOrmawa.vue'
import EventsUKKM from '../views/EventsUKKM.vue'
import Dashboardview from '../views/Dashboard.vue'
import inputPostView from '../views/inputPost.vue'
import postLembaga from '../views/post-lembaga.vue'
import detailEvent from '../views/eventdetail.vue'
import formput from '../views/fromPutLembaga.vue'
import loginadmin from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/allevents',
    name: 'allevents',
    component:AllEvents
  },
  {
    path: '/eventsuai',
    name: 'eventsuai',
    component:EventsUai
  },
   {
    path: '/eventsormawa',
    name: 'eventsormawa',
    component:EventsOrmawa
  },
  {
    path: '/eventukkm',
    name: 'eventsukkm',
    component:EventsUKKM
  },
  {
    path:'/dashboard',
    name: 'dashboard',
    component:Dashboardview
  },
  {
    path:'/inputpost',
    name: 'inputpost',
    component:inputPostView
  },
  {
    path:'/postlembaga',
    name: 'postlembaga',
    component:postLembaga
  },
  {
    path:'/detailevent/:eventId',
    name: 'detailevent',
    component:detailEvent
  },
  {
    path:'/putevent/:eventId',
    name: 'putevent',
    component:formput
  },
  {
    path:'/login',
    name: 'login-admin',
    component:loginadmin
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
