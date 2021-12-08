import React, { ReactNode } from "react";
import { IMainzbsInfo, IParamsFcModel, IParamsRisk } from "../../../../../container/IntellAnalysis/model/analysis";
import { numberTrans } from "../../utils/numberTrans";

interface IPerZbOriginDataProps {
  item?: ReactNode
  key?: string
  permainzb0?: string
  permainzb1?: string
  permainzb2?: string
  permainzb3?: string
}

export const PerZbReportData = (store: IMainzbsInfo[]) => {
  const originData: IPerZbOriginDataProps[] = [];
  originData.push(
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 基本每股收益（元）</ div>,
      key: 'epsjb'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 扣非每股收益（元）</ div>,
      key: 'epskcjb'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 稀释每股收益（元）</ div>,
      key: 'epsxs'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 每股净资产（元）</ div>,
      key: 'bps'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 每股公积金（元）</ div>,
      key: 'mgzbgj'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 每股未分配利润（元）</ div>,
      key: 'mgwfplr'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 每股经营现金流（元）</ div>,
      key: 'mgjyxjje'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'epsjb') {
            e.permainzb0 = numberTrans(item.epsjb)
          }
          else if (e.key === 'epskcjb') {
            e.permainzb0 = numberTrans(item.epskcjb)
          }
          else if (e.key === 'epsxs') {
            e.permainzb0 = numberTrans(item.epsxs)
          }
          else if (e.key === 'bps') {
            e.permainzb0 = numberTrans(item.bps)
          }
          else if (e.key === 'mgzbgj') {
            e.permainzb0 = numberTrans(item.mgzbgj)
          }
          else if (e.key === 'mgwfplr') {
            e.permainzb0 = numberTrans(item.mgwfplr)
          }
          else if (e.key === 'mgjyxjje') {
            e.permainzb0 = numberTrans(item.mgjyxjje)
          }
        }
        if (i === 1) {
          if (e.key === 'epsjb') {
            e.permainzb1 = numberTrans(item.epsjb)
          }
          else if (e.key === 'epskcjb') {
            e.permainzb1 = numberTrans(item.epskcjb)
          }
          else if (e.key === 'epsxs') {
            e.permainzb1 = numberTrans(item.epsxs)
          }
          else if (e.key === 'bps') {
            e.permainzb1 = numberTrans(item.bps)
          }
          else if (e.key === 'mgzbgj') {
            e.permainzb1 = numberTrans(item.mgzbgj)
          }
          else if (e.key === 'mgwfplr') {
            e.permainzb1 = numberTrans(item.mgwfplr)
          }
          else if (e.key === 'mgjyxjje') {
            e.permainzb1 = numberTrans(item.mgjyxjje)
          }
        }
        if (i === 2) {
          if (e.key === 'epsjb') {
            e.permainzb2 = numberTrans(item.epsjb)
          }
          else if (e.key === 'epskcjb') {
            e.permainzb2 = numberTrans(item.epskcjb)
          }
          else if (e.key === 'epsxs') {
            e.permainzb2 = numberTrans(item.epsxs)
          }
          else if (e.key === 'bps') {
            e.permainzb2 = numberTrans(item.bps)
          }
          else if (e.key === 'mgzbgj') {
            e.permainzb2 = numberTrans(item.mgzbgj)
          }
          else if (e.key === 'mgwfplr') {
            e.permainzb2 = numberTrans(item.mgwfplr)
          }
          else if (e.key === 'mgjyxjje') {
            e.permainzb2 = numberTrans(item.mgjyxjje)
          }
        }
        if (i === 3) {
          if (e.key === 'epsjb') {
            e.permainzb3 = numberTrans(item.epsjb)
          }
          else if (e.key === 'epskcjb') {
            e.permainzb3 = numberTrans(item.epskcjb)
          }
          else if (e.key === 'epsxs') {
            e.permainzb3 = numberTrans(item.epsxs)
          }
          else if (e.key === 'bps') {
            e.permainzb3 = numberTrans(item.bps)
          }
          else if (e.key === 'mgzbgj') {
            e.permainzb3 = numberTrans(item.mgzbgj)
          }
          else if (e.key === 'mgwfplr') {
            e.permainzb3 = numberTrans(item.mgwfplr)
          }
          else if (e.key === 'mgjyxjje') {
            e.permainzb3 = numberTrans(item.mgjyxjje)
          }
        }

      })
    }
  })
  return originData
}