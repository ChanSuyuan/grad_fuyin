import { FYAPI } from "../../../common/api/api";
import { IGpDetailsRisk, IGpDetailsRiskFeedBack } from "../model/risk";

class SuperAdminRiskAPi {
  /**
   * @name 获取能力分析表
   */
  getRiskAnalysis(params: IGpDetailsRisk): Promise<IGpDetailsRiskFeedBack> {
    return FYAPI.POST('/superadmin/getanalysis', params)
  }
}

export const superAdminRiskApi = new SuperAdminRiskAPi()