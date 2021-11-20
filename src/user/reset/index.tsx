import React, { useState } from 'react'
import { Button, Form, Input, notification, Result, Select } from 'antd'
import GlobalFooter from '../../common/component/GlobalFooter';
import { config } from '../../common/utils/config';
import { resetApi } from '../api/reset';
import { statusCode } from '../../common/model/statusCode';
import ApiFilled from '@ant-design/icons/lib/icons/ApiFilled';

const FormItem = Form.Item
const { Option } = Select;

export const Reset: React.FC = () => {
  const [form] = Form.useForm()
  const [isShow, setShow] = useState<boolean>(false)

  const selectAfter = (
    <Select defaultValue="@qq.com" className="select-after">
      <Option value="qq">@qq.com</Option>
      <Option value="163">@163.com</Option>
      <Option value="126">@126.com</Option>
    </Select>
  );

  function handleOk() {
    const resetemail = form.getFieldValue('email')

    if (resetemail) {
      return resetApi.sendResetEmail(resetemail)
        .then(res => {
          res.errorCode === statusCode.success && setShow(true)
          res.errorCode === statusCode.emailNotExist && notification.open({
            message: '该有邮箱所属用户不存在！',
            description: "请确认输入的邮箱是否正确！",
            icon: <ApiFilled style={{ color: '#108ee9' }} />,
            duration: 3
          })
          res.errorCode === statusCode.tooFrequently && notification.open({
            message: '操作太频繁了！',
            description: "请稍后再试！",
            icon: <ApiFilled style={{ color: '#108ee9' }} />,
            duration: 3
          })
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
      {!isShow ?
        <div className="form-container">
          <h1 className="text-form">融资风控密码重置</h1>
          <div className="form-wrapper">
            <Form form={form}>
              <FormItem name="email"
              // rules={
              //   [
              //     {
              //       pattern: /^\d+(,\d+)*$/,
              //       message: "请填写正确的邮箱格式"
              //     }
              //   ]
              // }
              >
                <Input type="email" placeholder={`请输入密保邮箱`} addonAfter={selectAfter} size="large" />
              </FormItem>
              <FormItem name="reset">
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                  <div>发送</div>
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
          title="邮件发送成功"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        />}
    </>
  )
}

