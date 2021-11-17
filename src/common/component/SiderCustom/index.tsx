/**
 * @file sider nav
 */

import * as React from 'react'
import { Layout } from 'antd';

import SiderMenu from '../SiderMenu';

import { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { usePrevious } from 'ahooks';
import { useAlita } from 'redux-alita';
import './index.less'
import { useSwitch } from '../../utils/hooks';
import { routes } from '../../routes/MenuRoutes/config';
import ScrollBar from '../ScrollBar';

type SiderCustomProps = RouteComponentProps<any> & {
  popoverHide?: () => void;
  collapsed?: boolean;
  smenus?: any;
}

interface IMenu {
  openKeys: string[]
  selectedKey: string
}

const LayoutSider = Layout.Sider

const SiderCustom = (props: SiderCustomProps) => {
  const [collapsed, tCollapsed] = useSwitch();
  const [firstHide, tFirstHide] = useSwitch();
  const [menu, setMenu] = useState<IMenu>({ openKeys: [''], selectedKey: '' });
  //  async menu
  const [smenus] = useAlita({ smenus: [] }, { light: true });
  const { location, collapsed: pCollapsed } = props;
  const prePathname = usePrevious(props.location.pathname);

  useEffect(() => {
    const recombineOpenKeys = (openKeys: string[]) => {
      let i = 0;
      let strPlus = '';
      let tempKeys: string[] = [];

      while (i < openKeys.length) {
        strPlus += openKeys[i];
        tempKeys.push(strPlus);
        i++;
      }
      return tempKeys;
    };
    const getOpenAndSelectKeys = () => {
      return {
        openKeys: recombineOpenKeys(location.pathname.match(/[/](\w+)/gi) || []),
        selectedKey: location.pathname,
      };
    };

    if (pCollapsed !== collapsed) {
      setMenu(getOpenAndSelectKeys());
      tCollapsed.setSwitcher(!!pCollapsed);
      tFirstHide.setSwitcher(!!pCollapsed);
    }

    if (prePathname !== location.pathname) {
      setMenu(getOpenAndSelectKeys());
    }
  }, [prePathname, location.pathname, collapsed, tFirstHide, tCollapsed, pCollapsed]);

  const menuClick = (e: any) => {
    setMenu((state) => ({ ...state, selectedKey: e.key }));
    props.popoverHide?.(); // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
  };

  const openMenu: any = (v: string[]) => {
    setMenu((state) => ({ ...state, openKeys: v }));
    tFirstHide.turnOff();
  };

  return (
    <LayoutSider collapsed={collapsed} theme="dark" width={256} trigger={null} collapsible>
      <ScrollBar
        options={{
          // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
          suppressScrollX: true,
        }}
      >
        <SiderMenu
          selectedKeys={[menu.selectedKey, ...smenus]}
          onClick={menuClick}
          onOpenChange={openMenu}
          menus={[...routes.menus, ...smenus]}
          openKeys={firstHide ? [] : menu.openKeys}
        />
      </ScrollBar>
    </LayoutSider>
  );
}


export default withRouter(SiderCustom);
