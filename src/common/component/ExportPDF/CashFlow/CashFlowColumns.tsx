import { IXjjlsInfo } from "../../../../container/IntellAnalysis/model/analysis";
export const CashFlowReportColumns = (store: IXjjlsInfo[]) => {
  const columns = [
    {
      title: '现金流量表',
      key: 'cashflow',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `cashflow${i}`,
        key: `cashflow${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}