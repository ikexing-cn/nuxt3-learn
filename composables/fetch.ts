import { $fetch } from 'ohmyfetch'

export const useCustomFetch = $fetch.create({
  baseURL: 'http://localhost:4000/',
})
