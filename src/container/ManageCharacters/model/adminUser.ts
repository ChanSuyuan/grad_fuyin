export interface IAllUsersFB {
  data: IAllUsersInfo[]
  erroCode: number
  ok?: boolean
  text?: string
}

export interface IAllUsersInfo {
  creatTime?: string
  email: string
  hobby: string
  id: number
  password: string
  state: number
  type: number
  updateTime?: string
  userName: string
}

export interface IModifyParams {
  creatTime?: string
  email?: string
  hobby?: string
  id?: number
  password?: string
  state?: number
  type?: number
  updateTime?: string
  userName?: string
}

export interface IModifyParamsFB {
  data?: string
  errorCode: number
  ok: boolean
  text?: string
}