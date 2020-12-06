/**
 * disc:
 * date: 2020-11-28 22:50:44
 * author: luneice
 */
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Row, Col, Avatar, List, Tag, } from 'antd';
import {FormattedMessage} from "umi";
import { connect } from 'dva';
import React from "react";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const projectData = [
  {
    'author': [ 'Xi Li', 'Xiya Li', 'Deren Li', 'Xiaojun He', 'Michael Jendryke' ],
    'title': 'A preliminary investigation of Luojia-1 night-time light imagery',
    'journal': 'Remote Sensing Letters',
    'volume': '10',
    'number': '6',
    'pages': '526-535',
    'year': '2019',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/2150704X.2019.1577573',
    'url': 'https://doi.org/10.1080/2150704X.2019.1577573',
    'abstract': 'Launched on 2 June 2018, Luojia-1 satellite records night-time light imagery at 130 m resolution, which is higher than most of the existing night-time light images to date. This study evaluated radiometric and spatial properties of the Luojia-1 satellite imagery for cities of Los Angeles, Wuhan and Rome as well as the change detection capability for Zunyi city. For the radiometric property, the analysis shows that the Luojia-1 images correlate well with the radiance of the Visible Infrared Imaging Radiometer Suite (VIIRS)’s Day and Night Band (DNB), and that the Luojia-1 images have a wider range of radiance values, as well as higher radiance values (e.g., 40%–90% higher) than the VIIRS DNB images. Using wavelet decomposition and change detection analysis to evaluate spatial property and change detection capability, it was found that the Luojia-1 images provide abundant spatial detail information, with about 20%–54% energy of wavelet component of the images stored in 100–400 m resolutions, and they can help to track the electrification of new roads and buildings at a fine resolution. This study shows that the Luojia-1 images are an effective data source for analysing spatiotemporal distribution of night-time light and its associated socioeconomic attributes.'
  },
];


const Project = props => {
  const { _ } = props;
  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}>
      <Row>
        <Title level={4}>当前在研项目</Title>
      </Row>
      <Row gutter={[16, 12]}>
        <Col flex="auto">
          <Card hoverable>
            <p>面向可持续发展目标进展评估的夜间灯光遥感关键技术及应用示范</p>
            <p>国家重点研发计划政府间国际科技创新合作项目</p>
            <p>项目号：2019YFE0126800，2020.12-2023.11，448万，主持</p>
          </Card>
        </Col>
        <Col flex="auto">
          <Card hoverable>
            <p>VIIRS 夜光遥感日数据的时序分析及其在中巴经济走廊社会经济评估中的应用</p>
            <p>国家自然科学基金面上项目</p>
            <p>项目号：41771386，2018.1-2021.12，63万，主持</p>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Title level={4}>曾经承担项目</Title>
      </Row>
      <Row gutter={[16, 24]}>
        <Col span={12}>
          <Card hoverable>
            <p>超分辨率重建支持下的遥感影像混合像元分解</p>
            <p>国家自然科学基金青年基金项目</p>
            <p>项目号：41101413，主持</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <p>贝叶斯推理支持下的遥感影像线性光谱分解模型</p>
            <p>湖北省自然科学基金</p>
            <p>项目号：2014CFB726，主持</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <p>基于空间分辨率提升的遥感土地覆盖度制图</p>
            <p>教育部博士点基金</p>
            <p>项目号：2014CFB726，主持</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <p>基于多时相遥感数据森林干扰信息的自动提取</p>
            <p>863项目“全球森林生物量和碳储量遥感估测关键技术”</p>
            <p>项目号：2011CB707101，子课题主持</p>
          </Card>
        </Col>
        <Col span={24}>
          <Card hoverable>
            <p>区域协同遥感监测与应急服务技术体系，国家重点研发计划，参与</p>
          </Card>
        </Col>
        <Col span={24}>
          <Card hoverable>
            <p>“一带一路”沿线境外国家社会经济评估的夜光遥感方法，中央高校基本科研业务费专项资金项目，主持</p>
          </Card>
        </Col>
        <Col span={24}>
          <Card hoverable>
            <p>遥感青年科技人才创新资助计划项目，国家科技部遥感中心，主持</p>
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Project);
