import React, { Component } from 'react';
import Intro from '../../component/Intro';
import Wait from '../../component/Wait'
import banner_04 from '../../assets/images/banner_04.png';
import { checkFull } from '../../utils';
import './index.less';


export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.onresize = () => {
      if (!checkFull()) {
        // alert('11');
      }
    };
  }

  render() {
    return (
      <div className="page-content">
        <Intro menus={[]} bgUrl={banner_04} title="会员中心" desc="" />
        <div>
          <Wait text="正在开发中..." />
        </div>
      </div>
    );
  }
}
