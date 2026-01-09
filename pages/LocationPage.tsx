import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, CONTACT_DISPLAY } from '../constants';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import PageTransition from '../components/PageTransition';
import { CheckCircle2, MapPin, Star, Phone } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

// Helper to generate unique SEO content based on location name
const generateContent = (locationName: string, type: 'bairro' | 'cidade') => {
  const isCity = type === 'cidade';
  const term = isCity ? `na cidade de ${locationName}` : `no bairro ${locationName}`;
  const local = locationName;

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
      title: `Porcelanatos de Alto Padrão em ${local}`,
      content: `Além dos amadeirados, somos especialistas em porcelanatos de grandes formatos. Muitos clientes de ${local} optam pelo porcelanato pela sua sofisticação e facilidade de limpeza. Temos um catálogo completo que atende desde áreas de serviço até grandes livings residenciais.`
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
      title: `Tendências de Decoração em ${local}`,
      content: `Acompanhamos as últimas tendências de arquitetura e design de interiores. Os projetos em ${local} têm buscado tons mais naturais e texturas que remetem à madeira rústica ou cimento queimado. Temos todas essas opções à pronta entrega ou sob encomenda.`
    },
    {
      title: `Durabilidade e Garantia`,
      content: `Trabalhamos apenas com marcas líderes de mercado. Ao instalar seu piso com a PVS Decore em ${local}, você recebe certificado de garantia tanto do produto quanto da mão de obra. É a segurança que você precisa para investir no seu imóvel.`
    },
    {
      title: `Pisos para Cozinhas e Banheiros`,
      content: `Muitos clientes de ${local} têm dúvida se podem colocar vinílico na cozinha. A resposta é sim! Temos linhas específicas resistentes à umidade que ficam lindas em áreas gourmet e cozinhas. Consulte nossos especialistas sobre as melhores opções para áreas molhadas.`
    },
    {
      title: `Rodapés e Acabamentos em ${local}`,
      content: `O detalhe faz toda a diferença. Oferecemos rodapés de poliestireno (Santa Luzia e similares) que são à prova d'água e não mofam. A instalação perfeita dos rodapés é uma marca registrada da PVS Decore nas obras realizadas em ${local}.`
    },
    {
      title: `Soluções Acústicas para Apartamentos`,
      content: `O silêncio é um luxo. Nossos pisos vinílicos e mantas acústicas para laminados reduzem drasticamente o "toc-toc" dos sapatos, sendo exigência em muitos condomínios de ${local}. Melhore sua qualidade de vida e a relação com os vizinhos.`
    },
    {
      title: `Rapidez na Entrega para ${local}`,
      content: `Entendemos que obra parada é prejuízo. Nossa logística é otimizada para atender ${local} com agilidade. Mantemos estoque dos modelos mais vendidos para garantir que sua reforma não atrase por falta de material.`
    },
    {
      title: `Pagamento Facilitado`,
      content: `Investir na sua casa em ${local} ficou mais fácil. Parcelamos sua compra e aceitamos diversas formas de pagamento. O piso dos seus sonhos cabe no seu bolso com as condições especiais da PVS Decore.`
    },
    {
      title: `Sustentabilidade`,
      content: `Nossos fornecedores possuem certificação ambiental. Ao escolher a PVS Decore para sua obra em ${local}, você está optando por produtos ecologicamente corretos, muitos produzidos com materiais reciclados e recicláveis.`
    },
    {
      title: `Consultoria Especializada`,
      content: `Não sabe qual piso escolher? Nossa equipe de vendas não apenas tira o pedido, mas presta uma verdadeira consultoria. Analisamos o tráfego, a umidade e o estilo do seu imóvel em ${local} para indicar a solução tecnicamente correta.`
    },
    {
      title: `A Melhor Avaliação da Região`,
      content: `A satisfação dos nossos clientes em ${local} é nosso maior orgulho. A PVS Decore cresce através da indicação de clientes satisfeitos. Venha fazer parte dessa lista de obras bem sucedidas e transforme seu ambiente hoje mesmo.`
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

  return (
    <PageTransition>
      <SEO 
        title={`Pisos Vinílicos e Laminados em ${location.name} | PVS Decore`}
        description={`Venda e instalação de pisos em ${location.name}. Vinílico, Laminado e Porcelanato com o melhor preço e instalação especializada. Orçamento grátis no local!`}
        url={`/${location.type}/${location.slug}`}
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