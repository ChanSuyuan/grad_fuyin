import { FYAPI } from "../../common/api/api";
import {
  IResetPassword,
  IResetPasswordFeedBackInfo,
  ISendRestEmailFeedBack
} from "../model/reset";



const baseURL = '/validate'

class ResetApi {
  resetPassword(params: IResetPassword): Promise<IResetPasswordFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/resetPassword`, params)
  }
  sendResetEmail(params: string): Promise<ISendRestEmailFeedBack> {
    return FYAPI.POST(`${baseURL}/sendValidationEmail?email=${params}`)
  }
}

export const resetApi = new ResetApi()