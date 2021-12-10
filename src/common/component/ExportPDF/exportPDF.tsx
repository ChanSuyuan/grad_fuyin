/* eslint-disable array-callback-return */
import { BackTop, Button, Card, Col, message, Row, Table } from "antd"
import React, { useState } from "react"
import { IComponyInfo, IGPDetail, IMainzbsInfo, IParamsFcModel, IParamsRisk, IProfilesInfo, IQygqjsInfo, IResultZbDtos, IXjjlsInfo, IZcfzsInfo } from "../../../container/IntellAnalysis/model/analysis"
import html2PDF from './js-pdf/js-pdf.js'
import './index.less'
import { ProfitReportColumns } from "./Profit/ProfitColumns"
import { ProfitReportData } from "./Profit/ProfitList"
import { CashFlowReportColumns } from "./CashFlow/CashFlowColumns"
import { CashFlowReportData } from "./CashFlow/CashFlowList"
import { BalanceSheetReportData } from "./BalanceSheet/BalanceSheetList"
import { BalanceSheetColumns } from "./BalanceSheet/BalanceSheetColumns"
import { PerZbReportData } from "./MainZb/PerZb/PerZbList"
import { PerZbReportColumns } from "./MainZb/PerZb/PerZbColumns"
import { AbilityZbReportData } from "./MainZb/AbilityZb/AbilityZbList"
import { AbilityZbReportColumns } from "./MainZb/AbilityZb/AbilityZbColumns"
import { FinancialReportData } from "./MainZb/FinancialZb/FinancialList"
import { FinancialZbReportColumns } from "./MainZb/FinancialZb/FinancialZbColumns"
import { ProfitZbReportData } from "./MainZb/ProfitZb/ProfitZbList"
import { ProfitZbReportColumns } from "./MainZb/ProfitZb/ProfitZbColumns"
import { adminExportPdfApi } from "./api/admin"
import { superAdminExportPdfApi } from "./api/superAdmin"
import { userExportPdfApi } from "./api/user"
import { OperateZbReportColumns } from "./MainZb/OperateZb/OperateZbColumns"
import { OperateZbReportData } from "./MainZb/OperateZb/OperateZbList"

interface IExportPDFProps {
  data?: IParamsRisk
  fcdata?: IParamsFcModel
  mainZbArr: IMainzbsInfo[]
  profitArr: IProfilesInfo[]
  cashFlowArr: IXjjlsInfo[]
  balanceSheet: IZcfzsInfo[]
  companyInf: IComponyInfo
  companyStruct: IQygqjsInfo[]
  analysisResult?: any
}

export const ExportPDFModal: React.FC<IExportPDFProps> = (props) => {

  const [loading, setLoading] = useState<boolean>(false)
  const details: IGPDetail = {
    companyInfo: props.companyInf,
    mainzbs: props.mainZbArr,
    profiles: props.profitArr,
    qygqjgs: props.companyStruct,
    xjlls: props.cashFlowArr,
    zcfzs: props.balanceSheet
  }

  const exportPdf = async () => {

    localStorage.removeItem('mainZb')
    localStorage.removeItem('profit')
    localStorage.removeItem('cashFlow')
    localStorage.removeItem('balanceSheet')
    localStorage.removeItem('companyInfo')
    localStorage.removeItem('companyStruct')
    localStorage.removeItem('analysis')

    const userType = localStorage.getItem('user_type')
    try {
      if (typeof props.analysisResult === 'object') {
        if (userType === '1') {
          adminExportPdfApi.createRiskReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        } else if (userType === '2') {
          superAdminExportPdfApi.createRiskReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        } else if (userType === '0') {
          userExportPdfApi.createRiskReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        }
      } else {
        if (userType === '1') {
          adminExportPdfApi.createFcReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        } else if (userType === '2') {
          superAdminExportPdfApi.createFcReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        } else if (userType === '0') {
          userExportPdfApi.createFcReportInfo({
            analysis: props.analysisResult,
            gpDetails: details
          }).then(res => {
            console.log(res.errorCode)
          })
        }
      }
    } catch (err) {
      message.error('出现了出乎意料的问题')
    }
    try {
      setLoading(true)
      html2PDF([
        document.getElementById('company-info'),
        document.getElementById('company-struct'),
        document.getElementById('company-profit'),
        document.getElementById('company-cashflow'),
        document.getElementById('company-balancesheet'),
        document.getElementById('company-mainzb'),
        document.getElementById('company-analysis')
      ],
        {
          jsPDF: {
            format: 'a4'
          },
          margin: {
            top: 30,
            right: 10,
            bottom: 30,
            left: 10,
          },
          output: 'halloWorld',
          imageQuality: 3
        })

    } catch (err) {
      message.error('导出PDF失败')
    }
    setLoading(false)
  }
  return (
    <>
      <div id="export-pdf">
        <div id="pdf-container">
          <div className="pdf-container-header">
            <div className="header-info">
              <span className='titlemain'>项目名称：</span>
              <br />
              <br />
            </div>
            <div className="export-action">
              <Button type="primary" loading={loading} onClick={exportPdf}>
                下载PDF
              </Button>
            </div>
          </div>
          <div className="company" id="company">
            <div className="company-info" id="company-info" style={{ fontSize: "18px" }}>
              {!props.fcdata ?
                <>
                  <Row key='struct1'>
                    <Col span={8} key='companyName'><strong>企业名称：</strong>{props.data.gpDetails.companyInfo.gsmc}</Col>
                    <Col span={8} key='represent'><strong>企业法人代表：</strong>{props.data.gpDetails.companyInfo?.frdb}</Col>
                    <Col span={8} key='registerCapital'><strong>企业注册资本：</strong>{props.data.gpDetails.companyInfo?.zczb}</Col>
                  </Row>
                  <Row key='struct2'>
                    <Col span={8} key='setOffTime'><strong>成立时间：</strong>{props.data.gpDetails.companyInfo?.clrq}</Col>
                    <Col span={8} key='SocietyCode'><strong>社会信用代码：</strong>{props.data.gpDetails.companyInfo?.gsdj}</Col>
                  </Row>
                  <br />
                  <Row>
                    <Col span={24} style={{ textAlign: "justify" }}><strong>企业简介：</strong>{props.data.gpDetails.companyInfo?.gsjj}</Col>
                  </Row>
                </>
                :
                <>
                  <Row key='struct1'>
                    <Col span={8} key='companyName'><strong>企业名称：</strong>{props.fcdata.gpDetails.companyInfo.gsmc}</Col>
                    <Col span={8} key='represent'><strong>企业法人代表：</strong>{props.fcdata.gpDetails.companyInfo?.frdb}</Col>
                    <Col span={8} key='registerCapital'><strong>企业注册资本：</strong>{props.fcdata.gpDetails.companyInfo?.zczb}</Col>
                  </Row>
                  <Row key='struct2'>
                    <Col span={8} key='setOffTime'><strong>成立时间：</strong>{props.fcdata.gpDetails.companyInfo?.clrq}</Col>
                    <Col span={8} key='SocietyCode'><strong>社会信用代码：</strong>{props.fcdata.gpDetails.companyInfo?.gsdj}</Col>
                  </Row>
                  <br />
                  <Row>
                    <Col span={24} style={{ textAlign: "justify" }}><strong>企业简介：</strong>{props.fcdata.gpDetails.companyInfo?.gsjj}</Col>
                  </Row>
                </>}

            </div>
            {!props.fcdata ?
              <>
                <div className='company-struct' id='company-struct'>
                  <CompanyStructure companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-profit' id='company-profit'>
                  <CompanyProfit companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-cashflow' id='company-cashflow'>
                  <CompanyCashflow companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-balancesheet' id='company-balancesheet'>
                  <CompanyBalanceSheet companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-mainzb' id='company-mainzb'>
                  <CompanyMainZb companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-analysis' id='company-analysis'>
                  <CompanyRiskResultAnalysis analysis={props.analysisResult} gpDetails={props.data.gpDetails} />
                </div>
              </>
              :
              <>
                <div className='company-struct' id='company-struct'>
                  <CompanyStructure companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-profit' id='company-profit'>
                  <CompanyProfit companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-cashflow' id='company-cashflow'>
                  <CompanyCashflow companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-balancesheet' id='company-balancesheet'>
                  <CompanyBalanceSheet companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-mainzb' id='company-mainzb'>
                  <CompanyMainZb companyInfo={props.companyInf} mainzbs={props.mainZbArr} profiles={props.profitArr} qygqjgs={props.companyStruct} xjlls={props.cashFlowArr} zcfzs={props.balanceSheet} />
                </div>
                <div className='company-analysis' id='company-analysis'>
                  <CompanyFcResultAnalysis gpDetails={props.fcdata.gpDetails} analysis={props.fcdata.analysis} />
                </div>
              </>}
            <BackTop />
          </div>
        </div>
      </div>
    </>
  )
}

const CompanyStructure = (store: IGPDetail) => {
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>企业股权结构</span></strong>} bordered={false}>
      <Table
        key='CompanyStructure'
        className='company-struct'
        bordered
        size="small"
        pagination={false}
        dataSource={store.qygqjgs}
        columns={[
          {
            title: '股东名称',
            dataIndex: 'holderName',
            key: 'holderName',
            fixed: 'left',
            width: 500,
            align: 'center',
          },
          {
            title: '股份类型',
            dataIndex: 'sharesType',
            key: 'sharesType',
            fixed: 'left',
            width: 180,
            align: 'center'
          },
          {
            title: '股东性质',
            dataIndex: 'holderType',
            key: 'holderType',
            width: 180,
            align: 'center'
          },
          {
            title: '持股数（股）',
            dataIndex: 'holdNum',
            key: 'holdNum',
            width: 180,
            align: 'center'
          },
          {
            title: '变动比例',
            dataIndex: 'changeRatio',
            key: 'changeRatio',
            width: 120,
            align: 'center'
          },
          {
            title: '占总流通股本持股比例',
            dataIndex: 'freeHoldnumRatio',
            key: 'freeHoldnumRatio',
            width: 300,
            align: 'center'
          },
          {
            title: '增减（股）',
            dataIndex: 'holdNumChange',
            key: 'holdNumChange',
            width: 150,
            align: 'center'
          },
          {
            title: '股票代码',
            dataIndex: 'securityCode',
            key: 'securityCode',
            width: 120,
            align: 'center'
          }
        ]}
      />
    </Card>
  )
}



const CompanyProfit = (store: IGPDetail) => {

  const originData = ProfitReportData(store.profiles)
  const columns = ProfitReportColumns(store.profiles)
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>利润表</span></strong>} bordered={false} >
      <Table
        size='middle'
        pagination={false}
        dataSource={originData}
        columns={columns}
      />
    </Card >
  )
}

const CompanyCashflow = (store: IGPDetail) => {
  const originData = CashFlowReportData(store.xjlls)
  const columns = CashFlowReportColumns(store.xjlls)
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>现金流量表</span></strong>} bordered={false} >
      <Table
        size='middle'
        pagination={false}
        dataSource={originData}
        columns={columns}
      />
    </Card>
  )
}

const CompanyBalanceSheet = (store: IGPDetail) => {
  const originData = BalanceSheetReportData(store.zcfzs)
  const columns = BalanceSheetColumns(store.zcfzs)
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>资产负债表</span></strong>} bordered={false} >
      <Table
        size='middle'
        pagination={false}
        dataSource={originData}
        columns={columns}
      />
    </Card>
  )
}

const CompanyMainZb = (store: IGPDetail) => {
  console.log(store.mainzbs)
  const perOriginData = PerZbReportData(store.mainzbs)
  const perColumns = PerZbReportColumns(store.mainzbs)
  const AbilityOriginData = AbilityZbReportData(store.mainzbs)
  const AbilityColumns = AbilityZbReportColumns(store.mainzbs)
  const ProfitOriginData = ProfitZbReportData(store.mainzbs)
  const ProfitColumns = ProfitZbReportColumns(store.mainzbs)
  const FinancialOriginData = FinancialReportData(store.mainzbs)
  const FinancialColumns = FinancialZbReportColumns(store.mainzbs)
  const OperateColumns = OperateZbReportColumns(store.mainzbs)
  const OperateOriginData = OperateZbReportData(store.mainzbs)
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>主要指标</span></strong>} bordered={false} >
      <Table
        size='middle'
        pagination={false}
        dataSource={perOriginData}
        columns={perColumns}
      />
      <Table
        style={{ marginTop: 20 }}
        size='middle'
        pagination={false}
        dataSource={AbilityOriginData}
        columns={AbilityColumns}
      />
      <Table
        style={{ marginTop: 20 }}
        size='middle'
        pagination={false}
        dataSource={ProfitOriginData}
        columns={ProfitColumns}
      />
      <Table
        style={{ marginTop: 20 }}
        size='middle'
        pagination={false}
        dataSource={FinancialOriginData}
        columns={FinancialColumns}
      />
      <Table
        style={{ marginTop: 20 }}
        size='middle'
        pagination={false}
        dataSource={OperateOriginData}
        columns={OperateColumns}
      />
    </Card>
  )
}

const transform: any = {
  0: '运营能力分析',
  1: '盈利能力分析',
  2: '偿债能力分析'
}

const CompanyRiskResultAnalysis = (store: IParamsRisk) => {
  return (
    <>
      {store.analysis.map((item => {
        let color = 'black'
        if (item.risk === '营运能力不稳定') {
          color = 'red'
        } else if (item.risk === '营运能力稳定') {
          color = 'green'
        } else if (item.risk === '营运能力一般') {
          color = 'pink'
        }
        return (
          <Card style={{ marginTop: 20 }} bordered={false} title={<strong><span style={{ fontSize: '20px' }}>{transform[item.type]}</span></strong>}>
            <p style={{ fontSize: '16px' }}><strong>存在的风险：</strong><span style={{ color: `${color}` }}>{item.risk ? item.risk : '暂无'}</span></p>
            <p style={{ fontSize: '16px' }}><strong>风险控制建议：</strong>{item.advise ? item.advise : '暂无'}</p>
            <Table
              key='operate'
              size="small"
              pagination={false}
              dataSource={item.resultZbDtos}
              columns={[
                {
                  title: '指标',
                  dataIndex: 'zbKey',
                  key: 'zbKey',
                  align: 'center'
                },
                {
                  title: '评估结果',
                  dataIndex: 'evaluateResult',
                  key: 'evaluateResulet',
                  align: 'center',
                  render: (_: any, item: IResultZbDtos) => {
                    if (item.evaluateResult === '正常') {
                      return <div style={{ color: 'green' }}>正常</div>
                    } else if (item.evaluateResult === '不正常') {
                      return <div style={{ color: 'red' }}>不正常</div>
                    }
                  }
                },
                {
                  title: '最新值',
                  dataIndex: 'newestValue',
                  key: 'newestValue',
                  align: 'center',
                  render: (_: any, item: IResultZbDtos) => {
                    if (item.newestValue) {
                      return item.newestValue
                    } else {
                      return "-"
                    }
                  }
                },
              ]}
            />
          </Card>
        )
      }))}
    </>
  )
}

const CompanyFcResultAnalysis = (store: IParamsFcModel) => {
  return (
    <div style={{ marginTop: 20, fontSize: '20px', padding: '12px' }}><strong>{store.analysis}</strong></div>
  )
}