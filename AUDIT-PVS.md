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

## Repaginação de todas as localidades — 24/10/2026
- Base remota confirmada: 98816a04a25c8d1711f901d2d1d397439dfaa58e; HEAD e origin/main iguais antes da edição. Publicação desta rodada explicitamente autorizada pelo usuário em 24/10/2026 às 17:35 UTC, confirmada pela tarefa principal; usar somente o pipeline PVS existente.
- Destino: PVS-Decore / www.pvsdecore.com.br e pvs-decore.vercel.app. A página publicada de São José dos Pinhais corresponde ao modelo pages/LocationPage.tsx deste repositório. Nenhum projeto pisos.aloanuncio.com.br foi alterado.
- Inventário: 149 páginas de localidades (29 cidades + 120 páginas de bairros/localidades após a normalização de CIC). Todas usam o novo modelo. A lista completa com canonical e noindex anteriores está em qa/localities-baseline.json. As 120 URLs históricas continuam cobertas pelo teste específico, incluindo o alias /bairro/cic.
- Antes: hero escuro, blocos genéricos com ilustrações repetidas, formulário lateral e lista arbitrária de oito cidades. Depois: hero editorial creme/verde/terracota, navegação por seções, quatro cards de materiais, planejamento, preparação, cuidados, cinco perguntas e respostas visíveis, orçamento e links para serviços/guias/diretório. Menu e footer acessíveis e crédito Suprema preservados. Botão global de retorno ao topo integra a mesma área dos botões de compartilhar/contato, respeitando ocultação no menu e rodapé.
- Prioridade São José dos Pinhais: hero próprio, endereço real e mapa da loja, orientações para visita e comparação de amostras; conteúdo para moradores e comércio sobre escolha, circulação, organização da reforma e orçamento. Vídeo existente preservado.
- Curitiba, Pinhais, Colombo e Araucária mantêm enfoques editoriais próprios a partir das informações de atendimento já presentes. As demais localidades usam instruções comuns de planejamento e consulta de endereço. Não se apresenta essa base compartilhada como pesquisa geográfica exclusiva, nem se inventam peculiaridades para variar texto.
- Não foram acrescentadas alegações de geografia, bairros oficiais, filiais, obras, liderança, ações comunitárias, avaliações ou garantias. Sem novas alegações geográficas, não há necessidade de novas referências municipais. As referências municipais usadas no reparo anterior permanecem registradas acima.
- Imagens WebP existentes preservadas e identificadas como ilustrações, com alt e tamanhos responsivos. Não foram produzidas imagens de supostas obras locais.
- Fontes técnicas consultadas em 24/10/2026: Tarkett (preparação do contrapiso) e Quick-Step (limpeza de laminados), URLs indicadas acima e nas páginas. Texto original resumido; instruções específicas dependem do manual da linha.
- SEO: título e descrição por localidade, FAQPage correspondente às cinco respostas visíveis; canonicals e noindex idênticos ao baseline, mesmas 19 URLs no sitemap. Nenhum novo endereço comercial ou promessa de visibilidade/ranking.
- Verificação: build e TypeScript aprovados; não existe script de lint no projeto. verify-site.mjs validou 164 HTMLs, links/assets, schema, 19 entradas de sitemap, compartilhamento e clipboard sem enviar mensagens. verify-location-regression.mjs aprovou as 120 URLs históricas. verify-localities.mjs compara todas as 149 páginas ao baseline e executa 80 cenários (oito rotas representativas × 320/360/390/430/1440 px × texto 100%/200%), com teclado, foco, Escape, menu, formulário, retorno ao topo e WhatsApp de compartilhamento; sem erros de execução ou transbordamento horizontal.
- Evidências antes/depois e relatórios: pasta ../evidence/localities-*. Capturas inspecionadas em mobile, desktop e texto 200%. Testes não constituem certificação formal de acessibilidade.
- Dependências, contatos, inventário de localidades e configuração de domínio não alterados. Rollback pelo commit base desta seção.
- Checagem adicional encontrou transbordamento no diálogo de compartilhamento em 320 px/texto 200%; corrigido com coluna única em telas pequenas, largura máxima explícita e quebra de títulos. O teste de reflow do diálogo foi incorporado ao verificador de localidades.
