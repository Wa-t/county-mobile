import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Intro from '../../component/Intro';

import { Empty } from 'antd';
import banner_04 from '../../assets/images/banner_04.png';
import Article from './article';
import { getUrlParams } from '../../utils';
// import './index.less';
import './platform.less';
import { passMenus } from './passMenus';
import { getArticals, updateState } from "../../actions/platform";
import { connect } from "react-redux";
import { Flex } from 'antd-mobile';



class Platform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nowSelected: null,
      nowDetail: null,
    }
  }

  componentDidMount() {
    const data = getUrlParams();
    this.setState({
      nowSelected: data.title,
      nowDetail: data.name
    }, this.queryData)
  }

  componentDidUpdate(prevState) {
    if (prevState.searchText !== this.props.searchText) {
      this.queryData()
    }
  }


  onSelect = (item) => {
    const { nowSelected } = this.state;

    this.setState({
      nowDetail: null,
      nowSelected: item === nowSelected ? null : item
    }, this.queryData)
  }

  queryData = () => {
    const { dispatch, searchText } = this.props;
    const { nowSelected } = this.state;
    dispatch(getArticals({
      tag: nowSelected,
      searchText
    }));
  }


  viewDetail = (item) => {
    const { nowSelected } = this.state;
    this.props.history.push(`/tong/platform/detail?name=${item.title}&title=${nowSelected}`)
    this.setState({
      nowDetail: item.title
    })
  }

  renderMenus = () => {
    const { nowSelected } = this.state;
    const newMenus = passMenus.slice(0, 1).concat(passMenus.slice(1).reverse())
    return (
      <div className="tong-menus">
        {
          newMenus.map((item) => (
            <div
              key={item.id}
              className="channel-menusItem"
              onClick={() => this.onSelect(item.title)}>
              <div
                className={nowSelected === item.title ? 'imgOut selected' : 'imgOut'}
              >
                {/* <img src={item.icon} alt="" /> */}
                <div
                  className="menuIcon"
                  style={{
                    backgroundImage: `url(${item.icon})`,
                    // backgroundPosition: 'center',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // width: '15vw',
                    // height: '15vw',
                    // borderRadius: '15vw',
                    // margin: '0 auto'
                  }}
                >
                </div>
              </div>
              <div>{item.title}</div>
            </div>
          ))
        }
      </div>
    )
  }


  render() {
    const { articals } = this.props;
    const { nowDetail } = this.state;

    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <div className="page-content">
          <Intro bgUrl={banner_04} title="郡县通" desc="县域赋能产品中心" />

          {this.renderMenus()}
          {!nowDetail ?
            <div
              style={{
                minHeight: 30,
                marginBottom: 5,
                marginTop: 10
              }}
            >
              {
                articals.length ? articals.map((item, key) => (
                  <div key={key} className="list-item">
                    <div className="img">
                      <img alt="" style={{ width: 160, height: 100 }} src={item.img}></img>
                    </div>
                    <div className="right">
                      <div className="title">
                        {item.title}
                      </div>
                      <div className="content">
                        {`${item.content.slice(0, 25)}.....`}
                      </div>

                      <div className="footer">
                        <span className="publish">发布时间：{item.time}</span>
                        <span className="tag">{item.tag} </span>
                      </div>

                      <div style={{ marginTop: 2 }} >
                        <Button
                          style={{
                            backgroundColor: '#3652cb',
                            color: '#FFF',
                            width: 60,
                            height: 25,
                            fontSize: 'xx-small',
                            lineHeight: '25px'
                          }}
                          onClick={() => this.viewDetail(item)}
                          shape="round">
                          阅读详情
                        </Button>
                      </div>
                    </div>

                  </div>
                )) : <Empty description="暂无数据！" />
              }
            </div>
            : <Article title={nowDetail} />
          }
          {/* <Article /> */}
        </div>
      </Flex>

      // <Row className="pass-platform-container">
      //   <Col span={24}>
      //     <Intro bgUrl={banner_04} title="郡县通" desc="县域赋能产品中心" />
      //   </Col>
      //   <Col span={24} className="pass-content-cotainer">
      //     <CarouselMenu onSelecte={this.onSelecte} menus={newMenus} perPageCount={8} defaultSelecte={this.state.selectedItem.id} />
      //     <Search placeholder="关键词搜索" onChange={this.onInput} onSearch={this.onSearch} value={this.state.searchText} enterButton size="large" />

      //     {!name ?
      //       <List
      //         style={{ minHeight: 300, marginBottom: 100 }}
      //         itemLayout="vertical"
      //         size="large"
      //         locale={{ emptyText: '暂无数据' }}
      //         dataSource={articals}
      //         renderItem={item => (
      //           <List.Item
      //             key={item.id}
      //           >
      //             <div className="list-item">

      //               {item.img ?
      //                 <div className="img">
      //                   <img alt="" width="300" src={item.img}></img>
      //                 </div>
      //                 : null
      //               }
      //               <div className="right">
      //                 <div className="title">
      //                   {item.title}
      //                 </div>
      //                 <div className="content">
      //                   {`${item.content.slice(0, 70)}.....`}
      //                 </div>

      //                 <div className="footer">
      //                   <span className="publish">发布时间：{item.time}</span>
      //                   <span className="tag">{item.tag} </span>
      //                 </div>

      //                 <div style={{ marginTop: 23 }}>
      //                   <Button
      //                     style={{
      //                       backgroundColor: '#3652cb',
      //                       color: '#FFF',
      //                       width: 110,
      //                       height: 35
      //                     }}
      //                     onClick={() => this.viewDetail(item)}
      //                     shape="round">
      //                     阅读详情
      //                   </Button>
      //                 </div>
      //               </div>

      //             </div>
      //           </List.Item>
      //         )}
      //       />
      //       : <Article title={name} />
      //     }
      //     {/* <Article /> */}
      //   </Col>
      // </Row>
    );
  }
}

export default connect((state) => ({ ...state.platformReducer }))(Platform);