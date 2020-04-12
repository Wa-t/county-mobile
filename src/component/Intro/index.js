import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {getSearchParams} from '../../utils'
import './index.less';

class Intro extends Component {
  render() {
    const params = getSearchParams();
    const { tag } = params;

    const { menus, title, bgUrl, desc = "" } = this.props;
    const cardStyle = {
      backgroundImage: `url(${bgUrl})`,
    }
    return (
      <header className="intro" style={cardStyle}>
        <span className="desc">{desc}</span>
        <span className="title">{tag || title}</span>
        <ul className="menu-list">
          {menus.map(menu => (
            <li key={menu.id}>
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
      </header>
    )
  }
};
export default withRouter(Intro)
