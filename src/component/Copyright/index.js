import React from 'react';
import './index.less';
import logo from '../../assets/images/logo-whileBg.png';

const style = {  }

const Copyright = props => {
  return (
    <div className="copyright">
      <img src={logo} alt="logo" />
      <div className="info">
        <div >
          Copyright © 2019
          <a href="http://www.chinaxiaokang.com/" target="_blank" rel="noopener noreferrer" >
            www.chinaxiaokang.com
          </a>
        </div>
        <div style={style}>
        版权所有 新华网股份有限公司 京ICP备12037298号
        </div>
      </div>
    </div>
  );
};


export default Copyright;
