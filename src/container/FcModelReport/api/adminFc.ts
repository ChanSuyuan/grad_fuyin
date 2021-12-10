import { FYAPI } from "../../../common/api/api";
import { IGpDetailsFc, IGpDetailsFcFeedBack } from "../model";

class AdminFcApi {
  /**
   * @name 管理员获取能力分析
   */
  getFcAnalysis(params: IGpDetailsFc): Promise<IGpDetailsFcFeedBack> {
    return FYAPI.POST(`/admin/getmodelanalysis`, params)
  }
}

export const adminFcApi = new AdminFcApi()