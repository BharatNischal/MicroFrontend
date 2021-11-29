import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';

const AuthApp = ({ onSignIn }) => {
    const dashboardRootRef = useRef(null);

    useEffect(() => {
        mount(dashboardRootRef.current);
    }, []);

    return (
        <div ref={dashboardRootRef}></div>
    );
}

export default AuthApp;
