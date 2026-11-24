import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import Illustration from '../components/Illustration';
import {SITE_URL} from '../data/site';
import floorHistory from '../data/floorHistory.json';
import floorLaminateHistory from '../data/floorLaminateHistory.json';

export const PVS_BLOG_PATH='/blog';
export const PVS_FIRST_POST='/blog/piso-vinilico-sobre-ceramica';

const headline='Piso vinílico sobre cerâmica: quando dá para instalar sem quebrar?';
const title='Piso vinílico sobre cerâmica: quando instalar? | PVS Decore';
const description='Descubra quando a cerâmica pode receber piso vinílico, o que avaliar no rejunte e na umidade e como planejar portas, soleiras e orçamento.';

const checklist=[
 ['Veja se o piso antigo está firme','Placas soltas, trincas que reaparecem ou desníveis pedem avaliação. O piso novo não corrige movimentação da base. A equipe deve definir se dá para preparar a superfície ou se é preciso remover o revestimento.'],
 ['Confira juntas, relevos e umidade','Rejuntes fundos, cerâmica com relevo e desníveis podem aparecer no acabamento ou prejudicar a instalação. Se houver manchas que voltam ou histórico de infiltração, investigue a causa antes de cobrir. A tolerância e a preparação são as do manual da linha escolhida.'],
 ['Meça a folga de portas e encontros','Considere a altura final do sistema com o contrapiso preparado. Veja a folga da porta, a soleira e a passagem para o cômodo vizinho. Peça que o orçamento diga quais ajustes e perfis de transição estão previstos.'],
];

export function BlogIndex(){
 return <><EnhancedSEO title="Blog de pisos e reformas | PVS Decore" description="Guias sobre laminado, vinílico, rodapés e preparação da base. Aprenda a planejar a troca de piso e a comparar propostas de instalação." url={PVS_BLOG_PATH}/><section className="shell section max-w-5xl"><p className="eyebrow">Blog PVS Decore</p><h1 className="editorial-title text-4xl md:text-6xl mt-4">Pisos e reformas, sem improviso</h1><p className="text-lg mt-6 mb-10">Orientações para planejar o piso, entender a proposta e fazer perguntas melhores antes de reformar.</p><article className="card mb-6"><p className="eyebrow">Série: história dos pisos</p><h2 className="mt-2 text-2xl font-bold"><Link className="underline" to={floorHistory.path}>{floorHistory.title}</Link></h2><p className="my-4">{floorHistory.description}</p><Link className="button secondary" to={floorHistory.path}>Ler o primeiro capítulo</Link></article><article className="card mb-6"><p className="eyebrow">Série: história dos pisos · Capítulo 2</p><h2 className="mt-2 text-2xl font-bold"><Link className="underline" to={floorLaminateHistory.path}>{floorLaminateHistory.title}</Link></h2><p className="my-4">{floorLaminateHistory.description}</p><Link className="button secondary" to={floorLaminateHistory.path}>Ler o capítulo do laminado</Link></article><article className="card"><h2 className="text-2xl font-bold"><Link className="underline" to={PVS_FIRST_POST}>{headline}</Link></h2><p className="my-4">{description}</p><Link className="button secondary" to={PVS_FIRST_POST}>Ler o guia</Link></article></section></>;
}

export function PisoSobreCeramica(){
 const schema={'@context':'https://schema.org','@type':'BlogPosting','@id':SITE_URL+PVS_FIRST_POST+'#article',headline,description,inLanguage:'pt-BR',datePublished:'2026-11-20',mainEntityOfPage:{'@id':SITE_URL+PVS_FIRST_POST+'#webpage'},publisher:{'@id':SITE_URL+'/#organization'},image:SITE_URL+'/og-pvs.png'};
 return <><EnhancedSEO title={title} description={description} url={PVS_FIRST_POST} type="article"/>
 <Helmet><script type="application/ld+json" id="pvs-blogposting">{JSON.stringify(schema)}</script></Helmet>
 <article className="shell section max-w-5xl">
 <nav aria-label="Você está em" className="mb-6"><Link className="underline" to={PVS_BLOG_PATH}>Blog PVS Decore</Link><span aria-hidden="true"> / </span><span aria-current="page">Piso sobre cerâmica</span></nav>
 <h1 className="editorial-title text-4xl md:text-6xl">{headline}</h1><p className="mt-4 text-sm"><time dateTime="2026-11-20">20 de novembro de 2026</time></p>
 <p className="text-lg my-6"><strong>Em alguns casos, sim.</strong> O vinílico pode ser instalado sobre cerâmica se a linha aceitar esse tipo de base, as placas estiverem firmes e regulares e a umidade estiver dentro das condições do fabricante. Se houver infiltração, peças soltas ou desnível sem solução no sistema, não conte com uma instalação direta.</p>
 <Illustration name="amostras"/>
 <section className="my-10"><h2 className="text-3xl font-semibold">O que verificar antes de comprar</h2><ol className="list-decimal pl-6 space-y-5 mt-5">{checklist.map(([name,copy])=><li key={name}><h3 className="text-xl font-bold">{name}</h3><p className="mt-2">{copy}</p></li>)}</ol></section>
 <section className="card my-8"><h2 className="text-2xl font-bold">Clicado e colado dispensam a mesma preparação?</h2><p className="mt-4">Não. O sistema colado depende da preparação e dos materiais compatíveis com o adesivo. No clicado, os encaixes não substituem uma base dentro da tolerância: o manual define o que pode ficar sob o piso e se há manta ou outras peças específicas. Compare o modelo exato, não apenas a palavra “vinílico” da embalagem.</p></section>
 <section className="my-8"><h2 className="text-3xl font-semibold">O que mandar para pedir um orçamento</h2><p className="my-4">Informe cidade e bairro, ambiente, metragem aproximada e se já há infiltração ou peças danificadas. Envie uma foto geral e fotos de perto do rejunte e das soleiras. Peça a discriminação da preparação, do revestimento, da instalação e dos acabamentos. Fotos ajudam na primeira conversa, mas não substituem a avaliação da base.</p><p>Em São José dos Pinhais, você pode consultar amostras no <Link className="underline" to="/loja-showroom-sao-jose-dos-pinhais">showroom da PVS Decore</Link>. Confirme horário, amostras e disponibilidade de instalação para o seu endereço antes da visita.</p></section>
 <section className="border-t mt-10 pt-6"><h2 className="text-xl font-semibold">Referência técnica</h2><p className="mt-3">As orientações da <a className="underline" href="https://tarkett.com.br/faq">Tarkett sobre contrapisos permitidos</a> são um exemplo de especificação do fabricante. Para decidir sobre o seu projeto, consulte o manual da linha oferecida: limites e preparo podem variar.</p></section>
 <nav aria-label="Próximos passos" className="flex flex-wrap gap-4 mt-10"><Link className="button" to="/contato">Consultar a PVS</Link><Link className="button secondary" to="/product/piso-vinilico">Conhecer pisos vinílicos</Link><Link className="button secondary" to="/guia-de-pisos">Comparar tipos de piso</Link></nav>
 </article></>;
}

