/**
 * @file Menu
 */

import * as React from 'react'
import { Menu } from 'antd'
// import {
//   DesktopOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { IMenuRoutes } from '../../common/routes/MenuRoutes/config';

const MenuItem = Menu.Item


// export class SiderMenu extends React.Component {

//   render() {
//     return (
//       <Menu mode="inline" theme="light" >
//         <MenuItem key="dashboard" icon={<DesktopOutlined />}>
//           控制台
//         </MenuItem>
//         <MenuItem key="user-admin" icon={<UserOutlined />}>
//           用户管理
//         </MenuItem>
//         <MenuItem key="auth-admin" icon={<TeamOutlined />}>
//           角色管理
//         </MenuItem>
//         <MenuItem key="params-admin" icon={<FileOutlined />}>
//           参数管理
//         </MenuItem>
//       </Menu>
//     )
//   }

// }

const renderMenuItem = (
  item: IMenuRoutes
) => {
  <MenuItem key={item.key}>
    <Link to={(item.route || item.key) + (item.query || '')}>
      {/* {item.icon && <Icon type={item.icon} />} */}
      <span className="nav-text">{item.title}</span>
    </Link>
  </MenuItem>
}


