import { Col, Row, Table } from "antd"
import React from "react"
import { IParamsRiskReportFeedBackInfo } from "../IntellAnalysis/model/analysis"
import "./index.less"

interface IRiskReportProps {
  store: IParamsRiskReportFeedBackInfo | undefined
}

export const RiskReport: React.FC<IRiskReportProps> = (props) => {
  const companyInfo = props.store?.data.gpDetails.companyInfo

  return (
    <>
      <div className="riskReport">
        <h1><strong>企业基本信息</strong></h1>
        <br />
        <Row>
          <Col span={8}><strong>企业名称：</strong>{companyInfo?.gsmc}</Col>
          <Col span={8}><strong>企业法人代表：</strong>{companyInfo?.frdb}</Col>
          <Col span={8}><strong>企业注册资本：</strong>{companyInfo?.zczb}</Col>
        </Row>
        <Row>
          <Col span={8}><strong>成立时间：</strong>{companyInfo?.clrq}</Col>
          <Col span={8}><strong>社会信用代码：</strong>{companyInfo?.gsdj}</Col>
        </Row>
        <br />
        <Row>
          <Col span={24} style={{ textAlign: "justify" }}><strong>企业简介：</strong>{companyInfo?.gsjj}</Col>
        </Row>
        <br />
        <Row>
          <Col span={24} ><strong>企业股权结构</strong><br /><br />
            <Table
              bordered
              dataSource={props.store?.data.gpDetails.qygqjgs}
              pagination={false}
              columns={[
                {
                  title: '股东名称',
                  dataIndex: 'holderName',
                },
                {
                  title: '股份类型',
                  dataIndex: 'sharesType'
                },
                {
                  title: '股东性质',
                  dataIndex: 'holderType'
                },
                {
                  title: '持股数（股）',
                  dataIndex: 'holdNum'
                },
                {
                  title: '持股比例(%)',
                  dataIndex: 'freeHoldnumRatio'
                },
                {
                  title: '变动比例',
                  dataIndex: 'changeRatio'
                },
                {
                  title: '占总流通股本持股比例',
                  dataIndex: 'freeHoldnumRatio'
                },
                {
                  title: '增减（股）',
                  dataIndex: 'holdNumChange'
                },
                {
                  title: '股票代码',
                  dataIndex: 'securityCode'
                }
              ]}
            />
          </Col>
        </Row>
        <br />
        <h1><strong>企业财务</strong></h1>
        <div >
        </div>
      </div>
    </>
  )
}