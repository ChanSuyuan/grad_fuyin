import {
  IComponyInfo,
  IMainzbsInfo,
  IProfilesInfo,
  IQygqjsInfo,
  IXjjlsInfo,
  IZcfzsInfo
} from "../../IntellAnalysis/model/analysis";

export interface IGpDetailsRisk {
  companyInfo: IComponyInfo
  mainzbs: IMainzbsInfo[]
  profiles: IProfilesInfo[]
  qygqjgs: IQygqjsInfo[]
  xjlls: IXjjlsInfo[]
  zcfzs: IZcfzsInfo[]
  id?: number
}

export interface IGpDetailsRiskFeedBack {
  errorCode?: number
  ok?: boolean
  text?: string
  data: IGpDetailsFeedBack[]
}

export interface IGpDetailsFeedBack {
  advise?: string
  resultZbDtos: IResultZbDtos[]
  risk?: string
  type?: number
}

export interface IResultZbDtos {
  evaluateResult: string
  newestValue: string
  zbKey: string
}