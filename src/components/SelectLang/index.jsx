/*
 * @Author: jiaminghui
 * @Date: 2022-05-09 10:45:16
 * @LastEditTime: 2022-06-23 02:07:59
 * @LastEditors: jiaminghui
 * @FilePath: \lixi\src\components\SelectLang\index.jsx
 * @Description: 
 */
// import { GlobalOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { getLocale, setLocale } from 'umi';
// import React from 'react';
// import classNames from 'classnames';
// import HeaderDropdown from '../HeaderDropdown';
// import styles from './index.less';
//
// const SelectLang = props => {
//   const { className } = props;
//   const selectedLang = getLocale();
//
//   const changeLang = ({ key }) => setLocale(key);
//
//   const locales = ['zh-CN', 'en-US'];
//   const languageLabels = {
//     'zh-CN': '简体中文',
//     'en-US': 'English',
//   };
//   const languageIcons = {
//     'zh-CN': '🇨🇳',
//     'zh-TW': '🇭🇰',
//     'en-US': '🇺🇸',
//   };
//   const langMenu = (
//     <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
//       {locales.map(locale => (
//         <Menu.Item key={locale}>
//           <span role="img" aria-label={languageLabels[locale]}>
//             {languageIcons[locale]}
//           </span>{' '}
//           {languageLabels[locale]}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );
//   return (
//     <HeaderDropdown overlay={langMenu} placement="bottomRight">
//       <span className={classNames(styles.dropDown, className)}>
//         <GlobalOutlined title="语言" />
//       </span>
//     </HeaderDropdown>
//   );
// };
//
// export default SelectLang;
import { Button } from 'antd';
import { getLocale, setLocale } from 'umi';
import React from 'react';

const SelectLang = props => {
  const selectedLang = getLocale();

  const locales = {
    'zh-CN': 'zh-CN',
    'en-US': 'en-US',
  };

  const languageLabels = {
    'zh-CN': '中文',
    'en-US': 'English',
  };

  const setCN = () => {
    setLocale('zh-CN');
  }

  const setEN = () => {
    setLocale('en-US');
  }

  return (
    <>
      {/* <Button style={{ marginTop: 15, marginRight: 20 }}
              onClick={setCN}
              value={locales["zh-CN"]}>
        {languageLabels["zh-CN"]}
      </Button>
      <Button style={{ marginTop: 15, marginRight: 20 }}
              onClick={setEN}
              value={locales["en-US"]}>
        {languageLabels["en-US"]}
      </Button> */}
    </>
    );
};

export default SelectLang;

