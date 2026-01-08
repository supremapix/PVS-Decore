import React from 'react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import MapSection from '../components/MapSection';
import LeadForm from '../components/LeadForm';
import FAQSection from '../components/FAQSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_DISPLAY, CONTACT_ADDRESS } from '../constants';

const ContactPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Fale Conosco | PVS Decore - Orçamentos e Localização"
        description="Entre em contato com a PVS Decore. Solicite seu orçamento de piso vinílico ou laminado. Veja nosso endereço em São José dos Pinhais e mapa de localização."
        url="/contato"
      />

      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
            Atendimento Personalizado
          </span>
          <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            Fale com a PVS Decore
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estamos prontos para transformar o seu projeto. Visite nossa loja ou nos envie uma mensagem.
          </p>
        </div>
      </div>

      {/* Map Section (Contains Store Info) */}
      <MapSection />

      {/* Contact Form & Info Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                {/* Form Side */}
                <div>
                   <h2 className="text-3xl font-black text-gray-900 mb-6">Envie uma Mensagem</h2>
                   <p className="text-gray-600 mb-8">
                     Preencha o formulário abaixo para solicitar um orçamento ou tirar dúvidas. 
                     Nossa equipe responderá rapidamente via WhatsApp.
                   </p>
                   <LeadForm locationName="Curitiba e Região" />
                </div>

                {/* Info Text Side */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Canais de Atendimento</h3>
                        <ul className="space-y-4 text-gray-600">
                             <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition border border-gray-100">
                                <div className="bg-brand-orange text-white p-2 rounded-full">
                                   <Phone size={20} />
                                </div>
                                <div>
                                   <span className="block text-xs font-bold uppercase text-gray-400">Telefone / WhatsApp</span>
                                   <span className="font-bold text-lg text-gray-900">{CONTACT_DISPLAY}</span>
                                </div>
                             </li>
                             <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition border border-gray-100">
                                <div className="bg-brand-orange text-white p-2 rounded-full">
                                   <Mail size={20} />
                                </div>
                                <div>
                                   <span className="block text-xs font-bold uppercase text-gray-400">E-mail</span>
                                   <span className="font-bold text-lg text-gray-900">{CONTACT_EMAIL}</span>
                                </div>
                             </li>
                             <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition border border-gray-100">
                                <div className="bg-brand-orange text-white p-2 rounded-full">
                                   <MapPin size={20} />
                                </div>
                                <div>
                                   <span className="block text-xs font-bold uppercase text-gray-400">Sede Própria</span>
                                   <span className="font-bold text-sm text-gray-900 leading-tight">{CONTACT_ADDRESS}</span>
                                </div>
                             </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-gray-900 mb-4">Dúvidas Frequentes</h2>
                  <p className="text-gray-600">Perguntas comuns antes de entrar em contato.</p>
              </div>
              <FAQSection />
          </div>
      </section>

    </PageTransition>
  );
};

export default ContactPage;