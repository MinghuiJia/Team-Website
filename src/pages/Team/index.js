/**
 * disc:
 * date: 2020-06-13 21:05:54
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, Row, Table, Tag } from 'antd';
import { connect } from 'dva';
import {FormattedMessage} from "umi";
import React from "react";

const { Title, Text } = Typography;

const students = [
  {
    name: "李津津",
    year: 2021,
    degree: "博士",
    img: "",
    job: ""
  },
  {
    name: "贾明晖",
    year: 2021,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "邵子轩",
    year: 2021,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "张雨禾",
    year: 2021,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "陈宇伦",
    year: 2020,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "许强",
    year: 2020,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "袁孟欣",
    year: 2020,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "李嘉琪",
    year: 2020,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "王妍",
    year: 2020,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "Anurak Chakpor",
    year: 2020,
    degree: "硕士",
    img: "",
    job: "泰国留学生"
  },
  {
    name: "尹子民",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "腾讯"
  },
  {
    name: "张雨欣",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "黑龙江地理信息测绘局"
  },
  {
    name: "尚小雨",
    year: 2019,
    degree: "硕士",
    img: "",
    job: ""
  },
  {
    name: "Vorlajuck Khantivong",
    year: 2019,
    degree: "硕士",
    img: "",
    job: "老挝留学生"
  },
  {
    name: "李西亚",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "高德"
  },
  {
    name: "谢金龙",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "长光卫星技术有限公司"
  },
  {
    name: "赵文博",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "天津测绘院"
  },
  {
    name: "张霖",
    year: 2018,
    degree: "硕士",
    img: "",
    job: "读博"
  },
  {
    name: "刘姗姗",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "华为公司"
  },
  {
    name: "赵丽娴",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "国際航業株式会社"
  },
  {
    name: "薛翔宇",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "吉林省科技厅"
  },
  {
    name: "Muhammad Haris",
    year: 2017,
    degree: "硕士",
    img: "",
    job: "巴基斯坦留学生"
  },
  {
    name: "赵霞",
    year: 2016,
    degree: "博士",
    img: "",
    job: ""
  },
  {
    name: "仇雅倩",
    year: 2016,
    degree: "硕士",
    img: "",
    job: "中国人民银行"
  },
  {
    name: "余涵若",
    year: 2016,
    degree: "硕士",
    img: "",
    job: "百度地图"
  },
  {
    name: "Faouzi Bouarouri",
    year: 2015,
    degree: "硕士",
    img: "",
    job: "阿尔及利亚国家宇航局"
  },
  {
    name: "王飒",
    year: 2012,
    degree: "硕士",
    img: "",
    job: "中科院空天信息院读博"
  },
  {
    name: "叶文韬",
    year: 2011,
    degree: "硕士",
    img: "",
    job: "澳大利亚"
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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

const Team = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}
                       subTitle="我们是一个充满活力且友爱团队，能为你科研提供足够的资源。"
    >
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
