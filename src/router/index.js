import Vue from 'vue'
import VueRouter from 'vue-router'
import UploadView from '../views/UploadView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'UploadView',
          component: UploadView
        },
        {
            path: '/about',
           name: 'about',
          component: AboutView,
          props: true
        }
      ]
    })

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: UploadView
//   },
//   {
//     path: '/hello',
//     name: 'hello',
//     component: UploadView
//   },
//   {
//     path: '/about',
//     name: 'about',
   
//     component: AboutView
//   }
// ]

// const router = new VueRouter({
//   routes,
//   mode:'history'
// })

// export default router
