import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import banner from '../../assets/images/banner_03.png';
import Intro from '../../component/Intro';
import { videos } from './videos';
import { menus } from './menus';
import { getUrlParams } from '../../utils'
import './index.less';


class Channel extends Component {
  state = {
    imgHeight: 130,
    nowSelected: null,
    data: videos,
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText) {
      this.queryData()
    }
    console.log(prevProps.searchText, this.props.searchText)
  }

  onSelect = (title) => {
    const { nowSelected } = this.state;
    this.setState({
      nowSelected: nowSelected === title ? null : title
    }, this.queryData)
  }

  queryData = () => {
    const { searchText } = this.props;
    const { nowSelected } = this.state;


    const matchTagData = videos.filter(ele => {
      if (nowSelected) {
        return ele.tagList.includes(nowSelected);
      } else {
        return true
      }
    });


    const matchTextData = matchTagData.filter(item => searchText ? item.title.indexOf(searchText) > -1 : true)

    this.setState({
      data: [...matchTextData]
    })
  }


  renderCarouselPanel() {
    const { data } = this.state;
    return (
      <div className="videos">
        {data.map((item, key) => (
          <div
            key={key}
            className="video-content"
            style={{
              height: 160,
              width: !key ? '100%' : '50%'
            }}
          >
            <div className="vidio-top">
              {item.tagList.map(ele => (<h4 key={ele} className="title right">{ele}</h4>))}
            </div>
            <video

              style={{
                width: '100%',
                height: '100%',
                background: '#000',
                verticalAlign: 'top'
              }}
              controls
              controlsList="noremote  nodownload noremoteplayback"
              poster=""
              disablePictureInPicture={true}
              id="banner-video"
              loop="loop"
            >
              <source src={item.src} type="video/mp4" />
              您的浏览器不支持播放视频
            </video>
          </div>
        ))
        }
      </div>
    )
  }

  renderMenus = () => {
    const { nowSelected } = this.state;
    return (
      <div className="channel-menus">
        {
          menus.map((item) => (
            <div key={item.id} className="channel-menusItem" onClick={() => this.onSelect(item.title)}>
              <div className={nowSelected === item.title ? 'selected imgOut' : 'imgOut'}>
                <img src={item.icon} alt="" />
              </div>
              <div>{item.title}</div>
            </div>
          ))
        }
      </div>
    )
  }

  renderTopic() {

  }

  render() {
    const params = getUrlParams();
    const { tag } = params;
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
          <Intro bgUrl={banner} title="郡县号" desc="县域民生视频引擎" />
          {this.renderMenus()}
          <div className="channel-content">
            {this.renderCarouselPanel()}
            {/* {this.renderTopic()} */}
          </div>
        </div>
      </Flex >
    )
  }
};


export default connect((state) => ({ searchText: state.searchParamReuducer.searchText }))((Channel))