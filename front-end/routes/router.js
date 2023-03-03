import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/headerC'
import signin from '../src/components/signin'
import login from '../src/components/login'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
        component: signin
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router