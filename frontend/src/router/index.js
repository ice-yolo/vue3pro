import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        component: () => import('../views/About.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router