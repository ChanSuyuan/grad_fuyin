import { IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis";

export const PerZbReportColumns = (store: IParamsRisk | IParamsFcModel) => {
  const columns = [
    {
      title: '每股指标',
      key: 'permainzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
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