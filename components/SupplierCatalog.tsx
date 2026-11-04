import React, {useState, useRef} from 'react';
import ProductDialog, {type CatalogProduct} from './ProductDialog';
import inventory from '../data/supplier-products.json';
import imageInventory from '../data/supplier-images.json';
import {CONTACT_PHONE} from '../constants';
const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const products=inventory.items;
type MaterialImage={src:string;width:number;height:number;alt:string;credit:string;source:string;kind:string};
const images:Record<string,MaterialImage>=imageInventory;
const unique=(key:'brand'|'type')=>[...new Set(products.map(p=>p[key]))].sort();
const catalogCount=products.filter(p=>p.brand!=='Durafloor').length;
const legacyCount=products.length-catalogCount;
const eucafloorCount=products.filter(p=>p.brand==='Eucafloor').length;
export default function SupplierCatalog(){
 const [query,setQuery]=useState(''),[brand,setBrand]=useState(''),[type,setType]=useState(''),[line,setLine]=useState('');
 const [page,setPage]=useState(0),[scope,setScope]=useState('catalog'),[photoOnly,setPhotoOnly]=useState(false);
 const [selected,setSelected]=useState<CatalogProduct|null>(null);
 const opener=useRef<HTMLElement|null>(null);
 const openProduct=(product:CatalogProduct,element:HTMLElement)=>{opener.current=element;setSelected(product)};
 const inScope=(p:typeof products[number])=>scope==='legacy'?p.brand==='Durafloor':p.brand!=='Durafloor';
 const matches=products.filter(p=>inScope(p)&&(!photoOnly||!!images[p.url])&&(!brand||p.brand===brand)&&(!type||p.type===type)&&(!line||p.line===line)&&normalize(p.brand+' '+p.line+' '+p.name+' '+p.code).includes(normalize(query)));
 const visible=matches.slice(page*12,page*12+12);
 const reset=()=>{setQuery('');setBrand('');setType('');setLine('');setScope('catalog');setPhotoOnly(false);setPage(0)};
 return <section id="catalogo-fabricantes" className="supplier-catalog shell section">
  <p className="eyebrow">Referências verificadas nos fabricantes</p>
  <h2 className="editorial-title">Veja o padrão.<br/>Compare sua escolha.</h2>
  <p>{products.length} referências reunidas em 04/11/2026. Consulte pisos e rodapés por marca, linha e nome. A presença no catálogo não confirma estoque PVS: fornecimento, amostra, versão e indicação de uso são verificados para cada item.</p>
  <p>As imagens Eucafloor mostram o padrão identificado pelo fabricante. Cor na tela e percepção da textura podem variar; confirme a amostra física antes da compra. Para rodapés, confira também o perfil e a altura na ficha oficial.</p>
  <div className="floor-choice-buttons" role="group" aria-label="Tipo de consulta">
   <button type="button" aria-pressed={scope==='catalog'} onClick={()=>{reset();setScope('catalog')}}>Catálogo consultado: {catalogCount} referências</button>
   <button type="button" aria-pressed={scope==='legacy'} onClick={()=>{reset();setScope('legacy')}}>Reposição e acervo BIM: {legacyCount} referências</button>
  </div>
  {scope==='legacy'&&<div className="card"><h3>Identificar um piso antigo antes de buscar reposição</h3><p>Este acervo técnico Durafloor pode conter linhas fora de coleção. Ele serve para reconhecer nomes e consultar possibilidades de reposição; não confirma fabricação atual, estoque ou compatibilidade. Fotografe a etiqueta, meça a régua e informe o sistema de encaixe à PVS.</p></div>}
  <div className="supplier-filters">
   <label>Buscar nome, código ou cor<input type="search" value={query} onChange={e=>{setQuery(e.target.value);setPage(0)}} placeholder="Ex.: carvalho, branco, IM1855"/></label>
   <label>Marca<select aria-label="Marca" value={brand} onChange={e=>{setBrand(e.target.value);if(e.target.value)setScope(e.target.value==='Durafloor'?'legacy':'catalog');setLine('');setPhotoOnly(false);setPage(0)}}><option value="">Todas as marcas</option>{unique('brand').map(v=><option key={v}>{v}</option>)}</select></label>
   <label>Tipo<select aria-label="Tipo" value={type} onChange={e=>{setType(e.target.value);setLine('');setPage(0)}}><option value="">Todos os tipos</option>{unique('type').map(v=><option key={v}>{v}</option>)}</select></label>
   <label>Linha ou família<select aria-label="Linha ou família" value={line} onChange={e=>{setLine(e.target.value);setPage(0)}}><option value="">Todas as linhas</option>{[...new Set(products.filter(p=>inScope(p)&&(!brand||p.brand===brand)&&(!type||p.type===type)).map(p=>p.line))].sort().map(v=><option key={v}>{v}</option>)}</select></label>
   <label className="supplier-photo-filter"><input type="checkbox" checked={photoOnly} disabled={scope==='legacy'} onChange={e=>{setPhotoOnly(e.target.checked);setPage(0)}}/>Somente materiais com imagem ({Object.keys(images).length})</label>
   <button type="button" onClick={reset}>Limpar filtros</button>
  </div>
  <p role="status">{matches.length} resultados — {matches.length?`Exibindo ${page*12+1} a ${Math.min(page*12+12,matches.length)}`:'Tente outro nome ou limpe os filtros.'}</p>
  <div className="supplier-grid">{visible.map(p=>{const photo=images[p.url];return <article className="card supplier-product" key={p.brand+p.line+p.name}>
   {photo&&<figure className="supplier-swatch"><button type="button" aria-haspopup="dialog" onClick={event=>openProduct(p,event.currentTarget)} aria-label={'Ampliar foto e ver detalhes de '+p.line+' '+p.name}><img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async"/></button><figcaption>Imagem do padrão · {photo.credit}<span>Toque para ampliar e ver detalhes do material.</span></figcaption></figure>}
   <p className="eyebrow">{p.brand} · {p.type}</p><p className="supplier-line">{p.line}</p><h3>{p.name}</h3>{p.code&&<p>Código: {p.code}</p>}
   <p className="supplier-note">{p.status}</p>
   <button className="supplier-details" type="button" aria-haspopup="dialog" onClick={event=>openProduct(p,event.currentTarget)}>Ver detalhes do produto</button>
   <a href={p.url} target="_blank" rel="noopener noreferrer">Ver fotos e ficha no fabricante</a>
   <a className="button secondary" href={'https://wa.me/'+CONTACT_PHONE+'?text='+encodeURIComponent('Olá! Quero consultar '+p.brand+' / '+p.line+' / '+p.name+(p.code?' / '+p.code:'')+'. Podem confirmar fornecimento, amostra e indicação para meu ambiente?')}>Consultar este material</a>
  </article>})}</div>
  {matches.length>12&&<nav className="supplier-pagination" aria-label="Páginas do catálogo"><button type="button" disabled={page===0} onClick={()=>setPage(n=>n-1)}>Anterior</button><span>Página {page+1} de {Math.ceil(matches.length/12)}</span><button type="button" disabled={(page+1)*12>=matches.length} onClick={()=>setPage(n=>n+1)}>Próxima</button></nav>}
  <details className="supplier-full-list"><summary>Lista completa de referências e links oficiais</summary><p>Todos os nomes abaixo permanecem disponíveis sem usar busca ou filtros. Para referências sem imagem incorporada, abra a ficha oficial do fabricante.</p><ul>{products.map(p=><li key={p.brand+p.line+p.name}><a href={p.url} target="_blank" rel="noopener noreferrer">{p.brand} — {p.line} — {p.name}{p.code?' — '+p.code:''}</a></li>)}</ul></details>
  <div className="supplier-limits"><h3>O que este catálogo cobre</h3><p>Eucafloor: {eucafloorCount} referências de pisos e rodapés, com os padrões visuais oficiais. As diferentes alturas de um rodapé aparecem como opções separadas quando listadas pelo fabricante. Quick-Step: 59 laminados e 14 vinílicos. Santa Luzia: 93 rodapés e 14 pisos vinílicos, como referências para consulta de fornecimento. Durafloor: {legacyCount} referências do acervo BIM, separado para consulta de reposição.</p><p>O inventário não abrange todos os acessórios e categorias de todos os fornecedores. As fotos incorporadas nesta etapa são Eucafloor; as demais marcas têm links para consulta oficial. Não há confirmação de disponibilidade PVS para cada produto.</p><p>Crédito das imagens: Eucatex / Eucafloor. A <a className="supplier-permission" href="https://www.eucatex.com.br/blog/funcionalidades-do-site-eucafloor-que-facilitam-o-seu-projeto/" target="_blank" rel="noopener noreferrer">orientação oficial sobre imagens de produtos</a> apresenta seu uso em materiais comerciais. As fotografias não representam obras executadas pela PVS.</p>
   <div className="supplier-official"><a href="https://www.eucatex.com.br/pisos" target="_blank" rel="noopener noreferrer">Catálogo Eucafloor</a><a href="https://www.quick-step.com.br/pt-br/encontre-seu-piso" target="_blank" rel="noopener noreferrer">Todos os pisos Quick-Step</a><a href="https://www.durafloor.com.br/" target="_blank" rel="noopener noreferrer">Coleções Durafloor</a><a href="https://www.industriasantaluzia.com.br/produtos/" target="_blank" rel="noopener noreferrer">Produtos Santa Luzia</a></div>
  </div>
 {selected&&<ProductDialog product={selected} photo={images[selected.url]} opener={opener.current} onDismiss={()=>setSelected(null)}/>}
 </section>;
}
