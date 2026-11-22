import React from 'react';
import { Link } from 'react-router-dom';
import { PVS_ATENDIMENTO_PATH } from '../data/atendimento';

const cards = [
  {
    title: 'Como funciona a instalação do seu piso?',
    label: 'Guia em quadrinhos',
    body: 'Veja o que enviar no primeiro contato, como ler o orçamento e o que combinar antes e depois da instalação.',
    image: '/imagens/atendimento/quadro-1.webp',
    path: PVS_ATENDIMENTO_PATH,
    link: 'Ver as 6 etapas em quadrinhos',
  },
  {
    title: 'Como os pisos mudaram ao longo do tempo?',
    label: 'História dos materiais',
    body: 'Do parquet às opções de laminado, vinílico e SPC. Entenda o que mudou e o que vale comparar hoje.',
    image: '/imagens/blog/historia-dos-pisos.webp',
    path: '/blog/historia-dos-pisos-parquet-laminado-vinilico',
    link: 'Ler a história dos pisos',
  },
];

export default function HomeGuias() {
  return <section className="bg-stone-50 section">
    <div className="shell">
      <p className="eyebrow">Guias da PVS Decore</p>
      <h2 className="editorial-title text-4xl md:text-5xl mt-4 mb-8">Antes de trocar o piso, veja por onde começar.</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map(card => <article className="card !p-0 overflow-hidden flex flex-col" key={card.path}>
          <img src={card.image} alt="" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
          <div className="p-6 flex grow flex-col items-start">
            <p className="eyebrow">{card.label}</p>
            <h3 className="text-2xl font-semibold mt-2">{card.title}</h3>
            <p className="mt-3 mb-4">{card.body}</p>
            <Link to={card.path} className="mt-auto inline-flex min-h-11 items-center underline underline-offset-4 font-semibold focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-stone-700">{card.link} <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
