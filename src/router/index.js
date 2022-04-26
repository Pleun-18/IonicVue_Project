import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/TaskTab.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/SearchTab.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/InfoTab.vue')
      },
      {
        path: 'assigned',
        component: () => import('@/views/AssignedReports.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
