import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        /*   登录页面   */
        {
            path: '/',
            name: 'login',
            component: () => import('../auth/Login.vue')
        },

        /*   注册页面   */
        {
            path: '/register',
            name: 'register',
            component: () => import('../auth/Register.vue')
        },

        /*   主页布局   */
        {
            path: '/home',
            name: 'home',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'homeContent',
                    component: () => import('../views/HomeView.vue')
                }
            ]
        },

        /*   视界   */
        {
            path: '/visions/vision',
            name: 'vision',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'visionContent',
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
                }
            ]
        },
        /*   集智   */
        {
            path: '/wisdoms/wisdom',
            name: 'wisdom',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'wisdomContent',
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
                }
            ]
        },
        /*   航迹   */
        {
            path: '/track/track',
            name: 'track',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'trackContent',
                    component: () => import('../views/track/TrackView.vue'),
                    children: [
                        {
                            path: 'album',
                            name: 'album',
                            component: () => import('../views/track/album.vue')
                        },
                        {
                            path: 'map_completion',
                            name: 'map_completion',
                            component: () => import('../views/track/album.vue')
                        },
                    ]
                }
            ]
        },

        /*   工具箱   */
        {
            path: '/tools',
            name: 'tools',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'toolsContent',
                    component: () => import('../views/Tools/ToolView.vue'),
                }
            ]
        },

        /*   关于   */
        {
            path: '/about',
            name: 'about',
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'aboutContent',
                    component: () => import('../views/About/AboutView.vue'),
                    children: [
                        {
                            path: 'milestones',
                            name: 'milestones',
                            component: () => import('../views/About/milestones.vue'),
                        }
                    ]
                }
            ]
        },

        // 其他路由...
    ]
})

// 路由守卫
// router.beforeEach((to, _from, next) => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    
//     // 如果访问登录页面且已经登录，重定向到主页
//     if (to.path === '/' && isLoggedIn) {
//         next('/home')
//         return
//     }
    
//     // 如果访问需要登录的页面但未登录，重定向到登录页
//     if (to.path !== '/' && !isLoggedIn) {
//         next('/')
//         return
//     }
    
//     next()
// })

export default router