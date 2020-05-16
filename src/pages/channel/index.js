import React, { Component } from 'react';
import { Flex, Carousel } from 'antd-mobile';
import Header from '../../component/Header';
import banner from '../../assets/images/banner_03.png';
import Intro from '../../component/Intro';
import Copyright from '../../component/Copyright';
import topicList from './topicList';
import { menus } from './menuList';
import { getUrlParams } from '../../utils'
import './index.less';

export default class Channel extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 210,
  }
  renderCarouselPanel() {
    return (
      <Carousel
        className="carousel-container"
        style={{ "touchAction": "none" }}
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map(val => (
          <a
            key={val}
            className="video-content"
            href="http://www.alipay.com"
            style={{ height: this.state.imgHeight }}
          >
            <h4 className="title right">{'县域联播'}</h4>
            <video
              style={{ width: '100%', height: '100%', background: '#000', verticalAlign: 'top' }}
              controls
              controlsList="noremote footbar nodownload noremoteplayback"
              disablePictureInPicture={true}
              id="banner-video"
              loop="loop"
            >
              <source src='https://cdn.clgnews.com/video/site.mp4' type="video/mp4" />
              您的浏览器不支持播放视频
            </video>
          </a>
        ))}
      </Carousel>
    )
  }

  renderTopic() {
    const params = getUrlParams();
    const { tag } = params;
    const list = tag ? [...topicList, ...topicList] : topicList
    return (
      <ul className="topic-list">
        {
          list.map((topic, index) => {
            return (
              <li key={index}>
                <h4 className={`title ${index % 2 === 0 ? 'left' : 'right'}`}>{tag || topic.title}</h4>
                <img src={topic.image} alt={topic.title} />
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    const params = getUrlParams();
    const { tag } = params;
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        {/* <Header /> */}
        <div className="page-content">
          <Intro menus={menus} bgUrl={banner} title="郡县号" desc="县域民生视频引擎" />
          <div className="channel-content">
            {!tag ? this.renderCarouselPanel() : ''}
            {this.renderTopic()}
          </div>
        </div>
      </Flex >
    )
  }
};
