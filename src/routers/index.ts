import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        /*   首页   */
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },

        /*   视界   */
        {
            path: '/visions/vision',
            name: 'vision',
            component: () => import('../views/visions/VisionView.vue'),
            children: [
                {
                    path: 'movie',
                    name: 'movie',
                    component: () => import('../views/visions/MovieView.vue'),
                },
                {
                    path: 'cartoon',
                    name: 'cartoon',
                    component: () => import('../views/visions/CartoonView.vue'), // 暂时使用同一个组件
                },
                {
                    path: 'doc',
                    name: 'doc',
                    component: () => import('../views/visions/DocView.vue'), // 暂时使用同一个组件
                }
            ]
        },
        /*   集智   */
        {
            path: '/wisdoms/wisdom',
            name: 'wisdom',
            component: () => import('../views/wisdoms/WisdomView.vue'),
            children: [
                {
                    path: 'note',
                    name: 'note',
                    component: () => import('../views/wisdoms/NoteView.vue'),
                },
                {
                    path: 'book',
                    name: 'book',
                    component: () => import('../views/wisdoms/BookView.vue'),
                },
                {
                    path: 'project',
                    name: 'project',
                    component: () => import('../views/wisdoms/ProjectView.vue'),
                }
            ]
        },
        /*   航迹   */
        {
            path: '/voyage_Traces/voyage_Traces',
            name: 'voyage_Traces',
            component: () => import('../views/voyage_Traces/Voyage_TracesView.vue'),
            children: [
                {
                    path: 'photo_collection',
                    name: 'photo collection',
                    component: () => import('../views/voyage_Traces/Photo_CollectionView.vue')
                },
                {
                    path: 'map_completion',
                    name: 'map_completion',
                    component: () => import('../views/voyage_Traces/Map_Completion.vue')
                },
            ]
        },

        /*   工具箱   */
        {
            path: '/tools',
            name: 'tools',
            component: () => import('../views/visions/ToolsView.vue'),
        },

        /*   关于   */
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/visions/AboutView.vue'),
            children: [
                {
                    path: 'milestones',
                    name: 'milestones',
                    component: () => import('../views/visions/AboutView.vue'),
                }
            ]
        },

        // 其他路由...
    ]
})

export default router