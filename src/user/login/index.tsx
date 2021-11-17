import React from 'react'
import { Button, Form, Input, notification } from "antd"

import './index.less'

import { ApiFilled } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { behaviorAPI } from '../api/account'
import { statusCode } from '../../common/model/statusCode'
import { setLocalToken } from '../../common/utils/auth'
import { observer } from 'mobx-react'
import { notify } from '../../common/message/Notification'

const FormItem = Form.Item

export const Login: React.FC = observer(() => {

  const [form] = Form.useForm()
  const history = useHistory()

  async function handleOk() {
    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')

    if (username && password) {
      try {
        const res = await behaviorAPI.login({
          userName: username,
          password: password
        })
        if (res.errorCode === statusCode.success) {
          if (res.data) {
            setLocalToken(`fuyin${res.data}`)
            history.push('/app')
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
              <Input type="password" placeholder={`FYFC用户名`} size="large" />
            </FormItem>
            <FormItem>
              <a href="/">
                <strong>重置密码 / 忘记密码</strong>
              </a>
              <Link to="/register" target="_blank" style={{ float: 'right' }}>
                <strong>注册账号</strong>
              </Link>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                <div>立即登录</div>
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  )
})

