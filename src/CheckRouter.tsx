import React from 'react';
import { Outlet } from 'react-router-dom';

function CheckRouter() {
    return (
        <div className='App'>
            <Outlet />
        </div>
    );
}
export default CheckRouter;
