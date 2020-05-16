import React, { Component } from 'react';
import { Empty } from 'antd';
import Intro from '../../component/Intro';
import banner_04 from '../../assets/images/banner_04.png';
import axios from "axios";
import moment from 'moment'
import { getUrlParams, getCompleteApi } from '../../utils'
import './index.less';

const isEmptyObj = (obj) => !Object.keys(obj).length

const before = {
  1: 'notice',
  2: 'news',
  3: 'report',
  4: 'business',
}

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: {}
    };
  }
  componentDidMount() {
    const { id } = this.state;
    const { type = "", link } = getUrlParams() || {}
    axios.get(getCompleteApi(`/${before[type]}/detail/${id}?json=1`))
      .then(res => {
        if (res.status === 200) {
          this.setState({
            data: res.data
          }, () => {
            const summaryReport = document.querySelector(`#${link}`)
            if (summaryReport) summaryReport.scrollIntoView({ behavior: "smooth" })
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { title, obj = {}, detail = {} } = this.state.data;
    const { id } = this.state;

    const lastData = isEmptyObj(obj) ? detail : obj
    const { type = "" } = getUrlParams() || {}
    const noData = !id || !type || isEmptyObj(lastData)

    // console.log(lastData)
    return (
      <div className="page-content">
        <Intro menus={[]} bgUrl={banner_04} title="" desc="" />
          <div className="article">

            {!noData ? (
              <>
                <h2 className="title">{title}</h2>
                <div className="publishDate">发布时间：{moment(lastData.publishDate || lastData.publish || '').format('YYYY-MM-DD')}</div>
                <div className="content" dangerouslySetInnerHTML={{ __html: lastData.content }} />
              </>) : <Empty style={{ minHeight: 300 }} description="暂无数据" />
            }
            {lastData.px10 ? (
              <div id="px10" className="px10">
                <img
                  style={{ width: '100%' }}
                  className="img" src={lastData.px10.split('?')[0]} alt="" />
              </div>
            ) : null}
            {lastData.px100 ? (
              <div id="px100" className="img px100" >
                <img style={{ width: '100%' }} src={lastData.px100.split('?')[0]} alt="" />
              </div>) : null}
          </div>
      </div>
    );
  }
}
