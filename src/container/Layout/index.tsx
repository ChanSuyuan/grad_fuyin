import { BackTop, Layout } from "antd"
import React, { useEffect, useState } from "react"
import "./index.less"
import { HeaderCustom } from "../../common/component/HeaderCustom"
import SiderCustom from "../../common/component/SiderCustom"
import { RouteProps, useHistory } from "react-router-dom"
import MainContent from "../../common/component/MainContent"
import BreadCustom from "../../common/component/BreadCustom"



export const DefaultLayout: React.FC<RouteProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const history = useHistory()

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const isLogin = () => {
    if (!localStorage.getItem('user_token')) {
      history.push('/login')
    }
  }

  useEffect(() => {
    isLogin()
  });

  return (
    <Layout className="fuyinApp">
      <BackTop />
      <SiderCustom collapsed={collapsed} />
      <Layout className='fuyin_layout'>
        <HeaderCustom toggle={toggle} collapsed={collapsed} />
        <BreadCustom />
        <MainContent />
      </Layout>
    </Layout>
  )
}

