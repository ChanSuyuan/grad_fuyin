import { IMainzbsInfo } from "../../../../../container/IntellAnalysis/model/analysis";

export const OperateZbReportColumns = (store: IMainzbsInfo[]) => {
  const columns = [
    {
      title: '营运能力指标',
      key: 'operatezb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `operatezb${i}`,
        key: `operatezb${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}