/**
 * disc:
 * date: 2020-06-13 20:52:35
 * author: luneice
 */

import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, Row, List, Table } from 'antd';
import { connect } from 'dva';
import { FormattedMessage } from "umi";
import React from "react";

const { Title, Text } = Typography;

const index = [
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
    'abstract': '',
    'factor': '13.850',
  },
  {
    'author': [
      'Li Xi-Ya', 'Li Xi*', 'Fan Ziying', 'Mi Li', 'Kandakji Tarek',
      'Song Zhen', 'Li Deren', 'Song Xiao-Peng*'
    ],
    'isTop': true,
    'title': 'Civil war hinders crop production and threatens food security in Syria',
    'journal': 'Nature Food',
    'volume': '3',
    'number': '1',
    'pages': '38-46',
    'year': '2022',
    'publisher': '',
    'doi': '10.1038/s43016-021-00432-4',
    // 'url': '../../assets/papers/s43016-021-00432-4.pdf',
    'url': 'Fulltext_43016_2021_432_OnlinePDF-1.pdf',
    'abstract': 'Assessing the impact of violent conflict on Syrian agriculture is challenging given data limitations and attributability issues. Using satellite data at 30 m spatial resolution, we found that the extent of productive cropland showed greater interannual variability and spatial heterogeneity after the start of the civil war in 2011. Using changes in satellite-based night-time light as a proxy for war impact intensity, we also found that cropland close to severely impacted urban settlements faced greater disruption. Fixed-effects models revealed the relationship between productive cropland and precipitation for the pre-war period, whereas a counterfactual scenario constructed for the period 2012–2019 showed substantial variation at the regional level. While the ongoing conflict promoted cropland cultivation in safer zones, cropland reduction took place in the country’s northwest and southeast regions. Our study demonstrated the combined utility of daytime and night-time satellite data to assess food insecurity in extreme environments and can help guide distribution of food and aid in Syria.',
    'factor': '20.430',
  },
  {
    'author': ['Zhe Tong', 'Xi Li*', 'Hanrui Cao'],
    'title': 'Comparing DMSP/OLS Stable Nighttime Light With Radiance Calibrated Nighttime Light',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '14',
    'number': '',
    'pages': '11116-11125',
    'year': '2021',
    'publisher': '',
    'doi': '10.1109/JSTARS.2021.3123065',
    'url': 'https://doi.org/10.1109/JSTARS.2021.3123065',
    'abstract': '',
    'factor': '',
  },
  {
    'author': ['Kangbo Dong', 'Xi Li*', 'Hanrui Cao', 'Zhe Tong'],
    'title': 'Intercalibration Between Night-Time DMSP/OLS Radiance Calibrated Images and NPP/VIIRS Images Using Stable Pixels',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '14',
    'number': '',
    'pages': '8838-8848',
    'year': '2021',
    'publisher': '',
    'doi': '10.1109/JSTARS.2021.3109072',
    'url': 'https://doi.org/10.1109/JSTARS.2021.3109072',
    'abstract': '',
    'factor': '',
  },
  {
    'author': ['Hanrui Cao', 'Xi Li*', 'Zhe Tong'],
    'title': 'Impact of Image Saturation on Radiometric Intercalibration of DMSP/OLS Nighttime Light Images',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '14',
    'number': '',
    'pages': '7948-7960',
    'year': '2021',
    'publisher': '',
    'doi': '10.1109/JSTARS.2021.3101837',
    'url': 'https://doi.org/10.1109/JSTARS.2021.3101837',
    'abstract': '',
    'factor': '',
  },
  {
    'author': ['Ji Wu', 'Zhi Zhang', 'Xiao Yang', 'Xi Li*'],
    'title': 'Analyzing Pixel-Level Relationships between Luojia 1-01 Nighttime Light and Urban Surface Features by Separating the Pixel Blooming Effect',
    'journal': 'Remote Sensing',
    'volume': '13',
    'number': '23',
    'pages': '4838',
    'year': '2021',
    'publisher': '',
    'doi': '10.3390/rs13234838',
    'url': 'https://doi.org/10.3390/rs13234838',
    'abstract': '',
    'factor': '',
  },
  {
    'author': [ 'Levin Noam', 'Kyba Christopher C.M.', 'Zhang Qingling',
      'Sánchez de Miguel Alejandro', 'Román Miguel O.', 'Xi Li',
      'Portnov Boris A.', 'Molthan Andrew L.', 'Jechow Andreas',
      'Miller Steven D.', 'Wang Zhuosen', 'Shrestha Ranjay M.', 'Elvidge Christopher D.',
    ],
    'isTop': true,
    'title': 'Remote sensing of night lights: A review and an outlook for the future.',
    'journal': 'Remote Sensing of Environment',
    'volume': '237',
    'number': '',
    'pages': '111443',
    'year': '2020',
    'publisher': '',
    'doi': '10.1016/j.rse.2019.111443',
    'url': 'https://doi.org/10.1016/j.rse.2019.111443',
    'abstract': 'Remote sensing of night light emissions in the visible band offers a unique opportunity to directly observe human activity from space. This has allowed a host of applications including mapping urban areas, estimating population and GDP, monitoring disasters and conflicts. More recently, remotely sensed night lights data have found use in understanding the environmental impacts of light emissions (light pollution), including their impacts on human health. In this review, we outline the historical development of night-time optical sensors up to the current state of the art sensors, highlight various applications of night light data, discuss the special challenges associated with remote sensing of night lights with a focus on the limitations of current sensors, and provide an outlook for the future of remote sensing of night lights. While the index mainly focuses on space borne remote sensing, ground based sensing of night-time brightness for studies on astronomical and ecological light pollution, as well as for calibration and validation of space borne data, are also discussed. Although the development of night light sensors lags behind day-time sensors, we demonstrate that the field is in a stage of rapid development. The worldwide transition to LED lights poses a particular challenge for remote sensing of night lights, and strongly highlights the need for a new generation of space borne night lights instruments. This work shows that future sensors are needed to monitor temporal changes during the night (for example from a geostationary platform or constellation of satellites), and to better understand the angular patterns of light emission (roughly analogous to the BRDF in daylight sensing). Perhaps most importantly, we make the case that higher spatial resolution and multispectral sensors covering the range from blue to NIR are needed to more effectively identify lighting technologies, map urban functions, and monitor energy use.',
    'factor': '13.850',
  },
  {
    'author': [ "Xia Zhao", "Xi Li*", "Yuyu Zhou*", "Deren Li" ],
    'title': 'Analyzing Urban Spatial Connectivity Using Night Light Observations: A Case Study of Three Representative Urban Agglomerations in China',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '13',
    'number': '',
    'pages': '1097-1108',
    'year': '2020',
    'publisher': '',
    'doi': '10.1109/JSTARS.2020.2980514',
    'url': 'https://doi.org/10.1109/JSTARS.2020.2980514',
    'abstract': '  Urban connectivity information is important for regional planning of sustainable development goals. However, there are still challenges in deriving the spatial connectivity relationship among urban areas. The nighttime light data measure anthropogenic phenomenon remotely and can be seen as a unique source for monitoring urban spatial expansion and human activities. This study presents an object-based approach for investigating spatial connectivity among urban patches by incorporating Suomi National Polar-Orbiting Partnership Visible Infrared Imaging Radiometer Suite Day/Night Band and land use data collected in 2015. A graph-based method is used to construct connectivity networks and explore spatial patterns considering both quantity and quality of connections in three vibrant urban agglomerations in China, namely, Jing-Jin-Ji (JJJ), Yangtze River Delta (YRD), and Pearl River Delta (PRD) megaregions. Results indicate that networks follow a power law distribution according to cumulative degree distributions. A closer connectivity relationship exists among urban patches in PRD, with a relatively high-intensity connection ratio and a mean degree of 4.5, compared with YRD and JJJ. Block-like connections are observed in core areas of all urban agglomerations (UAs), and single-tree connections are found in peripheral areas. This article implies a significant inequality in the regional development and hub-spoke structures with hubs of provincial capitals and municipalities. Our proposed framework is transferrable for the analysis of connectivity relationship in other regions, and the outcome can contribute to the study of evolution of UAs and bring insights to policymakers for sustainable development at regional level.',
    'factor': '',
  },
  {
    'author': [ "Lin Zhang", "Xi Li*", "Fengrui Chen" ],
    'title': 'Spatiotemporal Analysis of Venezuela\'s Nighttime Light During the Socioeconomic Crisis',
    'journal': 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing',
    'volume': '13',
    'number': '',
    'pages': '2396-2408',
    'year': '2020',
    'publisher': '',
    'doi': '10.1109/JSTARS.2020.2995695',
    'url': 'https://doi.org/10.1109/JSTARS.2020.2995695',
    'abstract': 'The lack of official statistics makes it difficult to assess Venezuela\'s economic situation during the socioeconomic crisis. In this article, we used Visible Infrared Imaging Radiometer Suite (VIIRS) nighttime light images to evaluate Venezuela\'s crisis. The Hodrick-Prescott filter was used to decompose the sum of urban light (SUL) into two components: the sum of urban light trend (SULT) and the SUL cycle. Then, we proposed an index of nighttime light change ratio to estimate Venezuelan nighttime light dynamics. We found that Venezuela has lost 30.37% of its SULT from April 2012 to December 2018. The regression analysis shows that Venezuelan SULT had a strong relationship to a number of socioeconomic indicators: the SULT was positively correlated to crude oil production with R2 of 0.9159, negatively correlated to dollar exchange rate with R2 of 0.9516, and negatively correlated to the number of asylum seekers with R2 of 0.8384. We also found that among the three states with a largest nighttime light decrease, the economy of two states was dominated by agriculture and that of one state was dominated by the oil industry. In the pixel analysis, compared with the urban cores, the suburbs of urban cores of 12 main cities had a higher percentage of SULT increased areas. Around the Venezuela-Colombia border, the SULT decreased in the Venezuelan side but increased in the Colombian side. Our analysis suggests that nighttime light imagery can help to assess Venezuela\'s situation during the crisis.',
    'factor': '',
  },
  {
    'author': [ "Zimin Yin", "Xi Li*", "Fei Tong", "Zhibiao Li", "Michael Jendryke" ],
    'title': 'Mapping urban expansion using night-time light images from Luojia1-01 and International Space Station',
    'journal': 'International Journal of Remote Sensing',
    'volume': '41',
    'number': '7',
    'pages': '2603-2623',
    'year': '2020',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2019.1693661',
    'url': 'https://doi.org/10.1080/01431161.2019.1693661',
    'abstract': 'Night-time light (NTL) images have been proved as a type of reliable data source to map urban expansion. In this index, to investigate the potential of using multi-source NTL images at near 100 m resolution to detect urban expansion, we use a Luojia1-01 (LJ1-01) image in 2018 and an International Space Station (ISS) night-time image in 2010 in Wuhan city as experiment images. Based on the multiple linear robust regression model, a process of intercalibration between LJ1-01 imagery and ISS imagery is proposed to build a comparable dataset. To detect urban expansion, using the above images at 130 m resolution, Jeffries-Matusita distance is used as an indicator to select the feature combination with the largest class separability. Among all the candidate combinations, the combination of the LJ1-01 image, the simulated LJ1-01 image, and their ratio best meets our requirements for classification. With this feature combination, a multi-temporal classification method based on Support Vector Machines and Back Propagating (BP) – Neural Network, respectively, is utilized to classify the study area into stable non-urban class, stable urban class, and expanding the urban class. The results of the multi-temporal classification show that the overall accuracy is around 90\\%, and the Kappa coefficients are larger than 0.84. For each class, the user’s accuracy is larger than 87\\%, and the producer’s accuracy is larger than 83\\%. The results of this study indicate that it is feasible to detect urban expansion by using multi-source NTL images at near 100 m resolution.',
    'factor': '',
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
    'abstract': 'Satellite-observed night-time light in urban areas has been widely used as an indicator for socioeconomic development and light pollution. Up to present, the diurnal dynamics of city light during the night, which are important to understand the nature of human activity and the underlying variables explaining night-time brightness, have hardly been investigated by remote sensing techniques due to limitation of the revisit time and spatial resolution of available satellites. In this study, we employed a consumer-grade unmanned aerial vehicle (UAV) to monitor city light in a study area located in Wuhan City, China, from 8:08 PM, April 15, 2019 to 5:08 AM, April 16, 2019, with an hourly temporal resolution. By using three ground-based Sky Quality Meters (SQMs), we found that the UAV-recorded light brightness was consistent with the ground luminous intensity measured by the SQMs in both the spatial (R2 = 0.72) and temporal dimensions (R2 > 0.94), and that the average city light brightness was consistent with the sky brightness in the temporal dimension (R2 = 0.98), indicating that UAV images can reliably monitor the city\'s night-time brightness. The temporal analysis showed that different locations had different patterns of temporal changes in their night-time brightness, implying that inter-calibration of two kinds of satellite images with different overpass times would be a challenge. Combining an urban function map of 18 classes and the hourly UAV images, we found that urban functions differed in their temporal light dynamics. For example, the outdoor sports field lost 97.28% of its measured brightness between 8: 08 PM – 4:05 AM, while an administrative building only lost 4.56%, and the entire study area lost 61.86% of its total brightness. Within our study area, the period between 9:06 PM and 10:05 PM was the period with largest amount of light loss. The spectral analysis we conducted showed that city light colors were different in some urban functions, with the major road being the reddest region at 8:08 PM and becoming even redder at 4:05 AM. This preliminary study indicates that UAVs are a good tool to investigate city light at night, and that city light is very complex in both of the temporal and spatial dimensions, requiring comprehensive investigation using more advanced UAV techniques, and emphasizing the need for geostationary platforms for night-time light sensors.',
    'factor': '13.850',
  },
  {
    'author': [ "Liu Shanshan", "Xi Li", "Noam Levin", "Michael Jendryke" ],
    'title': 'Tracing cultural festival patterns using time-series of VIIRS monthly products',
    'journal': 'Remote Sensing Letters',
    'volume': '10',
    'number': '12',
    'pages': '1172-1181',
    'year': '2019',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/2150704X.2019.1666313',
    'url': 'https://doi.org/10.1080/2150704X.2019.1666313',
    'abstract': 'Night-time light (NTL) data shows a high correspondence with human activities. Recent studies also found that the NTL responds to holidays, and that light values often peak at festival times. However, there are few studies on the different patterns of light change caused by different cultural events. Here, we examined the impacts of festivals on NTL, examining both the seasonal changes in NTL, and the spatial patterns of NTL changes during festivals. The monthly Visual Near-Infrared band composites on Suomi National Polar-orbiting Partnership (Suomi NPP VIIRS) from January 2014 to December 2017 were used. Firstly, we studied two religious events, Ramadan in Mecca, Saudi Arabia, and Ashura in Najaf, Iraq. We extracted the seasonal changes using a Seasonal-Trend decomposition procedure based on Loess and a proposed Information Ratio (IR) index, and found two completely different light change patterns, which corresponded to two Islamic factions, Shia and Sunni. Secondly, we studied two kinds of celebrations, Carnival and a catholic religious event (Day of the Virgin of Guadalupe), in Cancún and Puebla City in Mexico and found the distribution of light change during festivals is clearly distinguished between carnival and the religious event. The NTL during Carnival increases uniformly throughout the city, while the NTL during religious event presented an aggregate increase centring on the central cathedral. Thirdly, we calculated the Information Ratio (IR) values at the pixel scale and analysed the spatial distribution of seasonality in the four regions, Mecca and Najaf showing different patterns of light change during the event months compared to Mexico areas. The analysis shows that different characteristics of different cultures can be distinguished through the spatio-temporal analysis of NTL data. Given the responses of NTL to cultural context, local knowledge should be incorporated to better understand how people modify the nightscape.',
    'factor': '',
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
    'abstract': 'The released VIIRS DNB nightly images, also known as VIIRS DNB daily nighttime images, provide rich information for time series analysis of global socioeconomic dynamics. Anisotropic characteristic is a possible factor that influences the VIIRS DNB radiance at night and its time series analysis. This study aims to investigate the relationship between viewing angles and VIIRS DNB radiance of Suomi NPP satellite in urban areas. First, twenty-nine points were selected globally to explore the angle variation of Suomi NPP satellite views at night. We found that the variation of the satellite viewing zenith angle (VZA) is consistent (e.g. between 0° and 70°) since the range of VZA is fixed depending on the sensor design, and the range of viewing azimuth angle (VAA) increases with the increase of latitude. Second, thirty points in cities of Beijing, Houston, Los Angeles, Moscow, Quito and Sydney, were used to investigate the angle-radiance relationship. We proposed a zenith-radiance quadratic (ZRQ) model and a zenith-azimuth-radiance binary quadratic (ZARBQ) model to quantify the relationship between satellite viewing angles and artificial light radiance, which has been corrected by removing the moonlight and atmospheric impact from VIIRS DNB radiance products. For all the thirty points, the ZRQ and ZARBQ analysis have averaged R2 of 0.50 and 0.53, respectively, which indicates that the viewing angles are important factors influencing the variation of the artificial light radiance, but extending zenith to zenith-azimuth does not much better explain the variation of the observed artificial light. Importantly, based on the data analysis, we can make the hypothesis that building height may affect the relationship between VZA and artificial light, and cold and hot spot effects are clearly found in tall building areas. These findings are potentially useful to reconstruct more stable time series VIIRS DNB images for socioeconomic applications by removing the angular effects.',
    'factor': '13.850',
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
    'abstract': 'Launched on 2 June 2018, Luojia-1 satellite records night-time light imagery at 130 m resolution, which is higher than most of the existing night-time light images to date. This study evaluated radiometric and spatial properties of the Luojia-1 satellite imagery for cities of Los Angeles, Wuhan and Rome as well as the change detection capability for Zunyi city. For the radiometric property, the analysis shows that the Luojia-1 images correlate well with the radiance of the Visible Infrared Imaging Radiometer Suite (VIIRS)’s Day and Night Band (DNB), and that the Luojia-1 images have a wider range of radiance values, as well as higher radiance values (e.g., 40%–90% higher) than the VIIRS DNB images. Using wavelet decomposition and change detection analysis to evaluate spatial property and change detection capability, it was found that the Luojia-1 images provide abundant spatial detail information, with about 20%–54% energy of wavelet component of the images stored in 100–400 m resolutions, and they can help to track the electrification of new roads and buildings at a fine resolution. This study shows that the Luojia-1 images are an effective data source for analysing spatiotemporal distribution of night-time light and its associated socioeconomic attributes.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/01431161.2018.1510560',
    'abstract': 'After social and economic problems, Algeria regained its night-time light (NL) brightness as this analysis of space-borne images shows. We evaluate the advancement of artificial light sources and the socioeconomic development between 1992 to 2012 for all 48 provinces. Image calibration improved the consistency and comparability of the DMSP-OLS data. Light detected from gas flaring has been separated to focus on light from human settlements. We then estimated the relationship between night-time light and selected socioeconomic parameters (SEP). Night-time light growth (NLG) and night-time light annual growth (NLAG) indices are calculated at the national, regional and provincial level. Considering the Oil price crash and the Algerian Civil Concord, we take a detailed look at these historic events in Algeria. Our main findings are: (A) The total night-time light (TNL) for human settlements grew nationwide by 128%, (B) night-time light data correlates with socioeconomic parameters such as population, and electric power consumption, (C) the oil price crash resulted in slower night-time light growth, while the Algerian Civil Concord and the end of the crises led to increased TNL, (D) because of government investment, the High Plateaus are the fastest growing region since the end of the crises, (E) space-borne night-time light data can consistently fill the information gap when data from official sources are not available. Government and policy-making bodies may benefit from the presented findings allowing them to oversee and address provincial inequalities and economic development.',
    'factor': '',
  },
  {
    'author': [ 'Xia Zhao','Deren Li','Xi Li*','Lixian Zhao','Chuanqing Wu' ],
    'title': 'Spatial and seasonal patterns of night-time lights in global ocean derived from VIIRS DNB images',
    'journal': 'International Journal of Remote Sensing',
    'volume': '39',
    'number': '22',
    'pages': '8151-8181',
    'year': '2018',
    'publisher': 'Taylor & Francis',
    'doi': '10.1080/01431161.2018.1482022',
    'url': 'https://doi.org/10.1080/01431161.2018.1482022',
    'abstract': 'The majority of the research using night-time data has focused on the terrestrial environment, while the light flooding our oceans is less studied. Meanwhile, given the rapid development of imaging technology at night, remotely sensed night-time light data can now provide a great opportunity to improve understanding of the spatiotemporal distribution of light over large areas. In this article, we used monthly cloud-free night-time imagery from the Suomi National Polar-Orbiting Partnership (Suomi NPP) Visible Infrared Imaging Radiometer Suite Day/Night Band, collected from 2014 to 2016, to explore the spatial distribution of night-time light in marine ecosystems. Morphological methods were used to extract light agglomeration areas. Using the Empirical Mode Decomposition method, we detected seasonal change patterns. Our results show that the distribution of light at night is clustered, and mainly concentrated in coastal and offshore waters, with about 70% of the total light found in 0.3% of the global marine waters. Flares from oil and gas well may not create a distinctive seasonal pattern, although fishing lights may show a seasonal pattern. The five largest agglomeration areas of light are centred in the eastern and southeast waters of Asia with little seasonal fluctuation. The cyclical light pattern of the entire marine system had a period of about 0.94 years, while varied from 0.5 to 1.1 years in the agglomeration areas. The proportions of seasonal energy for 49% of the top 100 agglomeration areas were below 10%, while the areas located in the waters near northern Japan, North Korea, eastern Indonesia, and eastern Argentina experienced large seasonal changes.',
    'factor': '',
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
    'url': 'http://dx.doi.org/10.3390/rs10060858',
    'abstract': 'In this study, we analyzed the night-time light dynamics in Iraq over the period 2012–2017 by using Visible Infrared Imaging Radiometer Suite (VIIRS) monthly composites. The data quality of VIIRS images was improved by repairing the missing data, and the Night-time Light Ratio Indices (NLRIs), derived from urban extent map and night-time light images, were calculated for different provinces and cities. We found that when the Islamic State of Iraq and Syria (ISIS) attacked or occupied a region, the region lost its light rapidly, with the provinces of Al-Anbar, At-Ta’min, Ninawa, and Sala Ad-din losing 63%, 73%, 88%, and 56%, of their night-time light, respectively, between December 2013 and December 2014. Moreover, the light returned after the Iraqi Security Forces (ISF) recaptured the region. In addition, we also found that the night-time light in the Kurdish Autonomous Region showed a steady decline after 2014, with the Arbil, Dihok, and As-Sulaymaniyah provinces losing 47%, 18%, and 31% of their night-time light between December 2013 and December 2016 as a result of the economic crisis in the region. The night-time light in Southern Iraq, the region controlled by Iraqi central government, has grown continuously; for example, the night-time light in Al Basrah increased by 75% between December 2013 and December 2017. Regions formerly controlled by ISIS experienced a return of night-time light during 2017 as the ISF retook almost all this territory in 2017. This indicates that as reconstruction began, electricity was re-supplied in these regions. Our analysis shows the night-time light in Iraq is directly linked to the socioeconomic dynamics of Iraq, and demonstrates that the VIIRS monthly night-time light images are an effective data source for tracking humanitarian disasters in that country.',
    'factor': '',
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
    'url': 'http://dx.doi.org/10.3390/s18113665',
    'abstract': 'Luojia 1-01 satellite, launched on 2 June 2018, provides a new data source of nighttime light at 130 m resolution and shows potential for mapping urban extent. In this index, using Luojia 1-01 and VIIRS nighttime light imagery, we compared several methods for extracting urban areas, including Human Settlement Index (HSI), Simple Thresholding Segmentation (STS) and SVM supervised classification. According to the accuracy assessment, the HSI method using LJ1-01 data had the best performance in urban extent extraction, which presented the largest Kappa Coefficient value, 0.834, among all the results. For the urban areas extracted by VIIRS based HSI method, the largest Kappa Coefficient value was 0.772. In contrast, the largest Kappa Coefficient values obtained by STS method were 0.79 and 0.7512 respectively when using LJ1-01 and VIIRS data, while for SVM method the values were 0.7829 and 0.7486 when using Landsat-LJ and Landsat-VIIRS composite data respectively. The experimented results demonstrated that the utilization of nighttime light imagery can largely improve the accuracy of urban extent extraction and LJ1-01 data, with a higher resolution and more abundant spatial information, can lead to better identification results than its predecessors.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/01431161.2017.1351784',
    'abstract': 'The Defense Meteorological Satellite Program’s Operational Linescan System (DMSP/OLS) records visible and near-infrared light from clouds and the Earth’s surface at night, and in doing so provides not only visually arresting images of the Earth at night but also a geospatial time series of data that has proved to be a valuable source for both the natural and social sciences. Remote sensing of night-time light is a relatively new field in remote sensing, with origins that can be traced back to 1980s. It has become a particular focus since 2011, when a research group led by Dr Christopher Elvidge of the National Oceanic and Atmospheric Administration (NOAA) released a time series of annual composites of DMSP/OLS.',
    'factor': '',
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
    'abstract': 'Monthly composites of night-time light acquired from the Meteorological Satellite Program’s Operational Linescan System (DMSP/OLS) had been used to evaluate socio-economic dynamics and human rights during the Syrian Civil War, which started in March 2011. However, DMSP/OLS monthly composites are not available subsequent to February 2014, and the only available night-time light composites for that period were acquired from the Suomi National Polar-orbiting Partnership satellite’s Visible Infrared Imaging Radiometer Suite (Suomi NPP/VIIRS). This article proposes an intercalibration model to simulate DMSP/OLS composites from the VIIRS day-and-night band (DNB) composites, by using a power function for radiometric degradation and a Gaussian low pass filter for spatial degradation. The DMSP/OLS data and the simulated DMSP/OLS data were combined to estimate the city light dynamics in Syria’s major human settlement between March 2011 and January 2017. Our analysis shows that Syria’s major human settlement lost about 79% of its city light by January 2017, with Aleppo, Daraa, Deir ez-Zor, and Idlib provinces losing 89%, 90%, 96%, and 99% of their light, respectively, indicating that these four provinces were most affected by the war. We also found that the city light in Syria and 12 provinces rebounded from early 2016 to January 2017, possibly as a result of the peace negotiation signed in Geneva.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/10095020.2016.1159389',
    'abstract': 'City lights, fishing boats, and oil fields are the major sources of nighttime lights, therefore the nighttime light images provide a unique source to map human beings and their activities from outer space. While most of the scholars focused on application of nighttime light remote sensing in urbanization and regional development, the actual fields are much wider. This index summarized the applications of nighttime light remote sensing into fields such as the estimation of socioeconomic parameters, monitoring urbanization, evaluation of important events, analyzing light pollution, fishery, etc. For estimation of socioeconomic parameters, the most promising progress is that Gross Domestic Product and its growth rate have been estimated with statistical data and nighttime light data using econometric models. For monitoring urbanization, urban area and its dynamics can be extracted using different classification methods, and spatial analysis has been employed to map urban agglomeration. As sharp changes of nighttime light are associated with important socioeconomic events, the images have been used to evaluate humanitarian disasters, especially in the current Syrian and Iraqi wars. Light pollution is another hotspot of nighttime light application, as the night light is related to some diseases and abnormal behavior of animals, and the nighttime light images can provide light pollution information on large scales so that it is much easier to analyze the effects of light pollutions. In each field, we listed typical cases of the applications. At last, future studies of nighttime light remote sensing have been predicted.',
    'factor': '',
  },
  {
    'author': [ 'Fengrui Chen*', 'Xi Li*' ],
    'title': 'Evaluation of IMERG and TRMM 3B43 Monthly Precipitation Products over Mainland China',
    'journal': 'Remote Sensing',
    'volume': '8',
    'number': '6',
    'pages': '472',
    'year': '2016',
    'publisher': '',
    'doi': '10.3390/rs8060472',
    'url': 'http://dx.doi.org/10.3390/rs8060472',
    'abstract': 'As the successor of the Tropical Rainfall Measuring Mission (TRMM), the Global Precipitation Measurement (GPM) mission significantly improves the spatial resolution of precipitation estimates from 0.25° to 0.1°. The present study analyzed the error structures of Integrated Multisatellite Retrievals for GPM (IMERG) monthly precipitation products over Mainland China from March 2014 to February 2015 using gauge measurements at multiple spatiotemporal scales. Moreover, IMERG products were also compared with TRMM 3B43 products. The results show that: (1) overall, IMERG can capture the spatial patterns of precipitation over China well. It performs a little better than TRMM 3B43 at seasonal and monthly scales; (2) the performance of IMERG varies greatly spatially and temporally. IMERG performs better at low latitudes than at middle latitudes, and shows worse performance in winter than at other times; (3) compared with TRMM 3B43, IMERG significantly improves the estimation accuracy of precipitation over the Xinjiang region and the Qinghai-Tibetan Plateau, especially over the former where IMERG increases Pearson correlation coefficient by 0.18 and decreases root-mean-square error by 54.47 mm for annual precipitation estimates. However, most IMERG products over these areas are unreliable; and (4) IMERG shows poor performance in winter as TRMM 3B43 even if GPM improved its ability to sense frozen precipitation. Most of them over North China are unreliable during this period.',
    'factor': '',
  },
  {
    'author': [ 'Huimin Xu*', 'Hutao Yang', 'Xi Li*', 'Huiran Jin', 'Deren Li' ],
    'title': 'Multi-Scale Measurement of Regional Inequality in Mainland China during 2005–2010 Using DMSP/OLS Night Light Imagery and Population Density Grid Data',
    'journal': 'Sustainability',
    'volume': '7',
    'number': '10',
    'pages': '13469–13499',
    'year': '2015',
    'publisher': '',
    'doi': '10.3390/su71013469',
    'url': 'http://dx.doi.org/10.3390/su71013469',
    'abstract': 'This study used the Night Light Development Index (NLDI) to measure the regional inequality of public services in Mainland China at multiple scales. The NLDI was extracted based on a Gini Coefficient approach to measure the spatial differences of population distribution and night light distribution. Population data were derived from the dataset of China’s population density grid, and night light data were acquired from satellite imagery. In the multi-scale analysis, we calculated the NLDI for China as a whole, eight economic regions, 31 provincial regions, and 354 prefectural cities for the two years of 2005 and 2010. The results indicate that Southwest China and Northwest China are the regions with the most unequal public services, with NLDI values of 0.7116 and 0.7251 for 2005, respectively, and 0.6678 and 0.6304 for 2010, respectively. In contrast, Northern Coastal China had the lowest NLDI values of 0.4775 and 0.4312 for 2005 and 2010, respectively, indicating that this region had the most equal public services. Also, the regional inequality of Mainland China in terms of NLDI has been reduced from 0.6161 to 0.5743 during 2005–2010. The same pattern was observed from the provincial and prefectural analysis, suggesting that public services in Mainland China became more equal within the five-year period. A regression analysis indicated that provincial and prefectural regions with more public services per capita and higher population density had more equal public services.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/01431161.2015.1059968',
    'abstract': 'The territory controlled by the Islamic State of Iraq and Syria (ISIS) has grown rapidly since the start of the Syrian Civil War. In 2014, ISIS expanded its control into Northern Iraq, leading to a major humanitarian crisis in the region. This study makes use of night-time light images to detect the ISIS offensive against Iraq in 2014. We developed an algorithm to separate city lights from oilfield lights, based on an urban extent map. The image analysis indicates that all Northern Iraqi provinces experienced a large reduction in city lighting, varying from 16% to 93%. This reduction is especially evident in the three ISIS-controlled provinces, Al-Anbar, Saladin, and Ninawa, where the reduction of city lighting from May to December 2014 was 59%, 50%, and 93%, respectively. Most of the ISIS-controlled cities, including Mosul and Tikrit, experienced a loss of more than 90% in city lighting after being seized by ISIS, while the cities controlled by the Iraqi security forces (ISF) did not lose as much lighting. In contrast, the city lights in Ar Raqqa, Syria, ISIS’s de facto capital, did not show a decline after that region was seized by ISIS. We conclude that the conflict in Northern Iraq has resulted in a major loss of city lighting and that this loss is most likely due to lack of access to the Iraqi electricity supply grid rather than a deliberate ISIS strategy.',
    'factor': '',
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
    'url': 'https://doi.org/10.1109/LGRS.2014.2304496',
    'abstract': 'In this study, a model is developed to quantify the land use contribution to nighttime light using coarse-resolution nighttime light imagery and fine-resolution land use data. We assumed that the nighttime light of a region can be represented by a linear combination of land use areas, with its nighttime light intensity (NLI) as coefficient. Based on an unmixing strategy, the NLI of each land use type was estimated. The Berlin City and MA State were used as study areas. For the Berlin City, we made use of nighttime light imagery from the Suomi National Polar-orbiting Partnership and the land use maps with 52 classes as data sets for analysis, and we used a nighttime aerial photograph to derive reference data. For the MA State, we made use of nighttime light imagery from the Defense Meteorological Satellite Program\'s Operational Linescan System and the land use maps with 33 classes as data sets for analysis, and we used a nighttime photograph from the International Space Station to derive reference data. The reference NLI data were correlated with the estimated NLI data, and the R 2 values of Berlin and Massachusetts were 0.7277 and 0.7982, respectively, proving that the proposed model is effective.',
    'factor': '',
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
    'abstract': 'This study investigates whether night-time light images acquired from the Defense Meteorological Satellite Program’s Operational Linescan System provide spatial and temporal insight with regard to the humanitarian aspects of the Syrian crisis. Evaluating the ongoing crisis in Syria is challenging since reliable witness reports are hard to gather in a war zone. Therefore satellite images, as one of the few sources of objective information, are potentially of great importance. We used 38 monthly Defense Meteorological Satellite Program’s Operational Linescan System composites covering the period between January 2008 and February 2014. The results indicate that night-time light and lit area in Syria declined by about 74% and 73%, respectively, between March 2011 and February 2014. In 12 of 14 provinces, night-time light declined by >60%. Damascus and Quneitra are the exceptions, with night-time light having declined only by about 35%. Notably, the number of internally displaced persons (IDPs) of each province shows a linear correlation with night-time light loss, with an R2 value of 0.52. Through clustering the time series images, we found that the international border of Syria represents a distinct boundary between regions of differing night-time light spatiotemporal patterns. The contrast across the border increases as the region studied encompasses a wider zone on either side of the border. These findings lend support to the hypothesis that night-time light can be a useful source for monitoring humanitarian crises such as that unfolding in Syria.',
    'factor': '',
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
    'url': 'https://doi.org/10.1117/12.2068775',
    'abstract': 'Forest cover maps are essential for current researches of biomass estimation and global change, but traditional methods to derive forest maps are complex. These methods usually need training samples or other ancillary data as input, and are time- and labor- consuming for large scale applications. To make the process of forest cover mapping simple and rapid, in this index, a simple spectral index called forest index (FI) was proposed to highlight forest land cover in Landsat scenes. The FI is derived from three bands, green, red and near-infrared (NIR) bands and an FI image can be classified into forest/non-forest map with a threshold. The overall accuracies of classification maps in the two study areas were 97.8% and 96.2%, respectively, which indicates that the FI is efficient at highlighting forest cover.',
    'factor': '',
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
    'abstract': 'The objective of this research is to investigate the potential of nighttime light images, acquired with Defense Meteorological Satellite Program Operational Linescan System (DMSP-OLS), in evaluating global armed conflicts. To achieve this purpose, we assessed the relationship between armed conflicts and the satellite-observed nighttime light variation over 159 countries through annual composites of the nighttime light images. Firstly, a light ratio index was developed to reduce the data inconsistency of annual nighttime light images during 1992-2010. Then 12 countries were selected as examples for a primary investigation, and we found the outbreak of a war can reduce the light and the ceasefire can increase the light from the remote sensing images, which indicates armed conflict events always have significant impact on the nighttime light. Based on this assertion, a nighttime light variation index (NLVI) was developed to quantify the variation of the time series nighttime light. Then using conditional probability analysis, the probability of a country suffering from armed conflicts increases with increase of NLVI. Particularly, when the NLVI value is in a very high level as defined, 80% of the countries have experienced armed conflicts. Furthermore, using correlation analysis, the number of global armed conflicts is highly correlated with the global NLVI in temporal dimension, with a correlation coefficient larger than 0.77. In summary, the potential of nighttime light images in armed conflict evaluation is extended from a regional scale to a global scale by this study.',
    'factor': '',
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
    'abstract': 'In remote-sensing community, radiometric calibration of night-time light images has long been a problem, hindering change detection of images in different dates. Currently, an intercalibration model is regarded as the unique solution for the problem, but prior knowledge is needed to extract reference pixels with stable lights, which are hard to obtain in most of the applications. This study proposed an automatic algorithm to extract the reference pixels for convenient use of the intercalibration model, with an assumption that there are sufficient pixels with stable night-time lights in the multi-temporal images. To automatically extract the stable pixels from images in two dates, all pixels in the two dates were entered into a linear regression model, and the outliers viewed as suspected changed pixels were discarded iteratively. Consequently, some stable pixels were extracted and the intercalibration model was implemented. Annual night-time light composites in Beijing, China, from 1992 to 2010 were taken as the study material, and the results show that the multi-temporal calibrated night-time light data have higher correlation with gross domestic production (GDP) (R^2 = 0.8734) and urban population (UP) (R^2 = 0.9269) than those of the uncalibrated images (with the R^2 values 0.7963 and 0.8575, respectively). Furthermore, the data inconsistency from different night-time light satellites in the same year was reduced with the proposed algorithm. The results demonstrate that the proposed algorithm is effective in intercalibrating the Defense Meteorological Satellite Program\'s Operational Linescan System (DMSP-OLS) images automatically.',
    'factor': '',
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
    'url': 'http://dx.doi.org/10.3390/rs5063057',
    'abstract': 'Historically, the Defense Meteorological Satellite Program’s Operational Linescan System (DMSP-OLS) was the unique satellite sensor used to collect the nighttime light, which is an efficient means to map the global economic activities. Since it was launched in October 2011, the Visible Infrared Imaging Radiometer Suite (VIIRS) sensor on the Suomi National Polar-orbiting Partnership (NPP) Satellite has become a new satellite used to monitor nighttime light. This study performed the first evaluation on the NPP-VIIRS nighttime light imagery in modeling economy, analyzing 31 provincial regions and 393 county regions in China. For each region, the total nighttime light (TNL) and gross regional product (GRP) around the year of 2010 were derived, and a linear regression model was applied on the data. Through the regression, the TNL from NPP-VIIRS were found to exhibit R2 values of 0.8699 and 0.8544 with the provincial GRP and county GRP, respectively, which are significantly stronger than the relationship between the TNL from DMSP-OLS (F16 and F18 satellites) and GRP. Using the regression models, the GRP was predicted from the TNL for each region, and we found that the NPP-VIIRS data is more predictable for the GRP than those of the DMSP-OLS data. This study demonstrates that the recently released NPP-VIIRS nighttime light imagery has a stronger capacity in modeling regional economy than those of the DMSP-OLS data. These findings provide a foundation to model the global and regional economy with the recently availability of the NPP-VIIRS data, especially in the regions where economic census data is difficult to access.',
    'factor': '',
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
    'url': 'http://dx.doi.org/10.3390/rs5094551',
    'abstract': 'Zimbabwe’s economy declined between 2000 and 2009. This study detects the economic decline in different regions of Zimbabwe using nighttime light imagery from the Defense Meteorological Satellite Program’s Operational Linescan System (DMSP-OLS). We found a good correlation (coefficient = 0.7361) between Zimbabwe’s total nighttime light (TNL) and Gross Domestic Product (GDP) for the period 1992 to 2009. Therefore, TNL was used as an indicator of regional economic conditions in Zimbabwe. Nighttime light imagery from 2000 and 2008 was compared at both national and regional scales for four types of regions. At the national scale, we found that nighttime light in more than half of the lit area decreased between 2000 and 2008. Moreover, within the four region types (inland mining towns, inland agricultural towns, border towns and cities) we determined that the mining and agricultural sectors experienced the most severe economic decline. Some of these findings were validated by economic survey data, proving that the nighttime light data is a potential data source for detecting the economic decline in Zimbabwe.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/01431161.2012.657360',
    'abstract': 'Super resolution (SR)-based spectral unmixing (SRSU) is a recently developed spectral unmixing approach. Some issues in SRSU, such as the role of training database, remain unclear. According to the example-based SR reconstruction, training databases impact the reconstruction and consequently may also impact SRSU. This study investigated how training databases affect the SRSU, so the training database can be designed appropriately. A Markov network model was employed as a way to implement SR reconstruction. Ten training databases, derived from different types of remotely sensed images and non-remotely sensed images, were constructed and each training database-based SRSU was evaluated with respect to unmixing accuracy. Surprisingly, the experiments revealed that the SRSU performance is not sensitive to the types of training databases, since different training databases resulted in similar accuracy in spectral unmixing.',
    'factor': '',
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
    'url': 'https://doi.org/10.1080/01431161.2010.507794',
    'abstract': 'It is well known that coarse spatial resolution is an important factor for the occurrence of mixed pixels in remote sensing images, and conventional approaches for spectral unmixing adopt various techniques on spectral dimension only in a fixed spatial resolution. In this article, a super resolution (SR) approach for spectral unmixing is proposed, based on the assumption that increasing the spatial resolution helps to retrieve the composition of a pixel. Firstly, a remote sensing image is downscaled into an SR image using example-based kernel ridge regression (EBKRR). Secondly, the SR image is classified using supervised hard classification, and then the class map is decomposed into thematic class layers. Thirdly, the thematic class layers are upscaled into the original spatial resolution with an averaging operation, and the abundance maps are finally derived. In two simulated data-based experiments and one ground data-based experiment, this approach was compared with linear spectral mixture analysis (LSMA) and artificial neural network (ANN)-based spectral unmixing methods. The accuracy assessment indicated that the SR approach outperformed LSMA and ANN under measurements of mean absolute error and absolute bias in the three experiments.',
    'factor': '',
  },
  {
    'author': [ '李德仁', '李熙' ],
    'title': '夜光遥感技术在人道主义灾难评估中的应用',
    'journal': '自然杂志',
    'volume': '44',
    'number': '3',
    'pages': '169-175',
    'year': '2018',
    'publisher': '',
    'doi': '',
    'url': '',
    'factor': '',
  },
  {
    'author': [ '李德仁', '余涵若', '李熙' ],
    'title': '基于夜光遥感影像的“一带一路”沿线国家城市发展时空格局分析',
    'journal': '武汉大学学报 · 信息科学版',
    'volume': '42',
    'number': '6',
    'pages': '711-720',
    'year': '2017',
    'publisher': '',
    'doi': '',
    'url': '',
    'factor': '',
  },
  {
    'author': [ '李德仁', '李熙' ],
    'title': '论夜光遥感数据挖掘',
    'journal': '测绘学报',
    'volume': '44',
    'number': '6',
    'pages': '591-601',
    'year': '2015',
    'publisher': '',
    'doi': '',
    'url': '',
    'factor': '',
  },
];

const Factor = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'title',
      key: 'factor.title',
      width: 200,
      render: text => <FormattedMessage id={text}/>,
    },
    {
      title: text => <FormattedMessage id="research.factor.title"/>,
      dataIndex: 'number',
      key: 'factor.number',
      width: 200,
      render: text => <a>{text}</a>,
    }
  ];

  const factor = [
    {'title': 'cite', 'number': 1817},
    {'title': 'h index', 'number': 19},
    {'title': 'i10 index', 'number': 26}
  ];

  const citation = [
    {'year': 2015, 'number': 69},
    {'year': 2016, 'number': 70},
    {'year': 2017, 'number': 152},
    {'year': 2018, 'number': 170},
    {'year': 2019, 'number': 315},
    {'year': 2020, 'number': 430},
    {'year': 2021, 'number': 528},
  ];

  const googleScholarUrl = 'https://scholar.google.com/citations?hl=zh-CN&user=eWiOELoAAAAJ'

  return (
    <>
      <Row style={{marginTop: 20}}>
        <Title level={4}><FormattedMessage id="research.factor.title"/></Title>
      </Row>
      <Table pagination={false}
             columns={columns}
             footer={
               () =>
                 <b>
                   <FormattedMessage id="factor.table.footer"/>
                   <a style={{fontSize: 10, marginLeft: 10}} href={googleScholarUrl} target="_blank" rel="noreferrer">
                     <FormattedMessage id="factor.table.detail"/>
                   </a>
                 </b>
             }
             dataSource={factor}/>
    </>
  )
}

const RepresentativePaper = () => {
  return <>
    <Row style={{ marginTop: 20 }}>
      <Title level={4}><FormattedMessage id="research.rep-paper.title"/></Title>
    </Row>
    <List
      itemLayout="vertical"
      dataSource={index}
      size="small"
      renderItem={item => {
        if (item.isTop) {
          return (
            <List.Item
              key={item.title}
            >
              <List.Item.Meta
                title={
                  <a href={item.url} download style={{fontSize: 14, textDecoration: 'none'}} target="_blank" rel="noreferrer">
                    {
                      AuthorList(item.author)
                    }{item.year + ". " + item.title + ", "}{<i style={{color: '#1890ff'}}>{item.journal}</i>}{" ," + item.volume + (item.number === "" ? (item.number) : ("(" + item.number + ")")) + " ," + item.pages + (item.factor === "" ? ("") : ". (IF = " + item.factor + ")")}
                  </a>
                }
              />
            </List.Item>
          )
        }
      }
      }
    />
  </>
}

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
      {/* <Factor/> */}
      <RepresentativePaper/>
      <Row style={{ marginTop: 20 }}>
        <Title level={4}><FormattedMessage id="research.paper.title"/></Title>
      </Row>
      <List
        itemLayout="vertical"
        dataSource={index}
        size="small"
        footer={
          <div>
            <b><FormattedMessage id="paper.list.footer"/></b>
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
const Patent = () => {
  return <>
    <Row style={{ marginTop: 20 }}>
      <Title level={4}><FormattedMessage id="research.patent.title"/></Title>
    </Row>
    <Row style={{ fontSize: 16 }}>
      <p>
        李熙，马瑞琪，吴传清. 一种基于夜光遥感影像的城市范围提取方法（ZL201810246441.8）
      </p>
      <br></br>
      <p>
        李熙，尹子民，宋杨，李长辉. 一种基于异源夜光遥感影像的城市扩张检测方法及装置（ZL201910931480.6）
      </p>
      <br></br>
      <p>
        李熙，尚小雨，李长辉，宋杨. 一种夜光遥感影像相对辐射校正方法（ZL201911378502.7）
      </p>
    </Row>
  </>
}

const Honor = () => {
  return <>
    <Row style={{ marginTop: 20 }}>
      <Title level={4}><FormattedMessage id="research.honor.title"/></Title>
    </Row>
    <Row style={{ fontSize: 16 }}>
      <p>
        天空地遥感数据高精度智能处理关键技术及应用，国家科技进步一等奖（11/15），2021 年
      </p>
    </Row>
    <Row style={{ fontSize: 16 }}>
      <p>
        珞珈一号01星设计与数据处理关键技术，测绘科技进步特等奖（10/15），2020 年
      </p>
    </Row>
    <Row style={{ fontSize: 16 }}>
      <p>
        武汉市优秀青年科技工作者，武汉市组织部，2015 年
      </p>
    </Row>
  </>
}

const Research = props => {
  const { _ } = props;

  return (
    <PageHeaderWrapper
      style={{ backgroundColor: "#fff" }}
    >
      {/*<Row>*/}
      {/*  <Title level={4}><FormattedMessage id="research.project.title"/></Title>*/}
      {/*</Row>*/}
      <Honor/>
      <Patent/>
      <Paper/>
    </PageHeaderWrapper>
  )
};

export default connect(({}) => {
  return {

  }
})(Research);
