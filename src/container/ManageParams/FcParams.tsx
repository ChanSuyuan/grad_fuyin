import { Button, Card, Col, Form, Input, message, Row } from "antd"
import React from "react"
import { useHistory } from "react-router"
import { statusCode } from "../../common/model/statusCode"
import { adminParamsApi } from "./api/adminParams"
import { superAdminParamsApi } from "./api/superAdminParams"
import './index.less'

const FormItem = Form.Item

export const FcParams = () => {
  const [form] = Form.useForm()
  const history = useHistory()

  const handleOk = () => {
    const equation = form.getFieldValue('equation')
    const score = form.getFieldValue('score')
    const type = form.getFieldValue('type')
    const zbKey = form.getFieldValue('zbKey')

    try {
      localStorage.getItem('user_type') === '1' && adminParamsApi.customFc({
        equation: equation,
        score: score,
        type: type,
        zbKey: zbKey
      }).then(res => {
        if (res.errorCode) {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功!')
          }
        } else if (res.errorCode === statusCode.tokenIsNotVaild) {
          history.push('/loginadmin')
        }
        else {
          message.error('服务器出现故障！请稍后。。。。')
        }
      })

      localStorage.getItem('user_type') === '2' && superAdminParamsApi.customFc({
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
    <Card title='自定义融资风控参数'>
      <Form form={form} colon={false} layout='vertical'>
        <Row>
          <Col span={6}>
            <FormItem label='范围' name='equation' className="FirstField">
              <Input name='equation' />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label='分数' name='score' className='SecondField'>
              <Input name='score' />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label='类型' name='type' className='ThirdField' style={{ paddingLeft: 8, paddingRight: 8 }}>
              <Input name='type' />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label='指标名' name='zbKey' className='ThirdField'>
              <Input name='zbKey' />
            </FormItem>
          </Col>
        </Row>
        <FormItem name='submit' style={{ textAlign: 'center', marginTop: 20 }}>
          <Button name='submit' htmlType='submit' type='primary' size='middle' style={{ width: 200 }} onClick={handleOk}>提交</Button>
        </FormItem>
      </Form>
    </Card>
  )
}