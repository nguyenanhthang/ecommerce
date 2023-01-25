import React from 'react';
import './App.css';
import DefaultLayout from './layouts/defaultLayout/DefaultLayout';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublishRouter } from './routes/router';
import CheckRouter from './CheckRouter';
import { Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/register/Register';
function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<CheckRouter />}>
                        <Route index element={<Navigate to={'/login'} />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
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
                </Routes>
            </div>
        </Router>
    );
}

export default App;
