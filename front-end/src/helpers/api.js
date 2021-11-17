import axios from 'axios'
import { getToken } from './auth.js'

const baseUrl = '/api'

export const fetchRecipes = async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}/recipes`,
    headers: {},
  }
  const response = await axios(config)
  return response.data
}

export const fetchRecipe = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/recipes/${id}`,
    headers: {},
  }
  const response = await axios(config)
  console.log(response.data)
  return response.data
}

export const deleteRecipe = async (id) => {
  const config = {
    method: 'delete',
    url: `${baseUrl}/recipes/${id}`,
    headers: {
      Authorisation: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const login = async (data) => {
  return makeAxiosRequest('/login', data)
}

export const register = (data) => {
  return makeAxiosRequest('/register', data)
}

const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
    data,
  }
  console.log(config)
  return config
}

export const getAxiosPutRequestConfig = (requestUrl, data, method = 'put') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
    data,
  }
  return config
}

export const getAxiosDeleteRequestConfig = (requestUrl, method = 'delete') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
  }
  return config
}
