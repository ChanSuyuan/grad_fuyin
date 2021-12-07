import { Button, Card, Col, Form, Input, message, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { notify } from '../../../common/message/Notification';
import { statusCode } from '../../../common/model/statusCode';
import '.././index.less'
import { adminParamsApi } from '../api/adminParams';
import { superAdminParamsApi } from '../api/superAdminParams';

const FormItem = Form.Item

export const Guarantee: React.FC = () => {
  const [form] = useForm()

  const handleOk = () => {
    const dbnl = form.getFieldValue('dbnl')
    const userType = localStorage.getItem('user_type')
    try {
      if (userType === '1') {
        adminParamsApi.customRisk({
          dbnl: dbnl
        }).then(res => {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功！')
          }
          notify(res.errorCode)
        })
      } else {
        superAdminParamsApi.customRisk({
          dbnl: dbnl
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
    <Card title='担保能力指标配置'>
      <Form colon={false} form={form}>
        <Row>
          <Col span={8}>
            <FormItem name='dbnl' label='担保能力' className='FirstField'>
              <Input name='dbnl' />
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