import Overview from 'pages/over-view.vue';
import Detailview from 'pages/detail-view.vue';

export default [
    { path: '/', component: Overview, name: 'home' },
    { path: '/movie/:id', component: Detailview, name: 'movie' },
    { path: '*', redirect: { name: 'home' } },
]
