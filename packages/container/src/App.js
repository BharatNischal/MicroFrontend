import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
import MarketingApp from './ModelingApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Header />
                    <MarketingApp />
                </StylesProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
