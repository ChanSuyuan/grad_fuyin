import { FYAPI } from "../../../common/api/api";
import { IQueryRecordFeedBack } from "../model/record";

const baseURL = '/user'
const pageNum = 10
const pageSize = 10
class RecordApi {
  /**
   * @name 获取操作报告
   */
  getRecordInfo(params: any): Promise<IQueryRecordFeedBack> {
    return FYAPI.GET(`${baseURL}/getreportinfo/${pageNum}/${pageSize}/${params}`)
  }
}

export const recordApi = new RecordApi()