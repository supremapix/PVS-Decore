import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import GenericPage from './pages/GenericPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import ScrollToTop from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/bairro/:slug" element={<LocationPage />} />
        <Route path="/cidade/:slug" element={<LocationPage />} />
        
        {/* New Product and Service Routes */}
        <Route path="/product/:slug" element={<GenericPage />} />
        <Route path="/service/:slug" element={<GenericPage />} />
        
        {/* Contact Page */}
        <Route path="/contato" element={<ContactPage />} />

        {/* Sitemap Page */}
        <Route path="/mapa-do-site" element={<SitemapPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;