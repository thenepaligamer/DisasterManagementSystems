import { useState } from 'react';
import * as React from 'react';
import {  Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

const Admin = React.lazy(() => import('./views/admin/Admin'));
const Login = React.lazy(() => import('./views/admin/Login'));
const Register = React.lazy(() => import('./views/admin/Register'));

function App() {
  
  const token = () => {
    if(localStorage.getItem("userInfo"))
    {
      return JSON.parse(localStorage.getItem("userInfo")).access_token
    }
    return false
  }
  console.log(token())
  return (
    <div className="App">
      <Routes >
        <Route path="/admin" element={token() ? <Admin /> : <Navigate to="/admin/login" replace={true} />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
