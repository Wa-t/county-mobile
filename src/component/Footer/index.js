import React, { Component } from 'react';
import { Button } from 'antd';
import LinkGroup from '../LinkGroup';
import { footerMenu, friendlyLink, mediaPartners } from './linkData';
import Copyright from '../Copyright';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Copyright />
      </div>
    );
  }
}
