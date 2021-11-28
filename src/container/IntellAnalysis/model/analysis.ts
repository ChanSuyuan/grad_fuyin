export interface IParamsRiskReportInfo {
  gpName: string
}

export interface IParamsRiskReportFeedBackInfo {
  data: IParamsRisk
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface IParamsRisk {
  analysis: IAnaylsis[]
  gpDetails: IGPDetail
}

// anaysis
export interface IAnaylsis {
  advise: string
  resultZbDtos: IResultZbDtos[]
  risk: string
  type: number
}

export interface IResultZbDtos {
  evalluateResult: string
  newestValue: string
  zbKey: string
}

export interface IGPDetail {
  companyInfo: IComponyInfo
  mainzbs: IMainzbsInfo[]
  profiles: IProfilesInfo[]
  qygqjgs: IQygqjsInfo[]
  xjlls: IXjjlsInfo[]
  zcfzs: IZcfzsInfo[]
  id: number
}

export interface IComponyInfo {
  id: number
  agdm: string // A股代码
  agjc: string // A股简称
  bgdm: string // B股代码
  bgdz: string // 办公地址
  bgjc: string // B股简称
  clrq: string // 成立日期
  createTime: string
  cym: string // 曾用名
  cz: string // 传真
  dm: string // 董秘
  dsz: string // 董事长
  dzxx: string // 电子邮箱
  frdb: string // 法人代表
  gsdj: string // 工商登记
  gsjj: string // 公司简介
  gsmc: string // 公司名称
  gswz: string // 公司网址
  hgdm: string // H股代码
  hgjc: string // H股简称
  jyfw: string // 经营范围
  lxdh: string // 联系电话
  qy: string // 区域
  sshy: string // 所属东财行业
  ssjys: string // 上市交易所
  ssrq: string // 上市日期
  sszjhhy: string // 所属证监会行业
  updateTime: string
  ywmc: string // 英文名称
  yzbm: string // 邮政编码
  zcdz: string // 注册地址
  zczb: string // 注册资本 (元)
  zjl: string // 总经理
  zqlb: string // 证券类别
}

export interface IMainzbsInfo {
  id: number // id
  bps: number // 每股净资产 (元)
  chzzl: number // 存货周转率 (次)
  chzzts: number // 存货周转天数 (天)
  cqbl: number // 产权比率
  createTime: string
  epsjb: number // 基本每股收益 (元)
  epskcjb: number // 扣非每股收益 (元)
  epsxs: number // 稀释每股收益 (元)
  kcfjcxsyjlr: number // 扣非净利润 (元)
  kcfjcxsyjlrtz: number // 扣非净利润同比增长 (%)
  kfjlrgdhbzc: number // 扣非净利润滚动环比增长 (%)
  ld: number // 流动比率
  mgjyxjje: number // 每股经营现金流 (元)
  mgwfplr: number // 每股未分配利润 (元)
  mgzbgj: number // 每股公积金 (元)
  netprofitrphbzc: number // 归属净利润滚动环比增长 (%)
  parentnetprofit: number // 归属净利润 (元)
  parentnetprofittz: number // 归属净利润同比增长 (%)
  qycs: number // 权益乘数
  reportDate: string // 报告时间
  roejq: number // 净资产收益率 (加权)(%)
  roekcjq: number // 净资产收益率 (扣非 / 加权)(%)
  sd: number  // 速动比率
  securityCode: string  // 股票代码
  securityNameAbbr: string // 股票名字
  toazzl: number // 总资产周转率 (次)
  totaloperatereve: number // 营业总收入 (元)
  totaloperaterevetz: number // 营业总收入同比增长 (%)
  updateTime: string
  xjllb: number  // 现金流量比率
  xsjll: number // 净利率 (%)
  xsmll: number // 毛利率 (%)
  yszkzzl: number // 应收账款周转率 (次)
  yszkzzts: number // 应收账款周转天数 (天)
  yyzsrgdhbzc: number // 营业总收入滚动环比增长 (%)
  zcfzl: number // 资产负债率 (%)
  zzcjll: number // 总资产收益率 (加权)(%)
  zzczzts: number // 总资产周转天数 (天)
}

export interface IProfilesInfo {
  id: number
  assetDisposalIncome: number // 资产处置收益
  assetImpairmentIncome: number // 资产减值损失 (新)
  basicEps: number // 基本每股收益
  continuedNetprofit: number // 持续经营净利润
  createTime: string
  creditImpairmentIncome: number // 信用减值损失 (新)
  deductParentNetprofit: number // 扣除非经常性损益后的净利润
  dilutedEps: number // 稀释每股收益
  feInterestExpense: number // 其中：利息费用
  feInterestIncome: number // 利息收入
  financeExpense: number // 财务费用
  incomeTax: number // 减：所得税
  investIncome: number // 加：投资收益
  manageExpense: number // 管理费用
  netprofit: number // 净利润
  nonbusinessExpense: number // 减：营业外支出
  nonbusinessIncome: number // 加：营业外收入
  operateCost: number // 营业成本
  operateIncome: number // 营业收入
  operateProfit: number // 营业利润
  operateTaxAdd: number // 税金及附加
  opinionType: string // 审计意见 (境内)
  otherIncome: number // 其他收益
  parentNetprofit: number // 归属于母公司股东的净利润
  parentTci: number // 归属于母公司股东的综合收益总额
  reportDate: string // 报告时间
  researchExpense: number // 研发费用
  saleExpense: number // 销售费用
  securityCode: string // 股票代码
  securityNameAbbr: string // 股票名字
  totalCompreIncome: number // 综合收益总额
  totalOperateCost: number // 营业总成本
  totalOperateIncome: number // 营业总收入
  totalProfit: number // 利润总额
  updateTime: string
}

export interface IQygqjsInfo {
  id: number
  changeRatio: string // 变动比例
  createTime: string //
  freeHoldnumRatio: number // 占总流通股本持股比例
  holdNum: number // 持股数 (股)
  holdNumChange: string // 增减 (股)
  holderName: string // 股东名称
  holderType: string // 股东性质
  securityCode: string // 股票代码
  sharesType: string // 股份类型
  updateTime: string
}

export interface IXjjlsInfo {
  id: number
  assetImpairment: number // 资产减值准备
  assignDividendPorfit: number // 分配股利、利润或偿付利息支付的现金
  beginCash: number // 减：现金的期初余额
  beginCce: number // 加：期初现金及现金等价物余额
  buyServices: number // 购买商品、接受劳务支付的现金
  cceAdd: number // 现金及现金等价物净增加额
  cceAddnote: number // 现金及现金等价物的净增加额
  constructLongAsset: number // 购建固定资产、无形资产和其他长期资产支付的现金
  createTime: string
  deferTax: string  // 递延所得税
  disposalLongAsset: number // 处置固定资产、无形资产和其他长期资产收回的现金净额
  disposalLongassetLoss: number // 处置固定资产、无形资产和其他长期资产的损失
  disposalSubsidiaryOther: number // 处置子公司及其他营业单位收到的现金
  dtAssetReduce: number // 其中：递延所得税资产减少
  endCash: number // 现金的期末余额
  endCce: number  // 期末现金及现金等价物余额 
  faIrDepr: number // 固定资产和投资性房地产折旧
  faScrapLoss: number // 固定资产报废损失
  iaAmortize: number // 无形资产摊销
  inventoryReduce: number // 存货的减少
  investLoss: number // 投资损失
  lpeAmortize: number // 长期待摊费用摊销
  netcashFinance: number // 筹资活动产生的现金流量净额
  netcashInvest: number // 投资活动产生的现金流量净额
  netcashOperate: number // 经营活动产生的现金流量净额
  netcashOperatenote: number // 经营活动产生的现金流量净额
  netprofit: number // 净利润
  obtainSubsidiaryOther: number // 取得子公司及其他营业单位支付的现金净额
  oilgasBiologyDepr: number // 其中：固定资产折旧、油气资产折耗、生产性生物资产折旧
  operateNetcashOthernote: number // 经营活动产生的现金流量净额其他项目
  operatePayableAdd: number // 经营性应付项目的增加
  operateReceReduce: number // 经营性应收项目的减少
  opinionType: string // 审计意见 (境内)
  other: number // 其他
  payAllTax: number // 支付的各项税费
  payOtherInvest: number // 支付其他与投资活动有关的现金
  payOtherOperate: number // 支付其他与经营活动有关的现金
  payStaffCash: number // 支付给职工以及为职工支付的现金
  receiveOtherInvest: number // 收到的其他与投资活动有关的现金
  receiveOtherOperate: number // 收到其他与经营活动有关的现金
  receiveTaxRefund: number // 收到的税收返还
  reportDate: string // 发布日期
  salesServices: number // 销售商品、提供劳务收到的现金
  securityCode: string // 股票代码
  securityNameAbbr: string // 股票名字
  totalFinanceOutflow: number // 筹资活动现金流出小计
  totalInvestInflow: number // 投资活动现金流入小计
  totalInvestOutflow: number // 投资活动现金流出小计
  totalOperateInflow: number // 经营活动现金流入小计
  totalOperateOutflow: number // 经营活动现金流出小计
  updateTime: string
}

export interface IZcfzsInfo {
  id: number
  accountsPayable: number // 应付账款
  accountsRece: number // 应收账款
  capitalReserve: number // 资本公积
  cip: number //  非流动资产中的在建工程
  contractLiab: number // 合同负债
  createTime: string
  deferIncome: number // 递延收益
  deferTaxAsset: number // 递延所得税资产
  financeRece: number // 应收款项融资
  fixedAsset: number // 非流动资产中的固定资产
  goodwill: number // 商誉
  holdsaleAsset: number // 持有代售资产
  holdsaleLiab: number // 持有代售负债
  intangibleAsset: number // 无形资产
  inventory: number // 存货
  leaseLiab: number // 租赁负债
  longPrepaidExpense: number // 长期待摊费用
  monetaryfunds: number // 货币资金
  noteAccountsPayable: number // 应付票据及应付款帐
  noteAccountsRece: number // 应收票据及应收款帐
  opinionType: string // 审计意见 (境内)
  otherCurrentAsset: number // 其它流动资产
  otherCurrentLiab: number // 其它流动负债
  otherNoncurrentAsset: number // 其它非流动资产
  predictLiab: number // 预计负债
  prepayment: number // 预付款项
  reportDate: string // 报告时间
  reportDateName: string // 报告时间类型
  reportType: string // 报告类型
  securityCode: string // 股票代码
  securityNameAbbr: string // 股票名字
  shareCapital: number // 实收资本（或股本）
  staffSalaryPayable: number // 应付职工薪酬
  surplusReserve: number // 盈余公积
  taxPayable: number // 应交税费
  totalAssets: number // 资产总计
  totalCurrentAssets: number // 流动资产总计
  totalCurrentLiab: number // 流动负债总计
  totalEquity: number // 股东权益合计
  totalLiabEquity: number // 负债和股东权益总计
  totalLiabilities: number // 负债合计
  totalNoncurrentAssets: number // 非流动资产合计
  totalNoncurrentLiab: number // 非流动负债合计
  totalOtherPayable: number // 其它应付款合计
  totalOtherRece: number // 其它应收款合计
  totalParentEquity: number //归属于母公司股东权益总计
  tradeFinassetNotfvtpl: number // 交易性金融资产
  unassignRpofit: number // 未分配利润
  updateTime: string
  userightAsset: number // 使用权资产
}


export interface IQueryModelReport {
  collateral: string
  fiMode: string
  guarantee: string
  purpose: string
  quota: number,
  period: string
  repayMode: string
}

export interface IParamsFcModel {
  analysis: string
  gpDetails: IGPDetail
}
export interface IParamsFcModelReportFeedBackInfo {
  data: IParamsFcModel
  errorCode?: number
  ok?: boolean
  text?: string
}