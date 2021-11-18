import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import React, { useState } from "react"
import BreadCustom from "../../common/component/BreadCustom"
import "./index.less"
import { HeaderCustom } from "../../common/component/HeaderCustom"
import SiderCustom from "../../common/component/SiderCustom"
import { routes } from "../../common/routes/MenuRoutes/config"
import { RouteComponentProps } from "react-router-dom"

type AppProps = RouteComponentProps<any> & {}

// const { pathToRegexp } = require("path-to-regexp")

export const FuyinApp = (props: AppProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  // const { location } = props
  const newRouteList = routes.menus
  // const currentRoute = newRouteList.find(
  //   _ => _.path && pathToRegexp(_.path).exec(location.pathname)
  // )



  return (
    <Layout>
      <SiderCustom collapsed={collapsed} />
      <Layout className='fuyin_layout'>
        <HeaderCustom toggle={toggle} collapsed={collapsed} />
        <Content className="content">
          <BreadCustom routeList={newRouteList} />
        </Content>
      </Layout>
    </Layout>
  )
}