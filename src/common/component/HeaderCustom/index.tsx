import React, { Fragment, useState } from 'react'
import { Avatar, Layout, Menu } from 'antd'
// import { RightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'
import { useSwitch } from '../../utils/hooks'
import './index.less'
import MenuUnfoldOutlined from '@ant-design/icons/lib/icons/MenuUnfoldOutlined'
import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined'

const LayoutHeader = Layout.Header
const MenuItem = Menu.Item
// const ListItem = List.Item
const SubMenu = Menu.SubMenu

type HeaderCustomProps = {
  toggle: () => void
  collapsed: boolean
  user: any
  path?: string
}

export const HeaderCustom = (props: HeaderCustomProps) => {
  const history = useHistory()
  const [visible, turn] = useSwitch()
  const [user, setUser] = useState<any>()

  // Log out
  const LogOut = () => {
    localStorage.removeItem('user_token')
    history.push('/login')
  }

  const menuClick = (e: any) => {
    e.key === 'logout' && LogOut()
  }


  const rightContent = [
    <Menu key="user" mode="horizontal" onClick={menuClick}>
      <SubMenu
        title={
          <Fragment>
            <span style={{ color: '#999', marginRight: 4 }}>
              Hi
            </span>
            <span>Boy</span>
            <Avatar style={{ marginLeft: 8 }} />
          </Fragment>
        }
      >
        <Menu.Item key="SignOut">
          Sign out
        </Menu.Item>
      </SubMenu>
    </Menu>,
  ]

  return (
    <LayoutHeader className="custom-theme header" >
      <div className="button">
        {props.collapsed ? <MenuUnfoldOutlined onClick={props.toggle} /> : <MenuFoldOutlined onClick={props.toggle} />}
      </div>
      <div className="rightContainer">{rightContent}</div>
    </LayoutHeader>
  )
}



