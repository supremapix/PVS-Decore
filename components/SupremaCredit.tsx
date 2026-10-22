import React from 'react';
import {Heart} from 'lucide-react';

export default function SupremaCredit(){
  return <div className="suprema-credit">
    <p>© {new Date().getFullYear()} PVS Decore</p>
    <div className="suprema-credit-content">
      <span className="suprema-credit-label">Desenvolvido com <Heart aria-hidden="true" size={18} className="suprema-heart"/><span className="sr-only">amor</span> por</span>
      <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="suprema-credit-link">
        <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" width={649} height={185} loading="lazy" decoding="async"/>
        <span>Suprema Sites Express</span>
      </a>
    </div>
  </div>;
}

