# PROMPT COMPLETO - SITE PVS DECORE EM HTML PURO

## OBJETIVO
Criar um site institucional completo para a PVS Decore, empresa especializada em pisos laminados e vinílicos localizada em São José dos Pinhais - PR, utilizando apenas HTML, CSS e JavaScript puro (sem frameworks).

---

## INFORMAÇÕES DA EMPRESA

**Nome:** PVS Decore
**Segmento:** Venda e instalação de pisos laminados, vinílicos, SPC e rodapés
**Localização:** Rua Izabel A Redentora, 1088 - São José dos Pinhais - PR - CEP 83030-500
**Telefone:** (41) 3076-6240
**WhatsApp:** 554130766240
**E-mail:** pvs.decor@gmail.com
**Instagram:** https://www.instagram.com/pvsdecore/
**Coordenadas GPS:** Latitude -25.5347, Longitude -49.2064

**Horário de Funcionamento:**
- Segunda a Sexta: 08h às 18h
- Sábado: 08h às 13h
- Domingo: Fechado

**Marcas Trabalhadas:**
- Eucafloor (pisos laminados e vinílicos)
- Durafloor (pisos laminados, vinílicos e SPC)
- Quick-Step (pisos laminados e vinílicos premium)
- Santa Luzia (rodapés de poliestireno)

---

## PALETA DE CORES

```css
/* Cores Principais */
--brand-orange: #F97316;
--brand-dark: #111827;
--brand-light: #F3F4F6;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
--white: #FFFFFF;
--green-whatsapp: #25D366;
```

---

## IMAGENS DO PROJETO

### Logo
**Não há logo em arquivo.** Use um logotipo de texto estilizado:
```html
<div class="logo">
  <span class="logo-pvs">PVS</span>
  <span class="logo-decore">DECORE</span>
</div>
```

### Imagens Principais (já disponíveis no projeto)

**1. Foto da Loja (Hero / Banner Principal)**
- URL: `/pisos-laminados-vinilicos-pvs-spj.png`
- Descrição: Fachada moderna da loja PVS Decore à noite com iluminação
- Uso: Hero section, seção mapa, galeria

**2. Piso Laminado Click**
- URL: `/piso_laminado_click.png`
- Descrição: Piso laminado com sistema de encaixe click
- Uso: Hero slider, galeria, página de produtos

**3. Piso Vinílico**
- URL: `/piso_vinilico.png`
- Descrição: Amostra de piso vinílico
- Uso: Hero slider, galeria, página de produtos

**4. Rodapé Santa Luzia**
- URL: `/rodape_santa_luzia.png`
- Descrição: Rodapé de poliestireno branco
- Uso: Hero slider, galeria, página de produtos

**5. Vidros e Esquadrias**
- URL: `/vidros-esquadrias-pvs-decore-sao-jose-dos-pinhais.png`
- Descrição: Trabalho de vidraçaria
- Uso: Galeria

**6. Loja Interior**
- URL: `/loja-pvs.jpg`
- Descrição: Interior da loja
- Uso: Galeria

### Backgrounds para Marcas (usar gradientes caso não tenha)

**Eucafloor:** Background verde/madeira
**Durafloor:** Background azul/cinza
**Quick-Step:** Background preto/premium
**Santa Luzia:** Background branco/clean

---

## ESTRUTURA DO SITE

### PÁGINA 1: HOME (index.html)

#### Header (Topo Fixo)
- **Barra Superior (Fina):**
  - Esquerda: Ícone de localização + "Sede em São José dos Pinhais - Atendemos num raio de 30km"
  - Direita: E-mail: pvs.decor@gmail.com | Telefone: (41) 3076-6240

- **Menu Principal:**
  - Logo PVS DECORE (esquerda)
  - Menu Desktop: Início | Marcas | Piso Vinílico | Piso Laminado | Serviços (dropdown) | Contato
  - Botão CTA: "Orçamento" (laranja com ícone WhatsApp, com animação pulse)
  - Menu Mobile: Ícone hambúrguer

**Dropdown Serviços:**
- Instalação Residencial
- Instalação Comercial
- Manutenção

#### Hero Section (Tela Cheia)
- **Background:** Slider automático com as 4 imagens principais
- **Overlay:** Gradiente escuro da esquerda para direita (opacidade 80%)
- **Conteúdo centralizado:**
  - Subtítulo: "TRANSFORME SEU AMBIENTE"
  - Título principal (grande): "Pisos Laminados e Vinílicos de Alta Qualidade"
  - Texto: "Instalação profissional em até 48h. Atendemos Curitiba e São José dos Pinhais."
  - 2 Botões:
    - "Solicitar Orçamento" (laranja, destaque)
    - "Ver Produtos" (transparente com borda branca)

#### Seção: Por Que Escolher a PVS Decore
**3 Cards lado a lado (ícones + texto):**
1. **Qualidade Garantida** - Produtos certificados das melhores marcas
2. **Instalação Profissional** - Equipe própria treinada
3. **Melhor Preço** - Revenda oficial com preços competitivos

#### Seção: Nossas Marcas
**4 Cards de marcas (com hover effect):**
- Eucafloor
- Durafloor
- Quick-Step
- Santa Luzia

Cada card deve ter:
- Logo ou nome da marca (grande)
- Descrição breve
- Badge com tipos de produtos
- Botão "Ver Catálogo"

#### Galeria de Obras Realizadas
- Carrossel horizontal com scroll automático
- 6 imagens dos trabalhos realizados
- Título: "Galeria de Obras Realizadas"
- Subtítulo: "Qualidade que se vê na prática"

#### Seção: Depoimentos
Carrossel de depoimentos com 3 cards visíveis:

**Depoimento 1:**
- Nome: Ricardo Mendes
- Estrelas: 5/5
- Texto: "Excelente trabalho! A instalação do piso vinílico no meu apartamento ficou perfeita. Atendimento desde o orçamento até a entrega foi impecável."

**Depoimento 2:**
- Nome: Ana Paula Souza
- Estrelas: 5/5
- Texto: "Transformaram minha sala com um piso laminado de primeira. O acabamento dos rodapés ficou show. Super indico!"

**Depoimento 3:**
- Nome: Carlos Eduardo
- Estrelas: 5/5
- Texto: "Contratei para meu escritório e o resultado superou as expectativas. Equipe profissional, instalação rápida, limpa e preço justo."

#### Seção: Venha nos Visitar
**Layout 2 colunas:**

**Coluna Esquerda (Info):**
- Título: "PVS Decore SJP"
- Texto: "Conheça nosso showroom completo. Veja as amostras pessoalmente..."
- 3 Boxes de informação:
  1. **Endereço:** Rua Izabel A Redentora, 1088, SJP
  2. **Horário:** Seg a Sex: 08h às 18h | Sáb: 08h às 13h
  3. **Contato:** (41) 3076-6240
- Botão: "Abrir GPS (Google Maps)"

**Coluna Direita:**
- Imagem: `/pisos-laminados-vinilicos-pvs-spj.png`
- Ícone de localização no canto inferior direito

#### FAQ (Perguntas Frequentes)
**6 perguntas em accordion:**

1. **Qual o preço do metro quadrado instalado?**
   - Resposta: O valor varia entre R$ 90 e R$ 250 por m² instalado, dependendo do tipo de piso escolhido...

2. **Quanto tempo leva a instalação?**
   - Resposta: Em média, instalamos apartamentos de até 80m² em 1 a 2 dias úteis...

3. **Vocês dão garantia?**
   - Resposta: Sim! Garantia de fábrica do produto (varia de 15 a 25 anos) + garantia de 1 ano da instalação.

4. **Atendem fora de São José dos Pinhais?**
   - Resposta: Sim! Atendemos toda a região metropolitana de Curitiba num raio de até 30km...

5. **Preciso tirar o piso antigo?**
   - Resposta: Depende. Pisos laminados e vinílicos podem ser instalados sobre cerâmica, porcelanato ou contrapiso...

6. **Fazem orçamento sem compromisso?**
   - Resposta: Sim! Realizamos visita técnica gratuita com medição e apresentação de amostras no seu ambiente.

#### Footer (Rodapé)
**Layout 4 colunas:**

**Coluna 1 - Sobre:**
- Logo PVS DECORE
- Texto breve
- Ícones sociais (Instagram, E-mail)

**Coluna 2 - Produtos:**
- Piso Vinílico
- Piso Laminado
- Rodapé Poliestireno

**Coluna 3 - Serviços:**
- Instalação Residencial
- Instalação Comercial
- Manutenção

**Coluna 4 - Fale Conosco:**
- Telefone/WhatsApp: (41) 3076-6240
- E-mail: pvs.decor@gmail.com
- Endereço: Rua Izabel A Redentora, 1088, SJP

**Rodapé Inferior:**
- © 2026 PVS Decore. Todos os direitos reservados.
- Link: Mapa do Site
- Desenvolvido ❤️ por Suprema Sites Express

---

### PÁGINA 2: NOSSOS PRODUTOS (produtos.html)

#### Hero Interno
- Background: Cinza escuro (#111827)
- Título: "Trabalhamos com as Melhores Marcas"
- Subtítulo: "Pisos laminados, vinílicos e acabamentos de alta qualidade"

#### Filtros (Cards Clicáveis)
5 filtros lado a lado:
1. Todos os Tipos
2. Pisos Laminados
3. Pisos Vinílicos
4. Pisos SPC
5. Rodapés e Acabamentos

#### Grid de Marcas (2 colunas)

**Card Eucafloor:**
- Header colorido
- Nome: Eucafloor
- Descrição: "Líder em pisos laminados de alta qualidade"
- Tags: Laminados, Vinílicos
- 3 Destaques: Tecnologia alemã | Garantia estendida | 15+ anos no mercado
- Botões: "Ver Catálogo" | WhatsApp | Download

**Card Durafloor:**
- Header colorido
- Nome: Durafloor
- Descrição: "Referência em pisos laminados e vinílicos"
- Tags: Laminados, Vinílicos, SPC
- 3 Destaques: Melhor custo-benefício | Variedade de cores | Instalação fácil
- Botões: "Ver Catálogo" | WhatsApp | Download

**Card Quick-Step:**
- Header colorido
- Nome: Quick-Step
- Descrição: "Tecnologia belga em pisos premium"
- Tags: Laminados, Vinílicos
- 3 Destaques: Premium quality | Design exclusivo | Resistência superior
- Botões: "Ver Catálogo" | WhatsApp | Download

**Card Santa Luzia:**
- Header colorido
- Nome: Santa Luzia
- Descrição: "Especialista em rodapés e acabamentos"
- Tags: Rodapés e Acabamentos
- 3 Destaques: Acabamento perfeito | Fácil instalação | Diversas opções
- Botões: "Ver Catálogo" | WhatsApp | Download

#### Seção Benefícios
3 cards:
1. Qualidade Garantida
2. Instalação Profissional
3. Melhor Custo-Benefício

#### CTA Final
- Background escuro
- Título: "Precisa de Ajuda para Escolher?"
- Subtítulo: "Nossa equipe está pronta..."
- 2 Botões: WhatsApp | Solicitar Orçamento

---

### PÁGINA 3: PISO VINÍLICO (piso-vinilico.html)

#### Hero
- Título: "Piso Vinílico"
- Subtítulo: "Soluções completas com qualidade garantida em Curitiba e Região"

#### Box Destaque Laranja
- Ícone estrela
- Título: "Por que escolher este produto?"
- Texto explicativo

#### 9 Blocos de Conteúdo SEO (H3 + Parágrafo)

**Bloco 1: Vantagens do Piso Vinílico**
Texto: O piso vinílico é 100% impermeável, perfeito para áreas molhadas como cozinhas, banheiros e lavanderias. Além disso, possui excelente conforto térmico e acústico, sendo ideal para apartamentos...

**Bloco 2: Instalação Rápida e Limpa**
Texto: A instalação do piso vinílico é muito mais rápida que cerâmica. Em um dia, transformamos seu ambiente sem quebra-quebra, sem sujeira e sem transtornos...

**Bloco 3: Resistência e Durabilidade**
Texto: Os pisos vinílicos da Durafloor e Eucafloor possuem camada de proteção UV que evita desbotamento. Resistem a arranhões, manchas e impactos do dia a dia...

**Bloco 4: Design Realista**
Texto: A tecnologia de impressão HD reproduz com perfeição texturas de madeira, cimento queimado, mármore e pedra. Você tem beleza de materiais nobres com praticidade e custo reduzido...

**Bloco 5: Conforto para Pets e Crianças**
Texto: Por ser antiderrapante e macio, o piso vinílico é perfeito para casas com pets e crianças. Não acumula pelos e é fácil de limpar...

**Bloco 6: Manutenção Simples**
Texto: Basta vassoura, pano úmido e detergente neutro. Não precisa encerar, não mancha e não absorve odores...

**Bloco 7: Variedade de Cores e Padrões**
Texto: Trabalhamos com mais de 50 opções de cores e texturas. Do rústico ao moderno, do claro ao escuro...

**Bloco 8: Custo-Benefício Imbatível**
Texto: Comparado à madeira maciça ou porcelanato importado, o piso vinílico oferece economia de até 60% com resultado visual equivalente...

**Bloco 9: Garantia e Suporte**
Texto: Todos os nossos pisos vinílicos têm garantia de fábrica e de instalação. Você compra com segurança na PVS Decore...

**A cada 3 blocos:** Inserir CTA intermediário: "Atendimento VIP para moradores de [Cidade]"

#### Sidebar (Formulário + Links)
- Formulário de Orçamento
- Box "Áreas Próximas" (links para outras páginas)

---

### PÁGINA 4: CONTATO (contato.html)

#### Hero
- Título: "Fale com a PVS Decore"
- Subtítulo: "Estamos prontos para transformar o seu projeto"

#### Seção Mapa (igual à da home)

#### Formulário + Info
**2 colunas:**

**Coluna 1 - Formulário:**
- Nome Completo
- Telefone/WhatsApp
- E-mail (opcional)
- Cidade
- Mensagem
- Botão: "Enviar via WhatsApp"

**Coluna 2 - Canais:**
3 boxes:
1. Telefone/WhatsApp: (41) 3076-6240
2. E-mail: pvs.decor@gmail.com
3. Endereço: Rua Izabel A Redentora, 1088, SJP

#### FAQ (igual à da home)

---

### PÁGINA 5: MAPA DO SITE (sitemap.html)

**3 Colunas:**

**Coluna 1:**
- Institucional (Início, Marcas, Contato)
- Produtos (Piso Vinílico, Piso Laminado, Rodapé)
- Serviços (Instalação Residencial, Instalação Comercial, Manutenção)

**Coluna 2:**
- Cidades Atendidas (29 links)

**Coluna 3:**
- Bairros de Curitiba (120+ links com scroll)

---

### PÁGINAS DINÂMICAS (Templates)

#### Template: Página de Cidade/Bairro

Estrutura idêntica para todas as 150+ páginas de localização.

**Exemplo: piso-agua-verde.html**

**Hero:**
- Título: "Pisos e Revestimentos em Água Verde"
- Subtítulo: "Levamos a qualidade da PVS Decore até você..."

**Box Laranja Destaque:**
- "Referência em Água Verde"

**9 Blocos de Conteúdo Personalizados:**

**Bloco 1: Venda de Pisos Vinílicos e Laminados em [Bairro]**
Texto personalizado com o nome do bairro repetido estrategicamente...

**Bloco 2: Atendimento VIP em [Bairro]**
Texto sobre visita técnica gratuita na região...

**Bloco 3: Instalação Profissional em [Bairro]**
Equipe técnica, nivelamento, acabamento...

**Blocos 4-9:** Piso Vinílico, Comercial, Manutenção, Laminado, Orçamento, Rodapés

**Sidebar:** Formulário + Links para outras áreas

---

## ELEMENTOS FIXOS

### Botão Flutuante WhatsApp
- Posição: Canto inferior direito
- Ícone WhatsApp verde (#25D366)
- Animação: Bounce infinito
- Tooltip no hover: "Orçamento Rápido!"
- Link: https://wa.me/554130766240?text=Olá, visitei o site da PVS Decore e gostaria de um orçamento.

### Botão Voltar ao Topo
- Aparece após scroll > 500px
- Ícone seta para cima
- Smooth scroll

### Header Inteligente
- Esconde ao rolar para baixo
- Aparece ao rolar para cima
- Sempre visível no topo da página

---

## REQUISITOS TÉCNICOS

### SEO Avançado (Todas as Páginas)

**Meta Tags Obrigatórias:**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Descrição única por página]">
<meta name="keywords" content="[Keywords relevantes]">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="[URL da página]">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[Título]">
<meta property="og:description" content="[Descrição]">
<meta property="og:url" content="[URL]">
<meta property="og:image" content="/pisos-laminados-vinilicos-pvs-spj.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:description" content="[Descrição]">

<!-- Geo -->
<meta name="geo.region" content="BR-PR">
<meta name="geo.placename" content="São José dos Pinhais">
<meta name="geo.position" content="-25.5347;-49.2064">
```

**Structured Data (JSON-LD):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PVS Decore",
  "image": "/pisos-laminados-vinilicos-pvs-spj.png",
  "telephone": "+554130766240",
  "email": "pvs.decor@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Izabel A Redentora, 1088",
    "addressLocality": "São José dos Pinhais",
    "addressRegion": "PR",
    "postalCode": "83030-500",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.5347",
    "longitude": "-49.2064"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
}
</script>
```

### Performance
- CSS minificado
- JavaScript minificado
- Lazy loading de imagens
- Preload de fontes
- Cache de recursos estáticos

### Responsividade
- Mobile First
- Breakpoints: 640px, 768px, 1024px, 1280px
- Menu mobile com hamburger
- Grid responsivo
- Imagens adaptativas

### Acessibilidade
- Semântica HTML5
- Alt em todas as imagens
- Labels em formulários
- Contraste de cores adequado
- Navegação por teclado

---

## FUNCIONALIDADES JAVASCRIPT

### Slider/Carrossel (Hero)
```javascript
// Troca automática a cada 7 segundos
// Animação fade entre imagens
// Pausar no hover
```

### Menu Mobile
```javascript
// Toggle no clique do hamburger
// Fechar ao clicar fora
// Animação slide
```

### Accordion FAQ
```javascript
// Abrir/fechar ao clicar
// Fechar outros ao abrir um
// Animação suave
```

### Scroll Suave
```javascript
// Smooth scroll para âncoras
// Botão voltar ao topo
```

### Formulário WhatsApp
```javascript
// Validação de campos
// Formatação de mensagem
// Redirecionamento para WhatsApp Web
```

### Header Inteligente
```javascript
// Detectar direção do scroll
// Esconder/mostrar com animação
// Classe sticky no scroll
```

---

## SITEMAP.XML

Gerar arquivo sitemap.xml com:
- 1 página inicial
- 1 página de marcas/produtos
- 1 página de contato
- 3 páginas de produtos
- 3 páginas de serviços
- 29 páginas de cidades
- 120+ páginas de bairros

**Total: ~160 URLs**

Prioridades:
- Home: 1.0
- Produtos/Marcas: 0.9
- Produtos individuais: 0.9
- Serviços: 0.8
- Cidades principais: 0.7
- Bairros: 0.6

---

## LISTA COMPLETA DE PÁGINAS

### Páginas Estáticas (8)
1. index.html (Home)
2. produtos.html (Marcas)
3. contato.html
4. piso-vinilico.html
5. piso-laminado.html
6. rodape-poliestireno.html
7. instalacao-residencial.html
8. instalacao-comercial.html
9. manutencao.html
10. sitemap.html

### Páginas de Cidades (29)
adrianopolis.html, agudos-do-sul.html, almirante-tamandare.html, araucaria.html, balsa-nova.html, bocaiuva-do-sul.html, campina-grande-do-sul.html, campo-do-tenente.html, campo-largo.html, campo-magro.html, cerro-azul.html, colombo.html, contenda.html, doutor-ulysses.html, fazenda-rio-grande.html, itaperucu.html, lapa.html, mandirituba.html, pien.html, pinhais.html, piraquara.html, quatro-barras.html, quitandinha.html, rio-branco-do-sul.html, rio-negro.html, sao-jose-dos-pinhais.html, tijucas-do-sul.html, tunas-do-parana.html, curitiba.html

### Páginas de Bairros de Curitiba (120+)
agua-verde.html, ahu.html, alto-boqueirao.html, alto-da-gloria.html, atuba.html, bacacheri.html, bairro-alto.html, batel.html, bigorrilho.html, boa-vista.html, boqueirao.html, cabral.html, cajuru.html, campina-do-siqueira.html, campo-comprido.html, campo-de-santana.html, capao-da-imbuia.html, capao-raso.html, centro.html, centro-civico.html, cic.html, cristo-rei.html, fanny.html, fazendinha.html, guabirotuba.html, guaira.html, hauer.html, hugo-lange.html, jardim-botanico.html, jardim-das-americas.html, juveve.html, merces.html, mossungue.html, novo-mundo.html, orleans.html, parolin.html, pilarzinho.html, pinheirinho.html, portao.html, prado-velho.html, reboucas.html, santa-candida.html, santa-felicidade.html, santa-quiteria.html, santo-inacio.html, sao-braz.html, sao-francisco.html, sao-joao.html, sao-lourenco.html, seminario.html, sitio-cercado.html, taruma.html, tatuquara.html, tingui.html, uberaba.html, vista-alegre.html, xaxim.html... (e mais 70+)

---

## INSTRUÇÕES FINAIS

1. **Estrutura de Arquivos:**
```
/
├── index.html
├── produtos.html
├── contato.html
├── sitemap.html
├── sitemap.xml
├── piso-vinilico.html
├── piso-laminado.html
├── rodape-poliestireno.html
├── instalacao-residencial.html
├── instalacao-comercial.html
├── manutencao.html
├── /cidades/
│   ├── curitiba.html
│   ├── sao-jose-dos-pinhais.html
│   └── [demais cidades...]
├── /bairros/
│   ├── agua-verde.html
│   ├── batel.html
│   └── [demais bairros...]
├── /css/
│   └── style.css
├── /js/
│   ├── main.js
│   ├── slider.js
│   └── forms.js
└── /imagens/
    ├── pisos-laminados-vinilicos-pvs-spj.png
    ├── piso_laminado_click.png
    ├── piso_vinilico.png
    ├── rodape_santa_luzia.png
    ├── vidros-esquadrias-pvs-decore-sao-jose-dos-pinhais.png
    └── loja-pvs.jpg
```

2. **Todas as imagens devem usar os caminhos exatos listados acima**

3. **Cada página de cidade/bairro deve:**
   - Ter título único com o nome da localidade
   - 9 blocos de conteúdo SEO otimizado
   - Repetir o nome da localidade 15-20 vezes no conteúdo
   - Meta description única
   - Keywords locais

4. **Design Moderno:**
   - Tipografia: Inter ou sistema (sans-serif)
   - Sombras suaves
   - Bordas arredondadas (8px, 12px, 16px)
   - Animações suaves (0.3s ease)
   - Espaçamentos consistentes (múltiplos de 8px)

5. **Conversão:**
   - CTAs visíveis e repetidos
   - WhatsApp integrado em toda jornada
   - Formulários simples e diretos
   - Prova social (depoimentos, avaliações)
   - Garantias e diferenciais destacados

---

## EXEMPLO DE CÓDIGO (Hero Section)

```html
<section class="hero">
  <div class="hero-slider">
    <div class="hero-slide active" style="background-image: url('/imagens/pisos-laminados-vinilicos-pvs-spj.png')"></div>
    <div class="hero-slide" style="background-image: url('/imagens/piso_laminado_click.png')"></div>
    <div class="hero-slide" style="background-image: url('/imagens/piso_vinilico.png')"></div>
    <div class="hero-slide" style="background-image: url('/imagens/rodape_santa_luzia.png')"></div>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="hero-subtitle">TRANSFORME SEU AMBIENTE</span>
    <h1 class="hero-title">Pisos Laminados e Vinílicos de Alta Qualidade</h1>
    <p class="hero-text">Instalação profissional em até 48h. Atendemos Curitiba e São José dos Pinhais.</p>
    <div class="hero-buttons">
      <a href="#" class="btn btn-primary" onclick="abrirWhatsApp()">Solicitar Orçamento</a>
      <a href="produtos.html" class="btn btn-secondary">Ver Produtos</a>
    </div>
  </div>
</section>
```

---

**FIM DO PROMPT**

Este prompt contém todas as informações necessárias para recriar o site PVS Decore em HTML puro, incluindo estrutura completa, conteúdos, imagens, cores, funcionalidades e requisitos de SEO.
