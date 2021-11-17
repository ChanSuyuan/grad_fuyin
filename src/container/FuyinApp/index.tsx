import { Layout } from "antd"
import React, { useState } from "react"
import { useAlita } from "redux-alita"
import { testApi } from "../../common/api/test"
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
      <SiderCustom />
      <Layout
        className='fuyin_layout'
      >
        <HeaderCustom toggle={toggle} collapsed={collapsed} user={auth || {}} />
      </Layout>
    </Layout>
  )
}