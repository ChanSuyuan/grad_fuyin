import { FYAPI } from "../../../common/api/api"
import { IAllUsersFB, IModifyParams, IModifyParamsFB } from "../model/adminUser"


const PageNum = 10000
const PageSize = 10000

const baseURL = '/superadmin'
class SuperAdminUserApi {
  /**
   * @name 超级管理员获取所有用户
   */
  getAllUser(): Promise<IAllUsersFB> {
    return FYAPI.GET(`${baseURL}/getallusers/${PageNum}/${PageSize}`)
  }
  /**
   * @name 管理员修改用户信息
   */
  modifyUsrs(params: IModifyParams): Promise<IModifyParamsFB> {
    return FYAPI.POST(`${baseURL}/updateuserinfo`, params)
  }
}

export const superAdminUsersApi = new SuperAdminUserApi()