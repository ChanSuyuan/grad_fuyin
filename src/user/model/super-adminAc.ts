/**
 * @file super-admin monitor
 */

// login
export interface ISuperAdminLoginInfo {
  userName: string
  password: string
  hobby?: string
}

export interface ISuperAdminLoginFeedbackInfo {
  data: ISuperAdminLoginBack
  errorCode: number
  ok?: boolean
  text?: string
  auth: number
}

export interface ISuperAdminLoginBack {
  token: string
  type: number
}

// 超级管理员修改自己、管理员或用户密码
export interface ISuperAdminModifyUpdatePwdInfo {
  userName: string
  password: string
  hobby?: string
}

export interface ISuperAdminModifyUpdatePwdFeedbackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface ISuperAdminLogOutInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}
