import { Card, Col, Form, Input, Row } from 'antd';
import React from 'react';
import '.././index.less'

const FormItem = Form.Item
export const Profit: React.FC = () => {
  return (
    <Card title='盈利能力指标配置' >
      <Form colon={false} layout='vertical'>
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
      </Form>
    </Card>
  )
}