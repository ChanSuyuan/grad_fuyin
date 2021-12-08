import { FYAPI } from "../../../common/api/api";

interface ExcelFeedBack {
  errorCode?: number
  ok?: boolean
  text?: string
  data?: string
}

class ExcelApi {
  /**
   * @name 下载Excel模板
   */
  getExcelTemplate(gpName?: string, type?: number): Promise<ExcelFeedBack> {
    return FYAPI.GET(`/file/download-excel?gpName=${gpName}&type=${type}`)
  }
}
export const excelApi = new ExcelApi()

