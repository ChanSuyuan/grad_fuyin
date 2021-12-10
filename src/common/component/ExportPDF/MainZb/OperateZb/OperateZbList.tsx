import React, { ReactNode } from 'react'
import { IMainzbsInfo } from '../../../../../container/IntellAnalysis/model/analysis'
import { numberTrans } from '../../utils/numberTrans'

interface IOperateZbOriginDataProps {
  item?: ReactNode
  key?: string
  operatezb0?: string
  operatezb1?: string
  operatezb2?: string
  operatezb3?: string
}


export const OperateZbReportData = (store: IMainzbsInfo[]) => {
  const originData: IOperateZbOriginDataProps[] = []
  originData.push(
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 总资产周转天数（天）</ div>,
      key: 'zzczzts'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 存货周转天数（天）</ div>,
      key: 'chzzts'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应收账款周转天数（天）</ div>,
      key: 'yszkzzts'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 总资产周转率（次）</ div>,
      key: 'toazzl'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 存货周转率（次）</ div>,
      key: 'chzzl'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应收账款周转率（次）</ div>,
      key: 'yszkzzl'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'zzczzts') {
            e.operatezb0 = numberTrans(item.zzczzts)
          }
          else if (e.key === 'chzzts') {
            e.operatezb0 = numberTrans(item.chzzts)
          }
          else if (e.key === 'yszkzzts') {
            e.operatezb0 = numberTrans(item.yszkzzts)
          }
          else if (e.key === 'toazzl') {
            e.operatezb0 = numberTrans(item.toazzl)
          }
          else if (e.key === 'chzzl') {
            e.operatezb0 = numberTrans(item.chzzl)
          }
          else if (e.key === 'yszkzzl') {
            e.operatezb0 = numberTrans(item.yszkzzl)
          }
        }
        if (i === 1) {
          if (e.key === 'zzczzts') {
            e.operatezb1 = numberTrans(item.zzczzts)
          }
          else if (e.key === 'chzzts') {
            e.operatezb1 = numberTrans(item.chzzts)
          }
          else if (e.key === 'yszkzzts') {
            e.operatezb1 = numberTrans(item.yszkzzts)
          }
          else if (e.key === 'toazzl') {
            e.operatezb1 = numberTrans(item.toazzl)
          }
          else if (e.key === 'chzzl') {
            e.operatezb1 = numberTrans(item.chzzl)
          }
          else if (e.key === 'yszkzzl') {
            e.operatezb1 = numberTrans(item.yszkzzl)
          }
        }
        if (i === 2) {
          if (e.key === 'zzczzts') {
            e.operatezb2 = numberTrans(item.zzczzts)
          }
          else if (e.key === 'chzzts') {
            e.operatezb2 = numberTrans(item.chzzts)
          }
          else if (e.key === 'yszkzzts') {
            e.operatezb2 = numberTrans(item.yszkzzts)
          }
          else if (e.key === 'toazzl') {
            e.operatezb2 = numberTrans(item.toazzl)
          }
          else if (e.key === 'chzzl') {
            e.operatezb2 = numberTrans(item.chzzl)
          }
          else if (e.key === 'yszkzzl') {
            e.operatezb2 = numberTrans(item.yszkzzl)
          }
        }
        if (i === 3) {
          if (e.key === 'zzczzts') {
            e.operatezb3 = numberTrans(item.zzczzts)
          }
          else if (e.key === 'chzzts') {
            e.operatezb3 = numberTrans(item.chzzts)
          }
          else if (e.key === 'yszkzzts') {
            e.operatezb3 = numberTrans(item.yszkzzts)
          }
          else if (e.key === 'toazzl') {
            e.operatezb3 = numberTrans(item.toazzl)
          }
          else if (e.key === 'chzzl') {
            e.operatezb3 = numberTrans(item.chzzl)
          }
          else if (e.key === 'yszkzzl') {
            e.operatezb3 = numberTrans(item.yszkzzl)
          }
        }

      })
    }
  })
  return originData
}