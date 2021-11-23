import React, { Fragment } from 'react'
import { Avatar, Layout, Menu, message } from 'antd'
// import { RightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router'
// import { useSwitch } from '../../utils/hooks'
import './index.less'
import MenuUnfoldOutlined from '@ant-design/icons/lib/icons/MenuUnfoldOutlined'
import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined'
import { behaviorApi } from '../../../user/api/account'

const LayoutHeader = Layout.Header

const SubMenu = Menu.SubMenu

type HeaderCustomProps = {
  toggle: () => void
  collapsed: boolean
  path?: string
}

export const HeaderCustom: React.FC<HeaderCustomProps> = (props) => {
  const history = useHistory()

  const LogOut = () => {
    behaviorApi.logout()
    localStorage.removeItem('user_token')
    history.push('/login')
    message.success('登出成功！')
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
              你好!
            </span>
            <span style={{ color: '#999' }}>
              Test3
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



