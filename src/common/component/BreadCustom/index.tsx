import { Breadcrumb } from "antd";

import React, { Fragment } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
import { iconMap } from "../../utils/iconMap";

import './index.less'
import { queryAncestors } from "../../utils/query";

type BreadProps = RouteComponentProps<any> & {
  routeList?: any
  auth?: boolean
}

const { pathToRegexp } = require('path-to-regexp')

const BreadCustom = (props: BreadProps) => {
  // 生成面包屑
  const generateBreadcrumbs = (paths: any) => {
    return paths.map((item: any, key: any) => {
      const content = item && (
        <Fragment>
          {item.icon && (
            <span style={{ marginRight: 4 }}>{iconMap[item.icon]}</span>
          )}
          {item.title}
        </Fragment>
      )
      return (
        item && (
          <Breadcrumb.Item key={key}>
            {paths.length - 1 !== key ? (
              <Link to={item.path || '#'}>{content}</Link>
            ) : (
              content
            )}
          </Breadcrumb.Item>
        )
      )
    })
  }

  const { routeList, location } = props
  const currentRoute = routeList.find(
    (_: any) => _.path && pathToRegexp(_.path).exec(location.pathname)
  )

  const paths = currentRoute ? queryAncestors(routeList, currentRoute, 'breadcrumbParentId').reverse()
    : [
      routeList[0],
      {
        id: 404,
        title: `Not Found`,
      },
    ]

  return (
    <Breadcrumb className="bread">
      {generateBreadcrumbs(paths)}
    </Breadcrumb>
  )
}

export default withRouter(BreadCustom)