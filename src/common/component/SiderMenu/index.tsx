/* eslint-disable @typescript-eslint/no-unused-vars */
import { Menu } from "antd"
import React, { Fragment } from "react"
import { RouteComponentProps, withRouter } from "react-router"
import { iconMap } from "../../utils/iconMap"
import { NavLink } from "react-router-dom"

type SiderMenuProps = RouteComponentProps<any> & {
  openKeys?: any
  menus: any
}

const { SubMenu } = Menu

const SiderMenu: React.FC<SiderMenuProps> = (props) => {
  const { menus } = props

  const handleFilter = (permission: any) => {
    const roleType = localStorage.getItem('user_token') && localStorage.getItem('user_type')
    if (!permission || permission === roleType || roleType === "2") {
      return true
    }
    return false
  }

  const generateMenus = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          handleFilter(item.permission) && (
            <SubMenu
              key={item.path}
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
        )
      }
      return (
        handleFilter(item.permission) && (
          <Menu.Item key={item.path}>
            <NavLink to={item.path || '#'}>
              {item.icon && iconMap[item.icon]}
              <span>{item.title}</span>
            </NavLink>
          </Menu.Item>
        )
      )
    })
  }


  const menuSelected = props.location.pathname

  return (

    <Menu
      mode="inline"
      theme="light"
      selectedKeys={[menuSelected]}
      style={{ color: 'black' }}
    >
      {generateMenus(menus)}
    </Menu>
  )
}

export default withRouter(SiderMenu)

