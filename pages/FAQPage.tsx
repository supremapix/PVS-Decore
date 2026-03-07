import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, ArrowUp, Share2, Copy, Check } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import PageTransition from '../components/PageTransition';
import { FAQ_CATEGORIES, getTotalQuestions } from '../data/faqData';
import { CONTACT_PHONE } from '../constants';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string>('');
  const [questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveCategory(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    let count = 0;
    const duration = 2000;
    const target = getTotalQuestions();
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        setQuestionCount(target);
        clearInterval(timer);
      } else {
        setQuestionCount(Math.floor(count));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const copyLink = (categoryId: string, questionIndex: number) => {
    const link = `${window.location.origin}/faq#${categoryId}-q${questionIndex}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(`${categoryId}-${questionIndex}`);
    setTimeout(() => setCopiedLink(''), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCategories = FAQ_CATEGORIES.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  const generateFAQSchema = () => {
    const allQuestions = FAQ_CATEGORIES.flatMap(cat =>
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    );

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allQuestions
    };
  };

  return (
    <PageTransition>
      <EnhancedSEO
        title="FAQ Completo — 200+ Perguntas sobre Pisos Vinílicos, Laminados e SPC | PVS Decore"
        description="Central de dúvidas completa com mais de 200 perguntas e respostas sobre pisos vinílicos, laminados, SPC, instalação, manutenção, preços e muito mais. PVS Decore Curitiba."
        url="/faq"
        type="website"
        keywords="faq pisos vinilicos, perguntas pisos laminados, duvidas piso spc, como instalar piso vinilico, manutencao piso laminado, preco piso vinilico curitiba"
        breadcrumbs={[{ name: 'FAQ', url: '/faq' }]}
        additionalSchema={generateFAQSchema()}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.1) 35px, rgba(201,168,76,0.1) 70px)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
              Central de Dúvidas
            </div>

            <div className="mb-6">
              <div className="text-7xl md:text-9xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent inline-block">
                {questionCount}+
              </div>
              <p className="text-gray-400 uppercase tracking-widest text-sm mt-2">Perguntas Respondidas</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Encontre a <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">resposta</span><br/>
              que você precisa
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Central completa de conhecimento sobre pisos vinílicos, laminados, SPC, instalação, manutenção e muito mais.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Digite sua dúvida sobre pisos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full bg-white/10 backdrop-blur-lg border border-yellow-500/30 text-white placeholder-gray-400 text-lg focus:outline-none focus:border-yellow-500 transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {FAQ_CATEGORIES.map((category, idx) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category.id);
                  document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-yellow-500 text-sm font-semibold">{category.count} perguntas</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronDown className="text-yellow-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">{category.icon}</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black">{category.name}</h2>
                    <p className="text-gray-400">{category.questions.length} {searchTerm ? 'resultado(s) encontrado(s)' : 'perguntas'}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, idx) => {
                    const key = `${category.id}-${idx}`;
                    const isOpen = openQuestions.has(key);
                    const isCopied = copiedLink === key;

                    return (
                      <div
                        key={idx}
                        id={`${category.id}-q${idx}`}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all"
                      >
                        <button
                          onClick={() => toggleQuestion(category.id, idx)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="font-semibold text-lg pr-4">{faq.question}</span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                copyLink(category.id, idx);
                              }}
                              className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors"
                              title="Copiar link"
                            >
                              {isCopied ? (
                                <Check size={18} className="text-green-400" />
                              ) : (
                                <Copy size={18} className="text-gray-400" />
                              )}
                            </button>
                            {isOpen ? (
                              <ChevronUp className="text-yellow-500" size={24} />
                            ) : (
                              <ChevronDown className="text-gray-400" size={24} />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {searchTerm && filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Nenhum resultado encontrado</h3>
              <p className="text-gray-400 mb-8">
                Não encontramos perguntas relacionadas a "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105"
              >
                Limpar busca
              </button>
            </div>
          )}

          <div className="mt-20 text-center bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-black mb-4">Não encontrou sua dúvida?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Nossa equipe está pronta para ajudar você com qualquer questão sobre pisos!
            </p>
            <a
              href={`https://wa.me/${CONTACT_PHONE}?text=Olá! Tenho uma dúvida sobre pisos que não encontrei no FAQ.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com Especialista
            </a>
          </div>
        </div>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-gray-900 p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </PageTransition>
  );
};

export default FAQPage;
