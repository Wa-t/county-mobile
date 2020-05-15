import React from 'react';
import './index.less';
import logo from '../../assets/images/footerLogo.png';


const Copyright = props => {
  return (
    <div className="copyright">
      <img src={logo} alt="logo" />
      <div className="info">
        <div>
        《小康》杂志社旗下网站 北京小康文化发展有限公司版权所有 
        </div>
        <div>
        Copyright©2019 <a href="www.chinaxiaokang.com">www.chinaxiaokang.com</a>
        </div>
      </div>
    </div>
  );
};


export default Copyright;
