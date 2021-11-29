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
const superadminURL = '/superadmin'

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
   * @name 融资模型报告
   */
  getmodelReport(params: IQueryModelReport, gpName: string): Promise<IParamsFcModelReportFeedBackInfo> {
    return FYAPI.POST(`${baseURL}/getmodelreport?gpName=${gpName}`, params)
  }
}

export const analysisApi = new AnalysisApi()