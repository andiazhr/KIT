import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SidebarMenu from '../components/SidebarMenu.vue'

Vue.use(Router)

export default new Router({
  install (Vue) {
    Vue.component('sidebar-menu', SidebarMenu)
  },
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

export { SidebarMenu }
