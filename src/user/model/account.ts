/**
 * @file self information montior
 */

// regist query
export interface IRegisterInfo {
  userName: string
  password: string
  hobby?: string
  phone_number?: number
  mail_address?: string
}

// regist feeback
export interface IResgistFeedBackInfo {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}

// login query
export interface ILoginInfo {
  userName: string
  password: string
  hobby?: string
}

// login feedback
export interface ILoginFeedBackInfo {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}

// logOut FeedBack
export interface ILogOutFeedBack {
  data?: string
  errorCode: number
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
  errorCode: number
  ok?: boolean
  text?: string
}



