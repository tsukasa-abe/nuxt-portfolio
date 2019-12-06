import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2423f7dc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _353b1588 = () => interopDefault(import('../pages/items/index.vue' /* webpackChunkName: "pages/items/index" */))
const _9754be8c = () => interopDefault(import('../pages/items/_path.vue' /* webpackChunkName: "pages/items/_path" */))
const _0da5ded7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2423f7dc,
    name: "about"
  }, {
    path: "/items",
    component: _353b1588,
    name: "items"
  }, {
    path: "/items/:path",
    component: _9754be8c,
    name: "items-path"
  }, {
    path: "/",
    component: _0da5ded7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
