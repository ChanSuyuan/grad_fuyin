import { Card, Col, Form, Input, Row } from 'antd';
import React from 'react';
import '.././index.less'

const FormItem = Form.Item

export const Guarantee: React.FC = () => {
  return (
    <Card title='担保能力指标配置'>
      <Form colon={false} >
        <Row>
          <Col span={8}>
            <FormItem name='dbnl' label='担保能力' className='FirstField'>
              <Input name='dbnl' />
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}