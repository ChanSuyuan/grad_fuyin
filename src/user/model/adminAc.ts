/**
 * @file admin imformation monitor
 */

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
  data: ILoginDataBack
  errorCode?: number
  ok?: boolean
  text?: string
  auth: number
}

export interface ILoginDataBack {
  token: string
  type: number
}

export interface IAdminLogOutFeedBackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

// admin Update Pwd
export interface IAdminUpdatePwdInfo {
  userName: string
  password: string
  hobby?: string
}


// Update Pwd  FeedBackInfo
export interface IAdminUpdatePwdFeedBackInfo {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}
