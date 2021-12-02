import { FYAPI } from "../../../common/api/api"
import { ISystemLog } from "../model/admin"


const pageSize = 10000
const pageNum = 10000

const baseURL = '/admin'
export class AdminSystemApi {
  /**
   * @name 管理员获取操作日志
   */
  getSystemParams(): Promise<ISystemLog> {
    return FYAPI.GET(`${baseURL}/getoperationlogs/${pageNum}/${pageSize}`)
  }
}

export const adminSystemApi = new AdminSystemApi()