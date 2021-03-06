/**
 * @file fy_api
 * 
 */
import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import { APIError } from '../model/api'

export const userType = localStorage.getItem('user_type')

let token = window.localStorage.getItem('user_token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
} else {
  delete axios.defaults.headers.common['Authorization']
}

let userName = window.localStorage.getItem('user_name')
if (userName) {
  axios.defaults.headers.common['userName'] = userName
} else {
  delete axios.defaults.headers.common['userName']
}

fetch('https://api.ipify.org')
  .then(res => res.text())
  .then(res => {
    localStorage.setItem('ip_address', res)
    axios.defaults.headers.common['ip_address'] = res
  })


type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

// const API_PREFIX = '/fuyin'

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
  public static GET<IResult>(url: IURL, extras?: IExtra, bodyObj?: any): Promise<IResult> {
    return this.fetch("GET", url, extras)
  }

  public static POST<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResult> {
    return this.fetch("POST", url, bodyObj, extras)
  }

  public static PUT<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResult> {
    return this.fetch("PUT", url, bodyObj, extras)
  }

  public static PATCH<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResult> {
    return this.fetch("PATCH", url, bodyObj, extras)
  }

  public static DELETE<IResult>(url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResult> {
    return this.fetch("DELETE", url, bodyObj, extras)
  }

  private static async fetch<IResult>(method: HTTPMethod, url: IURL, bodyObj?: any, extras?: IExtra): Promise<IResult> {
    const cfg: AxiosRequestConfig = {
      // baseURL: API_PREFIX,
      url: FYAPI.genURLStr(url),
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Accept': 'application/json;charset=utf-8;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
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
