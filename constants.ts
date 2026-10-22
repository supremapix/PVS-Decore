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
    details: ["Sistema Click (Sem sujeira)", "Resistente à Água (Hydroseal)", "Consulte a garantia da linha"]
  },
  {
    title: "Pisos Vinílicos (Tarkett, Ospefloor)",
    content: "O queridinho das reformas. Silencioso, térmico e tem limpeza conforme o manual. Temos opções coladas e clicadas. Perfeito para cozinhas, quartos e quem tem pets.",
    details: ["Conforto Térmico e Acústico", "Limpeza conforme o fabricante", "Instalação sobre piso antigo"]
  },
  {
    title: "Rodapés e Acabamentos (Santa Luzia)",
    content: "O toque final que valoriza o imóvel. Rodapés de poliestireno que com indicação de uso conforme a composição e o fabricante. Acabamento premium em branco ou cores personalizadas.",
    details: ["Não mofa e não estufa", "Passa fio embutido", "Design moderno"]
  }
];

export const BRAND_PARTNERS = [
  { name: "Quick-Step", category: "Laminados", desc: "Tecnologia Hydroseal resistente à água" },
  { name: "Tarkett", category: "Vinílicos", desc: "Pisos vinílicos e soluções de revestimento" },
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
    image: '/imagens/piso-laminado-carvalho-sala.webp'
  },
  {
    id: 'vinilico',
    title: 'Piso Vinílico',
    description: 'O equilíbrio perfeito entre conforto térmico e resistência. Ideal para quem busca silêncio e facilidade de limpeza.',
    icon: 'Layers',
    image: '/imagens/piso-vinilico-claro-quarto.webp'
  },
  {
    id: 'rodape',
    title: 'Rodapé Santa Luzia',
    description: 'O detalhe que define o ambiente. Rodapés de poliestireno com condições de uso definidas pelo fabricante e modernizam sua casa.',
    icon: 'Square',
    image: '/imagens/rodape-branco-acabamento-canto.webp'
  },
  {id:'spc',title:'Piso SPC',description:'Piso vinílico de núcleo rígido com encaixe. Consulte indicação de uso e condições do contrapiso.',icon:'Layers',image:'/imagens/piso-spc-pedra-cozinha.webp'}
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
  "/vidros-esquadrias-pvs-decore-sao-jose-dos-pinhais.png",
  "/loja-pvs.jpg"
];

export const FAQS = [
  {
    question: "Qual o preço do metro quadrado instalado?",
    answer: "O valor depende do modelo, da área e da preparação do contrapiso. Solicite orçamento com materiais e instalação discriminados."
  },
  {
    question: "Vocês atendem em São José dos Pinhais?",
    answer: "Sim! Nossa sede fica em São José dos Pinhais (Rua Izabel A Redentora), mas atendemos Curitiba inteira, Pinhais, Colombo, Araucária e toda a região metropolitana conforme disponibilidade para o endereço."
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer: "O prazo é definido após a medição e avaliação do contrapiso. Considere preparação, instalação, acabamento e cura do adesivo quando necessário."
  },
  {
    question: "Piso Vinílico tem limpeza conforme o manual?",
    answer: "Depende da linha. Use pano levemente umedecido e siga o manual do fabricante. Pisos clicados não devem ser lavados ou encharcados; consulte a autorização de lavagem para modelos colados."
  },
  {
    question: "Preciso quebrar o piso antigo?",
    answer: "Na maioria das vezes, NÃO! Tanto o vinílico quanto o laminado podem ser instalados sobre cerâmica, porcelanato ou cimento queimado, desde que a base esteja nivelada. Avaliamos isso gratuitamente para você."
  }
];

export const TESTIMONIALS: {name:string;location:string;text:string;rating:number}[] = [];

export interface RichPageData {
  title: string;
  seoDescription: string;
  type: 'product' | 'service';
  contentBlocks: { title: string; content: string }[];
}

export const PAGE_CONTENT: Record<string, RichPageData> = {
  "piso-vinilico": {
    "title": "Piso vinílico: modelos e instalação",
    "seoDescription": "Compare piso vinílico colado e SPC clicado com a PVS Decore. Entenda ambiente, contrapiso e limpeza antes de solicitar o orçamento.",
    "type": "product",
    "contentBlocks": [
      {
        "title": "Onde usar",
        "content": "Informe se o ambiente é residencial ou comercial, sua rotina de limpeza e a circulação de pessoas. A escolha deve seguir a indicação da linha, não apenas a cor ou espessura."
      },
      {
        "title": "LVT colado e SPC clicado",
        "content": "O LVT colado depende de base preparada e adesivo compatível. O SPC utiliza núcleo rígido e encaixes. Ambos precisam de avaliação do contrapiso e instalação conforme o manual."
      },
      {
        "title": "Água e contrapiso",
        "content": "Resistência à água não significa impermeabilização do ambiente. Verifique infiltrações e umidade antes da instalação; o uso em áreas sujeitas a água depende da autorização específica do fabricante."
      },
      {
        "title": "Limpeza e proteção",
        "content": "Remova a poeira e siga o manual da linha para limpeza úmida. Evite encharcar sistemas clicados e proteja os pés dos móveis. Consulte as instruções do fabricante para produtos de limpeza."
      }
    ]
  },
  "piso-laminado": {
    "title": "Piso laminado: escolha e instalação",
    "seoDescription": "Pisos laminados para seu projeto em São José dos Pinhais, Curitiba e região. Compare padrões, instalação e condições de uso na PVS Decore.",
    "type": "product",
    "contentBlocks": [
      {
        "title": "Visual e uso do ambiente",
        "content": "Compare amostras com a luz e os móveis do cômodo. Confira a classe de uso e a aplicação indicada para a linha, especialmente em comércio ou ambientes com cadeiras de rodízios."
      },
      {
        "title": "Sistema de encaixe",
        "content": "A instalação flutuante precisa respeitar juntas, perfis e acessórios especificados. Uma manta não substitui correções no contrapiso. Solicite avaliação antes de fechar o serviço."
      },
      {
        "title": "Cuidados com água",
        "content": "O laminado convencional é destinado a áreas secas. Linhas com resistência à água têm condições próprias de instalação e limpeza. Consulte o manual e não presuma proteção contra infiltrações."
      },
      {
        "title": "Como planejar a compra",
        "content": "Inclua rodapés, transições entre ambientes, portas e recortes na medição. Peça orçamento com material e instalação separados, disponibilidade e cronograma definidos."
      }
    ]
  },
  "rodape-poliestireno": {
    "title": "Rodapés de poliestireno e acabamentos",
    "seoDescription": "Compare alturas, perfis e cores de rodapés com a PVS Decore. Planeje cantos, portas e acabamento junto com seu piso.",
    "type": "product",
    "contentBlocks": [
      {
        "title": "Proporção e estilo",
        "content": "Compare altura e perfil do rodapé com portas, paredes e móveis. Uma amostra ajuda a avaliar a cor no ambiente antes de definir o acabamento."
      },
      {
        "title": "Encontros e recortes",
        "content": "Meça os trechos de parede e considere cantos, batentes e interrupções. A quantidade de peças deve incluir o aproveitamento dos cortes, sem depender apenas da área do piso."
      },
      {
        "title": "Fixação e pintura",
        "content": "Cola, preparo da parede, tratamento das emendas e pintura variam por modelo. Verifique o manual do fabricante e registre no orçamento o acabamento contratado."
      }
    ]
  },
  "instalacao-residencial": {
    "title": "Instalação de pisos em residências",
    "seoDescription": "Planeje instalação de pisos em casas e apartamentos com a PVS Decore. Avaliação da base, ambientes ocupados, rodapés e orçamento.",
    "type": "service",
    "contentBlocks": [
      {
        "title": "Casa ocupada ou imóvel vazio",
        "content": "Informe se haverá móveis e moradores durante o serviço. Discuta a ordem dos cômodos e o espaço para armazenar materiais antes de marcar a instalação."
      },
      {
        "title": "Avaliação antes do acabamento",
        "content": "A equipe precisa verificar a base, eventuais infiltrações e a compatibilidade do revestimento existente. A instalação sobre outro piso depende da condição encontrada e do manual da linha."
      },
      {
        "title": "Portas, rodapés e transições",
        "content": "A altura final do conjunto pode interferir em portas e encontros com outros revestimentos. Inclua esses pontos na avaliação e detalhe no orçamento os ajustes necessários."
      }
    ]
  },
  "instalacao-comercial": {
    "title": "Instalação de pisos comerciais",
    "seoDescription": "Consulte pisos e instalação para lojas e escritórios. Planeje tráfego, limpeza, preparação e organização do serviço com a PVS Decore.",
    "type": "service",
    "contentBlocks": [
      {
        "title": "A rotina define a especificação",
        "content": "Informe fluxo de pessoas, equipamentos, mobiliário e método de limpeza. A ficha técnica da linha precisa ser compatível com o uso comercial pretendido."
      },
      {
        "title": "Planejar a operação",
        "content": "Combine áreas de trabalho, proteção e acesso para materiais com o responsável pelo espaço. Prazo e liberação dependem do sistema escolhido, preparação da base e condições do imóvel."
      },
      {
        "title": "Orçamento e documentação",
        "content": "Peça descrição dos materiais, preparação, instalação, transporte e condições de garantia. Guarde a identificação do produto e as orientações de manutenção para a equipe de limpeza."
      }
    ]
  },
  "manutencao": {
    "title": "Cuidados e manutenção de pisos",
    "seoDescription": "Consulte a PVS sobre cuidados, avaliação e manutenção de pisos laminados e vinílicos. Identifique o material antes de escolher o procedimento.",
    "type": "service",
    "contentBlocks": [
      {
        "title": "Identifique o material",
        "content": "Guarde a embalagem ou envie fotos e a identificação da linha, se disponível. Produtos visualmente semelhantes podem exigir cuidados diferentes."
      },
      {
        "title": "Quando pedir avaliação",
        "content": "Peças soltas, manchas de umidade ou deformações precisam de análise da causa. Evite encobrir um problema de base apenas com um novo revestimento. A possibilidade de reparo depende do sistema e da disponibilidade de peças."
      },
      {
        "title": "Rotina de limpeza",
        "content": "Siga a orientação do fabricante para o material instalado. Evite abrasivos e excesso de água; use utensílios suaves e proteja móveis para reduzir desgaste."
      }
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
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba", "Cristo Rei", "Fanny",
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