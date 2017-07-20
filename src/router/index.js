import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Auth from '@/components/Auth.vue'
import Game from '@/components/Game.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
