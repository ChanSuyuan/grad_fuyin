import React from 'react'
import { Button, Col, Row } from 'antd'
import { useHistory, withRouter } from 'react-router'
import '../../common/assets/css/error.css'

const Error404 = () => {
  const history = useHistory()

  const goback = () => {
    history.push('/fyapp/dashboard')
  }

  return (
    <Row gutter={24} className="wrap-404">
      <Col offset={4} sm={10} className="img-box" xs={20} />
      <Col offset={1} sm={10} className="content-error" xs={20}>
        <h1>404</h1>
        <p className="desc">抱歉，你访问的页面不存在!</p>
        <div>
          <Button onClick={goback} type="primary">
            返回首页
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default withRouter(Error404)