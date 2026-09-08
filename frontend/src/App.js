import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';
import SiteNavbar from './components/shared/SiteNavbar';
import ScrollToHash from './components/shared/ScrollToHash';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      {/* reducedMotion="user" makes every framer-motion animation in the
          app respect the OS-level prefers-reduced-motion setting. The hero
          isn't affected — it uses no framer-motion, only its own raw CSS
          keyframe, handled separately in index.css. */}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <ScrollToHash />
          <SiteNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Locked hero's CTA still navigates here — kept as an alias so
                that button target is never touched. */}
            <Route path="/talk-to-sales" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </div>
  );
}

export default App;
