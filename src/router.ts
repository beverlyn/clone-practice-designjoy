import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/#top',
            component: () => import('./components/logo-header.vue'),
        },
        {
            path: '/#benefits',
            component: () => import('./components/benefits.vue"'),
        },
        {
            path: '/#latest',
            component: () => import('./components/latest-projects.vue'),
        },
        {
            path: '/#scope',
            component: () => import('./components/scope-of-work.vue'),
        },
        {
            path: '/#pricing',
            component: () => import('./components/pricing.vue'),
        },
        {
            path: '/#faqs',
            component: () => import('./components/faqs.vue'),
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            };
        }
        return { x: 0, y: 0 };
    }
});
