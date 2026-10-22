# PVS — inventário e lote de melhoria

## Evidências e destino
- Repositório: https://github.com/supremapix/PVS-Decore (permissão de escrita confirmada pelo conector).
- Base: af2ed16cb89f48bbf050f1d7a8f3f2960d5a53f0.
- Pipeline: status GitHub `Vercel` no commit base, projeto `supremapixs-projects/pvs-decore`.
- https://pvs-decore.vercel.app/ e https://www.pvsdecore.com.br/ respondem 200; domínio sem www redireciona ao www. Canonical existente preservado.
- React 18 + React Router + Vite; pré-renderização pelo build.mjs existente.
- Contato, endereço e serviços preservados de constants.ts, data/site.ts e HTML publicado: (41) 3076-6240, pvs.decor@gmail.com, Rua Izabel A Redentora 1088, São José dos Pinhais.
- O contato WhatsApp é o mesmo link público existente; não foi enviada mensagem nem testada a entrega de mensagens.
- Nenhum AGENTS.md ou .agents de projeto encontrado no checkout e ancestrais. Skills locais disponíveis `gepeto`/`pinokio` são de launchers Pinokio e não se aplicam a este site.
- Trabalho em clone separado; nenhum checkout GF10, OmarSEO ou Alfeu foi alterado.

## Lote implementado
1. Identidade editorial em verde escuro, terracota e creme com a marca SVG existente; materiais e imagens de inspiração WebP existentes preservados.
2. Home original, guia de escolha com referências de fabricante, páginas de serviços revisadas e FAQ compacto sem alegações universais.
3. Diretório pesquisável de cidades e bairros; cinco cidades do MAIN_AREAS existente recebem contexto próprio. Demais cidades ficam como consulta de disponibilidade e noindex, sem filiais inventadas. O inventário anterior de bairros/localidades foi restaurado no reparo descrito abaixo; nomes históricos imprecisos não foram descartados sem evidência individual. Não foi ampliada a alegação de cobertura além da evidência disponível.
4. Compartilhamento global: WhatsApp, Facebook, X/Twitter, Pinterest, LinkedIn, Threads e cópia; diálogo nativo modal, Escape, foco restaurado, alvo mínimo 48px, fallback manual de clipboard e URL de rota corrente.
5. CSS compilado em produção, sem dependência do CDN Tailwind; links de pular conteúdo, menu estável e animações reduzidas.
6. OG 1200x630, favicon SVG/ICO, Apple 180, manifest com 192/512. Formatos compatíveis com o conjunto recomendado pelo RealFaviconGenerator; não se afirma certificação pelo serviço.
7. Pré-render, títulos/canonicals/schema e sitemap preservados e testados; 404 estático.

## Imagens e precisão
A imagem loja-pvs.jpg contém marca visual de geração e não tem comprovação de fotografia da loja. Foi preservada no repositório, mas removida da apresentação como fachada real. Ambientes de inspiração continuam explicitamente ilustrativos. Não foram criadas avaliações, casos ou fotografias de obras. Nenhuma nova imagem raster gerada foi necessária: já havia material contextual WebP inspecionado.

## Fontes técnicas
- https://tarkett.com.br/blog/a-importancia-do-contrapiso-no-mundo-dos-pisos-vinilicos/
- https://tarkett.com.br/blog/como-cuidar-do-seu-piso-vinilico/
- https://www.quick-step.com.br/pt-br/pisos-laminados/limpar

## Verificação e limites
Executar `npm run typecheck`, `npm run build` e `npm run test:site`. Resultados em qa/results.json; capturas locais em qa/. Testes não enviam mensagens ou publicações. Nenhum comando de lint existia no projeto; TypeScript, build e testes funcionais são usados.
O npm audit remanescente exige migração maior de Tailwind 3/React Router 6; não aplicado `--force`. As entradas usadas aqui são locais e os links não vêm de usuários. Isso não elimina a necessidade de planejar atualização das dependências.
Rollback: reverter o commit deste lote pelo Git e deixar o pipeline existente publicar; commit base acima serve de referência. Não alterar DNS.

## Correção da regressão de localidades
O commit 30c24a8 reduziu indevidamente o inventário de 120 nomes para 20, removendo 101 nomes e acrescentando Cidade Industrial de Curitiba. A descrição anterior que classificava todas as exclusões como bairros não oficiais/duvidosos estava incorreta: foram excluídos bairros legítimos, sem investigação individual. As URLs excluídas passaram a 404, embora já fossem noindex no baseline af2ed16.

Reparo: restauração do inventário completo do baseline e de seus links, conservando noindex para todos os bairros. A única normalização é CIC → Cidade Industrial de Curitiba, com redirecionamento permanente de /bairro/cic para /bairro/cidade-industrial-de-curitiba. /bairro/ah mantém a URL original e o conteúdo equivalente de Ahú, sem redirecionamento para a home.

A existência de um nome no inventário histórico não confirma bairro oficial nem atendimento comercial irrestrito. Nomes imprecisos permanecem acessíveis para consulta, até validação individual de geografia, sinônimos e cobertura. A repetição editorial é questão separada: não deve causar exclusão indiscriminada de URLs. Nenhum bairro passou de index para noindex neste reparo; a regra já existia no baseline. As 29 cidades e cinco cidades indexáveis permanecem iguais.

Evidências geográficas: https://regionais.curitiba.pr.gov.br/conteudo/matriz/1176 (Ahú) e https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912 (Regional CIC). A equivalência CIC/Cidade Industrial de Curitiba também é a denominação existente no inventário municipal.

Verificação específica: scripts/verify-location-regression.mjs compara todas as 120 URLs históricas ao baseline, títulos/localidade, canonical, noindex, links de diretório e política de redirect. Sem migração de dependências neste reparo.
