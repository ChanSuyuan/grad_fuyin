/**
 * @file params management
 * @author ChaChaQA
 */

import { FYAPI } from "../../../common/api/api";
import {
  IParamsFcModelReportFeedBackInfo,
  IParamsRiskReportFeedBackInfo,
  IParamsRiskReportInfo,
  IQueryModelReport
} from "../model/analysis";

const baseURL = '/user'
const adminURL = '/admin'
const superAdminURL = '/superadmin'

class AnalysisApi {
  /**
   * @name 融资风控报告
   */
  getRiskReport(params: IParamsRiskReportInfo): Promise<IParamsRiskReportFeedBackInfo> {
    return FYAPI.GET({
      url: `${baseURL}/getriskreport`,
      query: params
    })
  }
  /**
   * @name 管理员融资风控报告
   */
  getAdminRiskReport(params: IParamsRiskReportInfo): Promise<IParamsRiskReportFeedBackInfo> {
    return FYAPI.GET({
      url: `${adminURL}/getriskreport`,
      query: params
    })
  }
  /**
   * @name 超级管理员融资风控报告
   */
  getSuperAdminRiskReport(params: IParamsRiskReportInfo): Promise<IParamsRiskReportFeedBackInfo> {
    return FYAPI.GET({
      url: `${superAdminURL}/getriskreport`,
      query: params
    })
  }


  /**
   * @name 融资模型报告
   */
  getmodelReport(params: IQueryModelReport, gpName: string): Promise<IParamsFcModelReportFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/getmodelreport?gpName=${gpName}`, params)
  }

  /**
   * @name 管理员获取融资模型报告
   */
  getAdminmodelReport(params: IQueryModelReport, gpName: string): Promise<IParamsFcModelReportFeedBackInfo> {
    return FYAPI.POST(`${adminURL}/getmodelreport?gpName=${gpName}`, params)
  }

  /**
   * @name 管理员获取融资模型报告
   */
  getSuperAdminmodelReport(params: IQueryModelReport, gpName: string): Promise<IParamsFcModelReportFeedBackInfo> {
    return FYAPI.POST(`${superAdminURL}/getmodelreport?gpName=${gpName}`, params)
  }

}

export const analysisApi = new AnalysisApi()