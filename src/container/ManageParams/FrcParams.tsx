import { Button, Col, Form, Input, message, Row } from "antd"
import React from "react"
import { statusCode } from "../../common/model/statusCode"
import { adminParamsApi } from "./api/adminParams"
import { superAdminParamsApi } from "./api/superAdminParams"

const FormItem = Form.Item

export const FrcParams = () => {
  const [form] = Form.useForm()

  const handleOk = () => {
    const equation = form.getFieldValue('equation')
    const score = form.getFieldValue('score')
    const type = form.getFieldValue('type')
    const zbKey = form.getFieldValue('zbKey')

    try {
      localStorage.getItem('user_type') === '1' && adminParamsApi.customFrc({
        equation: equation,
        score: score,
        type: type,
        zbKey: zbKey
      }).then(res => {
        if (res.errorCode) {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功!')
          }
        } else {
          message.error('服务器出现故障！请稍后。。。。')
        }
      })

      localStorage.getItem('user_type') === '2' && superAdminParamsApi.customFrc({
        equation: equation,
        score: score,
        type: type,
        zbKey: zbKey
      }).then(res => {
        if (res.errorCode) {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功!')
          }
        } else {
          message.error('服务器出现故障！请稍后。。。。')
        }
      })
    }
    catch (err) {
      console.log(err)
    }


  }

  return (
    <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 100, background: "#fff" }}>
      <Form form={form}>
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
              <Button name='submit' htmlType='submit' type='primary' onClick={handleOk}>提交</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  )
}