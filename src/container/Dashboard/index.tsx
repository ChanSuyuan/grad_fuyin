import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import React, { PureComponent } from 'react'
import Sider from '../../common/component/Sider'

export class Dashboard extends PureComponent {

  render() {
    return (
      <Layout>
        <Sider />
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
    )
  }
}