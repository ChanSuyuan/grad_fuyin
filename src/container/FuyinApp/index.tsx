import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import React, { useState } from "react"
import { useAlita } from "redux-alita"
import { testApi } from "../../common/api/test"
import { Bread } from "../../common/component/BreadCrumb"
import { HeaderCustom } from "../../common/component/HeaderCustom"
import SiderCustom from "../../common/component/SiderCustom"

type AppProps = {}


export const FuyinApp = (props: AppProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [auth, responsive, setAlita] = useAlita(
    { auth: { permissions: null } },
    { responsive: { isMobile: false } },
    { light: true }
  );
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  testApi.GET()

  return (
    <Layout>
      <SiderCustom collapsed={collapsed} />
      <Layout className='fuyin_layout'>
        <HeaderCustom toggle={toggle} collapsed={collapsed} user={auth || {}} />
        <Content>
        </Content>
      </Layout>
    </Layout>
  )
}