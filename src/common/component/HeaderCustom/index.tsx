import React, { useState } from 'react'
import { Avatar, Layout, Menu, Popover } from 'antd'
// import { RightOutlined } from '@ant-design/icons'
import "./index.less"
import { useHistory } from 'react-router'
import BarsOutlined from '@ant-design/icons'
import { useSwitch } from '../../utils/hooks'
import SiderCustom from '../SiderCustom'
// import Ellipsis from '../Ellipsis'


const LayoutHeader = Layout.Header
const MenuItem = Menu.Item
const MenuItemGroup = Menu.ItemGroup
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




  // right Content
  // const rightContent = [
  //   <Menu key="user" mode="horizontal" onClick={this.handleClickMenu}>
  //     <SubMenu
  //       title={
  //         <Fragment>
  //           <span style={{ color: '#999', marginRight: 10 }}>
  //             Hi
  //           </span>
  //           <span>Naughty Boy</span>
  //           <Avatar style={{ marginLeft: 8 }} />
  //         </Fragment>
  //       }
  //     >
  //       <MenuItem key="selfCenter">
  //         个人中心
  //       </MenuItem>
  //       <MenuItem key="SignOut">
  //         退出登录
  //       </MenuItem>
  //     </SubMenu>
  //   </Menu>
  // ]

  // rightContent.unshift(
  //   <Popover
  //     placement="bottomRight"
  //     trigger="click"
  //     key="notification"
  //     overlayClassName="notificationPopover"
  //     content={
  //       <div className="notification">
  //         <List
  //           itemLayout="horizontal"
  //           // dataSource => store
  //           locale={{
  //             emptyText: "你可没东西可以看了"
  //           }}
  //           renderItem={item => (
  //             <ListItem className="notificationItem">
  //               <ListItem.Meta
  //                 title={
  //                   <Ellipsis tooltip lines={1}>
  //                     {/* item 标题, item 指的是列表内容 */}
  //                   </Ellipsis>
  //                 }
  //               >
  //                 <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
  //               </ListItem.Meta>
  //             </ListItem>
  //           )}
  //         />
  //       </div>
  //     }
  //   ></Popover>
  // )


  return (
    <LayoutHeader className="custom-theme header">
      <Popover
        content={<SiderCustom popoverHide={turn.turnOff} />}
        trigger="click"
        placement="bottomRight"
        key="notification"
      >
        <BarsOutlined className="header__trigger custom-trigger" />
      </Popover>
      <Menu
        mode="horizontal"
        onClick={menuClick}
      >
        <SubMenu
          title={
            <Avatar />
          }
        >
          <MenuItemGroup title="用户中心">
            <MenuItem key="setting:1">Hi Naughty Boy</MenuItem>
            <MenuItem key="logout">
              <span onClick={LogOut}>Log Out</span>
            </MenuItem>
          </MenuItemGroup>

        </SubMenu>

      </Menu>
    </LayoutHeader>
  )
}



