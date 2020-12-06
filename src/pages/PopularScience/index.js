/**
 * disc:
 * date: 2020-11-28 22:51:20
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import React from "react";


const PopularScience = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper>
      媒体报道
      <video controls width="250">
        <source src="https://sharedocs.oss-cn-beijing.aliyuncs.com/midtown.mp4"
                type="video/mp4" />
      </video>
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(PopularScience);
