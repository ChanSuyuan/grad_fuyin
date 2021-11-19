import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { FuyinApp } from './container/FuyinApp'
import { Login } from './user/login'
import { Regist } from './user/regist'
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
				</Switch>
			</Router>
		)
	}
}