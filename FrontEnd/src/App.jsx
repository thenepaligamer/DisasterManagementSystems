import { useState, useEffect } from 'react';
import * as React from 'react';
import {  Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import {useDispatch, useSelector} from "react-redux";

import AddEvent from "./components/AddEvent";
import ViewEvents from "./components/ViewEvents";
import Home from "./views/user/Home";

import {login, setToken} from "./store/admin/adminAuthSlice"

const Admin = React.lazy(() => import('./views/admin/Admin'));
const Login = React.lazy(() => import('./views/admin/Login'));
const Register = React.lazy(() => import('./views/admin/Register'));

function App() {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector( store => store.adminAuth);

    useEffect(() => {
        console.log(localStorage.getItem("userInfo"))
            if((localStorage.getItem("userInfo")))
            {
                dispatch(login())
                dispatch(setToken(JSON.parse(localStorage.getItem("userInfo")).access_token))

            }

    }, [])

  return (
    <div className="App">
      <Routes >
        <Route path="admin/*" element={
            <React.Suspense fallback={<><span>oops</span></>}>
                <Admin />
            </React.Suspense>
        } >
            <Route path="login" element={
                <React.Suspense fallback={<><span>oops</span></>}>
                    <Login />
                </React.Suspense>
            } />
            <Route path="register" element={
                <React.Suspense fallback={<><span>oops</span></>}>
                    <Register />
                </React.Suspense>
            } />
            <Route path="add-event" element={<AddEvent />} />
            <Route path="view-events" element={<ViewEvents />} />
        </Route>
          <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
};

export default App;
