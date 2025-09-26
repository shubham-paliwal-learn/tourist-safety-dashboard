// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppProvider, useAppContext } from './context/AppContext';

// Layout Components
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import HeaderBar from './components/HeaderBar';
import FloatingSOSButton from './components/FloatingSOSButton';

// Global Modals/Views
import SOSModal from './components/SOSModal';
import LiveSOSView from './components/LiveSOSView';

// Pages
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Report from './pages/Report';
import Profile from './pages/Profile';

const AppLayout = () => {
  const { sosState } = useAppContext();

  return (
    <div className="flex h-screen bg-neutral-bg-light">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/report" element={<Report />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
      <BottomNav />
      <FloatingSOSButton />
      <AnimatePresence>
        {sosState === 'confirming' && <SOSModal />}
        {sosState === 'active' && <LiveSOSView />}
        {sosState === 'resolved' && <LiveSOSView />}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppLayout />
      </Router>
    </AppProvider>
  );
};

export default App;