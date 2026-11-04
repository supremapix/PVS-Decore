import Illustration from './Illustration';
import React from 'react';
import {Link} from 'react-router-dom';
import guideData from '../data/neighborhood-guides.json';
type Guide={name:string;focus:string;intro:string;sections:string[][];source?:string;additionalSource?:string;related?:string;relatedLabel?:string};
const guides:Record<string,Guide>=guideData;
const municipalInventory='https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912';
export default function NeighborhoodGuide({slug}:{slug:string}){
 const guide=guides[slug];if(!guide)return null;
 return <section className="shell section" id="guia-local"><p className="eyebrow">Guia de planejamento · {guide.name}</p><h2 className="editorial-title">{guide.focus}</h2><div className="locality-steps">{guide.sections.map(([title,text],index)=><article className="process-step" key={title}>{['cidade-industrial-de-curitiba','porto'].includes(slug)&&<Illustration name={(['amostras','medicao','manutencao'] as const)[index]}/>}<h3>{title}</h3><p>{text}</p></article>)}</div>
  {guide.related&&<Link className="locality-text-link" to={guide.related}>{guide.relatedLabel||'Consultar o contexto do bairro ou município relacionado'}</Link>}
  <Link className="locality-text-link" to="/nossos-produtos#catalogo-fabricantes">Comparar linhas e padrões antes do orçamento</Link><Link className="locality-text-link" to="/loja-showroom-sao-jose-dos-pinhais">Planejar visita ao showroom PVS</Link>
  <p className="locality-note">Referência geográfica: <a href={guide.source||municipalInventory} target="_blank" rel="noopener noreferrer">{guide.source?'fonte municipal sobre a localidade':'inventário municipal de bairros e regionais'}</a>. {guide.additionalSource&&<><a href={guide.additionalSource} target="_blank" rel="noopener noreferrer">Referência municipal complementar</a>. </>}O roteiro descreve situações de projeto, não obras realizadas pela PVS.</p>
 </section>;
}
