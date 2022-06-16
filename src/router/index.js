import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
// import { Service } from './services/service';
// import Vue from 'vue';
// import App from 'vue';
import Login from "../components/LoginButton.vue";
import Register from "../components/ClientRegister.vue";
// lazy-loaded
const Profile = () => import("../components/ClientProfile.vue")
const BoardAdmin = () => import("../components/BoardAdmin.vue")
const BoardModerator = () => import("../components/BoardModerator.vue")
const BoardUser = () => import("../components/BoardUser.vue")

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
        path: "/tab1/login",
        component: Login,
      },
      {
        path: "/tab1/register",
        component: Register,
      },
      {
        path: "tab1/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
      },
      {
        path: "/tab1/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
      },
      {
        path: "/tab1/mod",
        name: "moderator",
        // lazy-loaded
        component: BoardModerator,
      },
      {
        path: "/tab1/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/tab1/login', '/tab1/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
