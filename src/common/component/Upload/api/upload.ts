import { FYAPI } from "../../../api/api";

interface IUploadExcelFeedBack {
  errorCode?: number
  ok?: boolean
  text?: string
  data?: string
}

class UploadApi {
  /**
   * @name
   */
  uploadExcel(type: number): Promise<IUploadExcelFeedBack> {
    return FYAPI.POST(`/file/upload-excel?type=${type}`)
  }
}

export const uploadApi = new UploadApi()

