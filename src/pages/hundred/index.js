import React, { Component } from 'react';
import { connect } from "react-redux";
import { Flex, Tabs, Icon, Toast } from 'antd-mobile';
import { Form, Select, Button } from 'antd';
import Header from '../../component/Header';
import Intro from '../../component/Intro';
import TopNav from './topNav';
import entry_01 from '../../assets/images/entry_01.png';
import { menus } from './menuList';
import Copyright from '../../component/Copyright';
import publish10 from '../../assets/images/publish10.png'
import publish100 from '../../assets/images/publish100.png'
import publishReport from '../../assets/images/publish-report.png'
import publishNews from '../../assets/images/publish-news.png'
import unPublish from '../../assets/images/unPublish.png'
import * as actions from '../../actions/hundred';
import './index.less';

const { Option } = Select;
const siderBar = [
  {name: '小康优选'},
  {name: '县域联播'},
  {name: '百县工程'},
  {name: '小康指数'},
  {name: '其他', subMenu: [
    {name: '关于我们'},
    {name: '客服中心'},
    {name: '会员加盟'},
    {name: '招商合作'},
  ]},
]


class Hundred extends Component {
  state = {
    tabs: [
      { title: '进行中榜单'},
      { title: '已发布榜单' },
      { title: '未发布榜单' },
      { title: (<span style={{verticalAlign: 'bottom'}}>
        <Icon style={{verticalAlign: 'text-bottom'}} size="xs" type="search" />
        榜单查询
        </span>)}
    ],
    showMore: false
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.updateState({ loading: true }))
    dispatch(actions.fetchData())
  }

  showMore() {
    this.setState({
      showMore: !this.state.showMore
    })
  }

  getFilterList = (filterKey) => {
    const { list = [] } = this.props.data;
    return list.filter(item => {
      return item.status === filterKey
    })
  }


  renderSelecting () {
    const { loading } = this.props;
    const currentList = this.getFilterList(1) // 1进行中
    return (
      <ul className="selecting">
        {
            currentList.map((item, i) => {
              return (
                <li key={i} >
                  <div className="left">
                    <Button className="selecting-tag">榜单公告</Button>
                    <Button className="selecting-tag">榜单冠名</Button>
                  </div>
                  <div className="center">
                    <div className="title">{item.title}</div>
                    <div>发布时间：{item.date}</div>
                  </div>
                  <div className="right">
                    <div>我要投票</div>
                  </div>
                </li>
              )
            })
          }
      </ul>
    )
  }
  renderPublish () {
    const { loading } = this.props;
    const currentList = this.getFilterList(3) // 3已发布（已结束）
    return (
      <ul className="publish">
        {
            currentList.map((item, index) => {
              const link = `#/detail/${item._id}?type=3`
              return (
                <li key={index}>
                  <div className="left">
                    <div className="title">
                      <a href={`${link}`} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </div>
                    <div className="time">发布时间：{item.date}</div>
                  </div>
                  <div className="right">
                    <div>
                      <a href={`${link}&link=px10`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publish10} alt="" />
                      </a>
                    </div>
                    <div>
                      <a href={`${link}&link=px100`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publish100} alt="" />
                      </a>
                    </div>
                    <div>
                      <a href={`${link}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publishReport} alt="" />
                      </a>
                    </div>
                    <div>

                      <a href="#/newList/2" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '100%' }} src={publishNews} alt="" />
                      </a>
                    </div>
                  </div>
                </li>
              )
            })
          }
      </ul>
    )
  }
  renderNoPublish () {
    const { loading } = this.props;
    const currentList = this.getFilterList(0) // 0未发布（待启动）
    return (
      <ul className="no-publish">
        {
            currentList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="left">
                    <img src={unPublish} alt="" />
                  </div>
                  <div className="right">
                    <div className="title">{item.title}</div>
                    <div className="time">发布时间：{item.date}</div>
                  </div>
                </li>
              )
            })
          }
      </ul>
    )
  }

  renderListQuery() {
    const { getFieldDecorator } = this.props.form;
      return (
        <div style={{ padding: '10px', marginTop: '10px' }}>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="榜单">
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Select placeholder="选择县域" onChange={this.handleSelectChange}>
                <Option value="1">2020中国县域电子商务百强榜</Option>
                <Option value="2">2020中国礼仪百佳县市</Option>
                <Option value="3">2020中国春季休闲百佳县市</Option>
                <Option value="4">2020中国县域消费百强榜</Option>
                <Option value="5">2020中国县域文化消费百强榜</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="县域">
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select placeholder="选择榜单" onChange={this.handleSelectChange}>
                <Option value="1">130102 河北 石家庄市 长安区</Option>
                <Option value="2">130104 河北 石家庄市 桥西区</Option>
                <Option value="3">130105 河北 石家庄市 新华区</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 6 }}>
            <Button type="primary" style={{ width: '100%' }} onClick={this.handleSearchClick}>
              查询
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
  }

  handleSearchClick = () => {
    Toast.info('This is a toast tips !!!', 1);
  }

  render() {
    return (
      <Flex
        direction="column"
        align="stretch"
      >
        <Header menu={siderBar} />
        <div className="page-content">
          <TopNav menus={menus} title="百县榜" desc="中国县域发展榜" />
          <div onClick={() => this.showMore()} className={this.state.showMore? 'about' : 'about textover'}>
            <h4>
              关于中国县域发展榜
              <span>{this.state.showMore ? '收起<': '更多>'}</span>
            </h4>
            <div>“中国县域发展榜”聚焦县域发展，针对全国每个县域的多项政务领域，深度观察社会民生发展的“毛细血管”，展现中国全面小康的辉煌成就，创建中国2856 个县域发展的综合测评体系，旨在为县域主政者和各有关职能单位提供执政参考，促进县域治理及经济发展，助推全国县域全面实现小康目标“最后一公里”，弘扬县域治理先进，塑造特色县域品牌和提升县域发展的社会综合形象。</div>
          </div>
          <div className="main-content">
            <Tabs tabs={this.state.tabs}
              initialPage={0}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            >
              <section>
                {this.renderSelecting()}
              </section>
              <section>
                {this.renderPublish()}
              </section>
              <section>
                {this.renderNoPublish()}
              </section>
              <section className="hundred-search">
                {this.renderListQuery()}
              </section>
            </Tabs>
          </div>
          <Copyright />
        </div>
      </Flex>
    )
  }
};


const HundredF = Form.create()(Hundred);
export default connect(state => state.hundredReducer)(HundredF);