import React, { Fragment } from 'react'
import { Avatar, Layout, Menu, message } from 'antd'
import { useHistory } from 'react-router'
import './index.less'
import { behaviorApi } from '../../../user/api/account'
import { adminApi } from '../../../user/api/adminAc'
import { superAdminApi } from '../../../user/api/super-adminAc'

const LayoutHeader = Layout.Header

const SubMenu = Menu.SubMenu

type HeaderCustomProps = {
  path?: string
}

export const HeaderCustom: React.FC<HeaderCustomProps> = (props) => {
  const history = useHistory()

  const LogOut = () => {
    const userType = localStorage.getItem('user_type')
    if (userType === "0") {
      behaviorApi.logout()
    } else if (userType === '1') {
      adminApi.logOut()
    } else if (userType === '2') {
      superAdminApi.logOut()
    }
    localStorage.removeItem('user_token')
    localStorage.removeItem('user_type')
    history.push('/login')
    message.success('登出成功！')
  }

  const menuClick = (e: any) => {
    e.key === 'Logout' && LogOut()
  }

  const rightContent = [
    <Menu key="user" mode="horizontal" onClick={menuClick} >
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
        <Menu.Item key="Logout">
          立即登出
        </Menu.Item>
      </SubMenu>
    </Menu >,
  ]

  return (
    <LayoutHeader className="header" style={{ position: 'fixed', width: "100%", zIndex: 1 }}>
      <div className="rightContainer">{rightContent}</div>
    </LayoutHeader>
  )
}



