import {
  IComponyInfo,
  IMainzbsInfo,
  IProfilesInfo,
  IQygqjsInfo,
  IXjjlsInfo,
  IZcfzsInfo
} from "../../IntellAnalysis/model/analysis";

export interface IGpDetailsFc {
  companyInfo: IComponyInfo
  mainzbs: IMainzbsInfo[]
  profiles: IProfilesInfo[]
  qygqjgs: IQygqjsInfo[]
  xjlls: IXjjlsInfo[]
  zcfzs: IZcfzsInfo[]
  id?: number
}

export interface IGpDetailsFcFeedBack {
  data?: string
  errorCode?: number
  ok?: true,
  text?: string
}