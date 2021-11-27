import { Card, Col, Form, Input, Row } from 'antd'
import React from 'react'
import '.././index.less'

const FormItem = Form.Item
export const PayDebt: React.FC = () => {
  return (
    <Card title='偿债能力指标配置'>
      <Form colon={false} layout='vertical'>
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
      </Form>
    </Card>
  )
}