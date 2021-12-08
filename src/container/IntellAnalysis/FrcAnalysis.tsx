import { Button, Card, Col, Form, Input, message, notification, Row, Spin } from "antd"
import FormItem from "antd/lib/form/FormItem"
import React, { useState } from "react"
import { statusCode } from "../../common/model/statusCode"
import { RiskReport } from "../RiskReport"
import { analysisApi } from "./api/analysis"
import { ApiFilled } from '@ant-design/icons';
import { IParamsRiskReportFeedBackInfo } from "./model/analysis"
import { useHistory } from "react-router"

export const FrcAnalysis: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isShow, setShow] = useState<boolean>(false)
  const history = useHistory()
  const [store, setStore] = useState<IParamsRiskReportFeedBackInfo>()
  const [companyName, setCompanyName] = useState<string>()


  async function handleOk() {
    const gpName = form.getFieldValue('gpName')
    setCompanyName(gpName)
    if (gpName) {
      setShow(true)
      setLoading(true)
      setStore(undefined)
      try {
        const type = localStorage.getItem('user_type')
        if (type === '0') {
          const res = await analysisApi.getRiskReport({
            gpName: gpName
          })
          res.errorCode === statusCode.success && setStore(res)
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            message.error('登录信息过期，请重新登陆！')
            history.push('/login')
          }
        } else if (type === '1') {
          const res = await analysisApi.getAdminRiskReport({
            gpName: gpName
          })
          res.errorCode === statusCode.success && setStore(res)
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            message.error('登录信息过期，请重新登陆！')
            history.push('/loginadmin')
          }
        } else if (type === '2') {
          const res = await analysisApi.getSuperAdminRiskReport({
            gpName: gpName
          })
          res.errorCode === statusCode.success && setStore(res)
          if (res.errorCode === statusCode.tokenIsNotVaild) {
            message.error('登录信息过期，请重新登陆！')
            history.push('/loginadmin')
          }
        }
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    } else {
      console.log('no_type')
    }
  }
  return (
    <>
      <Card title='融资风控模型评估'>
        <Form form={form}>
          <Row>
            <Col>
              <FormItem label="企业名称" name="gpName"
                rules={[{
                  required: true,
                  message: '请填写企业名称！'
                }]}
              >
                <Input style={{ width: "400px" }} size="middle" />
              </FormItem>
            </Col>
            <Col style={{ marginLeft: 10 }}>
              <FormItem>
                <span>
                  <Button type="primary" onClick={handleOk} htmlType="submit">
                    查询
                  </Button>
                </span>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      {isShow && (
        <Card style={{ marginTop: 20 }}>
          <>
            {loading ? <div style={{ textAlign: "center" }}><Spin tip="数据正在加载中，请稍后。" size="default" /></div> :
              store ? <RiskReport store={store} gpName={companyName} /> : notification.open({
                message: '爬取不到该公司信息！',
                description: '请稍等，后台小哥哥正在努力解决问题中！',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
              })
            }
          </>
        </Card>
      )}
    </>
  )
}