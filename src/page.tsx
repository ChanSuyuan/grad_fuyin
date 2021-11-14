import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from './container'
import { Login } from './userAccount-admin/login'
import { Regist } from './userAccount-admin/regist'

export class Page extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Regist} />
				</Switch>
			</Router>
		)
	}
}