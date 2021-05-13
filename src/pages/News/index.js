/**
 * disc:
 * date: 2020-11-28 22:55:41
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, List, Row, Col, Card } from 'antd';
import { connect } from 'dva';

const { Link, Paragraph } = Typography;

const News = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}>
      <List size="small" style={{ fontSize: 15 }}>
        <List.Item>
          <Paragraph>
            2018年4月3日，由联合国、瑞典政府和瑞士政府共同主办的“也门人道主义响应行动高级别认捐会议”（2018 Yemen High-Level Pledging Event）在瑞士日内瓦举行。研究团队在夜光遥感领域的相关研究成果为该会议参与方提供咨询和服务。该事件被多家国际组织和
            <Link href="https://reliefweb.int/report/yemen/care-warns-three-years-escalation-conflict-yemeni-people-left-sick-starving-and-plunged" target="_blank">联合国媒体</Link>报道。
          </Paragraph>
        </List.Item>
        <List.Item>
          <Paragraph>
            2017年12月18日，中央电视台新闻联播在“区域协调发展绘就新蓝图”专访李熙博士并报道了团队在中国区域协调发展的研究成果，观看请点击<Link href="http://tv.cctv.com/2017/12/18/VIDElz0nV5Sa2OK1wpZwroYm171218.shtml" target="_blank">央视官网</Link>，专访从59秒开始。
          </Paragraph>
          <Card
            cover={<img alt="个人照片" src={require("../../assets/person.png")} />}
          />
        </List.Item>
        <List.Item>
          <Paragraph>
            2015年3月11日，李熙博士和美国前国务卿奥尔布赖特、英国工党领袖米勒班德等国际政要共同出席美国首都华盛顿举行
            <Link href="http://news.xinhuanet.com/mil/2015-03/17/c_127587521.htm" target="_blank">电话新闻发布会</Link>， 李熙博士向全球媒体和非政府组织发布叙利亚内战评估图像和“叙利亚内战导致83%的夜间灯光消失，其中以阿勒颇省最为严重”等重要结论，该成果受到联合国安理会、中国中央电视台（CCTV）、美国有线电视网（CNN）、英国广播公司（BBC）、哥伦比亚广播公司(CBS)、福克斯新闻（Fox News）、阿拉伯半岛电视台、美联社、法新社、路透社、《纽约时报》、《卫报》、《费加罗报》等40多个国家的600多家媒体、机构和网站的
            <Link href="http://news.whu.edu.cn/info/1002/43655.htm" target="_blank">报道或引用</Link>，其中《纽约时报》以
            <Link href="http://innogst.whu.edu.cn/newsnoticedetail.jsp?id=y0iaomo4cq" target="_blank">整版报道</Link>本研究成果。部分国内外电视媒体的报道参见
            <Link href="http://www.lmars.whu.edu.cn/prof_web/lixi/media/LiXi-Video.mp4" target="_blank">截取视频</Link>。联合国安理会第7418次会议引用了该研究成果，请点击
            <Link href="http://webtv.un.org/watch/middle-east-security-council-7418th-meeting/4136656680001" target="_blank">联合国官网链接</Link>，引用部分从5分45秒开始。该研究成果的广泛传播对推动叙利亚和平进程起到积极作用。
          </Paragraph>
          <Card
            cover={<img alt="纽约时报报道" src={require("../../assets/new_york_times.jpg")} />}
          />
        </List.Item>
      </List>
      <Card
        cover={<img alt="路透社报道" src={require("../../assets/news_report.png")} />}
      />
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(News);
