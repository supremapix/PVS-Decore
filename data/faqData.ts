export interface FAQItem {question:string;answer:string;id:string;aliases:string[]}
export interface FAQCategory{id:string;name:string;icon:string;count:number;questions:FAQItem[]}
export const FAQ_CATEGORIES:FAQCategory[]=[
  {
    "id": "laminado",
    "name": "Piso Laminado",
    "icon": "🌲",
    "count": 25,
    "questions": [
      {
        "question": "O que é piso laminado?",
        "answer": "Piso laminado é composto por HDF (fibra de alta densidade), papel decorativo que imita madeira e camada de proteção. É econômico, durável e oferece visual natural de madeira.",
        "id": "laminado-q0",
        "aliases": []
      },
      {
        "question": "Piso laminado pode molhar?",
        "answer": "O laminado convencional é indicado para áreas secas. Linhas com resistência à água têm condições próprias; consulte o manual antes de usar em cozinha ou outro ambiente sujeito a líquidos. Não encharque o piso.",
        "id": "laminado-q1",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre AC3, AC4 e AC5?",
        "answer": "AC3: uso residencial moderado (quartos). AC4: residencial intenso ou comercial leve (salas). AC5: comercial intenso (lojas). Quanto maior, mais resistente ao desgaste.",
        "id": "laminado-q2",
        "aliases": []
      },
      {
        "question": "Piso laminado é bom para sala?",
        "answer": "Excelente escolha! Oferece visual elegante de madeira natural, boa resistência ao tráfego (use AC4+), custo-benefício e instalação rápida. Ideal para salas de estar e jantar.",
        "id": "laminado-q3",
        "aliases": [
          "laminado-q17"
        ]
      },
      {
        "question": "Piso laminado pode ser usado em varanda?",
        "answer": "Os pisos aqui tratados são, em geral, destinados a ambientes internos. Mesmo uma varanda coberta pode receber chuva, sol e variações de temperatura. Use somente uma linha expressamente aprovada para as condições do local.",
        "id": "laminado-q5",
        "aliases": []
      },
      {
        "question": "Qual a espessura ideal de piso laminado?",
        "answer": "A escolha depende da classe de uso, do tráfego e do sistema completo. A espessura total, sozinha, não determina a resistência; compare a ficha técnica e, nos vinílicos, a camada de uso.",
        "id": "laminado-q6",
        "aliases": []
      },
      {
        "question": "Piso laminado amarela com tempo?",
        "answer": "Não, se for de qualidade. Laminados com proteção UV mantêm cor estável. Evite exposição solar direta intensa. Use cortinas em áreas muito ensolaradas.",
        "id": "laminado-q7",
        "aliases": []
      },
      {
        "question": "Piso laminado faz barulho ao andar?",
        "answer": "Pode fazer som oco se não usar manta adequada. Use manta acústica de qualidade (3-5mm) para reduzir drasticamente o ruído de impacto. Essencial em apartamentos.",
        "id": "laminado-q8",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser lixado?",
        "answer": "NÃO! Diferente de madeira maciça, laminado não pode ser lixado. A camada decorativa é fina. Riscos profundos exigem troca da régua danificada.",
        "id": "laminado-q10",
        "aliases": []
      },
      {
        "question": "Piso laminado com Hydroseal pode ser usado em cozinha?",
        "answer": "O laminado convencional é indicado para áreas secas. Linhas com resistência à água têm condições próprias; consulte o manual antes de usar em cozinha ou outro ambiente sujeito a líquidos. Não encharque o piso.",
        "id": "laminado-q13",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ter piso radiante?",
        "answer": "A compatibilidade depende da linha e do sistema de aquecimento. Siga os limites de temperatura e os procedimentos de instalação informados pelos dois fabricantes.",
        "id": "laminado-q15",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser usado em escritório?",
        "answer": "Sim! Use AC4 ou AC5 para resistir ao tráfego e cadeiras de rodízio. Coloque tapete protetor sob cadeira giratória. Manta acústica reforçada melhora conforto.",
        "id": "laminado-q19",
        "aliases": [
          "laminado-q39",
          "laminado-q42"
        ]
      },
      {
        "question": "Piso laminado risca fácil?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "laminado-q20",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre laminado e vinílico?",
        "answer": "Laminado: núcleo de fibra de madeira, mais rígido, visual natural, sensível à água. Vinílico: núcleo de PVC/pedra, flexível, impermeável, silencioso. Escolha conforme necessidade.",
        "id": "laminado-q21",
        "aliases": []
      },
      {
        "question": "Como evitar que piso laminado estufe?",
        "answer": "Deixe espaço de dilatação adequado (8-10mm nas bordas), use perfis de transição em áreas grandes, não molhe, deixe material aclimatar 48h antes de instalar, use manta com barreira de vapor.",
        "id": "laminado-q23",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser usado em comércio?",
        "answer": "Sim, use modelos comerciais AC4 ou AC5. Ideal para escritórios, lojas de baixo tráfego, consultórios. Não recomendado para restaurantes ou áreas com risco de água.",
        "id": "laminado-q24",
        "aliases": [
          "laminado-q32"
        ]
      },
      {
        "question": "Piso laminado pode ser envernizado?",
        "answer": "Não é necessário nem recomendado. O overlay protetor já vem de fábrica. Aplicar verniz pode deixar escorregadio e não aumentará a durabilidade.",
        "id": "laminado-q28",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ter móveis pesados em cima?",
        "answer": "Sim, o laminado suporta bem peso distribuído. Use bases largas ou protetores para distribuir o peso. Evite móveis com pés pontiagudos que podem marcar.",
        "id": "laminado-q30",
        "aliases": []
      },
      {
        "question": "Como saber se piso laminado é de qualidade?",
        "answer": "Verifique: classificação AC (≥AC4), espessura (≥8mm), densidade do HDF (≥800kg/m³), garantia (≥10 anos), reputação da marca, certificações (ISO, FSC).",
        "id": "laminado-q31",
        "aliases": []
      },
      {
        "question": "Qual a vida útil do piso laminado?",
        "answer": "A vida útil varia com a linha, o tráfego, a instalação e a manutenção. Siga o manual e não confunda a duração estimada do piso com o prazo de garantia do fabricante.",
        "id": "laminado-q33",
        "aliases": []
      },
      {
        "question": "Piso laminado aquece no inverno?",
        "answer": "O piso não aquece o ambiente por conta própria. A sensação ao toque depende do material e da temperatura local. Proteja o revestimento do calor excessivo e da incidência solar conforme o manual.",
        "id": "laminado-q37",
        "aliases": []
      },
      {
        "question": "Piso laminado tem cheiro?",
        "answer": "Consulte a ficha técnica e as informações sobre emissões do produto e do adesivo. Mantenha o ambiente ventilado conforme o fabricante. Odor persistente deve ser avaliado pelo fornecedor; não presuma ausência de risco apenas pela aparência.",
        "id": "laminado-q40",
        "aliases": []
      },
      {
        "question": "Piso laminado desbota com sol?",
        "answer": "Laminados de qualidade têm proteção UV e resistem bem. Exposição solar direta e intensa por anos pode causar leve descoloração. Use cortinas nas horas de sol forte.",
        "id": "laminado-q44",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ter infiltração por baixo?",
        "answer": "Umidade na base precisa ser diagnosticada e corrigida antes da instalação. O piso ou a manta não substituem a impermeabilização; revestir uma base úmida pode causar falhas, odor e mofo.",
        "id": "laminado-q45",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser usado em creche?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "laminado-q47",
        "aliases": []
      }
    ]
  },
  {
    "id": "vinilico",
    "name": "Piso Vinílico",
    "icon": "🏠",
    "count": 33,
    "questions": [
      {
        "question": "O que é piso vinílico?",
        "answer": "O piso vinílico é um revestimento moderno fabricado em PVC (policloreto de vinila) com camadas de proteção e design. É resistente, impermeável e oferece excelente custo-benefício. Ideal para ambientes residenciais e comerciais.",
        "id": "vinilico-q0",
        "aliases": []
      },
      {
        "question": "Piso vinílico é resistente à água?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "vinilico-q1",
        "aliases": []
      },
      {
        "question": "Qual a espessura ideal do piso vinílico?",
        "answer": "A escolha depende da classe de uso, do tráfego e do sistema completo. A espessura total, sozinha, não determina a resistência; compare a ficha técnica e, nos vinílicos, a camada de uso.",
        "id": "vinilico-q2",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre piso vinílico click e colado?",
        "answer": "O click possui sistema de encaixe sem cola, instalação mais rápida e pode ser removido. O colado é fixado com adesivo, exige contrapiso perfeito, mas oferece maior estabilidade e resistência à umidade.",
        "id": "vinilico-q4",
        "aliases": []
      },
      {
        "question": "Piso vinílico aguenta cadeira de rodas?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "vinilico-q5",
        "aliases": []
      },
      {
        "question": "Piso vinílico esquenta no verão?",
        "answer": "O piso não aquece o ambiente por conta própria. A sensação ao toque depende do material e da temperatura local. Proteja o revestimento do calor excessivo e da incidência solar conforme o manual.",
        "id": "vinilico-q6",
        "aliases": [
          "vinilico-q39"
        ]
      },
      {
        "question": "Piso vinílico pode ser usado em cozinha?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "vinilico-q9",
        "aliases": []
      },
      {
        "question": "Piso vinílico é bom para quarto de criança?",
        "answer": "Excelente escolha! É macio ao toque, absorve impactos em quedas, hipoalergênico e fácil de limpar. Além disso, oferece isolamento térmico e acústico.",
        "id": "vinilico-q10",
        "aliases": []
      },
      {
        "question": "Piso vinílico tem cheiro? Passa?",
        "answer": "Consulte a ficha técnica e as informações sobre emissões do produto e do adesivo. Mantenha o ambiente ventilado conforme o fabricante. Odor persistente deve ser avaliado pelo fornecedor; não presuma ausência de risco apenas pela aparência.",
        "id": "vinilico-q11",
        "aliases": []
      },
      {
        "question": "Quanto tempo dura um piso vinílico?",
        "answer": "A vida útil varia com a linha, o tráfego, a instalação e a manutenção. Siga o manual e não confunda a duração estimada do piso com o prazo de garantia do fabricante.",
        "id": "vinilico-q12",
        "aliases": [
          "vinilico-q49"
        ]
      },
      {
        "question": "Piso vinílico é antiderrapante?",
        "answer": "A resistência ao escorregamento varia entre produtos e condições de uso. Confira ensaios e indicação técnica da linha; textura ou aparência não comprovam desempenho antiderrapante.",
        "id": "vinilico-q14",
        "aliases": []
      },
      {
        "question": "Piso vinílico desbota com o sol?",
        "answer": "Pisos de qualidade têm proteção UV, mas exposição solar intensa e direta pode causar desbotamento ao longo dos anos. Use cortinas ou películas protetoras em áreas muito ensolaradas.",
        "id": "vinilico-q15",
        "aliases": []
      },
      {
        "question": "Posso colocar piso vinílico em cima de madeira?",
        "answer": "Não instale sobre base instável, úmida ou irregular. A madeira pode movimentar e não é uma base aceita por todas as linhas. A avaliação deve seguir o manual do piso; uma manta não substitui a regularização.",
        "id": "vinilico-q16",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser usado em varanda?",
        "answer": "Os pisos aqui tratados são, em geral, destinados a ambientes internos. Mesmo uma varanda coberta pode receber chuva, sol e variações de temperatura. Use somente uma linha expressamente aprovada para as condições do local.",
        "id": "vinilico-q18",
        "aliases": [
          "vinilico-q58"
        ]
      },
      {
        "question": "O que é wear layer no piso vinílico?",
        "answer": "É a camada transparente de proteção sobre o design. Medida em milímetros (0.15mm a 0.7mm), quanto mais espessa, maior a resistência a riscos e desgaste.",
        "id": "vinilico-q19",
        "aliases": []
      },
      {
        "question": "Piso vinílico é tóxico?",
        "answer": "Consulte a ficha técnica e as informações sobre emissões do produto e do adesivo. Mantenha o ambiente ventilado conforme o fabricante. Odor persistente deve ser avaliado pelo fornecedor; não presuma ausência de risco apenas pela aparência.",
        "id": "vinilico-q20",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre LVT e SPC?",
        "answer": "LVT (Luxury Vinyl Tile) é mais flexível, geralmente colado. SPC (Stone Plastic Composite) tem núcleo rígido com pó de pedra, é mais resistente e estável, ideal para áreas úmidas.",
        "id": "vinilico-q23",
        "aliases": []
      },
      {
        "question": "Piso vinílico risca fácil?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "vinilico-q24",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser usado em academia?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "vinilico-q26",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser reciclado?",
        "answer": "Alguns fabricantes oferecem programas de reciclagem. O PVC é tecnicamente reciclável, mas nem todas as regiões têm estrutura. Consulte o fabricante sobre destinação adequada.",
        "id": "vinilico-q28",
        "aliases": []
      },
      {
        "question": "Piso vinílico expande com calor?",
        "answer": "Sim, sofre dilatação térmica mínima. Por isso, é essencial deixar espaço de dilatação nas bordas (5-8mm) e usar perfis de transição em áreas grandes.",
        "id": "vinilico-q31",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre vinílico residencial e comercial?",
        "answer": "Comercial tem wear layer mais espesso (0.5mm+), maior densidade e classificação de tráfego superior. Residencial é otimizado para conforto e custo-benefício em tráfego moderado.",
        "id": "vinilico-q32",
        "aliases": []
      },
      {
        "question": "Piso vinílico abafa som?",
        "answer": "Sim! É excelente isolante acústico, reduz ruído de impacto em até 70%. Ideal para apartamentos e ambientes que exigem silêncio.",
        "id": "vinilico-q33",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser usado em loja comercial?",
        "answer": "Perfeitamente! Use modelos de tráfego comercial intenso (classe 33-34) com wear layer mínimo de 0.5mm. Resiste bem a carrinhos, alto fluxo e limpeza frequente.",
        "id": "vinilico-q37",
        "aliases": [
          "vinilico-q60",
          "vinilico-q64"
        ]
      },
      {
        "question": "Piso vinílico pode ter piso radiante?",
        "answer": "A compatibilidade depende da linha e do sistema de aquecimento. Siga os limites de temperatura e os procedimentos de instalação informados pelos dois fabricantes.",
        "id": "vinilico-q41",
        "aliases": []
      },
      {
        "question": "Piso vinílico solta cola com o tempo?",
        "answer": "Se instalado corretamente com cola de qualidade e contrapiso adequado, não. Problemas geralmente decorrem de umidade no contrapiso ou cola inadequada.",
        "id": "vinilico-q42",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser lustrado?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q44",
        "aliases": []
      },
      {
        "question": "Como identificar piso vinílico de qualidade?",
        "answer": "Verifique: espessura total (≥3mm), wear layer (≥0.3mm), certificações (ISO, FloorScore), densidade, garantia do fabricante e reputação da marca.",
        "id": "vinilico-q45",
        "aliases": []
      },
      {
        "question": "Piso vinílico amarela com tempo?",
        "answer": "Pisos de qualidade têm proteção UV e não amarelam. Modelos muito baratos ou expostos a sol intenso sem proteção podem apresentar alteração de cor após anos.",
        "id": "vinilico-q46",
        "aliases": []
      },
      {
        "question": "Piso vinílico tem junta aparente?",
        "answer": "Em instalações click, as juntas são discretas mas visíveis. Em instalações coladas com réguas grandes, as juntas são praticamente imperceptíveis.",
        "id": "vinilico-q48",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser pintado?",
        "answer": "Não é recomendado. A tinta não adere bem ao vinílico e descasca com uso. Se deseja mudar o visual, o ideal é substituir por novo piso ou usar tapetes/carpetes.",
        "id": "vinilico-q52",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser usado em área externa?",
        "answer": "Os pisos aqui tratados são, em geral, destinados a ambientes internos. Mesmo uma varanda coberta pode receber chuva, sol e variações de temperatura. Use somente uma linha expressamente aprovada para as condições do local.",
        "id": "vinilico-q62",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ter diferentes alturas na mesma casa?",
        "answer": "Sim, use perfis de transição/desnivelamento para fazer a mudança de altura entre ambientes de forma segura e esteticamente agradável.",
        "id": "vinilico-q66",
        "aliases": []
      }
    ]
  },
  {
    "id": "spc",
    "name": "Piso SPC",
    "icon": "💧",
    "count": 23,
    "questions": [
      {
        "question": "O que é piso SPC?",
        "answer": "SPC (Stone Plastic Composite) é um piso vinílico de nova geração com núcleo rígido composto por pó de pedra calcária e PVC. É com resistência à água conforme a linha, super estável e resistente.",
        "id": "spc-q0",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre piso SPC e vinílico comum?",
        "answer": "SPC tem núcleo rígido de pedra, é mais resistente a impactos, não expande com temperatura, é com resistência à água conforme a linha e pode ser usado em áreas úmidas. Vinílico comum tem núcleo flexível.",
        "id": "spc-q1",
        "aliases": []
      },
      {
        "question": "Piso SPC suporta alta umidade?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "spc-q4",
        "aliases": []
      },
      {
        "question": "Piso SPC é bom para área externa coberta?",
        "answer": "Os pisos aqui tratados são, em geral, destinados a ambientes internos. Mesmo uma varanda coberta pode receber chuva, sol e variações de temperatura. Use somente uma linha expressamente aprovada para as condições do local.",
        "id": "spc-q5",
        "aliases": []
      },
      {
        "question": "Piso SPC tem deformação com calor?",
        "answer": "Não! Ao contrário de vinílicos tradicionais, o SPC mantém estabilidade dimensional mesmo com variações de temperatura de 15°C a 50°C.",
        "id": "spc-q6",
        "aliases": [
          "spc-q27"
        ]
      },
      {
        "question": "Qual a espessura ideal de piso SPC?",
        "answer": "A escolha depende da classe de uso, do tráfego e do sistema completo. A espessura total, sozinha, não determina a resistência; compare a ficha técnica e, nos vinílicos, a camada de uso.",
        "id": "spc-q8",
        "aliases": [
          "spc-q28"
        ]
      },
      {
        "question": "Piso SPC risca fácil?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "spc-q9",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser usado em cozinha?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "spc-q14",
        "aliases": []
      },
      {
        "question": "Piso SPC faz barulho ao pisar?",
        "answer": "Menos que laminado! O núcleo denso de pedra absorve som. Com manta acústica adequada, reduz ruído de impacto em até 70%, ideal para apartamentos.",
        "id": "spc-q15",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ter piso radiante embaixo?",
        "answer": "A compatibilidade depende da linha e do sistema de aquecimento. Siga os limites de temperatura e os procedimentos de instalação informados pelos dois fabricantes.",
        "id": "spc-q16",
        "aliases": []
      },
      {
        "question": "Piso SPC descola com tempo?",
        "answer": "Não, pois é instalação flutuante (não colada). As réguas ficam encaixadas pelo sistema click. Não há risco de descolamento como em pisos colados.",
        "id": "spc-q18",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser usado em sala comercial?",
        "answer": "Sim! Use modelos de tráfego comercial (classe 33-34) com wear layer mínimo de 0.5mm. Resiste a cadeiras de rodízio, alto fluxo e limpeza frequente.",
        "id": "spc-q20",
        "aliases": [
          "spc-q33",
          "spc-q42",
          "spc-q45"
        ]
      },
      {
        "question": "Piso SPC é antiderrapante?",
        "answer": "A resistência ao escorregamento varia entre produtos e condições de uso. Confira ensaios e indicação técnica da linha; textura ou aparência não comprovam desempenho antiderrapante.",
        "id": "spc-q21",
        "aliases": []
      },
      {
        "question": "Piso SPC tem cheiro forte?",
        "answer": "Consulte a ficha técnica e as informações sobre emissões do produto e do adesivo. Mantenha o ambiente ventilado conforme o fabricante. Odor persistente deve ser avaliado pelo fornecedor; não presuma ausência de risco apenas pela aparência.",
        "id": "spc-q24",
        "aliases": []
      },
      {
        "question": "Qual a diferença entre SPC e WPC?",
        "answer": "SPC tem núcleo rígido com pó de pedra, é mais denso e estável. WPC tem núcleo de madeira+plástico, é mais macio e confortável, mas menos resistente à água.",
        "id": "spc-q25",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ter diferentes designs na mesma casa?",
        "answer": "Sim! Você pode combinar diferentes cores e texturas em ambientes distintos. Use perfis de transição para delimitar e fazer acabamento perfeito.",
        "id": "spc-q29",
        "aliases": []
      },
      {
        "question": "Piso SPC suporta móveis pesados?",
        "answer": "Sim! O núcleo rígido de pedra suporta bem o peso. Use protetores de feltro nos pés dos móveis para evitar marcas ao arrastar.",
        "id": "spc-q30",
        "aliases": [
          "spc-q38"
        ]
      },
      {
        "question": "Piso SPC tem junta visível?",
        "answer": "As juntas são discretas mas visíveis de perto. Instalação bem feita resulta em juntas quase imperceptíveis. Modelos com chanfro (bevel) disfarçam ainda mais.",
        "id": "spc-q34",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser usado em academia?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "spc-q35",
        "aliases": []
      },
      {
        "question": "Qual a vida útil do piso SPC?",
        "answer": "A vida útil varia com a linha, o tráfego, a instalação e a manutenção. Siga o manual e não confunda a duração estimada do piso com o prazo de garantia do fabricante.",
        "id": "spc-q39",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser usado em restaurante?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "spc-q40",
        "aliases": []
      },
      {
        "question": "Como saber se piso SPC é de qualidade?",
        "answer": "Verifique: densidade do núcleo (≥2000kg/m³), wear layer (≥0.5mm), certificações (ISO, FloorScore), garantia (≥15 anos residencial), reputação da marca.",
        "id": "spc-q41",
        "aliases": []
      },
      {
        "question": "Piso SPC é ecológico?",
        "answer": "Depende do fabricante. Procure por certificações ambientais (FloorScore, ISO 14001), uso de material reciclado e baixa emissão de VOC. É 100% reciclável ao fim da vida útil.",
        "id": "spc-q48",
        "aliases": []
      }
    ]
  },
  {
    "id": "instalacao",
    "name": "Instalação",
    "icon": "🔧",
    "count": 30,
    "questions": [
      {
        "question": "Piso vinílico pode ser instalado em área molhada?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "vinilico-q3",
        "aliases": [
          "vinilico-q22"
        ]
      },
      {
        "question": "Piso vinílico pode ser instalado sobre cerâmica?",
        "answer": "Sim! Desde que a cerâmica esteja bem fixada, sem peças soltas, e o rejunte seja nivelado com massa ou pasta autonivelante. Economiza tempo e evita quebra-quebra.",
        "id": "vinilico-q13",
        "aliases": []
      },
      {
        "question": "Como calcular quantos m² de piso vinílico comprar?",
        "answer": "Meça comprimento x largura do ambiente. Adicione 10% para perdas no corte e eventuais reparos futuros. Exemplo: sala de 20m² = compre 22m².",
        "id": "vinilico-q27",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser instalado em escadas?",
        "answer": "Sim, mas exige perfis de acabamento específicos para degraus. A instalação é mais técnica. Recomendamos modelos antiderrapantes com textura reforçada.",
        "id": "vinilico-q30",
        "aliases": []
      },
      {
        "question": "Posso instalar vinílico sobre contrapiso irregular?",
        "answer": "Não instale sobre base instável, úmida ou irregular. A madeira pode movimentar e não é uma base aceita por todas as linhas. A avaliação deve seguir o manual do piso; uma manta não substitui a regularização.",
        "id": "vinilico-q34",
        "aliases": []
      },
      {
        "question": "Quanto tempo leva para instalar piso vinílico?",
        "answer": "O prazo depende da área, do sistema de instalação e do estado da base. A preparação do contrapiso e a cura dos produtos podem ampliar o cronograma. Combine a previsão após a avaliação técnica.",
        "id": "vinilico-q40",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ser instalado em hospital?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "vinilico-q50",
        "aliases": [
          "vinilico-q56"
        ]
      },
      {
        "question": "Qual a temperatura ideal para instalar vinílico?",
        "answer": "Entre 18°C e 28°C. Muito frio dificulta o encaixe (click) ou secagem da cola. Muito calor causa expansão. Mantenha o material no ambiente 24h antes da instalação.",
        "id": "vinilico-q53",
        "aliases": []
      },
      {
        "question": "Qual o custo médio de instalação de piso vinílico?",
        "answer": "O valor depende da linha, metragem, paginação e preparação da base. Compare orçamento de material, frete, acessórios e instalação; peça uma proposta para o seu ambiente à PVS Decore.",
        "id": "vinilico-q57",
        "aliases": []
      },
      {
        "question": "Qual a melhor manta para piso vinílico click?",
        "answer": "Use somente a manta especificada para o sistema. Alguns produtos já têm manta incorporada e não admitem uma camada adicional. A manta não corrige desníveis nem elimina infiltrações.",
        "id": "vinilico-q65",
        "aliases": []
      },
      {
        "question": "Como saber se meu contrapiso está pronto para vinílico?",
        "answer": "Deve estar seco (teste com plástico 24h), liso (variação máxima 3mm em 2m), limpo, sem rachaduras e sem umidade. Use régua e nível para verificar.",
        "id": "vinilico-q67",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser instalado em banheiro?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "spc-q2",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser instalado sobre piso existente?",
        "answer": "Sim! Pode ser instalado sobre cerâmica, porcelanato, mármore ou piso existente, desde que esteja bem fixado e nivelado. Economiza tempo e dinheiro em reforma.",
        "id": "spc-q7",
        "aliases": []
      },
      {
        "question": "Como instalar piso SPC?",
        "answer": "Sistema click flutuante: encaixe régua com régua sem cola, sobre manta niveladora. Deixe 5-8mm de dilatação nas bordas. Instalação rápida, limpa e sem barulho.",
        "id": "spc-q10",
        "aliases": []
      },
      {
        "question": "Piso SPC precisa de manta?",
        "answer": "Use somente a manta especificada para o sistema. Alguns produtos já têm manta incorporada e não admitem uma camada adicional. A manta não corrige desníveis nem elimina infiltrações.",
        "id": "spc-q11",
        "aliases": []
      },
      {
        "question": "Piso SPC pode molhar durante instalação?",
        "answer": "A resistência da régua não impermeabiliza o ambiente. Consulte a aprovação do fabricante para o modelo e local de uso. Evite água parada; banheiros com chuveiro, áreas externas e bases úmidas exigem avaliação específica.",
        "id": "spc-q12",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser removido e reinstalado?",
        "answer": "Sim! Por ser instalação flutuante com encaixe, pode ser desmontado e reinstalado em outro local. Cuidado no manuseio para não danificar os encaixes.",
        "id": "spc-q23",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser instalado em subsolo?",
        "answer": "Umidade na base precisa ser diagnosticada e corrigida antes da instalação. O piso ou a manta não substituem a impermeabilização; revestir uma base úmida pode causar falhas, odor e mofo.",
        "id": "spc-q26",
        "aliases": []
      },
      {
        "question": "Quanto tempo leva para instalar piso SPC?",
        "answer": "O prazo depende da área, do sistema de instalação e do estado da base. A preparação do contrapiso e a cura dos produtos podem ampliar o cronograma. Combine a previsão após a avaliação técnica.",
        "id": "spc-q32",
        "aliases": []
      },
      {
        "question": "Piso SPC precisa de perfil de transição?",
        "answer": "Sim, em passagens de portas, mudanças de ambiente e contra outros tipos de piso. O perfil protege as bordas e dá acabamento profissional.",
        "id": "spc-q43",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser instalado por conta própria?",
        "answer": "Sim, o sistema click é fácil para DIY. Porém, recomendamos profissional para garantir nivelamento correto, cortes precisos e acabamento perfeito. Evita erros e desperdício.",
        "id": "spc-q44",
        "aliases": []
      },
      {
        "question": "Como instalar piso laminado click?",
        "answer": "Prepare contrapiso limpo e nivelado. Instale manta niveladora. Encaixe as réguas pelo sistema click, começando do canto mais reto. Deixe 8-10mm de dilatação nas bordas. Finalize com rodapés.",
        "id": "laminado-q4",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser instalado sobre cerâmica?",
        "answer": "Sim! Desde que a cerâmica esteja firme e relativamente nivelada. Use manta de 2-3mm para compensar rejuntes. Economiza em quebra e remoção.",
        "id": "laminado-q12",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser instalado em cima de madeira?",
        "answer": "Não instale sobre base instável, úmida ou irregular. A madeira pode movimentar e não é uma base aceita por todas as linhas. A avaliação deve seguir o manual do piso; uma manta não substitui a regularização.",
        "id": "laminado-q22",
        "aliases": []
      },
      {
        "question": "Qual a melhor manta para piso laminado?",
        "answer": "Use somente a manta especificada para o sistema. Alguns produtos já têm manta incorporada e não admitem uma camada adicional. A manta não corrige desníveis nem elimina infiltrações.",
        "id": "laminado-q25",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser desmontado e reinstalado?",
        "answer": "Tecnicamente sim, por ter encaixe click. Porém, o manuseio no desencaixe pode danificar peças. Não é prática comum, mas possível se feito com muito cuidado.",
        "id": "laminado-q26",
        "aliases": []
      },
      {
        "question": "Qual o sentido correto de instalar laminado?",
        "answer": "Idealmente no sentido da luz principal (perpendicular à janela). Isso valoriza as réguas e amplia visualmente. Em corredores, no sentido longitudinal.",
        "id": "laminado-q29",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ser instalado em banheiro?",
        "answer": "O laminado convencional é indicado para áreas secas. Linhas com resistência à água têm condições próprias; consulte o manual antes de usar em cozinha ou outro ambiente sujeito a líquidos. Não encharque o piso.",
        "id": "laminado-q34",
        "aliases": []
      },
      {
        "question": "Como calcular quantidade de piso laminado?",
        "answer": "Meça comprimento x largura de cada ambiente. Some tudo. Adicione 10-15% para perdas de corte. Exemplo: 25m² de área = compre 27,5m² a 28,75m².",
        "id": "laminado-q35",
        "aliases": []
      },
      {
        "question": "Como fazer transição entre laminado e cerâmica?",
        "answer": "Use perfil de transição em alumínio, MDF ou PVC. Escolha cor que harmonize com ambos os pisos. O perfil protege as bordas e evita desníveis perigosos.",
        "id": "laminado-q38",
        "aliases": []
      }
    ]
  },
  {
    "id": "rodapes",
    "name": "Rodapés",
    "icon": "📐",
    "count": 3,
    "questions": [
      {
        "question": "Precisa de rodapé especial para vinílico?",
        "answer": "Não necessariamente. Rodapés de MDF, poliestireno ou PVC funcionam bem. O importante é deixar espaço de dilatação de 5-8mm entre o piso e a parede.",
        "id": "vinilico-q25",
        "aliases": []
      },
      {
        "question": "Qual a espessura do rodapé para piso vinílico?",
        "answer": "Rodapés de 7cm a 10cm são os mais comuns. A escolha depende do pé-direito do ambiente. Rodapés mais altos (15cm) dão aspecto moderno e elegante.",
        "id": "vinilico-q43",
        "aliases": []
      },
      {
        "question": "Qual rodapé combina com piso laminado?",
        "answer": "Rodapé da mesma cor do piso cria continuidade. Rodapé branco moderniza. Rodapé contrastante delimita. A PVS Decore oferece rodapés combinando com nossos pisos.",
        "id": "laminado-q46",
        "aliases": []
      }
    ]
  },
  {
    "id": "escolha",
    "name": "Escolha do Piso",
    "icon": "🔎",
    "count": 18,
    "questions": [
      {
        "question": "Qual piso vinílico é mais resistente para pet?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "vinilico-q7",
        "aliases": []
      },
      {
        "question": "Qual a garantia do piso vinílico?",
        "answer": "A garantia do produto depende do fabricante, da linha e das condições de uso e instalação. Solicite o termo do produto e, separadamente, as condições da mão de obra no orçamento da PVS Decore.",
        "id": "vinilico-q17",
        "aliases": []
      },
      {
        "question": "Qual o melhor: vinílico ou laminado?",
        "answer": "Vinílico: mais resistente à água, macio, silencioso. Laminado: visual mais natural de madeira, mais rígido, custo menor. Escolha conforme necessidade do ambiente.",
        "id": "vinilico-q29",
        "aliases": []
      },
      {
        "question": "Qual a melhor marca de piso vinílico?",
        "answer": "Compare a indicação de uso, acabamento, ficha técnica, garantia e disponibilidade da linha. A PVS Decore apresenta opções de marcas conforme o ambiente e o orçamento; não existe uma única marca ideal para todos os projetos.",
        "id": "vinilico-q36",
        "aliases": []
      },
      {
        "question": "Posso colocar tapete sobre piso vinílico?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "vinilico-q47",
        "aliases": []
      },
      {
        "question": "Como escolher a cor do piso vinílico?",
        "answer": "Cores claras ampliam ambientes pequenos e refletem luz. Cores escuras dão sofisticação mas mostram mais sujeira. Combine com móveis e iluminação do ambiente.",
        "id": "vinilico-q55",
        "aliases": []
      },
      {
        "question": "Qual a diferença de preço entre vinílico click e colado?",
        "answer": "O valor depende da linha, metragem, paginação e preparação da base. Compare orçamento de material, frete, acessórios e instalação; peça uma proposta para o seu ambiente à PVS Decore.",
        "id": "vinilico-q61",
        "aliases": []
      },
      {
        "question": "Piso SPC é melhor que laminado?",
        "answer": "Para áreas úmidas, sim. SPC é totalmente impermeável. Laminado tem melhor custo-benefício em áreas secas e visual mais natural de madeira. Depende da aplicação.",
        "id": "spc-q3",
        "aliases": []
      },
      {
        "question": "Qual o preço médio do piso SPC?",
        "answer": "O valor depende da linha, metragem, paginação e preparação da base. Compare orçamento de material, frete, acessórios e instalação; peça uma proposta para o seu ambiente à PVS Decore.",
        "id": "spc-q13",
        "aliases": []
      },
      {
        "question": "Qual a garantia do piso SPC?",
        "answer": "A garantia do produto depende do fabricante, da linha e das condições de uso e instalação. Solicite o termo do produto e, separadamente, as condições da mão de obra no orçamento da PVS Decore.",
        "id": "spc-q19",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ser usado em pet shop?",
        "answer": "A indicação depende do tráfego, das cargas e do método de limpeza do estabelecimento. Solicite uma linha aprovada para esse uso e confira a ficha técnica; ambientes de saúde e atividades especiais exigem avaliação do projeto.",
        "id": "spc-q31",
        "aliases": [
          "spc-q37"
        ]
      },
      {
        "question": "Qual a melhor cor de SPC para ambiente pequeno?",
        "answer": "Tons claros (carvalho claro, cinza claro, bege) ampliam visualmente. Réguas largas e longas alongam o espaço. Evite muitos tons escuros em ambientes pequenos.",
        "id": "spc-q46",
        "aliases": []
      },
      {
        "question": "Piso SPC pode ter tapete em cima?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "spc-q47",
        "aliases": []
      },
      {
        "question": "Qual o preço médio do piso laminado?",
        "answer": "O valor depende da linha, metragem, paginação e preparação da base. Compare orçamento de material, frete, acessórios e instalação; peça uma proposta para o seu ambiente à PVS Decore.",
        "id": "laminado-q11",
        "aliases": []
      },
      {
        "question": "Qual a garantia do piso laminado?",
        "answer": "A garantia do produto depende do fabricante, da linha e das condições de uso e instalação. Solicite o termo do produto e, separadamente, as condições da mão de obra no orçamento da PVS Decore.",
        "id": "laminado-q16",
        "aliases": []
      },
      {
        "question": "Como escolher cor do piso laminado?",
        "answer": "Cores claras (carvalho, maple) ampliam e iluminam. Cores médias (nogueira) são versáteis. Cores escuras (wengué) sofisticam mas mostram sujeira. Combine com móveis e iluminação.",
        "id": "laminado-q18",
        "aliases": []
      },
      {
        "question": "Piso laminado pode ter tapete em cima?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "laminado-q36",
        "aliases": []
      },
      {
        "question": "Qual a melhor marca de piso laminado?",
        "answer": "Compare a indicação de uso, acabamento, ficha técnica, garantia e disponibilidade da linha. A PVS Decore apresenta opções de marcas conforme o ambiente e o orçamento; não existe uma única marca ideal para todos os projetos.",
        "id": "laminado-q41",
        "aliases": []
      }
    ]
  },
  {
    "id": "manutencao",
    "name": "Manutenção",
    "icon": "🧹",
    "count": 14,
    "questions": [
      {
        "question": "Como limpar piso vinílico?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q8",
        "aliases": [
          "vinilico-q59"
        ]
      },
      {
        "question": "Como tirar manchas de piso vinílico?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q21",
        "aliases": []
      },
      {
        "question": "Piso vinílico mancha com produtos de limpeza?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q35",
        "aliases": []
      },
      {
        "question": "Como consertar arranhões em piso vinílico?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "vinilico-q38",
        "aliases": []
      },
      {
        "question": "Como remover cola de piso vinílico?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q51",
        "aliases": []
      },
      {
        "question": "Piso vinílico pode ter mofo?",
        "answer": "Umidade na base precisa ser diagnosticada e corrigida antes da instalação. O piso ou a manta não substituem a impermeabilização; revestir uma base úmida pode causar falhas, odor e mofo.",
        "id": "vinilico-q54",
        "aliases": []
      },
      {
        "question": "Como limpar piso vinílico depois de obra?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "vinilico-q63",
        "aliases": []
      },
      {
        "question": "Como limpar piso SPC?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "spc-q17",
        "aliases": []
      },
      {
        "question": "Como consertar piso SPC danificado?",
        "answer": "Substitua a régua danificada. No sistema click, é possível desmontar e trocar réguas individuais. Mantenha sobra de material da instalação para eventuais reparos.",
        "id": "spc-q22",
        "aliases": []
      },
      {
        "question": "Como preparar contrapiso para piso SPC?",
        "answer": "Deve estar limpo, seco, firme e relativamente nivelado (variação máxima 3mm em 2m). Aspire bem, remova restos de cola/tinta. Se muito irregular, use massa niveladora.",
        "id": "spc-q36",
        "aliases": []
      },
      {
        "question": "Como limpar piso laminado?",
        "answer": "Remova a poeira com vassoura macia ou aspirador e use pano levemente umedecido, conforme o manual da linha. Evite abrasivos e excesso de água. Pisos clicados não devem ser lavados ou encharcados.",
        "id": "laminado-q9",
        "aliases": [
          "laminado-q48"
        ]
      },
      {
        "question": "Como consertar piso laminado estufado?",
        "answer": "Identifique a causa (água ou falta de dilatação). Remova rodapés, corte excesso nas bordas para dar espaço. Se estufou por água, troque réguas danificadas após secar totalmente.",
        "id": "laminado-q14",
        "aliases": []
      },
      {
        "question": "Como reparar risco no piso laminado?",
        "answer": "Riscos leves: use massa ou lápis de cera para laminado na cor do piso. Riscos profundos: substitua a régua. Kits de reparo estão disponíveis em lojas especializadas.",
        "id": "laminado-q27",
        "aliases": []
      },
      {
        "question": "Como proteger piso laminado de arranhões?",
        "answer": "Nenhum piso é imune a riscos. Compare a classe de uso e o acabamento da linha, mantenha as unhas dos pets aparadas e proteja os pés dos móveis. Evite arrastar objetos e remova líquidos rapidamente.",
        "id": "laminado-q43",
        "aliases": []
      }
    ]
  }
];
export const getTotalQuestions=()=>FAQ_CATEGORIES.reduce((n,c)=>n+c.questions.length,0);
