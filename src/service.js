import axios from 'axios'

const api = axios.create({
  baseURL: 'https://localhost:5000'
})

export const fetch = async data => {
  const response = await api.post('/answer/', data)
  return response.data
}
