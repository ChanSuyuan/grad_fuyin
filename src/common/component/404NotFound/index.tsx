import React from 'react'
import { FrownOutlined } from '@ant-design/icons'
import { Page } from '../Page/'
import './index.less'

const Error = () => (
  <Page inner>
    <div className="error">
      <FrownOutlined />
      <h1>404 Not Found</h1>
    </div>
  </Page>
)

export default Error
