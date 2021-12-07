import { IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis";

export const FinancialZbReportColumns = (store: IParamsRisk | IParamsFcModel) => {
  const columns = [
    {
      title: '财务风险指标',
      key: 'financialzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `financialzb${i}`,
        key: `financialzb${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}