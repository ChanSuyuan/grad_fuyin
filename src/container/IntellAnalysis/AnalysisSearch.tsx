import { Button, Col, Form, Input, Row, Spin } from "antd";
import React, { useState } from "react";
import { RiskReport } from "../RiskReport";
import { analysisApi } from "./api/analysis";
import { IParamsRiskReportFeedBackInfo } from "./model/analysis";


const FormItem = Form.Item

export const AnalysisSearch: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [isShow, setShow] = useState<boolean>(false)

  const [store, setStore] = useState<IParamsRiskReportFeedBackInfo>()
  async function handleOk() {
    const gpName = form.getFieldValue('gpName')
    if (gpName) {
      setShow(true)
      setLoading(true)
      const res = await analysisApi.getRiskReport({
        gpName: gpName
      })
      setStore(res)

      setLoading(false)
    }
  }
  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 100, background: "#fff" }}>
        <Form form={form}>
          <Row>
            <Col span={13}>
              <FormItem label="企业名称" name="gpName"
                rules={[{
                  required: true,
                  message: '请填写企业名称！'
                }]}
              >
                <Input style={{ width: "400px" }} size="middle" />
              </FormItem>
            </Col>
            <Col >
              <FormItem>
                <span style={{ marginLeft: 20 }}>
                  <Button type="primary" onClick={handleOk} htmlType="submit">
                    查询
                  </Button>
                </span>
              </FormItem>
            </Col>
          </Row>
        </Form>
        {isShow && (
          <div style={{ textAlign: "center" }}>
            {loading ? <Spin tip="数据正在加载中，请稍后。" size="default" /> :
              // <>{console.log(store)}</>
              <RiskReport store={store} />
            }
          </div>
        )}
      </div>
    </>
  )
}