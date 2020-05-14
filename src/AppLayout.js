import React, { Component } from "react";
import { connect } from 'react-redux';
import { Flex } from 'antd-mobile';
// import { Layout } from 'antd';
import PrimaryRouter from './router/PrimaryRouter';
// import SiteHeader from './component/Header';
// import SiteFooter from './component/Footer';
import NavBar from './component/AppNavBar';
import TabBar from './component/AppTabBar';
import './AppLayout.less';

// const { Header, Content, Footer } = Layout;

class AppLayout extends Component {
  render() {
    return (
      <Flex className="app-container" direction="column" align="stretch">
        {/* <Flex.Item className="app-nav">
          <NavBar />
        </Flex.Item> */}
        <Flex.Item className="app-content">
          <PrimaryRouter {...this.props} />
        </Flex.Item>
        {/* <Flex.Item className="app-tabBar">
          <TabBar {...this.props} />
        </Flex.Item> */}
      </Flex>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     appReducer: state.appReducer,
//     intl: props.intl,
//     messages: messages
//   };
// };

// export default connect()(AppLayout);
export default AppLayout;
