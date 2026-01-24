import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Simple loading fallback
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    color: '#ff7a00',
    fontSize: '1.5rem',
    fontWeight: '600'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay"></div> {/* Cinematic Grain */}
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
