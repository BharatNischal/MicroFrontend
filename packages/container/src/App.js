import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './ModelingApp';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </div>
    );
}

export default App;
