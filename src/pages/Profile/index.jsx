import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card, Typography, Row, Col, Avatar, Timeline } from 'antd';
import { EnvironmentTwoTone, MailTwoTone, ClockCircleOutlined } from '@ant-design/icons';
import './index.css';

const { Title, Text } = Typography;
const { Meta } = Card;

export default () => (
  <PageHeaderWrapper style={{ backgroundColor: "#fff" }}
                     title={<FormattedMessage id="home.title" />}>
    <div>
      <Row>
        <Title level={4}><FormattedMessage id="home.teacher.name"/></Title>
      </Row>
      <Row>
        <Col flex="auto" style={{ marginBottom: 20 }}>
          <Card actions={[
            <span>
              <EnvironmentTwoTone/>&nbsp;&nbsp;<Text><FormattedMessage id="home.teacher.address"/></Text>
            </span>,
            <span>
              <MailTwoTone />&nbsp;&nbsp;<Text>lixi@whu.edu.cn</Text>&nbsp;&nbsp;&nbsp;&nbsp;
              <MailTwoTone />&nbsp;&nbsp;<Text>li_rs@163.com</Text>
            </span>
          ]}>
            <Meta
              avatar={
                <Avatar size={86} src={require("../../assets/LiXi.jpg")} />
              }
              title={<FormattedMessage id="home.teacher.name"/>}
              description={<FormattedMessage id="home.teacher.description"/>}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Title level={4}><FormattedMessage id="home.teacher.resume"/></Title>
      </Row>
      <Row>
        <Timeline mode="right">
          <Timeline.Item label="2000.09" color="#1890ff" style={{ color: "#1890ff" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#1890ff" }} />}
            style={{ color: "#1890ff" }}
          >
            <FormattedMessage id="home.teacher.2000.09-2004.06" />
          </Timeline.Item>
          <Timeline.Item label="2004.06" style={{ color: "#1890ff" }}/>
          <Timeline.Item
            label="2004.09"
            color="#f50"
            style={{ color: "#f50" }}>
            <FormattedMessage id="home.teacher.2004.09-2009.06" />
          </Timeline.Item>
          <Timeline.Item label="2006.10" color="#73D13D" style={{ color: "#73D13D" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#73D13D" }} />}
            style={{ color: "#73D13D" }}>
            <FormattedMessage id="home.teacher.2006.10-2009.01" />
          </Timeline.Item>
          <Timeline.Item label="2009.01" color="#73D13D" style={{ color: "#73D13D" }}/>
          <Timeline.Item
            label="2009.06"
            color="#f50"
            style={{ color: "#f50" }}>
            <FormattedMessage id="home.teacher.2004.09-2009.06" />
          </Timeline.Item>
          <Timeline.Item
            label="2009.07"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#2F54EB" }} />}
            style={{ color: "#2F54EB" }}>
            <FormattedMessage id="home.teacher.2009.07-2015.09" />
          </Timeline.Item>
          <Timeline.Item
            label="2014.09"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#722ED1" }} />}
            style={{ color: "#722ED1" }}>
            <FormattedMessage id="home.teacher.2014.09-2015.09" />
          </Timeline.Item>
          <Timeline.Item label="2015.04" color="#FF4D4F" style={{ color: "#FF4D4F" }}>
            <FormattedMessage id="home.teacher.2015.04" />
          </Timeline.Item>
          <Timeline.Item
            label="2015.09"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#2F54EB" }} />}
            style={{ color: "#2F54EB" }}>
            <FormattedMessage id="home.teacher.2009.07-2015.09" />
          </Timeline.Item>
          <Timeline.Item
            label="2015.09"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#722ED1" }} />}
            style={{ color: "#722ED1" }}>
            <FormattedMessage id="home.teacher.2014.09-2015.09" />
          </Timeline.Item>
          <Timeline.Item
            label="2015.10"
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#40A9FF" }} />}
            style={{ color: "#40A9FF" }}>
            <FormattedMessage id="home.teacher.2015.10-" />
          </Timeline.Item>
          <Timeline.Item label="2018.10"  color="#597EF7" style={{ color: "#597EF7" }}/>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#597EF7" }} />}
            style={{ color: "#597EF7" }}>
            <FormattedMessage id="home.teacher.2018.10-2019.05" />
          </Timeline.Item>
          <Timeline.Item label="2019.05"  color="#597EF7" style={{ color: "#597EF7" }}/>
          <Timeline.Item
            label={<FormattedMessage id="home.teacher.now" />}
            dot={<ClockCircleOutlined style={{ fontSize: '16px', color: "#40A9FF" }} />}
            style={{ color: "#40A9FF" }}>
            <FormattedMessage id="home.teacher.2015.10-" />
          </Timeline.Item>
        </Timeline>
      </Row>
      <Row>
        <Title level={4}><FormattedMessage id="home.teacher.honour.title" /></Title>
      </Row>
      <Row gutter={[16, 24]}>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../../assets/honor.png")} />
              }
              title={<FormattedMessage id="home.teacher.honour.1" />}
            />
          </Card>
        </Col>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../../assets/honor.png")} />
              }
              title={<FormattedMessage id="home.teacher.honour.2" />}
            />
          </Card>
        </Col>
        <Col flex="auto">
          <Card hoverable>
            <Meta
              avatar={
                <Avatar size={32} src={require("../../assets/honor.png")} />
              }
              title={<FormattedMessage id="home.teacher.honour.3" />}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Title level={4}><FormattedMessage id="home.teacher.research.title" /></Title>
      </Row>
      <Row gutter={[16, 24]}>
        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt={<FormattedMessage id="home.teacher.research.1.alt" />}
                        src={require("../../assets/image_1.png")} />}>
            <Meta
              title={<FormattedMessage id="home.teacher.research.1.title" />}
              description={<FormattedMessage id="home.teacher.research.1.description" />}
            />
          </Card>
        </Col>

        <Col
          flex="32rem"
           >
          <Card
            hoverable={true}
            cover={<img alt={<FormattedMessage id="home.teacher.research.2.alt" />}
                        src={require("../../assets/image_2.png")} />}>
            <Meta
              title={<FormattedMessage id="home.teacher.research.2.title" />}
              description={<FormattedMessage id="home.teacher.research.2.description" />}
            />
          </Card>
        </Col>

        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt={<FormattedMessage id="home.teacher.research.3.alt" />}
                        src={require("../../assets/image_3.png")} />}>
            <Meta
              title={<FormattedMessage id="home.teacher.research.3.title" />}
              description={<FormattedMessage id="home.teacher.research.3.description" />}
            />
          </Card>
        </Col>
        <Col
          flex="32rem"
          >
          <Card
            hoverable={true}
            cover={<img alt={<FormattedMessage id="home.teacher.research.4.alt" />}
                        src={require("../../assets/image_4.png")} />}>
            <Meta
              title={<FormattedMessage id="home.teacher.research.4.title" />}
              description={<FormattedMessage id="home.teacher.research.4.description" />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  </PageHeaderWrapper>
);
