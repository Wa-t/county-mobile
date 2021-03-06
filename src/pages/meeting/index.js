import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import entry_01 from '../../assets/images/entry_01.png';
import Copyright from '../../component/Copyright';
import articleList from './articleList';
import Intro from '../../component/Intro';
import {getUrlParams} from '../../utils'
import { menus } from './menuList';
import './index.less';


export default class Hundred extends Component {
  render() {
    const params = getUrlParams();
    const { tag = '政会通'} = params;
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
        <Intro menus={menus} bgUrl={entry_01} title="郡县通" desc="县域赋能产品中心" />
          <div className="meeting-content">
            <ul className="article-list">
              {
                articleList.map((article, index) => {
                  return (
                    <li key={index} className="article">
                      <div className="left">
                        <h4><a href={article.href}>{article.title}</a></h4>
                        <article>{article.content}</article>
                        <span className="tag">{tag}</span>
                      </div>
                      <div className="right">
                        <a href={article.href}>
                          <img src={article.image} alt={article.title} />
                        </a>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Flex>
    )
  }
};
