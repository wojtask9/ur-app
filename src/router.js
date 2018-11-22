import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Calendar from './views/Calendar.vue'
import MonthView from './views/MonthActions.vue'
import InsectActions from './views/InsectsActions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Calendar
    },
    {
      path: '/calendar/:date',
      name: 'calendar',
      component: MonthView
    },
    {
      path: '/insects/:date',
      name: 'insects',
      component: InsectActions
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
