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

export function setLocalToken(token: any) {
  return localStorage.setItem('user_token', token)
}

export function setSessionToken(token: any) {
  return sessionStorage.setItem('user_token', token)
}

// export const setAuthToken = () => {
//   let token = `Authorization${Cookies.get('Authorization')}`
//   if (token) {
//     axios.defaults.headers.common['token'] = getToken()
//   } else {
//     delete axios.defaults.headers.common['token']
//   }
// }


