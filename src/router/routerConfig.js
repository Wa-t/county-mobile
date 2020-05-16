// import PassRouter from './PassRouter';
import HomePage from '../pages/home';
import HundredCounty from '../pages/hundred';
import Channel from '../pages/channel';
import PassRouter from './PassRouter';
import Meeting from '../pages/meeting';
import ReportList from '../pages/reportList';
import ReportPublish from '../pages/reportPublish';
import Pass from '../pages/pass';
import Platform from '../pages/pass/platform';
import About from '../pages/about';
import Member from '../pages/member';
import Service from '../pages/serviceCenter';
import Cooperation from '../pages/cooperation';
import Detail from '../pages/articalDetail';
import NewList from '../pages/list';

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
    path: '/bang',
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
    path: '/tong',
    component: PassRouter,
    name: '郡县通',
    showSub: false,
    routes: [
      {
        path: '/tong',
        component: Pass,
        name: '郡县通',
        exact: true
      },
      {
        path: '/tong/platform/list',
        component: Platform,
        name: '郡县通文章',
      },
      {
        path: '/tong/platform/detail',
        component: Platform,
        name: '郡县通平台',
      }
    ]
  },
  {
    path: '/meeting',
    component: Meeting,
    name: '政会通'
  },
  {
    path: '/reportList',
    component: ReportList,
    name: '榜单总表'
  },
  {
    path: '/reportPublish',
    component: ReportPublish,
    name: '榜单总表'
  },
  {
    path: '/about',
    component: About,
    name: '关于我们',
    isShow: false
  },
  {
    path: '/member',
    component: Member,
    name: '会员中心',
    isShow: false
  },
  {
    path: '/service',
    component: Service,
    name: '客服中心',
    isShow: false
  },
  {
    path: '/newList/:type',
    component: NewList,
    name: '客服中心',
    isShow: false
  },
  {
    path: '/cooperation',
    component: Cooperation,
    name: '榜单合作',
    isShow: false
  },
  {
    path: '/detail/:id',
    component: Detail,
    name: '文章详情',
    isShow: false
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
