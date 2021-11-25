import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { routes } from "../../routes/MenuRoutes/routes";


const MainContent = ({ location }: any) => {
  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.pathname} timeout={500}>
    <Content style={{ padding: '15px' }}>
      <Switch location={location}>
        {routes.map(ele => (
          <Route render={() => <ele.component />} key={ele.path} path={ele.path} />
        ))}
        <Redirect from="/" exact to="/fyapp/dashboard" />
        <Redirect to="/fyapp/error/404" />
      </Switch>
    </Content>
    //   </CSSTransition>
    // </TransitionGroup>
  )
}

export default withRouter(MainContent)