import React from 'react'
import { Button, Form, Input, notification } from "antd"

import './index.less'

import { ApiFilled } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { behaviorAPI } from '../api/account'
import { statusCode } from '../../common/model/statusCode'
import { setLocalToken, setToken } from '../../common/utils/auth'
import { observer } from 'mobx-react'

const FormItem = Form.Item

export const Login: React.FC = observer(() => {

  const [form] = Form.useForm()
  const history = useHistory()

  // function handleRegist() {
  //   history.push('/register')
  // }

  function handleOk() {
    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')

    if (username && password) {
      return behaviorAPI.login({
        userName: username,
        password: password
      }).then(res => {
        if (res.errorCode === statusCode.success) {
          if (res.data) {
            setToken(`fuyin${res.data}`)
            setLocalToken(`fuyin${res.data}`)
            history.push('/dashboard')
          } else {
            notification.open({
              message: '发生了意想不到的错误啦！',
              description: '请稍等，后台小哥哥正在努力解决问题中！',
              icon: <ApiFilled style={{ color: '#108ee9' }} />,
              duration: 3
            })
          }
        } else if (res.errorCode === statusCode.userNotExist) {
          notification.open({
            message: '当前用户不存在！',
            description: '请查看用户名是否填写正确！',
            icon: <ApiFilled style={{ color: 'red' }} />,
            duration: 3
          })
        } else if (res.errorCode === statusCode.wrongParams) {
          notification.open({
            message: '账户密码错误！',
            description: '请查看用户名与密码是否填写正确！',
            icon: <ApiFilled style={{ color: 'red' }} />,
            duration: 3
          })
        }
      }).catch(err => {
        console.log(err)
      })
    } else {
      notification.open({
        message: '发生了意想不到的错误啦！',
        description: '请稍等，后台小哥哥正在努力解决问题中！',
        icon: <ApiFilled style={{ color: '#108ee9' }} />,
        duration: 3
      })
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

