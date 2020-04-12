import React, { Component } from 'react';
import { Flex, Carousel } from 'antd-mobile';
import Header from '../../component/Header';
import entry_01 from '../../assets/images/entry_01.png';
import Copyright from '../../component/Copyright';
import articleList from './articleList';
import Intro from '../../component/Intro';
import {getSearchParams} from '../../utils'
import { menus } from './menuList';
import './index.less';


export default class Hundred extends Component {
  render() {
    const params = getSearchParams();
    const { tag = '政会通'} = params;
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <Header />
        <div className="page-content">
          <Intro menus={menus} bgUrl={entry_01} title="政会通"/>
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
          <Copyright />
        </div>
      </Flex>
    )
  }
};
