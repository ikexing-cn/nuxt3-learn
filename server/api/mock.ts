import request from '~~/utils/request'

interface MockData {
  message: string
  code: number
}

export async function getMockData() {
  const data = await request<MockData>({
    method: 'get',
  })
  console.log(data)
  return data
}

export async function postMockData() {
  const data = await request<MockData>({
    method: 'post',
  })
  console.log(data)
  return data
}

export async function putMockData() {
  const data = await request<MockData>({
    method: 'put',
  })
  console.log(data)
  return data
}

export async function deleteMockData() {
  const data = await request<MockData>({
    method: 'delete',
  })
  console.log(data)
  return data
}
