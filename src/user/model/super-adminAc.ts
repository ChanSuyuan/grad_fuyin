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
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}

// 超级管理员修改自己、管理员或用户密码
export interface ISuperAdminModifyUpdatePwdInfo {
  userName: string
  password: string
  hobby?: string
}

export interface ISuperAdminModifyUpdatePwdFeedbackInfo {
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}
