import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Workflow } from './pages';
import { Header, Sidebar } from './layout';
import './App.scss';
import { Breadcrumb } from './components';

export default function App() {
  return (
    <div className="main">
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
    </div>
  );
}
