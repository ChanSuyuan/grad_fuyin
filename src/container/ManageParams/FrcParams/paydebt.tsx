import { Button, Card, Col, Form, Input, message, Row } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React from 'react'
import { notify } from '../../../common/message/Notification'
import { statusCode } from '../../../common/model/statusCode'
import '.././index.less'
import { adminParamsApi } from '../api/adminParams'
import { superAdminParamsApi } from '../api/superAdminParams'

const FormItem = Form.Item
export const PayDebt: React.FC = () => {
  const [form] = useForm()

  const handleOk = () => {
    const ld = form.getFieldValue('ld')
    const sd = form.getFieldValue('sd')
    const xjllb = form.getFieldValue('xjllb')
    const zcfzl = form.getFieldValue('zcfzl')
    const zbzzl = form.getFieldValue('zbzzl')
    const qsjzbl = form.getFieldValue('qsjzbl')
    const lszfbs = form.getFieldValue('lszfbs')
    const userType = localStorage.getItem('user_type')
    try {
      if (userType === '1') {
        adminParamsApi.customRisk({
          ld: ld,
          sd: sd,
          xjllb: xjllb,
          zcfzl: zcfzl,
          zbzzl: zbzzl,
          qsjzbl: qsjzbl,
          lszfbs: lszfbs
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功！')
          }
          notify(res.errorCode)
        })
      } else {
        superAdminParamsApi.customRisk({
          ld: ld,
          sd: sd,
          xjllb: xjllb,
          zcfzl: zcfzl,
          zbzzl: zbzzl,
          qsjzbl: qsjzbl,
          lszfbs: lszfbs
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功！')
          }
          notify(res.errorCode)
        })
      }
    } catch (err) {
      message.error('发送了意想不到的错误！')
    }
  }

  return (
    <Card title='偿债能力指标配置'>
      <Form colon={false} layout='vertical' form={form}>
        <Row>
          <Col span={8}>
            <FormItem name='ld' label='流动比率' className="FirstField">
              <Input name='ld' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='sd' label='速动比率' className="SecondField">
              <Input name='sd' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='xjllb' label='现金流量比率' className="ThirdField">
              <Input name='xjllb' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='zcfzl' label='资产负债率 (%)' className="FirstField">
              <Input name='zcfzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='zbzzl' label='资本周转率' className="SecondField">
              <Input name='zbzzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='qsjzbl' label='清算价值比率' className='ThirdField'>
              <Input name='qsjzbl' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='lszfbs' label='利息支付倍数' className="FirstField">
              <Input name='lszfbs' />
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