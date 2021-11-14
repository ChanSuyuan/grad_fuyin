import React, { PureComponent, Fragment } from 'react'
// import { Header } from './Header'
import { Sider } from './Sider'



export class Dashboard extends PureComponent {


  render() {
    console.log(localStorage.getItem('user_token'))
    return (
      <Fragment>
        {/* <Header /> */}
        <Sider />
      </Fragment>
    )
  }
}