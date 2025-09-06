import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
<<<<<<< HEAD
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
=======

        /*   首页   */
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
        },

        /*   视界   */
        {
            path: '/visions/vision',
            name: 'vision',
<<<<<<< HEAD
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
=======
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
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
                }
            ]
        },
        /*   集智   */
        {
            path: '/wisdoms/wisdom',
            name: 'wisdom',
<<<<<<< HEAD
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
=======
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
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
                }
            ]
        },
        /*   航迹   */
        {
<<<<<<< HEAD
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
=======
            path: '/voyage_Traces/voyage_Traces',
            name: 'voyage_Traces',
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
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
            ]
        },

        /*   工具箱   */
        {
            path: '/tools',
            name: 'tools',
<<<<<<< HEAD
            component: () => import('../layouts/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'toolsContent',
                    component: () => import('../views/Tools/ToolView.vue'),
                }
            ]
=======
            component: () => import('../views/Tools/ToolView.vue'),
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
        },

        /*   关于   */
        {
            path: '/about',
            name: 'about',
<<<<<<< HEAD
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
=======
            component: () => import('../views/About/AboutView.vue'),
            children: [
                {
                    path: 'milestones',
                    name: 'milestones',
                    component: () => import('../views/About/milestones.vue'),
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
                }
            ]
        },

        // 其他路由...
    ]
})

<<<<<<< HEAD
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

=======
>>>>>>> e72ccc6f06a7d77e2501ee008d62e752835c718c
export default router