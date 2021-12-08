import React, { ReactNode } from "react";
import { IZcfzsInfo } from "../../../../container/IntellAnalysis/model/analysis";
import { numberTrans } from "../utils/numberTrans";

interface IBalanceSheetOriginDataProps {
  item?: ReactNode
  key?: string
  balancesheet0?: string
  balancesheet1?: string
  balancesheet2?: string
  balancesheet3?: string
}


export const BalanceSheetReportData = (store: IZcfzsInfo[]) => {
  const originData: IBalanceSheetOriginDataProps[] = []
  originData.push(
    // 流动资产
    {
      item: <div style={{ fontSize: '18px' }}><strong>流动资产</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 货币资金</ div>,
      key: 'monetaryfunds'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 交易性金融资产</ div>,
      key: 'tradeFinassetNotfvtpl'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应收票据及应收款帐</ div>,
      key: 'noteAccountsRece'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应收款项融资</ div>,
      key: 'financeRece'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 预付款项</ div>,
      key: 'prepayment'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 其他应收款合计</ div>,
      key: 'totalOtherRece'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 存货</ div>,
      key: 'inventory'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 持有待售资产</ div>,
      key: 'holdsaleAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 其他流动资产</ div>,
      key: 'otherCurrentAsset'
    },
    // 流动资产合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>流动资产合计</strong></div>,
      key: 'totalCurrentAssets'
    },
    // 非流动资产
    {
      item: <div style={{ fontSize: '18px' }}><strong>非流动资产</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 固定资产</ div>,
      key: 'fixedAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 在建工程</ div>,
      key: 'cip'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 使用权资产</ div>,
      key: 'userightAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 无形资产</ div>,
      key: 'intangibleAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 商誉</ div>,
      key: 'goodwill'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 长期待摊费用</ div>,
      key: 'longPrepaidExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 递延所得税资产</ div>,
      key: 'deferTaxAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 其他非流动资产</ div>,
      key: 'otherNoncurrentAsset'
    },
    // 非流动资产合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>非流动资产合计</strong></div>,
      key: 'totalNoncurrentAssets'
    },
    // 资产总计
    {
      item: <div style={{ fontSize: '18px' }}><strong>资产总计</strong></div>,
      key: 'totalAssets'
    },
    // 流动负债
    {
      item: <div style={{ fontSize: '18px' }}><strong>流动负债</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应付票据及应付账款</ div>,
      key: 'noteAccountsPayable'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 其中：应付账款</ div>,
      key: 'accountsPayable'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 合同负债</ div>,
      key: 'contractLiab'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应付职工薪酬</ div>,
      key: 'staffSalaryPayable'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 应交税费</ div>,
      key: 'taxPayable'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 持有待售负债</ div>,
      key: 'holdsaleLiab'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 其他流动负债</ div>,
      key: 'otherCurrentLiab'
    },
    // 流动负债合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>流动负债合计</strong></div>,
      key: 'totalCurrentLiab'
    },
    // 非流动负债
    {
      item: <div style={{ fontSize: '18px' }}><strong>非流动负债</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 租赁负债</ div>,
      key: 'leaseLiab'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 预计负债</ div>,
      key: 'predictLiab'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 递延收益</ div>,
      key: 'deferIncome'
    },
    // 非流动负债合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>非流动负债合计</strong></div>,
      key: 'totalNoncurrentLiab'
    },
    // 负债合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>负债合计</strong></div>,
      key: 'totalLiabilities'
    },
    // 所有者权益(或股东权益)
    {
      item: <div style={{ fontSize: '18px' }}><strong>所有者权益（或股东权益）</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 实收资本（或股本）</ div>,
      key: 'shareCapital'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 资本公积</ div>,
      key: 'capitalReserve'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 盈余公积</ div>,
      key: 'surplusReserve'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 未分配利润</ div>,
      key: 'unassignRpofit'
    },
    // 归属于母公司股东权益总计
    {
      item: <div style={{ fontSize: '18px' }}><strong>归属于母公司股东权益总计</strong></div>,
      key: 'totalParentEquity'
    },
    // 股东权益合计
    {
      item: <div style={{ fontSize: '18px' }}><strong>股东权益合计</strong></div>,
      key: 'totalEquity'
    },
    // 负债和股东权益总计
    {
      item: <div style={{ fontSize: '18px' }}><strong>负债和股东权益总计</strong></div>,
      key: 'totalLiabEquity'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 审计意见（境内）</ div>,
      key: 'opinionType'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.map((item, i) => {
    // eslint-disable-next-line array-callback-return
    originData.map(e => {
      if (i === 0) {
        if (e.key === 'monetaryfunds') {
          e.balancesheet0 = numberTrans(item.monetaryfunds)
        }
        else if (e.key === 'tradeFinassetNotfvtpl') {
          e.balancesheet0 = numberTrans(item.tradeFinassetNotfvtpl)
        }
        else if (e.key === 'noteAccountsRece') {
          e.balancesheet0 = numberTrans(item.noteAccountsRece)
        }
        else if (e.key === 'financeRece') {
          e.balancesheet0 = numberTrans(item.financeRece)
        }
        else if (e.key === 'prepayment') {
          e.balancesheet0 = numberTrans(item.prepayment)
        }
        else if (e.key === 'totalOtherRece') {
          e.balancesheet0 = numberTrans(item.totalOtherRece)
        }
        else if (e.key === 'inventory') {
          e.balancesheet0 = numberTrans(item.inventory)
        }
        else if (e.key === 'holdsaleAsset') {
          e.balancesheet0 = numberTrans(item.holdsaleAsset)
        }
        else if (e.key === 'otherCurrentAsset') {
          e.balancesheet0 = numberTrans(item.otherCurrentAsset)
        }
        else if (e.key === 'totalCurrentAssets') {
          e.balancesheet0 = numberTrans(item.totalCurrentAssets)
        }
        else if (e.key === 'fixedAsset') {
          e.balancesheet0 = numberTrans(item.fixedAsset)
        }
        else if (e.key === 'cip') {
          e.balancesheet0 = numberTrans(item.cip)
        }
        else if (e.key === 'userightAsset') {
          e.balancesheet0 = numberTrans(item.userightAsset)
        }
        else if (e.key === 'intangibleAsset') {
          e.balancesheet0 = numberTrans(item.intangibleAsset)
        }
        else if (e.key === 'goodwill') {
          e.balancesheet0 = numberTrans(item.goodwill)
        }
        else if (e.key === 'longPrepaidExpense') {
          e.balancesheet0 = numberTrans(item.longPrepaidExpense)
        }
        else if (e.key === 'deferTaxAsset') {
          e.balancesheet0 = numberTrans(item.deferTaxAsset)
        }
        else if (e.key === 'otherNoncurrentAsset') {
          e.balancesheet0 = numberTrans(item.otherNoncurrentAsset)
        }
        else if (e.key === 'totalNoncurrentAssets') {
          e.balancesheet0 = numberTrans(item.totalNoncurrentAssets)
        }
        else if (e.key === 'totalAssets') {
          e.balancesheet0 = numberTrans(item.totalAssets)
        }
        else if (e.key === 'noteAccountsPayable') {
          e.balancesheet0 = numberTrans(item.noteAccountsPayable)
        }
        else if (e.key === 'accountsPayable') {
          e.balancesheet0 = numberTrans(item.accountsPayable)
        }
        else if (e.key === 'contractLiab') {
          e.balancesheet0 = numberTrans(item.contractLiab)
        }
        else if (e.key === 'staffSalaryPayable') {
          e.balancesheet0 = numberTrans(item.staffSalaryPayable)
        }
        else if (e.key === 'taxPayable') {
          e.balancesheet0 = numberTrans(item.taxPayable)
        }
        else if (e.key === 'holdsaleLiab') {
          e.balancesheet0 = numberTrans(item.holdsaleLiab)
        }
        else if (e.key === 'otherCurrentLiab') {
          e.balancesheet0 = numberTrans(item.otherCurrentLiab)
        }
        else if (e.key === 'totalCurrentLiab') {
          e.balancesheet0 = numberTrans(item.totalCurrentLiab)
        }
        else if (e.key === 'leaseLiab') {
          e.balancesheet0 = numberTrans(item.leaseLiab)
        }
        else if (e.key === 'predictLiab') {
          e.balancesheet0 = numberTrans(item.predictLiab)
        }
        else if (e.key === 'deferIncome') {
          e.balancesheet0 = numberTrans(item.deferIncome)
        }
        else if (e.key === 'totalNoncurrentLiab') {
          e.balancesheet0 = numberTrans(item.totalNoncurrentLiab)
        }
        else if (e.key === 'totalLiabilities') {
          e.balancesheet0 = numberTrans(item.totalLiabilities)
        }
        else if (e.key === 'shareCapital') {
          e.balancesheet0 = numberTrans(item.shareCapital)
        }
        else if (e.key === 'capitalReserve') {
          e.balancesheet0 = numberTrans(item.capitalReserve)
        }
        else if (e.key === 'surplusReserve') {
          e.balancesheet0 = numberTrans(item.surplusReserve)
        }
        else if (e.key === 'unassignRpofit') {
          e.balancesheet0 = numberTrans(item.unassignRpofit)
        }
        else if (e.key === 'totalParentEquity') {
          e.balancesheet0 = numberTrans(item.totalParentEquity)
        }
        else if (e.key === 'totalEquity') {
          e.balancesheet0 = numberTrans(item.totalEquity)
        }
        else if (e.key === 'totalLiabEquity') {
          e.balancesheet0 = numberTrans(item.totalLiabEquity)
        }
        else if (e.key === 'opinionType') {
          e.balancesheet0 = numberTrans(item.opinionType)
        }
      }
      if (i === 1) {
        if (e.key === 'monetaryfunds') {
          e.balancesheet1 = numberTrans(item.monetaryfunds)
        }
        else if (e.key === 'tradeFinassetNotfvtpl') {
          e.balancesheet1 = numberTrans(item.tradeFinassetNotfvtpl)
        }
        else if (e.key === 'noteAccountsRece') {
          e.balancesheet1 = numberTrans(item.noteAccountsRece)
        }
        else if (e.key === 'financeRece') {
          e.balancesheet1 = numberTrans(item.financeRece)
        }
        else if (e.key === 'prepayment') {
          e.balancesheet1 = numberTrans(item.prepayment)
        }
        else if (e.key === 'totalOtherRece') {
          e.balancesheet1 = numberTrans(item.totalOtherRece)
        }
        else if (e.key === 'inventory') {
          e.balancesheet1 = numberTrans(item.inventory)
        }
        else if (e.key === 'holdsaleAsset') {
          e.balancesheet1 = numberTrans(item.holdsaleAsset)
        }
        else if (e.key === 'otherCurrentAsset') {
          e.balancesheet1 = numberTrans(item.otherCurrentAsset)
        }
        else if (e.key === 'totalCurrentAssets') {
          e.balancesheet1 = numberTrans(item.totalCurrentAssets)
        }
        else if (e.key === 'fixedAsset') {
          e.balancesheet1 = numberTrans(item.fixedAsset)
        }
        else if (e.key === 'cip') {
          e.balancesheet1 = numberTrans(item.cip)
        }
        else if (e.key === 'userightAsset') {
          e.balancesheet1 = numberTrans(item.userightAsset)
        }
        else if (e.key === 'intangibleAsset') {
          e.balancesheet1 = numberTrans(item.intangibleAsset)
        }
        else if (e.key === 'goodwill') {
          e.balancesheet1 = numberTrans(item.goodwill)
        }
        else if (e.key === 'longPrepaidExpense') {
          e.balancesheet1 = numberTrans(item.longPrepaidExpense)
        }
        else if (e.key === 'deferTaxAsset') {
          e.balancesheet1 = numberTrans(item.deferTaxAsset)
        }
        else if (e.key === 'otherNoncurrentAsset') {
          e.balancesheet1 = numberTrans(item.otherNoncurrentAsset)
        }
        else if (e.key === 'totalNoncurrentAssets') {
          e.balancesheet1 = numberTrans(item.totalNoncurrentAssets)
        }
        else if (e.key === 'totalAssets') {
          e.balancesheet1 = numberTrans(item.totalAssets)
        }
        else if (e.key === 'noteAccountsPayable') {
          e.balancesheet1 = numberTrans(item.noteAccountsPayable)
        }
        else if (e.key === 'accountsPayable') {
          e.balancesheet1 = numberTrans(item.accountsPayable)
        }
        else if (e.key === 'contractLiab') {
          e.balancesheet1 = numberTrans(item.contractLiab)
        }
        else if (e.key === 'staffSalaryPayable') {
          e.balancesheet1 = numberTrans(item.staffSalaryPayable)
        }
        else if (e.key === 'taxPayable') {
          e.balancesheet1 = numberTrans(item.taxPayable)
        }
        else if (e.key === 'holdsaleLiab') {
          e.balancesheet1 = numberTrans(item.holdsaleLiab)
        }
        else if (e.key === 'otherCurrentLiab') {
          e.balancesheet1 = numberTrans(item.otherCurrentLiab)
        }
        else if (e.key === 'totalCurrentLiab') {
          e.balancesheet1 = numberTrans(item.totalCurrentLiab)
        }
        else if (e.key === 'leaseLiab') {
          e.balancesheet1 = numberTrans(item.leaseLiab)
        }
        else if (e.key === 'predictLiab') {
          e.balancesheet1 = numberTrans(item.predictLiab)
        }
        else if (e.key === 'deferIncome') {
          e.balancesheet1 = numberTrans(item.deferIncome)
        }
        else if (e.key === 'totalNoncurrentLiab') {
          e.balancesheet1 = numberTrans(item.totalNoncurrentLiab)
        }
        else if (e.key === 'totalLiabilities') {
          e.balancesheet1 = numberTrans(item.totalLiabilities)
        }
        else if (e.key === 'shareCapital') {
          e.balancesheet1 = numberTrans(item.shareCapital)
        }
        else if (e.key === 'capitalReserve') {
          e.balancesheet1 = numberTrans(item.capitalReserve)
        }
        else if (e.key === 'surplusReserve') {
          e.balancesheet1 = numberTrans(item.surplusReserve)
        }
        else if (e.key === 'unassignRpofit') {
          e.balancesheet1 = numberTrans(item.unassignRpofit)
        }
        else if (e.key === 'totalParentEquity') {
          e.balancesheet1 = numberTrans(item.totalParentEquity)
        }
        else if (e.key === 'totalEquity') {
          e.balancesheet1 = numberTrans(item.totalEquity)
        }
        else if (e.key === 'totalLiabEquity') {
          e.balancesheet1 = numberTrans(item.totalLiabEquity)
        }
        else if (e.key === 'opinionType') {
          e.balancesheet1 = numberTrans(item.opinionType)
        }
      }
      if (i === 2) {
        if (e.key === 'monetaryfunds') {
          e.balancesheet2 = numberTrans(item.monetaryfunds)
        }
        else if (e.key === 'tradeFinassetNotfvtpl') {
          e.balancesheet2 = numberTrans(item.tradeFinassetNotfvtpl)
        }
        else if (e.key === 'noteAccountsRece') {
          e.balancesheet2 = numberTrans(item.noteAccountsRece)
        }
        else if (e.key === 'financeRece') {
          e.balancesheet2 = numberTrans(item.financeRece)
        }
        else if (e.key === 'prepayment') {
          e.balancesheet2 = numberTrans(item.prepayment)
        }
        else if (e.key === 'totalOtherRece') {
          e.balancesheet2 = numberTrans(item.totalOtherRece)
        }
        else if (e.key === 'inventory') {
          e.balancesheet2 = numberTrans(item.inventory)
        }
        else if (e.key === 'holdsaleAsset') {
          e.balancesheet2 = numberTrans(item.holdsaleAsset)
        }
        else if (e.key === 'otherCurrentAsset') {
          e.balancesheet2 = numberTrans(item.otherCurrentAsset)
        }
        else if (e.key === 'totalCurrentAssets') {
          e.balancesheet2 = numberTrans(item.totalCurrentAssets)
        }
        else if (e.key === 'fixedAsset') {
          e.balancesheet2 = numberTrans(item.fixedAsset)
        }
        else if (e.key === 'cip') {
          e.balancesheet2 = numberTrans(item.cip)
        }
        else if (e.key === 'userightAsset') {
          e.balancesheet2 = numberTrans(item.userightAsset)
        }
        else if (e.key === 'intangibleAsset') {
          e.balancesheet2 = numberTrans(item.intangibleAsset)
        }
        else if (e.key === 'goodwill') {
          e.balancesheet2 = numberTrans(item.goodwill)
        }
        else if (e.key === 'longPrepaidExpense') {
          e.balancesheet2 = numberTrans(item.longPrepaidExpense)
        }
        else if (e.key === 'deferTaxAsset') {
          e.balancesheet2 = numberTrans(item.deferTaxAsset)
        }
        else if (e.key === 'otherNoncurrentAsset') {
          e.balancesheet2 = numberTrans(item.otherNoncurrentAsset)
        }
        else if (e.key === 'totalNoncurrentAssets') {
          e.balancesheet2 = numberTrans(item.totalNoncurrentAssets)
        }
        else if (e.key === 'totalAssets') {
          e.balancesheet2 = numberTrans(item.totalAssets)
        }
        else if (e.key === 'noteAccountsPayable') {
          e.balancesheet2 = numberTrans(item.noteAccountsPayable)
        }
        else if (e.key === 'accountsPayable') {
          e.balancesheet2 = numberTrans(item.accountsPayable)
        }
        else if (e.key === 'contractLiab') {
          e.balancesheet2 = numberTrans(item.contractLiab)
        }
        else if (e.key === 'staffSalaryPayable') {
          e.balancesheet2 = numberTrans(item.staffSalaryPayable)
        }
        else if (e.key === 'taxPayable') {
          e.balancesheet2 = numberTrans(item.taxPayable)
        }
        else if (e.key === 'holdsaleLiab') {
          e.balancesheet2 = numberTrans(item.holdsaleLiab)
        }
        else if (e.key === 'otherCurrentLiab') {
          e.balancesheet2 = numberTrans(item.otherCurrentLiab)
        }
        else if (e.key === 'totalCurrentLiab') {
          e.balancesheet2 = numberTrans(item.totalCurrentLiab)
        }
        else if (e.key === 'leaseLiab') {
          e.balancesheet2 = numberTrans(item.leaseLiab)
        }
        else if (e.key === 'predictLiab') {
          e.balancesheet2 = numberTrans(item.predictLiab)
        }
        else if (e.key === 'deferIncome') {
          e.balancesheet2 = numberTrans(item.deferIncome)
        }
        else if (e.key === 'totalNoncurrentLiab') {
          e.balancesheet2 = numberTrans(item.totalNoncurrentLiab)
        }
        else if (e.key === 'totalLiabilities') {
          e.balancesheet2 = numberTrans(item.totalLiabilities)
        }
        else if (e.key === 'shareCapital') {
          e.balancesheet2 = numberTrans(item.shareCapital)
        }
        else if (e.key === 'capitalReserve') {
          e.balancesheet2 = numberTrans(item.capitalReserve)
        }
        else if (e.key === 'surplusReserve') {
          e.balancesheet2 = numberTrans(item.surplusReserve)
        }
        else if (e.key === 'unassignRpofit') {
          e.balancesheet2 = numberTrans(item.unassignRpofit)
        }
        else if (e.key === 'totalParentEquity') {
          e.balancesheet2 = numberTrans(item.totalParentEquity)
        }
        else if (e.key === 'totalEquity') {
          e.balancesheet2 = numberTrans(item.totalEquity)
        }
        else if (e.key === 'totalLiabEquity') {
          e.balancesheet2 = numberTrans(item.totalLiabEquity)
        }
        else if (e.key === 'opinionType') {
          e.balancesheet2 = numberTrans(item.opinionType)
        }
      }
      if (i === 3) {
        if (e.key === 'monetaryfunds') {
          e.balancesheet3 = numberTrans(item.monetaryfunds)
        }
        else if (e.key === 'tradeFinassetNotfvtpl') {
          e.balancesheet3 = numberTrans(item.tradeFinassetNotfvtpl)
        }
        else if (e.key === 'noteAccountsRece') {
          e.balancesheet3 = numberTrans(item.noteAccountsRece)
        }
        else if (e.key === 'financeRece') {
          e.balancesheet3 = numberTrans(item.financeRece)
        }
        else if (e.key === 'prepayment') {
          e.balancesheet3 = numberTrans(item.prepayment)
        }
        else if (e.key === 'totalOtherRece') {
          e.balancesheet3 = numberTrans(item.totalOtherRece)
        }
        else if (e.key === 'inventory') {
          e.balancesheet3 = numberTrans(item.inventory)
        }
        else if (e.key === 'holdsaleAsset') {
          e.balancesheet3 = numberTrans(item.holdsaleAsset)
        }
        else if (e.key === 'otherCurrentAsset') {
          e.balancesheet3 = numberTrans(item.otherCurrentAsset)
        }
        else if (e.key === 'totalCurrentAssets') {
          e.balancesheet3 = numberTrans(item.totalCurrentAssets)
        }
        else if (e.key === 'fixedAsset') {
          e.balancesheet3 = numberTrans(item.fixedAsset)
        }
        else if (e.key === 'cip') {
          e.balancesheet3 = numberTrans(item.cip)
        }
        else if (e.key === 'userightAsset') {
          e.balancesheet3 = numberTrans(item.userightAsset)
        }
        else if (e.key === 'intangibleAsset') {
          e.balancesheet3 = numberTrans(item.intangibleAsset)
        }
        else if (e.key === 'goodwill') {
          e.balancesheet3 = numberTrans(item.goodwill)
        }
        else if (e.key === 'longPrepaidExpense') {
          e.balancesheet3 = numberTrans(item.longPrepaidExpense)
        }
        else if (e.key === 'deferTaxAsset') {
          e.balancesheet3 = numberTrans(item.deferTaxAsset)
        }
        else if (e.key === 'otherNoncurrentAsset') {
          e.balancesheet3 = numberTrans(item.otherNoncurrentAsset)
        }
        else if (e.key === 'totalNoncurrentAssets') {
          e.balancesheet3 = numberTrans(item.totalNoncurrentAssets)
        }
        else if (e.key === 'totalAssets') {
          e.balancesheet3 = numberTrans(item.totalAssets)
        }
        else if (e.key === 'noteAccountsPayable') {
          e.balancesheet3 = numberTrans(item.noteAccountsPayable)
        }
        else if (e.key === 'accountsPayable') {
          e.balancesheet3 = numberTrans(item.accountsPayable)
        }
        else if (e.key === 'contractLiab') {
          e.balancesheet3 = numberTrans(item.contractLiab)
        }
        else if (e.key === 'staffSalaryPayable') {
          e.balancesheet3 = numberTrans(item.staffSalaryPayable)
        }
        else if (e.key === 'taxPayable') {
          e.balancesheet3 = numberTrans(item.taxPayable)
        }
        else if (e.key === 'holdsaleLiab') {
          e.balancesheet3 = numberTrans(item.holdsaleLiab)
        }
        else if (e.key === 'otherCurrentLiab') {
          e.balancesheet3 = numberTrans(item.otherCurrentLiab)
        }
        else if (e.key === 'totalCurrentLiab') {
          e.balancesheet3 = numberTrans(item.totalCurrentLiab)
        }
        else if (e.key === 'leaseLiab') {
          e.balancesheet3 = numberTrans(item.leaseLiab)
        }
        else if (e.key === 'predictLiab') {
          e.balancesheet3 = numberTrans(item.predictLiab)
        }
        else if (e.key === 'deferIncome') {
          e.balancesheet3 = numberTrans(item.deferIncome)
        }
        else if (e.key === 'totalNoncurrentLiab') {
          e.balancesheet3 = numberTrans(item.totalNoncurrentLiab)
        }
        else if (e.key === 'totalLiabilities') {
          e.balancesheet3 = numberTrans(item.totalLiabilities)
        }
        else if (e.key === 'shareCapital') {
          e.balancesheet3 = numberTrans(item.shareCapital)
        }
        else if (e.key === 'capitalReserve') {
          e.balancesheet3 = numberTrans(item.capitalReserve)
        }
        else if (e.key === 'surplusReserve') {
          e.balancesheet3 = numberTrans(item.surplusReserve)
        }
        else if (e.key === 'unassignRpofit') {
          e.balancesheet3 = numberTrans(item.unassignRpofit)
        }
        else if (e.key === 'totalParentEquity') {
          e.balancesheet3 = numberTrans(item.totalParentEquity)
        }
        else if (e.key === 'totalEquity') {
          e.balancesheet3 = numberTrans(item.totalEquity)
        }
        else if (e.key === 'totalLiabEquity') {
          e.balancesheet3 = numberTrans(item.totalLiabEquity)
        }
        else if (e.key === 'opinionType') {
          e.balancesheet3 = numberTrans(item.opinionType)
        }
      }

    })
  })
  return originData
}