import React, { useState } from 'react'
import { Button, Form, Input, notification, Result } from 'antd'
import GlobalFooter from '../../common/component/GlobalFooter';
import { config } from '../../common/utils/config';
import { resetApi } from '../api/reset';
import { queryParams } from '../../common/utils/queryParams';
import { statusCode } from '../../common/model/statusCode';
import { useHistory } from 'react-router';
import ApiFilled from '@ant-design/icons/lib/icons/ApiFilled';

const FormItem = Form.Item

export const ResetPwd: React.FC = () => {
  const [form] = Form.useForm()
  const history = useHistory()
  const token = queryParams('token')

  const [isShow, setShow] = useState<boolean>(false)

  function handleOk() {
    const newpassWord = form.getFieldValue('newPassWord')
    if (newpassWord) {
      return resetApi.resetPassword({
        password: newpassWord,
        token: token
      }).then(res => {
        res.errorCode === statusCode.success && setShow(true)
        res.errorCode === statusCode.noEffectLink && notification.open({
          message: "链接已经失效",
          description: "请重新进行申请",
          icon: <ApiFilled style={{ color: '#108ee9' }} />,
          duration: 3
        })
      })
    }
  }

  const handleChange = () => {
    history.push('/login')
  }

  return (
    <>
      <div className="container-fluid">
        <a href="../login" className="navbar-brand">
          <span>富银LOGO 预留位置</span>
        </a>
      </div>
      {!isShow ? <div className="form-container">
        <h1 className="text-form">融资风控密码重置系统</h1>
        <div className="form-wrapper">
          <Form form={form}>
            <FormItem name="newPassWord"
              rules={
                [
                  {
                    required: true,
                    message: "请输入新密码"
                  }
                ]
              }
            >
              <Input type="password" placeholder={`请输入新密码`} size="large" />
            </FormItem>
            {/* <FormItem name="confirm" dependencies={['password']} hasFeedback
              rules={[
                {
                  required: true,
                  message: '请再次输入密码'
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('两次输入的密码不一样！'));
                  },
                }),
              ]}

            >
              <Input type="password" placeholder={`请再次输入密码`} size="large" />
            </FormItem> */}
            <FormItem name="reset">
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                <div>确认新密码</div>
              </Button>
            </FormItem>
          </Form>
          <div className="footer">
            <GlobalFooter className="footer" copyright={config.copyright} />
          </div>
        </div>
      </div> :
        <Result
          status="success"
          title="密码重置成功"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console" onClick={handleChange}>
              返回登陆界面
            </Button>,
          ]}
        />}
    </>
  )
}

