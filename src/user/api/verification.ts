import { FYAPI } from "../../common/api/api";

interface IVerificationFeedBack {
  errorCode?: number
  data?: string
  ok?: boolean
  text?: string
}

class VerificationApi {
  /**
   * @name 获取验证码
   */
  getVerificationPictures(): Promise<IVerificationFeedBack> {
    return FYAPI.GET('/verify/verification')
  }
  /**
   * @name 获取随机 key
   */
  getRandomKey(): Promise<IVerificationFeedBack> {
    return FYAPI.GET('/verify/verification/getrandomkey')
  }
}

export const verificationApi = new VerificationApi()
