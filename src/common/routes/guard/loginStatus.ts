import { useHistory } from "react-router-dom"

export const LoginStatus = () => !!localStorage.getItem('user_token')


export const RedirectToLogin = () => {
  const history = useHistory()
  history.push('/login')
}