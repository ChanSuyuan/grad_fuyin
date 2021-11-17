/**
 * @file admin imformation monitor
 */

// login query
export interface ILoginInfo {
  userName: string
  password: string
  hobby?: string
}

// login feedback
export interface ILoginFeedBackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface IAdminLogOutFeedBackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

// admin Update Pwd
export interface IAdminUpdatePwdInfo {
  userName: string
  password: string
  hobby?: string
}


// Update Pwd  FeedBackInfo
export interface IAdminUpdatePwdFeedBackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

// update indicators
export interface IAdminUpdateIndicatorsInfo {
  chzzl: string  // 存货周转率 (次)
  chzzts: string // 存货周转天数 (天)
  createTime: string // 创建时间
  dbnl: string // 担保能力
  id: number // integer($int64)
  ld: string //	流动比率
  qsjzbl: string // 清算价值比率
  lszfbs: string  // 利息支付倍数
  roejq: string // 净资产收益率 (加权)(%)
  sd: string // 速动比率
  toazzl: string // 总资产周转率 (次)
  updateTime: string // 修改时间
  xjllb: string // 现金流量比率
  xsjll: string // 净利率 (%)
  xsmll: string // 毛利率 (%)
  yszkzzl: string  // 应收账款周转率 (次)
  yszkzzts: string // 应收账款周转天数 (天)
  zbzzl: string  // 资本周转率
  zcfzl: string // 资产负债率 (%)
  zzcjll: string // 总资产收益率 (加权)(%)
  zzczzts: string // 总资产周转天数 (天)
}

// update indicators FeedBack
export interface IAdminUpdateIndicatorsFeedBackInfo {
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}