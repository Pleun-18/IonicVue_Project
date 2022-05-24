import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
// import { Service } from './services/service';
// import Vue from 'vue';
// import App from 'vue';

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
      // {
      //   path: 'tab1/assigned',
      //   // name: 'assigned',
      //   component: () => import('@/components/AssignedReports.vue')
      // },
      {
        path: 'tab2',
        component: () => import('@/views/SearchTab.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/InfoTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// let vue = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

// Service.prototype.$vue = vue;

export default router
