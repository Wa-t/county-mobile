import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        title: '榜单新闻',
        url: '#/newList/2'
      },
      {
        id: 2,
        title: '榜单发布',
        path: '/reportPublish'
      },
      {
        id: 3,
        title: '榜单报告',
        url: '#/newList/3'
      },
      {
        id: 4,
        title: '榜单公告',
        url: '#/newList/1'
      },
      {
        id: 5,
        title: '榜单冠名',
        url: '#/newList/4'
      },
      {
        id: 6,
        title: '榜单总表',
        path: 'reportList'
      }
    ]
  }


  render() {
    const { menus } = this.state
    const {menuId = 1} = this.props
    return (
        <ul className="menu-list">
        {menus.map(menu => (
          <li 
            key={menu.id} 
            
            style={ menuId === menu.id ? seleceStyle : normalStyle}
          >
            <a href={menu.url} onClick={(e) => {
              if(menu.path) {
                this.props.history.push(menu.path)
                e.preventDefault()
              } 
            }}>
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    )
  }
};
export default withRouter(Intro)
