import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, CONTACT_DISPLAY } from '../constants';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, MapPin, Star, Phone } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import ShareButtons from '../components/ShareButtons';

// Helper to generate unique SEO content based on location name
const generateContent = (locationName: string, type: 'bairro' | 'cidade') => {
  const isCity = type === 'cidade';
  const isSJP = locationName.toLowerCase().includes('são josé dos pinhais');
  const term = isCity ? `na cidade de ${locationName}` : `no bairro ${locationName}`;
  const local = locationName;

  if (isSJP) {
    return [
      {
        title: `PVS Decore: Sua Loja de Pisos em São José dos Pinhais`,
        content: `Localizada no coração de São José dos Pinhais, na Rua Izabel A Redentora, 1088, a PVS Decore é a sua revenda oficial de pisos laminados e vinílicos. Por estarmos sediados aqui, oferecemos o atendimento mais rápido da região, com entrega e instalação priorizadas para todos os moradores e empresas de SJP.`
      },
      {
        title: `Revenda Oficial Eucafloor, Durafloor e Quick-Step em SJP`,
        content: `Trabalhamos apenas com as marcas líderes do mercado. Em nossa loja em São José dos Pinhais, você encontra o mostruário completo da Eucafloor, Durafloor e Quick-Step. Temos opções para todos os estilos, desde o rústico amadeirado até o moderno cimento queimado, sempre com garantia de fábrica e de instalação.`
      },
      {
        title: `Instalação de Pisos em São José dos Pinhais com Mão de Obra Própria`,
        content: `Diferente de outras lojas, a PVS Decore possui equipe de instalação própria e treinada. Isso garante que sua obra em São José dos Pinhais seja executada com perfeição, limpeza e rapidez. Conhecemos as normas dos principais condomínios de SJP e garantimos uma instalação silenciosa e eficiente.`
      },
      {
        title: `Pisos Vinílicos e Laminados Resistentes à Água em SJP`,
        content: `O clima de São José dos Pinhais exige materiais de alta qualidade. Oferecemos pisos vinílicos 100% à prova d'água e laminados com tecnologia Hydroseal, ideais para resistir à umidade sem estufar ou deformar. Proteja seu investimento com quem entende das particularidades da nossa região.`
      },
      {
        title: `Visita Técnica Gratuita em Toda São José dos Pinhais`,
        content: `Não tem tempo de vir até nossa loja? Nosso consultor vai até você! Realizamos medição e orçamento sem custo em todos os bairros de SJP, levando as amostras físicas para que você escolha o piso ideal sob a luz do seu próprio ambiente.`
      },
      {
        title: `Rodapés Santa Luzia: O Acabamento de Luxo em SJP`,
        content: `Para dar o toque final na sua reforma em São José dos Pinhais, trabalhamos com a linha completa de rodapés de poliestireno da Santa Luzia. São materiais anti-mofo, à prova d'água e que não amarelam com o tempo, garantindo um visual sofisticado por décadas.`
      },
      {
        title: `Transforme seu Apartamento ou Casa em SJP`,
        content: `Seja no Afonso Pena, Centro, Guatupê ou qualquer outro bairro de São José dos Pinhais, a PVS Decore já realizou centenas de obras de sucesso. Nossa experiência local nos permite oferecer soluções personalizadas para cada tipo de imóvel da cidade.`
      },
      {
        title: `Pisos de Alto Tráfego para o Comércio de São José dos Pinhais`,
        content: `Empresários de SJP contam com a PVS Decore para renovar seus espaços comerciais. Oferecemos pisos de alta resistência (AC4 e AC5) que suportam o fluxo intenso de clientes, com instalação rápida para não interromper seu faturamento.`
      },
      {
        title: `Garantia e Nota Fiscal: Segurança em São José dos Pinhais`,
        content: `Comprar na PVS Decore é sinônimo de tranquilidade. Emitimos nota fiscal e termo de garantia para todos os serviços em SJP. Somos uma empresa consolidada na cidade, pronta para prestar todo o suporte pós-venda que você precisar.`
      }
    ];
  }

  return [
    {
      title: `Venda de Pisos Vinílicos e Laminados em ${local}`,
      content: `A PVS Decore é referência absoluta quando o assunto é revestimentos de alto padrão ${term}. Se você está reformando ou construindo, nossa equipe oferece as melhores opções de pisos vinílicos e laminados, combinando durabilidade com estética impecável. Entendemos as necessidades específicas dos imóveis de ${local}, oferecendo soluções que valorizam seu patrimônio.`
    },
    {
      title: `Atendimento VIP em ${local}`,
      content: `Por estarmos sediados estrategicamente em São José dos Pinhais, temos agilidade para atender ${local} com prioridade. Para os moradores e empresas desta região, oferecemos visita técnica expressa: nosso consultor leva o mostruário até você, evitando que precise se deslocar no trânsito.`
    },
    {
      title: `Instalação Profissional em ${local}`,
      content: `Não basta comprar um bom piso, a instalação é 70% do resultado. Nossa equipe técnica atua fortemente ${term}, garantindo nivelamento perfeito, cortes precisos e acabamento de rodapés impecável. Evite dores de cabeça com mão de obra desqualificada; escolha a PVS Decore para sua obra em ${local}.`
    },
    {
      title: `Piso Vinílico: O Queridinho de ${local}`,
      content: `O piso vinílico tem sido a escolha número um para apartamentos e casas em ${local}. Suas propriedades térmicas e acústicas trazem um conforto inigualável, especialmente para o clima de Curitiba e Região. Além disso, é resistente à água, sendo ideal para quem tem pets ou crianças.`
    },
    {
      title: `Atendimento Comercial em ${local}`,
      content: `Sua empresa ou escritório em ${local} merece um piso que transmita profissionalismo. Oferecemos linhas de alto tráfego, ideais para lojas, consultórios e espaços corporativos. Realizamos a instalação em horários flexíveis para não atrapalhar o funcionamento do seu negócio.`
    },
    {
      title: `Manutenção e Troca de Pisos em ${local}`,
      content: `Seu piso antigo está desgastado? Realizamos a remoção e troca de pisos em ${local} com mínima sujeira e rapidez. Modernize seu ambiente em questão de dias. Nossa equipe cuida de todo o processo, desde a retirada do material antigo até o descarte correto.`
    },
    {
      title: `Piso Laminado: Custo-Benefício para ${local}`,
      content: `Para quem busca beleza e agilidade, o piso laminado é a solução perfeita. Muito procurado nos projetos residenciais de ${local}, ele oferece a beleza da madeira com um custo muito mais acessível e uma instalação extremamente rápida (sistema click).`
    },
    {
      title: `Orçamento Gratuito em ${local}`,
      content: `Sabemos que cada obra é única. Por isso, oferecemos visita técnica gratuita para medição e orçamento ${term}. Nosso consultor leva as amostras até você, permitindo que escolha a cor e textura que melhor combina com a iluminação do seu ambiente em ${local}.`
    },
    {
      title: `Rodapés e Acabamentos em ${local}`,
      content: `O detalhe faz toda a diferença. Oferecemos rodapés de poliestireno (Santa Luzia e similares) que são à prova d'água e não mofam. A instalação perfeita dos rodapés é uma marca registrada da PVS Decore nas obras realizadas em ${local}.`
    }
  ];
};

const LocationPage = () => {
  const { slug } = useParams();
  const location = LOCATIONS.find(l => l.slug === slug);

  const seoContent = useMemo(() => {
    if (!location) return [];
    return generateContent(location.name, location.type);
  }, [location]);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  const pageUrl = `/${location.type}/${location.slug}`;

  return (
    <PageTransition>
      <SEO 
        title={`Pisos Vinílicos e Laminados em ${location.name} | PVS Decore`}
        description={`Venda e instalação de pisos em ${location.name}. Vinílico e Laminado com o melhor preço e instalação especializada. Orçamento grátis no local!`}
        url={pageUrl}
        location={location.name}
      />

      <div className="bg-white">
        {/* Header Region */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">
              Atendimento Especializado
            </span>
            <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4">
              Pisos e Revestimentos em <span className="text-brand-orange">{location.name}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Levamos a qualidade e sofisticação da PVS Decore até você em {location.name}. 
              Solicite um orçamento sem compromisso.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main SEO Content Column */}
            <div className="lg:w-2/3">
              {/* Intro Box */}
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-xl mb-10 flex items-start gap-4">
                <div className="bg-brand-orange text-white p-3 rounded-full shrink-0">
                  <Star fill="white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Referência em {location.name}</h2>
                  <p className="text-gray-700">
                    Se você busca transformar seu ambiente residencial ou comercial em {location.name}, 
                    encontrou a empresa certa. Unimos produtos de primeira linha com mão de obra especializada.
                  </p>
                </div>
              </div>

              {/* Dynamic 18 Blocks */}
              <div className="space-y-12">
                {seoContent.map((block, index) => (
                  <div key={index} className="prose max-w-none group">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-brand-orange rounded-full"></span>
                      {block.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4 text-justify">
                      {block.content}
                    </p>
                    {/* Intermittent CTA every 3 blocks */}
                    {(index + 1) % 3 === 0 && (
                      <div className="my-6">
                        <a 
                          href={`https://wa.me/554130766240?text=Olá, sou de ${location.name} e gostaria de um orçamento.`} 
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-700 transition"
                        >
                          <Phone size={18} /> Atendimento VIP para moradores de {location.name}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Share Buttons */}
              <ShareButtons title={`Pisos PVS Decore em ${location.name}`} url={pageUrl} />
            </div>

            {/* Sidebar / Sticky Form */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                <LeadForm locationName={location.name} />
                
                <div className="bg-gray-100 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-brand-orange" />
                    Áreas Próximas
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {LOCATIONS
                      .filter(l => l.type === location.type && l.name !== location.name)
                      .slice(0, 8) // Show 8 random other locations
                      .map(l => (
                        <li key={l.slug}>
                          <Link to={`/${l.type}/${l.slug}`} className="text-gray-600 hover:text-brand-orange block py-1 border-b border-gray-200">
                            Pisos em {l.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery at bottom */}
        <ImageGallery />
      </div>
    </PageTransition>
  );
};

export default LocationPage;