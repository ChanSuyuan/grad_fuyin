import { Button, Col, Form, Input, Row } from "antd"
import React from "react"

const FormItem = Form.Item

export const FrcParams = () => {
  return (
    <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 100, background: "#fff" }}>
      <Form>
        <Row>
          <Col>
            <FormItem label='范围' name='equation'>
              <Input name='equation' />
            </FormItem>
          </Col>
          &nbsp;
          &nbsp;
          <Col>
            <FormItem label='分数' name='score'>
              <Input name='score' />
            </FormItem>
          </Col>
          &nbsp;
          &nbsp;
          <Col>
            <FormItem label='类型' name='type'>
              <Input name='type' />
            </FormItem>
          </Col>
          &nbsp;
          &nbsp;
          <Col>
            <FormItem label='指标名' name='zbKey'>
              <Input name='zbKey' />
            </FormItem>
          </Col>
          &nbsp;
          &nbsp;
          <Col>
            <FormItem name='submit'>
              <Button name='submit' htmlType='submit' type='primary'>提交</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  )
}