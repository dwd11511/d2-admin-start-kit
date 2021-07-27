import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([

])

export const menuAside = supplementPath([
  { path: '/index', title: '主页', icon: 'home' },
  { path: '/paper', title: '报告', icon: 'flask' },
  { path: '/sign', title: '签名', icon: 'flash' },
  { path: '/user', title: '用户', icon: 'id-card' },
  { path: '/order', title: '工单', icon: 'address-book' }
])
