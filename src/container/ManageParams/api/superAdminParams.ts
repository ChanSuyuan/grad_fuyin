import { FYAPI } from "../../../common/api/api"
import { ISuperAdminCustomFrc, ISuperAdminCustomFrcFeedBack, ISuperAdminCustomRisk, ISuperAdminCustomRiskFeedBack } from "../model/superAdminParams"

const baseURL = '/superadmin'
export class SuperAdminParmsApi {
  /**
   * @name 超级管理员自定义风险指标
   */
  customRisk(params: ISuperAdminCustomRisk): Promise<ISuperAdminCustomRiskFeedBack> {
    return FYAPI.POST(`${baseURL}/updatezb`, params)
  }
  /**
   * @name 超级管理员自定义模型指标
   */
  customFc(params: ISuperAdminCustomFrc): Promise<ISuperAdminCustomFrcFeedBack> {
    return FYAPI.POST(`${baseURL}/updatezdyzbmodel`, params)
  }
}

export const superAdminParamsApi = new SuperAdminParmsApi()