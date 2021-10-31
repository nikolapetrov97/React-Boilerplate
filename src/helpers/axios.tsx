import axios from 'axios'
import { api } from '../urlConfig'
import store from '../store'
import { authConstants } from '../actions/constants'

const token = window.sessionStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
})

axiosInstance.interceptors.request.use((req: any) => {
  const { auth } = store.getState()
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`
  }
  return req
})

axiosInstance.interceptors.response.use(
  (res: any) => {
    return res
  },
  (error: any) => {
    console.log(error.response)
    const status = error.response ? error.response.status : 500
    if (status && status === 500) {
      sessionStorage.clear()
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS })
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
