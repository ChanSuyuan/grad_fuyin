import React from 'react';
import { Button, Card, Col, Form, Input, message, Row } from 'antd';
import '.././index.less'
import { adminParamsApi } from '../api/adminParams';
import { statusCode } from '../../../common/model/statusCode';
import { notify } from '../../../common/message/Notification';
import { superAdminParamsApi } from '../api/superAdminParams';

const FormItem = Form.Item
export const Profit: React.FC = () => {
  const [form] = Form.useForm()

  const handleOk = () => {
    const roejq = form.getFieldValue('roejq')
    const zzcjll = form.getFieldValue('zzcjll')
    const xsmll = form.getFieldValue('xsmll')
    const xsjll = form.getFieldValue('xsjll')
    const userType = localStorage.getItem('user_type')
    try {
      if (userType === '1') {
        adminParamsApi.customRisk({
          roejq: roejq,
          zzcjll: zzcjll,
          xsmll: xsmll,
          xsjll: xsjll
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功！')
          }
          notify(res.errorCode)
        })
      } else {
        superAdminParamsApi.customRisk({
          roejq: roejq,
          zzcjll: zzcjll,
          xsmll: xsmll,
          xsjll: xsjll
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功！')
          }
          notify(res.errorCode)
        })
      }
    } catch (err) {
      message.error('出现了意想不到的错误！')
    }
  }

  return (
    <Card title='盈利能力指标配置' >
      <Form colon={false} layout='vertical' form={form}>
        <Row>
          <Col span={8}>
            <FormItem name='roejq' label='净资产收益率 (加权)(%)' className="FirstField">
              <Input name='roejq' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='zzcjll' label='总资产收益率 (加权)(%)' className='SecondField'>
              <Input name='zzcjll' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='xsmll' label='销售毛利率 (%)' className="ThirdField">
              <Input name='xsmll' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='xsjll' label='销售净利率 (%)' className='FirstField'>
              <Input name='xsjll' />
            </FormItem>
          </Col>
        </Row>
        <div className='submit-btn' style={{ textAlign: 'center' }}>
          <Button type='primary' size='middle' htmlType='submit' style={{ width: 180 }} onClick={handleOk}>提交</Button>
        </div>
      </Form>
    </Card>
  )
}