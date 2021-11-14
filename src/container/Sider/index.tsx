/**
 * @file 侧边导航栏
 */

import * as React from 'react'
import { Layout } from 'antd';
// import { SiderMenu } from 'container/Dashboard/SliderMenu';
import './index.less'
import { Content, Footer } from 'antd/lib/layout/layout';
import { Header } from '../Header';

const LayoutSider = Layout.Sider
export const Sider: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider collapsible theme="light" width={200}>
        {/* <SiderMenu /> */}
      </LayoutSider>
      <Layout>
        <Header />
        <Content style={{ margin: '10px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>FYFC ©2018 Created by ChaChaQA</Footer>
      </Layout>
    </Layout>
  );
}

