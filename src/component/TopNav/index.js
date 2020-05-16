import React, { Component } from 'react';
import {Modal} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import Wait from '../Wait';
import './index.less';

const seleceStyle = {
  background: '#1b63da',
  color: '#fff'
}

const normalStyle = {
  background: '#ebeef9',
  color: '#333'
}

class Intro extends Component {
  state = {
    menus: [
      {
        id: 1,
        title: '榜单公告',
        url: '#/newList/1'
      },
      {
        id: 2,
        title: '榜单新闻',
        url: '#/newList/2'
      },
      {
        id: 3,
        title: '榜单报告',
        url: '#/newList/3'
      },
      {
        id: 4,
        title: '榜单冠名',
        url: '#/newList/4'
      },
      {
        id: 5,
        title: '榜单申报',
        url: ''
      },
      {
        id: 6,
        title: '榜单总表',
        url: '#/reportList'
      }
    ],
    visible: false
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }


  render() {
    const { menus } = this.state
    const {menuId = 1} = this.props
    return (
        <div>
          <ul className="menu-list">
          {menus.map(menu => (
            <li 
              key={menu.id} 
              
              style={ menuId === menu.id ? seleceStyle : normalStyle}
            >
              <a href={menu.url} onClick={(e) => {
                if(!menu.url) {
                  this.onOpen()
                  e.preventDefault()
                } 
              }}>
                {menu.title}
              </a>
            </li>
          ))}
      </ul>
      <Modal
        visible={this.state.visible}
        onClose={this.onClose}
        animationType="slide-up"
        footer={[{ text: '确定', onPress: this.onClose  }]}
        transparent
      >
        <Wait  text="正在开发中..." style={{width: '100%', height: 160, minHeight: 160}} />

      </Modal>
    </div>
    )
  }
};
export default withRouter(Intro)
