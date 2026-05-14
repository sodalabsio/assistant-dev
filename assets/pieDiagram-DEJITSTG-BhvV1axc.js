import{g as X,s as Z,a as J,b as Q,q as Y,p as tt,_ as s,l as w,c as et,G as at,K as it,L as rt,d as st,z as ot,H as nt}from"./mermaid.core-BOokYfsr.js";import{p as lt}from"./chunk-4BX2VUAB-DiyMvmMo.js";import{p as ct}from"./wardley-RL74JXVD-OT5seyOQ.js";import{h as G,o as dt,j as pt}from"./reduxStore-DIsQOgPn.js";import"./index-tAUDcPKR.js";import"./isObjectLike-dcyfMnW4.js";import"./min-DQhUBizA.js";import"./_baseUniq-DkRAZodx.js";import"./isSymbol-FP8h27MX.js";import"./chunk-B3F52NIX-CT7BxWYC.js";var gt=nt.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,ht=structuredClone(gt),ut=s(()=>structuredClone(ht),"getConfig"),ft=s(()=>{u=new Map,D=C.showData,ot()},"clear"),mt=s(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(t)||(u.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),vt=s(()=>u,"getSections"),xt=s(t=>{D=t},"setShowData"),St=s(()=>D,"getShowData"),L={getConfig:ut,clear:ft,setDiagramTitle:tt,getDiagramTitle:Y,setAccTitle:Q,getAccTitle:J,setAccDescription:Z,getAccDescription:X,addSection:mt,getSections:vt,setShowData:xt,getShowData:St},wt=s((t,a)=>{lt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Ct={parse:s(async t=>{const a=await ct("pie",t);w.debug(a),wt(a,L)},"parse")},Dt=s(t=>`
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
`,"getStyles"),$t=Dt,yt=s(t=>{const a=[...t.values()].reduce((r,n)=>r+n,0),$=[...t.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return pt().value(r=>r.value).sort(null)($)},"createPieArcs"),Tt=s((t,a,$,y)=>{w.debug(`rendering pie chart
`+t);const r=y.db,n=et(),T=at(r.getConfig(),n.pie),A=40,o=18,p=4,c=450,d=c,f=it(a),l=f.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[b]=rt(i.pieOuterStrokeWidth);b??=2;const _=T.textPosition,g=Math.min(d,c)/2-A,M=G().innerRadius(0).outerRadius(g),B=G().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+b/2).attr("class","pieOuterCircle");const h=r.getSections(),O=yt(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(e=>{m+=e});const E=O.filter(e=>(e.data.value/m*100).toFixed(0)!=="0"),v=dt(P).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",M).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/m*100).toFixed(0)+"%").attr("transform",e=>"translate("+B.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([e,S])=>({label:e,value:S})),x=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,S)=>{const F=o+p,H=F*k.length/2,K=12*o,V=S*F-H;return"translate("+K+","+V+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),x.append("text").attr("x",o+p).attr("y",o-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const N=Math.max(...x.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),U=d+A+o+p+N,R=I.node()?.getBoundingClientRect().width??0,j=d/2-R/2,q=d/2+R/2,z=Math.min(0,j),W=Math.max(U,q)-z;f.attr("viewBox",`${z} 0 ${W} ${c}`),st(f,c,W,T.useMaxWidth)},"draw"),At={draw:Tt},Bt={parser:Ct,db:L,renderer:At,styles:$t};export{Bt as diagram};
