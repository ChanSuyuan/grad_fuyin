import { FYAPI } from "../../../common/api/api";
import { IQueryRecordFeedBack } from "../model/record";

const baseURL = '/user'
const pageNum = 10000
const pageSize = 10000
class RecordApi {
  /**
   * @name 获取操作报告
   */
  getRecordInfo(params: any): Promise<IQueryRecordFeedBack> {
    return FYAPI.GET(`${baseURL}/getreportinfo/${pageNum}/${pageSize}/${params}`)
  }
  /**
   * @name 管理员获取操作报告
   */
  adminGetRecordInfo(params: any): Promise<IQueryRecordFeedBack> {
    return FYAPI.GET(`/admin/getreportinfo/${pageNum}/${pageSize}/${params}`)
  }
  /**
   * @name 超级管理员获取操作报告
   */
  superAdminGetRecordInfo(params: any): Promise<IQueryRecordFeedBack> {
    return FYAPI.GET(`/superadmin/getreportinfo/${pageNum}/${pageSize}/${params}`)
  }
}

export const recordApi = new RecordApi()