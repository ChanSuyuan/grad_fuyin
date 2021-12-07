import React, { ReactNode } from 'react'
import { IParamsFcModel, IParamsRisk } from '../../../../../container/IntellAnalysis/model/analysis'
import { numberTrans } from '../../utils/numberTrans';

interface IFinancialOriginDataProps {
  item?: ReactNode
  key?: string
  financialzb0?: string
  financialzb1?: string
  financialzb2?: string
  financialzb3?: string
}

export const FinancialReportData = (store: IParamsRisk | IParamsFcModel) => {
  const originData: IFinancialOriginDataProps[] = [];
  originData.push(
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 流动比率</ div>,
      key: 'ld'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 速动比率</ div>,
      key: 'sd'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 现金流量比率</ div>,
      key: 'xjllb'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 资产负债率（%）</ div>,
      key: 'zcfzl'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 权益乘数</ div>,
      key: 'qycs'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 产权比率</ div>,
      key: 'cqbl'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'ld') {
            e.financialzb0 = numberTrans(item.ld)
          }
          else if (e.key === 'sd') {
            e.financialzb0 = numberTrans(item.sd)
          }
          else if (e.key === 'xjllb') {
            e.financialzb0 = numberTrans(item.xjllb)
          }
          else if (e.key === 'zcfzl') {
            e.financialzb0 = numberTrans(item.zcfzl)
          }
          else if (e.key === 'qycs') {
            e.financialzb0 = numberTrans(item.qycs)
          }
          else if (e.key === 'cqbl') {
            e.financialzb0 = numberTrans(item.cqbl)
          }
        }
        if (i === 1) {
          if (e.key === 'ld') {
            e.financialzb1 = numberTrans(item.ld)
          }
          else if (e.key === 'sd') {
            e.financialzb1 = numberTrans(item.sd)
          }
          else if (e.key === 'xjllb') {
            e.financialzb1 = numberTrans(item.xjllb)
          }
          else if (e.key === 'zcfzl') {
            e.financialzb1 = numberTrans(item.zcfzl)
          }
          else if (e.key === 'qycs') {
            e.financialzb1 = numberTrans(item.qycs)
          }
          else if (e.key === 'cqbl') {
            e.financialzb1 = numberTrans(item.cqbl)
          }
        }
        if (i === 2) {
          if (e.key === 'ld') {
            e.financialzb2 = numberTrans(item.ld)
          }
          else if (e.key === 'sd') {
            e.financialzb2 = numberTrans(item.sd)
          }
          else if (e.key === 'xjllb') {
            e.financialzb2 = numberTrans(item.xjllb)
          }
          else if (e.key === 'zcfzl') {
            e.financialzb2 = numberTrans(item.zcfzl)
          }
          else if (e.key === 'qycs') {
            e.financialzb2 = numberTrans(item.qycs)
          }
          else if (e.key === 'cqbl') {
            e.financialzb2 = numberTrans(item.cqbl)
          }
        }
        if (i === 3) {
          if (e.key === 'ld') {
            e.financialzb3 = numberTrans(item.ld)
          }
          else if (e.key === 'sd') {
            e.financialzb3 = numberTrans(item.sd)
          }
          else if (e.key === 'xjllb') {
            e.financialzb3 = numberTrans(item.xjllb)
          }
          else if (e.key === 'zcfzl') {
            e.financialzb3 = numberTrans(item.zcfzl)
          }
          else if (e.key === 'qycs') {
            e.financialzb3 = numberTrans(item.qycs)
          }
          else if (e.key === 'cqbl') {
            e.financialzb3 = numberTrans(item.cqbl)
          }
        }
      })
    }
  })
  return originData
}