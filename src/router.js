import { createRouter, createWebHistory } from "vue-router";

import CoachesList from './components/coaches/CoachesList'
import CoachDetails from './components/coaches/CoachDetails'
import CoachRegistration from './components/coaches/CoachRegistration'
import ContactCouch from './components/coaches/ContactCouch'

import RequestsRecieved from './components/requests/RequestsRecieved'
import NotFound from './pages/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'coaches',
            path: '/coaches',
            component: CoachesList,
            children: [
                { path: ':id', component: CoachDetails, props: true }
            ]
        },
        {
            name: 'register',
            path: '/register',
            component: CoachRegistration
        },
        {
            name: 'contact',
            path: '/contact',
            component: ContactCouch
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