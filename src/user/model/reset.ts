
export interface IResetPassword {
  password: string
  token: string
}

export interface IResetPasswordFeedBackInfo {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}

export interface ISendRestEmail {
  email: string
}

export interface ISendRestEmailFeedBack {
  data?: string
  errorCode: number
  ok?: boolean
  text?: string
}