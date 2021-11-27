export interface ISuperAdminCustomRisk {
  chzzl?: string
  chzzts?: string
  dbnl?: string
  id?: number
  lszfbs?: string
  qsjzbl?: string
  roejq?: string
  sd?: string
  toazzl?: string
  createTime?: string
  updateTime?: string
  xjllb?: string
  xsjll?: string
  xsmll?: string
  yszkzzl?: string
  yszkzzts?: string
  zbzzl?: string
  zcfzl?: string
  zzcjll?: string
  zzczzts?: string
  ld?: string
}

export interface ISuperAdminCustomRiskFeedBack {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface ISuperAdminCustomFrc {
  equation: string
  score: number
  type: number
  zbKey: string
}

export interface ISuperAdminCustomFrcFeedBack {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}

export interface ISuperAdminCustomMatchDegree {
  oldRzppd: IRzppd
  newRzppd: IRzppd
}

interface IRzppd {
  bz: string
  createTime?: string
  cznl: number
  ppd: number
  updateTime?: string
  ylnl: number
}

export interface ISuperAdminCustomMathcDegreeFeedBack {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}