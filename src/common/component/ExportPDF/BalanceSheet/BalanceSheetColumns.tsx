import { IZcfzsInfo } from "../../../../container/IntellAnalysis/model/analysis";
export const BalanceSheetColumns = (store: IZcfzsInfo[]) => {
  const columns = [
    {
      title: '资产负债表',
      key: 'balancesheet',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `balancesheet${i}`,
        key: `balancesheet${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}