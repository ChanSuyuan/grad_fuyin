import { FYAPI } from "../../../common/api/api";

interface IStateResponse {
  data?: number
  ok?: boolean
  text?: string
  errorCode?: number
}

class AuthTokenApi {
  /**
   * @name 检查token是否失效
   */
  checkoutState(): Promise<IStateResponse> {
    return FYAPI.GET(`/api/checkoutstate`)
  }
}

export const authTokenApi = new AuthTokenApi()