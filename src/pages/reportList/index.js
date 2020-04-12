import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Header from '../../component/Header';
import Intro from '../../component/Intro';
import entry_01 from '../../assets/images/entry_01.png';
import { menus } from '../hundred/menuList';
import Copyright from '../../component/Copyright';
import reportList from '../../assets/images/reportList.png';
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
          <Intro menus={menus} bgUrl={entry_01} title="百县榜" desc="中国县域发展榜" />
          <img className="report-list" src={reportList} alt="榜单总表" />
          <Copyright />
        </div>
      </Flex>
    )
  }
};



export default ReportList