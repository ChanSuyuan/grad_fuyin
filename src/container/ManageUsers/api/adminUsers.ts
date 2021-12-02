import { FYAPI } from "../../../common/api/api"
import { IAllUsersFB, IModifyParams, IModifyParamsFB } from "../model/adminUser"


const PageNum = 100000
const PageSize = 100000

const baseURL = '/admin'
class AdminUserApi {
  /**
   * @name 管理员获取所有用户
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

export const adminUsersApi = new AdminUserApi()