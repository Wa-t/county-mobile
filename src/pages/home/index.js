import React, { Component } from 'react';
import { Flex, Carousel,Button } from 'antd-mobile';
import Header from '../../component/Header';
import Copyright from '../../component/Copyright';
import './index.less';
const siderBar = [
  {name: '关于我们'},
  {name: '客服中心'},
  {name: '会员加盟'},
  {name: '招商合作'},
]
export default class HomePage extends Component {
  state = {
    data: [
      'https://cdn.clgnews.com/video/site.mp4', 
      'https://cdn.clgnews.com/video/site.mp4', 
      'https://cdn.clgnews.com/video/site.mp4', 
      'https://cdn.clgnews.com/video/site.mp4', 
      'https://cdn.clgnews.com/video/site.mp4',
    ],
    submenuList: [
      {
        pic: '',
        picAttr: '百县榜',
        title: '中国县域发展榜',
        path: '/hundred'
      },
      {
        pic: '',
        picAttr: '郡县号',
        title: '县域民生视频引擎',
        path: '/channel'
      },
      {
        pic: '',
        picAttr: '郡县通',
        title: '县域赋能产品中心',
        path: '/pass'
      },
      {
        pic: '',
        picAttr: '小康优选',
        title: '县域地标农品商城',
        path: '/'
      },
      {
        pic: '',
        picAttr: '县域联播',
        title: '县域新闻资讯联播',
        url: 'http://xianyu.chinaxiaokang.com/map.html'
      },
      {
        pic: '',
        picAttr: '百县工程',
        title: '县域发展系列工程',
        url: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/'
      },
      {
        pic: '',
        picAttr: '小康指数',
        title: '中国小康网独家发布',
        url: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/'
      },
      {
        pic: '',
        picAttr: '中国小康网',
        title: '中国县域新闻第一网',
        url: 'http://www.chinaxiaokang.com/'
      },
    ],
    articleList: [
      {name: '关于郡县网', detail: '郡县网（www.clgnews.com)是中国小康网旗下县城主题综合资讯专网，县域大数据赋能服务中心和中国县域发展榜专属发布平台。郡县网开辟“百县榜”中国县域发展榜单、“郡县号” 县城民生视频引擎、“郡县通”县域赋能产品中心、“小康优选” 县域地标农品商城和“县城联播”县域新闻资讯联攝等五大功能专区。郡县网联通中国小康网官网和中国小康指数、百县工程、卡乐图片、圆点直播等各大专题频道，链接《小康》新媒体矩阵、郡县榜公众号、郡县通平台和各县域门户站，为全国2800多个县域开辟县域新闻资讯联播专区，日均上线县域资讯逾30000条，网站拥有百万级关注读者，日均阅读流量逾千万。郡县网关注民生，服务县域，致力于成为中国县域发展的资讯赋能专网。'},
      {name: '关于中国县域发展榜', detail: '“中国县域发展榜”聚焦县域发展，针对全国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康的辉煌成就，创建中国2856 个县域发展的综合测评体系，旨在为县域主政者和各有关职能单位提供执政参考，促进县域治理及经济发展，助推全国县域全面实现小康目标“最后一公里”，弘扬县域治理先进，塑造特色县域品牌和提升县域发展的社会综合形象。'},
      {name: '关于县域新闻联播', detail: '郡县网（www.clgnews.com)是中国小康网旗下县城主题综合资讯专网。中国小康网中国小康网中国小康网中国小康网'},
      {name: '关于中国小康网', detail: '《小康》旗下中国小康网是经国务院新闻办审批获得互联网新闻信息服务许可的国家级新闻网站，被誉为“中国县域新闻第一网”。拥有圆点直播、小康头条、小康视频网、小康手机报等全媒体新闻矩阵。'},
      {name: '关于《小康杂志社》', detail: '《小康》杂志隶属于中共中央机关刊《求是》杂志社，是中央级政经类媒体刊物，被中宣部列为重点时政新闻类刊物。《小康》杂志每年进驻全国“两会”驻地，成为代表、委员指定阅读刊物。'},
    ],
    imgHeight: 210,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'https://cdn.clgnews.com/video/site.mp4', 
          'https://cdn.clgnews.com/video/site.mp4', 
          'https://cdn.clgnews.com/video/site.mp4', 
          'https://cdn.clgnews.com/video/site.mp4', 
          'https://cdn.clgnews.com/video/site.mp4',
        ],
      });
    }, 100);
  }
  renderCarouselPanel() {
    return (
      <>
       {/* <Button className="switch-btn prev" shape="circle" icon="left" onClick={() => this.handleSwitch('prev')} ></Button>
        <Button className="switch-btn next" shape="circle" icon="right" onClick={() => this.handleSwitch('next')} ></Button> */}
        <Carousel
          className="carousel-container"
          autoplay={false}
          infinite
          style={{"touchAction": "none"}}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <a
              key={index}
              href="/"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <video 
                style={{ width: '100%', height: '100%', background: '#000',verticalAlign: 'top' }}
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
      </>
     
    )
  }
  renderSubmenuList () {
    return (
      <ul className="submenu-list">
        {this.state.submenuList.map((val, index) => 
          (
            <li key={index}>
              <a href={val.url || '#'} target={val.url? '_blank':''} onClick={(e) => {
                if(val.path) {
                  this.props.history.push(val.path)
                  e.preventDefault()
                } 
              }}>
                <div className="pic">{val.picAttr}</div>
                <div className="menu-desc">{val.title}</div>
              </a>
            </li>
          )
        )}
      </ul>
    )
  }
  renderMenus() {
    return (
      <Flex>
      </Flex>
    )
  }
  renderAbout () {
    return (
      <div className="about-list">
        {this.state.articleList.map((val, index) => 
          (
            <section key={index}>
              <h4>{val.name}</h4>
              <p>{val.detail}</p>
            </section>
          )
        )}
      </div>
    )
  }
  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <Header history={this.props.history} menu={siderBar}/>
        <div className="page-content">
          {this.renderCarouselPanel()}
          {this.renderMenus()}
          {this.renderSubmenuList()}
          {this.renderAbout()}
          <Copyright />
        </div>
      </Flex>
    )
  }
};
