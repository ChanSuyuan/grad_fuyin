import { Button, Result } from 'antd'
import React from 'react'
import { useHistory } from "react-router"
import { config } from '../../utils/config'
import { queryParams } from '../../utils/queryParams'
import GlobalFooter from '../GlobalFooter'

export const UpdateEmailFeedBack: React.FC = () => {
  const history = useHistory()
  let isShow = false

  const setShow = (v: boolean) => {
    isShow = v
  }

  const code = queryParams('register_result')
  code === "1" && setShow(true)


  const handleChange = (v: number) => {
    v === 1 ? history.push('/fyapp/dashboard') : history.push('/fyapp/dashboard')
  }

  return (
    <>
      <div className="container-fluid">
        <a href="../login" className="navbar-brand">
          <span>富银LOGO 预留位置</span>
        </a>
      </div>
      <div className="form-container">
        {isShow ?
          <Result
            status="success"
            title="修改成功"
            subTitle="修改成功！"
            extra={[
              <Button type="primary" key="console" onClick={() => handleChange(1)}>
                返回主界面
              </Button>
            ]}
          />
          :
          <Result
            status="error"
            title="修改失败"
            subTitle="修改失败，请返回界面重新注册，原因：链接失效！"
            extra={[
              <Button type="primary" key="console" onClick={() => handleChange(0)}>
                返回主界面
              </Button>
            ]}
          />
        }
        <div className="footer">
          <GlobalFooter className="footer" copyright={config.copyright} />
        </div>
      </div>
    </>
  )
}
