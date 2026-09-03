import{p as tt}from"./chunk-JWPE2WC7-DGXXuCOx.js";import{g as et,s as at,a as rt,b as it,p as ot,o as nt,_ as l,l as E,c as st,B as lt,F as ct,G as dt,d as pt,q as gt,D as ht}from"./mermaid.core-CR3Yb1ht.js";import{p as ft}from"./cynefin-OW5HDTMX-DDiKAZkO.js";import{Q as I,S as mt,U as ut}from"./reduxStore-DxrGyG1u.js";import"./index-C8AmIZWe.js";import"./isObject-CGZ9pm3u.js";import"./llm-DwD9iteG.js";import"./folderJsonFiles-Dn6_X4BW.js";import"./collectionsThunks-wpqwGnsT.js";import"./durability-BIoLhEUU.js";import"./slackSocketMode-BkDAKaZl.js";import"./publicImagesSlice-Br7yVxro.js";import"./api-BgYWigd1.js";import"./userImagesSlice-C-eq7yMN.js";import"./ingestDocument-BOZRtYUU.js";var vt=ht.pie,R={sections:new Map,showData:!1},T=R.sections,F=R.showData,St=structuredClone(vt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{T=new Map,F=R.showData,gt()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),E.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>T,"getSections"),Dt=l(t=>{F=t},"setShowData"),yt=l(()=>F,"getShowData"),U={getConfig:xt,clear:wt,setDiagramTitle:nt,getDiagramTitle:ot,setAccTitle:it,getAccTitle:rt,setAccDescription:at,getAccDescription:et,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},Tt=l((t,a)=>{tt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{const a=await ft("pie",t);E.debug(a),Tt(a,U)},"parse")},At=l(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),_t=At,kt=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),L=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return ut().value(n=>n.value).sort(null)(L)},"createPieArcs"),zt=l((t,a,L,W)=>{E.debug(`rendering pie chart
`+t);const n=W.db,u=st(),h=lt(n.getConfig(),u.pie),G=40,i=18,c=4,C=450,S=C,b=ct(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[H]=dt(o.pieOuterStrokeWidth);H??=2;const q=h.legendPosition,M=h.textPosition,Q=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,f=Math.min(S,C)/2-G,V=I().innerRadius(Q*f).outerRadius(f),X=I().innerRadius(f*M).outerRadius(f*M),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",f+H/2).attr("class","pieOuterCircle");const D=n.getSections(),Z=kt(D),j=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const O=Z.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=mt(j).domain([...D.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",V).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+X.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const J=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),m=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");m.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),m.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...m.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let y=C,k=S+G;const s=i+c,z=w.length*s;switch(q){case"center":m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=z,m.attr("transform",(e,r)=>{const d=f,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${z+s})`);break;case"bottom":y+=z,m.attr("transform",(e,r)=>{const d=-f-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":k+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=-f-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:k+=i+c+v,m.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const P=J.node()?.getBoundingClientRect().width??0,K=S/2-P/2,Y=S/2+P/2,B=Math.min(0,K),N=Math.max(k,Y)-B;b.attr("viewBox",`${B} 0 ${N} ${y}`),pt(b,y,N,h.useMaxWidth)},"draw"),Et={draw:zt},Xt={parser:bt,db:U,renderer:Et,styles:_t};export{Xt as diagram};
