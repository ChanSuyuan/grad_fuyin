import { BackTop, Layout } from "antd"
import React, { useEffect } from "react"
import "./index.less"
import { HeaderCustom } from "../../common/component/HeaderCustom"
import SiderCustom from "../../common/component/SiderCustom"
import { RouteProps, useHistory } from "react-router-dom"
import MainContent from "../../common/component/MainContent"
import BreadCustom from "../../common/component/BreadCustom"



export const DefaultLayout: React.FC<RouteProps> = (props) => {
  const history = useHistory()
  const isLogin = () => {
    if (!localStorage.getItem('user_token')) {
      history.push('/login')
    }
  }

  useEffect(() => {
    isLogin()
  });

  return (
    <div className="layout">
      <Layout style={{ minHeight: '100vh' }}>
        <BackTop />
        <SiderCustom />
        <Layout style={{ marginLeft: 200 }}>
          <HeaderCustom />
          <BreadCustom />
          <MainContent />
        </Layout>
      </Layout >
    </div>
  )
}

