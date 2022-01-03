import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

import './App.css';

import Home from './Pages/home'
import Login from './Pages/Login'
import NoMatch from './Pages/NoMatch';

export default function App() {
  return (
    <div>
      <h1> Routes example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
