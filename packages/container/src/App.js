import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/ModelingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

const history = createBrowserHistory();


const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if(isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <div>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardApp />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </Router>
        </div>
    );
}

export default App;
