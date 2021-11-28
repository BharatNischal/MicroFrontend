import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
import MarketingApp from './components/ModelingApp';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Header />
                    <Switch>
                        <Route path="/auth" component={AuthApp} />
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </StylesProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
