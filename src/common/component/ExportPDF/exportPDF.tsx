import { BackTop, Button, Card, Col, message, Row, Table } from "antd"
import React, { useState } from "react"
import { IParamsFcModel, IParamsRisk } from "../../../container/IntellAnalysis/model/analysis"
import html2PDF from './js-pdf/js-pdf.js'
import './index.less'
interface IExportPDFProps {
  data?: IParamsRisk
  fcdata?: IParamsFcModel
}

export const ExportPDFModal: React.FC<IExportPDFProps> = (props) => {

  const [loading, setLoading] = useState<boolean>(false)

  const exportPdf = async () => {

    try {
      setLoading(true)
      html2PDF([
        document.getElementById('company-info'),
        document.getElementById('company-struct'),
        document.getElementById('company-profit'),
        document.getElementById('company-cash'),
        document.getElementById('company-debt'),
        document.getElementById('company-mainzb'),
        document.getElementById('company-operate')
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
              <span>项目名称：</span>
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
                  <CompanyStructure analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
                <div className='company-profit' id='company-profit'>
                  <CompanyProfit analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
                <div className='company-cash' id='company-cash'>
                  <CompanyCash analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
                <div className='company-debt' id='company-debt'>
                  <CompanyDebt analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
                <div className='company-mainzb' id='company-mainzb'>
                  <CompanyMainZBInfo analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
                <div className='company-operate' id='company-operate'>
                  <CompanyAnalysisOperatingInfo analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
                </div>
              </>
              :
              <>
                <div className='company-struct' id='company-struct'>
                  <CompanyStructure analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
                <div className='company-profit' id='company-profit'>
                  <CompanyProfit analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
                <div className='company-cash' id='company-cash'>
                  <CompanyCash analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
                <div className='company-debt' id='company-debt'>
                  <CompanyDebt analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
                <div className='company-mainzb' id='company-mainzb'>
                  <CompanyMainZBInfo analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
                <div className='company-operate' id='company-operate'>
                  <CompanyAnalysisOperatingInfo analysis={props.fcdata.analysis} gpDetails={props.fcdata.gpDetails} />
                </div>
              </>}
            <BackTop />
          </div>
        </div>
      </div>
    </>
  )
}

const CompanyStructure = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <Card title={<strong><span style={{ fontSize: '24px' }}>企业股权结构</span></strong>} bordered={false}>
      <Table
        key='CompanyStructure'
        className='company-struct'

        bordered
        size="small"
        pagination={false}
        dataSource={store.gpDetails.qygqjgs}
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


const CompanyProfit = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <Card title={<div className="tite">利润表</div>} key='CompanyReportInfo' bordered={false}>
      <Card title={<div className="firstTitle">营业总收入</div>} bordered={false}>
        <Table
          key='CompanyReportInfo'
          size="small"
          dataSource={store.gpDetails.profiles}
          pagination={false}
          columns={[
            {
              title: '营业总收入',
              width: 120,
              dataIndex: 'totalOperateIncome',
              key: 'totalOperateIncome',
              fixed: 'left',
              align: 'center'
            },
            {
              title: '营业收入',
              dataIndex: 'operateIncome',
              key: 'operateIncome',
              align: 'center',
              width: 100,
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 100,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">营业总成本</div>} bordered={false}>
        <Table
          key='CompanyReportInfo'
          size="small"
          dataSource={store.gpDetails.profiles}
          pagination={false}
          columns={[
            {
              title: '营业总成本',
              dataIndex: 'totalOperateCost',
              key: 'totalOperateCost',
              width: 150,
              align: 'center'
            },
            {
              title: '营业成本',
              dataIndex: 'operateCost',
              key: 'operateCost',
              width: 150,
              align: 'center'
            },
            {
              title: '税金及附加',
              dataIndex: 'operateTaxAdd',
              key: 'operateTaxAdd',
              width: 150,
              align: 'center'
            },
            {
              title: '销售费用',
              dataIndex: 'saleExpense',
              key: 'saleExpense',
              width: 120,
              align: 'center'
            },
            {
              title: '管理费用',
              dataIndex: 'manageExpense',
              key: 'manageExpense',
              width: 150,
              align: 'center'
            },
            {
              title: '研发费用',
              dataIndex: 'researchExpense',
              key: 'researchExpense',
              width: 100,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 100,
              align: 'center'
            },
          ]}
        />
        <Table
          key='CompanyReportInfo'
          size="small"
          dataSource={store.gpDetails.profiles}
          pagination={false}
          style={{ marginTop: '50px' }}
          columns={[
            {
              title: '财务费用',
              dataIndex: 'financeExpense',
              key: 'financeExpense',
              width: 150,
              align: 'center'
            },
            {
              title: '其中：利息费用',
              dataIndex: 'feInterestExpense',
              key: 'feInterestExpense',

              align: 'center'
            },
            {
              title: '利息收入',
              dataIndex: 'feInterestIncome',
              key: 'feInterestIncome',
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">其他经营收益</div>} bordered={false}>
        <Table
          size="small"
          dataSource={store.gpDetails.profiles}
          key='other'
          pagination={false}
          columns={[
            {
              title: '加：投资收益',
              dataIndex: 'investIncome',
              key: 'investIncome',
              align: 'center'
            },
            {
              title: '资产处置收益',
              dataIndex: 'assetDisposalIncome',
              key: 'assetDisposalIncome',
              align: 'center'
            },
            {
              title: '资产减值损失 (新)',
              dataIndex: 'assetImpairmentIncome',
              key: 'assetImpairmentIncome',
              align: 'center'
            },
            {
              title: '信用减值损失 (新)',
              dataIndex: 'creditImpairmentIncome',
              key: 'creditImpairmentIncome',
              align: 'center'
            },
            {
              title: '其他收益',
              dataIndex: 'otherIncome',
              key: 'otherIncome',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">营业利润</div>} bordered={false}>
        <Table
          key='profit'
          size='small'
          pagination={false}
          dataSource={store.gpDetails.profiles}
          // 缺少 其中：非流动资产处置利得 其中：非流动资产处置净损失
          columns={[
            {
              title: '营业利润',
              dataIndex: 'operateProfit',
              key: 'operateProfit',
              align: 'center'
            },
            {
              title: '加：营业外收入',
              dataIndex: 'nonbusinessIncome',
              key: 'nonbusinessIncome',
              align: 'center'
            },
            {
              title: '减：营业外支出',
              dataIndex: 'nonbusinessExpense',
              key: 'nonbusinessExpense',
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">利润总额</div>} bordered={false}>
        <Table
          pagination={false}
          key='allprofit'
          dataSource={store.gpDetails.profiles}
          columns={[
            {
              title: '利润总额',
              dataIndex: 'totalProfit',
              key: 'totalprofit',
              align: 'center'
            },
            {
              title: '减：所得税',
              dataIndex: 'incomeTax',
              key: 'incomeTax',
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        >

        </Table>
      </Card>
      <Card title={<div className="subTitle">净利润</div>} bordered={false}>
        <Table
          pagination={false}
          dataSource={store.gpDetails.profiles}
          size='small'
          key='profitFresh'
          columns={[
            {
              title: '净利润',
              dataIndex: 'netprofit',
              key: 'netprofit',
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
        <Card title={<div className="subsTitle">(一）按特许经营持续性分类</div>} bordered={false}>
          <Table
            pagination={false}
            dataSource={store.gpDetails.profiles}
            size='small'
            key='texu'
            columns={[
              {
                title: '持续经营净利润',
                dataIndex: 'continuedNetprofit',
                key: 'continuedNetprofit',
                align: 'center'
              },
              {
                title: '报告时间',
                dataIndex: 'reportDate',
                key: 'reportDate',
                align: 'center'
              }
            ]}
          />
        </Card>
        <Card title={<div className="subsTitle">(二）按所有权归属分类</div>} bordered={false}>
          <Table
            pagination={false}
            dataSource={store.gpDetails.profiles}
            size='small'
            key='byauth'
            columns={[
              {
                title: '归属于母公司股东的净利润',
                key: 'parentNetprofit',
                dataIndex: '归属于母公司股东的净利润',
                align: 'center'
              },
              {
                title: '扣除非经常性损益后的净利润',
                dataIndex: 'deductParentNetprofit',
                key: 'deductParentNetprofit',
                align: 'center'
              },
              {
                title: '报告时间',
                dataIndex: 'reportDate',
                key: 'reportDate',
                align: 'center'
              }
            ]}
          />
        </Card>
      </Card>
      <Card title={<div className="subTitle">每股收益</div>} bordered={false}>
        <Table
          size="small"
          key='perStock'
          dataSource={store.gpDetails.profiles}
          pagination={false}
          columns={[
            {
              title: '基本每股收益',
              dataIndex: 'basicEps',
              key: 'basicEps',
              align: 'center',
            },
            {
              title: '稀释每股收益',
              dataIndex: 'dilutedEps',
              key: 'dilutedEps',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">其他收益综合</div>} bordered={false}>
        <Table
          size="small"
          key="others"
          dataSource={store.gpDetails.profiles}
          pagination={false}
          // 缺少 归属于母公司股东的其他收益
          columns={[
            {
              title: '其他综合收益',
              dataIndex: 'otherIncome',
              key: 'otherIncome',
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">综合收益总额</div>} bordered={false}>
        <Table
          size="small"
          key="others"
          dataSource={store.gpDetails.profiles}
          pagination={false}
          columns={[
            {
              title: '综合收益总额',
              dataIndex: 'totalCompreIncome',
              key: 'totalCompreIncome',
              align: 'center'
            },
            {
              title: '归属于母公司股东的综合收益总额',
              dataIndex: 'parentTci',
              key: 'parentTci',
              align: 'center'
            },
            {
              title: '审计意见 (境内)',
              dataIndex: 'opinionType',
              key: 'opinionType',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center'
            }
          ]}
        />
      </Card>
    </Card>

  )
}

const CompanyCash = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <Card title={<div className="tite">现金流量表</div>} bordered={false} style={{ marginTop: 50 }}>
      <Card title={<div className="firstTitle">经营活动产生的现金流量</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '销售商品、提供劳务收到的现金',
              dataIndex: 'salesServices',
              key: 'salesServices',
              align: 'center',
              width: 250
            },
            {
              title: '收到的税收返还',
              dataIndex: 'receiveTaxRefund',
              key: 'receiveTaxRefund',
              align: 'center',
              width: 150
            },
            {
              title: '收到其他与经营活动有关的现金',
              dataIndex: 'receiveOtherOperate',
              key: 'receiveOtherOperate',
              align: 'center',
              width: 250
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">经营活动现金流入小计</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyhdxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '经营活动现金流入小计',
              dataIndex: 'totalOperateInflow',
              key: 'totalOperateInflow',
              fixed: 'left',
              align: 'center',
              width: 240
            },
            {
              title: '购买商品、接受劳务支付的现金',
              dataIndex: 'buyServices',
              key: 'buyServices',
              align: 'center',
              width: 200
            },
            {
              title: '支付给职工以及为职工支付的现金',
              dataIndex: 'payStaffCash',
              key: 'payStaffCash',
              align: 'center',
              width: 250
            },
            {
              title: '支付的各项税费',
              dataIndex: 'payAllTax',
              key: 'payAllTax',
              align: 'center',
              width: 100
            },
            {
              title: '支付其他与经营活动有关的现金',
              dataIndex: 'payOtherOperate',
              key: 'payOtherOperate',
              align: 'center',
              width: 200
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 150
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">经营活动现金流出小计</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyhdlcxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '投资活动现金流出小计',
              dataIndex: 'totalInvestOutflow',
              key: 'totalInvestOutflow',
              align: 'center',
              width: 180
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">经营活动产生的现金流量净额</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyhdldxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '经营活动产生的现金流量净额',
              dataIndex: 'netcashOperatenote',
              key: 'netcashOperatenote',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">投资活动产生的现金流量</div>} bordered={false}>
        <Table
          pagination={false}
          key='tzhdldxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '处置固定资产、无形资产和其他长期资产收回的现金净额',
              dataIndex: 'disposalLongAsset',
              key: 'disposalLongAsset',
              align: 'center',
              width: 200
            },
            {
              title: '收到的其他与投资活动有关的现金',
              dataIndex: 'receiveOtherInvest',
              key: 'receiveOtherInvest',
              align: 'center',
              width: 250
            },
            {
              title: '处置子公司及其他营业单位收到的现金',
              dataIndex: 'disposalSubsidiaryOther',
              key: 'disposalSubsidiaryOther',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">投资活动现金流入小计</div>} bordered={false}>
        <Table
          pagination={false}
          key='tzhdxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '购建固定资产、无形资产和其他长期资产支付的现金',
              dataIndex: 'constructLongAsset',
              key: 'constructLongAsset',
              align: 'center',
              width: 200
            },
            {
              title: '取得子公司及其他营业单位支付的现金净额',
              dataIndex: 'obtainSubsidiaryOther',
              key: 'obtainSubsidiaryOther',
              align: 'center',
              width: 320
            },
            {
              title: '支付其他与投资活动有关的现金',
              dataIndex: 'payOtherInvest',
              key: 'payOtherInvest',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">投资活动现金流出小计</div>} bordered={false}>
        <Table
          pagination={false}
          key='xjlc'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '投资活动现金流出小计',
              dataIndex: 'totalInvestOutflow',
              key: 'totalInvestOutflow',
              align: 'center',
              width: 180
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">投资活动产生的现金流量净额</div>} bordered={false}>
        <Table
          pagination={false}
          key='xjje'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '投资活动产生的现金流量净额',
              dataIndex: 'netcashInvest',
              key: 'netcashInvest',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">筹资活动产生的现金流量</div>} bordered={false}>
        <Table
          pagination={false}
          key='czxj'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '分配股利、利润或偿付利息支付的现金',
              dataIndex: 'assignDividendPorfit',
              key: 'assignDividendPorfit',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">筹资活动现金流出小计</div>} bordered={false}>
        <Table
          pagination={false}
          key='lrxj'
          dataSource={store.gpDetails.xjlls}
          size="small"
          // 筹资活动现金流入小计 偿还债券所支付的现金 其中：子公司支付给少数股东的权利、利润、
          // 支付的其他与筹资活动有关的现金
          columns={[
            {
              title: '筹资活动现金流出小计',
              dataIndex: 'totalFinanceOutflow',
              key: 'totalFinanceOutflow',
              align: 'center',
              width: 180
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">筹资活动产生的现金流量净额</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyhdldxjllb'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '筹资活动产生的现金流量净额',
              dataIndex: 'netcashFinance',
              key: 'netcashFinance',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      {/* 缺少 汇率变动对现金及现金等价物的影响 */}
      <Card title={<div className="subTitle">现金及现金等价物净增加额</div>} bordered={false}>
        <Table
          pagination={false}
          key='xjdjzj'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '现金及现金等价物净增加额',
              dataIndex: 'cceAdd',
              key: 'cceAdd',
              align: 'center',
              width: 280
            },
            {
              title: '加：期初现金及现金等价物余额',
              dataIndex: 'beginCce',
              key: 'beginCce',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">期末现金及现金等价物余额</div>} bordered={false}>
        <Table
          pagination={false}
          key='qmxj'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '期末现金及现金等价物余额',
              dataIndex: 'endCce',
              key: 'endCce',
              align: 'center',
              width: 280
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">补充资料</div>} bordered={false}>
        <Table
          pagination={false}
          key='bczl'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '净利润',
              dataIndex: 'netprofit',
              key: 'netprofit',
              align: 'center',
              width: 120
            },
            {
              title: '资产减值准备',
              dataIndex: 'assetImpairment',
              key: 'assetImpairment',
              align: 'center',
              width: 150
            },
            {
              title: '固定资产和投资性房地产折旧',
              dataIndex: 'faIrDepr',
              key: 'faIrDepr',
              align: 'center',
              width: 200
            },
            {
              title: '投资损失',
              dataIndex: 'investLoss',
              key: 'investLoss',
              align: 'center',
              width: 150
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 200
            }
          ]}
        />
        <Table
          pagination={false}
          style={{ marginTop: 30 }}
          key='bczl'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '无形资产摊销',
              dataIndex: 'iaAmortize',
              key: 'iaAmortize',
              align: 'center',
              width: 150
            },
            {
              title: '长期待摊费用',
              dataIndex: 'longPrepaidExpense',
              key: 'longPrepaidExpense',
              width: 150,
              align: 'center'
            },
            {
              title: '处置子公司及其他营业单位收到的现金',
              dataIndex: 'disposalSubsidiaryOther',
              key: 'disposalSubsidiaryOther',
              align: 'center',
              width: 280
            },
            {
              title: '固定资产报废损失',
              dataIndex: 'faScrapLoss',
              key: 'faScrapLoss',
              align: 'center',
              width: 150
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 200
            }
          ]}
        />
        <Table
          pagination={false}
          key='bczl'
          dataSource={store.gpDetails.xjlls}
          size="small"
          style={{ marginTop: 30 }}
          columns={[
            {
              title: '其中：固定资产折旧、油气资产折耗、生产性生物资产折旧',
              dataIndex: 'oilgasBiologyDepr',
              key: 'oilgasBiologyDepr',
              align: 'center',
              width: 400
            },
            {
              title: '递延所得税',
              dataIndex: 'deferTax',
              key: 'deferTax',
              align: 'center',
              width: 240
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 240
            }
          ]}
        />
        <Table
          pagination={false}
          key='bczl'
          dataSource={store.gpDetails.xjlls}
          size="small"
          style={{ marginTop: 20 }}
          columns={[
            {
              title: '其中：递延所得税资产减少',
              dataIndex: 'dtAssetReduce',
              key: 'dtAssetReduce',
              align: 'center',
              width: 280
            },
            {
              title: '存货的减少',
              dataIndex: 'inventoryReduce',
              key: 'inventoryReduce',
              align: 'center',
              width: 150
            },
            {
              title: '经营性应收项目的减少',
              dataIndex: 'operateReceReduce',
              key: 'operateReceReduce',
              align: 'center',
              width: 200
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 240
            }
          ]}
        />
        <Table
          pagination={false}
          key='bczl'
          dataSource={store.gpDetails.xjlls}
          size="small"
          style={{ marginTop: 20 }}
          columns={[
            {
              title: '经营性应付项目的增加',
              dataIndex: 'operatePayableAdd',
              key: 'operatePayableAdd',
              align: 'center',
              width: 150
            },
            {
              title: '其他',
              dataIndex: 'other',
              key: 'other',
              align: 'center',
              width: 80
            },
            {
              title: '经营活动产生的现金流量净额其他项目',
              dataIndex: 'operateNetcashOthernote',
              key: 'operateNetcashOthernote',
              align: 'center',
              width: 240
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 240
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">经营活动产生的现金流量净额</div>} bordered={false}>
        <Table
          pagination={false}
          key='jyhdxjje'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '经营活动产生的现金流量净额',
              dataIndex: 'netcashOperatenote',
              key: 'netcashOperatenote',
              align: 'center',
              width: 280
            },
            {
              title: '现金的期末余额',
              dataIndex: 'endCash',
              key: 'endCash',
              align: 'center',
              width: 150
            },
            {
              title: '减：现金的期初余额',
              dataIndex: 'beginCash',
              key: 'beginCash',
              align: 'center',
              width: 150
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">现金及现金等价物的净增加额</div>} bordered={false}>
        <Table
          pagination={false}
          key='xjdjwjje'
          dataSource={store.gpDetails.xjlls}
          size="small"
          columns={[
            {
              title: '现金及现金等价物的净增加额',
              dataIndex: 'cceAddnote',
              key: 'cceAddnote',
              align: 'center',
              width: 280
            },
            {
              title: '审计意见 (境内)',
              dataIndex: 'opinionType',
              key: 'opinionType',
              align: 'center',
              width: 150
            },
            {
              title: '发布日期',
              dataIndex: 'reportDate',
              key: 'reportDate',
              align: 'center',
              width: 100
            }
          ]}
        />
      </Card>
    </Card>
  )
}

const CompanyDebt = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <Card title={<div className="tite">资产负债表</div>} bordered={false} style={{ marginTop: 50 }}>
      <Card title={<div className="firstTitle">流动资产</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldzcb"
          columns={[
            {
              title: '货币资金',
              dataIndex: 'monetaryfunds',
              key: 'monetaryfunds',
              width: 150,
              align: 'center'
            },
            {
              title: '交易性金融资产',
              dataIndex: 'tradeFinassetNotfvtpl',
              key: 'tradeFinassetNotfvtpl',
              width: 150,
              align: 'center'
            },
            {
              title: '应收票据及应收款帐',
              dataIndex: 'noteAccountsRece',
              key: 'noteAccountsRece',
              width: 150,
              align: 'center'
            },
            {
              title: '应收款项融资',
              dataIndex: 'financeRece',
              key: 'financeRece',
              width: 150,
              align: 'center'
            },
            {
              title: '预付款项',
              dataIndex: 'prepayment',
              key: 'prepayment',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldzcb2"
          style={{ marginTop: 20 }}
          columns={[
            {
              title: '其他应收款合计',
              dataIndex: 'totalOtherRece',
              key: 'totalOtherRece',
              width: 150,
              align: 'center'
            },
            {
              title: '存货',
              dataIndex: 'inventory',
              key: 'inventory',
              width: 150,
              align: 'center'
            },
            {
              title: '持有待售资产',
              dataIndex: 'holdsaleAsset',
              key: 'holdsaleAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '其他流动资产',
              dataIndex: 'otherCurrentAsset',
              key: 'otherCurrentAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '其他流动资产',
              dataIndex: 'otherCurrentAsset',
              key: 'otherCurrentAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">流动资产合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldzchj"
          columns={[
            {
              title: '流动资产总计',
              dataIndex: 'totalCurrentAssets',
              key: 'totalCurrentAssets',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">非流动资产</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldzcb"
          columns={[
            {
              title: '非流动资产中的在建工程',
              dataIndex: 'cip',
              key: 'cip',
              width: 180,
              align: 'center'
            },
            {
              title: '非流动资产中的固定资产',
              dataIndex: 'fixedAsset',
              key: 'fixedAsset',
              width: 180,
              align: 'center'
            },
            {
              title: '使用权资产',
              dataIndex: 'userightAsset',
              key: 'userightAsset',
              width: 100,
              align: 'center'
            },
            {
              title: '无形资产',
              dataIndex: 'intangibleAsset',
              key: 'intangibleAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldzcb"
          style={{ marginTop: 20 }}
          columns={[
            {
              title: '商誉',
              dataIndex: 'goodwill',
              key: 'goodwill',
              width: 150,
              align: 'center'
            },
            {
              title: '长期待摊费用',
              dataIndex: 'longPrepaidExpense',
              key: 'longPrepaidExpense',
              width: 150,
              align: 'center'
            },
            {
              title: '递延所得税资产',
              dataIndex: 'deferTaxAsset',
              key: 'deferTaxAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '其他非流动资产',
              dataIndex: 'otherNoncurrentAsset',
              key: 'otherNoncurrentAsset',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">非流动资产合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="fldzchj"
          columns={[
            {
              title: '非流动资产合计',
              dataIndex: 'totalNoncurrentAssets',
              key: 'totalNoncurrentAssets',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">资产总计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="zczj"
          columns={[
            {
              title: '资产总计',
              dataIndex: 'totalAssets',
              key: 'totalAssets',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">流动负债</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldfz"
          columns={[
            {
              title: '应付票据及应付款帐',
              dataIndex: 'noteAccountsPayable',
              key: 'noteAccountsPayable',
              width: 200,
              align: 'center'
            },
            {
              title: '应付账款',
              dataIndex: 'accountsPayable',
              key: 'accountsPayable',
              width: 150,
              align: 'center',
            },
            {
              title: '合同负债',
              dataIndex: 'contractLiab',
              key: 'contractLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '应付职工薪酬',
              dataIndex: 'staffSalaryPayable',
              key: 'staffSalaryPayable',
              width: 150,
              align: 'center'
            },
            {
              title: '应交税费',
              dataIndex: 'taxPayable',
              key: 'taxPayable',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldfz"
          style={{ marginTop: 20 }}
          columns={[
            {
              title: '应交税费',
              dataIndex: 'taxPayable',
              key: 'taxPayable',
              width: 150,
              align: 'center'
            },
            {
              title: '其他应付款合计',
              dataIndex: 'totalOtherPayable',
              key: 'totalOtherPayable',
              width: 150,
              align: 'center'
            },
            {
              title: '持有待售负债',
              dataIndex: 'holdsaleLiab',
              key: 'holdsaleLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '其他流动负债',
              dataIndex: 'otherCurrentLiab',
              key: 'otherCurrentLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">流动负债合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldfz"
          columns={[
            {
              title: '流动负债总计',
              dataIndex: 'totalCurrentLiab',
              key: 'totalCurrentLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">非流动负债</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="ldfzhj"
          columns={[
            {
              title: '租赁负债',
              dataIndex: 'leaseLiab',
              key: 'leaseLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '预计负债',
              dataIndex: 'predictLiab',
              key: 'predictLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '递延收益',
              dataIndex: 'deferIncome',
              key: 'deferIncome',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">非流动负债合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="fldfzhj"
          columns={[
            {
              title: '非流动负债合计',
              dataIndex: 'totalNoncurrentLiab',
              key: 'totalNoncurrentLiab',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">负债合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="fzhj"
          columns={[
            {
              title: '负债合计',
              dataIndex: 'totalLiabilities',
              key: 'totalLiabilities',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">所有者权益（或股东权益）</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="syzjq"
          columns={[
            {
              title: '实收资本（或股本）',
              dataIndex: 'shareCapital',
              key: 'shareCapital',
              width: 150,
              align: 'center'
            },
            {
              title: '资本公积',
              dataIndex: 'capitalReserve',
              key: 'capitalReserve',
              width: 150,
              align: 'center'
            },
            {
              title: '盈余公积',
              dataIndex: 'surplusReserve',
              key: 'surplusReserve',
              width: 150,
              align: 'center'
            },
            {
              title: '未分配利润',
              dataIndex: 'unassignRpofit',
              key: 'unassignRpofit',
              fixed: 'left',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">归属于母公司股东权益总计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="gdqyzj"
          columns={[
            {
              title: '归属于母公司股东权益总计',
              dataIndex: 'totalParentEquity',
              key: 'totalParentEquity',
              width: 200,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">股东权益合计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="gdqyhj"
          columns={[
            {
              title: '股东权益合计',
              dataIndex: 'totalEquity',
              key: 'totalEquity',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
      <Card title={<div className="subTitle">负债和股东权益总计</div>} bordered={false}>
        <Table
          size='small'
          pagination={false}
          dataSource={store.gpDetails.zcfzs}
          key="fzandgdqyzj"
          columns={[
            {
              title: '负债和股东权益总计',
              dataIndex: 'totalLiabEquity',
              key: 'totalLiabEquity',
              width: 150,
              align: 'center'
            },
            {
              title: '审计意见 (境内)',
              dataIndex: 'opinionType',
              key: 'opinionType',
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间类型',
              dataIndex: 'reportDateName',
              key: "reportDateName",
              width: 150,
              align: 'center'
            },
            {
              title: '报告时间',
              dataIndex: 'reportDate',
              key: 'reportDate',
              width: 150,
              align: 'center'
            },
          ]}
        />
      </Card>
    </Card>
  )
}

const CompanyMainZBInfo = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <Card title={<div className="tite">主要指标</div>} bordered={false}>
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '总资产周转天数（天）',
            dataIndex: 'zzczzts',
            key: 'zzczzts',
            width: 200,
            align: 'center',
            fixed: 'left'
          },
          {
            title: '总资产收益率 (加权)(%)',
            dataIndex: 'zzcjll',
            key: 'zzcjll',
            width: 200,
            align: 'center',
            fixed: 'left'
          },
          {
            title: '资产负债率 (%)',
            dataIndex: 'zcfzl',
            key: 'zcfzl',
            width: 150,
            align: 'center'
          },
          {
            title: '营业总收入滚动环比增长 (%)',
            dataIndex: 'yyzsrgdhbzc',
            key: 'yyzsrgdhbzc',
            width: 200,
            align: 'center'
          },
          {
            title: '应收账款周转天数 (天)',
            dataIndex: 'yszkzzts',
            key: 'yszkzzts',
            width: 200,
            align: 'center'
          },
          {
            title: '应收账款周转率 (次)',
            dataIndex: 'yszkzzl',
            key: 'yszkzzl',
            width: 150,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        style={{ marginTop: 20 }}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '毛利率 ',
            dataIndex: 'xsmll',
            key: 'xsmll',
            width: 150,
            align: 'center'
          },
          {
            title: '净利率 (%)',
            dataIndex: 'xsjll',
            key: 'xsjll',
            width: 150,
            align: 'center'
          },
          {
            title: '现金流量比率',
            dataIndex: 'xjllb',
            key: 'xjllb',
            width: 150,
            align: 'center'
          },
          {
            title: '营业总收入同比增长 (%)',
            dataIndex: 'totaloperaterevetz',
            key: 'totaloperaterevetz',
            width: 200,
            align: 'center'
          },
          {
            title: '营业总收入 (元)',
            dataIndex: 'toazzl',
            key: 'toazzl',
            width: 150,
            align: 'center'
          },
          {
            title: '股票名字',
            dataIndex: 'securityNameAbbr',
            key: 'securityNameAbbr',
            width: 150,
            align: 'center'
          },
          {
            title: '股票代码',
            dataIndex: 'securityCode',
            key: 'securityCode',
            width: 150,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        style={{ marginTop: 20 }}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '速动比率',
            dataIndex: 'sd',
            key: 'sd',
            width: 150,
            align: 'center'
          },
          {
            title: '净资产收益率 (扣非 / 加权)(%)',
            dataIndex: 'roekcjq',
            key: 'roekcjq',
            width: 250,
            align: 'center'
          },
          {
            title: '净资产收益率 (加权)(%)',
            dataIndex: 'roejq',
            key: 'roejq',
            width: 200,
            align: 'center'
          },
          {
            title: '权益乘数',
            dataIndex: 'qycs',
            key: 'qycs',
            width: 150,
            align: 'center'
          },
          {
            title: '归属净利润同比增长 (%)',
            dataIndex: 'parentnetprofittz',
            key: 'parentnetprofittz',
            width: 200,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        style={{ marginTop: 20 }}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '归属净利润 (元)',
            dataIndex: 'parentnetprofit',
            key: 'parentnetprofit',
            width: 150,
            align: 'center'
          },
          {
            title: '归属净利润滚动环比增长 (%)',
            dataIndex: 'parentnetprofit',
            key: 'parentnetprofit',
            width: 200,
            align: 'center'
          },
          {
            title: '每股公积金 (元)',
            dataIndex: 'mgzbgj',
            key: 'mgzbgj',
            width: 150,
            align: 'center'
          },
          {
            title: '每股未分配利润 (元)',
            dataIndex: 'mgwfplr',
            key: 'mgwfplr',
            width: 150,
            align: 'center'
          },
          {
            title: '每股经营现金流 (元)',
            dataIndex: 'mgjyxjje',
            key: 'mgjyxjje',
            width: 150,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        style={{ marginTop: 20 }}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '流动比率',
            dataIndex: 'ld',
            key: 'ld',
            width: 150,
            align: 'center'
          },
          {
            title: '扣非净利润滚动环比增长 (%)',
            dataIndex: 'kfjlrgdhbzc',
            key: 'kfjlrgdhbzc',
            width: 200,
            align: 'center'
          },
          {
            title: '扣非净利润同比增长 (%)',
            dataIndex: 'kcfjcxsyjlrtz',
            key: 'kcfjcxsyjlrtz',
            width: 200,
            align: 'center'
          },
          {
            title: '扣非净利润 (元)',
            dataIndex: 'kcfjcxsyjlr',
            key: 'kcfjcxsyjlr',
            width: 150,
            align: 'center'
          },
          {
            title: '稀释每股收益 (元)',
            dataIndex: 'epsxs',
            key: 'epsxs',
            width: 150,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
      <Table
        key='MainZb'
        bordered
        size="small"
        pagination={false}
        style={{ marginTop: 20 }}
        dataSource={store.gpDetails.mainzbs}
        columns={[
          {
            title: '扣非每股收益 (元)',
            dataIndex: 'epskcjb',
            key: 'epskcjb',
            width: 150,
            align: 'center'
          },
          {
            title: '基本每股收益 (元)',
            dataIndex: 'epsjb',
            key: 'epsjb',
            width: 150,
            align: 'center'
          },
          {
            title: '产权比率',
            dataIndex: 'cqbl',
            key: 'cqbl',
            width: 150,
            align: 'center'
          },
          {
            title: '存货周转天数 (天)',
            dataIndex: 'chzzts',
            key: 'chzzts',
            width: 150,
            align: 'center'
          },
          {
            title: '存货周转率 (次)',
            dataIndex: 'chzzl',
            key: 'chzzl',
            width: 150,
            align: 'center'
          },
          {
            title: '每股净资产 (元)',
            dataIndex: 'bps',
            key: 'bps',
            width: 150,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 150,
            align: 'center'
          }
        ]}
      />
    </Card>
  )
}

const transform: any = {
  0: '运营能力分析',
  1: '盈利能力分析',
  2: '偿债能力分析'
}

const CompanyAnalysisOperatingInfo = (store: IParamsRisk | IParamsFcModel) => {
  return (
    <>
      {typeof store.analysis !== 'string' ? (
        <>
          {store.analysis.map((item) => (
            <>
              <div style={{ marginTop: 30 }}></div>
              <h1><strong>{transform[item.type]}</strong></h1>
              <Row key='advice'>
                <Col span={12} key='exist_risk'><strong style={{ fontSize: "20px" }}>存在的风险：</strong><span style={{ fontSize: "20px" }}>{item.risk}</span></Col>
                <Col span={12} key='risk_advice'><strong style={{ fontSize: "20px" }}>风险控制建议：</strong>{item.advise}</Col>
              </Row>
              <br />
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
                    width: 150,
                    align: 'center'
                  },
                  {
                    title: '评估结果',
                    dataIndex: 'evaluateResult',
                    key: 'evaluateResulet',
                    width: 150,
                    align: 'center'
                  },
                  {
                    title: '最新值',
                    dataIndex: 'newestValue',
                    key: 'newestValue',
                    width: 150,
                    align: 'center'
                  },
                ]}
              />
            </>
          ))}
        </>
      ) : (
        <h1><strong>{store.analysis}</strong></h1>
      )}

    </>
  )
}

