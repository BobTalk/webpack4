import axios from 'axios'
// 创建axios实例
const service = axios.create({
  headers: {
    'Content-Type': 'application/json',
    charset: 'utf-8'
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
        return response.data
    }
  },
  error => {
    if (error.response) {
      let message = error?.response?.data?.Error?.Message
        if (error.response.status === 400) {
          message ? Message.error(`${message}`) : Message.error(`[400]错误的请求`)
        } else if (error.response.status === 401) {
            message ? Message.error(`${message}`) : Message.error(`会话过期,请重新登录`)
        } else if (error.response.status === 403) {
            message ? Message.error(`${message}`) : Message.error('拒绝访问')
        } else if (error.response.status === 404) {
          message ? Message.error(`${message}`) : Message.error('未找到')
        } else if (error.response.status === 500) {
          message ? Message.error(`${message}`) : Message.error('服务器内部错误')
        }
    }
  }
)
export default service
