import { useState } from 'react';
import * as React from 'react';
import {  Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Admin = React.lazy(() => import('./views/admin/Admin'));
const Login = React.lazy(() => import('./views/admin/Login'));
const Register = React.lazy(() => import('./views/admin/Register'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     <div className="bg-black  text-3xl text-green-800">Hi</div>
      <Routes >
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
