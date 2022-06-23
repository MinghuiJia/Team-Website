import React from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {FormattedMessage, getLocale} from 'umi';
import {Card, Typography, Row, Col, Avatar} from 'antd';
import {EnvironmentTwoTone, MailTwoTone} from '@ant-design/icons';
import { Paper } from "@/pages/Research";

const {Title, Text} = Typography;
const {Meta} = Card;
const selectedLang = getLocale();

const googleScholarUrl = 'https://scholar.google.com/citations?hl=zh-CN&user=eWiOELoAAAAJ'

export default () => (
  <PageHeaderWrapper style={{backgroundColor: "#fff"}}
                     title={<FormattedMessage id="home.title"/>}
                     subTitle={<FormattedMessage id="home.subtitle"/>}
  >
    <div>
      <Row>
        <Col flex="auto" style={{marginBottom: 20}}>
          <Card actions={[
            <span style={{fontSize: 15}}>
              <EnvironmentTwoTone/>&nbsp;&nbsp;<Text><FormattedMessage id="home.teacher.address"/></Text>
            </span>,
            <span style={{fontSize: 15}}>
              <MailTwoTone/>&nbsp;&nbsp;<Text>lixi@whu.edu.cn</Text>&nbsp;&nbsp;&nbsp;&nbsp;
              <MailTwoTone/>&nbsp;&nbsp;<Text>li_rs@163.com</Text>
            </span>
          ]}>
            <Meta
              style={{fontSize: 16}}
              avatar={
                <Avatar size={128} src={require("../../assets/LiXi.jpg")}/>
              }
              title={<span style={{fontSize: 20}}><FormattedMessage id="home.teacher.name"/></span>}
              description={
                <>
                  <FormattedMessage id="home.teacher.description1"/>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <b>
            <FormattedMessage id="home.teacher.research.footer"/>
            <a style={{fontSize: 10, marginLeft: 10}} href={googleScholarUrl} target="_blank" rel="noreferrer">
              <FormattedMessage id="home.teacher.research.detail"/>
            </a>
        </b>
      </Row>
      

      <Row style={{marginTop: 20}}>
        <Title level={4}><FormattedMessage id="home.teacher.research.title"/></Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.1.title"/>
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.2.title"/>
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.3.title"/>
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.4.title"/>
        </li>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}><FormattedMessage id="home.teacher.research.parttime.title"/></Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.parttime.job1"/>
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.parttime.job2"/>
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          <FormattedMessage id="home.teacher.research.parttime.job3"/>
        </li>
      </Row>
      {
        selectedLang === 'zh-CN' ? (
          <>
            <Row style={{marginTop: 20}}>
              <Title level={4}><FormattedMessage id="home.teacher.resume"/></Title>
            </Row>
            <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2020.12-"/>
              </li>
            </Row>
            <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2015.10-2020.11"/>
              </li>
            </Row>
            {/* <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2014.09-2015.09"/>
              </li>
            </Row> */}
            <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2009.07-2015.09"/>
              </li>
            </Row>
            <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2004.09-2009.06"/>
              </li>
            </Row>
            <Row style={{fontSize: 16}}>
              <li>
                <FormattedMessage id="home.teacher.2000.09-2004.06"/>
              </li>
            </Row>
          </>
        ) : <Paper/>
      }
    </div>
  </PageHeaderWrapper>
);
