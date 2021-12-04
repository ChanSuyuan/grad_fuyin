import { Button, Card, Col, Form, Input, message, Row } from "antd"
import React, { useState } from "react"
import { useHistory } from "react-router"
import { statusCode } from "../../common/model/statusCode"
import { adminParamsApi } from "./api/adminParams"
import { superAdminParamsApi } from "./api/superAdminParams"
import './index.less'
const FormItem = Form.Item

export const FrcParams = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const history = useHistory()

  const handleOk = () => {
    const chzzl = form.getFieldValue('chzzl')
    const chzzts = form.getFieldValue('chzzts')
    const dbnl = form.getFieldValue('dbnl')
    const ld = form.getFieldValue('ld')
    const lszfbs = form.getFieldValue('lszfbs')
    const qsjzbl = form.getFieldValue('qsjzbl')
    const sd = form.getFieldValue('sd')
    const roejq = form.getFieldValue('roejq')
    const toazzl = form.getFieldValue('toazzl')
    const updateTime = form.getFieldValue('updateTime')
    const xjllb = form.getFieldValue('xjllb')
    const xsjll = form.getFieldValue('xsjll')
    const xsmll = form.getFieldValue('xsmll')
    const yszkzzl = form.getFieldValue('yszkzzl')
    const yszkzzts = form.getFieldValue('yszkzzts')
    const zbzzl = form.getFieldValue('zbzzl')
    const zcfzl = form.getFieldValue('zcfzl')
    const zzcjll = form.getFieldValue('zzcjll')
    const zzczzts = form.getFieldValue('zzczzts')

    try {
      setLoading(true)
      localStorage.getItem('user_type') === '1' && adminParamsApi.customRisk({
        chzzl: chzzl,
        chzzts: chzzts,
        dbnl: dbnl,
        ld: ld,
        lszfbs: lszfbs,
        qsjzbl: qsjzbl,
        sd: sd,
        roejq: roejq,
        toazzl: toazzl,
        updateTime: updateTime,
        xjllb: xjllb,
        xsjll: xsjll,
        xsmll: xsmll,
        yszkzzl: yszkzzl,
        yszkzzts: yszkzzts,
        zbzzl: zbzzl,
        zcfzl: zcfzl,
        zzcjll: zzcjll,
        zzczzts: zzczzts
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

      localStorage.getItem('user_type') === '2' && superAdminParamsApi.customRisk({
        chzzl: chzzl,
        chzzts: chzzts,
        dbnl: dbnl,
        ld: ld,
        lszfbs: lszfbs,
        qsjzbl: qsjzbl,
        sd: sd,
        roejq: roejq,
        toazzl: toazzl,
        updateTime: updateTime,
        xjllb: xjllb,
        xsjll: xsjll,
        xsmll: xsmll,
        yszkzzl: yszkzzl,
        yszkzzts: yszkzzts,
        zbzzl: zbzzl,
        zcfzl: zcfzl,
        zzcjll: zzcjll,
        zzczzts: zzczzts
      }).then(res => {
        if (res.errorCode) {
          if (res.errorCode === statusCode.success) {
            message.success('提交成功!')
          }
        } else {
          message.error('服务器出现故障！请稍后。。。。')
        }
      })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }

  }

  return (
    <>
      <Card title="自定义融资模型数据" bordered={false}>
        <Form form={form} colon={false} layout="vertical" size='middle' >
          <Row>
            <Col span={8}>
              <FormItem name='updateTime' label='修改时间' className="FirstField">
                <Input name='updateTime' />
              </FormItem>
            </Col>
          </Row>
          <FormItem name='submit' style={{ textAlign: 'center' }}>
            <Button htmlType='submit' type='primary' size='middle' style={{ width: 200 }} loading={loading} onClick={handleOk}>
              提交
            </Button>
          </FormItem>
        </Form>
      </Card >
    </>
  )
}