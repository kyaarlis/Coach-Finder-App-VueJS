import { createRouter, createWebHistory } from "vue-router";

import CoachesList from './pages/coaches/CoachesList'
import CoachDetails from './pages/coaches/CoachDetails'
import CoachRegistration from './pages/coaches/CoachRegistration'
import ContactCouch from './pages/requests/ContactCouch'

import RequestsRecieved from './pages/requests/RequestsRecieved'
import NotFound from './pages/NotFound'
import userAuth from './pages/auth/userAuth.vue'

import store from './store/index.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            name: 'coaches',
            path: '/coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [
                { name: 'contact', path: 'contact', component: ContactCouch, props: true }
            ]
        },
        {
            name: 'register',
            path: '/register',
            component: CoachRegistration,
            meta: {requiresAuth: true}
        },
        {
            name: 'requests',
            path: '/requests',
            component: RequestsRecieved,
            meta: {requiresAuth: true}
        },
        {
            path: '/auth',
            component: userAuth,
            meta: {requiresNoAuth: true}
        },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach( (to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.userAuthStatus) {
        next('/auth')
    } else if (to.meta.requiresNoAuth && store.getters.userAuthStatus) {
        next('/coaches')
    } else {
        next()
    }
})

export default router