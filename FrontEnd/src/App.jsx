import { useState } from 'react';
import * as React from 'react';
import {  Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import AddEvent from "./components/AddEvent";
import ViewEvents from "./components/ViewEvents";

const Admin = React.lazy(() => import('./views/admin/Admin'));
const Login = React.lazy(() => import('./views/admin/Login'));
const Register = React.lazy(() => import('./views/admin/Register'));


function App() {

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
      </Routes>
    </div>
  )
}

export default App
