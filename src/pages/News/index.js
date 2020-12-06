/**
 * disc:
 * date: 2020-11-28 22:50:44
 * author: luneice
 */
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import {  } from 'antd';
import { connect } from 'dva';

const Project = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper>
      科研项目
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Project);
