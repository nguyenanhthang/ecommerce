import React from 'react';
import './App.css';
import DefaultLayout from './layouts/defaultLayout/DefaultLayout';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRouter, PublishRouter } from './routes/router';
import CheckRouter from './CheckRouter';
import { Navigate } from 'react-router-dom';
function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route index element={<Navigate to={'/login'} />} />
                    {PublishRouter.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {PrivateRouter.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <CheckRouter>
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                    </CheckRouter>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
