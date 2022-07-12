interface MockData {
  message: string
  code: number
}

export async function getMockDataFetch() {
  const data = await useCustomFetch<MockData>('')
  console.log(data)
  return data
}

export async function postMockDataFetch() {
  const data = await useCustomFetch<MockData>('/', { method: 'post' })
  console.log(data)
  return data
}

export async function putMockDataFetch() {
  const data = await useCustomFetch<MockData>('', { method: 'put' })
  console.log(data)
  return data
}

export async function deleteMockDataFetch() {
  const data = await useCustomFetch<MockData>('', { method: 'delete' })
  console.log(data)
  return data
}
