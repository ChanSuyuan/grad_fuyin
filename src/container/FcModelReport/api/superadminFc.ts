import { FYAPI } from "../../../common/api/api";
import { IGpDetailsFc, IGpDetailsFcFeedBack } from "../model";

class SuperAdminFcApi {
  /**
   * @name 超级管理员获取能力分析
   */
  getFcAnalysis(params: IGpDetailsFc): Promise<IGpDetailsFcFeedBack> {
    return FYAPI.POST(`/superadmin/getmodelanalysis`, params)
  }
}

export const superAdminFcApi = new SuperAdminFcApi()