import React, { Component } from 'react';
import { Row, Empty } from 'antd';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from "axios";
import Intro from '../../component/Intro';
import banner_04 from '../../assets/images/banner_04.png';
import { getCompleteApi } from '../../utils'
import './index.less';

const pageTypeObj = {
  1: '榜单公告',
  2: '榜单新闻',
  3: '榜单报告',
  4: '榜单冠名',
}

const pageUrlObj = {
  1: '/notice_list/1?json=1', // 榜单公告
  2: '/news_list/bangdannews/1?json=1',//'榜单新闻',
  3: '/report_list/1?json=1',//'榜单报告',
  4: '/business_list/1?json=1',//'榜单冠名',
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.match.params.type || 1,
      data: [],
    };
  }
  componentDidMount() {
    axios.get(getCompleteApi(pageUrlObj[this.props.match.params.type]))
    .then(res => {
      if (res.status === 200) {
        this.setState({ data: res.data && res.data.newsList ? res.data.newsList : [] });
      } else {
        this.setState({ data: []})
      }
    })
    .catch(function (error) {
      this.setState({ data: []})
      console.log(error);
    });
  }
  

  render() {
    return (
      <div className="page-content">
        <Intro menus={[]} bgUrl={banner_04} title={pageTypeObj[this.state.type]} desc="" />
          {/* <Row>
            <Col span={24}>
              <Breadcrumb separator=">">
                <Breadcrumb.Item>
                  <Link to="/">首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="#">{pageTypeObj[this.state.type]}</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row> */}
        <div className="link-parent" >
          <List>
            {!this.state.data.length ? this.state.data.map(item => 
              <List.Item arrow="empty" wrap>
                <Link className="link-box" key={item._id} to={`/detail/${item._id}?type=${this.state.type}`} >
                  <div className="link-item link-item-title">{item.title}</div>
                  <List.Item.Brief><div className="link-item link-item-date">{moment(item.publishDate || item.publish).format('YYYY-MM-DD')}</div></List.Item.Brief>
                </Link>
              </List.Item>
            ) : <Empty description="暂无数据"/>}
          </List>
        </div>
      </div>
    );
  }
}
