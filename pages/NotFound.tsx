import '../components/EditorialPage.css';
import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
export default function NotFound(){const {pathname}=useLocation();return <section className="editorial-page shell section"><EnhancedSEO title="Página não encontrada | PVS Decore" description="Encontre pisos, serviços e contato da PVS Decore." url={pathname} noindex/><h1 className="editorial-title">Página não encontrada</h1><p className="mb-6">O endereço informado não corresponde a uma página disponível.</p><Link className="button secondary" to="/">Voltar ao início</Link></section>}
