/**
 * @file super-admin-account
 * @author ChaChaOk
 */

import { FYAPI } from "../../common/api/api";
import {
  ISuperAdminLoginFeedbackInfo,
  ISuperAdminLoginInfo,
  ISuperAdminModifyUpdatePwdFeedbackInfo,
  ISuperAdminModifyUpdatePwdInfo
} from "../model/super-adminAc";

const baseURL = 'superadmin'

class SuperAdminApi {
  /**
   * @name 超级管理员登陆
   */
  login(params: ISuperAdminLoginInfo): Promise<ISuperAdminLoginFeedbackInfo> {
    return FYAPI.POST(`${baseURL}/login`, params)
  }

  /**
   * @name 超级管理员修改自己、管理员或用户密码
   */
  modify(params: ISuperAdminModifyUpdatePwdInfo): Promise<ISuperAdminModifyUpdatePwdFeedbackInfo> {
    return FYAPI.POST(`${baseURL}/login`, params)
  }
}

export const superAdminApi = new SuperAdminApi()