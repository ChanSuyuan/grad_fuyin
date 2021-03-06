/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Form, Input, notification, Radio, Row } from "antd"

import './index.less'
import { ApiFilled } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import { statusCode } from '../../common/model/statusCode'
import { ChangeHeader, removeLocalToken, setLocalToken } from '../../common/utils/auth'
import { observer } from 'mobx-react'
import { notify } from '../../common/message/Notification'
import { adminApi } from '../api/adminAc'
import { superAdminApi } from '../api/super-adminAc'
import GlobalFooter from '../../common/component/GlobalFooter'
import { config } from '../../common/utils/config'
import axios from 'axios'
import { verificationApi } from '../api/verification'

const FormItem = Form.Item
const RadioGroup = Radio.Group

export const AdminLogin: React.FC = observer(() => {
  const [form] = Form.useForm()
  const history = useHistory()
  const [src, setSrc] = useState<any>()
  const [key, setKey] = useState<any>()

  let authLevel = 0

  const setAuthLevel = (n: number) => {
    authLevel = n
    return authLevel
  }

  useEffect(() => {
    loadPage()
  }, [])

  // const baseURL = '/fuyin/verify'

  const loadPage = async () => {
    try {
      verificationApi.getRandomKey()
        .then(res => {
          if (res.errorCode === statusCode.success) {
            setKey(res.data)
            axios.get(`/verify/verification?key=${res.data}`, {
              responseType: "arraybuffer"
            }).then(response => {
              return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            }).then(res => {
              setSrc(res)
            })
          }
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e: any) => {
    console.log(e.target.value)
    if (e.target.value === 'admin') {
      setAuthLevel(0)
    } else if (e.target.value === 'super-admin') {
      setAuthLevel(1)
    }
  }

  async function handleOk() {
    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')
    const code = form.getFieldValue('code')

    if (username && password) {
      try {
        if (authLevel === 0) {
          const res = await adminApi.login({
            userName: username,
            password: password,
            code: code,
            key: key
          })
          if (res.errorCode === statusCode.success) {
            if (res.data) {
              removeLocalToken()
              setLocalToken('user_token', `fuyin${res.data.token}`)
              setLocalToken('user_type', res.data.type)
              setLocalToken('user_name', username)
              ChangeHeader()
              history.push('/fyapp/dashboard')
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
        } else {
          const res = await superAdminApi.login({
            userName: username,
            password: password,
            code: code,
            key: key
          })
          if (res.errorCode === statusCode.success) {
            if (res.data) {
              removeLocalToken()
              setLocalToken('user_token', `fuyin${res.data.token}`)
              setLocalToken('user_type', res.data.type)
              setLocalToken('user_name', username)
              ChangeHeader()
              history.push('/fyapp/dashboard')
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
    <Fragment key='loginadimin-container'>
      <div className="container-fluid">
        <span>富银LOGO 预留位置</span>
      </div>
      <div className="form-container">
        <h1 className="text-form">融资风控系统</h1>
        <div className="form-wrapper">
          <Form form={form}>
            <strong>账号类型：</strong>
            <RadioGroup defaultValue="admin" buttonStyle='solid' style={{ marginLeft: 10, marginBottom: 20 }} onChange={handleChange}>
              <Row>
                <Col>
                  <Radio.Button value="admin">管理员</Radio.Button>
                </Col>
                <Col>
                  <Radio.Button value="super-admin">超级管理员</Radio.Button>
                </Col>
              </Row>
            </RadioGroup>
            <FormItem name="userName"
              rules={[{
                required: true,
                message: '请输入FYFC用户名!'
              }]}
              hasFeedback>
              <Input type="username" placeholder={`FYFC用户名`} size="large" />
            </FormItem>
            <FormItem name="password"
              rules={[{
                required: true,
                message: '请输入FYFC密码!'
              }]}
              hasFeedback>
              <Input type="password" placeholder={`FYFC密码`} size="large" />
            </FormItem>
            <Row>
              <Col>
                <FormItem name="code">
                  <Input style={{ width: 180, height: 60 }} />
                </FormItem>
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <img src={src} onClick={loadPage} />
              </Col>
            </Row>
            <Link to="/reset" target="_blank">
              <strong>重置密码 / 忘记密码</strong>
            </Link>
            <Link to="/register" target="_blank" style={{ float: 'right' }}>
              <strong>注册账号</strong>
            </Link>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
              <div>立即登录</div>
            </Button>
          </Form>
        </div>
        <div className="footer">
          <GlobalFooter className="footer" copyright={config.copyright} />
        </div>
      </div>
    </Fragment>
  )
})

