/**
 * @file normal account
 */

import { FYAPI } from "../../common/api/api"
import {
  ILoginFeedBackInfo,
  ILoginInfo,
  IModifyBaseInfo,
  IModifyFeedBackInfo,
  IModifyLoginInfo,
  IRegisterInfo,
  IResgistFeedBackInfo
} from "../model/account"

const baseURL = '/user'
class BehaviorApi {
  /**
   * 
   * @name 注册信息提交
   * @returns {IRegisterInfo}
   */
  regist(params: IRegisterInfo): Promise<IResgistFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/register`, params)
  }

  /**
   * 
   * @name 个人信息修改
   * @returns {CharactersInfo}
   */
  modify(params: IModifyBaseInfo): Promise<IModifyFeedBackInfo> {
    return FYAPI.POST(``, params)
  }

  /**
   * @name 登录
   * @returns {ILoginFeedBackInfo}
   */
  login(params: ILoginInfo): Promise<ILoginFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/login`, params)
  }

  /**
   *  @name 登出
   */
  logout() {
    return FYAPI.POST(`${baseURL}/logout`)
  }

  /**
   * @name 根据旧密码修改密码
   * @return {IModifyLoginInfo}
   */
  modifypwdWithOldPwd(params: IModifyLoginInfo): Promise<IModifyFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/updatepasswordbyoldpassword`, params)
  }

}
export const behaviorApi = new BehaviorApi()