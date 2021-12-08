import { FYAPI } from "../../../common/api/api";
import { IGpDetailsRisk, IGpDetailsRiskFeedBack } from "../model/risk";

class AdminRiskAPi {
  /**
   * @name 获取能力分析表
   */
  getRiskAnalysis(params: IGpDetailsRisk): Promise<IGpDetailsRiskFeedBack> {
    return FYAPI.POST('/admin/getanalysis', params)
  }
}

export const adminriskApi = new AdminRiskAPi()