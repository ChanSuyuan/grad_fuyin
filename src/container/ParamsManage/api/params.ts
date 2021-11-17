/**
 * @file params management
 * @author ChaChaQA
 */

import { FYAPI } from "../../../common/api/api";
import { IParamsRiskReportFeedBackInfo, IParamsRiskReportInfo } from "../model/params";

const baseURL = '/user'


class paramsApi {
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