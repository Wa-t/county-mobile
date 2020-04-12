import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, Accordion, List, Button, Icon, InputItem } from 'antd-mobile';
import logo from '../../assets/images/logo.png';
import qrcode from '../../assets/images/qrcode.png';
import slogan from '../../assets/images/icon-slogan.gif';
import './index.less';

class Header extends Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  onLinkToHome = () => {
    this.props.history.push('/')
  }

  renderSideBar () {
    const {menu = []} = this.props
    return (
      <div>
        {menu.map((i, index) => {
          if(i.subMenu) {
            return (
              <Accordion key={index}>
                <Accordion.Panel header={i.name}>
                  <List>
                  {i.subMenu.map((s, index2) => {return (
                    <List.Item className="sub-menu" key={index2}>{s.name}</List.Item>
                  )})}
                  </List> 
                </Accordion.Panel>
              </Accordion>
            )

          } else {
            return (
              <List key={index}>
                <List.Item>
                  {i.name}
                </List.Item>
              </List> 
            );
          }
        })}
      </div>
    )
  }
  render() {
    const {siteName = '郡县网', icon = logo} = this.props
    return (
      <React.Fragment>
        <div className="user-state-control">
          <div onClick={this.onLinkToHome}>{siteName}欢迎您！www.clgnews.com</div>
          <div className="button-group">
            <Button type="ghost" className="state-control-btn" size="small" href="https://www.clgnews.com/login">
              登录
            </Button>
            <Button type="ghost" className="state-control-btn" size="small" href="https://www.clgnews.com/register">
              注册
            </Button>
          </div>
        </div>
        <div className="header-slogan">
          {/* <Link to='/'> */}
          <img className="logo" src={icon} alt="logo" onClick={this.onLinkToHome} />
          {/* </Link> */}
          <div className="search-bar">
            <InputItem clear placeholder="栏目/关键词查询" ref={el => (this.autoFocusInst = el)} extra={<Icon type="search" size="md" />} />
          </div>
          <Button className="menu-btn" onClick={this.onOpenChange}>
            <i className="iconfont">&#xe61a;</i>
          </Button>
          <Drawer
            className={this.state.open ? 'my-drawer' : 'my-drawer no-drawer'}
            position="right"
            enableDragHandle
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            sidebar={this.renderSideBar()}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
          >
            <div></div>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Header)