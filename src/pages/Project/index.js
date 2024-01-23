/**
 * disc:
 * date: 2020-11-28 22:50:44
 * author: luneice
 */
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Row, Col, Avatar, List, Tag } from 'antd';
import { FormattedMessage } from 'umi';
import { connect } from 'dva';
import React from 'react';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const projectDataNow = [
  {
    name: '夜间灯光各向异性的多角度遥感方法',
    level: '国家自然科学基金面上项目',
    depict: '项目号：42271371，2023.1-2026.12，52万，主持',
  },
  {
    name: '面向可持续发展目标的夜间灯光遥感研究',
    level: '湖北省国际科技合作计划项目',
    depict: '项目号：2023EHA001，2023.10-2025.09，50万，主持',
  },
  {
    name: '国家高层次青年人才计划项目',
    level: '',
    depict: '2022.01-2024.12，160万，主持',
  },
  {
    name: '面向可持续发展目标进展评估的夜间灯光遥感关键技术及应用示范',
    level: '国家重点研发计划政府间国际科技创新合作项目',
    depict: '项目号：2019YFE0126800，2020.12-2023.11，448万，主持',
  },
];

const projectDataOld = [
  {
    name: 'VIIRS 夜光遥感日数据的时序分析及其在中巴经济走廊社会经济评估中的应用',
    level: '国家自然科学基金面上项目',
    depict: '项目号：41771386，2018.1-2021.12，63万，主持',
  },
  {
    name: '超分辨率重建支持下的遥感影像混合像元分解',
    level: '国家自然科学基金青年基金项目',
    depict: '项目号：41101413，主持',
  },
  {
    name: '贝叶斯推理支持下的遥感影像线性光谱分解模型',
    level: '湖北省自然科学基金',
    depict: '项目号：2014CFB726，主持',
  },
  {
    name: '基于空间分辨率提升的遥感土地覆盖度制图',
    level: '教育部博士点基金',
    depict: '项目号：20110141120073，主持',
  },
  {
    name: '基于多时相遥感数据森林干扰信息的自动提取',
    level: '863项目“全球森林生物量和碳储量遥感估测关键技术”',
    depict: '项目号：2011CB707101，子课题主持',
  },
  {
    name: '区域协同遥感监测与应急服务技术体系',
    level: '国家重点研发计划',
    depict: '参与',
  },
  {
    name: '“一带一路”沿线境外国家社会经济评估的夜光遥感方法',
    level: '中央高校基本科研业务费专项资金项目',
    depict: '主持',
  },
  {
    name: '遥感青年科技人才创新资助计划项目',
    level: '国家科技部遥感中心',
    depict: '主持',
  },
];

const Project = (props) => {
  const { _ } = props;
  return (
    <PageHeaderWrapper style={{ backgroundColor: '#fff' }}>
      <Row>
        <Title level={4}>
          <FormattedMessage id="project.title" />
        </Title>
      </Row>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={projectDataNow}
        renderItem={(item) => (
          <List.Item>
            <strong>
              <h3>{item.name}</h3>
              <div>
                <Text>{item.level}</Text>
              </div>
              <div>
                <Text>{item.depict}</Text>
              </div>
            </strong>
          </List.Item>
        )}
      />
      <Row style={{ marginTop: 20 }}>
        <Title level={4}>曾经承担项目</Title>
      </Row>
      <List
        size="large"
        itemLayout="vertical"
        dataSource={projectDataOld}
        renderItem={(item) => (
          <List.Item>
            <h3>{item.name}</h3>
            <div>
              <Text>{item.level}</Text>
            </div>
            <div>
              <Text>{item.depict}</Text>
            </div>
          </List.Item>
        )}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({}) => {
  return {};
})(Project);
