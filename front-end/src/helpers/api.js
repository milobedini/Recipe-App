import axios from 'axios'

const baseUrl = 'https://localhost:4000/api'

export const fetchRecipe = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/recipes/${id}`,
    headers: {},
  }
  const response = await axios(config)
  return response.data
}
