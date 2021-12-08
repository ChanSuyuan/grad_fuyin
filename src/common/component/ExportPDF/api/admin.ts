import { IParamsFcModel, IParamsRisk } from "../../../../container/IntellAnalysis/model/analysis";
import { FYAPI } from "../../../api/api";

interface ICreateReportFeedBack {
  errorCode?: number
  data?: string
  ok?: boolean
  text?: string
}


class AdminExportPdfApi {
  /**
   * @name 管理员生成风险控制报告记录
   * 
   */
  createRiskReportInfo(params: IParamsRisk): Promise<ICreateReportFeedBack> {
    return FYAPI.POST(`/admin/saveriskreportinfo`, params)
  }
  /**
   * @name 管理员生成融资模型报告记录
   * 
   */
  createFcReportInfo(params: IParamsFcModel): Promise<ICreateReportFeedBack> {
    return FYAPI.POST(`/admin/savemodelreportinfo`, params)
  }
}

export const adminExportPdfApi = new AdminExportPdfApi()