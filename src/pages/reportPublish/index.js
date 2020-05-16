import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Header from '../../component/Header';
import Intro from '../../component/Intro';
import Copyright from '../../component/Copyright';
import TopNav from '../../component/TopNav';
import Bg from '../../assets/images/bangbg.png';
import './index.less';

const siderBar = [
  {name: '小康优选'},
  {name: '县域联播'},
  {name: '百县工程'},
  {name: '小康指数'},
  {name: '其他', subMenu: [
    {name: '关于我们'},
    {name: '客服中心'},
    {name: '会员加盟'},
    {name: '招商合作'},
  ]},
]

class ReportList extends Component {
  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <Header menu={siderBar} />
        <div className="page-content">
          <Intro menus={[]} bgUrl={Bg} title="百县榜" desc="中国县域发展榜" />
          <TopNav menuId={2} />
          <div className="report-publish">正在开发中...</div>
        </div>
      </Flex>
    )
  }
};



export default ReportList