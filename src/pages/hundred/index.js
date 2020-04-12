import React, { Component } from 'react';
import { Flex, Tabs, Icon, Toast } from 'antd-mobile';
import { Form, Select, Button } from 'antd';
import Header from '../../component/Header';
import Intro from '../../component/Intro';
import entry_01 from '../../assets/images/entry_01.png';
import { menus } from './menuList';
import Copyright from '../../component/Copyright';
import { selectingList, publishList, noPublishList } from './data';
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

const colors = ['cyan', 'yellow', 'purple', 'green'];

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
  showMore() {
    this.setState({
      showMore: !this.state.showMore
    })
  }
  renderSelecting () {
    return (
      <ul className="selecting">
        {
          selectingList.map((o, i) => {
            return (
              <li key={i} className={colors[i % colors.length]}>
              <div className="left">
                <div className="selecting-tag">榜单公告</div>
                <div className="selecting-tag">榜单冠名</div>
              </div>
              <div className="center">
                <div className="title">{o}</div>
                <div>发布时间：2020年4月14日</div>
              </div>
              <div className="right">
                我要投票
              </div>
            </li>
            )
          })
        }
      </ul>
    )
  }
  renderPublish () {
    return (
      <ul className="publish">
        {
          publishList.map((item, index) => {
            return (
              <li key={index}>
                <div className="left">
                  <div className="title">{item}</div>
                  <div className="time">发布时间：2020年4月14日</div>
                </div>
                <div className="right">
                  <button>十佳榜</button>
                  <button>百佳榜</button>
                  <button>榜单<br />报告</button>
                  <button>榜单<br />新闻</button>
                  {/* <button><a href="https://www.clgnews.com/report/detail/5e2264a591035c430d6edfc4/#px10">十佳榜</a></button>
                  <button><a href="https://www.clgnews.com/report/detail/5e2264a591035c430d6edfc4/#px100">百佳榜</a></button>
                  <button><a href="https://www.clgnews.com/report/detail/5e2264a591035c430d6edfac/">榜单<br />报告</a></button>
                  <button><a href="https://www.clgnews.com/news_list/bangdannews/1">榜单<br />新闻</a></button> */}
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  renderNoPublish () {
    return (
      <ul className="no-publish">
        {
          noPublishList.map((item, index) => {
            return (
              <li key={index}>
                <div className="left">2020<br />四月</div>
                <div className="right">
                  <div className="title">{item}</div>
                  <div className="time">发布时间：2020年4月14日</div>
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
          <Intro menus={menus} bgUrl={entry_01} title="百县榜" desc="中国县域发展榜" />
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
export default HundredF