import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';


const AppView = React.lazy(() => import('./screen/app'))
const Login = React.lazy(() => import('./screen/login/login'))

class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="h-100">
        <React.Fragment>
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                <Redirect exact path="/" to="/app" />
                <Route
                  path="/app"
                  render={(props: any) => (
                    <AppView {...props} />
                  )}
                />
                <Route
                  path="/login"
                  component={Login}
                  exact
                />
                <Redirect to="/404" />
                <Route path='/404' render={() => <Jumbotron>Error</Jumbotron>} />
              </Switch>
            </Router>
          </Suspense>
        </React.Fragment>
      </div>
    );
  }
}

export default App

