import React, { useState } from 'react'
import { FrownOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification, Result } from 'antd'
import { statusCode } from '../../common/model/statusCode';
import { behaviorApi } from '../api/account';
import GlobalFooter from '../../common/component/GlobalFooter';
import { config } from '../../common/utils/config';

const FormItem = Form.Item
// eslint-disable-next-line
const patternReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

export const Regist: React.FC = () => {
  const [form] = Form.useForm()
  const [isShow, setShow] = useState<boolean>(false)


  function handleOk() {
    const username = form.getFieldValue('userName')
    const password = form.getFieldValue('password')
    const email = form.getFieldValue('email')

    if (username && password) {
      return behaviorApi.regist({
        userName: username,
        password: password,
        email: email
      }).then(res => {
        res.errorCode === statusCode.success && setShow(true)
        res.errorCode === statusCode.registFailure && notification.open({
          message: "注册失败！",
          description: "该用户名已经存在！",
          icon: <FrownOutlined twoToneColor="#52c41a" />
        })
        res.errorCode === statusCode.hasRegistered && notification.open({
          message: "注册失败！",
          description: "该邮箱已被注册！",
          icon: <FrownOutlined twoToneColor="#52c41a" />
        })
      })
        .catch(err => {
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
        {isShow ?
          <Result
            status="success"
            title="注册表单提交成功！"
            subTitle="注册表单已提交，请移步到邮箱进行验证，否则注册不生效哦！"
          />
          : <>
            <h1 className="text-form">融资风控后台管理注册系统</h1>
            <div className="form-wrapper">
              <Form form={form}>
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
                <FormItem name="email" hasFeedback
                  rules={[{
                    required: true,
                    pattern: patternReg,
                    message: '请输入正确的邮箱地址！'
                  }]}
                >
                  <Input type="email" placeholder={`邮箱密保`} size="large" />
                </FormItem>
                <FormItem name="regist">
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                    <div>立即注册</div>
                  </Button>
                </FormItem>
              </Form>
              <div className="footer">
                <GlobalFooter className="footer" copyright={config.copyright} />
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

