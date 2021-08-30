import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/table', component: '@/pages/table' },
    { path: '/table2', component: '@/pages/table2' },
    { path: '/form2', component: '@/pages/form2' },
    { path: '/modalform', component: '@/pages/modalform' },
  ],
  fastRefresh: {},
  sula: {
    locale: {
      default: 'zh-CN',
    },
  },
});
