import { LocationData, Service } from './types';

export const CONTACT_PHONE = "554130766240"; // Landline WhatsApp format
export const CONTACT_DISPLAY = "(41) 3076-6240";
export const CONTACT_EMAIL = "pvs.decor@gmail.com";
export const CONTACT_ADDRESS = "Rua Izabel A Redentora, 1088, São José dos Pinhais - PR, 83030-500";
export const CONTACT_INSTAGRAM = "https://www.instagram.com/pvsdecore/";

export const ACCORDION_ITEMS = [
  {
    title: "Pisos Laminados (Quick-Step, Durafloor)",
    content: "Destaque para a tecnologia Hydroseal (resistente à água) e sistema Uniclic (instalação sem cola). Ideal para quem busca rapidez e a estética perfeita da madeira. Trabalhamos com linhas de alto tráfego e resistência a riscos.",
    details: ["Sistema Click (Sem sujeira)", "Resistente à Água (Hydroseal)", "Garantia de até 25 anos"]
  },
  {
    title: "Pisos Vinílicos (Tarkett, Ospefloor)",
    content: "O queridinho das reformas. Silencioso, térmico e pode ser lavado. Temos opções coladas (para sobrepor cerâmica) e clicadas. Perfeito para cozinhas, quartos e quem tem pets.",
    details: ["Conforto Térmico e Acústico", "Pode lavar (Modelos colados)", "Instalação sobre piso antigo"]
  },
  {
    title: "Rodapés e Acabamentos (Santa Luzia)",
    content: "O toque final que valoriza o imóvel. Rodapés de poliestireno que não mofam, não estufam e são à prova d'água. Acabamento premium em branco ou cores personalizadas.",
    details: ["Não mofa e não estufa", "Passa fio embutido", "Design moderno"]
  },
  {
    title: "Vidros e Esquadrias (Vidromax, Gold)",
    content: "Soluções completas em vidros temperados e esquadrias de alumínio (Linhas Suprema e Gold) para fechar sua sacada ou cobertura com o mesmo padrão de qualidade dos pisos.",
    details: ["Linha Suprema e Gold", "Vidros Temperados", "Projetos sob medida"]
  }
];

export const BRAND_PARTNERS = [
  { name: "Quick-Step", category: "Laminados", desc: "Tecnologia Hydroseal resistente à água" },
  { name: "Tarkett", category: "Vinílicos", desc: "Líder mundial em conforto térmico" },
  { name: "Durafloor", category: "Laminados", desc: "Elegância com as linhas Street e Nature" },
  { name: "Santa Luzia", category: "Rodapés", desc: "Acabamentos sustentáveis" },
  { name: "Eucafloor", category: "Laminados", desc: "Custo-benefício Evidence e Prime" },
  { name: "Ospefloor", category: "Vinílicos", desc: "Texturas e cores modernas" },
  { name: "Floorest", category: "Laminados", desc: "Alta resistência e durabilidade" },
  { name: "VinilForte", category: "Vinílicos", desc: "Qualidade residencial" }
];

export const SERVICES: Service[] = [
  {
    id: 'laminado',
    title: 'Piso Laminado Click',
    description: 'Instalação rápida e sem sujeira. Opções resistentes à água (Hydroseal) ideais para áreas integradas.',
    icon: 'Grid',
    image: 'https://images.unsplash.com/photo-1581858726768-758a03361df9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vinilico',
    title: 'Piso Vinílico',
    description: 'Conforto acústico e térmico. Modelos colados para reformas rápidas sobre cerâmica ou clicados.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rodape',
    title: 'Rodapé Santa Luzia',
    description: 'Acabamento de luxo em poliestireno. 100% à prova d\'água, não mofa e valoriza seu ambiente.',
    icon: 'Square',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'outros',
    title: 'Vidros e Esquadrias',
    description: 'Parceria com Vidromax e linhas Suprema/Gold para um acabamento completo da sua obra.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800'
  }
];

export interface RichPageData {
  title: string;
  seoDescription: string;
  type: 'product' | 'service';
  contentBlocks: { title: string; content: string }[];
}

export const PAGE_CONTENT: Record<string, RichPageData> = {
  'piso-vinilico': {
    title: 'Piso Vinílico em Curitiba e SJP',
    seoDescription: 'Venda e instalação de Piso Vinílico em LVT e SPC (Click). Resistente à água, térmico e acústico. Ideal para residências e comércios. Confira nossas ofertas!',
    type: 'product',
    contentBlocks: [
      { title: 'O que é o Piso Vinílico?', content: 'O piso vinílico é produzido a partir de PVC, cargas minerais e aditivos, o que o torna um revestimento leve, flexível (na versão LVT) ou rígido (na versão SPC), e extremamente durável. Ele se tornou o favorito em projetos de arquitetura em Curitiba por oferecer conforto térmico, mantendo a temperatura agradável mesmo nos dias frios da nossa região.' },
      { title: 'Resistência à Água e Umidade', content: 'Diferente do laminado, o piso vinílico (especialmente o colado e o SPC rígido) possui alta resistência à umidade. É a escolha ideal para cozinhas, lavabos e áreas de serviço, além de ser perfeito para quem tem animais de estimação, pois acidentes com líquidos são fáceis de limpar e não estufam o piso.' },
      { title: 'Conforto Acústico Superior', content: 'Mora em apartamento? O piso vinílico absorve o impacto dos passos, reduzindo drasticamente o barulho de "toc-toc" (ruído de impacto). Isso melhora a qualidade de vida dentro de casa e a convivência com os vizinhos do andar de baixo.' },
      { title: 'Instalação Rápida e Limpa', content: 'Na PVS Decore, realizamos a instalação de vinílicos sobre o contrapiso ou sobre cerâmicas existentes (com o devido nivelamento). O processo é rápido, praticamente sem poeira e sem barulho de serras elétricas, permitindo que você renove sua casa em poucos dias.' },
      { title: 'Tipos: LVT Colado vs. SPC Click', content: 'Trabalhamos com o LVT (Luxury Vinyl Tile), que é colado ao contrapiso e exige uma base perfeitamente nivelada, e o SPC (Stone Plastic Composite) com sistema de encaixe Click, que é mais rígido, dispensa cola e pode ser instalado sobre pisos existentes com pequenas imperfeições.' },
      { title: 'Facilidade de Limpeza', content: 'A manutenção do vinílico é extremamente simples: basta uma vassoura de cerdas macias e um pano úmido com detergente neutro. Dispensa ceras e produtos abrasivos, mantendo o brilho e a aparência de novo por muitos anos.' },
      { title: 'Hipoalergênico e Seguro', content: 'Por não acumular poeira e ser fácil de higienizar, o piso vinílico é recomendado para quartos de crianças e pessoas alérgicas. Além disso, muitos modelos possuem proteção antibacteriana em sua camada superficial.' },
      { title: 'Variedade de Padrões Amadeirados', content: 'Oferecemos uma vasta gama de cores e texturas que imitam com perfeição a madeira natural, o cimento queimado e até pedras. Você consegue o visual nobre da madeira com a tecnologia e praticidade do PVC.' },
      { title: 'Durabilidade para Alto Tráfego', content: 'Para ambientes comerciais em Curitiba e São José dos Pinhais, temos linhas com capa de uso (wear layer) reforçada, garantindo resistência contra riscos, cadeiras de rodinhas e alto fluxo de pessoas.' },
      { title: 'Garantia PVS Decore', content: 'Ao comprar e instalar conosco, você tem a garantia dupla: do fabricante do piso (que pode chegar a 15 anos dependendo da linha) e a garantia da nossa mão de obra especializada.' }
    ]
  },
  'piso-laminado': {
    title: 'Piso Laminado em Curitiba e SJP',
    seoDescription: 'Especialistas em Piso Laminado. O melhor custo-benefício para quartos e salas. Instalação rápida sistema Click. Diversos padrões de madeira. Peça orçamento!',
    type: 'product',
    contentBlocks: [
      { title: 'O que é Piso Laminado?', content: 'O piso laminado é composto por camadas de HDF (fibra de madeira de alta densidade), revestido com um papel decorativo e uma proteção superficial (overlay). É a solução mais popular em Curitiba para quem busca a beleza da madeira com um custo acessível.' },
      { title: 'Instalação Click: Rapidez Incomparável', content: 'O sistema de encaixe "Click" permite uma instalação flutuante super veloz. Em muitos casos, conseguimos instalar um apartamento inteiro em um único dia. E o melhor: você pode pisar e colocar os móveis logo após a instalação.' },
      { title: 'Custo-Benefício', content: 'Comparado à madeira maciça ou ao vinílico, o laminado costuma ter o menor custo por metro quadrado instalado. É a opção ideal para reformas rápidas em quartos, salas e corredores, valorizando o imóvel com baixo investimento.' },
      { title: 'Conforto Térmico', content: 'Como é feito de madeira, o laminado é naturalmente quente ao toque. Em cidades frias como Curitiba e São José dos Pinhais, ele torna o ambiente muito mais acolhedor do que pisos frios como a cerâmica ou porcelanato.' },
      { title: 'Durabilidade e Resistência', content: 'Os laminados modernos possuem alta resistência a riscos e abrasão. Trabalhamos com linhas de resistência AC3 (residencial) e AC4/AC5 (comercial), garantindo que o piso suporte o dia a dia da sua família.' },
      { title: 'Manta Acústica e Niveladora', content: 'Todo piso laminado é instalado sobre uma manta. Na PVS Decore, utilizamos mantas de qualidade que ajudam a corrigir pequenas imperfeições do contrapiso e oferecem um isolamento acústico básico.' },
      { title: 'Piso Laminado e Umidade', content: 'Embora a tecnologia tenha avançado (algumas linhas são resistentes à água por horas), o laminado tradicional não é indicado para áreas molhadas. É perfeito para áreas secas e íntimas da casa.' },
      { title: 'Design Moderno', content: 'As texturas dos laminados atuais são impressionantes, com relevos que acompanham os veios da madeira (sincronizados), proporcionando um visual e toque muito naturais.' },
      { title: 'Fácil Manutenção', content: 'Para limpar, basta aspirador de pó e pano levemente umedecido com produtos específicos para laminados. É prático para o dia a dia corrido das famílias modernas.' },
      { title: 'Sustentabilidade', content: 'Nossos fornecedores utilizam madeira de reflorestamento certificada. O piso laminado é uma escolha ecologicamente consciente para a sua construção ou reforma.' }
    ]
  },
  'rodape-poliestireno': {
    title: 'Rodapé de Poliestireno (Santa Luzia e Similares)',
    seoDescription: 'Rodapés de Poliestireno à prova d\'água, anti-mofo e prontos para instalar. Diversas alturas e modelos. O acabamento perfeito para seu piso. Confira!',
    type: 'product',
    contentBlocks: [
      { title: 'A Evolução do Rodapé', content: 'Esqueça os rodapés de madeira que estufam ou de cerâmica que são difíceis de alinhar. O rodapé de poliestireno (EPS) é feito de material reciclado (isopor de alta densidade), sendo 100% à prova d\'água e imune a cupins.' },
      { title: 'Acabamento Perfeito', content: 'Eles já vêm pintados de fábrica (geralmente em branco), mas aceitam pintura se você desejar. O acabamento é liso, moderno e esconde a fiação elétrica em muitos modelos, deixando o ambiente clean.' },
      { title: 'Não Mofa e Não Apodrece', content: 'Ideal para nossa região úmida. Você pode lavar o chão sem medo de estragar o rodapé. É a combinação perfeita tanto para pisos vinílicos quanto para porcelanatos e laminados.' },
      { title: 'Variedade de Alturas e Frisos', content: 'Trabalhamos com modelos de 7cm, 10cm, 15cm e até 20cm de altura. Temos opções lisas, frisadas ou com detalhes clássicos, adaptando-se a qualquer estilo de decoração, do minimalista ao provençal.' },
      { title: 'Instalação sem Sujeira', content: 'A fixação é feita com colas especiais de alta aderência e buchas T (quando necessário), sem pregos aparentes. O acabamento nos cantos e emendas é feito com massa própria, ficando imperceptível.' },
      { title: 'Rodapé de Sobrepor', content: 'Tem um rodapé de cerâmica antigo embutido na parede e não quer quebrar? Temos modelos de sobrepor (reforma) que são instalados por cima do rodapé existente, renovando o ambiente sem "quebra-quebra".' },
      { title: 'Sustentabilidade', content: 'O poliestireno utilizado é proveniente da reciclagem de isopor. Ao escolher este produto, você está ajudando a retirar resíduos do meio ambiente e transformá-los em um produto de luxo durável.' },
      { title: 'Valorização do Imóvel', content: 'Um rodapé alto branco é um item de desejo na decoração de interiores. Ele alonga o pé-direito visualmente e cria uma moldura elegante para o seu piso.' },
      { title: 'Combinação com Guarnições', content: 'Também oferecemos guarnições de porta no mesmo material, permitindo que você padronize toda a carpintaria da casa com a mesma qualidade e resistência.' },
      { title: 'Instalação Técnica PVS', content: 'O segredo de um rodapé bonito é o corte em 45 graus perfeito nas esquinas. Nossos instaladores utilizam serras de precisão para garantir quinas afiadas e alinhamento impecável.' }
    ]
  },
  'instalacao-residencial': {
    title: 'Instalação de Pisos Residenciais',
    seoDescription: 'Serviço especializado de instalação de pisos em residências. Equipe própria, garantia, limpeza e rapidez. Atendemos Curitiba e Região Metropolitana.',
    type: 'service',
    contentBlocks: [
      { title: 'Sua Casa em Boas Mãos', content: 'Sabemos que reformar a casa habitada exige cuidado extra. Nossa equipe de instalação residencial é treinada para trabalhar com organização, protegendo seus móveis e minimizando a poeira.' },
      { title: 'Avaliação do Contrapiso', content: 'Antes de instalar, fazemos uma análise rigorosa do seu contrapiso. Se houver umidade ou desníveis, indicamos e executamos a correção necessária (impermeabilização ou autonivelante) para garantir a longevidade do piso.' },
      { title: 'Paginação Personalizada', content: 'Planejamos o sentido das réguas para ampliar visualmente os ambientes e garantir o melhor aproveitamento do material, reduzindo perdas e recortes desnecessários.' },
      { title: 'Instalação Sobre Piso Existente', content: 'Em muitos casos, podemos instalar o vinílico ou laminado sobre a cerâmica antiga, sem necessidade de quebradeira. Isso reduz drasticamente o tempo de obra e o entulho gerado.' },
      { title: 'Acabamentos de Portas', content: 'Muitas vezes, ao colocar um piso novo sobre o antigo, as portas precisam ser refiladas (cortadas) embaixo. Nossa equipe realiza esse ajuste para que as portas abram e fechem perfeitamente.' },
      { title: 'Móveis no Lugar', content: 'Se você não tem onde colocar os móveis durante a troca do piso, nossa equipe pode ajudar a movê-los de um cômodo para o outro conforme a instalação avança (serviço sob consulta).' },
      { title: 'Limpeza Pós-Obra', content: 'Entregamos o ambiente aspirado e limpo. Recolhemos as sobras de material e embalagens, deixando sua casa pronta para você curtir o novo visual.' },
      { title: 'Garantia de Mão de Obra', content: 'A PVS Decore oferece garantia documentada sobre o serviço de instalação. Se houver qualquer descolamento ou abertura de juntas, nossa equipe retorna para corrigir sem custo.' },
      { title: 'Pontualidade', content: 'Respeitamos rigorosamente os dias e horários agendados. Sabemos que sua rotina é importante e trabalhamos para cumprir os prazos acordados.' },
      { title: 'Regiões Atendidas', content: 'Levamos nossa excelência em instalação para todos os bairros de Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária e toda a Região Metropolitana num raio de 30km.' }
    ]
  }
};

const RAW_BAIRROS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", "Tanguá", 
  "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", 
  "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", 
  "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", 
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "CIC", "Cristo Rei", "Fanny", 
  "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", 
  "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", 
  "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", 
  "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Vila Pantanal", 
  "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", 
  "São Braz Velho", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", "Fazendinha-Portão", "Campo Comprido Velho", 
  "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", "Vila São Pedro", "Vila Osternack", "Conjunto Caiuá", 
  "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

const RAW_CIDADES = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", 
  "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", 
  "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", 
  "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", 
  "Tunas do Paraná", "Curitiba"
];

const slugify = (text: string) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-')         
    .replace(/^-+/, '')             
    .replace(/-+$/, '');            
};

export const LOCATIONS: LocationData[] = [
  ...RAW_BAIRROS.map(name => ({ name, slug: slugify(name), type: 'bairro' as const })),
  ...RAW_CIDADES.map(name => ({ name, slug: slugify(name), type: 'cidade' as const }))
];