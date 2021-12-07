import { IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis"

export const ProfitZbReportColumns = (store: IParamsRisk | IParamsFcModel) => {
  const columns = [
    {
      title: '盈利能力指标',
      key: 'profitzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
    if (item.reportDate) {
      columns.push({
        dataIndex: `profitzb${i}`,
        key: `profitzb${i}`,
        title: `${item.reportDate}`,
      })
    }
  })
  return columns
}