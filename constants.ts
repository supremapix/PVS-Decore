import type { LocationData, Service } from './types';

export const CONTACT_PHONE = "554130766240"; // Landline WhatsApp format
export const CONTACT_DISPLAY = "(41) 3076-6240";
export const CONTACT_EMAIL = "pvs.decor@gmail.com";
export const CONTACT_ADDRESS = "Rua Izabel A Redentora, 1088, São José dos Pinhais - PR, 83030-500";
export const CONTACT_INSTAGRAM = "https://www.instagram.com/pvsdecore/";
export const GEO_COORDINATES = { lat: "-25.5348", long: "-49.2057" }; // Coordinates for SJP center approx or store

export const ACCORDION_ITEMS = [
  {
    title: "Pisos Laminados (Quick-Step, Durafloor)",
    content: "Destaque para a tecnologia Hydroseal (resistente à água) e sistema Uniclic (instalação sem cola). Ideal para quem busca rapidez e a estética perfeita da madeira. Trabalhamos com linhas de alto tráfego e resistência a riscos.",
    details: ["Sistema Click (Sem sujeira)", "Resistente à Água (Hydroseal)", "Consulte o termo do fabricante"]
  },
  {
    title: "Pisos Vinílicos (Tarkett, Ospefloor)",
    content: "Pisos vinílicos colados e clicados para interiores. Consulte a linha indicada para cada ambiente e siga as instruções de limpeza do fabricante.",
    details: ["Conforto Térmico e Acústico", "Limpeza conforme o manual", "Instalação sobre piso antigo"]
  },
  {
    title: "Rodapés e Acabamentos (Santa Luzia)",
    content: "O toque final que valoriza o imóvel. Rodapés de poliestireno que não mofam, não estufam e são à prova d'água. Acabamento premium em branco ou cores personalizadas.",
    details: ["Não mofa e não estufa", "Passa fio embutido", "Design moderno"]
  },
  {
    title: "Piso SPC",
    content: "Vinílico de núcleo rígido com encaixe. A resistência à água depende das condições de uso e não dispensa avaliar a umidade da base.",
    details: ["Núcleo rígido", "Sistema de encaixe", "Consulte a linha"]
  }
];

export const BRAND_PARTNERS = [
  { name: "Quick-Step", category: "Laminados", desc: "Tecnologia Hydroseal resistente à água" },
  { name: "Tarkett", category: "Vinílicos", desc: "Pisos vinílicos para interiores" },
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
    description: 'Aconchego da madeira com instalação rápida. Opções resistentes à água (Hydroseal) para durabilidade extra.',
    icon: 'Grid',
    image: '/piso_laminado_click.png'
  },
  {
    id: 'vinilico',
    title: 'Piso Vinílico',
    description: 'O equilíbrio perfeito entre conforto térmico e resistência. Ideal para quem busca silêncio e facilidade de limpeza.',
    icon: 'Layers',
    image: '/piso_vinilico.png'
  },
  {
    id: 'rodape',
    title: 'Rodapé Santa Luzia',
    description: 'O detalhe que define o ambiente. Rodapés de poliestireno à prova d\'água que não mofam e modernizam sua casa.',
    icon: 'Square',
    image: '/rodape_santa_luzia.png'
  },
  {
    id: 'spc',
    title: 'Piso SPC',
    description: 'Piso vinílico de núcleo rígido e encaixe. Consulte a indicação de uso e a preparação da base.',
    icon: 'Layers',
    image: '/piso_vinilico.png'
  }
];

export const GALLERY_IMAGES = [
  "/images/marcas/eucafloor-bg.jpg",
  "/images/marcas/durafloor-bg.jpg",
  "/images/marcas/quickstep-bg.jpg",
  "/images/marcas/santaluzia-bg.jpg",
  "/pisos-laminados-vinilicos-pvs-spj.png",
  "/piso_laminado_click.png",
  "/piso_vinilico.png",
  "/rodape_santa_luzia.png",
  "/loja-pvs.jpg"
];

export const FAQS = [
  {
    "question": "Qual o preço do metro quadrado instalado?",
    "answer": "O orçamento depende do piso, da metragem, da preparação da base e dos acabamentos. Solicite à PVS Decore os valores de material e instalação discriminados."
  },
  {
    "question": "Vocês atendem em São José dos Pinhais?",
    "answer": "Sim. A PVS Decore vende e instala pisos e fica na Rua Izabel A Redentora, 1088, São José dos Pinhais - PR, CEP 83030-500. Para Curitiba e RMC, consulte disponibilidade pelo (41) 3076-6240."
  },
  {
    "question": "Quanto tempo demora a instalação?",
    "answer": "O prazo depende da metragem, das condições da base e do piso escolhido. A preparação e a secagem podem ampliar o tempo; confirme o cronograma no orçamento."
  },
  {
    "question": "Piso Vinílico pode ser lavado?",
    "answer": "A limpeza depende da linha e do sistema de instalação. Use pano úmido conforme o manual; não deixe água acumulada e não lave pisos clicados sem autorização do fabricante."
  },
  {
    "question": "Preciso quebrar o piso antigo?",
    "answer": "Nem sempre. É necessário avaliar aderência, umidade, planicidade, juntas e altura das portas. A instalação sobre cerâmica só deve ocorrer quando a base e o manual do piso permitirem."
  }
];

export const TESTIMONIALS: { name: string; location: string; text: string; rating: number }[] = [];

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
      { title: 'Por que é perfeito para o clima de Curitiba?', content: 'Quem mora em Curitiba ou São José dos Pinhais conhece o frio úmido da região. O piso vinílico é um excelente isolante térmico. Diferente da cerâmica, que é "gelada", o vinílico mantém a temperatura ambiente. Isso significa que você pode andar descalço no inverno sem sentir aquele choque térmico, além de ajudar a manter a casa mais aquecida.' },
      { title: 'Resistência à Água e Umidade', content: "A resistência à água varia por linha. Não equivale a impermeabilizar o ambiente. Consulte o manual antes de usar em cozinhas, lavabos ou lavanderias; não presuma adequação a banheiros com chuveiro." },
      { title: 'Conforto Acústico Superior', content: 'Mora em apartamento? O piso vinílico absorve o impacto dos passos, reduzindo drasticamente o barulho de "toc-toc" (ruído de impacto). Isso melhora a qualidade de vida dentro de casa e a convivência com os vizinhos do andar de baixo.' },
      { title: 'Instalação Rápida e Limpa', content: 'Na PVS Decore, realizamos a instalação de vinílicos sobre o contrapiso ou sobre cerâmicas existentes (com o devido nivelamento). O processo é rápido, praticamente sem poeira e sem barulho de serras elétricas, permitindo que você renove sua casa em poucos dias.' },
      { title: 'Tipos: LVT Colado vs. SPC Click', content: "LVT colado utiliza adesivo e exige uma base preparada. SPC é um vinílico de núcleo rígido com encaixe. Ambos exigem verificar planicidade, umidade e demais limites do manual." },
      { title: 'Facilidade de Limpeza', content: 'A manutenção do vinílico é extremamente simples: basta uma vassoura de cerdas macias e um pano úmido com detergente neutro. Dispensa ceras e produtos abrasivos, mantendo o brilho e a aparência de novo por muitos anos.' },
      { title: 'Hipoalergênico e Seguro', content: 'Por não acumular poeira e ser fácil de higienizar, o piso vinílico é recomendado para quartos de crianças e pessoas alérgicas. Além disso, muitos modelos possuem proteção antibacteriana em sua camada superficial.' },
      { title: 'Dica #07: Limpeza Correta', content: 'O segredo para o seu vinílico durar décadas é simples: use apenas detergente neutro e água. Jamais use água sanitária ou produtos à base de petróleo. Quer saber qual o melhor produto específico? Solicite nosso guia de manutenção gratuito no WhatsApp.' },
      { title: 'Garantia PVS Decore', content: "A garantia do produto é definida pelo fabricante e varia conforme a linha e o uso. Consulte separadamente as condições do serviço de instalação no orçamento." }
    ]
  },
  'piso-laminado': {
    title: 'Piso Laminado em Curitiba e SJP',
    seoDescription: 'Especialistas em Piso Laminado. O melhor custo-benefício para quartos e salas. Instalação rápida sistema Click. Diversos padrões de madeira. Peça orçamento!',
    type: 'product',
    contentBlocks: [
      { title: 'O que é Piso Laminado?', content: 'O piso laminado é composto por camadas de HDF (fibra de madeira de alta densidade), revestido com um papel decorativo e uma proteção superficial (overlay). É a solução mais popular em Curitiba para quem busca a beleza da madeira com um custo acessível.' },
      { title: 'Ideal para o Inverno Paranaense', content: 'Feito de madeira reconstituída, o laminado é um material "quente". Ele quebra o gelo do contrapiso, tornando quartos e salas de estar ambientes muito mais acolhedores, especialmente nas noites frias de Curitiba e Região Metropolitana.' },
      { title: 'Instalação Click: Rapidez Incomparável', content: "O encaixe permite instalação sem adesivo nas réguas. O prazo e a liberação do ambiente dependem da preparação da base e do manual do produto." },
      { title: 'Custo-Benefício', content: 'Comparado à madeira maciça ou ao vinílico, o laminado costuma ter o menor custo por metro quadrado instalado. É a opção ideal para reformas rápidas em quartos, salas e corredores, valorizando o imóvel com baixo investimento.' },
      { title: 'Durabilidade e Resistência', content: 'Os laminados modernos possuem alta resistência a riscos e abrasão. Trabalhamos com linhas de resistência AC3 (residencial) e AC4/AC5 (comercial), garantindo que o piso suporte o dia a dia da sua família.' },
      { title: 'Manta Acústica e Niveladora', content: "A manta especificada para o laminado pode contribuir para o desempenho acústico. Ela não substitui a regularização de uma base desnivelada." },
      { title: 'Piso Laminado e Umidade', content: 'Embora a tecnologia tenha avançado (algumas linhas são resistentes à água por horas), o laminado tradicional não é indicado para áreas molhadas. É perfeito para áreas secas e íntimas da casa.' },
      { title: 'Design Moderno', content: 'As texturas dos laminados atuais são impressionantes, com relevos que acompanham os veios da madeira (sincronizados), proporcionando um visual e toque muito naturais.' },
      { title: 'Fácil Manutenção', content: 'Para limpar, basta aspirador de pó e pano levemente umedecido com produtos específicos para laminados. É prático para o dia a dia corrido das famílias modernas.' },
      { title: 'Dica PVS: Rodapé Branco', content: 'Quer modernizar seu ambiente instantaneamente? Combine o piso laminado madeirado com rodapés brancos de 10cm ou 15cm. Isso cria uma moldura elegante e amplia a sensação de pé-direito.' }
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
    seoDescription: 'Serviço especializado de instalação de pisos em residências. Avaliação da base, preparação e acabamento. Atendemos Curitiba e Região Metropolitana.',
    type: 'service',
    contentBlocks: [
      { title: 'Sua Casa em Boas Mãos', content: 'Sabemos que reformar a casa habitada exige cuidado extra. Nossa equipe de instalação residencial é treinada para trabalhar com organização, protegendo seus móveis e minimizando a poeira.' },
      { title: 'Evite os 3 Erros Comuns', content: 'Muitas obras dão dor de cabeça por 3 motivos: 1) Contratar "faz-tudo" sem especialização técnica; 2) Ignorar a umidade do contrapiso (o que faz o piso soltar depois); 3) Não deixar o espaço de dilatação correto. Na PVS Decore, seguimos protocolos técnicos rigorosos para reduzir esses riscos.' },
      { title: 'Avaliação do Contrapiso', content: 'Antes de instalar, fazemos uma análise rigorosa do seu contrapiso. Se houver umidade ou desníveis, indicamos e executamos a correção necessária (impermeabilização ou autonivelante) para garantir a longevidade do piso.' },
      { title: 'Paginação Personalizada', content: 'Planejamos o sentido das réguas para ampliar visualmente os ambientes e garantir o melhor aproveitamento do material, reduzindo perdas e recortes desnecessários.' },
      { title: 'Instalação Sobre Piso Existente', content: 'Em muitos casos, podemos instalar o vinílico ou laminado sobre a cerâmica antiga, sem necessidade de quebradeira. Isso reduz drasticamente o tempo de obra e o entulho gerado.' },
      { title: 'Acabamentos de Portas', content: 'Muitas vezes, ao colocar um piso novo sobre o antigo, as portas precisam ser refiladas (cortadas) embaixo. Nossa equipe realiza esse ajuste para que as portas abram e fechem perfeitamente.' },
      { title: 'Móveis no Lugar', content: 'Se você não tem onde colocar os móveis durante a troca do piso, nossa equipe pode ajudar a movê-los de um cômodo para o outro conforme a instalação avança (serviço sob consulta).' },
      { title: 'Limpeza Pós-Obra', content: 'Entregamos o ambiente aspirado e limpo. Recolhemos as sobras de material e embalagens, deixando sua casa pronta para você curtir o novo visual.' },
      { title: 'Garantia de Mão de Obra', content: "Consulte no orçamento as condições e responsabilidades relativas ao serviço. Elas são distintas da garantia do fabricante do piso." },
      { title: 'Regiões Atendidas', content: 'Levamos nossa excelência em instalação para todos os bairros de Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária e toda a Região Metropolitana num raio de 30km.' }
    ]
  },
  'instalacao-comercial': {
    title: 'Instalação Comercial e Corporativa',
    seoDescription: 'Pisos de alto tráfego para lojas, escritórios e empresas. Instalação noturna ou finais de semana para não parar seu negócio. Atendemos Curitiba e SJP.',
    type: 'service',
    contentBlocks: [
      { title: 'Agilidade para seu Negócio', content: 'Tempo é dinheiro. Entendemos que sua loja ou escritório não pode parar. Oferecemos opções de instalação em horários alternativos (noturno ou finais de semana) para minimizar o impacto na sua operação.' },
      { title: 'Pisos de Alto Tráfego', content: 'Especificamos e instalamos pisos com classificação AC4 e AC5 (Laminados) ou com capa de uso reforçada (Vinílicos) que suportam o fluxo intenso de clientes, rodízios de cadeiras e movimentação de mercadorias.' },
      { title: 'Durabilidade e Manutenção', content: 'Para ambientes comerciais, indicamos produtos de fácil limpeza e alta resistência a riscos. Isso reduz custos operacionais com limpeza e mantém o aspecto de novo por muito mais tempo, valorizando a imagem da sua empresa.' },
      { title: 'Acústica para Escritórios', content: 'O ruído em escritórios open-space atrapalha a produtividade. Nossos pisos vinílicos e carpetes em placas oferecem absorção acústica superior, criando um ambiente de trabalho mais focado e agradável.' },
      { title: 'Design Corporativo', content: 'Trabalhamos com linhas de design sóbrio e moderno, alinhadas com a identidade visual da sua marca. Desde tons de concreto para startups até amadeirados clássicos para escritórios de advocacia.' },
      { title: 'Regularização de Pisos Elevados', content: 'Temos expertise em preparar contrapisos e instalar revestimentos sobre pisos elevados, garantindo acesso às instalações elétricas e de dados quando necessário.' },
      { title: 'Segurança e Normas', content: "Para o uso comercial, solicite as fichas técnicas da linha e verifique as exigências aplicáveis ao projeto antes de especificar o revestimento." },
      { title: 'Grandes Metragens', content: 'Possuímos equipe dimensionada para atender grandes obras em Curitiba e Região Metropolitana, mantendo o padrão de qualidade PVS Decore mesmo em cronogramas apertados.' },
      { title: 'Garantia Estendida', content: "Consulte o termo de garantia do fabricante para uso comercial e as condições do serviço antes da contratação." },
      { title: 'Atendimento Personalizado', content: 'Realizamos visita técnica no seu estabelecimento para entender a dinâmica do local e propor a solução técnica mais viável economicamente e esteticamente.' }
    ]
  },
  'manutencao': {
    title: 'Manutenção e Reparos de Pisos',
    seoDescription: 'Reparo de pisos laminados e vinílicos, troca de réguas danificadas, recolagem e substituição de rodapés. Revitalize seu piso com a PVS Decore.',
    type: 'service',
    contentBlocks: [
      { title: 'Seu Piso Novo de Novo', content: 'Acidentes acontecem. Um risco profundo, uma régua lascada ou um rodapé que descolou não significam que você precisa trocar todo o piso. A PVS Decore oferece serviço especializado de reparo localizado.' },
      { title: 'Troca de Réguas Danificadas', content: 'Seja vinílico ou laminado, conseguimos substituir apenas as réguas avariadas (desde que haja material de reposição ou estoque disponível). Nossa técnica minimiza a necessidade de desmontar o ambiente todo.' },
      { title: 'Recolagem de Vinílico', content: 'Com o tempo ou umidade excessiva, algumas pontas de piso vinílico podem levantar. Realizamos a limpeza da base e a recolagem com adesivos de alta performance, devolvendo a planicidade ao revestimento.' },
      { title: 'Ajuste de Dilatação', content: 'Pisos laminados que estufaram por falta de espaço de dilatação podem ser salvos. Cortamos o excesso nas bordas e recolocamos o rodapé, permitindo que o piso "respire" e volte a assentar corretamente.' },
      { title: 'Reparo de Rodapés', content: 'Rodapés soltos, quebrados ou cantos que abriram podem ser reparados. Refazemos a fixação e o acabamento com massa, deixando as emendas invisíveis novamente.' },
      { title: 'Manutenção de Portas', content: 'Se o piso novo travou a porta ou se ela cedeu com o tempo e começou a riscar o chão, realizamos o refile (corte) e ajuste para garantir o funcionamento perfeito sem danificar o revestimento.' },
      { title: 'Remoção e Reinstalação', content: 'Vai mudar de endereço comercial ou residencial? Avaliamos a possibilidade de remover seu piso flutuante (click) e reinstalá-lo no novo imóvel, gerando economia e sustentabilidade.' },
      { title: 'Limpeza Técnica', content: 'Oferecemos orientações e produtos específicos para a limpeza pesada pós-obra ou revitalização periódica do seu piso vinílico ou laminado, removendo resíduos de cola e sujeiras impregnadas.' },
      { title: 'Avaliação Honesta', content: 'Sempre avaliaremos se o reparo vale a pena. Se o custo do conserto for próximo ao de um piso novo, seremos transparentes. Nosso objetivo é a sua satisfação a longo prazo.' },
      { title: 'Atendimento Rápido', content: 'Pequenos reparos são agendados com agilidade. Não deixe aquele defeito pequeno virar um problema grande. Chame a equipe de manutenção da PVS Decore.' }
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