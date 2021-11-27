import { Card, Col, Form, Input, Row } from 'antd'
import React from 'react'
import '.././index.less'

const FormItem = Form.Item
export const Operate: React.FC = () => {
  return (
    <Card title='营运能力指标配置' bordered={false}>
      <Form colon={false} layout="vertical" size='middle' >
        <Row>
          <Col span={8}>
            <FormItem name='zzczzts' label='总资产周转天数 (天)' className="FirstField">
              <Input name='zzczzts' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='chzzts' label='存货周转天数（天）' className="SecondField">
              <Input name='chzzts' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='yszkzzts' label='应收账款周转天数 (天)' className='ThirdField'>
              <Input name='yszkzzts' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='toazzl' label='总资产周转率 (次)' className='FirstField'>
              <Input name='toazzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='chzzl' label='存货周转率（次）' className="SecondField">
              <Input name='chzzl' maxLength={50} />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='yszkzzl' label='应收账款周转率 (次)' className="ThirdField">
              <Input name='yszkzzl' />
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}