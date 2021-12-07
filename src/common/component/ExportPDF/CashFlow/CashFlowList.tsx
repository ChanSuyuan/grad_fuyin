import React, { ReactNode } from 'react'
import { IParamsFcModel, IParamsRisk } from "../../../../container/IntellAnalysis/model/analysis";
import { numberTrans } from "../utils/numberTrans";

interface ICashFlowOriginDataProps {
  item?: ReactNode
  key?: string
  cashflow0?: string
  cashflow1?: string
  cashflow2?: string
  cashflow3?: string
}

export const CashFlowReportData = (store: IParamsRisk | IParamsFcModel) => {
  const originData: ICashFlowOriginDataProps[] = []
  originData.push(
    // 经营活动产生的现金流量
    {
      item: <div style={{ fontSize: '18px' }}><strong>经营活动产生的现金流量</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 销售商品、提供劳务收到的现金</ div>,
      key: 'salesServices'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 收到的税收返还</ div>,
      key: 'receiveTaxRefund'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 收到其他与经营活动有关的现金</ div>,
      key: 'receiveOtherOperate'
    },
    // 经营活动现金流入小计
    {
      item: <div style={{ fontSize: '18px' }}><strong>经营活动现金流入小计</strong></div>,
      key: 'totalOperateInflow'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 购买商品、接受劳务支付的现金</ div>,
      key: 'buyServices'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 支付给职工以及为职工支付的现金</ div>,
      key: 'payStaffCash'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 支付的各项税费</ div>,
      key: 'payAllTax'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 支付其他与经营活动有关的现金</ div>,
      key: 'payOtherOperate'
    },
    // 经营活动现金流出小计
    {
      item: <div style={{ fontSize: '18px' }}><strong>经营活动现金流出小计</strong></div>,
      key: 'totalOperateOutflow'
    },
    // 经营活动产生的现金流量净额
    {
      item: <div style={{ fontSize: '18px' }}><strong>经营活动产生的现金流量净额</strong></div>,
      key: 'netcashOperate'
    },
    // 投资活动产生的现金流量
    {
      item: <div style={{ fontSize: '18px' }}><strong>投资活动产生的现金流量</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 处置固定资产、无形资产和其他长期资产收回的现金净额</ div>,
      key: 'disposalLongAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 处置子公司及其他营业单位收到的现金</ div>,
      key: 'disposalSubsidiaryOther'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 收到的其他与投资活动有关的现金</ div>,
      key: 'receiveOtherInvest'
    },
    // 投资活动现金流入小计
    {
      item: <div style={{ fontSize: '18px' }}><strong>投资活动现金流入小计</strong></div>,
      key: 'totalInvestInflow'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 购建固定资产、无形资产和其他长期资产支付的现金</ div>,
      key: 'constructLongAsset'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 取得子公司及其他营业单位支付的现金净额</ div>,
      key: 'obtainSubsidiaryOther'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 支付其他与投资活动有关的现金</ div>,
      key: 'payOtherInvest'
    },
    // 投资活动现金流出小计
    {
      item: <div style={{ fontSize: '18px' }}><strong>投资活动现金流出小计</strong></div>,
      key: 'totalInvestOutflow'
    },
    // 投资活动产生的现金流量净额
    {
      item: <div style={{ fontSize: '18px' }}><strong>投资活动产生的现金流量净额</strong></div>,
      key: 'netcashInvest'
    },
    // 筹资活动产生的现金流量
    {
      item: <div style={{ fontSize: '18px' }}><strong>投资活动产生的现金流量净额</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 分配股利、利润或偿付利息支付的现金</ div>,
      key: 'assignDividendPorfit'
    },
    // 筹资活动现金流出小计
    {
      item: <div style={{ fontSize: '18px' }}><strong>筹资活动现金流出小计</strong></div>,
      key: 'totalFinanceOutflow'
    },
    // 筹资活动产生的现金流量净额
    {
      item: <div style={{ fontSize: '18px' }}><strong>筹资活动产生的现金流量净额</strong></div>,
      key: 'netcashFinance'
    },
    // 现金及现金等价物净增加额
    {
      item: <div style={{ fontSize: '18px' }}><strong>现金及现金等价物净增加额</strong></div>,
      key: 'cceAdd'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}> 加：期初现金及现金等价物余额</ div>,
      key: 'beginCce'
    },
    // 期末现金及现金等价物余额
    {
      item: <div style={{ fontSize: '18px' }}><strong>期末现金及现金等价物余额</strong></div>,
      key: 'endCce'
    },
    // 补充资料
    {
      item: <div style={{ fontSize: '18px' }}><strong>补充资料</strong></div>,
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>净利润</ div>,
      key: 'netprofit'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>资产减值准备</ div>,
      key: 'assetImpairment'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>固定资产和投资性房地产折旧</ div>,
      key: 'faIrDepr'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>其中：固定资产折旧、油气资产折耗、生产性生物资产折旧</ div>,
      key: 'oilgasBiologyDepr'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>无形资产摊销</ div>,
      key: 'iaAmortize'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>长期待摊费用摊销</ div>,
      key: 'lpeAmortize'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>处置固定资产、无形资产和其他长期资产的损失</ div>,
      key: 'disposalLongassetLoss'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>固定资产报废损失</ div>,
      key: 'faScrapLoss'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>投资损失</ div>,
      key: 'investLoss'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>递延所得税</ div>,
      key: 'deferTax'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>其中：递延所得税资产减少</ div>,
      key: 'dtAssetReduce'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>存货的减少</ div>,
      key: 'inventoryReduce'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>经营性应收项目的减少</ div>,
      key: 'operateReceReduce'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>经营性应付项目的增加</ div>,
      key: 'operatePayableAdd'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>其他</ div>,
      key: 'other'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>经营活动产生的现金流量净额其他项目</ div>,
      key: 'operateNetcashOthernote'
    },
    // 经营活动产生的现金流量净额
    {
      item: <div style={{ fontSize: '18px' }}><strong>经营活动产生的现金流量净额</strong></div>,
      key: 'netcashOperatenote'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>现金的期末余额</ div>,
      key: 'endCash'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>减：现金的期初余额</ div>,
      key: 'beginCash'
    },
    // 现金及现金等价物的净增加额
    {
      item: <div style={{ fontSize: '18px' }}><strong>现金及现金等价物的净增加额</strong></div>,
      key: 'cceAddnote'
    },
    {
      item: <div style={{ fontSize: '18px', paddingLeft: '15px' }}>审计意见（境内）</ div>,
      key: 'opinionType'
    },
  )
  // eslint-disable-next-line array-callback-return
  store.gpDetails.xjlls.map((item, i) => {
    if (item.reportDate) {
      // eslint-disable-next-line array-callback-return
      originData.map(e => {
        if (i === 0) {
          if (e.key === 'salesServices') {
            e.cashflow0 = numberTrans(item.salesServices)
          }
          else if (e.key === 'receiveTaxRefund') {
            e.cashflow0 = numberTrans(item.receiveTaxRefund)
          }
          else if (e.key === 'receiveOtherOperate') {
            e.cashflow0 = numberTrans(item.receiveOtherOperate)
          }
          else if (e.key === 'totalOperateInflow') {
            e.cashflow0 = numberTrans(item.totalOperateInflow)
          }
          else if (e.key === 'buyServices') {
            e.cashflow0 = numberTrans(item.buyServices)
          }
          else if (e.key === 'payStaffCash') {
            e.cashflow0 = numberTrans(item.payStaffCash)
          }
          else if (e.key === 'payAllTax') {
            e.cashflow0 = numberTrans(item.payAllTax)
          }
          else if (e.key === 'payOtherOperate') {
            e.cashflow0 = numberTrans(item.payOtherOperate)
          }
          else if (e.key === 'totalOperateOutflow') {
            e.cashflow0 = numberTrans(item.totalOperateOutflow)
          }
          else if (e.key === 'netcashOperate') {
            e.cashflow0 = numberTrans(item.netcashOperate)
          }
          else if (e.key === 'disposalLongAsset') {
            e.cashflow0 = numberTrans(item.disposalLongAsset)
          }
          else if (e.key === 'disposalSubsidiaryOther') {
            e.cashflow0 = numberTrans(item.disposalSubsidiaryOther)
          }
          else if (e.key === 'receiveOtherInvest') {
            e.cashflow0 = numberTrans(item.receiveOtherInvest)
          }
          else if (e.key === 'totalInvestInflow') {
            e.cashflow0 = numberTrans(item.totalInvestInflow)
          }
          else if (e.key === 'constructLongAsset') {
            e.cashflow0 = numberTrans(item.constructLongAsset)
          }
          else if (e.key === 'obtainSubsidiaryOther') {
            e.cashflow0 = numberTrans(item.obtainSubsidiaryOther)
          }
          else if (e.key === 'payOtherInvest') {
            e.cashflow0 = numberTrans(item.payOtherInvest)
          }
          else if (e.key === 'totalInvestOutflow') {
            e.cashflow0 = numberTrans(item.totalInvestOutflow)
          }
          else if (e.key === 'netcashInvest') {
            e.cashflow0 = numberTrans(item.netcashInvest)
          }
          else if (e.key === 'assignDividendPorfit') {
            e.cashflow0 = numberTrans(item.assignDividendPorfit)
          }
          else if (e.key === 'totalFinanceOutflow') {
            e.cashflow0 = numberTrans(item.totalFinanceOutflow)
          }
          else if (e.key === 'netcashFinance') {
            e.cashflow0 = numberTrans(item.netcashFinance)
          }
          else if (e.key === 'cceAdd') {
            e.cashflow0 = numberTrans(item.cceAdd)
          }
          else if (e.key === 'beginCce') {
            e.cashflow0 = numberTrans(item.beginCce)
          }
          else if (e.key === 'endCce') {
            e.cashflow0 = numberTrans(item.endCce)
          }
          else if (e.key === 'netprofit') {
            e.cashflow0 = numberTrans(item.netprofit)
          }
          else if (e.key === 'assetImpairment') {
            e.cashflow0 = numberTrans(item.assetImpairment)
          }
          else if (e.key === 'faIrDepr') {
            e.cashflow0 = numberTrans(item.faIrDepr)
          }
          else if (e.key === 'oilgasBiologyDepr') {
            e.cashflow0 = numberTrans(item.oilgasBiologyDepr)
          }
          else if (e.key === 'iaAmortize') {
            e.cashflow0 = numberTrans(item.iaAmortize)
          }
          else if (e.key === 'lpeAmortize') {
            e.cashflow0 = numberTrans(item.lpeAmortize)
          }
          else if (e.key === 'disposalLongassetLoss') {
            e.cashflow0 = numberTrans(item.disposalLongassetLoss)
          }
          else if (e.key === 'faScrapLoss') {
            e.cashflow0 = numberTrans(item.faScrapLoss)
          }
          else if (e.key === 'investLoss') {
            e.cashflow0 = numberTrans(item.investLoss)
          }
          else if (e.key === 'deferTax') {
            e.cashflow0 = numberTrans(item.deferTax)
          }
          else if (e.key === 'dtAssetReduce') {
            e.cashflow0 = numberTrans(item.dtAssetReduce)
          }
          else if (e.key === 'inventoryReduce') {
            e.cashflow0 = numberTrans(item.inventoryReduce)
          }
          else if (e.key === 'operateReceReduce') {
            e.cashflow0 = numberTrans(item.operateReceReduce)
          }
          else if (e.key === 'operatePayableAdd') {
            e.cashflow0 = numberTrans(item.operatePayableAdd)
          }
          else if (e.key === 'other') {
            e.cashflow0 = numberTrans(item.other)
          }
          else if (e.key === 'operateNetcashOthernote') {
            e.cashflow0 = numberTrans(item.operateNetcashOthernote)
          }
          else if (e.key === 'netcashOperatenote') {
            e.cashflow0 = numberTrans(item.netcashOperatenote)
          }
          else if (e.key === 'endCash') {
            e.cashflow0 = numberTrans(item.endCash)
          }
          else if (e.key === 'beginCash') {
            e.cashflow0 = numberTrans(item.beginCash)
          }
          else if (e.key === 'cceAddnote') {
            e.cashflow0 = numberTrans(item.cceAddnote)
          }
          else if (e.key === 'opinionType') {
            e.cashflow0 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 1) {
          if (e.key === 'salesServices') {
            e.cashflow1 = numberTrans(item.salesServices)
          }
          else if (e.key === 'receiveTaxRefund') {
            e.cashflow1 = numberTrans(item.receiveTaxRefund)
          }
          else if (e.key === 'receiveOtherOperate') {
            e.cashflow1 = numberTrans(item.receiveOtherOperate)
          }
          else if (e.key === 'totalOperateInflow') {
            e.cashflow1 = numberTrans(item.totalOperateInflow)
          }
          else if (e.key === 'buyServices') {
            e.cashflow1 = numberTrans(item.buyServices)
          }
          else if (e.key === 'payStaffCash') {
            e.cashflow1 = numberTrans(item.payStaffCash)
          }
          else if (e.key === 'payAllTax') {
            e.cashflow1 = numberTrans(item.payAllTax)
          }
          else if (e.key === 'payOtherOperate') {
            e.cashflow1 = numberTrans(item.payOtherOperate)
          }
          else if (e.key === 'totalOperateOutflow') {
            e.cashflow1 = numberTrans(item.totalOperateOutflow)
          }
          else if (e.key === 'netcashOperate') {
            e.cashflow1 = numberTrans(item.netcashOperate)
          }
          else if (e.key === 'disposalLongAsset') {
            e.cashflow1 = numberTrans(item.disposalLongAsset)
          }
          else if (e.key === 'disposalSubsidiaryOther') {
            e.cashflow1 = numberTrans(item.disposalSubsidiaryOther)
          }
          else if (e.key === 'receiveOtherInvest') {
            e.cashflow1 = numberTrans(item.receiveOtherInvest)
          }
          else if (e.key === 'totalInvestInflow') {
            e.cashflow1 = numberTrans(item.totalInvestInflow)
          }
          else if (e.key === 'constructLongAsset') {
            e.cashflow1 = numberTrans(item.constructLongAsset)
          }
          else if (e.key === 'obtainSubsidiaryOther') {
            e.cashflow1 = numberTrans(item.obtainSubsidiaryOther)
          }
          else if (e.key === 'payOtherInvest') {
            e.cashflow1 = numberTrans(item.payOtherInvest)
          }
          else if (e.key === 'totalInvestOutflow') {
            e.cashflow1 = numberTrans(item.totalInvestOutflow)
          }
          else if (e.key === 'netcashInvest') {
            e.cashflow1 = numberTrans(item.netcashInvest)
          }
          else if (e.key === 'assignDividendPorfit') {
            e.cashflow1 = numberTrans(item.assignDividendPorfit)
          }
          else if (e.key === 'totalFinanceOutflow') {
            e.cashflow1 = numberTrans(item.totalFinanceOutflow)
          }
          else if (e.key === 'netcashFinance') {
            e.cashflow1 = numberTrans(item.netcashFinance)
          }
          else if (e.key === 'cceAdd') {
            e.cashflow1 = numberTrans(item.cceAdd)
          }
          else if (e.key === 'beginCce') {
            e.cashflow1 = numberTrans(item.beginCce)
          }
          else if (e.key === 'endCce') {
            e.cashflow1 = numberTrans(item.endCce)
          }
          else if (e.key === 'netprofit') {
            e.cashflow1 = numberTrans(item.netprofit)
          }
          else if (e.key === 'assetImpairment') {
            e.cashflow1 = numberTrans(item.assetImpairment)
          }
          else if (e.key === 'faIrDepr') {
            e.cashflow1 = numberTrans(item.faIrDepr)
          }
          else if (e.key === 'oilgasBiologyDepr') {
            e.cashflow1 = numberTrans(item.oilgasBiologyDepr)
          }
          else if (e.key === 'iaAmortize') {
            e.cashflow1 = numberTrans(item.iaAmortize)
          }
          else if (e.key === 'lpeAmortize') {
            e.cashflow1 = numberTrans(item.lpeAmortize)
          }
          else if (e.key === 'disposalLongassetLoss') {
            e.cashflow1 = numberTrans(item.disposalLongassetLoss)
          }
          else if (e.key === 'faScrapLoss') {
            e.cashflow1 = numberTrans(item.faScrapLoss)
          }
          else if (e.key === 'investLoss') {
            e.cashflow1 = numberTrans(item.investLoss)
          }
          else if (e.key === 'deferTax') {
            e.cashflow1 = numberTrans(item.deferTax)
          }
          else if (e.key === 'dtAssetReduce') {
            e.cashflow1 = numberTrans(item.dtAssetReduce)
          }
          else if (e.key === 'inventoryReduce') {
            e.cashflow1 = numberTrans(item.inventoryReduce)
          }
          else if (e.key === 'operateReceReduce') {
            e.cashflow1 = numberTrans(item.operateReceReduce)
          }
          else if (e.key === 'operatePayableAdd') {
            e.cashflow1 = numberTrans(item.operatePayableAdd)
          }
          else if (e.key === 'other') {
            e.cashflow1 = numberTrans(item.other)
          }
          else if (e.key === 'operateNetcashOthernote') {
            e.cashflow1 = numberTrans(item.operateNetcashOthernote)
          }
          else if (e.key === 'netcashOperatenote') {
            e.cashflow1 = numberTrans(item.netcashOperatenote)
          }
          else if (e.key === 'endCash') {
            e.cashflow1 = numberTrans(item.endCash)
          }
          else if (e.key === 'beginCash') {
            e.cashflow1 = numberTrans(item.beginCash)
          }
          else if (e.key === 'cceAddnote') {
            e.cashflow1 = numberTrans(item.cceAddnote)
          }
          else if (e.key === 'opinionType') {
            e.cashflow1 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 2) {
          if (e.key === 'salesServices') {
            e.cashflow2 = numberTrans(item.salesServices)
          }
          else if (e.key === 'receiveTaxRefund') {
            e.cashflow2 = numberTrans(item.receiveTaxRefund)
          }
          else if (e.key === 'receiveOtherOperate') {
            e.cashflow2 = numberTrans(item.receiveOtherOperate)
          }
          else if (e.key === 'totalOperateInflow') {
            e.cashflow2 = numberTrans(item.totalOperateInflow)
          }
          else if (e.key === 'buyServices') {
            e.cashflow2 = numberTrans(item.buyServices)
          }
          else if (e.key === 'payStaffCash') {
            e.cashflow2 = numberTrans(item.payStaffCash)
          }
          else if (e.key === 'payAllTax') {
            e.cashflow2 = numberTrans(item.payAllTax)
          }
          else if (e.key === 'payOtherOperate') {
            e.cashflow2 = numberTrans(item.payOtherOperate)
          }
          else if (e.key === 'totalOperateOutflow') {
            e.cashflow2 = numberTrans(item.totalOperateOutflow)
          }
          else if (e.key === 'netcashOperate') {
            e.cashflow2 = numberTrans(item.netcashOperate)
          }
          else if (e.key === 'disposalLongAsset') {
            e.cashflow2 = numberTrans(item.disposalLongAsset)
          }
          else if (e.key === 'disposalSubsidiaryOther') {
            e.cashflow2 = numberTrans(item.disposalSubsidiaryOther)
          }
          else if (e.key === 'receiveOtherInvest') {
            e.cashflow2 = numberTrans(item.receiveOtherInvest)
          }
          else if (e.key === 'totalInvestInflow') {
            e.cashflow2 = numberTrans(item.totalInvestInflow)
          }
          else if (e.key === 'constructLongAsset') {
            e.cashflow2 = numberTrans(item.constructLongAsset)
          }
          else if (e.key === 'obtainSubsidiaryOther') {
            e.cashflow2 = numberTrans(item.obtainSubsidiaryOther)
          }
          else if (e.key === 'payOtherInvest') {
            e.cashflow2 = numberTrans(item.payOtherInvest)
          }
          else if (e.key === 'totalInvestOutflow') {
            e.cashflow2 = numberTrans(item.totalInvestOutflow)
          }
          else if (e.key === 'netcashInvest') {
            e.cashflow2 = numberTrans(item.netcashInvest)
          }
          else if (e.key === 'assignDividendPorfit') {
            e.cashflow2 = numberTrans(item.assignDividendPorfit)
          }
          else if (e.key === 'totalFinanceOutflow') {
            e.cashflow2 = numberTrans(item.totalFinanceOutflow)
          }
          else if (e.key === 'netcashFinance') {
            e.cashflow2 = numberTrans(item.netcashFinance)
          }
          else if (e.key === 'cceAdd') {
            e.cashflow2 = numberTrans(item.cceAdd)
          }
          else if (e.key === 'beginCce') {
            e.cashflow2 = numberTrans(item.beginCce)
          }
          else if (e.key === 'endCce') {
            e.cashflow2 = numberTrans(item.endCce)
          }
          else if (e.key === 'netprofit') {
            e.cashflow2 = numberTrans(item.netprofit)
          }
          else if (e.key === 'assetImpairment') {
            e.cashflow2 = numberTrans(item.assetImpairment)
          }
          else if (e.key === 'faIrDepr') {
            e.cashflow2 = numberTrans(item.faIrDepr)
          }
          else if (e.key === 'oilgasBiologyDepr') {
            e.cashflow2 = numberTrans(item.oilgasBiologyDepr)
          }
          else if (e.key === 'iaAmortize') {
            e.cashflow2 = numberTrans(item.iaAmortize)
          }
          else if (e.key === 'lpeAmortize') {
            e.cashflow2 = numberTrans(item.lpeAmortize)
          }
          else if (e.key === 'disposalLongassetLoss') {
            e.cashflow2 = numberTrans(item.disposalLongassetLoss)
          }
          else if (e.key === 'faScrapLoss') {
            e.cashflow2 = numberTrans(item.faScrapLoss)
          }
          else if (e.key === 'investLoss') {
            e.cashflow2 = numberTrans(item.investLoss)
          }
          else if (e.key === 'deferTax') {
            e.cashflow2 = numberTrans(item.deferTax)
          }
          else if (e.key === 'dtAssetReduce') {
            e.cashflow2 = numberTrans(item.dtAssetReduce)
          }
          else if (e.key === 'inventoryReduce') {
            e.cashflow2 = numberTrans(item.inventoryReduce)
          }
          else if (e.key === 'operateReceReduce') {
            e.cashflow2 = numberTrans(item.operateReceReduce)
          }
          else if (e.key === 'operatePayableAdd') {
            e.cashflow2 = numberTrans(item.operatePayableAdd)
          }
          else if (e.key === 'other') {
            e.cashflow2 = numberTrans(item.other)
          }
          else if (e.key === 'operateNetcashOthernote') {
            e.cashflow2 = numberTrans(item.operateNetcashOthernote)
          }
          else if (e.key === 'netcashOperatenote') {
            e.cashflow2 = numberTrans(item.netcashOperatenote)
          }
          else if (e.key === 'endCash') {
            e.cashflow2 = numberTrans(item.endCash)
          }
          else if (e.key === 'beginCash') {
            e.cashflow2 = numberTrans(item.beginCash)
          }
          else if (e.key === 'cceAddnote') {
            e.cashflow2 = numberTrans(item.cceAddnote)
          }
          else if (e.key === 'opinionType') {
            e.cashflow2 = item.opinionType ? item.opinionType : "-"
          }
        }
        if (i === 3) {
          if (e.key === 'salesServices') {
            e.cashflow3 = numberTrans(item.salesServices)
          }
          else if (e.key === 'receiveTaxRefund') {
            e.cashflow3 = numberTrans(item.receiveTaxRefund)
          }
          else if (e.key === 'receiveOtherOperate') {
            e.cashflow3 = numberTrans(item.receiveOtherOperate)
          }
          else if (e.key === 'totalOperateInflow') {
            e.cashflow3 = numberTrans(item.totalOperateInflow)
          }
          else if (e.key === 'buyServices') {
            e.cashflow3 = numberTrans(item.buyServices)
          }
          else if (e.key === 'payStaffCash') {
            e.cashflow3 = numberTrans(item.payStaffCash)
          }
          else if (e.key === 'payAllTax') {
            e.cashflow3 = numberTrans(item.payAllTax)
          }
          else if (e.key === 'payOtherOperate') {
            e.cashflow3 = numberTrans(item.payOtherOperate)
          }
          else if (e.key === 'totalOperateOutflow') {
            e.cashflow3 = numberTrans(item.totalOperateOutflow)
          }
          else if (e.key === 'netcashOperate') {
            e.cashflow3 = numberTrans(item.netcashOperate)
          }
          else if (e.key === 'disposalLongAsset') {
            e.cashflow3 = numberTrans(item.disposalLongAsset)
          }
          else if (e.key === 'disposalSubsidiaryOther') {
            e.cashflow3 = numberTrans(item.disposalSubsidiaryOther)
          }
          else if (e.key === 'receiveOtherInvest') {
            e.cashflow3 = numberTrans(item.receiveOtherInvest)
          }
          else if (e.key === 'totalInvestInflow') {
            e.cashflow3 = numberTrans(item.totalInvestInflow)
          }
          else if (e.key === 'constructLongAsset') {
            e.cashflow3 = numberTrans(item.constructLongAsset)
          }
          else if (e.key === 'obtainSubsidiaryOther') {
            e.cashflow3 = numberTrans(item.obtainSubsidiaryOther)
          }
          else if (e.key === 'payOtherInvest') {
            e.cashflow3 = numberTrans(item.payOtherInvest)
          }
          else if (e.key === 'totalInvestOutflow') {
            e.cashflow3 = numberTrans(item.totalInvestOutflow)
          }
          else if (e.key === 'netcashInvest') {
            e.cashflow3 = numberTrans(item.netcashInvest)
          }
          else if (e.key === 'assignDividendPorfit') {
            e.cashflow3 = numberTrans(item.assignDividendPorfit)
          }
          else if (e.key === 'totalFinanceOutflow') {
            e.cashflow3 = numberTrans(item.totalFinanceOutflow)
          }
          else if (e.key === 'netcashFinance') {
            e.cashflow3 = numberTrans(item.netcashFinance)
          }
          else if (e.key === 'cceAdd') {
            e.cashflow3 = numberTrans(item.cceAdd)
          }
          else if (e.key === 'beginCce') {
            e.cashflow3 = numberTrans(item.beginCce)
          }
          else if (e.key === 'endCce') {
            e.cashflow3 = numberTrans(item.endCce)
          }
          else if (e.key === 'netprofit') {
            e.cashflow3 = numberTrans(item.netprofit)
          }
          else if (e.key === 'assetImpairment') {
            e.cashflow3 = numberTrans(item.assetImpairment)
          }
          else if (e.key === 'faIrDepr') {
            e.cashflow3 = numberTrans(item.faIrDepr)
          }
          else if (e.key === 'oilgasBiologyDepr') {
            e.cashflow3 = numberTrans(item.oilgasBiologyDepr)
          }
          else if (e.key === 'iaAmortize') {
            e.cashflow3 = numberTrans(item.iaAmortize)
          }
          else if (e.key === 'lpeAmortize') {
            e.cashflow3 = numberTrans(item.lpeAmortize)
          }
          else if (e.key === 'disposalLongassetLoss') {
            e.cashflow3 = numberTrans(item.disposalLongassetLoss)
          }
          else if (e.key === 'faScrapLoss') {
            e.cashflow3 = numberTrans(item.faScrapLoss)
          }
          else if (e.key === 'investLoss') {
            e.cashflow3 = numberTrans(item.investLoss)
          }
          else if (e.key === 'deferTax') {
            e.cashflow3 = numberTrans(item.deferTax)
          }
          else if (e.key === 'dtAssetReduce') {
            e.cashflow3 = numberTrans(item.dtAssetReduce)
          }
          else if (e.key === 'inventoryReduce') {
            e.cashflow3 = numberTrans(item.inventoryReduce)
          }
          else if (e.key === 'operateReceReduce') {
            e.cashflow3 = numberTrans(item.operateReceReduce)
          }
          else if (e.key === 'operatePayableAdd') {
            e.cashflow3 = numberTrans(item.operatePayableAdd)
          }
          else if (e.key === 'other') {
            e.cashflow3 = numberTrans(item.other)
          }
          else if (e.key === 'operateNetcashOthernote') {
            e.cashflow3 = numberTrans(item.operateNetcashOthernote)
          }
          else if (e.key === 'netcashOperatenote') {
            e.cashflow3 = numberTrans(item.netcashOperatenote)
          }
          else if (e.key === 'endCash') {
            e.cashflow3 = numberTrans(item.endCash)
          }
          else if (e.key === 'beginCash') {
            e.cashflow3 = numberTrans(item.beginCash)
          }
          else if (e.key === 'cceAddnote') {
            e.cashflow3 = numberTrans(item.cceAddnote)
          }
          else if (e.key === 'opinionType') {
            e.cashflow3 = item.opinionType ? item.opinionType : "-"
          }
        }
      })
    }
  })
  return originData
}