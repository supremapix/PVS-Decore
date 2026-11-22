import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { PVS_ATENDIMENTO_COVER, PVS_ATENDIMENTO_PATH, PVS_ATENDIMENTO_STEPS } from '../data/atendimento';

export default function AtendimentoPage() {
  return <>
    <EnhancedSEO
      title="Do primeiro contato à instalação do piso | PVS Decore"
      description="Veja em seis quadrinhos como planejar a instalação do piso: enviar fotos, avaliar a base, escolher o material, conferir o orçamento e cuidar do acabamento."
      url={PVS_ATENDIMENTO_PATH}
      image={PVS_ATENDIMENTO_COVER}
    />
    <article className="shell section max-w-6xl">
      <header className="max-w-3xl mb-10 md:mb-14">
        <p className="eyebrow">Guia em quadrinhos · 6 etapas</p>
        <h1 className="editorial-title text-4xl md:text-6xl mt-4">Do primeiro contato ao piso instalado.</h1>
        <p className="mt-6 text-lg leading-relaxed">Vai trocar o piso em São José dos Pinhais, Curitiba ou região? Veja o que contar no primeiro contato, o que conferir antes de agendar e quais orientações pedir após a instalação.</p>
        <p className="mt-3 text-sm">Cenas ilustrativas. Este roteiro explica as etapas; a proposta é ajustada ao seu endereço, ao ambiente e ao material.</p>
      </header>
      <ol className="grid gap-6 md:grid-cols-2">
        {PVS_ATENDIMENTO_STEPS.map((step, index) => (
          <li className={`card !p-0 overflow-hidden flex flex-col ${step.frame === null ? 'bg-stone-100 md:justify-center' : ''}`} key={step.title}>
            {step.frame !== null && <img
              src={'/imagens/atendimento/quadro-' + step.frame + '.webp'}
              alt={step.alt}
              className="aspect-[4/3] w-full object-cover"
              decoding="async"
              loading={index === 0 ? 'eager' : 'lazy'}
            />}
            <section className="p-5 md:p-6">
              <p className="eyebrow">Etapa {index + 1} de {PVS_ATENDIMENTO_STEPS.length}</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">{step.title}</h2>
              <p className="mt-4 rounded-md bg-stone-100 px-4 py-3 text-base"><strong>{step.speaker}:</strong> “{step.dialogue}”</p>
              <p className="mt-4 leading-relaxed">{step.action}</p>
            </section>
          </li>
        ))}
      </ol>
      <section className="card mt-12">
        <h2 className="text-2xl font-semibold">Seu primeiro contato pode ser simples.</h2>
        <p className="mt-3 max-w-2xl">Tenha em mãos o bairro, a medida aproximada e duas ou três fotos que mostrem o piso atual. Essas informações ajudam a orientar o atendimento sem antecipar valores ou prazos.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="/contato" className="button focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-stone-700">Falar com a PVS Decore</Link>
          <Link to="/guia-de-pisos" className="button secondary focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-stone-700">Comparar materiais</Link>
        </div>
      </section>
    </article>
  </>;
}
