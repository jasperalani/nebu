import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginRedirectView from '../views/LoginRedirectView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/login-redirect',
      name: 'Login Redirect',
      component: LoginRedirectView,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutView,
      meta: {
        requiresAuth: true, // If you're using navigation guards
      },
    },
  ],
})

export default router
