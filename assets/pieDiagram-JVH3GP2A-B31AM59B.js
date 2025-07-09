import{p as N}from"./chunk-44GW5IO5-DE17w7TP.js";import{_ as i,g as B,s as U,a as q,b as V,q as Z,p as j,l as C,c as H,E as J,I as K,L as Q,d as X,y as Y,G as ee}from"./mermaid.core-CmNrRQj5.js";import{p as te}from"./radar-VG2SY3DT-Cc0Z1La_.js";import{f as z,o as ae,g as re}from"./AssistantApp-Dh-fMm9H.js";import"./index-DgZS7GZ6.js";import"./min-Bj_wVhvu.js";import"./auth-DGQGWwA_.js";var ie=ee.pie,D={sections:new Map,showData:!1},h=D.sections,w=D.showData,se=structuredClone(ie),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=D.showData,Y()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),pe=i(e=>{w=e},"setShowData"),de=i(()=>w,"getShowData"),G={getConfig:oe,clear:ne,setDiagramTitle:j,getDiagramTitle:Z,setAccTitle:V,getAccTitle:q,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:pe,getShowData:de},ge=i((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await te("pie",e);C.debug(a),ge(a,G)},"parse")},fe=i(e=>`
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
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return re().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,F,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=H(),T=J(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,m=c,S=K(a),l=S.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:r}=y;let[A]=Q(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,c)/2-$,W=z().innerRadius(0).outerRadius(g),I=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=me(E),L=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=ae(L);l.selectAll("mySlices").data(v).enter().append("path").attr("d",W).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let b=0;E.forEach(t=>{b+=t}),l.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/b*100).toFixed(0)+"%").attr("transform",t=>"translate("+I.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+d,O=f*p.domain().length/2,P=12*o,R=u*f-O;return"translate("+P+","+R+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const M=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+o+d+M;S.attr("viewBox",`0 0 ${k} ${c}`),X(S,c,k,T.useMaxWidth)},"draw"),ve={draw:Se},Ae={parser:ue,db:G,renderer:ve,styles:he};export{Ae as diagram};
