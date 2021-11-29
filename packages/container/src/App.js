import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/ModelingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});


const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard" component={DashboardApp} />
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
