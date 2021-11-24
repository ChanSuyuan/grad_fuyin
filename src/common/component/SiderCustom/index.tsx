/**
 * @file sider nav
 */

import * as React from 'react'
import { Layout } from 'antd';

import { RouteComponentProps, withRouter } from 'react-router';

import './index.less'
import SiderMenu from '../SiderMenu';
import { menus } from '../../routes/MenuRoutes/config';


type SiderCustomProps = RouteComponentProps<any> & {
  collapsed?: boolean;
}

const LayoutSider = Layout.Sider

const SiderCustom: React.FC<SiderCustomProps> = (props) => {
  // const { collapsed } = props

  return (
    <LayoutSider theme="light" width={200} trigger={null} style={{ position: 'fixed', height: "100vh" }}>
      <div className="brand">
        <div className="logo">
        </div>
      </div>
      <div style={{ marginTop: 25 }} />
      <SiderMenu menus={menus} />
    </LayoutSider>
  );
}


export default withRouter(SiderCustom);
