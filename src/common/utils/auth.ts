import axios from 'axios'
import Cookies from 'js-cookie'
const TokenKey = 'Authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setLocalToken(key: string, token: any) {
  return localStorage.setItem(key, token)
}

export function removeLocalToken() {
  localStorage.removeItem('user_token')
  localStorage.removeItem('user_type')
}

export function setSessionToken(token: any) {
  return sessionStorage.setItem('user_token', token)
}

export function ChangeHeader() {
  let token = window.localStorage.getItem('user_token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export function setIpAddress(ipAddress: string) {
  localStorage.setItem('ip_address', ipAddress)
  let ip = ipAddress
  if (ip) {
    axios.defaults.headers.common['Ip-Address'] = ip
  }
}