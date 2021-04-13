/**
 * disc:
 * date: 2020-06-13 20:55:58
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import { FormattedMessage } from "umi";
import {Card, Col, Row, Typography, Image } from "antd";
import React from "react";



const Cooperation = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}>
      <Row>
        <FormattedMessage id="cooperation.describe"/>
      </Row>
      {/*<Row gutter={[16, 24]}>*/}
      <Row>
        <Image
          width={320}
          alt="example" src={require("../../assets/images/cooperation_img_01.png")}
        />
      </Row>
      <Row>
        <Image
          width={320}
          alt="example" src={require("../../assets/images/cooperation_img_02.png")}
        />
      </Row>
      {/*<Row gutter={[12, 24]}>
        <Col flex="auto">
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src={require("../../assets/images/cooperation_img_01.png")} />}
          >
            <Meta description="2019年2月在马尼拉与向亚行银行首席经济学家泽田康幸教授汇报项目进展" />
          </Card>
        </Col>
        <Col flex="auto">
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="example" src={require("../../assets/images/cooperation_img_02.png")} />}
          >
            <Meta description="2018年8月前往日内瓦与联合国训练研究所（UNITAR）讨论合作事宜" />
          </Card>
        </Col>
      </Row>*/}
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Cooperation);
