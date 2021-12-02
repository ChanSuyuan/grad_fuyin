export interface ISystemLog {
  data: ILog[]
  errorcode: number
  ok?: boolean
  text?: string
}

export interface ILog {
  description?: string
  id?: number
  ip?: string
  operationTime?: string
  result?: string
  type?: string
  userName?: string
}