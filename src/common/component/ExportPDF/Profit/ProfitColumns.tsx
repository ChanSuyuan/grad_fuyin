import { IProfilesInfo } from "../../../../container/IntellAnalysis/model/analysis";

export const ProfitReportColumns = (store: IProfilesInfo[]) => {
  const columns = [
    {
      title: '利润表',
      key: 'profit',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `profit${i}`,
        key: `profit${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}