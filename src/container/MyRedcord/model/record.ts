import { IParamsRisk } from "../../IntellAnalysis/model/analysis";

export interface queryRecord {
  pageNum: number
  pageSize: number
}

export interface queryRecordFeedBack {
  data: RecordInfo
  errorCode: number
  ok: boolean
  text: string
}

export interface RecordInfo {
  createTime: string
  id: number
  report: IParamsRisk
  type: number
  title: string
  updateTime: string
  userId: number
}