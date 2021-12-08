import { IParamsFcModel, IParamsRisk } from "../../../../container/IntellAnalysis/model/analysis";
import { FYAPI } from "../../../api/api";

interface ICreateReportFeedBack {
  errorCode?: number
  data?: string
  ok?: boolean
  text?: string
}


class UserExportPdfApi {
  /**
   * @name 普通用户生成风险控制报告记录
   * 
   */
  createRiskReportInfo(params: IParamsRisk): Promise<ICreateReportFeedBack> {
    return FYAPI.POST(`/user/saveriskreportinfo`, params)
  }
  /**
   * @name 普通用户生成融资模型报告记录
   * 
   */
  createFcReportInfo(params: IParamsFcModel): Promise<ICreateReportFeedBack> {
    return FYAPI.POST(`/user/savemodelreportinfo`, params)
  }
}

export const userExportPdfApi = new UserExportPdfApi()