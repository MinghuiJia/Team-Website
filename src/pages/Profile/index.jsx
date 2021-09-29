import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi';
import { Card, Typography, Row, Col, Avatar } from 'antd';
import { EnvironmentTwoTone, MailTwoTone } from '@ant-design/icons';


const { Title, Text, Link } = Typography;
const { Meta } = Card;

export default () => (
  <PageHeaderWrapper style={{ backgroundColor: "#fff" }}
                     title={<FormattedMessage id="home.title" />}
                     subTitle={<FormattedMessage id="home.subtitle" />}
  >
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
              description={<>
                <FormattedMessage id="home.teacher.description1"/>
                <br/><br/>
                <FormattedMessage id="home.teacher.description2"/>
              </>}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Title level={4}><FormattedMessage id="home.teacher.resume"/></Title>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2020.12-"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2015.10-2020.11"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2014.09-2015.09"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2009.07-2015.09"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2004.09-2009.06"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2006.10-2009.01"/>
        </li>
      </Row>
      <Row>
        <li>
          <FormattedMessage id="home.teacher.2000.09-2004.06"/>
        </li>
      </Row>
      <Row style={{ marginTop: 20}}>
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
            hoverable={true}>
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
            hoverable={true}>
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
            hoverable={true}>
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
