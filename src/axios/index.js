import axios from 'axios'
import { provide, inject } from 'vue'

axios.defaults.url = 'http://localhost:3000'

const http = axios.create()

http.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (err) {
    return Promise.reject(err)
  }
)

const axiosName = Symbol('axiosName')

// 子元素获取
export function useAxios () {
  return inject(axiosName)
}

// 父元素注入
export function installAxios () {
  return provide(axiosName, http)
}

export function useRequest (url, data = {}, method = 'GET') {
  const http = useAxios()
  return http({
    url,
    data,
    method
  })
}
