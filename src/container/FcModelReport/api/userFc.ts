import { FYAPI } from "../../../common/api/api";
import { IGpDetailsFc, IGpDetailsFcFeedBack } from "../model";

class UserFcApi {
  /**
   * @name 普通用户获取能力分析
   */
  getFcAnalysis(params: IGpDetailsFc): Promise<IGpDetailsFcFeedBack> {
    return FYAPI.POST(`/superadmin/getmodelanalysis`, params)
  }
}

export const userFcApi = new UserFcApi()