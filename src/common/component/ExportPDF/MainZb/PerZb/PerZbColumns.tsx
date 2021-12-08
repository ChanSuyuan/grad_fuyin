import { IMainzbsInfo } from "../../../../../container/IntellAnalysis/model/analysis";

export const PerZbReportColumns = (store: IMainzbsInfo[]) => {
  const columns = [
    {
      title: '每股指标',
      key: 'permainzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `permainzb${i}`,
        key: `permainzb${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}