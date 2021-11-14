import { Breadcrumb } from "antd";

import React, { Fragment, PureComponent } from "react";
import { Link } from "react-router-dom";
import { iconMap } from "../../common/utils/iconMap";

export class Bread extends PureComponent {
  // 生成面包屑
  generateBreadcrumbs = (paths: any) => {
    return paths.map((item: any, key: any) => {
      const content = item && (
        <Fragment>
          {item.icon && (
            <span style={{ marginRight: 4 }}>{iconMap[item.icon]}</span>
          )}
        </Fragment>
      )
      return (
        item && (
          <Breadcrumb.Item key={key}>
            {paths.length - 1 !== key ? (
              <Link to={item.route || '#'}>{content}</Link>
            ) : (
              content
            )}
          </Breadcrumb.Item>
        )
      )
    })
  }
  render() {

    return (
      <div>Hello</div>
    )
  }
}