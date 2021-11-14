/**
 * @file fy_api
 * 
 */

import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import { APIError, IResponse } from '../model/api'

const API_PREFIX = ''
// const DEFAULT_API_VERSION = ''

// declare function formatURL(url: string, params: any) : string ;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

type IURL =
  | string
  | {
    url: string
    query: { [key: string]: any }
  }

interface IExtra {
  csrfToken?: string
  slience?: boolean
}

export class FYAPI {
  public static GET<IResult>(url: IURL, extras?: IExtra): Promise<IResponse<IResult>> {
    return this.fetch("GET", url, extras)
  }

  public static POST<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResponse<IResult>> {
    return this.fetch("POST", url, bodyObj, extras)
  }

  public static PUT<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResponse<IResult>> {
    return this.fetch("PUT", url, bodyObj, extras)
  }

  public static PATCH<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResponse<IResult>> {
    return this.fetch("PATCH", url, bodyObj, extras)
  }

  public static DELETE<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResponse<IResult>> {
    return this.fetch("DELETE", url, bodyObj, extras)
  }

  private static async fetch<IResult>(method: HTTPMethod, url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResponse<IResult>> {
    const cfg: AxiosRequestConfig = {
      baseURL: API_PREFIX,
      url: FYAPI.genURLStr(url),
      method,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      withCredentials: true,
      data: bodyObj
    }
    return axios(cfg)
      .then(res => res.data)
      .catch((err) => {
        if (err.response) {
          const data = err.response.data
          if (data && data.code && data.message) {
            throw new APIError({
              ...data,
              request_id: data.request_id || "-"
            })
          }
        }
      })
  }

  private static genURLStr(url: IURL): string {
    if (typeof url === "string") {
      return url
    }
    return queryString.stringifyUrl(url)
  }
}