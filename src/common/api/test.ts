import { FYAPI } from "./api";



class TestApi {
  /**
   * @file 测试用API
   */
  GET() {
    return FYAPI.GET("user/getriskreport")
  }
  POST() {
    return FYAPI.POST("user/login")
  }
  // test
}

export const testApi = new TestApi()