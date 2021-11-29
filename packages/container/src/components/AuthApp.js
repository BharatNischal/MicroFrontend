import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

const AuthApp = ({ onSignIn }) => {
    const marketingRootRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(marketingRootRef.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            initialPath: history.location.pathname,
            onSignIn
        });

        history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={marketingRootRef}></div>
    );
}

export default AuthApp;
