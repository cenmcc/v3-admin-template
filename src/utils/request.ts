import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"
import type { AxiosResponse } from 'axios'

function createService() {
  const service = axios.create();
  service.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  )
  service.interceptors.response.use(
    (response: AxiosResponse) => {
      const apiData = response.data;
      const code = apiData.responseCode
      if(code === undefined) {
        return Promise.reject(new Error("请求发生未知错误"))
      } else {
        switch(code) {
          case 0:
            return apiData
          default:
            const message = useMessage()
            message.error(apiData.responseMessage)
            return Promise.reject(apiData)
        }
      }
    },
    (error) => Promise.reject(error) 
  )
  return service
}

/** 创建请求方法 */
function createRequestFunction(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const configDefault = {
      headers: {
        Authorization: '',
        "Content-Type": "application/json"
      },
      timeout: 5000,
      baseURL: import.meta.env.VITE_BASE_API,
      data: {}
    }
    return service(Object.assign(configDefault, config))
  }
}

/** 用于网络请求的实例 */
export const service = createService()
/** 用于网络请求的方法 */
export const request = createRequestFunction(service)