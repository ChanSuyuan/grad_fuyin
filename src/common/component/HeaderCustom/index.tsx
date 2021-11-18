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
    e.key === 'Logout' && LogOut()
  }


  const rightContent = [
    <Menu key="user" mode="horizontal" onClick={menuClick} style={{ marginTop: 8 }}>
      <SubMenu
        title={
          <Fragment>
            <span style={{ color: '#999', marginRight: 4 }}>
              Hi!
            </span>
            <span style={{ color: '#999' }}>
              Naught Boy
            </span>
            <Avatar style={{ marginLeft: 8 }} />
          </Fragment>
        }
      >
        <Menu.Item key="SelfCenter">
          个人中心
        </Menu.Item>
        <Menu.Item key="Logout">
          立即登出
        </Menu.Item>
      </SubMenu>
    </Menu >,
  ]

  return (
    <LayoutHeader className="header" >
      <div className="button">
        {props.collapsed ? <MenuUnfoldOutlined onClick={props.toggle} /> : <MenuFoldOutlined onClick={props.toggle} />}
      </div>
      <div className="rightContainer">{rightContent}</div>
    </LayoutHeader>
  )
}



