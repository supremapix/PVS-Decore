import React from 'react';
import { Link } from 'react-router-dom';
export default function RelatedLinks() {
  return <nav aria-label="Produtos e serviços relacionados" className="flex flex-wrap gap-4 my-8 text-brand-orange underline">
    <Link to="/product/piso-laminado">Piso laminado</Link><Link to="/product/piso-vinilico">Piso vinílico e SPC</Link>
    <Link to="/product/rodape-poliestireno">Rodapés</Link><Link to="/service/instalacao-residencial">Instalação</Link>
    <Link to="/nossos-produtos">Marcas</Link><Link to="/faq">Dúvidas</Link>
  </nav>;
}
