import { IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis";

export const AbilityZbReportColumns = (store: IParamsRisk | IParamsFcModel) => {
  const columns = [
    {
      title: '成长能力指标',
      key: 'growthzb',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
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