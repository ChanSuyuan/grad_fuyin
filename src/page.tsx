import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { RegistFeedBack } from './common/component/BackResult'
import { UpdateEmailFeedBack } from './common/component/UpdateEmailResult'
import { DefaultLayout } from './container/Layout'
import { AdminLogin } from './user/adminLogin'

import { Login } from './user/login'
import { Regist } from './user/regist'
import { Reset } from './user/reset'
import { ResetPwd } from './user/reset/resetPwd'

// test
export class Page extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/fyapp/dashboard" push />} />
					<Route path='/loginAdmin' component={AdminLogin} />
					<Route path="/fyapp" component={DefaultLayout} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Regist} />
					<Route path="/reset" component={Reset} />
					<Route path="/resetPwd" component={ResetPwd} />
					<Route path="/register_feedback" component={RegistFeedBack} />
					<Route path="/update_email_feedback" component={UpdateEmailFeedBack} />
				</Switch>
			</Router>
		)
	}
}