/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "antd"
import React, { Fragment } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import { arrayToTree, queryAncestors } from "../../utils/query"
import { pathToRegexp } from 'path-to-regexp'
import { iconMap } from "../../utils/iconMap"
import { NavLink } from "react-router-dom"

type SiderMenuProps = RouteComponentProps<any> & {
  openKeys?: any
  menus: any
}

const { SubMenu } = Menu

const SiderMenu = (props: SiderMenuProps) => {
  const { menus, location } = props

  const generateMenus = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <Fragment>
                {item.icon && iconMap[item.icon]}
                <span>{item.title}</span>
              </Fragment>
            }
          >
            {generateMenus(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <NavLink to={item.path || '#'}>
            {item.icon && iconMap[item.icon]}
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }

  const menuTree = arrayToTree(menus, 'id', 'menuParentId')

  const currentMenu = menus.find(
    (_: any) => _.path && pathToRegexp(_.path).exec(location.pathname)
  )

  const selectedKeys = currentMenu
    ? queryAncestors(menus, currentMenu, 'menuParentId').map(_ => _.id)
    : []

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={selectedKeys}
    >
      {generateMenus(menuTree)}
    </Menu>
  )
}

export default withRouter(SiderMenu)

