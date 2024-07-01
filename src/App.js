import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Workflow, Login } from './pages';
import { Header, Sidebar } from './layout';
import './App.scss';
import { Breadcrumb } from './components';

export default function App() {
  const location = useLocation();
  const layoutRoutes = (
    <>
      <div className="main-header">
        <Header />
      </div>

      <div className="main-container">
        <div className="main-container-sidebar">
          <Sidebar />
        </div>

        <div className="main-container-page">
          <Breadcrumb />

          <Routes>
            <Route path="/" element={<Workflow />} />
          </Routes>
        </div>
      </div>
    </>
  );

  const standaloneLayout = (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
  return (
    <div className="main">
      {location.pathname === '/login' ? standaloneLayout : layoutRoutes}
    </div>
  );
}
