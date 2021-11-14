/**
 * @file 个人信息监控项
 */

// 注册所需要的信息
export interface IRegisterInfo {
  userName: string
  password: string
  hobby?: string
  phone_number?: number
  mail_address?: string
}

// 注册返回信息
export interface IResgistFeedBackInfo {
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}

// 登录所需要的信息
export interface ILoginInfo {
  userName: string
  password: string
  hobby?: string
}

// 登录返回信息
export interface ILoginFeedBackInfo {
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}

// 修改个人信息
export interface IModifyBaseInfo {
  hobby?: string
}

// 根据旧密码改新密码 所需要传的值
export interface IModifyLoginInfo extends IModifyBaseInfo {
  newPassword: string
  oldPassword?: string
  userName?: string
}

export interface IModifyFeedBackInfo {
  data?: string
  errorCode?: string
  ok?: boolean
  text?: string
}



