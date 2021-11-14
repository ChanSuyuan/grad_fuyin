
export interface IResponse<T> extends IAPIError {
  data: T
  ok?: boolean
  text?: string
  errorCode?: number
  marker?: string
  request_id: string
}

export interface IAPIError {
  code: string
  message: string[]
  request_id: string
}

export class APIError {
  code: string
  message: string[]
  request_id: string

  constructor(err: IAPIError) {
    this.code = err.code || "UNKNOWN"
    this.message = err.message || []
    this.request_id = err.request_id || "-"
  }

  toString(): string {
    return `[API ERROR] [${this.code}] [${this.request_id}]\n\t${this.message.join("\n\t")}`
  }
}