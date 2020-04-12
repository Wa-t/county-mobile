import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import logoXiaokang from '../../assets/images/logo-xiaokang.jpg';

import PrimaryRouter from '../../router/PrimaryRouter';
import './index.less';

class AppTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
    };
  }
  render() {
    const { selectedTab, router } = this.state;
    const { location: { pathname } } = this.props;
    return (
      <div className="tab-bar">
        <TabBar
          unselectedTintColor="#949494"
          // tintColor="#1B63DA"
          barTintColor="#FFFFFF"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-tab-item">&#xe7ee;</i>}
            selectedIcon={<i className="iconfont icon-tab-item active">&#xe7ee;</i>}
            selected={pathname === '/'}
            onPress={() => {
              // this.setState({ selectedTab: 'homeTab' });
              this.props.history.push('/')
            }}
          >
            {/* <PrimaryRouter {...this.props}/> */}
          </TabBar.Item>
          <TabBar.Item
            title="百县榜"
            key="list"
            icon={<i className="iconfont icon-tab-item">&#xe670;</i>}
            selectedIcon={<i className="iconfont icon-tab-item active">&#xe670;</i>}
            selected={pathname === '/hundred'}
            onPress={() => {
              // this.setState({ selectedTab: 'hundredTab' });
              this.props.history.push('/hundred');
            }}
          >
            {/* <PrimaryRouter {...this.props}/> */}
          </TabBar.Item>
          <TabBar.Item
            title="郡县号"
            key="channel"
            icon={<i className="iconfont icon-tab-item">&#xe61c;</i>}
            selectedIcon={<i className="iconfont icon-tab-item active">&#xe61c;</i>}
            selected={pathname === '/channel'}
            onPress={() => {
              this.props.history.push('/channel');
            }}
          >
            {/* <PrimaryRouter {...this.props}/> */}
          </TabBar.Item>
          <TabBar.Item
            title="郡县通"
            key="pass"
            icon={<i className="iconfont icon-tab-item">&#xe698;</i>}
            selectedIcon={<i className="iconfont icon-tab-item active">&#xe698;</i>}
            selected={pathname === '/pass'}
            onPress={() => {
              this.props.history.push('/pass');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            title="中国小康网"
            key="pass"
            icon={<img style={{width: '22px', height: '22px', borderRadius: '22px'}} src={logoXiaokang} alt="中国小康网" />}
            selectedIcon={<i className="iconfont icon-tab-item active">&#xe698;</i>}
            onPress={() => {
              window.open('http://www.chinaxiaokang.com/')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(AppTabBar)
