import{p as N}from"./chunk-353BL4L5-tu8K38D5.js";import{_ as i,g as B,s as U,a as j,b as q,q as V,p as Z,l as C,c as H,E as J,I as K,L as Q,d as X,y as Y,G as ee}from"./mermaid.core-vK6mJeOx.js";import{p as te}from"./treemap-6Y5VK53G-DWl_ZpJ_.js";import{j as z,o as ae,k as re}from"./AssistantApp-CfUjHlWK.js";import"./index-CfSUjS2f.js";import"./min-CNz40lA4.js";import"./chunk-B3F52NIX-BuGdF0ic.js";var ie=ee.pie,D={sections:new Map,showData:!1},h=D.sections,w=D.showData,se=structuredClone(ie),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=D.showData,Y()},"clear"),le=i(({label:e,value:t})=>{h.has(e)||(h.set(e,t),C.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),ce=i(()=>h,"getSections"),de=i(e=>{w=e},"setShowData"),pe=i(()=>w,"getShowData"),G={getConfig:oe,clear:ne,setDiagramTitle:Z,getDiagramTitle:V,setAccTitle:q,getAccTitle:j,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,t)=>{N(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),ue={parse:i(async e=>{const t=await te("pie",e);C.debug(t),ge(t,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const t=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return re().value(s=>s.value)(t)},"createPieArcs"),Se=i((e,t,F,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=H(),T=J(n.getConfig(),y.pie),$=40,o=18,p=4,c=450,m=c,S=K(t),l=S.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:a}=y;let[A]=Q(a.pieOuterStrokeWidth);A??=2;const _=T.textPosition,g=Math.min(m,c)/2-$,W=z().innerRadius(0).outerRadius(g),I=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=me(E),L=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],d=ae(L);l.selectAll("mySlices").data(v).enter().append("path").attr("d",W).attr("fill",r=>d(r.data.label)).attr("class","pieCircle");let b=0;E.forEach(r=>{b+=r}),l.selectAll("mySlices").data(v).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+I.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(r,u)=>{const f=o+p,O=f*d.domain().length/2,P=12*o,R=u*f-O;return"translate("+P+","+R+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",d).style("stroke",d),x.data(v).append("text").attr("x",o+p).attr("y",o-p).text(r=>{const{label:u,value:f}=r.data;return n.getShowData()?`${u} [${f}]`:u});const M=Math.max(...x.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),k=m+$+o+p+M;S.attr("viewBox",`0 0 ${k} ${c}`),X(S,c,k,T.useMaxWidth)},"draw"),ve={draw:Se},Ae={parser:ue,db:G,renderer:ve,styles:he};export{Ae as diagram};
