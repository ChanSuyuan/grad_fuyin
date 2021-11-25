import { IParamsRisk } from "../../IntellAnalysis/model/analysis";

export interface IQueryRecord {
  type: number
}

export interface IQueryRecordFeedBack {
  data: IRecordInfo[]
  errorCode: number
  ok: boolean
  text: string
}

export interface IRecordInfo {
  id: number
  report: IParamsRisk
  type: number
  title: string
  createTime: string
  userId: number
}
