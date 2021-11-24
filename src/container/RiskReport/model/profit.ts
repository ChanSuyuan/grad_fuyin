export const getProfitTableConfig = () => {

  const columns = [
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
      width: 250,
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
      width: 250,
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
  ]

  const TableConfig = {
    columns,
  }
  return TableConfig
}