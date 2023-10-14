/**
 * disc:
 * date: 2020-06-13 21:05:54
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import React from 'react';
import { Col, Row, Typography } from 'antd';

const { Link } = Typography;

const GazaStripEmergency = (props) => {
  const { _ } = props;
  return (
    <PageHeaderWrapper style={{ backgroundColor: '#fff' }}>
      <Col>
        <Row key={1} style={{ marginTop: 0 }}>
          <div style={{ margin: '0 auto' }}>
            <h1>Satellite Imagery shows power supply nearly stops in Gaza Strip</h1>
            <div style={{ float: 'right' }}>13 October 2023, Wuhan</div>
          </div>
        </Row>
        <Row key={2}>
          <p style={{ textIndent: '2rem' }}>
            Night Light Research team at Wuhan University found that power supply in Gaza continued
            declining. As of 11 October 2023, the power supply has been reduced by more than 70%
            compared with 6 October 2023.
          </p>
          <div style={{ margin: 'auto' }}>
            <img src={require('../../assets/images/gaza_strip.png')} alt={'Map of Gaza Strip'} />
            <div style={{ margin: '0 auto', textAlign: 'center' }}>Map of Gaza Strip</div>
          </div>
        </Row>
        <Row key={3}>
          <div style={{ margin: 'auto' }}>
            <img
              src={require('../../assets/images/gaza_strip_light_curve.png')}
              alt={
                'Night light intensity of Gaza Strip during 1 Aug – 11 Oct, 2023 (derived from NASA Black Marble Product)'
              }
            />
          </div>
        </Row>
        <Row key={4}>
          <div style={{ margin: '0 auto', textAlign: 'center' }}>
            Night light intensity of Gaza Strip during 1 Aug – 11 Oct, 2023 (derived from NASA Black
            Marble Product)
          </div>
        </Row>
        <Row key={5}>
          <div key={5.1} style={{ margin: 'auto' }}>
            <div key={5.11} style={{ display: 'inline-block', marginRight: 5 }}>
              <img
                src={require('../../assets/images/gaza_strip_light_peace.png')}
                alt={'14 September 2023'}
              />
              <div style={{ margin: '0 auto', textAlign: 'center' }}>14 September 2023</div>
            </div>
            <div key={5.12} style={{ display: 'inline-block', marginLeft: 5 }}>
              <img
                src={require('../../assets/images/gaza_strip_light_war.png')}
                alt={'14 September 2023'}
              />
              <div style={{ margin: '0 auto', textAlign: 'center' }}>14 September 2023</div>
            </div>
          </div>
        </Row>
        <Row key={6}>
          <div style={{ margin: '0 auto', textAlign: 'center' }}>
            Night light imagery of Gaza Strip before and after the recent emergency (derived from
            China’s SDGSAT-1 and Yangwang-1)
          </div>
        </Row>
        <Row key={7}>
          <h3>Major findings</h3>
          <p key={7.1} style={{ textIndent: '2rem' }}>
            Using high-resolution SDGSAT-1 and Yangwang-1 night-time light images, most residential
            areas in Gaza strip were in power outage configuration on 11 October 2023. Based on
            VIIRS night-time light images (Black Marble Product), it shows that Gaza's power supply
            continued declining after 7 October 2023. As of 11 October 2023, the power supply
            reduced by more than 70% compared with 6 October 2023.
          </p>
          <p key={7.2} style={{ textIndent: '2rem' }}>
            In the last decade, the Night Light Team at Wuhan University has continued to support
            global peace and humanitarian affairs in Syria, Yemen, Turkey, etc.
            <Link href="/en"> See here</Link>
          </p>
        </Row>
      </Col>
    </PageHeaderWrapper>
  );
};

export default connect(({}) => {
  return {};
})(GazaStripEmergency);
