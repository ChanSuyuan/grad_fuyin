import ApiFilled from "@ant-design/icons/lib/icons/ApiFilled";
import { Button, Card, Col, Form, Input, notification, Row, Spin } from "antd";
import React, { useState } from "react";
import { statusCode } from "../../common/model/statusCode";
import { FcModelReport } from "../FcModelReport";
import { analysisApi } from "./api/analysis";
import { IParamsFcModelReportFeedBackInfo } from "./model/analysis";
import './index.less'

const FormItem = Form.Item

export const FcAnalysis: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isShow, setShow] = useState<boolean>(false)

  const [store, setStore] = useState<IParamsFcModelReportFeedBackInfo>()

  async function handleOk() {
    const gpName = form.getFieldValue('gpName')
    const collateral = form.getFieldValue('collateral')
    const purpose = form.getFieldValue('purpose')
    const fiMode = form.getFieldValue('fiMode')
    const quota = form.getFieldValue('quota')
    const repayMode = form.getFieldValue('repayMode')
    const guarantee = form.getFieldValue('guarantee')
    const period = form.getFieldValue('period')

    if (gpName) {
      setShow(true)
      setLoading(true)
      setStore(undefined)
      try {
        const type = localStorage.getItem('user_type')
        if (type === '0') {
          const res = await analysisApi.getmodelReport({
            collateral: collateral,
            purpose: purpose,
            fiMode: fiMode,
            quota: quota,
            repayMode: repayMode,
            guarantee: guarantee,
            period: period
          }, gpName)
          res.errorCode === statusCode.success && setStore(res)
        } else if (type === '1') {
          const res = await analysisApi.getAdminmodelReport({
            collateral: collateral,
            purpose: purpose,
            fiMode: fiMode,
            quota: quota,
            repayMode: repayMode,
            guarantee: guarantee,
            period: period
          }, gpName)
          res.errorCode === statusCode.success && setStore(res)
        } else if (type === '2') {
          const res = await analysisApi.getSuperAdminmodelReport({
            collateral: collateral,
            purpose: purpose,
            fiMode: fiMode,
            quota: quota,
            repayMode: repayMode,
            guarantee: guarantee,
            period: period
          }, gpName)
          res.errorCode === statusCode.success && setStore(res)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    } else {
      console.log('no_type')
    }
  }



  return (
    <>
      <Card title='融资模型评估'>
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
            <Col>
              <FormItem name='submit' style={{ marginLeft: 10 }}>
                <span>
                  <Button type="primary" htmlType="submit" onClick={handleOk}>
                    查询
                  </Button>
                </span>
              </FormItem>
            </Col>
            <Col>

            </Col>
          </Row>
        </Form>
        <Form form={form} layout='vertical' size='middle'>
          {!isShow && (
            <>
              <h1><strong>企业融资需求</strong></h1>
              <Row>
                <Col span={8}>
                  <FormItem label="融资额度（元）" name='quota' className="FirstField"
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback
                  >
                    <Input name="quota" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="计划融资期限" name='period' className="SecondField"
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback
                  >
                    <Input name="period" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="融资方式" name='fiMode' className='ThirdField'
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback
                  >
                    <Input name="fiMode" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <FormItem label="还款方式" name='repayMode' className="FirstField"
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback
                  >
                    <Input name="repayMode" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="资金用途" name='purpose' className="SecondField"
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback
                  >
                    <Input name="purpose" />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="抵押物简介" name='collateral' className='ThirdField'
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback>
                    <Input name="collateral" />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <FormItem label="融资担保人简介" name='guarantee' className="EndField"
                    rules={[{
                      required: true,
                    }]}
                    hasFeedback>
                    <Input name="guarantee" />
                  </FormItem>
                </Col>
              </Row>
            </>
          )}
        </Form>
        {isShow && (
          <>
            {loading ? <div style={{ textAlign: "center" }}><Spin tip="数据正在加载中，请稍后。" size="default" /></div> :
              store ? <FcModelReport store={store} /> : notification.open({
                message: '爬取不到该公司信息！',
                description: '请稍等，后台小哥哥正在努力解决问题中！',
                icon: <ApiFilled style={{ color: '#108ee9' }} />,
              })
            }
          </>
        )}
      </Card>
    </>
  )
}