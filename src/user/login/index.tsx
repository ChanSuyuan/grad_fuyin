import React from 'react'
import { Button, Form, Input, notification, Radio, Spin } from "antd"

import './index.less'
import { ApiFilled } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { statusCode } from '../../common/model/statusCode'
import { setLocalToken } from '../../common/utils/auth'
import { behaviorApi } from '../api/account'
import { observer } from 'mobx-react'
import { notify } from '../../common/message/Notification'
import { adminApi } from '../api/adminAc'
import { superAdminApi } from '../api/super-adminAc'
import GlobalFooter from '../../common/component/GlobalFooter'
import { config } from '../../common/utils/config'

const FormItem = Form.Item
const RadioGroup = Radio.Group

export const Login: React.FC = observer(() => {
  const [form] = Form.useForm()
  const history = useHistory()
  let authLevel = 0

  const setAuthLevel = (n: number) => {
    authLevel = n
    return authLevel
  }

  const handleChange = (e: any) => {
    if (e.target.value === 'user') {
      setAuthLevel(0)
    } else if (e.target.value === 'admin') {
      setAuthLevel(1)
    } else {
      setAuthLevel(2)
    }
  }

  async function handleOk() {
    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')

    if (username && password) {
      try {
        if (authLevel === 0) {
          const res = await behaviorApi.login({
            userName: username,
            password: password
          })
          if (res.errorCode === statusCode.success) {
            if (res.data) {
              setLocalToken(`fuyin${res.data}`)
              history.push('/fuyin')
            } else {
              notification.open({
                message: '发生了意想不到的错误啦！',
                description: '请稍等，后台小哥哥正在努力解决问题中！',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
                duration: 3
              })
            }
          }
          notify(res.errorCode)
        } else if (authLevel === 1) {
          const res = await adminApi.login({
            userName: username,
            password: password
          })
          if (res.errorCode === statusCode.success) {
            if (res.data) {
              setLocalToken(`fuyin${res.data}`)
              history.push('/fuyin')
            } else {
              notification.open({
                message: '发生了意想不到的错误啦！',
                description: '请稍等，后台小哥哥正在努力解决问题中！',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
                duration: 3
              })
            }
          }
          notify(res.errorCode)
        } else if (authLevel === 2) {
          const res = await superAdminApi.login({
            userName: username,
            password: password
          })
          if (res.errorCode === statusCode.success) {
            if (res.data) {
              setLocalToken(`fuyin${res.data}`)
              history.push('/fuyin')
            } else {
              notification.open({
                message: '发生了意想不到的错误啦！',
                description: '请稍等，后台小哥哥正在努力解决问题中！',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
                duration: 3
              })
            }
          }
          notify(res.errorCode)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <>
      <div className="container-fluid">
        <span>富银LOGO 预留位置</span>
      </div>
      <div className="form-container">
        <h1 className="text-form">融资风控后台管理系统</h1>
        <div className="form-wrapper">
          <Form form={form}>
            <FormItem name="账号类型">
              <strong>账号类型：</strong>
              <RadioGroup defaultValue="user" buttonStyle='solid' style={{ marginLeft: 6 }} onChange={handleChange}>
                <Radio.Button value="user">普通用户</Radio.Button>
                <Radio.Button value="admin">管理员</Radio.Button>
                <Radio.Button value="super-admin">超级管理员</Radio.Button>
              </RadioGroup>
            </FormItem>
            <FormItem name="userName"
              rules={
                [
                  {
                    required: true,
                    message: '请输入FYFC用户名!'
                  }
                ]
              }
              hasFeedback>
              <Input type="username" placeholder={`FYFC用户名`} size="large" />
            </FormItem>
            <FormItem name="password"
              rules={
                [
                  {
                    required: true,
                    message: '请输入FYFC密码!'
                  }
                ]
              }
              hasFeedback>
              <Input type="password" placeholder={`FYFC密码`} size="large" />
            </FormItem>
            <FormItem name="account">
              <a href="/">
                <strong>重置密码 / 忘记密码</strong>
              </a>
              <Link to="/register" target="_blank" style={{ float: 'right' }}>
                <strong>注册账号</strong>
              </Link>
            </FormItem>
            <FormItem name="login">
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                <div>立即登录</div>
              </Button>
            </FormItem>
          </Form>
        </div>
        <div className="footer">
          <GlobalFooter className="footer" copyright={config.copyright} />
        </div>
      </div>
    </>
  )
})

