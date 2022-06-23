/*
 * @Author: jiaminghui
 * @Date: 2022-06-22 01:22:54
 * @LastEditTime: 2022-06-23 02:10:19
 * @LastEditors: jiaminghui
 * @FilePath: \lixi\src\pages\EnglishProfile\index.js
 * @Description: 
 */
/**
 * disc:
 * date: 2020-06-13 21:05:54
 * author: luneice
 */

 import { PageHeaderWrapper } from '@ant-design/pro-layout';
 import { Typography, Row, Table, Tag, Col, Avatar, Card, List} from 'antd';
 import { connect } from 'dva';
 import {FormattedMessage, Link, getLocale} from "umi";
 import {EnvironmentTwoTone, MailTwoTone} from '@ant-design/icons';
 import React from "react";

 const index = [
  {
    'author': [
      'Li Xi-Ya', 'Li Xi*', 'Fan Ziying', 'Mi Li', 'Kandakji Tarek',
      'Song Zhen', 'Li Deren', 'Song Xiao-Peng*'
    ],
    'isTop': true,
    'title': 'Civil war hinders crop production and threatens food security in Syria',
    'journal': 'Nature Food',
    'volume': 'Li2022',
    'number': '',
    'pages': '2662-1355',
    'year': '2022',
    'publisher': '',
    'doi': '10.1038/s43016-021-00432-4',
    'url': '../../assets/papers/s43016-021-00432-4.pdf',
    'abstract': 'Assessing the impact of violent conflict on Syrian agriculture is challenging given data limitations and attributability issues. Using satellite data at 30 m spatial resolution, we found that the extent of productive cropland showed greater interannual variability and spatial heterogeneity after the start of the civil war in 2011. Using changes in satellite-based night-time light as a proxy for war impact intensity, we also found that cropland close to severely impacted urban settlements faced greater disruption. Fixed-effects models revealed the relationship between productive cropland and precipitation for the pre-war period, whereas a counterfactual scenario constructed for the period 2012–2019 showed substantial variation at the regional level. While the ongoing conflict promoted cropland cultivation in safer zones, cropland reduction took place in the country’s northwest and southeast regions. Our study demonstrated the combined utility of daytime and night-time satellite data to assess food insecurity in extreme environments and can help guide distribution of food and aid in Syria.'
  },

  {
    'author': ['Xi Li', 'Xiaoyu Shang', 'Qingling Zhang', 'Deren Li', 'Fengrui Chen', 'Minghui Jia', 'Yan Wang'],
    'isTop': true,
    'title': 'Using radiant intensity to characterize the anisotropy of satellite-derived city light at night',
    'journal': 'Remote Sensing of Environment',
    'volume': '271',
    'number': '',
    'pages': '112920',
    'year': '2022',
    'publisher': '',
    'doi': '10.1016/j.rse.2022.112920',
    'url': 'https://doi.org/10.1016/j.rse.2022.112920',
    'abstract': ''
  },

  {
    'author': [ "Xi Li", "Ruiqi Ma", "Qingling Zhang", "Deren Li", "Shanshan Liu", "Tao He", "Lixian Zhao" ],
    'isTop': true,
    'title': 'Anisotropic characteristic of artificial light at night – Systematic investigation with VIIRS DNB multi-temporal observations',
    'journal': 'Remote Sensing of Environment',
    'volume': '233',
    'number': '',
    'pages': '111357',
    'year': '2019',
    'publisher': 'Taylor & Francis',
    'doi': '10.1016/j.rse.2019.111357',
    'url': 'https://doi.org/10.1016/j.rse.2019.111357',
    'abstract': 'The released VIIRS DNB nightly images, also known as VIIRS DNB daily nighttime images, provide rich information for time series analysis of global socioeconomic dynamics. Anisotropic characteristic is a possible factor that influences the VIIRS DNB radiance at night and its time series analysis. This study aims to investigate the relationship between viewing angles and VIIRS DNB radiance of Suomi NPP satellite in urban areas. First, twenty-nine points were selected globally to explore the angle variation of Suomi NPP satellite views at night. We found that the variation of the satellite viewing zenith angle (VZA) is consistent (e.g. between 0° and 70°) since the range of VZA is fixed depending on the sensor design, and the range of viewing azimuth angle (VAA) increases with the increase of latitude. Second, thirty points in cities of Beijing, Houston, Los Angeles, Moscow, Quito and Sydney, were used to investigate the angle-radiance relationship. We proposed a zenith-radiance quadratic (ZRQ) model and a zenith-azimuth-radiance binary quadratic (ZARBQ) model to quantify the relationship between satellite viewing angles and artificial light radiance, which has been corrected by removing the moonlight and atmospheric impact from VIIRS DNB radiance products. For all the thirty points, the ZRQ and ZARBQ analysis have averaged R2 of 0.50 and 0.53, respectively, which indicates that the viewing angles are important factors influencing the variation of the artificial light radiance, but extending zenith to zenith-azimuth does not much better explain the variation of the observed artificial light. Importantly, based on the data analysis, we can make the hypothesis that building height may affect the relationship between VZA and artificial light, and cold and hot spot effects are clearly found in tall building areas. These findings are potentially useful to reconstruct more stable time series VIIRS DNB images for socioeconomic applications by removing the angular effects.'
  },

  {
    'author': [ "Xi Li", "Noam Levin", "Jinlong Xie", "Deren Li" ],
    'isTop': true,
    'title': 'Monitoring hourly night-time light by an unmanned aerial vehicle and its implications to satellite remote sensing',
    'journal': 'Remote Sensing of Environment',
    'volume': '247',
    'number': '',
    'pages': '111942',
    'year': '2020',
    'publisher': 'Taylor & Francis',
    'doi': '10.1016/j.rse.2020.111942',
    'url': 'https://doi.org/10.1016/j.rse.2020.111942',
    'abstract': 'Satellite-observed night-time light in urban areas has been widely used as an indicator for socioeconomic development and light pollution. Up to present, the diurnal dynamics of city light during the night, which are important to understand the nature of human activity and the underlying variables explaining night-time brightness, have hardly been investigated by remote sensing techniques due to limitation of the revisit time and spatial resolution of available satellites. In this study, we employed a consumer-grade unmanned aerial vehicle (UAV) to monitor city light in a study area located in Wuhan City, China, from 8:08 PM, April 15, 2019 to 5:08 AM, April 16, 2019, with an hourly temporal resolution. By using three ground-based Sky Quality Meters (SQMs), we found that the UAV-recorded light brightness was consistent with the ground luminous intensity measured by the SQMs in both the spatial (R2 = 0.72) and temporal dimensions (R2 > 0.94), and that the average city light brightness was consistent with the sky brightness in the temporal dimension (R2 = 0.98), indicating that UAV images can reliably monitor the city\'s night-time brightness. The temporal analysis showed that different locations had different patterns of temporal changes in their night-time brightness, implying that inter-calibration of two kinds of satellite images with different overpass times would be a challenge. Combining an urban function map of 18 classes and the hourly UAV images, we found that urban functions differed in their temporal light dynamics. For example, the outdoor sports field lost 97.28% of its measured brightness between 8: 08 PM – 4:05 AM, while an administrative building only lost 4.56%, and the entire study area lost 61.86% of its total brightness. Within our study area, the period between 9:06 PM and 10:05 PM was the period with largest amount of light loss. The spectral analysis we conducted showed that city light colors were different in some urban functions, with the major road being the reddest region at 8:08 PM and becoming even redder at 4:05 AM. This preliminary study indicates that UAVs are a good tool to investigate city light at night, and that city light is very complex in both of the temporal and spatial dimensions, requiring comprehensive investigation using more advanced UAV techniques, and emphasizing the need for geostationary platforms for night-time light sensors.'
  },

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
    'url': 'https://doi.org/10.1080/2150704X.2019.1577573',
    'abstract': 'Launched on 2 June 2018, Luojia-1 satellite records night-time light imagery at 130 m resolution, which is higher than most of the existing night-time light images to date. This study evaluated radiometric and spatial properties of the Luojia-1 satellite imagery for cities of Los Angeles, Wuhan and Rome as well as the change detection capability for Zunyi city. For the radiometric property, the analysis shows that the Luojia-1 images correlate well with the radiance of the Visible Infrared Imaging Radiometer Suite (VIIRS)’s Day and Night Band (DNB), and that the Luojia-1 images have a wider range of radiance values, as well as higher radiance values (e.g., 40%–90% higher) than the VIIRS DNB images. Using wavelet decomposition and change detection analysis to evaluate spatial property and change detection capability, it was found that the Luojia-1 images provide abundant spatial detail information, with about 20%–54% energy of wavelet component of the images stored in 100–400 m resolutions, and they can help to track the electrification of new roads and buildings at a fine resolution. This study shows that the Luojia-1 images are an effective data source for analysing spatiotemporal distribution of night-time light and its associated socioeconomic attributes.'
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
    'url': 'https://doi.org/10.1080/01431161.2017.1331476',
    'abstract': 'Monthly composites of night-time light acquired from the Meteorological Satellite Program’s Operational Linescan System (DMSP/OLS) had been used to evaluate socio-economic dynamics and human rights during the Syrian Civil War, which started in March 2011. However, DMSP/OLS monthly composites are not available subsequent to February 2014, and the only available night-time light composites for that period were acquired from the Suomi National Polar-orbiting Partnership satellite’s Visible Infrared Imaging Radiometer Suite (Suomi NPP/VIIRS). This article proposes an intercalibration model to simulate DMSP/OLS composites from the VIIRS day-and-night band (DNB) composites, by using a power function for radiometric degradation and a Gaussian low pass filter for spatial degradation. The DMSP/OLS data and the simulated DMSP/OLS data were combined to estimate the city light dynamics in Syria’s major human settlement between March 2011 and January 2017. Our analysis shows that Syria’s major human settlement lost about 79% of its city light by January 2017, with Aleppo, Daraa, Deir ez-Zor, and Idlib provinces losing 89%, 90%, 96%, and 99% of their light, respectively, indicating that these four provinces were most affected by the war. We also found that the city light in Syria and 12 provinces rebounded from early 2016 to January 2017, possibly as a result of the peace negotiation signed in Geneva.'
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
    'url': 'https://doi.org/10.1080/01431161.2014.971469',
    'abstract': 'This study investigates whether night-time light images acquired from the Defense Meteorological Satellite Program’s Operational Linescan System provide spatial and temporal insight with regard to the humanitarian aspects of the Syrian crisis. Evaluating the ongoing crisis in Syria is challenging since reliable witness reports are hard to gather in a war zone. Therefore satellite images, as one of the few sources of objective information, are potentially of great importance. We used 38 monthly Defense Meteorological Satellite Program’s Operational Linescan System composites covering the period between January 2008 and February 2014. The results indicate that night-time light and lit area in Syria declined by about 74% and 73%, respectively, between March 2011 and February 2014. In 12 of 14 provinces, night-time light declined by >60%. Damascus and Quneitra are the exceptions, with night-time light having declined only by about 35%. Notably, the number of internally displaced persons (IDPs) of each province shows a linear correlation with night-time light loss, with an R2 value of 0.52. Through clustering the time series images, we found that the international border of Syria represents a distinct boundary between regions of differing night-time light spatiotemporal patterns. The contrast across the border increases as the region studied encompasses a wider zone on either side of the border. These findings lend support to the hypothesis that night-time light can be a useful source for monitoring humanitarian crises such as that unfolding in Syria.'
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
    'url': 'https://doi.org/10.1080/2150704X.2012.687471',
    'abstract': 'In remote-sensing community, radiometric calibration of night-time light images has long been a problem, hindering change detection of images in different dates. Currently, an intercalibration model is regarded as the unique solution for the problem, but prior knowledge is needed to extract reference pixels with stable lights, which are hard to obtain in most of the applications. This study proposed an automatic algorithm to extract the reference pixels for convenient use of the intercalibration model, with an assumption that there are sufficient pixels with stable night-time lights in the multi-temporal images. To automatically extract the stable pixels from images in two dates, all pixels in the two dates were entered into a linear regression model, and the outliers viewed as suspected changed pixels were discarded iteratively. Consequently, some stable pixels were extracted and the intercalibration model was implemented. Annual night-time light composites in Beijing, China, from 1992 to 2010 were taken as the study material, and the results show that the multi-temporal calibrated night-time light data have higher correlation with gross domestic production (GDP) (R^2 = 0.8734) and urban population (UP) (R^2 = 0.9269) than those of the uncalibrated images (with the R^2 values 0.7963 and 0.8575, respectively). Furthermore, the data inconsistency from different night-time light satellites in the same year was reduced with the proposed algorithm. The results demonstrate that the proposed algorithm is effective in intercalibrating the Defense Meteorological Satellite Program\'s Operational Linescan System (DMSP-OLS) images automatically.'
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
    'url': 'https://doi.org/10.1109/JSTARS.2013.2241021',
    'abstract': 'The objective of this research is to investigate the potential of nighttime light images, acquired with Defense Meteorological Satellite Program Operational Linescan System (DMSP-OLS), in evaluating global armed conflicts. To achieve this purpose, we assessed the relationship between armed conflicts and the satellite-observed nighttime light variation over 159 countries through annual composites of the nighttime light images. Firstly, a light ratio index was developed to reduce the data inconsistency of annual nighttime light images during 1992-2010. Then 12 countries were selected as examples for a primary investigation, and we found the outbreak of a war can reduce the light and the ceasefire can increase the light from the remote sensing images, which indicates armed conflict events always have significant impact on the nighttime light. Based on this assertion, a nighttime light variation index (NLVI) was developed to quantify the variation of the time series nighttime light. Then using conditional probability analysis, the probability of a country suffering from armed conflicts increases with increase of NLVI. Particularly, when the NLVI value is in a very high level as defined, 80% of the countries have experienced armed conflicts. Furthermore, using correlation analysis, the number of global armed conflicts is highly correlated with the global NLVI in temporal dimension, with a correlation coefficient larger than 0.77. In summary, the potential of nighttime light images in armed conflict evaluation is extended from a regional scale to a global scale by this study.'
  },
];

const AuthorList = (list) => {
  const tagList = []
  list.forEach((item) => {
    if (item === 'Xi Li' || item === 'Li Xi' || item === '李熙' || item === 'Xi Li*' || item === 'Li Xi*') {
      tagList.push(<Text style={{fontWeight:'bolder', color: '#1890ff'}}>{item + ", "}</Text>)
    } else {
      tagList.push(item + ", ");
    }
  })
  return <>{tagList}</>
}

export const Paper = () => {
  return (
    <>
      <List
        itemLayout="vertical"
        dataSource={index}
        size="small"
        footer={
          <div>
            <b>Statistics as of 12/31/2022</b>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
          >
            <List.Item.Meta
              title={
                <a href={item.url} download style={{fontSize: 14, textDecoration: 'none'}} target="_blank" rel="noreferrer">
                    {
                      AuthorList(item.author)
                    }{item.year + ". " + item.title + ", "}{<i style={{color: '#1890ff'}}>{item.journal}</i>}{" ," + item.volume + (item.number === "" ? (item.number) : ("(" + item.number + ")")) + " ," + item.pages}
                  </a>
              }
            />
          </List.Item>
        )}
      />
    </>
  )
}

 const { Title, Text } = Typography;
 const {Meta} = Card;

 const googleScholarUrl = 'https://scholar.google.com/citations?hl=zh-CN&user=eWiOELoAAAAJ'
 
 const EnglishProfile = props => {
   const { _ } = props;
 
   return (
    <PageHeaderWrapper style={{ backgroundColor: "#fff" }}
                        title={"Profile"}
                        subTitle={"Welcome to our group!"}
    >
      <Row>
        <Col flex="auto" style={{marginBottom: 20}}>
          <Card actions={[
            <span style={{fontSize: 15}}>
              <EnvironmentTwoTone/>&nbsp;&nbsp;<Text>{"129 Luoyu Road, State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing (LIESMARS), Wuhan University, Wuhan 430079, China"}</Text>
            </span>,
            <span style={{fontSize: 15}}>
              <MailTwoTone/>&nbsp;&nbsp;<Text>lixi@whu.edu.cn</Text>&nbsp;&nbsp;&nbsp;&nbsp;
              <MailTwoTone/>&nbsp;&nbsp;<Text>li_rs@163.com</Text>
            </span>
          ]}>
            <Meta
              style={{fontSize: 16}}
              avatar={
                <Avatar size={128} src={require("../../assets/LiXi_english.png")}/>
              }
              title={<span style={{fontSize: 20}}>Dr. Xi Li</span>}
              description={
                <p style={{textIndent:"2em"}}>
                  Dr. Xi Li is a professor in the State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing (LIESMARS), Wuhan University. He works on remote sensing of night-time light, including application of night-time light data, radiative transfer model of night-time light and night-time satellite development.
                </p>
              }
            />
          </Card>
        </Col>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Research interests</Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          Remote sensing of night-time light
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          Land cover change mapping
        </li>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Education</Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          2000/9-2004/6, Photogrammetry and Remote Sensing, Wuhan University, Bachelor
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          2004/9-2009/6, Photogrammetry and Remote Sensing, Wuhan University, Ph.D
        </li>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Academic Service</Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          Editorial Board Member, International Journal of Remote Sensing
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          International Consultant, Asian Development Bank
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          Coordinator, UNOSAT-WHU collaboration
        </li>
      </Row>
      <Row style={{fontSize: 16}}>
        <li>
          Expert, Group on Earth Observations
        </li>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Media Report</Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <p style={{textIndent:"2em"}}>
          His research on Syrian Crisis has supported 7418th meeting of United Nations Security Council and has widely been reported by hundreds of global media including CNN, BBC,&nbsp; 
          <a href="https://www.reuters.com/article/mideast-crisis-syria-light-idINKBN0M807J20150312" target={"_blank"} without rel="noreferrer">Reuters</a>
          &nbsp;and <a href='https://www.nytimes.com/2015/03/15/world/an-ever-bleaker-syria-from-all-vantage-points.html' target={"_blank"} without rel="noreferrer">New York Times</a>.
        </p>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Publication</Title>
      </Row>
      <Row style={{fontSize: 16}}>
        <p>
          Google Scholar: <a href='https://scholar.google.com/citations?user=eWiOELoAAAAJ&hl=zh-CN&oi=ao' target={"_blank"} without rel="noreferrer">https://scholar.google.com/citations?user=eWiOELoAAAAJ&hl=zh-CN&oi=ao</a>
        </p>
      </Row>

      <Row style={{marginTop: 20}}>
        <Title level={4}>Selected Publication</Title>
      </Row>
      <Paper/>
    </PageHeaderWrapper>
   )
 };
 
 export default connect(({}) => {
   return {
    
   }
 })(EnglishProfile);
 