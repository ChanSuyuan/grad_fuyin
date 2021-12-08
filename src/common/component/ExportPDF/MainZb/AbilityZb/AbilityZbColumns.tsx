import { IMainzbsInfo } from "../../../../../container/IntellAnalysis/model/analysis";

export const AbilityZbReportColumns = (store: IMainzbsInfo[]) => {
  const columns = [
    {
      title: '成长能力指标',
      key: 'growthzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `growthzb${i}`,
        key: `growthzb${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}