// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/profile',
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'user',
              component: './Profile',
            },
            {
              path: '/project',
              name: 'project',
              icon: 'project',
              component: './Project',
            },
            {
              path: '/research',
              name: 'research',
              icon: 'book',
              component: './Research',
            },
            {
              name: 'cooperation',
              icon: 'star',
              path: '/cooperation',
              component: './Cooperation',
            },
            {
              name: 'news',
              icon: 'read',
              path: '/news',
              component: './News',
            },
            {
              name: 'team',
              icon: 'team',
              path: '/team',
              component: './Team',
            },
            {
              name: 'popular-science',
              icon: 'tag',
              path: '/ps',
              component: './PopularScience',
            },
            {
              name: 'EnglishProfile',
              icon: 'user',
              path: '/en',
              component: './EnglishProfile',
            },
            // {
            //   name: 'GazaStripEmergency',
            //   icon: 'read',
            //   path: '/gse',
            //   component: './GazaStripEmergency',
            // },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  publicPath: './',
  manifest: {
    basePath: '/',
    publicPath: '/public/',
  },
  outputPath: './website/dist',
});
