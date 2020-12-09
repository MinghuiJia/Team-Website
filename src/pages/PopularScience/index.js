/**
 * disc:
 * date: 2020-11-28 22:51:20
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Row, Col, Avatar } from 'antd';
import { connect } from 'dva';
import React from "react";

const { Meta } = Card;
const { Paragraph } = Typography;

const PopularScience = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper
      style={{ backgroundColor: "#fff" }}>
      <Paragraph style={{ marginBottom: 20 }}>
        当夜幕降临时，城市的夜间灯光是一座城市夜间经济活动的基本保障，同时也是城市经济繁荣的象征。城市夜间灯光色彩斑斓，是摄影爱好者和艺术工作者的感兴趣的素材。
      </Paragraph>
      <Row gutter={[16, 24]}>
        <Col flex="auto">
          <Card
            hoverable
            style={{ width: 320 }}
            cover={
              <video controls width="320">
                <source src="https://sharedocs.oss-cn-beijing.aliyuncs.com/midtown.mp4"
                        type="video/mp4" />
              </video>}
          >
            <Meta title="纽约市中心" description="纽约市 24 小时城市变化" />
          </Card>
        </Col>
        <Col flex="auto">
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="全球夜间灯光遥感影像" src={require("../../assets/image_1.png")} />}
          >
            <Meta title="全球夜间灯光遥感影像" description="从城市上空和太空观看城市夜景则另有一番体验，可以发现人类夜间照明设施的分布进而能够反映社会经济活动的空间分布和时间动态。" />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="珞珈一号" style={{ minWidth: 320, maxHeight: 300 }} src={require("../../assets/images/luojia.jpg")} />}
          >
            <Meta title="粤港澳大湾区" description="2018 年 9 月 18 号中国第一颗夜光遥感卫星珞珈一号拍摄了珠港澳地区的夜间影像。" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Paragraph style={{ marginBottom: 20 }}>
          由于卫星拍摄的夜光遥感影像能够反映经济活动的空间分布，夜光遥感被广泛应用于城市化监测、区域经济增长估算、人道主义评估、光污染分析等诸多研究领域，夜光遥感也因此成为近年来遥感领域的热点方向之一。
        </Paragraph>
      </Row>
      {/*<Row gutter={[16, 24]}>*/}
      {/*  <Col flex="auto">*/}
      {/*    <Card*/}
      {/*      hoverable*/}
      {/*      style={{ width: 320 }}*/}
      {/*      cover={*/}
      {/*        <video controls width="320">*/}
      {/*          <source src="https://sharedocs.oss-cn-beijing.aliyuncs.com/midtown.mp4"*/}
      {/*                  type="video/mp4" />*/}
      {/*        </video>}*/}
      {/*    >*/}
      {/*      <Meta title="纽约市中心" description="纽约市 24 小时城市变化" />*/}
      {/*    </Card>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(PopularScience);
