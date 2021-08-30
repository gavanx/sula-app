import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/form2', component: '@/pages/form2' },
    { path: '/form3', component: '@/pages/form3' },
    { path: '/table', component: '@/pages/table' },
    { path: '/table2', component: '@/pages/table2' },
    { path: '/table3', component: '@/pages/table3' },
    { path: '/table4', component: '@/pages/table4' },
    { path: '/modalform', component: '@/pages/modalform' },
    { path: '/dynamic', component: '@/pages/dynamic' },
    { path: '/step', component: '@/pages/step' },
  ],
  fastRefresh: {},
  sula: {
    locale: {
      default: 'zh-CN',
    },
  },
});
