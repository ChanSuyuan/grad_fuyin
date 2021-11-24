import { FYAPI } from "../../../common/api/api";
import { queryRecordFeedBack } from "../model/record";

const baseURL = '/user'
const pageNum = 10
const pageSize = 10
class RecordApi {
  /**
   * @name 获取操作报告
   */
  getRecordInfo(): Promise<queryRecordFeedBack> {
    return FYAPI.GET(`${baseURL}/getreportinfo/${pageNum}/${pageSize}`)
  }
}

export const recordApi = new RecordApi()