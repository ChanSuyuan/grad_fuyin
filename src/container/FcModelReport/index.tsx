/* eslint-disable array-callback-return */
import { Button, Col, Row, Steps, Table } from "antd"
import React from "react"
import { IParamsRiskReportFeedBackInfo } from "../IntellAnalysis/model/analysis"
import "./index.less"

interface IRiskReportProps {
  store: IParamsRiskReportFeedBackInfo | undefined
}
const { Step } = Steps

export const FcModelReport: React.FC<IRiskReportProps> = (props) => {
  const companyInfo = props.store?.data.gpDetails.companyInfo
  const [current, setCurrent] = React.useState(0);


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const CompanyBasicInfo = () => {
    return (
      <>
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
      </>
    )
  }

  const CompanyStructure = () => {
    return (
      <Table
        bordered
        size="small"
        dataSource={props.store?.data.gpDetails.qygqjgs}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 1000 }}
        columns={[
          {
            title: '股东名称',
            dataIndex: 'holderName',
            key: 'holderName',
            fixed: 'left',
            width: 250,
            align: 'center'
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
            width: 100,
            align: 'center'
          },
          {
            title: '持股数（股）',
            dataIndex: 'holdNum',
            key: 'holdNum',
            width: 120,
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
            width: 180,
            align: 'center'
          },
          {
            title: '增减（股）',
            dataIndex: 'holdNumChange',
            key: 'holdNumChange',
            width: 100,
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
    )
  }

  const CompanyProfitInfo = () => {
    return (
      <Table
        pagination={{ pageSize: 5 }}
        size="small"
        dataSource={props.store?.data.gpDetails.profiles}
        scroll={{ x: 1500 }}
        sticky
        columns={[
          {
            title: '利润总额',
            width: 120,
            dataIndex: 'totalProfit',
            key: 'totalprofit',
            fixed: 'left',
            align: 'center'
          },
          {
            title: '营业总收入',
            width: 120,
            dataIndex: 'totalOperateIncome',
            key: 'totalOperateIncome',
            fixed: 'left',
            align: 'center'
          },
          {
            title: '营业总成本',
            dataIndex: 'totalOperateCost',
            key: 'totalOperateCost',
            fixed: 'left',
            width: 120,
            align: 'center'
          },
          {
            title: '报告时间',
            dataIndex: 'reportDate',
            key: 'reportDate',
            width: 100,
            fixed: 'left',
            align: 'center'
          },
          {
            title: '综合收益总额',
            dataIndex: 'totalCompreIncome',
            key: 'totalCompreIncome',
            width: 120,
            align: 'center'
          },
          {
            title: '股票名称',
            dataIndex: 'securityNameAbbr',
            key: 'securityNameAbbr',
            width: 100,
            align: 'center'
          },
          {
            title: '股票代码',
            dataIndex: 'securityCode',
            key: 'securityCode',
            width: 100,
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
            title: '研发费用',
            dataIndex: 'researchExpense',
            key: 'researchExpense',
            width: 100,
            align: 'center'
          },
          {
            title: '归属于母公司股东的综合收益总额',
            dataIndex: 'parentTci',
            key: 'parentTci',
            width: 250,
            align: 'center'
          },
          {
            title: '归属于母公司股东的净利润',
            key: 'parentNetprofit',
            dataIndex: '归属于母公司股东的净利润',
            width: 200,
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
            title: '审计意见 (境内)',
            dataIndex: 'opinionType',
            key: 'opinionType',
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
            title: '营业利润',
            dataIndex: 'operateProfit',
            key: 'operateProfit',
            width: 150,
            align: 'center'
          },
          {
            title: '营业收入',
            dataIndex: 'operateIncome',
            key: 'operateIncome',
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
            title: '加：营业外收入',
            dataIndex: 'nonbusinessIncome',
            key: 'nonbusinessIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '减：营业外支出',
            dataIndex: 'nonbusinessExpense',
            key: 'nonbusinessExpense',
            width: 150,
            align: 'center'
          },
          {
            title: '净利润',
            dataIndex: 'netprofit',
            key: 'netprofit',
            width: 150,
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
            title: '加：投资收益',
            dataIndex: 'investIncome',
            key: 'investIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '减：所得税',
            dataIndex: 'incomeTax',
            key: 'incomeTax',
            width: 150,
            align: 'center'
          },
          {
            title: '财务费用',
            dataIndex: 'financeExpense',
            key: 'financeExpense',
            width: 150,
            align: 'center'
          },
          {
            title: '利息收入',
            dataIndex: 'feInterestIncome',
            key: 'feInterestIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '其中：利息费用',
            dataIndex: 'feInterestExpense',
            key: 'feInterestExpense',
            width: 150,
            align: 'center'
          },
          {
            title: '稀释每股收益',
            dataIndex: 'dilutedEps',
            key: 'dilutedEps',
            width: 150,
            align: 'center'
          },
          {
            title: '扣除非经常性损益后的净利润',
            dataIndex: 'deductParentNetprofit',
            key: 'deductParentNetprofit',
            width: 200,
            align: 'center'
          },
          {
            title: '信用减值损失 (新)',
            dataIndex: 'creditImpairmentIncome',
            key: 'creditImpairmentIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '持续经营净利润',
            dataIndex: 'continuedNetprofit',
            key: 'continuedNetprofit',
            width: 150,
            align: 'center'
          },
          {
            title: '资产减值损失 (新)',
            dataIndex: 'assetImpairmentIncome',
            key: 'assetImpairmentIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '资产处置收益',
            dataIndex: 'assetDisposalIncome',
            key: 'assetDisposalIncome',
            width: 150,
            align: 'center'
          },
          {
            title: '基本每股收益',
            dataIndex: 'basicEps',
            key: 'basicEps',
            width: 150,
            align: 'center',
            fixed: 'right'
          },
        ]}
      />
    )
  }

  const CompanyBalanceSheetInfo = () => {
    return (
      <Table
        pagination={{ pageSize: 5 }}
        size="small"
        dataSource={props.store?.data.gpDetails.zcfzs}
        scroll={{ x: 1500 }}
        sticky
        columns={[
          {
            title: '未分配利润',
            dataIndex: 'unassignRpofit',
            key: 'unassignRpofit',
            fixed: 'left',
            width: 150,
            align: 'center'
          },
          {
            title: '交易性金融资产',
            dataIndex: 'tradeFinassetNotfvtpl',
            key: 'tradeFinassetNotfvtpl',
            width: 150,
            fixed: 'left',
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
            title: '归属于母公司股东权益总计',
            dataIndex: 'totalParentEquity',
            key: 'totalParentEquity',
            width: 200,
            align: 'center'
          },
          {
            title: '其它应收款合计',
            dataIndex: 'totalOtherRece',
            key: 'totalOtherRece',
            width: 150,
            align: 'center'
          },
          {
            title: '其它应付款合计',
            dataIndex: 'totalOtherPayable',
            key: 'totalOtherPayable',
            width: 150,
            align: 'center'
          },
          {
            title: '非流动负债合计',
            dataIndex: 'totalNoncurrentLiab',
            key: 'totalNoncurrentLiab',
            width: 150,
            align: 'center'
          },
          {
            title: '非流动资产合计',
            dataIndex: 'totalNoncurrentAssets',
            key: 'totalNoncurrentAssets',
            width: 150,
            align: 'center'
          },
          {
            title: '负债合计',
            dataIndex: 'totalLiabilities',
            key: 'totalLiabilities',
            width: 150,
            align: 'center'
          },
          {
            title: '负债和股东权益总计',
            dataIndex: 'totalLiabEquity',
            key: 'totalLiabEquity',
            width: 150,
            align: 'center'
          },
          {
            title: '股东权益合计',
            dataIndex: 'totalEquity',
            key: 'totalEquity',
            width: 150,
            align: 'center'
          },
          {
            title: '流动负债总计',
            dataIndex: 'totalCurrentLiab',
            key: 'totalCurrentLiab',
            width: 150,
            align: 'center'
          },
          {
            title: '流动资产总计',
            dataIndex: 'totalCurrentAssets',
            key: 'totalCurrentAssets',
            width: 150,
            align: 'center'
          },
          {
            title: '资产总计',
            dataIndex: 'totalAssets',
            key: 'totalAssets',
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
            title: '盈余公积',
            dataIndex: 'surplusReserve',
            key: 'surplusReserve',
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
            title: '实收资本（或股本）',
            dataIndex: 'shareCapital',
            key: 'shareCapital',
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
            title: '报告类型',
            dataIndex: 'reportType',
            key: 'reportType',
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
          {
            title: '预付款项',
            dataIndex: 'prepayment',
            key: 'prepayment',
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
            title: '其它非流动资产',
            dataIndex: 'otherNoncurrentAsset',
            key: 'otherNoncurrentAsset',
            width: 150,
            align: 'center'
          },
          {
            title: '其它流动负债',
            dataIndex: 'otherCurrentLiab',
            key: 'otherCurrentLiab',
            width: 150,
            align: 'center'
          },
          {
            title: '其它流动资产',
            dataIndex: 'otherCurrentAsset',
            key: 'otherCurrentAsset',
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
            title: '应收票据及应收款帐',
            dataIndex: 'noteAccountsRece',
            key: 'noteAccountsRece',
            width: 150,
            align: 'center'
          },
          {
            title: '应付票据及应付款帐',
            dataIndex: 'noteAccountsPayable',
            key: 'noteAccountsPayable',
            width: 150,
            align: 'center'
          },
          {
            title: '货币资金',
            dataIndex: 'monetaryfunds',
            key: 'monetaryfunds',
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
            title: '租赁负债',
            dataIndex: 'leaseLiab',
            key: 'leaseLiab',
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
            title: '无形资产',
            dataIndex: 'intangibleAsset',
            key: 'intangibleAsset',
            width: 150,
            align: 'center'
          },
          {
            title: '持有代售负债',
            dataIndex: 'holdsaleLiab',
            key: 'holdsaleLiab',
            width: 150,
            align: 'center'
          },
          {
            title: '持有代售资产',
            dataIndex: 'holdsaleAsset',
            key: 'holdsaleAsset',
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
            title: '非流动资产中的固定资产',
            dataIndex: 'fixedAsset',
            key: 'fixedAsset',
            width: 180,
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
            title: '递延所得税资产',
            dataIndex: 'deferTaxAsset',
            key: 'deferTaxAsset',
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
            title: '合同负债',
            dataIndex: 'contractLiab',
            key: 'contractLiab',
            width: 150,
            align: 'center'
          },
          {
            title: '非流动资产中的在建工程',
            dataIndex: 'cip',
            key: 'cip',
            width: 180,
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
            title: '应收账款',
            dataIndex: 'accountsRece',
            key: 'accountsRece',
            width: 150,
            align: 'center',
            fixed: 'right'
          },
          {
            title: '应付账款',
            dataIndex: 'accountsPayable',
            key: 'accountsPayable',
            width: 150,
            align: 'center',
            fixed: 'right'
          }
        ]}
      />
    )
  }

  const CompanyCashIndicatorInfo = () => {
    return (
      <Table
        bordered
        pagination={{ pageSize: 5 }}
        size="small"
        dataSource={props.store?.data.gpDetails.xjlls}
        scroll={{ x: 1500 }}
        sticky
        columns={[
          {
            title: '经营活动现金流出小计',
            dataIndex: 'totalOperateOutflow',
            key: 'totalOperateOutflow',
            fixed: 'left',
            align: 'center',
            width: 180
          },
          {
            title: '经营活动现金流入小计',
            dataIndex: 'totalOperateInflow',
            key: 'totalOperateInflow',
            fixed: 'left',
            align: 'center',
            width: 180
          },
          {
            title: '发布日期',
            dataIndex: 'reportDate',
            key: 'reportDate',
            align: 'center',
            fixed: 'left',
            width: 100
          },
          {
            title: '投资活动现金流出小计',
            dataIndex: 'totalInvestOutflow',
            key: 'totalInvestOutflow',
            align: 'center',
            width: 180
          },
          {
            title: '投资活动现金流入小计',
            dataIndex: 'totalInvestInflow',
            key: 'totalInvestInflow',
            align: 'center',
            width: 180
          },
          {
            title: '筹资活动现金流出小计',
            dataIndex: 'totalFinanceOutflow',
            key: 'totalFinanceOutflow',
            align: 'center',
            width: 180
          },
          {
            title: '股票名字',
            dataIndex: 'securityNameAbbr',
            key: 'securityNameAbbr',
            align: 'center',
            width: 100
          },
          {
            title: '股票代码',
            dataIndex: 'securityCode',
            key: 'securityCode',
            align: 'center',
            width: 100
          },
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
            title: '投资活动现金流出小计',
            dataIndex: 'totalInvestOutflow',
            key: 'totalInvestOutflow',
            align: 'center',
            width: 180
          },
          {
            title: '收到其他与经营活动有关的现金',
            dataIndex: 'receiveOtherOperate',
            key: 'receiveOtherOperate',
            align: 'center',
            width: 250
          },
          {
            title: '收到的其他与投资活动有关的现金',
            dataIndex: 'receiveOtherInvest',
            key: 'receiveOtherInvest',
            align: 'center',
            width: 250
          },
          {
            title: '支付给职工以及为职工支付的现金',
            dataIndex: 'payStaffCash',
            key: 'payStaffCash',
            align: 'center',
            width: 250
          },
          {
            title: '支付其他与经营活动有关的现金',
            dataIndex: 'payOtherOperate',
            key: 'payOtherOperate',
            align: 'center',
            width: 280
          },
          {
            title: '支付其他与投资活动有关的现金',
            dataIndex: 'payOtherInvest',
            key: 'payOtherInvest',
            align: 'center',
            width: 280
          },
          {
            title: '支付的各项税费',
            dataIndex: 'payAllTax',
            key: 'payAllTax',
            align: 'center',
            width: 150
          },
          {
            title: '其他',
            dataIndex: 'other',
            key: 'other',
            align: 'center',
            width: 150
          },
          {
            title: '审计意见 (境内)',
            dataIndex: 'opinionType',
            key: 'opinionType',
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
            title: '经营活动产生的现金流量净额其他项目',
            dataIndex: 'operateNetcashOthernote',
            key: 'operateNetcashOthernote',
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
            title: '取得子公司及其他营业单位支付的现金净额',
            dataIndex: 'obtainSubsidiaryOther',
            key: 'obtainSubsidiaryOther',
            align: 'center',
            width: 320
          },
          {
            title: '净利润',
            dataIndex: 'netprofit',
            key: 'netprofit',
            align: 'center',
            width: 150
          },
          {
            title: '经营活动产生的现金流量净额',
            dataIndex: 'netcashOperatenote',
            key: 'netcashOperatenote',
            align: 'center',
            width: 280
          },
          {
            title: '投资活动产生的现金流量净额',
            dataIndex: 'netcashInvest',
            key: 'netcashInvest',
            align: 'center',
            width: 280
          },
          {
            title: '筹资活动产生的现金流量净额',
            dataIndex: 'netcashFinance',
            key: 'netcashFinance',
            align: 'center',
            width: 280
          },
          {
            title: '长期待摊费用摊销',
            dataIndex: 'lpeAmortize',
            key: 'lpeAmortize',
            align: 'center',
            width: 280
          },
          {
            title: '投资损失',
            dataIndex: 'investLoss',
            key: 'investLoss',
            align: 'center',
            width: 150
          },
          {
            title: '存货的减少',
            dataIndex: 'inventoryReduce',
            key: 'inventoryReduce',
            align: 'center',
            width: 150
          },
          {
            title: '无形资产摊销',
            dataIndex: 'iaAmortize',
            key: 'iaAmortize',
            align: 'center',
            width: 150
          },
          {
            title: '固定资产报废损失',
            dataIndex: 'faScrapLoss',
            key: 'faScrapLoss',
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
            title: '期末现金及现金等价物余额',
            dataIndex: 'endCce',
            key: 'endCce',
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
            title: '其中：递延所得税资产减少',
            dataIndex: 'dtAssetReduce',
            key: 'dtAssetReduce',
            align: 'center',
            width: 280
          },
          {
            title: '处置子公司及其他营业单位收到的现金',
            dataIndex: 'disposalSubsidiaryOther',
            key: 'disposalSubsidiaryOther',
            align: 'center',
            width: 280
          },
          {
            title: '处置固定资产、无形资产和其他长期资产的损失',
            dataIndex: 'disposalLongassetLoss',
            key: 'disposalLongassetLoss',
            align: 'center',
            width: 320
          },
          {
            title: '处置固定资产、无形资产和其他长期资产收回的现金净额',
            dataIndex: 'disposalLongAsset',
            key: 'disposalLongAsset',
            align: 'center',
            width: 400
          },
          {
            title: '递延所得税',
            dataIndex: 'deferTax',
            key: 'deferTax',
            align: 'center',
            width: 150
          },
          {
            title: '购建固定资产、无形资产和其他长期资产支付的现金',
            dataIndex: 'constructLongAsset',
            key: 'constructLongAsset',
            align: 'center',
            width: 350
          },
          {
            title: '现金及现金等价物的净增加额',
            dataIndex: 'cceAddnote',
            key: 'cceAddnote',
            align: 'center',
            width: 280
          },
          {
            title: '现金及现金等价物净增加额',
            dataIndex: 'cceAdd',
            key: 'cceAdd',
            align: 'center',
            width: 280
          },
          {
            title: '购买商品、接受劳务支付的现金',
            dataIndex: 'buyServices',
            key: 'buyServices',
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
            title: '减：现金的期初余额',
            dataIndex: 'beginCash',
            key: 'beginCash',
            align: 'center',
            width: 150
          },
          {
            title: '分配股利、利润或偿付利息支付的现金',
            dataIndex: 'assignDividendPorfit',
            key: 'assignDividendPorfit',
            align: 'center',
            width: 280
          },
          {
            title: '资产减值准备',
            dataIndex: 'assetImpairment',
            key: 'assetImpairment',
            align: 'center',
            width: 150
          }
        ]}
      />
    )
  }

  const transform: any = {
    0: '运营能力分析',
    1: '盈利能力分析',
    2: '偿债能力分析'
  }

  const CompanyAnalysisOperatingInfo = () => {
    return (
      <>
        {props.store?.data.analysis.map((item) => (
          <>
            <h1><strong>{transform[item.type]}</strong></h1>
            <Row>
              <Col span={12}><strong>存在的风险：</strong><span style={{ color: 'red' }}>{item.risk}</span></Col>
              <Col span={12}><strong>风险控制建议：</strong>{item.advise}</Col>
            </Row>
            <br />
            <Table
              size="small"
              pagination={{ pageSize: 3 }}
              dataSource={item.resultZbDtos}
              columns={[
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
                {
                  title: '指标',
                  dataIndex: 'zbKey',
                  key: 'zbKey',
                  width: 150,
                  align: 'center'
                }
              ]}
            />
          </>
        ))}
      </>
    )
  }

  const steps = [
    {
      title: '企业基本信息',
      content: <CompanyBasicInfo />,
    },
    {
      title: '企业股票结构',
      content: <CompanyStructure />
    },
    {
      title: '利润表',
      content: <CompanyProfitInfo />,
    },
    {
      title: '资产负债表',
      content: <CompanyBalanceSheetInfo />
    },
    {
      title: '现金流量表',
      content: <CompanyCashIndicatorInfo />
    },
    {
      title: '运营能力分析',
      content: <CompanyAnalysisOperatingInfo />
    },
    {
      title: '生成报告'
    }
  ];
  return (
    <>
      <Steps current={current} progressDot style={{ marginBottom: 30 }} size="small" responsive>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action" style={{ textAlign: "center", marginTop: 30 }}>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()} size="middle">
            上一步
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} size="middle">
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" size="middle">
            生成报告 TODO
          </Button>
        )}
      </div>
    </>
  )
}