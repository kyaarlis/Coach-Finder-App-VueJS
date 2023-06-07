import { createRouter, createWebHistory } from "vue-router";

import CoachesList from './pages/coaches/CoachesList'
import CoachDetails from './pages/coaches/CoachDetails'
import CoachRegistration from './pages/coaches/CoachRegistration'
import ContactCouch from './pages/requests/ContactCouch'

import RequestsRecieved from './pages/requests/RequestsRecieved'
import NotFound from './pages/NotFound'

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
                { name: 'contact', path: '/contact', component: ContactCouch, props: true }
            ]
        },
        {
            name: 'register',
            path: '/register',
            component: CoachRegistration
        },
        {
            name: 'requests',
            path: '/requests',
            component: RequestsRecieved
        },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router