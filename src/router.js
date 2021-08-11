import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/food',
    name: 'Food',
    component: loadPage('FoodPage')
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: loadPage('DrinksPage'),
    children: [{
      path: 'hot',
      name: 'HotDrinks',
      component: loadPage('HotDrinksPage')
    },
    {
      path: 'blended',
      name: 'BlendedDrinks',
      component: loadPage('BlendedDrinksPage')
    }
    ]
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
