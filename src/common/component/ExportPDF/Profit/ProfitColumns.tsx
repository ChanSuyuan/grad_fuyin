import { IParamsFcModel, IParamsRisk } from "../../../../container/IntellAnalysis/model/analysis";

export const ProfitReportColumns = (store: IParamsRisk | IParamsFcModel) => {
  const columns = [
    {
      title: '利润表',
      key: 'profit',
      dataIndex: 'item',
    },
  ]

  // eslint-disable-next-line array-callback-return
  store.gpDetails.profiles.map((item, i) => {
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