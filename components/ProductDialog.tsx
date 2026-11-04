import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {CONTACT_PHONE} from '../constants';
import './ProductDialog.css';
export type CatalogProduct={brand:string;type:string;line:string;name:string;code:string;url:string;status:string};
export type CatalogImage={src:string;width:number;height:number;alt:string;credit:string;source:string;kind:string};
export function productInquiry(product:CatalogProduct){return 'https://wa.me/'+CONTACT_PHONE+'?text='+encodeURIComponent('Olá! Quero consultar '+product.brand+' / '+product.type+' / '+product.line+' / '+product.name+(product.code?' / '+product.code:'')+'. Podem confirmar fornecimento, amostra e indicação para meu ambiente?')}
export default function ProductDialog({product,photo,opener,onDismiss}:{product:CatalogProduct;photo?:CatalogImage;opener:HTMLElement|null;onDismiss:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null),heading=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{
  const el=dialog.current!;const body=document.body,root=document.documentElement;
  const scrollY=window.scrollY,scrollX=window.scrollX;
  const previous={position:body.style.position,top:body.style.top,width:body.style.width,overflow:root.style.overflow};
  body.style.position='fixed';body.style.top=-scrollY+'px';body.style.width='100%';root.style.overflow='hidden';
  body.setAttribute('data-product-dialog','open');el.showModal();heading.current?.focus({preventScroll:true});
  return()=>{el.close();body.style.position=previous.position;body.style.top=previous.top;body.style.width=previous.width;root.style.overflow=previous.overflow;body.removeAttribute('data-product-dialog');window.scrollTo({left:scrollX,top:scrollY,behavior:'instant'});if(opener?.isConnected)opener.focus({preventScroll:true});};
 },[opener]);
 const legacy=product.brand==='Durafloor';
 const variant=product.brand==='Eucafloor'?new URL(product.url).searchParams.get('type'):null;
 return createPortal(<dialog ref={dialog} className="product-dialog" aria-labelledby="product-dialog-title" aria-describedby="product-dialog-availability" onCancel={event=>{event.preventDefault();onDismiss()}} onKeyDown={event=>{
  if(event.key!=='Tab')return;const controls=Array.from(dialog.current!.querySelectorAll<HTMLElement>('button:not([disabled]),a[href]'));const first=controls[0],last=controls[controls.length-1];
  if(event.shiftKey&&(document.activeElement===first||document.activeElement===heading.current)){event.preventDefault();last?.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus()}
 }}>
  <div className="product-dialog-toolbar"><span>Detalhes do material</span><button type="button" onClick={onDismiss} aria-label="Fechar detalhes do produto">Fechar <span aria-hidden="true">×</span></button></div>
  <div className="product-dialog-content">
   <header><p className="product-dialog-kicker">{product.brand} · {product.type}</p><h2 id="product-dialog-title" tabIndex={-1} ref={heading}>{product.name}</h2><p>{product.line}</p></header>
   <div className="product-dialog-grid">
    <div>{photo?<figure><img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} decoding="async"/><figcaption>Imagem oficial do padrão · {photo.credit}. A cor na tela pode variar. Confirme a amostra física; esta imagem não representa obra PVS.</figcaption></figure>:<div className="product-dialog-no-photo"><h3>Confira a imagem na fonte oficial</h3><p>A foto deste item não está incorporada ao catálogo. Use o link do fabricante para consultar sua aparência e ficha.</p></div>}</div>
    <section aria-labelledby="product-dialog-specs"><h3 id="product-dialog-specs">Identificação e especificações</h3><dl>
     <div><dt>Fabricante / marca</dt><dd>{product.brand}</dd></div><div><dt>Tipo</dt><dd>{product.type}</dd></div><div><dt>Linha / família</dt><dd>{product.line}</dd></div><div><dt>Padrão / modelo</dt><dd>{product.name}</dd></div><div><dt>Código no catálogo</dt><dd>{product.code||'Não registrado nesta referência'}</dd></div>{variant&&<div><dt>Variante indicada pelo fabricante</dt><dd>{variant}</dd></div>}
    </dl><p>Dimensões, instalação, classe de uso e demais características devem ser conferidas na ficha oficial da versão selecionada. Não são inferidas pela fotografia ou por outra linha.</p>
    <a className="product-dialog-source" href={product.url} target="_blank" rel="noopener noreferrer">{legacy?'Consultar acervo BIM oficial':'Consultar ficha oficial do fabricante'} <span>(nova aba)</span></a></section>
   </div>
   <section className="product-dialog-consult" aria-labelledby="product-dialog-consult-title"><h3 id="product-dialog-consult-title">{legacy?'Consulta para identificação e reposição':'Consulte este material com a PVS'}</h3><p id="product-dialog-availability">Disponibilidade sob consulta. A referência não confirma estoque, preço, amostra disponível ou fornecimento pela PVS.</p>{legacy&&<p>Acervo BIM: pode conter linhas fora de coleção. Confirme fabricação atual, medidas e compatibilidade antes de planejar uma reposição.</p>}<p>{product.status}</p><a className="product-dialog-cta" href={productInquiry(product)} target="_blank" rel="noopener noreferrer">Consultar este produto no WhatsApp</a><p>Você revisa e envia a mensagem no WhatsApp. Abrir a consulta não reserva o material.</p></section>
  </div>
 </dialog>,document.body);
}
