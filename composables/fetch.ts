import { $fetch } from 'ohmyfetch'
import { storeToRefs } from 'pinia'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/',
  async onRequest({ options }) {
    const { count } = storeToRefs(useCount())
    options.headers = {
      ...options.headers,
      customs: `count: ${count.value}`,
    }
  },
})
