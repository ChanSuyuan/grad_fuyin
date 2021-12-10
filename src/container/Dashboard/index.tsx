import React, { useEffect } from "react"
import { useHistory } from "react-router"
import { authTokenApi } from "./api"


export const Dashboard: React.FC = () => {
  const history = useHistory()
  const token = localStorage.getItem('user_token')
  const isLogin = () => {
    if (!token) {
      history.push('/login')
    } else if (token) {
      authTokenApi.checkoutState()
        .then(res => {
          if (res.data === -1) {
            const userType = localStorage.getItem('user_type')
            if (userType === '0') {
              history.push('/login')
            } else {
              history.push('/loginadmin')
            }
          }
        })
    }
  }

  useEffect(() => {
    isLogin()
  });

  return (
    <>
      <div className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, background: "#fff" }}>
        Content
      </div>
    </>
  )
}