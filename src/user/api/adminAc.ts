/**
 * @file admin-account
 * @author ChaChaOk @chensunyan0721
 * 2021.11.17
 */

import { FYAPI } from "../../common/api/api";
import { IResponse } from "../../common/model/api";
import {
  IAdminLogOutInfo,
  IAdminUpdateIndicatorsInfo,
  IAdminUpdateIndicatorsFeedBackInfo,
  IAdminUpdatePwdInfo,
  IAdminUpdatePwdFeedBackInfo,
  ILoginFeedBackInfo,
  ILoginInfo
} from "../model/adminAc";

const baseURL = '/admin'

class AdminApi {
  /**
   * @name 管理员登陆
   */
  login(params: ILoginInfo): Promise<IResponse<ILoginFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/login`, params)
  }

  /**
   * @name 管理员修改用户密码
   */
  modify(params: IAdminUpdatePwdInfo): Promise<IResponse<IAdminUpdatePwdFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/updateiserpassword`, params)
  }

  /**
   * @name 管理员自定义指标
   */
  ModidyIndicators(params: IAdminUpdateIndicatorsInfo): Promise<IResponse<IAdminUpdateIndicatorsFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/updatezb`, params)
  }

  /**
   * @name 管理员登出
   */
  logOut(params: IAdminLogOutInfo): Promise<IResponse<IAdminUpdatePwdFeedBackInfo>> {
    return FYAPI.POST(`${baseURL}/logout`)
  }

  /**
   * @name 管理员接口测试
   */
  test() {
    return FYAPI.GET(`${baseURL}/test`)
  }
}


export const adminApi = new AdminApi()