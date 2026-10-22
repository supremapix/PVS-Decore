export interface FAQItem {question:string;answer:string;id:string;aliases:string[]}
export interface FAQCategory{id:string;name:string;icon:string;count:number;questions:FAQItem[]}
export const FAQ_CATEGORIES:FAQCategory[]=[
  {
    "id": "escolha",
    "name": "Escolha do material",
    "icon": "?",
    "count": 2,
    "questions": [
      {
        "question": "Qual piso escolher para meu ambiente?",
        "answer": "Compare uso, limpeza, estado da base e indicação da linha. Veja amostras junto aos móveis e à iluminação.",
        "id": "escolha-q0",
        "aliases": []
      },
      {
        "question": "Vinílico e laminado podem receber água?",
        "answer": "A resistência depende da linha e não substitui impermeabilização. Siga o manual de instalação e limpeza do produto.",
        "id": "escolha-q1",
        "aliases": []
      }
    ]
  },
  {
    "id": "instalacao",
    "name": "Instalação",
    "icon": "?",
    "count": 2,
    "questions": [
      {
        "question": "Preciso remover o piso antigo?",
        "answer": "A instalação sobre revestimento existente depende do estado da base e das instruções do sistema. Solicite avaliação antes de decidir.",
        "id": "instalacao-q0",
        "aliases": []
      },
      {
        "question": "Quanto tempo demora o serviço?",
        "answer": "O prazo depende de medição, preparação, material e acabamento. A liberação para uso deve ser combinada conforme o sistema instalado.",
        "id": "instalacao-q1",
        "aliases": []
      }
    ]
  },
  {
    "id": "orcamento",
    "name": "Orçamento e atendimento",
    "icon": "?",
    "count": 3,
    "questions": [
      {
        "question": "O que enviar para pedir orçamento?",
        "answer": "Envie cidade, bairro, área aproximada, fotos do piso atual e os ambientes previstos. Materiais e instalação devem estar discriminados.",
        "id": "orcamento-q0",
        "aliases": []
      },
      {
        "question": "Onde fica a loja?",
        "answer": "Rua Izabel A Redentora, 1088, São José dos Pinhais, PR. Contato: (41) 3076-6240. Confirme disponibilidade antes da visita.",
        "id": "orcamento-q1",
        "aliases": []
      },
      {
        "question": "Quais cidades são atendidas?",
        "answer": "São José dos Pinhais, Curitiba, Pinhais, Colombo e Araucária são referências de atendimento no site. Confirme entrega e instalação para seu endereço. Outras localidades exigem consulta.",
        "id": "orcamento-q2",
        "aliases": []
      }
    ]
  },
  {
    "id": "cuidados",
    "name": "Cuidados e manutenção",
    "icon": "?",
    "count": 2,
    "questions": [
      {
        "question": "Como limpar sem danificar?",
        "answer": "Remova a poeira e siga o manual da linha para a limpeza úmida. Não use abrasivos nem encharque o piso.",
        "id": "cuidados-q0",
        "aliases": []
      },
      {
        "question": "Qual é a garantia?",
        "answer": "As condições variam por fabricante, produto e serviço. Solicite os termos aplicáveis por escrito antes da contratação.",
        "id": "cuidados-q1",
        "aliases": []
      }
    ]
  }
];
export const getTotalQuestions=()=>FAQ_CATEGORIES.reduce((sum,category)=>sum+category.questions.length,0);
