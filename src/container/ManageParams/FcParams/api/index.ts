
import { FYAPI } from "../../../../common/api/api";
import { IAdminGetMatchDegreeFeedBack, IModifyMatchDegree, IModifyMatchDegreeFeedBack, IZdyzbModelFeedback } from "../../model/adminParams";

interface IZdyzbModel {
  createTime?: string
  equation?: string
  id?: number
  score?: number
  type?: number
  updateTime?: string
  zbKey?: string
}


export class customFcApi {
  /**
   * @name 管理员获取融资匹配度
   */
  getMatchDegree(): Promise<IAdminGetMatchDegreeFeedBack> {
    return FYAPI.GET(`/admin/getrzppd`)
  }
  /**
   * @name 超级管理员获取融资匹配度
   */
  getSuperAdminMatchDegree(): Promise<IAdminGetMatchDegreeFeedBack> {
    return FYAPI.GET(`/superadmin/getrzppd`)
  }
  /**
   * @name 超级管理员修改融资匹配度
   */
  superAdminModifyMatchDegree(params: IModifyMatchDegree[]): Promise<IModifyMatchDegreeFeedBack> {
    return FYAPI.POST(`/superadmin/updaterzppd`, params)
  }
  /**
   * @name 管理员修改融资匹配度
   */
  modifyMatchDegree(params: IModifyMatchDegree[]): Promise<IModifyMatchDegreeFeedBack> {
    return FYAPI.POST(`/admin/updaterzppd`, params)
  }
  /**
   * @name 管理员获取自定义模型指标
   */
  getzdyzbModel(): Promise<IZdyzbModelFeedback> {
    return FYAPI.GET(`/admin/getzdyzbmodel`)
  }
  /**
   * @name 超级管理员获取自定义模型指标
   */
  getSuperAdminZdyzbModel(): Promise<IZdyzbModelFeedback> {
    return FYAPI.GET(`/superadmin/getzdyzbmodel`)
  }
  /**
   * @name 管理员自定义模型指标
   */
  modifyCustomFcZb(params: IZdyzbModel): Promise<IZdyzbModelFeedback> {
    return FYAPI.POST(`/admin/updatezdyzbmodel`, params)
  }
  /**
 * @name 超级管理员自定义模型指标
 */
  superAdminModifyCustomFcZb(params: IZdyzbModel): Promise<IZdyzbModelFeedback> {
    return FYAPI.POST(`/superadmin/updatezdyzbmodel`, params)
  }
}

export const customFcParamsApi = new customFcApi()