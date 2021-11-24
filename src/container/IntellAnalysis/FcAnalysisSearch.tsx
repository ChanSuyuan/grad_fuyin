import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const FormItem = Form.Item

export const FcAnalysisSearch: React.FC = () => {
  // const [form] = Form.useForm()
  // const [loading, setLoading] = useState<boolean>(false)
  // const [isShow, setShow] = useState<boolean>(false)

  // const [store, setStore] = useState<IParamsRiskReportFeedBackInfo>()
  // async function handleOk() {
  //   const gpName = form.getFieldValue('gpName')
  //   if (gpName) {
  //     setShow(true)
  //     setLoading(true)
  //     setStore(undefined)
  //     const res = await analysisApi.getRiskReport({
  //       gpName: gpName
  //     })
  //     res.errorCode === statusCode.success && setStore(res)
  //     setLoading(false)
  //   }
  // }
  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 100, background: "#fff" }}>
        <Form>
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
            &nbsp;
            &nbsp;
            <Col>
              <FormItem>
                <span>
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                </span>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}