import { Button, Card, Col, Row, Table } from "antd"
import React from "react"
import { IParamsRisk } from "../../../container/IntellAnalysis/model/analysis"
import './index.less'
interface IExportPDFProps {
  data: IParamsRisk
}

export const ExportFrcPDFModal: React.FC<IExportPDFProps> = (props) => {

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
              <Button type="primary">
                下载PDF
              </Button>
            </div>
          </div>
          <div className="company">
            <div className="company-info">
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

            </div>
            <div className='company-struct'>
              <CompanyStructure analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
            </div>
            <div className='company-report'>
              <CompanyReportInfo analysis={props.data.analysis} gpDetails={props.data.gpDetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const CompanyStructure = (store: IParamsRisk) => {
  return (
    <Card title={<strong><span style={{ fontSize: '20px' }}>企业股票结构</span></strong>} bordered={false}>
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
            width: 400,
            align: 'center',
          },
          {
            title: '股份类型',
            dataIndex: 'sharesType',
            key: 'sharesType',
            fixed: 'left',
            width: 150,
            align: 'center'
          },
          {
            title: '股东性质',
            dataIndex: 'holderType',
            key: 'holderType',
            width: 150,
            align: 'center'
          },
          {
            title: '持股数（股）',
            dataIndex: 'holdNum',
            key: 'holdNum',
            width: 150,
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
            width: 220,
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
            width: 100,
            align: 'center'
          }
        ]}
      />
    </Card>
  )
}

const CompanyReportInfo = (store: IParamsRisk) => {
  return (
    <>
      <Card title={<strong><span style={{ fontSize: '20px' }}>利润表</span></strong>} key='CompanyReportInfo' bordered={true}>
        <Card title={<strong>营业总收入</strong>} bordered={false}>
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
        <Card title={<strong>营业总成本</strong>} bordered={false}>
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
        <Card title={<strong>其他经营收益</strong>} bordered={false}>
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
        <Card title={<strong>营业利润</strong>} bordered={false}>
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
        <Card title={<strong>利润总额</strong>} bordered={false}>
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
        <Card title={<strong>净利润</strong>} bordered={false}>
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
          <Card title={<strong>(一）按特许经营持续性分类</strong>} bordered={false}>
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
          <Card title={<strong>(二）按所有权归属分类</strong>} bordered={false}>
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
        <Card title={<strong>每股收益</strong>} bordered={false}>
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
        <Card title={<strong>其他收益综合</strong>} bordered={false}>
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
        <Card title={<strong>综合收益总额</strong>} bordered={false}>
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

      <Card title={<strong><span style={{ fontSize: '20px' }}>现金流量表</span></strong>} bordered={true} style={{ marginTop: 50 }}>
        <Card title={<strong>经营活动产生的现金流量</strong>}>
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
        <Card title={<strong>经营活动现金流入小计</strong>}>
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
                width: 180
              },
              {
                title: '购买商品、接受劳务支付的现金',
                dataIndex: 'buyServices',
                key: 'buyServices',
                align: 'center',
                width: 280
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
                width: 150
              },
              {
                title: '支付其他与经营活动有关的现金',
                dataIndex: 'payOtherOperate',
                key: 'payOtherOperate',
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
        <Card title={<strong>经营活动现金流出小计</strong>}>
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
        <Card title={<strong>经营活动产生的现金流量净额</strong>}>
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
        <Card title={<strong>投资活动产生的现金流量</strong>}>
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
                width: 400
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
        <Card title={<strong>投资活动现金流入小计</strong>}>
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
                width: 350
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
        <Card title={<strong>投资活动现金流出小计</strong>}>
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
        <Card title={<strong>投资活动产生的现金流量净额</strong>}>
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
        <Card title={<strong>筹资活动产生的现金流量</strong>}>
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
        <Card title={<strong>筹资活动现金流出小计</strong>}>
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
        <Card title={<strong>筹资活动产生的现金流量净额</strong>}>
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
        <Card title={<strong>现金及现金等价物净增加额</strong>}>
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
        <Card title={<strong>期末现金及现金等价物余额</strong>}>
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
        <Card title={<strong>补充资料</strong>}>
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
                width: 150
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
                width: 280
              },
              {
                title: '其中：固定资产折旧、油气资产折耗、生产性生物资产折旧',
                dataIndex: 'oilgasBiologyDepr',
                key: 'oilgasBiologyDepr',
                align: 'center',
                width: 400
              },
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
                width: 100
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
                title: '投资损失',
                dataIndex: 'investLoss',
                key: 'investLoss',
                align: 'center',
                width: 150
              },
              {
                title: '递延所得税',
                dataIndex: 'deferTax',
                key: 'deferTax',
                align: 'center',
                width: 150
              },
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
                width: 280
              },
              {
                title: '经营性应付项目的增加',
                dataIndex: 'operatePayableAdd',
                key: 'operatePayableAdd',
                align: 'center',
                width: 280
              },
              {
                title: '其他',
                dataIndex: 'other',
                key: 'other',
                align: 'center',
                width: 150
              },
              {
                title: '经营活动产生的现金流量净额其他项目',
                dataIndex: 'operateNetcashOthernote',
                key: 'operateNetcashOthernote',
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
        <Card title={<strong>经营活动产生的现金流量净额</strong>}>
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
        <Card title={<strong>现金及现金等价物的净增加额</strong>}>
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

        <Card title={<strong><span style={{ fontSize: '20px' }}>资产负债表</span></strong>} bordered={true} style={{ marginTop: 50 }}>
          <Card title={<strong>流动资产</strong>}>
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
          <Card title={<strong>流动资产合计</strong>}>
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
          <Card title={<strong>非流动资产</strong>}>
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
          <Card title={<strong>非流动资产合计</strong>}>
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
          <Card title={<strong>资产总计</strong>}>
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
          <Card title={<strong>流动负债</strong>}>
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
                  width: 150,
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
          <Card title={<strong>流动负债合计</strong>}>
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
          <Card title={<strong>非流动负债</strong>}>
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
          <Card title={<strong>非流动负债合计</strong>}>
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
          <Card title={<strong>负债合计</strong>}>
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
          <Card title={<strong>所有者权益（或股东权益）</strong>}>
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
          <Card title={<strong>归属于母公司股东权益总计</strong>}>
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
          <Card title={<strong>股东权益合计</strong>}>
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
          <Card title={<strong>负债和股东权益总计</strong>}>
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
      </Card>
    </>
  )
}



