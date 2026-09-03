import{g as X,s as Z,a as j,b as J,q as Y,p as tt,_ as o,l as w,c as et,G as at,K as it,L as rt,d as ot,z as st,H as nt}from"./mermaid.core-VDNlwm8w.js";import{p as lt}from"./chunk-4BX2VUAB-C_TNz_Ho.js";import{p as ct}from"./wardley-L42UT6IY-Dc_p9dAP.js";import{Q as G,S as dt,U as pt}from"./reduxStore--G-dQMYX.js";import"./index-D0Pghe4O.js";import"./llm-UpyGmqeN.js";import"./folderJsonFiles-6Bu3joxN.js";import"./collectionsThunks-BLol4fqD.js";import"./durability-DxqEJTkV.js";import"./slackSocketMode-CxUbVbs5.js";import"./publicImagesSlice-0bQu-0pv.js";import"./api-CI7Twwk3.js";import"./userImagesSlice-B7WRnMTo.js";import"./ingestDocument-C-dyEhQi.js";var gt=nt.pie,C={sections:new Map,showData:!1},m=C.sections,D=C.showData,ht=structuredClone(gt),mt=o(()=>structuredClone(ht),"getConfig"),ut=o(()=>{m=new Map,D=C.showData,st()},"clear"),ft=o(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);m.has(t)||(m.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),vt=o(()=>m,"getSections"),St=o(t=>{D=t},"setShowData"),xt=o(()=>D,"getShowData"),L={getConfig:mt,clear:ut,setDiagramTitle:tt,getDiagramTitle:Y,setAccTitle:J,getAccTitle:j,setAccDescription:Z,getAccDescription:X,addSection:ft,getSections:vt,setShowData:St,getShowData:xt},wt=o((t,a)=>{lt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Ct={parse:o(async t=>{const a=await ct("pie",t);w.debug(a),wt(a,L)},"parse")},Dt=o(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
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
`,"getStyles"),$t=Dt,yt=o(t=>{const a=[...t.values()].reduce((r,n)=>r+n,0),$=[...t.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return pt().value(r=>r.value).sort(null)($)},"createPieArcs"),Tt=o((t,a,$,y)=>{w.debug(`rendering pie chart
`+t);const r=y.db,n=et(),T=at(r.getConfig(),n.pie),A=40,s=18,p=4,c=450,d=c,u=it(a),l=u.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[b]=rt(i.pieOuterStrokeWidth);b??=2;const _=T.textPosition,g=Math.min(d,c)/2-A,M=G().innerRadius(0).outerRadius(g),B=G().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+b/2).attr("class","pieOuterCircle");const h=r.getSections(),O=yt(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let f=0;h.forEach(e=>{f+=e});const E=O.filter(e=>(e.data.value/f*100).toFixed(0)!=="0"),v=dt(P).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",M).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/f*100).toFixed(0)+"%").attr("transform",e=>"translate("+B.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([e,x])=>({label:e,value:x})),S=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,x)=>{const F=s+p,K=F*k.length/2,Q=12*s,V=x*F-K;return"translate("+Q+","+V+")"});S.append("rect").attr("width",s).attr("height",s).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),S.append("text").attr("x",s+p).attr("y",s-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const N=Math.max(...S.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),U=d+A+s+p+N,R=I.node()?.getBoundingClientRect().width??0,q=d/2-R/2,H=d/2+R/2,z=Math.min(0,q),W=Math.max(U,H)-z;u.attr("viewBox",`${z} 0 ${W} ${c}`),ot(u,c,W,T.useMaxWidth)},"draw"),At={draw:Tt},Nt={parser:Ct,db:L,renderer:At,styles:$t};export{Nt as diagram};
