import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AllEvents from '../views/AllEvents.vue'
import EventsUai from '../views/EventsUai.vue'
import EventsOrmawa from '../views/EventsOrmawa.vue'
import EventsUKKM from '../views/EventsUKKM.vue'

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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
