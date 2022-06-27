/**
 * disc:
 * date: 2020-06-13 21:05:54
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, Row, Table, Tag, Card } from 'antd';
import { connect } from 'dva';
import {FormattedMessage, Link} from "umi";
import React from "react";

import { Carousel } from 'antd';

const { Title, Text } = Typography;
const { Meta } = Card;

const students = [
  {
    name: "吴极",
    year: 2022,
    degree: "博士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "巩钰",
    year: 2022,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "曹汉瑞",
    year: 2022,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "何苗",
    year: 2022,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "李津津",
    year: 2021,
    degree: "博士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "钟芊芊",
    year: 2021,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "贾明晖",
    year: 2021,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: "http://minghuijia.cn/"
  },
  {
    name: "邵子轩",
    year: 2021,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: "https://s-shao.github.io/"
  },
  {
    name: "张雨禾",
    year: 2021,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "陈宇伦",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "许强",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "长光卫星技术股份有限公司",
    blog_link: ""
  },
  {
    name: "袁孟欣",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "李嘉琪",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "北京市测绘设计研究院",
    blog_link: ""
  },
  {
    name: "王妍",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "",
    blog_link: ""
  },
  {
    name: "Anurak Chakpor",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "泰国留学生",
    blog_link: ""
  },
  {
    name: "尹子民",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "腾讯公司",
    blog_link: ""
  },
  {
    name: "张雨欣",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "黑龙江地理信息测绘局",
    blog_link: ""
  },
  {
    name: "尚小雨",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "腾讯公司",
    blog_link: ""
  },
  {
    name: "Vorlajuck Khantivong",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "老挝留学生",
    blog_link: ""
  },
  {
    name: "李西亚",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "高德地图",
    blog_link: ""
  },
  {
    name: "谢金龙",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "长光卫星技术有限公司",
    blog_link: ""
  },
  {
    name: "赵文博",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "天津市测绘院",
    blog_link: ""
  },
  {
    name: "张霖",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "武汉大学读博",
    blog_link: ""
  },
  {
    name: "刘姗姗",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "华为公司",
    blog_link: ""
  },
  {
    name: "赵丽娴",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "国際航業株式会社",
    blog_link: ""
  },
  {
    name: "薛翔宇",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "吉林省科技厅",
    blog_link: ""
  },
  {
    name: "Muhammad Haris",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "巴基斯坦留学生",
    blog_link: ""
  },
  {
    name: "赵霞",
    year: 2016,
    degree: "博士",
    img: "",
    job: "浙江财经大学",
    blog_link: ""
  },
  {
    name: "仇雅倩",
    year: 2016,
    degree: "硕士",
    img: "",
    job: "中国人民银行",
    blog_link: ""
  },
  {
    name: "余涵若",
    year: 2016,
    degree: "硕士",
    img: "",
    job: "百度地图",
    blog_link: ""
  },
  {
    name: "Faouzi Bouarouri",
    year: 2015,
    degree: "硕士",
    img: "",
    job: "阿尔及利亚国家宇航局",
    blog_link: ""
  },
  {
    name: "王飒",
    year: 2012,
    degree: "硕士",
    img: "",
    job: "中科院空天信息院读博",
    blog_link: ""
  },
  {
    name: "叶文韬",
    year: 2011,
    degree: "硕士",
    img: "",
    job: "澳大利亚",
    blog_link: ""
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',  //students[index].blog_link
    render: (text, record, index) => {
        if (students[index].blog_link == ""){
          return <a >{text}</a>
        } else {
          return <a href={students[index].blog_link} target='_blank' without rel="noreferrer">{text}</a>
        }
      }
  },
  {
    title: '入学年份',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '毕业去向',
    key: 'job',
    dataIndex: 'job',
    render: tags => <Tag color={"geekblue"} key={tags}>{tags}</Tag>,
  },
];

const contentStyle = {
  width:'100%',
};


const Team = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}
                       subTitle="我们是一个充满活力且友爱团队，能为你科研提供足够的资源。"
    >
      <Row>
        {/*<Title level={4}><FormattedMessage id="research.paper.title"/></Title>*/}
        <Title level={4}>团队描述</Title>
        <br></br>
        
      </Row>
      <Row style={{ fontSize: 16 }}>
        <p>
          我们是一个充满活力且友爱团队，导师对学生提供全方位的培养支持，鼓励优秀学生攻读博士学位。
        </p>
      </Row>

      {/* <Row>
        <Title level={4}>团队活动照片</Title>
      </Row> */}
      <Carousel autoplay dotPosition={"bottom"} style={{width:'600px'}}>
        <div>
          <img style={contentStyle} src={require("../../assets/images/team_pic/small_pic4.jpg")} />
          {/* <img style={contentStyle} src={"https://cdn.jsdelivr.net/gh/MinghuiJia/LiXi_Blog_Img/team_pic/small_pic4.jpg"} /> */}
        </div>
        <div>
          <img style={contentStyle} src={require("../../assets/images/team_pic/small_pic5.jpg")} />
          {/* <img style={contentStyle} src={"https://cdn.jsdelivr.net/gh/MinghuiJia/LiXi_Blog_Img/team_pic/small_pic5.jpg"} /> */}
        </div>
        {/* <div>
          <img style={contentStyle} src={require("../../assets/images/team_pic/small_pic2.jpg")} />
        </div> */}
        <div>
          <img style={contentStyle} src={require("../../assets/images/team_pic/small_pic3.jpg")} />
          {/* <img style={contentStyle} src={"https://cdn.jsdelivr.net/gh/MinghuiJia/LiXi_Blog_Img/team_pic/small_pic3.jpg"} /> */}
        </div>
        <div>
          {/* <img style={contentStyle} src={require("../../assets/images/team_pic/small_pic1.jpg")} /> */}
          <img style={contentStyle} src={"https://cdn.jsdelivr.net/gh/MinghuiJia/LiXi_Blog_Img/team_pic/small_pic1.jpg"} />
        </div>
      </Carousel>
      <Row>
        {/*<Title level={4}><FormattedMessage id="research.paper.title"/></Title>*/}
        <Title level={4}>指导以及合作指导研究生共 {students.length} 名</Title>
      </Row>
      <Table pagination={false}
             columns={columns}
             bordered
             dataSource={students} />
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Team);
