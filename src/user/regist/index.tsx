import React from 'react'
import { CheckCircleTwoTone, FrownOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd'

import { useHistory } from 'react-router-dom'
import { behaviorAPI } from '../api/account';
import { statusCode } from '../../common/model/statusCode';

const FormItem = Form.Item

export const Regist: React.FC = () => {

  const [form] = Form.useForm()
  const history = useHistory()
  function handleOk() {

    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')

    // console.log(Boolean(username && password))
    if (username && password) {
      return behaviorAPI.regist({
        userName: username,
        password: password
      }).then(res => {
        if (res.errorCode === statusCode.success) {
          notification.open({
            message: "注册成功！",
            description: `您已经成功为普通用户！页面将在3秒内跳转！`,
            icon: <CheckCircleTwoTone twoToneColor="#52c41a" />
          })
          setTimeout(() => {
            history.push('/')
          }, 3000)
        } else if (res.errorCode === statusCode.registFailure) {
          notification.open({
            message: "注册失败！",
            description: "该用户名已经存在！",
            icon: <FrownOutlined twoToneColor="#52c41a" />
          })
        } else {
          notification.open({
            message: "注册失败！",
            description: "请确认是否填写所有必选项！",
            icon: <FrownOutlined twoToneColor="#52c41a" />
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <>
      <div className="container-fluid">
        <a href="../login" className="navbar-brand">
          <span>富银LOGO 预留位置</span>
        </a>
      </div>
      <div className="form-container">
        <h1 className="text-form">融资风控后台管理注册系统</h1>
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
              <Input type="password" placeholder={`FYFC密码`} size="large" />
            </FormItem>
            <FormItem name="hobby"
              hasFeedback>
              <Input type="password" placeholder={`FYFC密保问题（选填）`} size="large" />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                <div>立即注册</div>
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  )
}

