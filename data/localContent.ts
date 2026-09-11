// A service area is not another physical store.
export const getLocationContent = (name: string, type: 'bairro' | 'cidade') => [
  { title: name === 'São José dos Pinhais' ? 'Onde fica a loja?' : 'Atendimento e localização da loja', content: `A sede da PVS Decore fica na Rua Izabel A Redentora, 1088, São José dos Pinhais - PR, CEP 83030-500. ${name === 'São José dos Pinhais' ? 'Visite a loja para conhecer os pisos e acabamentos.' : `Para atendimento em ${name}, consulte disponibilidade e deslocamento. Esta página não representa uma filial.`}` },
  { title: 'Venda e instalação de pisos', content: 'Trabalhamos com pisos laminados, vinílicos, SPC e rodapés. A escolha considera o ambiente, o uso residencial ou comercial e as condições da base. Consulte os produtos e o serviço de instalação nos links abaixo.' },
  { title: 'Avaliação e orçamento', content: 'Informe a metragem, o endereço e o revestimento atual pelo telefone (41) 3076-6240. A preparação do contrapiso, os acabamentos, o transporte e o prazo devem constar no orçamento.' },
  { title: 'Cuidados com água e manutenção', content: 'Resistência à água depende da linha escolhida e não substitui a impermeabilização da base. Siga o manual do fabricante para definir ambientes permitidos e a limpeza.' }
];

