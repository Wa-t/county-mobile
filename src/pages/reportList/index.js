import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Intro from '../../component/Intro';
import reportList from '../../assets/images/reportList.png';
import TopNav from '../../component/TopNav';
import Bg from '../../assets/images/bangbg.png';
import './index.less';

class ReportList extends Component {
  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
          <Intro menus={[]} bgUrl={Bg} title="百县榜" desc="中国县域发展榜" />
          <TopNav menuId={6} />
          <img className="report-list" src={reportList} alt="榜单总表" />
        </div>
      </Flex>
    )
  }
};



export default ReportList