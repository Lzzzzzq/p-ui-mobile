import { basicList, componentList } from './list'

export const basicConfig = basicList.map((name) => {
  return {
    path: name,
    name: `${name}-doc`,
    component: () => import(`../views/docs/${name}/index.vue`)
  }
})

export const componentDocConfig = componentList.map((name) => {
  return {
    path: name,
    name: `${name}-doc`,
    component: () => import(`../views/docs/components/${name}/index.vue`)
  }
})

export const componentDemoConfig = componentList.map((name) => {
  return {
    path: name,
    name: `${name}-demo`,
    component: () => import(`../views/docs/components/${name}/demo.vue`)
  }
})
