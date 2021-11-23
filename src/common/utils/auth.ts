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

export function setSessionToken(token: any) {
  return sessionStorage.setItem('user_token', token)
}
