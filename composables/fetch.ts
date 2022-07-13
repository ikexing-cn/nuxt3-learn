import { $fetch } from 'ohmyfetch'
import { storeToRefs } from 'pinia'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/',
  async onRequest({ options }) {
    const input = options.method === 'get' ? options.params : options.body
    const { count } = storeToRefs(useCount())
    options.headers = {
      ...options.headers,
      customs: `count: ${count.value}`,
    }
    console.log('[fetch request]', input)
  },
  async onResponse({ response }) {
    console.log('[fetch response]', response.status, response._data)
  },
})
