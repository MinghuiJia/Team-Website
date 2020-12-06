/**
 * disc:
 * date: 2020-06-13 20:55:58
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import {  } from 'antd';
import { connect } from 'dva';

const Cooperation = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper>
      国际合作
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Cooperation);
