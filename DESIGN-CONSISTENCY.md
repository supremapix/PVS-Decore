# Consistência visual e contexto local — 04/11/2026

Base: e0d60a11cd886167ba2b2bf467b049ffcfa2c3c4. Escopo deste lote: contato, FAQ, três páginas de produtos, três de serviços, mapa do site, 404 e seção de planejamento das 149 localidades. Home, showroom e catálogo já tinham a linguagem editorial atual; foram preservados. O catálogo recebeu somente dados oficiais do SKU Quick-Step QSSM8818 no dialog existente.

## Antes e depois

- Contato: substituído o shell anterior por hero ilustrado, navegação clara para formulário, telefone, WhatsApp, e-mail, endereço e showroom. Horários não confirmados do antigo MapSection deixaram de ser exibidos nesta página; a visita deve ser confirmada. Nenhum novo horário foi criado.
- Produtos e serviços: mantidos textos de PAGE_CONTENT, SEO e URLs; títulos h2, imagens contextuais rotuladas, largura e espaçamento coerentes. Formulário deixa de confundir nome do serviço com localização e inclui assunto na mensagem preparada.
- FAQ: mantidas as nove respostas e identificadores/aliases; busca com acentos normalizados, contagem, limpeza e estados vazios; details/summary nativos, foco no deep link e cópia com fallback real. Removido botão de topo duplicado.
- Mapa: 120 bairros e 29 cidades continuam acessíveis; retirada rolagem interna longa. 404 mantém noindex e estado HTTP real pelo pipeline existente.
- Formulários: texto legível, controles de pelo menos 48 px, foco visível e CTA verde. Os testes interceptam window.open; nenhuma mensagem foi enviada.
- Todas as 149 localidades: seção existente #planejamento reorganizada, com identificação geográfica e processo de consulta, material/amostra, avaliação da base, orçamento discriminado e cuidados. Introdução dos guias foi movida para essa seção, sem duplicação. Não se afirma confiança de moradores, menor preço, obra local, filial ou garantia inexistente.
- Fontes de 29 cidades em data/city-context.json; 24 com cobertura comercial não confirmada continuam noindex e com aviso explícito. Pesquisa primária específica recebida da coordenação do projeto; AMEP fundamenta pertencimento à RMC. Geografia não implica umidade, piso adequado ou entrega disponível. Os 16 nomes pendentes não receberam história inventada; o alias Alto da Rua XV continua com acesso e indicação do guia principal.

## Invariantes

149 localidades: 108 indexáveis e 41 noindex, sem mudança. Sitemap 123 URLs; build 164 rotas e 404, total 165 HTMLs. 120 URLs históricas preservadas, CIC 308 para Cidade Industrial, Ahú 200. Catálogo 422 referências/204 imagens oficiais Eucafloor; 38 itens BIM separados como referência de reposição. Nenhuma imagem adicional de marca sem licença. Nenhuma operação GSC.

## Validação local

- TypeScript e build aprovados; permanece aviso de bundle acima de 500 kB (857,51 kB, gzip 205,06 kB), sem migração de dependências.
- verify-design-consistency: 72 cenários nas nove páginas funcionais, 320/390/430/1440 px e texto 100/200%; formulários sem envio, foco, FAQ e especificação QSSM8818.
- verify-product-dialog: 8 cenários com quatro produtos cada; verify-catalog-store: 40 cenários, 422 referências.
- verify-localities: 149 HTMLs e 110 cenários; verify-locality-depth: 149 HTMLs e 56 cenários; verify-locality-context: 149 seções únicas e 29 fontes de cidades, 24 avisos de cobertura.
- verify-site: 165 HTMLs, links/assets/schema, compartilhamento, clipboard sucesso/falha e teclado. audit-schema: zero Product/Offer/Review/AggregateRating indevidos.
- verify-location-regression: 120 URLs históricas e navegação, canonical e política de indexação.
- Inspeção de pixels: contato 390, FAQ 320, serviço comercial e laminado 1440; imagens sem deformação, contraste e hierarquia coerentes. Capturas antes/depois e resultados JSON ficam na pasta de evidências do workspace.
- Pares de cores principais medidos: texto/fundo 12,94:1; legenda 7,71:1; CTA laranja 6:1; CTA verde 7,8:1; placeholder 6,31:1.

## Limites

Fontes públicas descrevem geografia e fichas de fabricante, não comprovam disponibilidade comercial. Sonata não foi adicionada sem SKU verificável. Não foi afirmado catálogo completo nem direito de uso de fotos de outras marcas. Product inválido no GSC era histórico e já não aparecia nos HTMLs atuais; não foram criadas ofertas ou avaliações artificiais para gerar um diff.

Verificação adicional concluída: verify-editorial aprovou os 103 guias em 309 cenários (320 com texto 200%, 390 e 1440), sem erros de execução.
