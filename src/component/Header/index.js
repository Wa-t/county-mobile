import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, Accordion, List, Button, Icon, InputItem } from 'antd-mobile';
import logo from '../../assets/images/logo.png';
import qrcode from '../../assets/images/qrcode.png';
import slogan from '../../assets/images/icon-slogan.gif';
import { Link } from 'react-router-dom'
import firstMenu from '../../assets/images/firstMenu.png';
import secondMenu from '../../assets/images/secondMenu.png';


import './index.less';

const menu = [
  {
    name: '百县榜',
    path: '/bang'
  },
  {
    name: '郡县号',
    path: '/channel'
  },
  {
    name: '郡县通',
    path: '/pass'
  },
  {
    name: '县域联播',
    path: 'http://xianyu.chinaxiaokang.com/map.html',
    isOut: true,
  },
  {
    name: '百县工程',
    path: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/',
    isOut: true,
  },
  {
    name: '中国小康指数',
    path: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/',
    isOut: true,
  },
  {
    name: '中国小康网',
    path: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/',
    isOut: true,
  },
  {
    name: '关于我们',
    path: '/about',
    isSecond: true,
  },
  {
    name: '客服中心',
    path: '/service',
    isSecond: true,
  },
  {
    name: '会员中心',
    path: '/member',
    isSecond: true,
  },
  {
    name: '榜单合作',
    path: '/cooperation',
    isSecond: true,
  },
]

class Header extends Component {
  state = {
    open: false,
    nowPage: ''
  }

  componentDidMount() {
    console.log('ggggggggggg')
    const { location } = this.props;
    const { pathname } = location;
    this.setState({
      nowPage: pathname
    })
    this.autoFocusInst.focus()
  }

  onSelect = (item) => {
    const { path } = item;
    this.setState({
      nowPage: path,
      open: false
    })
    if (item.isOut) {
      console.log(item)

      window.location.href = item.path;
    } else {
      this.props.history.push(path)
    }
  }

  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }

  onLinkToHome = () => {
    this.props.history.push('/')
  }

  renderSideBar() {
    const { nowPage } = this.state;

    return (
      <div>
        {menu.map((item, index) => {

          return (
            <List
              key={item.name}
              onClick={() => this.onSelect(item)}
            >
              <List.Item
                className={(item.path === nowPage && !item.isOut) ? 'selected' : ''}
              >
                <div
                  className="menu"
                  className={item.isSecond ? 'second' : ''}
                >
                  {item.isSecond ?
                    <img src={secondMenu} alt=""
                      style={{
                        margin: '0 20px 0 30px',
                        width: 22,
                        height: 22,
                        borderRadius: 22
                      }}
                    /> :
                    <img src={firstMenu} alt=""
                      style={{
                        marginRight: 20,
                        width: 22,
                        height: 22,
                        borderRadius: 22
                      }} />
                  }
                  {item.name}
                </div>
              </List.Item>
            </List>
          );
          // }
        }
        )}
      </div>
    )
  }

  onSearch = (e) => {
    const { nowPage } = this.state;
    const { onSearch, history } = this.props;
    console.log(nowPage)
    if (nowPage === 'channel') {
      history.push('/channel')
    } else if (nowPage === 'pass') {
      history.push(`/${nowPage}`)
    } else {
      history.push(`/pass`)
    }
  }

  render() {
    const { nowPage } = this.state;
    const { siteName = '郡县网', icon = logo } = this.props


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
          <Link to='/'>
            <img className="logo" src={icon} alt="logo" onClick={this.onLinkToHome} />
          </Link>

          {/* </Link> */}
          <div className="search-bar">
            <InputItem
              clear placeholder={nowPage !== 'channel' ? '郡县通内容查询' : '郡县号内容查询'}
              ref={el => (this.autoFocusInst = el)}
              extra={<Icon type="search" size="md" />}
              onExtraClick={this.onSearch}
            />
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