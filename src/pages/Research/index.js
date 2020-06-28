/**
 * disc:
 * date: 2020-06-13 20:52:35
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Row, Col, Avatar, List, } from 'antd';
import { connect } from 'dva';
import {FormattedMessage} from "umi";
import React from "react";

const { Title, Text } = Typography;
const { Meta } = Card;

const paper = [
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }
];

const data = [
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
    'url': 'https://doi.org/10.1080/2150704X.2019.1577573'
  },
  {
    'author': [ 'Xi Li', 'Lixian Zhao', 'Wenjun Han',
      'Bouarouri Faouzi', 'Prosper Washaya', 'Xubing Zhang',
      'Huazhong Jin', 'Chuanqing Wu' ],
    'title': 'Evaluating Algeria’s social and economic development using a series of night-time light images between 1992 to 2012',
    'journal': 'International Journal of Remote Sensing',
    'volume': '39',
    'number': '23',
    'pages': '9228-9248',
    'year': '2018',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2018.1510560',
    'url': 'https://doi.org/10.1080/01431161.2018.1510560'
  },
  {
    'author': [ 'Xia Zhao','Deren Li','Xi Li','Lixian Zhao','Chuanqing Wu' ],
    'title': 'Spatial and seasonal patterns of night-time lights in global ocean derived from VIIRS DNB images',
    'journal': 'International Journal of Remote Sensing',
    'volume': '39',
    'number': '22',
    'pages': '8151-8181',
    'year': '2018',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2018.1482022',
    'url': 'https://doi.org/10.1080/01431161.2018.1482022'
  },
  {
    'author': [ 'Xi Li', 'Christopher Elvidge',
      'Yuyu Zhou', 'Changyong Cao', 'Timothy Warner' ],
    'title': 'Remote sensing of night-time light',
    'journal': 'International Journal of Remote Sensing',
    'volume': '38',
    'number': '21',
    'pages': '5855-5859',
    'year': '2017',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2017.1351784',
    'url': 'https://doi.org/10.1080/01431161.2017.1351784'
  },
  {
    'author': [ 'Xi Li', 'Deren Li', 'Huimin Xu', 'Chuanqing Wu' ],
    'title': 'Intercalibration between DMSP/OLS and VIIRS night-time light images to evaluate city light dynamics of Syria’s major human settlement during Syrian Civil War',
    'journal': 'International Journal of Remote Sensing',
    'volume': '38',
    'number': '21',
    'pages': '5934-5951',
    'year': '2017',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2017.1331476',
    'url': 'https://doi.org/10.1080/01431161.2017.1331476'
  },
  {
    'author': [ 'Deren Li', 'Xia Zhao', 'Xi Li' ],
    'title': 'Remote sensing of human beings – a perspective from nighttime light',
    'journal': 'Geo-spatial Information Science',
    'volume': '19',
    'number': '1',
    'pages': '69-79',
    'year': '2016',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/10095020.2016.1159389',
    'url': 'https://doi.org/10.1080/10095020.2016.1159389'
  },
  {
    'author': [ 'Xi Li', 'Rui Zhang', 'Chengquan Huang', 'Deren Li' ],
    'title': 'Detecting 2014 Northern Iraq Insurgency using night-time light imagery',
    'journal': 'International Journal of Remote Sensing',
    'volume': '36',
    'number': '13',
    'pages': '3446-3458',
    'year': '2015',
    'publisher': 'Taylor & Francis}',
    'doi': '10.1080/01431161.2015.1059968',
    'url': 'https://doi.org/10.1080/01431161.2015.1059968'
  },
  {
    'author': [ 'Xi Li', 'Linlin Ge', 'Xiaonling Chen' ],
    'title': 'Quantifying Contribution of Land Use Types to Nighttime Light Using an Unmixing Model',
    'journal': 'IEEE Geoscience and Remote Sensing Letters',
    'volume': '11',
    'number': '10',
    'pages': '1667-1671',
    'year': '2014',
    'publisher': '',
    'doi': '10.1109/LGRS.2014.2304496',
    'url': 'https://doi.org/10.1109/LGRS.2014.2304496'
  },
  {
    'author': [ 'Xi Li', 'Deren Li' ],
    'title': 'Can Night-Time Light Images Play a Role in Evaluating the Syrian Crisis?',
    'journal': 'Int. J. Remote Sens.',
    'volume': '35',
    'number': '18',
    'pages': '6648–6661',
    'year': '2014',
    'publisher': '',
    'doi': '10.1080/01431161.2014.971469',
    'url': 'https://doi.org/10.1080/01431161.2014.971469'
  },
  {
    'author': [ 'Xi Li', 'Fengrui Chen', 'Xiaoling Chen' ],
    'title': 'Satellite-Observed Nighttime Light Variation as Evidence for Global Armed Conflicts',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '6',
    'number': '5',
    'pages': '2302-2315',
    'year': '2013',
    'publisher': '',
    'doi': '10.1109/JSTARS.2013.2241021',
    'url': 'https://doi.org/10.1109/JSTARS.2013.2241021'
  },
  {
    'author': [ 'Xi Li', 'Xiaoling Chen', 'Yousong Zhao',
      'Jia Xu', 'Fengrui Chen', 'Hui Li' ],
    'title': 'Automatic intercalibration of night-time light imagery using robust regression',
    'journal': 'Remote Sensing Letters',
    'volume': '4',
    'number': '1',
    'pages': '45-54',
    'year': '2013',
    'publisher': '',
    'doi': '10.1080/2150704X.2012.687471',
    'url': 'https://doi.org/10.1080/2150704X.2012.687471'
  },
  {
    'author': [ 'Xi Li', 'Wentao Ye', 'Xiaoling Chen',
      'Nengcheng Chen', 'Jia Xu', 'Fengrui Chen' ],
    'title': 'Impact of training database on super resolution-based spectral unmixing',
    'journal': 'Remote Sensing Letters',
    'volume': '3',
    'number': '8',
    'pages': '647-655',
    'year': '2012',
    'publisher': '',
    'doi': '10.1080/01431161.2012.657360',
    'url': 'https://doi.org/10.1080/01431161.2012.657360'
  },
  {
    'author': [ 'Xi Li', 'Liqiao Tian', 'Xi Zhao', 'Xiaoling Chen' ],
    'title': 'A super resolution approach for spectral unmixing of remote sensing images',
    'journal': 'International Journal of Remote Sensing',
    'volume': '32',
    'number': '21',
    'pages': '6091-6107',
    'year': '2011',
    'publisher': '',
    'doi': '10.1080/01431161.2010.507794',
    'url': 'https://doi.org/10.1080/01431161.2010.507794'
  },
  {
    'author': [ 'Xi Li', 'Shanshan Liu',  'Michael Jendryke', 'Deren Li',  'Chuanqing Wu' ],
    'title': 'Night-Time Light Dynamics during the Iraqi Civil War',
    'journal': 'Remote Sensing',
    'volume': '10',
    'number': '6',
    'pages': '858',
    'year': '2018',
    'publisher': '',
    'doi': '10.3390/rs10060858',
    'url': 'http://dx.doi.org/10.3390/rs10060858'
  },
  {
    'author': [ 'Xi Li', 'Lixian Zhao', 'Deren Li', 'Huimin Xu' ],
    'title': 'Mapping Urban Extent Using Luojia 1-01 Nighttime Light Imagery',
    'journal': 'Sensors',
    'volume': '18',
    'number': '11',
    'pages': '3665',
    'year': '2018',
    'publisher': '',
    'doi': '10.3390/s18113665',
    'url': 'http://dx.doi.org/10.3390/s18113665'
  },
  {
    'author': [ 'Fengrui Chen', 'Xi Li' ],
    'title': 'Evaluation of IMERG and TRMM 3B43 Monthly Precipitation Products over Mainland China',
    'journal': '',
    'volume': '8',
    'number': '6',
    'pages': '472',
    'year': '2016',
    'publisher': '',
    'doi': '10.3390/rs8060472',
    'url': 'http://dx.doi.org/10.3390/rs8060472'
  },
  {
    'author': [ 'Huimin Xu', 'Hutao Yang', 'Xi Li', 'Huiran Jin', 'Deren Li' ],
    'title': 'Multi-Scale Measurement of Regional Inequality in Mainland China during 2005–2010 Using DMSP/OLS Night Light Imagery and Population Density Grid Data',
    'journal': 'Sustainability',
    'volume': '7',
    'number': '10',
    'pages': '13469–13499',
    'year': '2015',
    'publisher': '',
    'doi': '10.3390/su71013469',
    'url': 'http://dx.doi.org/10.3390/su71013469'
  },
  {
    'author': [ 'Xi Li', 'Huimin Xu', 'Xiaoling Chen', 'Chang Li' ],
    'title': 'Potential of NPP-VIIRS Nighttime Light Imagery for Modeling the Regional Economy of China',
    'journal': 'Remote Sensing',
    'volume': '5',
    'number': '6',
    'pages': '3057–3081',
    'year': '2013',
    'publisher': '',
    'doi': '10.3390/rs5063057',
    'url': 'http://dx.doi.org/10.3390/rs5063057'
  },
  {
    'author': [ 'Xi Li', 'Linlin Ge', 'Xiaoling Chen' ],
    'title': 'Detecting Zimbabwe’s Decadal Economic Decline Using Nighttime Light Imagery',
    'journal': 'Remote Sensing',
    'volume': '5',
    'number': '9',
    'pages': '4551–4570',
    'year': '2013',
    'publisher': '',
    'doi': '10.3390/rs5094551',
    'url': 'http://dx.doi.org/10.3390/rs5094551'
  },
  {
    'author': [ 'Wentao Ye', 'Xi Li', 'Xiaoling Chen', 'Guo Zhang' ],
    'title': 'A spectral index for highlighting  forest cover from remotely sensed imagery',
    'journal': 'Land Surface Remote Sensing II',
    'volume': '9260',
    'number': '',
    'pages': '287-295',
    'year': '2014',
    'publisher': '',
    'doi': '10.1117/12.2068775',
    'url': 'https://doi.org/10.1117/12.2068775'
  }
];

const Research = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper
      style={{ backgroundColor: "#fff" }}
    >
      <Row>
        <Title level={4}><FormattedMessage id="research.title"/></Title>
      </Row>
      <List
        itemLayout="vertical"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={paper}
        footer={
          <div>
            <b>仅统计到 2019 年</b>
          </div>
        }
        renderItem={item => (
          <Card hoverable={true}
                style={{ marginTop: 10, marginBottom: 10 }}
          >
            <List.Item
              key={item.title}
              extra={
                <img
                  width={260}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href} target="_blank">{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          </Card>
        )}
      />
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Research);
