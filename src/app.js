import * as React from 'react';

import Admin from 'layouts/Admin.js';
import Auth from 'layouts/Auth.js';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/*' element={<Navigate to='/admin' />} />
      </Routes>
    </BrowserRouter>
  );
}
