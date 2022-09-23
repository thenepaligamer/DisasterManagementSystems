import { useState, useEffect } from 'react';
import * as React from 'react';
import {  Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css';

import {useDispatch, useSelector} from "react-redux";

import UpdateEvents from "./components/admin/UpdateEvents";
import AddContact from "./components/admin/AddContact";
import PendingEvents from "./components/admin/PendingEvents";
import AddEvent from "./components/events/AddEvent";
import ViewEvents from "./components/events/ViewEvents";
import Relief from "./components/Relief";
import Home from "./views/user/Home";
import Dashboard from "./components/Dashboard";

import {login, setToken} from "./store/admin/adminAuthSlice"
import Volunteer from "./components/user/Volunteer";
import ContactTable from "./components/react-table/ContactTable";
import ViewContact from './components/admin/ViewContact';
import AddRelief from './components/admin/AddRelief';
import VolunteerView from './components/admin/VolunteerView';
import Feedback from './components/user/Feedback';
import FeedbackAdmin from './components/admin/FeedbackAdmin';
import UpdateContacts from './components/admin/UpdateContacts';
import ReliefUpdate from './components/admin/ReliefUpdate';

const Admin = React.lazy(() => import('./views/admin/Admin'));
const Login = React.lazy(() => import('./views/admin/Login'));
const Register = React.lazy(() => import('./views/admin/Register'));

function App() {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector( store => store.adminAuth);
    useEffect(() => {

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
            <Route path="" element={<Dashboard/>}/>
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
            <Route path="pending-events" element={<PendingEvents />} />
            <Route path="relief" element={<Relief />} />
            <Route path='event/update/:id' element={<UpdateEvents />} />
            <Route path="view-contact" element={<ViewContact/>}/>
            <Route path="contact/update/:id"  element={<UpdateContacts />}/>
            <Route path="add-contact" element={<AddContact />} />
            <Route path="add-relief" element={<AddRelief />} />
            <Route path="relief/update/:id" element={<ReliefUpdate />}/>
            <Route path="volunteer" element={<VolunteerView />}/>
            <Route path="feedback"  element={<FeedbackAdmin />}    />
        </Route>
          <Route path="/*" element={<Home/>} >

              <Route path="" element={<Dashboard />}/>
              <Route path="add-event" element={<AddEvent />}/>
              <Route path="view-events" element={<ViewEvents/>}/>
              <Route path="relief" element={<Relief/>}/>
              <Route path="volunteer" element={<Volunteer/>}/>
              <Route path="contact" element={<ContactTable />} />
              <Route path="feedback" element={<Feedback/>} />
          </Route>
      </Routes>
    </div>
  )
};

export default App;
