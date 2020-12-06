/**
 * disc:
 * date: 2020-11-28 22:51:20
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import {  } from 'antd';
import { connect } from 'dva';

const News = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper>
      媒体报道
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(News);
