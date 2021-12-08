/* eslint-disable array-callback-return */
import React, { ReactNode } from "react";
import { IProfilesInfo } from "../../../../container/IntellAnalysis/model/analysis";
import { numberTrans } from "../utils/numberTrans";

interface IProfitOriginDataProps {
  item?: ReactNode
  key?: string
  profit0?: string
  profit1?: string
  profit2?: string
  profit3?: string
}

export const ProfitReportData = (store: IProfilesInfo[]) => {
  const originData: IProfitOriginDataProps[] = [];
  originData.push(
    // 营业总收入
    {
      item: <div style={{ fontSize: '18px' }}><strong>营业总收入</strong></div>,
      key: 'totalCompreIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 营业收入</ div>,
      key: 'operateIncome'
    },
    {
      item: <div style={{ fontSize: '18px' }}><strong>营业总成本</strong></div>,
      key: 'totalOperateCost'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>营业成本</div>,
      key: 'totalOperateCost'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>税金及附加</div>,
      key: 'operateTaxAdd'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>销售费用</div>,
      key: 'saleExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>管理费用</div>,
      key: 'manageExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>研发费用</div>,
      key: 'researchExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>财务费用</div>,
      key: 'financeExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>其中：利息费用</div>,
      key: 'feInterestExpense'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '25px' }}>利息收入</div>,
      key: 'feInterestIncome'
    },
    // 其他经营收益
    {
      item: <div style={{ fontSize: '18px' }}><strong>其他经营收益</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>加：投资收益</div>,
      key: 'investIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>资产处置收益</div>,
      key: 'assetDisposalIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>资产减值损失（新）</div>,
      key: 'assetImpairmentIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>信用减值损失（新）</div>,
      key: 'creditImpairmentIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>其他收益</div>,
      key: 'otherIncome'
    },
    // 营业利润
    {
      item: <div style={{ fontSize: '18px' }}><strong>营业利润</strong></div>,
      key: 'operateProfit'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>加：营业外收入</div>,
      key: 'nonbusinessIncome'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>减：营业外支出</div>,
      key: 'nonbusinessExpense'
    },
    // 利润总额
    {
      item: <div style={{ fontSize: '18px' }}><strong>利润总额</strong></div>,
      key: 'totalProfit'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>减：所得税</div>,
      key: 'incomeTax'
    },
    // 净利润
    {
      item: <div style={{ fontSize: '18px' }}><strong>净利润</strong></div>,
      key: 'netprofit'
    },
    // --> (一)按经营持续性分类
    {
      item: <div style={{ fontSize: '18px' }}><strong>（一）按经营持续性分类</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>持续经营净利润</div>,
      key: 'continuedNetprofit'
    },
    // --> (二)按所有权归属分类
    {
      item: <div style={{ fontSize: '18px' }}><strong>（二）按所有权归属分类</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>归属于母公司股东的净利润</div>,
      key: 'parentNetprofit'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>扣除非经常性损益后的净利润</div>,
      key: 'deductParentNetprofit'
    },
    // 每股收益
    {
      item: <div style={{ fontSize: '18px' }}><strong>每股收益</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>基本每股收益</div>,
      key: 'basicEps'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>稀释每股收益</div>,
      key: 'dilutedEps'
    },
    // 综合收益总额
    {
      item: <div style={{ fontSize: '18px' }}><strong>综合收益总额</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>归属于母公司股东的综合收益总额</div>,
      key: 'parentTci'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>审计意见（境内）</div>,
      key: 'opinionType'
    },
  )
  store.map((item, i) => {
    if (item.reportDate) {
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'totalCompreIncome') {
            e.profit0 = numberTrans(item.totalCompreIncome)
          }
          else if (e.key === 'operateIncome') {
            e.profit0 = numberTrans(item.operateIncome)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit0 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit0 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'operateTaxAdd') {
            e.profit0 = numberTrans(item.operateTaxAdd)
          }
          else if (e.key === 'saleExpense') {
            e.profit0 = numberTrans(item.saleExpense)
          }
          else if (e.key === 'manageExpense') {
            e.profit0 = numberTrans(item.manageExpense)
          }
          else if (e.key === 'researchExpense') {
            e.profit0 = numberTrans(item.researchExpense)
          }
          else if (e.key === 'financeExpense') {
            e.profit0 = numberTrans(item.financeExpense)
          }
          else if (e.key === 'feInterestExpense') {
            e.profit0 = numberTrans(item.feInterestExpense)
          }
          else if (e.key === 'feInterestIncome') {
            e.profit0 = numberTrans(item.feInterestIncome)
          }
          else if (e.key === 'investIncome') {
            e.profit0 = numberTrans(item.investIncome)
          }
          else if (e.key === 'assetDisposalIncome') {
            e.profit0 = numberTrans(item.assetDisposalIncome)
          }
          else if (e.key === 'assetImpairmentIncome') {
            e.profit0 = numberTrans(item.assetImpairmentIncome)
          }
          else if (e.key === 'creditImpairmentIncome') {
            e.profit0 = numberTrans(item.creditImpairmentIncome)
          }
          else if (e.key === 'otherIncome') {
            e.profit0 = numberTrans(item.otherIncome)
          }
          else if (e.key === 'operateProfit') {
            e.profit0 = numberTrans(item.operateProfit)
          }
          else if (e.key === 'nonbusinessIncome') {
            e.profit0 = numberTrans(item.nonbusinessIncome)
          }
          else if (e.key === 'nonbusinessExpense') {
            e.profit0 = numberTrans(item.nonbusinessExpense)
          }
          else if (e.key === 'totalProfit') {
            e.profit0 = numberTrans(item.totalProfit)
          }
          else if (e.key === 'incomeTax') {
            e.profit0 = numberTrans(item.incomeTax)
          }
          else if (e.key === 'netprofit') {
            e.profit0 = numberTrans(item.netprofit)
          }
          else if (e.key === 'continuedNetprofit') {
            e.profit0 = numberTrans(item.continuedNetprofit)
          }
          else if (e.key === 'parentNetprofit') {
            e.profit0 = numberTrans(item.parentNetprofit)
          }
          else if (e.key === 'deductParentNetprofit') {
            e.profit0 = numberTrans(item.deductParentNetprofit)
          }
          else if (e.key === 'basicEps') {
            e.profit0 = numberTrans(item.basicEps)
          }
          else if (e.key === 'dilutedEps') {
            e.profit0 = numberTrans(item.dilutedEps)
          }
          else if (e.key === 'parentTci') {
            e.profit0 = numberTrans(item.parentTci)
          }
          else if (e.key === 'opinionType') {
            e.profit0 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 1) {
          if (e.key === 'totalCompreIncome') {
            e.profit1 = numberTrans(item.totalCompreIncome)
          }
          else if (e.key === 'operateIncome') {
            e.profit1 = numberTrans(item.operateIncome)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit1 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit1 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'operateTaxAdd') {
            e.profit1 = numberTrans(item.operateTaxAdd)
          }
          else if (e.key === 'saleExpense') {
            e.profit1 = numberTrans(item.saleExpense)
          }
          else if (e.key === 'manageExpense') {
            e.profit1 = numberTrans(item.manageExpense)
          }
          else if (e.key === 'researchExpense') {
            e.profit1 = numberTrans(item.researchExpense)
          }
          else if (e.key === 'financeExpense') {
            e.profit1 = numberTrans(item.financeExpense)
          }
          else if (e.key === 'feInterestExpense') {
            e.profit1 = numberTrans(item.feInterestExpense)
          }
          else if (e.key === 'feInterestIncome') {
            e.profit1 = numberTrans(item.feInterestIncome)
          }
          else if (e.key === 'investIncome') {
            e.profit1 = numberTrans(item.investIncome)
          }
          else if (e.key === 'assetDisposalIncome') {
            e.profit1 = numberTrans(item.assetDisposalIncome)
          }
          else if (e.key === 'assetImpairmentIncome') {
            e.profit1 = numberTrans(item.assetImpairmentIncome)
          }
          else if (e.key === 'creditImpairmentIncome') {
            e.profit1 = numberTrans(item.creditImpairmentIncome)
          }
          else if (e.key === 'otherIncome') {
            e.profit1 = numberTrans(item.otherIncome)
          }
          else if (e.key === 'operateProfit') {
            e.profit1 = numberTrans(item.operateProfit)
          }
          else if (e.key === 'nonbusinessIncome') {
            e.profit1 = numberTrans(item.nonbusinessIncome)
          }
          else if (e.key === 'nonbusinessExpense') {
            e.profit1 = numberTrans(item.nonbusinessExpense)
          }
          else if (e.key === 'totalProfit') {
            e.profit1 = numberTrans(item.totalProfit)
          }
          else if (e.key === 'incomeTax') {
            e.profit1 = numberTrans(item.incomeTax)
          }
          else if (e.key === 'netprofit') {
            e.profit1 = numberTrans(item.netprofit)
          }
          else if (e.key === 'continuedNetprofit') {
            e.profit1 = numberTrans(item.continuedNetprofit)
          }
          else if (e.key === 'parentNetprofit') {
            e.profit1 = numberTrans(item.parentNetprofit)
          }
          else if (e.key === 'deductParentNetprofit') {
            e.profit1 = numberTrans(item.deductParentNetprofit)
          }
          else if (e.key === 'basicEps') {
            e.profit1 = numberTrans(item.basicEps)
          }
          else if (e.key === 'dilutedEps') {
            e.profit1 = numberTrans(item.dilutedEps)
          }
          else if (e.key === 'parentTci') {
            e.profit1 = numberTrans(item.parentTci)
          }
          else if (e.key === 'opinionType') {
            e.profit1 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 2) {
          if (e.key === 'totalCompreIncome') {
            e.profit2 = numberTrans(item.totalCompreIncome)
          }
          else if (e.key === 'operateIncome') {
            e.profit2 = numberTrans(item.operateIncome)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit2 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit2 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'operateTaxAdd') {
            e.profit2 = numberTrans(item.operateTaxAdd)
          }
          else if (e.key === 'saleExpense') {
            e.profit2 = numberTrans(item.saleExpense)
          }
          else if (e.key === 'manageExpense') {
            e.profit2 = numberTrans(item.manageExpense)
          }
          else if (e.key === 'researchExpense') {
            e.profit2 = numberTrans(item.researchExpense)
          }
          else if (e.key === 'financeExpense') {
            e.profit2 = numberTrans(item.financeExpense)
          }
          else if (e.key === 'feInterestExpense') {
            e.profit2 = numberTrans(item.feInterestExpense)
          }
          else if (e.key === 'feInterestIncome') {
            e.profit2 = numberTrans(item.feInterestIncome)
          }
          else if (e.key === 'investIncome') {
            e.profit2 = numberTrans(item.investIncome)
          }
          else if (e.key === 'assetDisposalIncome') {
            e.profit2 = numberTrans(item.assetDisposalIncome)
          }
          else if (e.key === 'assetImpairmentIncome') {
            e.profit2 = numberTrans(item.assetImpairmentIncome)
          }
          else if (e.key === 'creditImpairmentIncome') {
            e.profit2 = numberTrans(item.creditImpairmentIncome)
          }
          else if (e.key === 'otherIncome') {
            e.profit2 = numberTrans(item.otherIncome)
          }
          else if (e.key === 'operateProfit') {
            e.profit2 = numberTrans(item.operateProfit)
          }
          else if (e.key === 'nonbusinessIncome') {
            e.profit2 = numberTrans(item.nonbusinessIncome)
          }
          else if (e.key === 'nonbusinessExpense') {
            e.profit2 = numberTrans(item.nonbusinessExpense)
          }
          else if (e.key === 'totalProfit') {
            e.profit2 = numberTrans(item.totalProfit)
          }
          else if (e.key === 'incomeTax') {
            e.profit2 = numberTrans(item.incomeTax)
          }
          else if (e.key === 'netprofit') {
            e.profit2 = numberTrans(item.netprofit)
          }
          else if (e.key === 'continuedNetprofit') {
            e.profit2 = numberTrans(item.continuedNetprofit)
          }
          else if (e.key === 'parentNetprofit') {
            e.profit2 = numberTrans(item.parentNetprofit)
          }
          else if (e.key === 'deductParentNetprofit') {
            e.profit2 = numberTrans(item.deductParentNetprofit)
          }
          else if (e.key === 'basicEps') {
            e.profit2 = numberTrans(item.basicEps)
          }
          else if (e.key === 'dilutedEps') {
            e.profit2 = numberTrans(item.dilutedEps)
          }
          else if (e.key === 'parentTci') {
            e.profit2 = numberTrans(item.parentTci)
          }
          else if (e.key === 'opinionType') {
            e.profit2 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 3) {
          if (e.key === 'totalCompreIncome') {
            e.profit3 = numberTrans(item.totalCompreIncome)
          }
          else if (e.key === 'operateIncome') {
            e.profit3 = numberTrans(item.operateIncome)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit3 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'totalOperateCost') {
            e.profit3 = numberTrans(item.totalOperateCost)
          }
          else if (e.key === 'operateTaxAdd') {
            e.profit3 = numberTrans(item.operateTaxAdd)
          }
          else if (e.key === 'saleExpense') {
            e.profit3 = numberTrans(item.saleExpense)
          }
          else if (e.key === 'manageExpense') {
            e.profit3 = numberTrans(item.manageExpense)
          }
          else if (e.key === 'researchExpense') {
            e.profit3 = numberTrans(item.researchExpense)
          }
          else if (e.key === 'financeExpense') {
            e.profit3 = numberTrans(item.financeExpense)
          }
          else if (e.key === 'feInterestExpense') {
            e.profit3 = numberTrans(item.feInterestExpense)
          }
          else if (e.key === 'feInterestIncome') {
            e.profit3 = numberTrans(item.feInterestIncome)
          }
          else if (e.key === 'investIncome') {
            e.profit3 = numberTrans(item.investIncome)
          }
          else if (e.key === 'assetDisposalIncome') {
            e.profit3 = numberTrans(item.assetDisposalIncome)
          }
          else if (e.key === 'assetImpairmentIncome') {
            e.profit3 = numberTrans(item.assetImpairmentIncome)
          }
          else if (e.key === 'creditImpairmentIncome') {
            e.profit3 = numberTrans(item.creditImpairmentIncome)
          }
          else if (e.key === 'otherIncome') {
            e.profit3 = numberTrans(item.otherIncome)
          }
          else if (e.key === 'operateProfit') {
            e.profit3 = numberTrans(item.operateProfit)
          }
          else if (e.key === 'nonbusinessIncome') {
            e.profit3 = numberTrans(item.nonbusinessIncome)
          }
          else if (e.key === 'nonbusinessExpense') {
            e.profit3 = numberTrans(item.nonbusinessExpense)
          }
          else if (e.key === 'totalProfit') {
            e.profit3 = numberTrans(item.totalProfit)
          }
          else if (e.key === 'incomeTax') {
            e.profit3 = numberTrans(item.incomeTax)
          }
          else if (e.key === 'netprofit') {
            e.profit3 = numberTrans(item.netprofit)
          }
          else if (e.key === 'continuedNetprofit') {
            e.profit3 = numberTrans(item.continuedNetprofit)
          }
          else if (e.key === 'parentNetprofit') {
            e.profit3 = numberTrans(item.parentNetprofit)
          }
          else if (e.key === 'deductParentNetprofit') {
            e.profit3 = numberTrans(item.deductParentNetprofit)
          }
          else if (e.key === 'basicEps') {
            e.profit3 = numberTrans(item.basicEps)
          }
          else if (e.key === 'dilutedEps') {
            e.profit3 = numberTrans(item.dilutedEps)
          }
          else if (e.key === 'parentTci') {
            e.profit3 = numberTrans(item.parentTci)
          }
          else if (e.key === 'opinionType') {
            e.profit3 = item.opinionType ? item.opinionType : "-"
          }
        }
      })
    }
  })

  return originData
}
