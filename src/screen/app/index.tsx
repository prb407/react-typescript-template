import * as React from 'react';
import { Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, RouteComponentProps } from 'react-router-dom';

const Home = React.lazy(() => import('./home'))
// const PrimarySearchAppBar = React.lazy(() => import('../../components/topnav'))

export interface IAppProps extends RouteComponentProps {
}

export default class App extends React.Component<IAppProps> {
    public render() {
        const { match } = this.props
        return (
            <React.Fragment>
                <Suspense fallback={<div className="loading" />}>
                    <Router>
                        <Switch>
                            <Route
                                path={`${match.url}/`}
                                exact
                                component={Home}
                            />
                            <Redirect to="/404" />
                        </Switch>
                    </Router>
                </Suspense>
            </React.Fragment>
        );
    }
}
