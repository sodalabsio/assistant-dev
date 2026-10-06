import{p as tt}from"./chunk-JWPE2WC7-B42fHcQK.js";import{g as et,s as at,a as rt,b as it,p as ot,o as nt,_ as l,l as E,c as st,B as lt,F as ct,G as dt,d as pt,q as gt,D as ht}from"./mermaid.core-BQoviTl7.js";import{p as mt}from"./cynefin-OW5HDTMX-8Le8QGGm.js";import{W as I,X as ft,Y as ut}from"./reduxStore-DaQvF0vQ.js";import"./index-DrFymM7J.js";import"./isObject-CGZ9pm3u.js";import"./llm-C2Vo4Q9F.js";import"./schema-DDBIr7SE.js";import"./csrf-BHQQmLsK.js";import"./durability-BaP8PYvv.js";import"./boot-DRp6pwcm.js";import"./collectionsThunks-CKvIjkGV.js";import"./createSvgIcon-l_8dDiDB.js";import"./slackSocketMode-EP1qtmN8.js";import"./publicImagesSlice-BCHNBLqV.js";import"./api-BBJjLLnb.js";import"./userImagesSlice-D0paUKrW.js";import"./ingestDocument-BQFKnDZ8.js";import"./TextField-DRxlmaHB.js";var vt=ht.pie,R={sections:new Map,showData:!1},T=R.sections,W=R.showData,St=structuredClone(vt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{T=new Map,W=R.showData,gt()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),E.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>T,"getSections"),Dt=l(t=>{W=t},"setShowData"),yt=l(()=>W,"getShowData"),U={getConfig:xt,clear:wt,setDiagramTitle:nt,getDiagramTitle:ot,setAccTitle:it,getAccTitle:rt,setAccDescription:at,getAccDescription:et,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},Tt=l((t,a)=>{tt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),bt={parse:l(async t=>{const a=await mt("pie",t);E.debug(a),Tt(a,U)},"parse")},At=l(t=>`
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
`,"getStyles"),_t=At,kt=l(t=>{const a=[...t.values()].reduce((n,u)=>n+u,0),F=[...t.entries()].map(([n,u])=>({label:n,value:u})).filter(n=>n.value/a*100>=1);return ut().value(n=>n.value).sort(null)(F)},"createPieArcs"),zt=l((t,a,F,L)=>{E.debug(`rendering pie chart
`+t);const n=L.db,u=st(),h=lt(n.getConfig(),u.pie),G=40,i=18,c=4,C=450,S=C,b=ct(a),$=b.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[H]=dt(o.pieOuterStrokeWidth);H??=2;const X=h.legendPosition,M=h.textPosition,q=h.donutHole>0&&h.donutHole<=.9?h.donutHole:0,m=Math.min(S,C)/2-G,V=I().innerRadius(q*m).outerRadius(m),Y=I().innerRadius(m*M).outerRadius(m*M),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",m+H/2).attr("class","pieOuterCircle");const D=n.getSections(),Z=kt(D),j=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const O=Z.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=ft(j).domain([...D.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",V).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return h.highlightSlice==="hover"?r+=" highlightedOnHover":h.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+Y.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const J=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let y=C,k=S+G;const s=i+c,z=w.length*s;switch(X){case"center":f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"top":y+=z,f.attr("transform",(e,r)=>{const d=m,p=-v/2-(i+c),g=r*s-d;return`translate(${p}, ${g})`}),x.attr("transform",()=>`translate(0, ${z+s})`);break;case"bottom":y+=z,f.attr("transform",(e,r)=>{const d=-m-s,p=-v/2-(i+c),g=r*s-d;return"translate("+p+","+g+")"});break;case"left":k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=-m-(i+c),g=r*s-d;return"translate("+p+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:k+=i+c+v,f.attr("transform",(e,r)=>{const d=s*w.length/2,p=12*i,g=r*s-d;return"translate("+p+","+g+")"});break}const P=J.node()?.getBoundingClientRect().width??0,K=S/2-P/2,Q=S/2+P/2,B=Math.min(0,K),N=Math.max(k,Q)-B;b.attr("viewBox",`${B} 0 ${N} ${y}`),pt(b,y,N,h.useMaxWidth)},"draw"),Et={draw:zt},Kt={parser:bt,db:U,renderer:Et,styles:_t};export{Kt as diagram};
