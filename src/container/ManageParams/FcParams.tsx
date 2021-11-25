import { Button, Col, Form, Input, Row } from "antd"
import React, { useState } from "react"

const FormItem = Form.Item

export const FcParams = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)


  const handleOk = () => {
    const chzzl = form.getFieldValue('chzzl')

  }

  return (
    <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 100, background: "#fff" }}>
      <Form form={form}>
        <Row>
          <Col span={8}>
            <FormItem name='chzzl' label='存活周转率（次）'>
              <Input name='chzzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='chzzts' label='存活周转天数（天）'>
              <Input name='chzzts' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='dbnl' label='担保能力'>
              <Input name='dbnl' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='ld' label='流动比例'>
              <Input name='ld' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='lszfbs' label='利息支付倍数'>
              <Input name='lszfbs' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='qsjzbl' label='清算价值比率'>
              <Input name='qsjzbl' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='sd' label='速动比率'>
              <Input name='sd' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='roejq' label='净资产收益率 (加权)(%)'>
              <Input name='roejq' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='toazzl' label='总资产周转率 (次)'>
              <Input name='toazzl' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='updateTime' label='修改时间'>
              <Input name='updateTime' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='xjllb' label='现金流量比率'>
              <Input name='xjllb' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='xsjll' label='净利率 (%)'>
              <Input name='xsjll' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='xsmll' label='毛利率 (%)'>
              <Input name='xsmll' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='yszkzzl' label='应收账款周转率 (次)'>
              <Input name='yszkzzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='yszkzzts' label='应收账款周转天数 (天)'>
              <Input name='yszkzzts' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem name='zbzzl' label='资本周转率'>
              <Input name='zbzzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='zcfzl' label='资产负债率 (%)'>
              <Input name='zcfzl' />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name='zzcjll' label='总资产收益率 (加权)(%)'>
              <Input name='zzcjll' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormItem name='zzczzts' label='总资产周转天数 (天)'>
              <Input name='zzczzts' />
            </FormItem>
          </Col>
        </Row>
        <FormItem name='submit' style={{ textAlign: 'center' }}>
          <Button htmlType='submit' type='primary' size='large' style={{ width: 200 }} loading={loading}>
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}