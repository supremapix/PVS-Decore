# Revisão editorial e visual — 04/11/2026

Base publicada:40c003e. Inventário por URL antes/depois em qa/locality-depth-baseline.json e qa/locality-depth-results.json. Não houve criação de localidades nem liberação de noindex.

## Diagnóstico
As149 páginas já tinham preparação, cuidados e FAQ comuns.103 roteiros em dados e o guia próprio Batel ofereciam diferenciação, mas cards genéricos não conectavam a seleção ao material real. Três perguntas eram repetidas; volume não foi usado como meta.

## Grupos
-3 prioridades: Batel conserva seu guia específico de apartamento/comercial e ganha2 perguntas próprias com contexto municipal; CIC e Portão têm seus3 blocos reescritos com decisões, limites de uso, diagnóstico, acesso e proposta. Portão/CIC recebem H1 específico. As perguntas locais substituem perguntas genéricas, mantendo5 no total.
-5 cidades elegíveis: perguntas próprias ligadas à visita/amostras(SJP), regras do imóvel(Curitiba), recebimento(Pinhais), reforma ocupada(Colombo), atividade comercial(Araucária). Sem alegações demográficas.
-100 outras elegíveis: guias próprios e fontes preservados; comparação compartilhada substitui os4 cards genéricos por3 materiais oficiais com foto/ficha/dialog, inclui critérios de uso/base/acabamento e orientações mais precisas de diagnóstico/manutenção. Não se afirma que esse módulo técnico comum seja conteúdo exclusivo de cada bairro.
-40 referências sem confirmação: aviso explícito de consulta prévia; informação geral útil, noindex preservado e retirada de Service/areaServed específico da localidade para não transformar página histórica em alegação de cobertura.
-1 alias Alto da Rua XV: noindex e link para Alto da XV preservados, com razão de equivalência distinguida da cobertura pendente.

## Redundância e imagens
Removida seção FloorSelection duplicada em Batel/SJP, substituída pela comparação comum com fotos exatas Andorra New(Prime Click), Bali(Basic) e Arenas70mm(Acqua New). Produtos não são recomendações automáticas nem estoque. HomeFacts recebe4 ilustrações pertinentes: escolha ilustrativa, padrão oficial, preparação ilustrativa e diagrama de consulta sem mapa fictício. Batel/CIC/Portão usam acervo ilustrativo rotulado nos cards editoriais. Nenhuma foto de obra ou showroom inventada.

## Fontes e limites
Mapa geográfico existente: data/geographic-evidence.json; inventário municipal: https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912 . Batel Soho: https://www.curitiba.pr.gov.br/noticias/praca-da-espanha-no-roteiro-de-turistas-e-familias-curitibanas/16306 . Fontes técnicas conferidas: https://www.quick-step.com.br/pt-br/pisos-laminados/instalacao e https://www.quick-step.com.br/pt-br/pisos-laminados/limpar . Especificações numéricas e garantias não foram extrapoladas. Registro do catálogo/imagens: CATALOG-SOURCES.md e data/supplier-images.json.

## Search Console
Auditoria ao vivo de /contato,/faq,/service/instalacao-comercial e /nossos-produtos retornou200 e nenhum Product.165 HTMLs locais também sem Product. Erro histórico de12 itens não foi artificialmente preenchido com offers/review. Evidência ../evidence/gsc-current-schema-check.json. Aguardando URLs exatas dos404/duplicada; nenhuma ação no GSC feita neste executor.

## QA concluído
TypeScript/build aprovados;165 HTMLs,123 sitemap,149 localidades(108 indexáveis/41 noindex).309 cenários editoriais,110 localidades,56 materiais/home,40 catálogo/showroom e120 URLs históricas aprovados. Teste antigo atualizado de4 cards genéricos para3 cards reais. Fotos locais reutilizam81.812 bytes no total, com dimensões/lazy e modal existente. Bundle854 kB/205 kB gzip; aviso Vite de chunk acima500 kB permanece, sem mudança de dependências.

Contagem de palavras da área local, método idêntico antes/depois: Batel1901→1834; CIC1309→1788; Portão1235→1769. O objetivo foi substituir redundância e esclarecer decisões, não igualar volume. Mapa completo por URL em qa/locality-depth-results.json. Auditoria recursiva do JSON-LD em qa/schema-audit.json:165 páginas,zero Product/Offer/Review/AggregateRating.
