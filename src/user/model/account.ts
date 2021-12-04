/**
 * @file self information montior
 */

// regist query
export interface IRegisterInfo {
  userName: string
  password: string
  email?: string
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
  code?: string
  key?: string
}

// login feedback
export interface ILoginFeedBackInfo {
  data: ILoginFeedBackData
  errorCode: number
  ok?: boolean
  text?: string
  // 返回的字段是type, 这里做鉴别用 auth，其他文件同理。
  auth: number
}

export interface ILoginFeedBackData {
  token: string
  type: number
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

