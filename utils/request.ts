import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:4000/',
})

export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await request(config)
  return (res.data.data || res.data) as T
}
