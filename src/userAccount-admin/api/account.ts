import { FYAPI } from "../../common/api/api"
import { IResponse } from "../../common/model/api"
import {
  ILoginFeedBackInfo,
  ILoginInfo,
  IModifyBaseInfo,
  IModifyFeedBackInfo,
  IModifyLoginInfo,
  IRegisterInfo,
  IResgistFeedBackInfo
} from "../model/account"


// 暂时直接调用 res.data 即可，深层次功能尚未实现 2021.11.12
const baseURL = "/user"
class BehaviorApi {
  /**
   * 
   * @name 注册信息提交
   * @returns {IRegisterInfo}
   */
  regist(params: IRegisterInfo): Promise<IResponse<IResgistFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/register`, params)
  }

  /**
   * 
   * @name 个人信息修改
   * @returns {CharactersInfo}
   */
  modify(params: IModifyBaseInfo): Promise<IResponse<IModifyFeedBackInfo>> {
    return FYAPI.POST(``, params)
  }

  /**
   * @name 登录
   * @returns {ILoginFeedBackInfo}
   */
  login(params: ILoginInfo): Promise<IResponse<ILoginFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/login`, params)
  }

  /**
   * @name 根据旧密码修改密码
   * @return {IModifyLoginInfo}
   */
  modifypwdWithOldPwd(params: IModifyLoginInfo): Promise<IResponse<IModifyFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/updatepasswordbyoldpassword`, params)
  }

}
export const behaviorAPI = new BehaviorApi()