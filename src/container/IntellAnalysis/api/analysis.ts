/**
 * @file params management
 * @author ChaChaQA
 */

import { FYAPI } from "../../../common/api/api";
import { IParamsRiskReportFeedBackInfo, IParamsRiskReportInfo } from "../model/analysis";

const baseURL = '/user'


class AnalysisApi {
  /**
   * @name 风控报告
   */
  getRiskReport(params: IParamsRiskReportInfo): Promise<IParamsRiskReportFeedBackInfo> {
    return FYAPI.GET({
      url: `${baseURL}/getriskreport`,
      query: params
    })
  }
}

export const analysisApi = new AnalysisApi()