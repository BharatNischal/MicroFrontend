import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/ModelingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth" component={AuthApp} />
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
