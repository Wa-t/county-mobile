import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Flex } from 'antd-mobile';

import Intro from '../../component/Intro';

import './index.less';
import entry_01 from '../../assets/images/entry_01.png';
import { passMenus } from './passMenus';

export default class Pass extends Component {
  state = {
    showMore: false
  }
  handleEnter = (e) => {
    // 预检测初始化放大的 menu
    if (document.querySelector('.pass-menu-item:nth-child(8)').hasAttribute('class', 'pass-menu-active')) {
      document.querySelector('.pass-menu-item:nth-child(8)').classList.remove('pass-menu-active');
    }
    e.currentTarget.classList.add('pass-menu-active');
  }
  handleLeave = (e) => {
    e.currentTarget.classList.remove('pass-menu-active');
  }
  showMore() {
    this.setState({
      showMore: !this.state.showMore
    })
  }
  renderModuleMenu() {
    return (
      <React.Fragment>
        {passMenus.map(menu => (
          <NavLink to={`/tong/platform/list?title=${menu.title}`} key={menu.id} className={`pass-menu-item`} >
            <div>
              <p>{menu.title}</p>
              <p>{menu.desc}</p>
            </div>
          </NavLink>
        ))}
      </React.Fragment>
    )
  }
  renderNavModule() {
    return (
      <div className="pass-content-container">
        <div className="pass-nav-module">
          {this.renderModuleMenu()}
          <div className="module-content">
            <div className="videoWrap">

            </div>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
          <Intro bgUrl={entry_01} title="郡县通" desc="县域赋能产品中心" />
          <div onClick={() => this.showMore()} className={this.state.showMore ? 'about' : 'about textover'}>
            <h4>
              关于中国县域发展榜
              <span>{this.state.showMore ? '收起<' : '更多>'}</span>
            </h4>
            <div>"郡县通"平台是面向县域推出的数字资讯技术产品服务平台。“郡县通”产品和服务包括：政会通智能会务系统、政网哨舆情预警系统、政讯报郡县政务参考、微讯社郡县新闻资讯门户、圆点直播政经民生视频直播、卡乐图片原创图像影音数据库、郡县云桥县域融媒采集编播系统等，更多产品与服务，将顺应县域政务发展需求而继续推出。</div>
          </div>
          {this.renderNavModule()}
        </div>
      </Flex>
    )
  }
};
