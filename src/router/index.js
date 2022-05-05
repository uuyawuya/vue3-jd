import { createRouter, createWebHashHistory } from 'vue-router'

import { HomePage, CartPage, OrderPage, UserPage } from '@/views'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: '/order',
        component: OrderPage
    },
    {
        path: '/user',
        component: UserPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
