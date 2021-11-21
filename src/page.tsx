import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { RegistFeedBack } from './common/component/BackResult'
import { FuyinApp } from './container/FuyinApp'
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
					<Route exact path="/" render={() => <Redirect to="/login" push />} />
					<Route path="/app" component={FuyinApp} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Regist} />
					<Route path="/reset" component={Reset} />
					<Route path="/resetPwd" component={ResetPwd} />
					<Route path="/register_feedback" component={RegistFeedBack} />
				</Switch>
			</Router>
		)
	}
}