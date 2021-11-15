import React, { Fragment, PureComponent } from 'react'
import { Avatar, Layout, List, Menu, Popover } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import "./index.less"
import { LoginStatus } from '../../routes/guard/loginStatus'
import Ellipsis from '../Ellipsis'


const LayoutHeader = Layout.Header
const MenuItem = Menu.Item
const ListItem = List.Item
const { SubMenu } = Menu
export class Header extends PureComponent {

  // Sign out
  SignOut() {
    if (LoginStatus()) {
      console.log('存在')
      localStorage.removeItem('user_token')
    } else {
      console.log("不存在user_token")
    }
  }

  handleClickMenu = (e: any) => {
    e.key === 'SignOut' && this.SignOut()
  }

  render() {

    // right Content
    const rightContent = [
      <Menu key="user" mode="horizontal" onClick={this.handleClickMenu}>
        <SubMenu
          title={
            <Fragment>
              <span style={{ color: '#999', marginRight: 10 }}>
                Hi
              </span>
              <span>Naughty Boy</span>
              <Avatar style={{ marginLeft: 8 }} />
            </Fragment>
          }
        >
          <MenuItem key="selfCenter">
            个人中心
          </MenuItem>
          <MenuItem key="SignOut">
            退出登录
          </MenuItem>
        </SubMenu>
      </Menu>
    ]

    rightContent.unshift(
      <Popover
        placement="bottomRight"
        trigger="click"
        key="notification"
        overlayClassName="notificationPopover"
        content={
          <div className="notification">
            <List
              itemLayout="horizontal"
              // dataSource => store
              locale={{
                emptyText: "你可没东西可以看了"
              }}
              renderItem={item => (
                <ListItem className="notificationItem">
                  <ListItem.Meta
                    title={
                      <Ellipsis tooltip lines={1}>
                        {/* item 标题, item 指的是列表内容 */}
                      </Ellipsis>
                    }
                  >
                    <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
                  </ListItem.Meta>
                </ListItem>
              )}
            />
          </div>
        }
      ></Popover>
    )

    return (
      <LayoutHeader className="header" id="layoutHeader">
        <div className="rightContainer">{rightContent}</div>
      </LayoutHeader>
    )
  }
}



