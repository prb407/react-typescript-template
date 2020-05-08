import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';


const Home = React.lazy(() => import('./screen/home/home'))
const Login = React.lazy(() => import('./screen/login/login'))


class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="h-100">
        <React.Fragment>
          <Suspense fallback={<div className="loading" />}>
            <Router>
              <Switch>
                {/* <Redirect path="/" to="/app" /> */}
                <Route
                  path="/app"
                  component={Home}
                  exact
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

