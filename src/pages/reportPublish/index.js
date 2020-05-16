import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Intro from '../../component/Intro';
import TopNav from '../../component/TopNav';
import Bg from '../../assets/images/bangbg.png';
import Wait from '../../component/Wait'
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
          <TopNav menuId={2} />
          <div>
          <Wait text="正在开发中..." />
        </div>
        </div>
      </Flex>
    )
  }
};



export default ReportList