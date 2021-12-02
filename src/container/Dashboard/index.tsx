import React, { useEffect } from "react"
import { useHistory } from "react-router"


export const Dashboard: React.FC = () => {
  const history = useHistory()
  const isLogin = () => {
    if (!localStorage.getItem('user_token')) {
      history.push('/login')
    } else {

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