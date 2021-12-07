import React, { ReactNode } from "react";
import { IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis";
import { numberTrans } from "../../utils/numberTrans";

interface IAbilityZbOriginDataProps {
  item?: ReactNode
  key?: string
  growthzb0?: string
  growthzb1?: string
  growthzb2?: string
  growthzb3?: string
}


export const AbilityZbReportData = (store: IParamsRisk | IParamsFcModel) => {
  const originData: IAbilityZbOriginDataProps[] = []
  originData.push(
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 营业总收入（元）</ div>,
      key: 'totaloperatereve'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 归属净利润（元）</ div>,
      key: 'parentnetprofit'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 扣非净利润（元）</ div>,
      key: 'kcfjcxsyjlr'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 营业总收入同比增长（%）</ div>,
      key: 'totaloperaterevetz'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 归属净利润同比增长（%）</ div>,
      key: 'parentnetprofittz'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 扣非净利润同比增长（%）</ div>,
      key: 'kcfjcxsyjlrtz'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 营业总收入滚动环比增长（%）</ div>,
      key: 'yyzsrgdhbzc'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 归属净利润滚动环比增长（%）</ div>,
      key: 'netprofitrphbzc'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 扣非净利润滚动环比增长（%）</ div>,
      key: 'kfjlrgdhbzc'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'totaloperatereve') {
            e.growthzb0 = numberTrans(item.totaloperatereve)
          }
          else if (e.key === 'parentnetprofit') {
            e.growthzb0 = numberTrans(item.parentnetprofit)
          }
          else if (e.key === 'kcfjcxsyjlr') {
            e.growthzb0 = numberTrans(item.kcfjcxsyjlr)
          }
          else if (e.key === 'totaloperaterevetz') {
            e.growthzb0 = numberTrans(item.totaloperaterevetz)
          }
          else if (e.key === 'parentnetprofittz') {
            e.growthzb0 = numberTrans(item.parentnetprofittz)
          }
          else if (e.key === 'kcfjcxsyjlrtz') {
            e.growthzb0 = numberTrans(item.kcfjcxsyjlrtz)
          }
          else if (e.key === 'yyzsrgdhbzc') {
            e.growthzb0 = numberTrans(item.yyzsrgdhbzc)
          }
          else if (e.key === 'netprofitrphbzc') {
            e.growthzb0 = numberTrans(item.netprofitrphbzc)
          }
          else if (e.key === 'kfjlrgdhbzc') {
            e.growthzb0 = numberTrans(item.kfjlrgdhbzc)
          }
        }
        if (i === 1) {
          if (e.key === 'totaloperatereve') {
            e.growthzb1 = numberTrans(item.totaloperatereve)
          }
          else if (e.key === 'parentnetprofit') {
            e.growthzb1 = numberTrans(item.parentnetprofit)
          }
          else if (e.key === 'kcfjcxsyjlr') {
            e.growthzb1 = numberTrans(item.kcfjcxsyjlr)
          }
          else if (e.key === 'totaloperaterevetz') {
            e.growthzb1 = numberTrans(item.totaloperaterevetz)
          }
          else if (e.key === 'parentnetprofittz') {
            e.growthzb1 = numberTrans(item.parentnetprofittz)
          }
          else if (e.key === 'kcfjcxsyjlrtz') {
            e.growthzb1 = numberTrans(item.kcfjcxsyjlrtz)
          }
          else if (e.key === 'yyzsrgdhbzc') {
            e.growthzb1 = numberTrans(item.yyzsrgdhbzc)
          }
          else if (e.key === 'netprofitrphbzc') {
            e.growthzb1 = numberTrans(item.netprofitrphbzc)
          }
          else if (e.key === 'kfjlrgdhbzc') {
            e.growthzb1 = numberTrans(item.kfjlrgdhbzc)
          }
        }
        if (i === 2) {
          if (e.key === 'totaloperatereve') {
            e.growthzb2 = numberTrans(item.totaloperatereve)
          }
          else if (e.key === 'parentnetprofit') {
            e.growthzb2 = numberTrans(item.parentnetprofit)
          }
          else if (e.key === 'kcfjcxsyjlr') {
            e.growthzb2 = numberTrans(item.kcfjcxsyjlr)
          }
          else if (e.key === 'totaloperaterevetz') {
            e.growthzb2 = numberTrans(item.totaloperaterevetz)
          }
          else if (e.key === 'parentnetprofittz') {
            e.growthzb2 = numberTrans(item.parentnetprofittz)
          }
          else if (e.key === 'kcfjcxsyjlrtz') {
            e.growthzb2 = numberTrans(item.kcfjcxsyjlrtz)
          }
          else if (e.key === 'yyzsrgdhbzc') {
            e.growthzb2 = numberTrans(item.yyzsrgdhbzc)
          }
          else if (e.key === 'netprofitrphbzc') {
            e.growthzb2 = numberTrans(item.netprofitrphbzc)
          }
          else if (e.key === 'kfjlrgdhbzc') {
            e.growthzb2 = numberTrans(item.kfjlrgdhbzc)
          }
        }
        if (i === 3) {
          if (e.key === 'totaloperatereve') {
            e.growthzb3 = numberTrans(item.totaloperatereve)
          }
          else if (e.key === 'parentnetprofit') {
            e.growthzb3 = numberTrans(item.parentnetprofit)
          }
          else if (e.key === 'kcfjcxsyjlr') {
            e.growthzb3 = numberTrans(item.kcfjcxsyjlr)
          }
          else if (e.key === 'totaloperaterevetz') {
            e.growthzb3 = numberTrans(item.totaloperaterevetz)
          }
          else if (e.key === 'parentnetprofittz') {
            e.growthzb3 = numberTrans(item.parentnetprofittz)
          }
          else if (e.key === 'kcfjcxsyjlrtz') {
            e.growthzb3 = numberTrans(item.kcfjcxsyjlrtz)
          }
          else if (e.key === 'yyzsrgdhbzc') {
            e.growthzb3 = numberTrans(item.yyzsrgdhbzc)
          }
          else if (e.key === 'netprofitrphbzc') {
            e.growthzb3 = numberTrans(item.netprofitrphbzc)
          }
          else if (e.key === 'kfjlrgdhbzc') {
            e.growthzb3 = numberTrans(item.kfjlrgdhbzc)
          }
        }

      })
    }
  })
  return originData
}