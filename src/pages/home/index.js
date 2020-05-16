import React, { Component } from 'react';
import { Flex, Accordion } from 'antd-mobile';
import bluebg from '../../assets/images/bluebg.png';
import greybg from '../../assets/images/greybg.png';
import navBg1 from '../../assets/images/homeNavBg1.png';
import navBg2 from '../../assets/images/homeNavBg2.png';
import vd0 from '../../assets/images/vd0.png';

import './index.less';

const row1Style = {
  padding: '20px 48px 10px',
  backgroundImage: `url(${navBg1})`
}

const row2Style = {
  padding: '0 10px 20px',
  backgroundImage: `url(${navBg2})`
}

export default class HomePage extends Component {
  state = {
    submenuList: [
      [
        {
          title: '百县榜',
          desc: (
            <div>
              <div>中国县域</div>
              <div>发展榜</div>
            </div>
          ),
          path: '/bang'
        },
        {
          title: '郡县号',
          desc: (
            <div>
              <div>县域民生</div>
              <div>视频引擎</div>
            </div>
          ),
          path: '/channel'
        },
        {
          title: '郡县通',
          desc: (
            <div>
              <div>县域赋能</div>
              <div>产品中心</div>
            </div>
          ),
          path: '/tong'
        },
      ],
      [
        {

          title: '县域联播',
          desc: (
            <div>
              <div>县域新闻</div>
              <div>资讯联播</div>
            </div>
          ),
          url: 'http://xianyu.chinaxiaokang.com/map.html'
        },
        {

          title: '百县工程',
          desc: (
            <div>
              <div>县域发展</div>
              <div>系列工程</div>
            </div>
          ),
          url: 'http://www.chinaxiaokang.com/xianyu/xiaokangbaixiangongcheng/'
        },
        {

          title: '小康指数',
          desc: (
            <div>
              <div>中国小康网</div>
              <div>独家发布</div>
            </div>
          ),
          url: 'http://www.chinaxiaokang.com/zhongguoxiaokangzhishu/'
        },
        {

          title: '中国小康网',
          desc: (
            <div>
              <div>中国县域</div>
              <div>新闻第一网</div>
            </div>
          ),
          url: 'http://www.chinaxiaokang.com/'
        },
      ]
    ],
    articleList: [
      { key: '1', name: '关于郡县网', detail: '郡县网（www.clgnews.com）是中国小康网旗下县域政务综合资讯专网，县域大数据赋能服务中心和中国县域发展榜专属发布平台。中国小康网由求是《小康》杂志社创建并运营，是国家级新闻网站和国家级视频网站。经国务院新闻办审批获得互联网新闻信息服务许可。经国家新闻出版广电总局审批具有信息网络传播视听节目许可。中国小康网被誉为“中国县域新闻第一网”。' },
      { key: '2', name: '关于中国县域发展榜', detail: '“中国县域发展榜”聚焦县域发展，针对全国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康的辉煌成就，创建中国2856 个县域发展的综合测评体系，旨在为县域主政者和各有关职能单位提供执政参考，促进县域治理及经济发展，助推全国县域全面实现小康目标“最后一公里”，弘扬县域治理先进，塑造特色县域品牌和提升县域发展的社会综合形象。' },
      { key: '3', name: '关于县域新闻联播', detail: '郡县网（www.clgnews.com)是中国小康网旗下县城主题综合资讯专网。中国小康网中国小康网中国小康网中国小康网' },
      { key: '4', name: '关于中国小康网', detail: '《小康》旗下中国小康网是经国务院新闻办审批获得互联网新闻信息服务许可的国家级新闻网站，被誉为“中国县域新闻第一网”。拥有圆点直播、小康头条、小康视频网、小康手机报等全媒体新闻矩阵。' },
      { key: '5', name: '关于《小康杂志社》', detail: '《小康》杂志隶属于中共中央机关刊《求是》杂志社，是中央级政经类媒体刊物，被中宣部列为重点时政新闻类刊物。《小康》杂志每年进驻全国“两会”驻地，成为代表、委员指定阅读刊物。' },
    ],
    imgHeight: 210,
    activeKey: '1',
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


  onChangeAccordion = (key) => {
    this.setState({
      activeKey: key
    })
  }


  renderCarouselPanel() {
    return (
      <video
        style={{ width: '100%', height: '100%', background: '#000', verticalAlign: 'top' }}
        controls
        controlsList="noremote footbar nodownload noremoteplayback"
        disablePictureInPicture={true}
        id="banner-video"
        poster={vd0}
        loop="loop"
      >
        <source src='https://cdn.clgnews.com/video/site.mp4' type="video/mp4" />
        您的浏览器不支持播放视频
      </video>
    )
  }
  renderSubmenuList() {
    return (
      <div >
        {this.state.submenuList.map((group, groupIndex) => {
          return (
            <ul
              className="submenu-list"
              key={groupIndex}
              style={groupIndex === 0 ? row1Style : row2Style}
            >
              {
                group.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url || '#'} target={item.url ? '_blank' : ''} onClick={(e) => {
                        if (item.path) {
                          this.props.history.push(item.path)
                          e.preventDefault()
                        }
                      }}>
                        <div className="menu-box" style={{ backgroundImage: `url(${index % 2 === 0 ? bluebg : greybg})` }}>
                          <div className="menu-title">{item.title}</div>
                          <div className="menu-desc">{item.desc}</div>
                        </div>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          )
        })
        }
      </div>
    )
  }
  renderMenus() {
    return (
      <Flex>
      </Flex>
    )
  }
  renderAbout() {
    const { activeKey } = this.state
    return (
      <div className="about-list">
        <Accordion accordion activeKey={activeKey} className="my-accordion" onChange={this.onChangeAccordion}>
          {
            this.state.articleList.map((val, index) =>
              (
                <Accordion.Panel header={val.name} key={val.key}>
                  <div className={activeKey === val.key ? 'show' : 'hidden'} />
                  <section key={index}>
                    <p>{val.detail}</p>
                  </section>
                </Accordion.Panel>
              )
            )
          }
        </Accordion>

      </div>
    )
  }
  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
          {this.renderCarouselPanel()}
          {this.renderMenus()}
          {this.renderSubmenuList()}
          {this.renderAbout()}
        </div>
      </Flex>
    )
  }
};
