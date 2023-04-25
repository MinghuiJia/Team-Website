/*
 * @Author: jiaminghui
 * @Date: 2022-05-09 10:45:16
 * @LastEditTime: 2023-04-26 02:32:56
 * @LastEditors: jiaminghui
 * @FilePath: \lixi\src\pages\News\index.js
 * @Description: 
 */
/**
 * disc:
 * date: 2020-11-28 22:55:41
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, List, Row, Col, Card } from 'antd';
import { connect } from 'dva';
import React from "react";

const { Link, Paragraph, Title, Text } = Typography;


const News = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}>
      <List size="small" style={{ fontSize: 15 }}>
        <center style={{fontSize:16, fontWeight:'bolder', color:"#000000"}}>夜光遥感评估土叙地震</center>
        <List.Item style={{display:"flex"}}>
          <Paragraph style={{flex:"2"}}>
            2023年2月6日，土叙两国遭受地震重创。当日，联合国卫星中心（UNOSAT）激活了面向土叙地震的紧急制图服务。李熙团队受邀参加夜光遥感评估任务，利用夜光遥感技术从震区尺度和城市尺度，分别评估了土叙地震对城市电力的损害程度。该项成果已经在联合国卫星中心（UNOSAT）官方网站发布，并被<Link href="https://english.news.cn/20230213/f17599cd809f489292c76e8a73dfbdb2/c.html" target="_blank">新华社</Link>、<Link href="https://finance.sina.cn/2023-02-17/detail-imyfywyq8817547.d.html" target="_blank">光明日报</Link>、<Link href="https://www.chinatimes.com/realtimenews/20230216004264-260409?chdtv=" target="_blank">中时新闻网</Link>等报道，并被联合国人道事务协调办公室（<Link href="https://reliefweb.int/report/turkiye/turkiye-2023-earthquakes-situation-report-no-1-16-february-2023" target="_blank">UNOCHA</Link>）和联合国难民署（<Link href="https://data.unhcr.org/en/documents/details/98891" target="_blank">UNHCR</Link>）等机构采用。
          </Paragraph>
          <Card style={{flex:"1"}}
            cover={<img alt="新闻照片" src={require("../../assets/news/tuxu.jpg")} />}
          />
        </List.Item>

        <center style={{fontSize:16, fontWeight:'bolder', color:"#000000"}}>多源遥感数据评估叙利亚农业生产</center>
        <List.Item style={{display:"flex"}}>
          <Paragraph style={{flex:"2"}}>
            <Link href="https://baijiahao.baidu.com/s?id=1722746888330081543&wfr=spider&for=pc" target="_blank">战争会给一个国家的耕地带来怎样影响？不用去战区调查，用遥感卫星就能“看”得一清二楚。</Link>
            2022年01月23日，武汉大学测绘遥感信息工程国家重点实验室李熙团队，在《自然-食品》杂志在线发表的一项研究成果显示，20多年间战争给叙利亚带来了巨大的粮食危机。此前，李熙团队还利用夜光遥感信息，研究得出“四年内战使叙利亚灯光减少了83%”的结论，直接展示了叙利亚内战的惨烈程度，这一成果被600余家国内外媒体转载，还被联合国安理会引用。
          </Paragraph>
          <Card  style={{flex:"1"}}
            cover={<img alt="新闻照片" src={require("../../assets/news/nature_food.jpg")} />}
          />
        </List.Item>

        {/* <List.Item>
          <Paragraph>
            <Link href="https://mp.weixin.qq.com/s?__biz=MzI5NTA2MDE3MA==&mid=2649996652&idx=1&sn=88eb89134aa9ec7019a5d6c350c4aca0&chksm=f45e4ac9c329c3df5ee82d57209b50dc12cc33b3e9c343ffb44e50677df3045ae1b7f6838ee3&mpshare=1&scene=23&srcid=0114LoE5AXm8GvPOzd9yukSp&sharer_sharetim" target="_blank">2022年01月14日，我室李熙团队联合多名国内外学者在国际学术期刊《自然.食品》发表题为“叙利亚内战阻碍粮食生产并威胁了粮食安全”的论文。</Link>该论文利用Landsat、夜间灯光等多源遥感数据评估了叙利亚战争对耕地面积和粮食安全的影响。论文第一署名单位为武汉大学测绘遥感信息工程国家重点实验室，第一作者为我室2018级硕士李西亚（导师为李熙），通讯作者为我室李熙教授和德克萨斯理工大学宋晓鹏助理教授，我室李德仁院士也是论文作者之一。
          </Paragraph>
        </List.Item> */}
        <center style={{fontSize:16, fontWeight:'bolder', color:"#000000"}}>支持联合国也门和平会议</center>
        <List.Item>
          <Paragraph>
            2018年4月3日，由联合国、瑞典政府和瑞士政府共同主办的“也门人道主义响应行动高级别认捐会议”（2018 Yemen High-Level Pledging Event）在瑞士日内瓦举行。研究团队在夜光遥感领域的相关研究成果为该会议参与方提供咨询和服务。该事件被多家国际组织和
            <Link href="https://reliefweb.int/report/yemen/care-warns-three-years-escalation-conflict-yemeni-people-left-sick-starving-and-plunged" target="_blank">联合国媒体</Link>报道。
          </Paragraph>
        </List.Item>
        <center style={{fontSize:16, fontWeight:'bolder', color:"#000000"}}>评估我国区域协调发展</center>
        <List.Item style={{display:"flex"}}>
          <Paragraph style={{flex:"2"}}>
            2017年12月18日，中央电视台新闻联播在“区域协调发展绘就新蓝图”专访李熙博士并报道了团队在中国区域协调发展的研究成果，观看请点击<Link href="http://tv.cctv.com/2017/12/18/VIDElz0nV5Sa2OK1wpZwroYm171218.shtml" target="_blank">央视官网</Link>，专访从59秒开始。
          </Paragraph>
          <Card style={{flex:"1"}}
            cover={<img alt="个人照片" src={require("../../assets/news/person.png")} />}
          />
        </List.Item>
        <center style={{fontSize:16, fontWeight:'bolder', color:"#000000"}}>夜光遥感评估叙利亚内战</center>
        <List.Item>
          <Paragraph>
            2015年3月11日，李熙博士和美国前国务卿奥尔布赖特、英国工党领袖米勒班德等国际政要共同出席美国首都华盛顿举行
            <Link href="http://news.xinhuanet.com/mil/2015-03/17/c_127587521.htm" target="_blank">电话新闻发布会</Link>， 李熙博士向全球媒体和非政府组织发布叙利亚内战评估图像和“叙利亚内战导致83%的夜间灯光消失，其中以阿勒颇省最为严重”等重要结论，该成果受到联合国安理会、中国中央电视台（CCTV）、美国有线电视网（CNN）、英国广播公司（BBC）、哥伦比亚广播公司(CBS)、福克斯新闻（Fox News）、阿拉伯半岛电视台、美联社、法新社、路透社、《纽约时报》、《卫报》、《费加罗报》等40多个国家的600多家媒体、机构和网站的
            <Link href="http://news.whu.edu.cn/info/1002/43655.htm" target="_blank">报道或引用</Link>，其中《纽约时报》以
            <Link href="http://innogst.whu.edu.cn/newsnoticedetail.jsp?id=y0iaomo4cq" target="_blank">整版报道</Link>本研究成果。部分国内外电视媒体的报道参见
            <Link href="http://www.lmars.whu.edu.cn/prof_web/lixi/media/LiXi-Video.mp4" target="_blank">截取视频</Link>。联合国安理会第7418次会议引用了该研究成果，请点击
            <Link href="http://webtv.un.org/watch/middle-east-security-council-7418th-meeting/4136656680001" target="_blank">联合国官网链接</Link>，引用部分从5分45秒开始。该研究成果的广泛传播对推动叙利亚和平进程起到积极作用。
          </Paragraph>
        </List.Item>
        <Card
          cover={<img alt="纽约时报报道" src={require("../../assets/news/new_york_times.jpg")} />}
        />
        {/* <Card
          cover={<img alt="路透社报道" src={require("../../assets/news/news_report.png")} />}
        /> */}
      </List>

    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(News);
