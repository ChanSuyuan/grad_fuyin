/**
 * @file sider nav
 */

import * as React from 'react'
import { Layout } from 'antd';

import { RouteComponentProps, withRouter } from 'react-router';

import './index.less'
import ScrollBar from '../ScrollBar';
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
          <img alt="logo" />
        </div>
      </div>
      <ScrollBar
        options={{
          suppressScrollX: true,
        }}
      >
        <SiderMenu menus={[...routes.menus]} />
      </ScrollBar>
    </LayoutSider>
  );
}


export default withRouter(SiderCustom);
