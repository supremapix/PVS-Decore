export interface FAQItem { question: string; answer: string; id: string; product: string; aliases?: string[]; }
export interface FAQCategory { id: string; name: string; icon: string; count: number; questions: FAQItem[]; }
export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    "id": "laminado",
    "name": "Piso Laminado",
    "icon": "🏠",
    "count": 23,
    "questions": [
      {
        "question": "O que é piso laminado?",
        "answer": "Piso laminado é composto por HDF (fibra de alta densidade), papel decorativo que imita madeira e camada de proteção. É econômico, durável e oferece visual natural de madeira.",
        "id": "laminado-q0",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode molhar?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "laminado-q1",
        "product": "laminado"
      },
      {
        "question": "Piso laminado é bom para sala?",
        "answer": "Excelente escolha! Oferece visual elegante de madeira natural, boa resistência ao tráfego (use AC4+), custo-benefício e instalação rápida. Ideal para salas de estar e jantar.",
        "id": "laminado-q3",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em varanda?",
        "answer": "Cobertura sozinha não garante adequação: chuva, sol e variações de temperatura também precisam ser considerados. Não instale em área externa sem aprovação do fabricante.",
        "id": "laminado-q5",
        "product": "laminado"
      },
      {
        "question": "Qual a espessura ideal de piso laminado?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "laminado-q6",
        "product": "laminado"
      },
      {
        "question": "Piso laminado amarela com tempo?",
        "answer": "Não, se for de qualidade. Laminados com proteção UV mantêm cor estável. Evite exposição solar direta intensa. Use cortinas em áreas muito ensolaradas.",
        "id": "laminado-q7",
        "product": "laminado"
      },
      {
        "question": "Piso laminado faz barulho ao andar?",
        "answer": "O desempenho acústico depende do revestimento, da base e da manta especificada. Consulte os ensaios do sistema e as exigências do condomínio.",
        "id": "laminado-q8",
        "product": "laminado"
      },
      {
        "question": "Piso laminado com Hydroseal pode ser usado em cozinha?",
        "answer": "Pode ser uma opção quando a linha for aprovada pelo fabricante para esse ambiente. Seque derramamentos e siga as instruções de limpeza; não deixe água acumulada.",
        "id": "laminado-q13",
        "product": "laminado"
      },
      {
        "question": "Qual a garantia do piso laminado?",
        "answer": "A garantia do fabricante varia por linha e tipo de uso. Consulte o termo do produto e, separadamente, as condições do serviço de instalação no orçamento da PVS Decore.",
        "id": "laminado-q16",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em quarto?",
        "answer": "Perfeito! É aconchegante, não é frio ao toque, tem bom custo-benefício e instalação rápida. Use AC3 ou superior. Combina perfeitamente com decoração de quartos.",
        "id": "laminado-q17",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em escritório?",
        "answer": "Sim! Use AC4 ou AC5 para resistir ao tráfego e cadeiras de rodízio. Coloque tapete protetor sob cadeira giratória. Manta acústica reforçada melhora conforto.",
        "id": "laminado-q19",
        "product": "laminado",
        "aliases": [
          "laminado-q42"
        ]
      },
      {
        "question": "Piso laminado risca fácil?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "laminado-q20",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em comércio?",
        "answer": "Sim, use modelos comerciais AC4 ou AC5. Ideal para escritórios, lojas de baixo tráfego, consultórios. Não recomendado para restaurantes ou áreas com risco de água.",
        "id": "laminado-q24",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ter móveis pesados em cima?",
        "answer": "Respeite as cargas e condições de instalação do fabricante. Pisos flutuantes precisam movimentar-se; cargas concentradas e móveis fixos podem exigir cuidados específicos.",
        "id": "laminado-q30",
        "product": "laminado"
      },
      {
        "question": "Como saber se piso laminado é de qualidade?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "laminado-q31",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em loja de roupas?",
        "answer": "Sim! Use AC4 ou AC5. Oferece visual sofisticado, várias opções de design, boa resistência ao tráfego. Evite em provadores (risco de umidade).",
        "id": "laminado-q32",
        "product": "laminado"
      },
      {
        "question": "Qual a vida útil do piso laminado?",
        "answer": "A durabilidade depende da linha, do tráfego, da instalação e da manutenção. Não há um prazo único; consulte a indicação de uso do produto.",
        "id": "laminado-q33",
        "product": "laminado"
      },
      {
        "question": "Piso laminado aquece no inverno?",
        "answer": "Mantém temperatura ambiente, não sendo frio como cerâmica. É confortável ao toque. Para maior conforto térmico, use manta térmica ou piso radiante compatível.",
        "id": "laminado-q37",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em consultório?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "laminado-q39",
        "product": "laminado"
      },
      {
        "question": "Piso laminado tem cheiro?",
        "answer": "Consulte a documentação de composição e emissões da linha. Não presuma certificações por marca ou material. Siga as orientações de ventilação e destinação do fabricante.",
        "id": "laminado-q40",
        "product": "laminado"
      },
      {
        "question": "Piso laminado desbota com sol?",
        "answer": "Laminados de qualidade têm proteção UV e resistem bem. Exposição solar direta e intensa por anos pode causar leve descoloração. Use cortinas nas horas de sol forte.",
        "id": "laminado-q44",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ter infiltração por baixo?",
        "answer": "Se houver umidade do contrapiso, pode empolar. Use manta com barreira de vapor. Resolva problemas de infiltração antes de instalar qualquer piso.",
        "id": "laminado-q45",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser usado em creche?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "laminado-q47",
        "product": "laminado"
      }
    ]
  },
  {
    "id": "vinilico",
    "name": "Piso Vinílico",
    "icon": "🏠",
    "count": 35,
    "questions": [
      {
        "question": "O que é piso vinílico?",
        "answer": "O piso vinílico é um revestimento moderno fabricado em PVC (policloreto de vinila) com camadas de proteção e design. É resistente, resistente à água conforme a linha e oferece excelente custo-benefício. Ideal para ambientes residenciais e comerciais.",
        "id": "vinilico-q0",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico é resistente à água?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "vinilico-q1",
        "product": "vinilico"
      },
      {
        "question": "Qual a espessura ideal do piso vinílico?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "vinilico-q2",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico aguenta cadeira de rodas?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "vinilico-q5",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico esquenta no verão?",
        "answer": "Temperatura e exposição solar podem afetar o revestimento. Respeite os limites, folgas e condições de uso do manual, inclusive para SPC.",
        "id": "vinilico-q6",
        "product": "vinilico"
      },
      {
        "question": "Qual piso vinílico é mais resistente para pet?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "vinilico-q7",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em cozinha?",
        "answer": "Pode ser uma opção quando a linha for aprovada pelo fabricante para esse ambiente. Seque derramamentos e siga as instruções de limpeza; não deixe água acumulada.",
        "id": "vinilico-q9",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico é bom para quarto de criança?",
        "answer": "Excelente escolha! É macio ao toque, absorve impactos em quedas, hipoalergênico e fácil de limpar. Além disso, oferece isolamento térmico e acústico.",
        "id": "vinilico-q10",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico tem cheiro? Passa?",
        "answer": "Consulte a documentação de composição e emissões da linha. Não presuma certificações por marca ou material. Siga as orientações de ventilação e destinação do fabricante.",
        "id": "vinilico-q11",
        "product": "vinilico"
      },
      {
        "question": "Quanto tempo dura um piso vinílico?",
        "answer": "A durabilidade depende da linha, do tráfego, da instalação e da manutenção. Não há um prazo único; consulte a indicação de uso do produto.",
        "id": "vinilico-q12",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico é antiderrapante?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "vinilico-q14",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico desbota com o sol?",
        "answer": "Pisos de qualidade têm proteção UV, mas exposição solar intensa e direta pode causar desbotamento ao longo dos anos. Use cortinas ou películas protetoras em áreas muito ensolaradas.",
        "id": "vinilico-q15",
        "product": "vinilico"
      },
      {
        "question": "Posso colocar piso vinílico em cima de madeira?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "vinilico-q16",
        "product": "vinilico"
      },
      {
        "question": "Qual a garantia do piso vinílico?",
        "answer": "A garantia do fabricante varia por linha e tipo de uso. Consulte o termo do produto e, separadamente, as condições do serviço de instalação no orçamento da PVS Decore.",
        "id": "vinilico-q17",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em varanda?",
        "answer": "Cobertura sozinha não garante adequação: chuva, sol e variações de temperatura também precisam ser considerados. Não instale em área externa sem aprovação do fabricante.",
        "id": "vinilico-q18",
        "product": "vinilico",
        "aliases": [
          "vinilico-q58"
        ]
      },
      {
        "question": "O que é wear layer no piso vinílico?",
        "answer": "É a camada de uso que protege o desenho do piso vinílico. Sua espessura contribui para a resistência ao desgaste; consulte também a classe de uso e os ensaios da linha.",
        "id": "vinilico-q19",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico é tóxico?",
        "answer": "Consulte a documentação de composição e emissões da linha. Não presuma certificações por marca ou material. Siga as orientações de ventilação e destinação do fabricante.",
        "id": "vinilico-q20",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico risca fácil?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "vinilico-q24",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em academia?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "vinilico-q26",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser reciclado?",
        "answer": "Alguns fabricantes oferecem programas de reciclagem. O PVC é tecnicamente reciclável, mas nem todas as regiões têm estrutura. Consulte o fabricante sobre destinação adequada.",
        "id": "vinilico-q28",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico expande com calor?",
        "answer": "Temperatura e exposição solar podem afetar o revestimento. Respeite os limites, folgas e condições de uso do manual, inclusive para SPC.",
        "id": "vinilico-q31",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico abafa som?",
        "answer": "O desempenho acústico depende do revestimento, da base e da manta especificada. Consulte os ensaios do sistema e as exigências do condomínio.",
        "id": "vinilico-q33",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em loja comercial?",
        "answer": "Perfeitamente! Use modelos de tráfego comercial intenso (classe 33-34) com wear layer mínimo de 0.5mm. Resiste bem a carrinhos, alto fluxo e limpeza frequente.",
        "id": "vinilico-q37",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico aquece no inverno?",
        "answer": "Ele mantém temperatura ambiente, não sendo frio como cerâmica. É confortável de pisar descalço mesmo em dias frios. Alguns modelos têm camada térmica extra.",
        "id": "vinilico-q39",
        "product": "vinilico"
      },
      {
        "question": "Como identificar piso vinílico de qualidade?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "vinilico-q45",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico amarela com tempo?",
        "answer": "Pisos de qualidade têm proteção UV e não amarelam. Modelos muito baratos ou expostos a sol intenso sem proteção podem apresentar alteração de cor após anos.",
        "id": "vinilico-q46",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico tem junta aparente?",
        "answer": "Em instalações click, as juntas são discretas mas visíveis. Em instalações coladas com réguas grandes, as juntas são praticamente imperceptíveis.",
        "id": "vinilico-q48",
        "product": "vinilico"
      },
      {
        "question": "Qual a vida útil do piso vinílico em área comercial?",
        "answer": "A durabilidade depende da linha, do tráfego, da instalação e da manutenção. Não há um prazo único; consulte a indicação de uso do produto.",
        "id": "vinilico-q49",
        "product": "vinilico"
      },
      {
        "question": "Como remover cola de piso vinílico?",
        "answer": "Remova a sujeira solta e use somente o limpador ou removedor autorizado pelo fabricante. Não improvise com solventes, ácidos ou abrasivos.",
        "id": "vinilico-q51",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ter mofo?",
        "answer": "Não, o material não favorece mofo. Porém, se houver umidade do contrapiso, pode aparecer mofo embaixo. É essencial resolver problemas de umidade antes de instalar.",
        "id": "vinilico-q54",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em consultório?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "vinilico-q56",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em sala de aula?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "vinilico-q60",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em área externa?",
        "answer": "Cobertura sozinha não garante adequação: chuva, sol e variações de temperatura também precisam ser considerados. Não instale em área externa sem aprovação do fabricante.",
        "id": "vinilico-q62",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser usado em quarto de hotel?",
        "answer": "Perfeitamente! É muito usado em hotelaria por ser durável, silencioso, fácil de limpar e manter. Use modelos de tráfego comercial médio.",
        "id": "vinilico-q64",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ter diferentes alturas na mesma casa?",
        "answer": "Sim, use perfis de transição/desnivelamento para fazer a mudança de altura entre ambientes de forma segura e esteticamente agradável.",
        "id": "vinilico-q66",
        "product": "vinilico"
      }
    ]
  },
  {
    "id": "spc",
    "name": "Piso SPC",
    "icon": "🏠",
    "count": 26,
    "questions": [
      {
        "question": "O que é piso SPC?",
        "answer": "SPC é um piso vinílico de núcleo rígido, normalmente composto por PVC e cargas minerais. Consulte a linha para conhecer encaixe, indicação de uso e limites de exposição à água.",
        "id": "spc-q0",
        "product": "spc"
      },
      {
        "question": "Piso SPC suporta alta umidade?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "spc-q4",
        "product": "spc"
      },
      {
        "question": "Piso SPC é bom para área externa coberta?",
        "answer": "Cobertura sozinha não garante adequação: chuva, sol e variações de temperatura também precisam ser considerados. Não instale em área externa sem aprovação do fabricante.",
        "id": "spc-q5",
        "product": "spc"
      },
      {
        "question": "Piso SPC tem deformação com calor?",
        "answer": "Temperatura e exposição solar podem afetar o revestimento. Respeite os limites, folgas e condições de uso do manual, inclusive para SPC.",
        "id": "spc-q6",
        "product": "spc"
      },
      {
        "question": "Qual a espessura ideal de piso SPC?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "spc-q8",
        "product": "spc"
      },
      {
        "question": "Piso SPC risca fácil?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "spc-q9",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em cozinha?",
        "answer": "Pode ser uma opção quando a linha for aprovada pelo fabricante para esse ambiente. Seque derramamentos e siga as instruções de limpeza; não deixe água acumulada.",
        "id": "spc-q14",
        "product": "spc"
      },
      {
        "question": "Piso SPC faz barulho ao pisar?",
        "answer": "O desempenho acústico depende do revestimento, da base e da manta especificada. Consulte os ensaios do sistema e as exigências do condomínio.",
        "id": "spc-q15",
        "product": "spc"
      },
      {
        "question": "Qual a garantia do piso SPC?",
        "answer": "A garantia do fabricante varia por linha e tipo de uso. Consulte o termo do produto e, separadamente, as condições do serviço de instalação no orçamento da PVS Decore.",
        "id": "spc-q19",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em sala comercial?",
        "answer": "Sim! Use modelos de tráfego comercial (classe 33-34) com wear layer mínimo de 0.5mm. Resiste a cadeiras de rodízio, alto fluxo e limpeza frequente.",
        "id": "spc-q20",
        "product": "spc"
      },
      {
        "question": "Piso SPC é antiderrapante?",
        "answer": "Consulte os ensaios e a indicação de uso da linha. Nenhum piso é imune a riscos; proteja os móveis, remova sujeira abrasiva e siga os cuidados do fabricante.",
        "id": "spc-q21",
        "product": "spc"
      },
      {
        "question": "Piso SPC tem cheiro forte?",
        "answer": "Consulte a documentação de composição e emissões da linha. Não presuma certificações por marca ou material. Siga as orientações de ventilação e destinação do fabricante.",
        "id": "spc-q24",
        "product": "spc"
      },
      {
        "question": "Piso SPC esquenta com sol?",
        "answer": "Mantém temperatura ambiente. Não esquenta excessivamente, mas em áreas com sol direto intenso use cortinas para evitar descoloração ao longo dos anos.",
        "id": "spc-q27",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ter diferentes designs na mesma casa?",
        "answer": "Sim! Você pode combinar diferentes cores e texturas em ambientes distintos. Use perfis de transição para delimitar e fazer acabamento perfeito.",
        "id": "spc-q29",
        "product": "spc"
      },
      {
        "question": "Piso SPC suporta móveis pesados?",
        "answer": "Respeite as cargas e condições de instalação do fabricante. Pisos flutuantes precisam movimentar-se; cargas concentradas e móveis fixos podem exigir cuidados específicos.",
        "id": "spc-q30",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em pet shop?",
        "answer": "Perfeito! Resiste a unhas, água, produtos de limpeza pesada e alto tráfego. Fácil de higienizar e não absorve odores.",
        "id": "spc-q31",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em escritório?",
        "answer": "Excelente escolha! Resiste a cadeiras de rodízio, alto tráfego, é silencioso e fácil de manter. Use wear layer mínimo de 0.5mm para durabilidade.",
        "id": "spc-q33",
        "product": "spc"
      },
      {
        "question": "Piso SPC tem junta visível?",
        "answer": "As juntas são discretas mas visíveis de perto. Instalação bem feita resulta em juntas quase imperceptíveis. Modelos com chanfro (bevel) disfarçam ainda mais.",
        "id": "spc-q34",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em academia?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "spc-q35",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em clínica veterinária?",
        "answer": "Perfeitamente! É higiênico, resistente à água conforme a linha, não absorve odores, resiste a arranhões de unhas e produtos de limpeza pesada. Fácil de desinfetar.",
        "id": "spc-q37",
        "product": "spc"
      },
      {
        "question": "Piso SPC deforma com móveis pesados?",
        "answer": "Respeite as cargas e condições de instalação do fabricante. Pisos flutuantes precisam movimentar-se; cargas concentradas e móveis fixos podem exigir cuidados específicos.",
        "id": "spc-q38",
        "product": "spc"
      },
      {
        "question": "Qual a vida útil do piso SPC?",
        "answer": "A durabilidade depende da linha, do tráfego, da instalação e da manutenção. Não há um prazo único; consulte a indicação de uso do produto.",
        "id": "spc-q39",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em restaurante?",
        "answer": "Verifique a linha adequada ao tráfego, à limpeza e à exposição à água e gordura. Não presuma adequação de um piso residencial para esse uso comercial.",
        "id": "spc-q40",
        "product": "spc"
      },
      {
        "question": "Como saber se piso SPC é de qualidade?",
        "answer": "Compare a classe de uso, a ficha técnica e a garantia para o ambiente. Espessura isolada não determina qualidade ou resistência.",
        "id": "spc-q41",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser usado em consultório médico?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "spc-q45",
        "product": "spc"
      },
      {
        "question": "Piso SPC é ecológico?",
        "answer": "Consulte a documentação de composição e emissões da linha. Não presuma certificações por marca ou material. Siga as orientações de ventilação e destinação do fabricante.",
        "id": "spc-q48",
        "product": "spc"
      }
    ]
  },
  {
    "id": "instalacao",
    "name": "Instalação",
    "icon": "🏠",
    "count": 35,
    "questions": [
      {
        "question": "Piso vinílico pode ser instalado em área molhada?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "vinilico-q3",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser instalado sobre cerâmica?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "vinilico-q13",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser instalado em banheiro?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "vinilico-q22",
        "product": "vinilico"
      },
      {
        "question": "Como calcular quantos m² de piso vinílico comprar?",
        "answer": "Meça comprimento x largura do ambiente. Adicione 10% para perdas no corte e eventuais reparos futuros. Exemplo: sala de 20m² = compre 22m².",
        "id": "vinilico-q27",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser instalado em escadas?",
        "answer": "Sim, mas exige perfis de acabamento específicos para degraus. A instalação é mais técnica. Recomendamos modelos antiderrapantes com textura reforçada.",
        "id": "vinilico-q30",
        "product": "vinilico"
      },
      {
        "question": "Posso instalar vinílico sobre contrapiso irregular?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "vinilico-q34",
        "product": "vinilico"
      },
      {
        "question": "Quanto tempo leva para instalar piso vinílico?",
        "answer": "O prazo, a aclimatação e as condições de instalação dependem do produto e da preparação da base. Consulte o manual da linha e confirme o cronograma com o instalador.",
        "id": "vinilico-q40",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ter piso radiante?",
        "answer": "Use apenas uma linha compatível com o aquecimento. Temperatura, manta e procedimento de aquecimento devem seguir os manuais do piso e do sistema.",
        "id": "vinilico-q41",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser instalado em hospital?",
        "answer": "A indicação depende da atividade, do tráfego e dos requisitos de limpeza e segurança do projeto. Verifique a ficha técnica; não presuma desempenho sanitário ou antiderrapante.",
        "id": "vinilico-q50",
        "product": "vinilico"
      },
      {
        "question": "Qual a temperatura ideal para instalar vinílico?",
        "answer": "O prazo, a aclimatação e as condições de instalação dependem do produto e da preparação da base. Consulte o manual da linha e confirme o cronograma com o instalador.",
        "id": "vinilico-q53",
        "product": "vinilico"
      },
      {
        "question": "Qual o custo médio de instalação de piso vinílico?",
        "answer": "O valor depende da linha, metragem, preparação da base e acabamentos. Compare material, instalação e transporte. Solicite um orçamento discriminado à PVS Decore.",
        "id": "vinilico-q57",
        "product": "vinilico"
      },
      {
        "question": "Qual a melhor manta para piso vinílico click?",
        "answer": "Use somente a manta e o sistema especificados para a linha. A base deve estar preparada e as folgas seguir o manual; manta adicional não é adequada a todos os pisos, especialmente se já houver manta incorporada.",
        "id": "vinilico-q65",
        "product": "vinilico"
      },
      {
        "question": "Como saber se meu contrapiso está pronto para vinílico?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "vinilico-q67",
        "product": "vinilico"
      },
      {
        "question": "Piso SPC pode ser instalado em banheiro?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "spc-q2",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser instalado sobre piso existente?",
        "answer": "Sim! Pode ser instalado sobre cerâmica, porcelanato, mármore ou piso existente, desde que esteja bem fixado e nivelado. Economiza tempo e dinheiro em reforma.",
        "id": "spc-q7",
        "product": "spc"
      },
      {
        "question": "Como instalar piso SPC?",
        "answer": "Use somente a manta e o sistema especificados para a linha. A base deve estar preparada e as folgas seguir o manual; manta adicional não é adequada a todos os pisos, especialmente se já houver manta incorporada.",
        "id": "spc-q10",
        "product": "spc"
      },
      {
        "question": "Piso SPC precisa de manta?",
        "answer": "Use somente a manta e o sistema especificados para a linha. A base deve estar preparada e as folgas seguir o manual; manta adicional não é adequada a todos os pisos, especialmente se já houver manta incorporada.",
        "id": "spc-q11",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode molhar durante instalação?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "spc-q12",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ter piso radiante embaixo?",
        "answer": "Use apenas uma linha compatível com o aquecimento. Temperatura, manta e procedimento de aquecimento devem seguir os manuais do piso e do sistema.",
        "id": "spc-q16",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser removido e reinstalado?",
        "answer": "Sim! Por ser instalação flutuante com encaixe, pode ser desmontado e reinstalado em outro local. Cuidado no manuseio para não danificar os encaixes.",
        "id": "spc-q23",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser instalado em subsolo?",
        "answer": "A resistência do material à água não resolve umidade ascendente ou infiltração. Avalie e corrija a base, e confirme a indicação de uso do fabricante antes de instalar.",
        "id": "spc-q26",
        "product": "spc"
      },
      {
        "question": "Quanto tempo leva para instalar piso SPC?",
        "answer": "O prazo, a aclimatação e as condições de instalação dependem do produto e da preparação da base. Consulte o manual da linha e confirme o cronograma com o instalador.",
        "id": "spc-q32",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser instalado em loja de roupas?",
        "answer": "Perfeito! Visual sofisticado, resistente ao tráfego, fácil manutenção e variedade de designs para combinar com conceito da loja.",
        "id": "spc-q42",
        "product": "spc"
      },
      {
        "question": "Piso SPC precisa de perfil de transição?",
        "answer": "Sim, em passagens de portas, mudanças de ambiente e contra outros tipos de piso. O perfil protege as bordas e dá acabamento profissional.",
        "id": "spc-q43",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ser instalado por conta própria?",
        "answer": "Sim, o sistema click é fácil para DIY. Porém, recomendamos profissional para garantir nivelamento correto, cortes precisos e acabamento perfeito. Evita erros e desperdício.",
        "id": "spc-q44",
        "product": "spc"
      },
      {
        "question": "Como instalar piso laminado click?",
        "answer": "Use somente a manta e o sistema especificados para a linha. A base deve estar preparada e as folgas seguir o manual; manta adicional não é adequada a todos os pisos, especialmente se já houver manta incorporada.",
        "id": "laminado-q4",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser instalado sobre cerâmica?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "laminado-q12",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ter piso radiante?",
        "answer": "Use apenas uma linha compatível com o aquecimento. Temperatura, manta e procedimento de aquecimento devem seguir os manuais do piso e do sistema.",
        "id": "laminado-q15",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser instalado em cima de madeira?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "laminado-q22",
        "product": "laminado"
      },
      {
        "question": "Qual a melhor manta para piso laminado?",
        "answer": "Use somente a manta e o sistema especificados para a linha. A base deve estar preparada e as folgas seguir o manual; manta adicional não é adequada a todos os pisos, especialmente se já houver manta incorporada.",
        "id": "laminado-q25",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser desmontado e reinstalado?",
        "answer": "Tecnicamente sim, por ter encaixe click. Porém, o manuseio no desencaixe pode danificar peças. Não é prática comum, mas possível se feito com muito cuidado.",
        "id": "laminado-q26",
        "product": "laminado"
      },
      {
        "question": "Qual o sentido correto de instalar laminado?",
        "answer": "Idealmente no sentido da luz principal (perpendicular à janela). Isso valoriza as réguas e amplia visualmente. Em corredores, no sentido longitudinal.",
        "id": "laminado-q29",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser instalado em banheiro?",
        "answer": "A resistência à água varia conforme a linha e não impermeabiliza o ambiente. Não presuma adequação a chuveiros, alagamentos ou umidade da base. Verifique os ambientes permitidos no manual do fabricante.",
        "id": "laminado-q34",
        "product": "laminado"
      },
      {
        "question": "Como calcular quantidade de piso laminado?",
        "answer": "Meça comprimento x largura de cada ambiente. Some tudo. Adicione 10-15% para perdas de corte. Exemplo: 25m² de área = compre 27,5m² a 28,75m².",
        "id": "laminado-q35",
        "product": "laminado"
      },
      {
        "question": "Como fazer transição entre laminado e cerâmica?",
        "answer": "Use perfil de transição em alumínio, MDF ou PVC. Escolha cor que harmonize com ambos os pisos. O perfil protege as bordas e evita desníveis perigosos.",
        "id": "laminado-q38",
        "product": "laminado"
      }
    ]
  },
  {
    "id": "rodapes",
    "name": "Rodapés",
    "icon": "🏠",
    "count": 3,
    "questions": [
      {
        "question": "Precisa de rodapé especial para vinílico?",
        "answer": "Rodapés de poliestireno, PVC ou MDF podem combinar com o revestimento, conforme o ambiente. O perfil deve cobrir a folga prevista no manual sem travar um piso flutuante.",
        "id": "vinilico-q25",
        "product": "vinilico"
      },
      {
        "question": "Qual a espessura do rodapé para piso vinílico?",
        "answer": "Rodapés de 7cm a 10cm são os mais comuns. A escolha depende do pé-direito do ambiente. Rodapés mais altos (15cm) dão aspecto moderno e elegante.",
        "id": "vinilico-q43",
        "product": "vinilico"
      },
      {
        "question": "Qual rodapé combina com piso laminado?",
        "answer": "Rodapés de poliestireno, PVC ou MDF podem combinar com o revestimento, conforme o ambiente. O perfil deve cobrir a folga prevista no manual sem travar um piso flutuante.",
        "id": "laminado-q46",
        "product": "laminado"
      }
    ]
  },
  {
    "id": "escolha",
    "name": "Escolha do Piso",
    "icon": "🏠",
    "count": 17,
    "questions": [
      {
        "question": "Qual a diferença entre piso vinílico click e colado?",
        "answer": "O click possui sistema de encaixe sem cola, instalação mais rápida e pode ser removido. O colado é fixado com adesivo, exige contrapiso perfeito, mas oferece maior estabilidade e resistência à umidade.",
        "id": "vinilico-q4",
        "product": "vinilico"
      },
      {
        "question": "Qual a diferença entre LVT e SPC?",
        "answer": "LVT convencional é mais flexível; SPC possui núcleo rígido com cargas minerais. Ambos exigem seguir o manual da linha para preparação, instalação e ambientes permitidos.",
        "id": "vinilico-q23",
        "product": "vinilico"
      },
      {
        "question": "Qual o melhor: vinílico ou laminado?",
        "answer": "Laminado tem núcleo de fibras de madeira e é usual em áreas secas. Vinílico utiliza PVC e pode ser flexível ou rígido, como o SPC. Compare indicação de uso, conforto e condições da base.",
        "id": "vinilico-q29",
        "product": "vinilico",
        "aliases": [
          "laminado-q21"
        ]
      },
      {
        "question": "Qual a diferença entre vinílico residencial e comercial?",
        "answer": "Comercial tem wear layer mais espesso (0.5mm+), maior densidade e classificação de tráfego superior. Residencial é otimizado para conforto e custo-benefício em tráfego moderado.",
        "id": "vinilico-q32",
        "product": "vinilico"
      },
      {
        "question": "Qual a melhor marca de piso vinílico?",
        "answer": "Na PVS Decore trabalhamos com Tarkett, Durafloor e Quick-Step, todas com excelente reputação. A melhor marca depende do seu orçamento e necessidades específicas.",
        "id": "vinilico-q36",
        "product": "vinilico"
      },
      {
        "question": "Como escolher a cor do piso vinílico?",
        "answer": "Cores claras ampliam ambientes pequenos e refletem luz. Cores escuras dão sofisticação mas mostram mais sujeira. Combine com móveis e iluminação do ambiente.",
        "id": "vinilico-q55",
        "product": "vinilico"
      },
      {
        "question": "Qual a diferença de preço entre vinílico click e colado?",
        "answer": "O valor depende da linha, metragem, preparação da base e acabamentos. Compare material, instalação e transporte. Solicite um orçamento discriminado à PVS Decore.",
        "id": "vinilico-q61",
        "product": "vinilico"
      },
      {
        "question": "Qual a diferença entre piso SPC e vinílico comum?",
        "answer": "LVT convencional é mais flexível; SPC possui núcleo rígido com cargas minerais. Ambos exigem seguir o manual da linha para preparação, instalação e ambientes permitidos.",
        "id": "spc-q1",
        "product": "spc"
      },
      {
        "question": "Piso SPC é melhor que laminado?",
        "answer": "Para áreas úmidas, sim. SPC é totalmente resistente à água conforme a linha. Laminado tem melhor custo-benefício em áreas secas e visual mais natural de madeira. Depende da aplicação.",
        "id": "spc-q3",
        "product": "spc"
      },
      {
        "question": "Qual o preço médio do piso SPC?",
        "answer": "O valor depende da linha, metragem, preparação da base e acabamentos. Compare material, instalação e transporte. Solicite um orçamento discriminado à PVS Decore.",
        "id": "spc-q13",
        "product": "spc"
      },
      {
        "question": "Qual a diferença entre SPC e WPC?",
        "answer": "LVT convencional é mais flexível; SPC possui núcleo rígido com cargas minerais. Ambos exigem seguir o manual da linha para preparação, instalação e ambientes permitidos.",
        "id": "spc-q25",
        "product": "spc"
      },
      {
        "question": "Como escolher entre SPC 4mm, 5mm ou 6mm?",
        "answer": "4mm: residencial leve. 5mm: residencial médio/comercial leve (melhor custo-benefício). 6mm+: comercial médio/alto tráfego. Quanto mais espesso, mais resistente e confortável.",
        "id": "spc-q28",
        "product": "spc"
      },
      {
        "question": "Qual a melhor cor de SPC para ambiente pequeno?",
        "answer": "Tons claros (carvalho claro, cinza claro, bege) ampliam visualmente. Réguas largas e longas alongam o espaço. Evite muitos tons escuros em ambientes pequenos.",
        "id": "spc-q46",
        "product": "spc"
      },
      {
        "question": "Qual a diferença entre AC3, AC4 e AC5?",
        "answer": "AC3, AC4 e AC5 indicam resistência à abrasão do laminado, em ordem crescente. Essa classificação não mede todos os danos nem substitui a classe de uso do fabricante.",
        "id": "laminado-q2",
        "product": "laminado"
      },
      {
        "question": "Qual o preço médio do piso laminado?",
        "answer": "O valor depende da linha, metragem, preparação da base e acabamentos. Compare material, instalação e transporte. Solicite um orçamento discriminado à PVS Decore.",
        "id": "laminado-q11",
        "product": "laminado"
      },
      {
        "question": "Como escolher cor do piso laminado?",
        "answer": "Cores claras (carvalho, maple) ampliam e iluminam. Cores médias (nogueira) são versáteis. Cores escuras (wengué) sofisticam mas mostram sujeira. Combine com móveis e iluminação.",
        "id": "laminado-q18",
        "product": "laminado"
      },
      {
        "question": "Qual a melhor marca de piso laminado?",
        "answer": "Na PVS Decore trabalhamos com Eucafloor, Durafloor e Quick-Step, marcas líderes no mercado brasileiro. Todas com excelente relação qualidade-preço.",
        "id": "laminado-q41",
        "product": "laminado"
      }
    ]
  },
  {
    "id": "manutencao",
    "name": "Manutenção",
    "icon": "🏠",
    "count": 24,
    "questions": [
      {
        "question": "Como limpar piso vinílico?",
        "answer": "Use vassoura de cerdas macias ou aspirador, seguido de pano úmido com detergente neutro. Evite produtos abrasivos, palha de aço e excesso de água. Seque bem após a limpeza.",
        "id": "vinilico-q8",
        "product": "vinilico"
      },
      {
        "question": "Como tirar manchas de piso vinílico?",
        "answer": "Remova a sujeira solta e use somente o limpador ou removedor autorizado pelo fabricante. Não improvise com solventes, ácidos ou abrasivos.",
        "id": "vinilico-q21",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico mancha com produtos de limpeza?",
        "answer": "Produtos adequados não mancham. Evite água sanitária, cloro, sapólio e produtos ácidos. Use apenas detergente neutro ou limpadores específicos para vinílico.",
        "id": "vinilico-q35",
        "product": "vinilico"
      },
      {
        "question": "Como consertar arranhões em piso vinílico?",
        "answer": "Arranhões leves podem ser disfarçados com cera específica ou kit de reparo. Arranhões profundos exigem substituição da régua danificada. Previna usando protetores em móveis.",
        "id": "vinilico-q38",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico solta cola com o tempo?",
        "answer": "Se instalado corretamente com cola de qualidade e contrapiso adequado, não. Problemas geralmente decorrem de umidade no contrapiso ou cola inadequada.",
        "id": "vinilico-q42",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser lustrado?",
        "answer": "Não é necessário nem recomendado. A camada de proteção já vem de fábrica. Lustrar pode deixar o piso escorregadio e com aspecto artificial.",
        "id": "vinilico-q44",
        "product": "vinilico"
      },
      {
        "question": "Posso colocar tapete sobre piso vinílico?",
        "answer": "Sim! Use tapetes com base antiderrapante que não solta pigmento. Evite tapetes de borracha escura que podem manchar o vinílico com o tempo.",
        "id": "vinilico-q47",
        "product": "vinilico"
      },
      {
        "question": "Piso vinílico pode ser pintado?",
        "answer": "Não é recomendado. A tinta não adere bem ao vinílico e descasca com uso. Se deseja mudar o visual, o ideal é substituir por novo piso ou usar tapetes/carpetes.",
        "id": "vinilico-q52",
        "product": "vinilico"
      },
      {
        "question": "Como fazer manutenção preventiva do piso vinílico?",
        "answer": "Varra diariamente, passe pano úmido semanalmente, use tapetes em entradas, coloque protetores em móveis, evite arrastar objetos pesados. Limpeza profissional anual.",
        "id": "vinilico-q59",
        "product": "vinilico"
      },
      {
        "question": "Como limpar piso vinílico depois de obra?",
        "answer": "Remova a sujeira solta e use somente o limpador ou removedor autorizado pelo fabricante. Não improvise com solventes, ácidos ou abrasivos.",
        "id": "vinilico-q63",
        "product": "vinilico"
      },
      {
        "question": "Como limpar piso SPC?",
        "answer": "Vassoura de pelo macio ou aspirador + pano úmido com detergente neutro. Resiste a produtos de limpeza domésticos comuns. Evite apenas abrasivos e esponjas de aço.",
        "id": "spc-q17",
        "product": "spc"
      },
      {
        "question": "Piso SPC descola com tempo?",
        "answer": "Não, pois é instalação flutuante (não colada). As réguas ficam encaixadas pelo sistema click. Não há risco de descolamento como em pisos colados.",
        "id": "spc-q18",
        "product": "spc"
      },
      {
        "question": "Como consertar piso SPC danificado?",
        "answer": "Substitua a régua danificada. No sistema click, é possível desmontar e trocar réguas individuais. Mantenha sobra de material da instalação para eventuais reparos.",
        "id": "spc-q22",
        "product": "spc"
      },
      {
        "question": "Como preparar contrapiso para piso SPC?",
        "answer": "Depende do produto e do estado da base. Avalie umidade pelo método indicado, aderência, planicidade, juntas e altura final. A manta não corrige desníveis; siga o manual de instalação.",
        "id": "spc-q36",
        "product": "spc"
      },
      {
        "question": "Piso SPC pode ter tapete em cima?",
        "answer": "Sim! Use tapetes com base antiderrapante. Evite tapetes de borracha preta que podem manchar com o tempo. Ideais para definir áreas e proteger zonas de maior tráfego.",
        "id": "spc-q47",
        "product": "spc"
      },
      {
        "question": "Como limpar piso laminado?",
        "answer": "Vassoura de cerdas macias ou aspirador. Pano levemente umedecido com produto específico para laminado. NUNCA use água em excesso, cera ou produtos abrasivos.",
        "id": "laminado-q9",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser lixado?",
        "answer": "NÃO! Diferente de madeira maciça, laminado não pode ser lixado. A camada decorativa é fina. Riscos profundos exigem troca da régua danificada.",
        "id": "laminado-q10",
        "product": "laminado"
      },
      {
        "question": "Como consertar piso laminado estufado?",
        "answer": "Identifique a causa (água ou falta de dilatação). Remova rodapés, corte excesso nas bordas para dar espaço. Se estufou por água, troque réguas danificadas após secar totalmente.",
        "id": "laminado-q14",
        "product": "laminado"
      },
      {
        "question": "Como evitar que piso laminado estufe?",
        "answer": "Respeite as folgas, a aclimatação e os perfis definidos pelo fabricante. Avalie e corrija a umidade da base antes da instalação, e evite excesso de água na limpeza.",
        "id": "laminado-q23",
        "product": "laminado"
      },
      {
        "question": "Como reparar risco no piso laminado?",
        "answer": "Riscos leves: use massa ou lápis de cera para laminado na cor do piso. Riscos profundos: substitua a régua. Kits de reparo estão disponíveis em lojas especializadas.",
        "id": "laminado-q27",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ser envernizado?",
        "answer": "Não é necessário nem recomendado. O overlay protetor já vem de fábrica. Aplicar verniz pode deixar escorregadio e não aumentará a durabilidade.",
        "id": "laminado-q28",
        "product": "laminado"
      },
      {
        "question": "Piso laminado pode ter tapete em cima?",
        "answer": "Sim! Tapetes ajudam a proteger áreas de maior tráfego. Use base antiderrapante. Evite tapetes que retenham umidade.",
        "id": "laminado-q36",
        "product": "laminado"
      },
      {
        "question": "Como proteger piso laminado de arranhões?",
        "answer": "Coloque feltros autoadesivos nos pés de móveis, use tapetes em áreas de tráfego, evite sapatos de salto fino, coloque capacho na entrada, não arraste objetos pesados.",
        "id": "laminado-q43",
        "product": "laminado"
      },
      {
        "question": "Como remover manchas de piso laminado?",
        "answer": "Remova a sujeira solta e use somente o limpador ou removedor autorizado pelo fabricante. Não improvise com solventes, ácidos ou abrasivos.",
        "id": "laminado-q48",
        "product": "laminado"
      }
    ]
  }
];
export const getTotalQuestions = () => FAQ_CATEGORIES.reduce((sum, category) => sum + category.questions.length, 0);
