// import PassRouter from './PassRouter';
import HomePage from '../pages/home';
import HundredCounty from '../pages/hundred';
import Channel from '../pages/channel';
import Pass from '../pages/pass';
import Meeting from '../pages/meeting';

// import Platform from '../pages/pass/platform';

const routes = [
  {
    name: '首页',
    key: 'home',
    path: '/',
    icon: '&#xe7ee;',
    component: HomePage,
    exact: true,
  },
  {
    path: '/hundred',
    component: HundredCounty,
    name: '百县榜',
    exact: true
  },
  {
    path: '/channel',
    component: Channel,
    name: '郡县号'
  },
  {
    path: '/pass',
    component: Pass,
    name: '郡县通',
    showSub: false,
    routes: [
      // {
      //   path: '/pass',
      //   component: Pass,
      //   name: '郡县通',
      //   exact: true
      // },
      // {
      //   path: '/pass/platform/:id',
      //   component: Platform,
      //   name: '郡县通平台',
      // }
    ]
  },
  {
    path: '/meeting',
    component: Meeting,
    name: '政会通'
  },
  // {
  //   path: '/age3',
  //   component: null,
  //   name: '县域联播',
  //   foreignSite: {
  //     path: 'http://xianyu.chinaxiaokang.com/map.html'
  //   }
  // },
  // {
  //   path: '/age4',
  //   component: null,
  //   name: '百县工程',
  //   foreignSite: {
  //     path: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/'
  //   }
  // },
  // {
  //   path: '/age5',
  //   component: null,
  //   name: '中国小康指数',
  //   foreignSite: {
  //     path: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/'
  //   }
  // },
  // {
  //   path: '/age6',
  //   component: null,
  //   name: '中国小康网',
  //   foreignSite: {
  //     path: 'http://www.chinaxiaokang.com/'
  //   }
  // },
];

export default routes;
