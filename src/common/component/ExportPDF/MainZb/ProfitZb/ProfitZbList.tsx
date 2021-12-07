import React, { ReactNode } from 'react'
import { IParamsFcModel, IParamsRisk } from '../../../../../container/IntellAnalysis/model/analysis'
import { numberTrans } from '../../utils/numberTrans'

interface IprofitzbZbOriginDataProps {
  item?: ReactNode
  key?: string
  profitzb0?: string
  profitzb1?: string
  profitzb2?: string
  profitzb3?: string
}

export const ProfitZbReportData = (store: IParamsRisk | IParamsFcModel) => {
  const originData: IprofitzbZbOriginDataProps[] = []
  originData.push(
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 净资产收益率（加权）（%）</ div>,
      key: 'roejq'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 净资产收益率（扣非 / 加权）（%）</ div>,
      key: 'roekcjq'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 总资产收益率（加权）（%）</ div>,
      key: 'zzcjll'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 毛利率（%）</ div>,
      key: 'xsmll'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 净利率（%）</ div>,
      key: 'xsjll'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.gpDetails.mainzbs.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'roejq') {
            e.profitzb0 = numberTrans(item.roejq)
          }
          else if (e.key === 'roekcjq') {
            e.profitzb0 = numberTrans(item.roekcjq)
          }
          else if (e.key === 'zzcjll') {
            e.profitzb0 = numberTrans(item.zzcjll)
          }
          else if (e.key === 'xsmll') {
            e.profitzb0 = numberTrans(item.xsmll)
          }
          else if (e.key === 'chzzl') {
            e.profitzb0 = numberTrans(item.chzzl)
          }
          else if (e.key === 'xsjll') {
            e.profitzb0 = numberTrans(item.xsjll)
          }
        }
        if (i === 1) {
          if (e.key === 'roejq') {
            e.profitzb1 = numberTrans(item.roejq)
          }
          else if (e.key === 'roekcjq') {
            e.profitzb1 = numberTrans(item.roekcjq)
          }
          else if (e.key === 'zzcjll') {
            e.profitzb1 = numberTrans(item.zzcjll)
          }
          else if (e.key === 'xsmll') {
            e.profitzb1 = numberTrans(item.xsmll)
          }
          else if (e.key === 'chzzl') {
            e.profitzb1 = numberTrans(item.chzzl)
          }
          else if (e.key === 'xsjll') {
            e.profitzb1 = numberTrans(item.xsjll)
          }
        }
        if (i === 2) {
          if (e.key === 'roejq') {
            e.profitzb2 = numberTrans(item.roejq)
          }
          else if (e.key === 'roekcjq') {
            e.profitzb2 = numberTrans(item.roekcjq)
          }
          else if (e.key === 'zzcjll') {
            e.profitzb2 = numberTrans(item.zzcjll)
          }
          else if (e.key === 'xsmll') {
            e.profitzb2 = numberTrans(item.xsmll)
          }
          else if (e.key === 'chzzl') {
            e.profitzb2 = numberTrans(item.chzzl)
          }
          else if (e.key === 'xsjll') {
            e.profitzb2 = numberTrans(item.xsjll)
          }
        }
        if (i === 3) {
          if (e.key === 'roejq') {
            e.profitzb3 = numberTrans(item.roejq)
          }
          else if (e.key === 'roekcjq') {
            e.profitzb3 = numberTrans(item.roekcjq)
          }
          else if (e.key === 'zzcjll') {
            e.profitzb3 = numberTrans(item.zzcjll)
          }
          else if (e.key === 'xsmll') {
            e.profitzb3 = numberTrans(item.xsmll)
          }
          else if (e.key === 'chzzl') {
            e.profitzb3 = numberTrans(item.chzzl)
          }
          else if (e.key === 'xsjll') {
            e.profitzb3 = numberTrans(item.xsjll)
          }
        }
      })
    }
  })
  return originData
}