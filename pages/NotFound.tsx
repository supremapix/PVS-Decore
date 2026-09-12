import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
export default function NotFound(){const {pathname}=useLocation();return <section className="container mx-auto px-4 py-20"><EnhancedSEO title="Página não encontrada | PVS Decore" description="Encontre pisos, serviços e contato da PVS Decore." url={pathname} noindex/><h1 className="text-3xl font-bold mb-6">Página não encontrada</h1><p className="mb-6">O endereço informado não corresponde a uma página disponível.</p><Link className="text-brand-orange underline" to="/">Voltar ao início</Link></section>}
