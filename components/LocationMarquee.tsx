import React from 'react';
import {Link} from 'react-router-dom';
import {LOCATIONS} from '../constants';
import {MAIN_AREAS} from '../data/site';
export default function LocationMarquee(){return <div className="container mx-auto px-4 py-8 text-center"><h2 className="text-xl font-bold mb-4">São José dos Pinhais, Curitiba e Região Metropolitana</h2><p className="text-gray-600 mb-4">Nossa loja fica em São José dos Pinhais. Consulte o atendimento para seu endereço.</p><div className="flex flex-wrap gap-3 justify-center">{MAIN_AREAS.map(name=>{const area=LOCATIONS.find(l=>l.name===name);return area&&<Link key={name} className="text-brand-orange underline p-2" to={'/'+area.type+'/'+area.slug}>{name}</Link>})}<Link to="/mapa-do-site#areas-atendidas" className="font-bold underline p-2">Ver áreas atendidas</Link></div></div>}
