/**
 * disc:
 * date: 2020-06-13 21:05:54
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import {  } from 'antd';
import { connect } from 'dva';

const Team = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper>
      研究团队
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Team);
