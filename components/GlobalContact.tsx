import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import {CONTACT_ADDRESS,CONTACT_DISPLAY,CONTACT_EMAIL,CONTACT_PHONE} from '../constants';
import './GlobalContact.css';
export default function GlobalContact(){
 const address=CONTACT_ADDRESS.split(',').map(part=>part.trim());
 const maps='https://www.google.com/maps?q='+encodeURIComponent(CONTACT_ADDRESS);
 return <section className="global-contact" aria-labelledby="global-contact-title" data-global-contact="true"><div className="shell global-contact-layout">
  <svg className="global-contact-banner" width="250" height="250" viewBox="0 0 250 250" role="img" aria-label={'PVS Decore. Loja em '+CONTACT_ADDRESS+'. Contato: '+CONTACT_DISPLAY}>
   <rect width="250" height="250" rx="12" fill="#fffaf1"/><path d="M0 236H250V250H0Z" fill="#a84412"/>
   <g transform="translate(41 8) scale(.42)"><Logo className="contact-banner-logo"/></g>
   <g textAnchor="middle" fontFamily="Arial, sans-serif" fill="#202c28"><text x="125" y="122" fontSize="20" fontWeight="700">PVS DECORE</text><text x="125" y="153" fontSize="22" fontWeight="700">{CONTACT_DISPLAY}</text><text x="125" y="181" fontSize="14">{address[0]+', '+address[1]}</text><text x="125" y="204" fontSize="15">{address[2]}</text><text x="125" y="225" fontSize="14">CEP {address[3]}</text></g>
  </svg>
  <div className="global-contact-copy"><p className="eyebrow">Sua escolha começa com uma conversa</p><h2 id="global-contact-title">Fale com a PVS e planeje seu ambiente</h2><p>Conte qual material procura e informe o endereço do projeto. Nossa loja fica em São José dos Pinhais; consulte atendimento, fornecimento e instalação para o seu endereço.</p><address><strong>Loja PVS Decore</strong><span>{CONTACT_ADDRESS}</span><a href={'tel:+'+CONTACT_PHONE}>Ligar: {CONTACT_DISPLAY}</a><a href={'mailto:'+CONTACT_EMAIL}>{CONTACT_EMAIL}</a></address><div className="global-contact-actions"><a className="global-contact-primary" href={'https://wa.me/'+CONTACT_PHONE+'?text='+encodeURIComponent('Olá! Gostaria de conversar com a PVS sobre materiais e atendimento para meu endereço.')}>Conversar com a PVS no WhatsApp</a><a href={maps} target="_blank" rel="noopener noreferrer">Ver endereço no mapa</a><Link to="/loja-showroom-sao-jose-dos-pinhais">Conhecer a loja e o showroom</Link></div><p className="global-contact-note">Confirme disponibilidade de amostras e horário antes da visita.</p></div>
 </div></section>
}
