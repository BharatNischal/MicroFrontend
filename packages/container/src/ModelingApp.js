import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const marketingRootRef = useRef(null);

    useEffect(() => {
        mount(marketingRootRef.current);
    }, []);

    return (
        <div ref={marketingRootRef}></div>
    );
}

export default MarketingApp;
