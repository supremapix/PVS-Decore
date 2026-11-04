import fs from 'node:fs';
const source='https://www.curitiba.pr.gov.br/noticias/veja-como-entrar-em-contato-com-as-regionais-e-qual-delas-cuida-do-seu-bairro/40912';
const normal=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const names=new Set(JSON.parse(fs.readFileSync('data/curitiba-official-neighborhoods.json','utf8')).map(normal));
const text=fs.readFileSync('constants.ts','utf8');
const reviewed=JSON.parse(fs.readFileSync('data/reviewed-neighborhoods.json','utf8'));
const evidence=JSON.parse(fs.readFileSync('data/geographic-evidence.json','utf8'));
const slug=s=>s.toLowerCase().replace(/\s+/g,'-').replace(/[^\w\-]+/g,'').replace(/\-\-+/g,'-').replace(/^-+|-+$/g,'');
const rows=[];
for(const [variable,type] of [['RAW_BAIRROS','bairro'],['RAW_CIDADES','cidade']]){
 const list=[...text.match(new RegExp('const '+variable+' = \\[([\\s\\S]*?)\\];'))[1].matchAll(/"([^"]+)"/g)].map(m=>m[1]);
 for(const name of list){
  const id=slug(name),cityKnown=['Curitiba','São José dos Pinhais','Pinhais','Colombo','Araucária'].includes(name);
  const official=type==='bairro'&&names.has(normal(name)),geo=type==='bairro'?evidence[id]:null;
  const accepted=type==='bairro'?!!reviewed[id]:cityKnown;
  rows.push({name,type,path:'/'+type+'/'+id,beforeIndexed:cityKnown,afterIndexed:accepted,
   coverage:cityKnown?'cidade citada pela PVS':geo?`localidade contextualizada em ${geo.city}; cobertura municipal publicada, sujeita ao endereço`:official?'bairro de Curitiba; cobertura municipal declarada pela PVS, sujeito ao endereço':'confirmação individual necessária',
   reason:accepted?'cobertura contextual e conteúdo revisado':geo&&!geo.eligible?'nome equivalente ao mesmo bairro; intenção duplicada, acesso preservado e link para página principal':official?'cobertura municipal sustentada; revisão editorial individual pendente':'identificação geográfica ou cobertura específica não confirmada',
   source:geo?.source||(official?source:null),...(geo?{kind:geo.kind,related:geo.related}: {})});
 }
}
const counts={routes:rows.length,indexableBefore:rows.filter(x=>x.beforeIndexed).length,indexableAfter:rows.filter(x=>x.afterIndexed).length,editorialPending:rows.filter(x=>x.reason.includes('editorial individual')).length,coverageOrGeographyPending:rows.filter(x=>x.reason.includes('não confirmada')).length,knownEquivalentNoindex:rows.filter(x=>x.reason.includes('nome equivalente')).length};
fs.writeFileSync('qa/locality-review-2026-11-04.json',JSON.stringify({source,counts,rows},null,2)+'\n');
const pending=rows.filter(x=>!x.afterIndexed);const groups={coberturaComercial:pending.filter(x=>x.type==='cidade'),nomesNaoConciliados:pending.filter(x=>x.type==='bairro'&&x.reason.includes('não confirmada')),equivalenciaConfirmada:pending.filter(x=>x.reason.includes('nome equivalente'))};
fs.writeFileSync('qa/locality-confirmations.json',JSON.stringify({date:'2026-11-04',note:'30 nomes conciliados por evidências municipais. Alto da Rua XV permanece noindex por equivalência e intenção duplicada, não por dúvida de cobertura. Nenhum novo redirecionamento.',questions:{cidades:'Quais destes 24 municípios recebem venda/entrega e quais também recebem instalação? Pode responder com as exceções e eventuais limites por CEP.',bairros:'Para os 16 nomes ainda não conciliados, qual município e um CEP/endereço de referência? Não é necessário comprovar novamente as 30 localidades já documentadas por fontes municipais.'},counts:Object.fromEntries(Object.entries(groups).map(([k,v])=>[k,v.length])),groups},null,2)+'\n');
console.log(counts);
