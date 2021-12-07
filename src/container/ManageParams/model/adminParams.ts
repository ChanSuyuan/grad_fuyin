export interface IAdminCustomRisk {
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

export interface IAdminCustomRiskFeedBack {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface IAdminCustomFrc {
  equation: string
  score: number
  type: number
  zbKey: string
}

export interface IAdminCustomFrcFeedBack {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}

export interface IAdminGetMatchDegreeFeedBack {
  data?: IMatchDegree[]
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface IMatchDegree {
  id?: number
  bz?: string
  cznl?: number
  ppd?: number
  ylnl?: number
}

export interface IModifyMatchDegree {
  bz?: string
  createTime?: string
  cznl?: number
  id?: number
  ppd?: number
  updateTime?: string
  ylnl?: number
}

export interface IModifyMatchDegreeFeedBack {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}


export interface IRiskZb {
  zdyzb: IZdyzb[]
  zdyzbFzs: IZdyzbFzs[]
  errorCode: number
  ok: boolean
  text: string
}

export interface IZdyzb {
  chzzl: string
  chzzts: string
  createTime: string
  dbnl: string
  id: number
  ld: string
  lszfbs: string
  qsjzbl: string
  roejq: string
  sd: string
  toazzl: string
  updateTime: string
  xjllb: string
  xsjll: string
  xsmll: string
  yszkzzl: string
  yszkzzts: string
  zbzzl: string
  zcfzl: string
  zzcjll: string
  zzczzts: string
}

export interface IZdyzbFzs {
  createTime: string
  id: number
  normal: number
  unnormal: number
  updateTime: string
  zbKey: string
}
