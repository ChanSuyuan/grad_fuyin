import { FYAPI } from "../../../../common/api/api";
import { IRiskZb } from "../../model/adminParams";

interface IZdyZBs {
  bzz?: string
  key?: string
  normal?: number
  unnormal?: number
}

interface IZdyZBsFeedBack {
  data?: string
  errorCode?: number
  ok?: boolean
  text?: string
}

interface IFxbsFeedBack {
  data?: IFxbsData[]
  errorCode?: number
  ok?: boolean
  text?: string
}

export interface IFxbsData {
  createTime?: string
  fxd?: string
  id?: number
  jy?: string
  type?: number
  updateTime?: string
  zfz?: string
}


class CustomRiskApi {
  /**
   * @name 管理员自定义风险指标
   */
  customRiskZb(params: IZdyZBs[]): Promise<IZdyZBsFeedBack> {
    return FYAPI.POST(`/admin/updatezb`, params)
  }
  /**
   * 
   * @name 管理员获取风险表
   */
  getfxbs(): Promise<IFxbsFeedBack> {
    return FYAPI.GET('/admin/getfxbs')
  }
  /**
   * @name 管理员获取风险指标
   */
  getRiskZb(): Promise<IRiskZb> {
    return FYAPI.GET(`/admin/getzb`)
  }
  /**
   * 
   * @name 超级管理员获取风险表
   */
  superAdminGetfxbs(): Promise<IFxbsFeedBack> {
    return FYAPI.GET('/superadmin/getfxbs')
  }
  /**
* @name 超级管理员获取风险指标
*/
  getsuperAdminRiskZb(): Promise<IRiskZb> {
    return FYAPI.GET(`/superadmin/getzb`)
  }
  /**
   * @name 超级管理员自定义风险指标
   */
  superAdminCustomRiskZb(params: IZdyZBs[]): Promise<IZdyZBsFeedBack> {
    return FYAPI.POST(`/superadmin/updatezb`, params)
  }
}
export const customRiskParamsApi = new CustomRiskApi()