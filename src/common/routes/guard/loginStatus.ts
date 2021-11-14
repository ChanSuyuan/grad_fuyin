import { useHistory } from "react-router-dom"

export const LoginStatus = () => !!localStorage.getItem('user_token')


export const RedirectToRegsiter = () => {
  const history = useHistory()
  history.push('/register')
}