import { FYAPI } from "../../../common/api/api";
import { IGpDetailsRisk, IGpDetailsRiskFeedBack } from "../model/risk";

class UserRiskAPi {
  /**
   * @name 获取能力分析表
   */
  getRiskAnalysis(params: IGpDetailsRisk): Promise<IGpDetailsRiskFeedBack> {
    return FYAPI.POST('/user/getanalysis', params)
  }
}

export const userRiskApi = new UserRiskAPi()