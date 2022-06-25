import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({
    history: createWebHistory(),

    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
           
        },
        {
            path:'/login',
            name: 'login',
            component: () =>import(/* webpackChunkName: "home" */ '../views/Login.vue'),
        }
    ]
});

export default router