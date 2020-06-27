// 第一作者发表的论文
const data = [
  {
    'title': 'A preliminary investigation of Luojia-1 night-time light imagery.',
    'year': 2019,
    'citations': 23,
    'doi': '10.1080/2150704X.2019.1577573'
  },
  {
    'title': 'Evaluating Algeria’s social and economic development using a series of night-time light images between 1992 to 2012.',
    'year': 2018,
    'citations': 4,
    'doi': '10.1080/01431161.2018.1510560'
  },
  {
    'title': 'Night-Time Light Dynamics during the Iraqi Civil War.',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Mapping Urban Extent Using Luojia 1-01 Nighttime Light Imagery.',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Spatial and seasonal patterns of night-time lights in global ocean derived from VIIRS DNB images.',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Remote sensing of night-time light.',
    'year': 2017,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Intercalibration between DMSP/OLS and VIIRS night-time light images to evaluate city light dynamics of Syria’s major human settlement during Syrian Civil War.',
    'year': 2017,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Evaluation of IMERG and TRMM 3B43 Monthly Precipitation Products over Mainland China.',
    'year': 2016,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Remote sensing of human beings – a perspective from nighttime light.',
    'year': 2016,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Detecting 2014 Northern Iraq Insurgency using night-time light imagery.',
    'year': 2015,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Multi-Scale measurement of regional inequality in Mainland China during 2005–2010 using DMSP/OLS night light imagery and population density grid data.',
    'year': 2015,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Quantifying contribution of land use types to nighttime light using an unmixing model.',
    'year': 2014,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Can night-time light images play a role in evaluating the Syrian Crisis?',
    'year': 2014,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'A spectral index for highlighting forest cover from remotely sensed imagery.',
    'year': 2014,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Potential of NPP-VIIRS nighttime light imagery for modeling the regional economy of China.',
    'year': 2013,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Satellite-observed nighttime light variation as evidence for global armed conflicts.',
    'year': 2013,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Automatic intercalibration of night-time light imagery using robust regression.',
    'year': 2013,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Detecting Zimbabwe’s decadal economic decline using nighttime light imagery.',
    'year': 2013,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'Impact of training database on super resolution-based spectral unmixing.',
    'year': 2012,
    'citations': 0,
    'doi': ''
  },
  {
    'title': 'A super resolution approach for spectral unmixing of remote sensing images.',
    'year': 2011,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  },
  {
    'title': '',
    'year': 2018,
    'citations': 0,
    'doi': ''
  }
];
