import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LocationPage from './pages/LocationPage';
import GenericPage from './pages/GenericPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import FactoryPage from './pages/FactoryPage';
import FAQPage from './pages/FAQPage';
import ScrollToTop from './components/ScrollToTop';

import BrandsProducts from './pages/BrandsProducts';

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-produtos" element={<BrandsProducts />} />
        <Route path="/piso-laminado-direto-da-fabrica-sao-jose-dos-pinhais" element={<FactoryPage />} />
        <Route path="/bairro/:slug" element={<LocationPage />} />
        <Route path="/cidade/:slug" element={<LocationPage />} />

        {/* New Product and Service Routes */}
        <Route path="/product/:slug" element={<GenericPage />} />
        <Route path="/service/:slug" element={<GenericPage />} />

        {/* Contact Page */}
        <Route path="/contato" element={<ContactPage />} />

        {/* FAQ Page */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/perguntas-frequentes" element={<Navigate to="/faq" replace />} />

        {/* Sitemap Page */}
        <Route path="/mapa-do-site" element={<SitemapPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export function SiteContent(){return <><ScrollToTop/><Layout><AnimatedRoutes/></Layout></>}

function App() {
  return (
    <BrowserRouter>
      <SiteContent />
    </BrowserRouter>
  );
}

export default App;