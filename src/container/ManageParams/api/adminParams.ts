import { FYAPI } from "../../../common/api/api";
import { IAdminCustomFrc, IAdminCustomFrcFeedBack, IAdminCustomRisk, IAdminCustomRiskFeedBack, IAdminGetMatchDegreeFeedBack, IModifyMatchDegree, IModifyMatchDegreeFeedBack } from "../model/adminParams";

const baseURL = '/admin'
export class AdminParmsApi {
  /**
   * @name 管理员自定义风险指标
   */
  customRisk(params: IAdminCustomRisk): Promise<IAdminCustomRiskFeedBack> {
    return FYAPI.POST(`${baseURL}/updatezb`, params)
  }
  /**
   * @name 管理员自定义模型指标
   */
  customFrc(params: IAdminCustomFrc): Promise<IAdminCustomFrcFeedBack> {
    return FYAPI.POST(`${baseURL}/updatezdyzbmodel`, params)
  }
  /**
   * @name 管理员获取融资匹配度
   */
  getMatchDegree(): Promise<IAdminGetMatchDegreeFeedBack> {
    return FYAPI.GET(`${baseURL}/getrzppd`)
  }
  /**
   * @name 管理员修改融资匹配度
   */
  modifyMatchDegree(params: IModifyMatchDegree[]): Promise<IModifyMatchDegreeFeedBack> {
    return FYAPI.POST(`${baseURL}/updaterzppd`, params)
  }
}

export const adminParamsApi = new AdminParmsApi()