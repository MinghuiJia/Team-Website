import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Row, Col, Avatar, Timeline } from 'antd';
import { EnvironmentTwoTone, MailTwoTone, ClockCircleOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

import "./Welcome.less";
const { Meta } = Card;

export default () => (
  <PageHeaderWrapper style={{ backgroundColor: "#fff" }} title="李熙老师个人介绍">
    <div>
      <Row>
        <Title level={4}>简介</Title>
      </Row>
      <Row>
        <Col flex="auto" style={{ marginBottom: 20 }}>
          <Card actions={[
            <span>
              <EnvironmentTwoTone/>&nbsp;&nbsp;<Text>湖北省武汉市珞瑜路129号测绘遥感信息工程国家重点实验室</Text>
            </span>,
            <span>
              <MailTwoTone />&nbsp;&nbsp;<Text>lixi@whu.edu.cn</Text>&nbsp;&nbsp;&nbsp;&nbsp;
              <MailTwoTone />&nbsp;&nbsp;<Text>li_rs@163.com</Text>
            </span>
          ]}>
            <Meta
              avatar={
                <Avatar size={86} src={require("../assets/LiXi.jpg")} />
              }
              title="李熙老师"
              description="副教授，硕士生导师，珞珈青年学者，亚洲开发银行国际顾问，武汉市“优秀青年科技工作者”，国家科技部“遥感青年科技人才”，国际遥感杂志（International Journal of Remote Sensing）编委。发表学术论文30余篇，其中第一/通信作者SCI论文10余篇，是10余本国际期刊的审稿人。主要研究方向为遥感应用、遥感图像处理和空间数据挖掘，特别在夜光遥感方法和应用上开展了深入研究，研究成果被CNN、BBC、CCTV、《纽约时报》、美联社、路透社等600余家国际媒体以及联合国安理会引用。"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Title level={4}>个人简历</Title>
      </Row>
      <Row>
        <Timeline mode="alternate">
          <Timeline.Item label="2000年09月" color="#1890ff" style={{ color: "#1890ff" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#1890ff" }} />}
            style={{ color: "#1890ff" }}
          >
            武汉大学遥感信息工程学院 摄影测量与遥感 学士
            Photogrammetry and Remote Sensing, School of Remote Sensing and Information Engineering, Wuhan University, B.S.
          </Timeline.Item>
          <Timeline.Item label="2004年06月" style={{ color: "#1890ff" }}/>
          <Timeline.Item
            label="2004年09月"
            color="#f50"
            style={{ color: "#f50" }}>
            武汉大学遥感信息工程学院 摄影测量与遥感 博士
            Photogrammetry and Remote Sensing, School of Remote Sensing and Information Engineering, Wuhan University, Ph.
          </Timeline.Item>
          <Timeline.Item label="2006年10月" color="#73D13D" style={{ color: "#73D13D" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#73D13D" }} />}
            style={{ color: "#73D13D" }}>
            北京大学政府管理学院 客座博士生
            Visiting Doctoral Candidate, School of Government, Peking University
          </Timeline.Item>
          <Timeline.Item label="2009年01月" color="#73D13D" style={{ color: "#73D13D" }}/>
          <Timeline.Item
            label="2009年06月"
            color="#f50"
            style={{ color: "#f50" }}>
            武汉大学遥感信息工程学院 摄影测量与遥感 博士
            Photogrammetry and Remote Sensing, School of Remote Sensing and Information Engineering, Wuhan University, Ph.
          </Timeline.Item>
          <Timeline.Item
            label="2009年07月"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#2F54EB" }} />}
            style={{ color: "#2F54EB" }}>
            武汉大学测绘遥感信息工程国家重点实验室 讲师
          </Timeline.Item>
          <Timeline.Item
            label="2014年09月"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#722ED1" }} />}
            style={{ color: "#722ED1" }}>
            马里兰大学帕克分校地理科学系 访问学者
          </Timeline.Item>
          <Timeline.Item label="2015年04月" color="#FF4D4F" style={{ color: "#FF4D4F" }}>
            英国非政府组织 “Crisis Action” 项目研究员
          </Timeline.Item>
          <Timeline.Item
            label="2015年09月"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#2F54EB" }} />}
            style={{ color: "#2F54EB" }}>
            武汉大学测绘遥感信息工程国家重点实验室 讲师
          </Timeline.Item>
          <Timeline.Item
            label="2015年09月"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#722ED1" }} />}
            style={{ color: "#722ED1" }}>
            马里兰大学帕克分校地理科学系 访问学者
          </Timeline.Item>
          <Timeline.Item
            label="2015年10月"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#40A9FF" }} />}
            style={{ color: "#40A9FF" }}>
            武汉大学测绘遥感信息工程国家重点实验室 副教授
          </Timeline.Item>
          <Timeline.Item label="2018年10月"  color="#597EF7" style={{ color: "#597EF7" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#597EF7" }} />}
            style={{ color: "#597EF7" }}>
            亚洲开发银行（Asian Development Bank）项目顾问
          </Timeline.Item>
          <Timeline.Item label="2019年05月"  color="#597EF7" style={{ color: "#597EF7" }}/>
          <Timeline.Item
            label="今"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#40A9FF" }} />}
            style={{ color: "#40A9FF" }}>
            武汉大学测绘遥感信息工程国家重点实验室 副教授
          </Timeline.Item>
        </Timeline>
      </Row>
      <Row>
        <Title level={4}>荣誉称号</Title>
      </Row>
      <Row gutter={[16, 24]}>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../assets/honor.png")} />
              }
              title="武汉大学“珞珈青年学者”"
            />
          </Card>
        </Col>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../assets/honor.png")} />
              }
              title="国家科技部“遥感青年科技人才”"
            />
          </Card>
        </Col>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../assets/honor.png")} />
              }
              title="武汉市优秀青年科技工作者"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Title level={4}>研究方向</Title>
      </Row>
      <Row gutter={[16, 24]}>
        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt="夜光遥感"
                        src={require("../assets/image_1.png")} />}>
            <Meta
              title="夜光遥感"
              description="在夜间无云情况下，遥感传感器获取陆地水体可见光源的过程即夜光遥感"
            />
          </Card>
        </Col>

        <Col
          flex="32rem"
           >
          <Card
            hoverable={true}
            cover={<img alt="夜光遥感"
                        src={require("../assets/image_2.png")} />}>
            <Meta
              title="遥感图像处理"
              description="在夜间无云情况下，遥感传感器获取陆地水体可见光源的过程即夜光遥感"
            />
          </Card>
        </Col>

        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt="夜光遥感" src={require("../assets/image_3.png")} />}>
            <Meta
              title="空间数据挖掘"
              description="在夜间无云情况下，遥感传感器获取陆地水体可见光源的过程即夜光遥感"
            />
          </Card>
        </Col>
        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt="夜光遥感"
                        src={require("../assets/image_4.png")} />}>
            <Meta
              title="生态环境遥感"
              description="在夜间无云情况下，遥感传感器获取陆地水体可见光源的过程即夜光遥感"
            />
          </Card>
        </Col>
      </Row>
    </div>
  </PageHeaderWrapper>
);
