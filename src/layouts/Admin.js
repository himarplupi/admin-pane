import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views
import Dashboard from 'views/admin/Dashboard.js';
import Settings from 'views/admin/Settings.js';
import Tables from 'views/admin/Tables.js';

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Routes>
            <Route path='/dashboard' exact element={<Dashboard />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/tables' exact element={<Tables />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
