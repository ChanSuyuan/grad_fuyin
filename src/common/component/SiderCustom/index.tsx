/**
 * @file sider nav
 */

import * as React from 'react'
import { Layout } from 'antd';

import { RouteComponentProps, withRouter } from 'react-router';

import './index.less'
import SiderMenu from '../SiderMenu';
import { routes } from '../../routes/MenuRoutes/config';

type SiderCustomProps = RouteComponentProps<any> & {
  collapsed?: boolean;
}

const LayoutSider = Layout.Sider

const SiderCustom = (props: SiderCustomProps) => {
  const { collapsed } = props

  return (
    <LayoutSider collapsed={collapsed} theme="light" width={256} trigger={null} collapsible>
      <div className="brand">
        <div className="logo">
        </div>
      </div>
      <div style={{ marginTop: 25 }} />
      <SiderMenu menus={[...routes.menus]} />
    </LayoutSider>
  );
}


export default withRouter(SiderCustom);
