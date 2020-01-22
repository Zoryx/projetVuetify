import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', redirect: {name:'home'}},
        {
            path: '/TestRoute',
            name: 'TestRoute',
            component:() => import('./views/TestRoute.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./views/home.vue'),
                    props: true
                },
                {
                    path: 'SlideTesT',
                    name: 'SlideTesT',
                    component: () => import('./views/SlideTesT.vue'),
                    props:true
                }
            ]
        }
    ]

})