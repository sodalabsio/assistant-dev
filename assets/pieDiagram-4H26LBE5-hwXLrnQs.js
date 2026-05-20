import{g as X,s as Z,a as J,b as Q,q as Y,p as ee,_ as s,l as w,c as te,G as ae,K as ie,L as re,d as se,z as oe,H as ne}from"./mermaid.core-DYp7gxRF.js";import{p as le}from"./chunk-4BX2VUAB-D664kv9U.js";import{p as ce}from"./wardley-L42UT6IY-DrtxJF5w.js";import{h as G,o as de,j as pe}from"./AppDataProvider-CdRuoVjE.js";import"./index-CNgtZFTM.js";import"./chunk-B3F52NIX-D-3Syrus.js";var ge=ne.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,he=structuredClone(ge),ue=s(()=>structuredClone(he),"getConfig"),fe=s(()=>{u=new Map,D=C.showData,oe()},"clear"),me=s(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ve=s(()=>u,"getSections"),xe=s(e=>{D=e},"setShowData"),Se=s(()=>D,"getShowData"),L={getConfig:ue,clear:fe,setDiagramTitle:ee,getDiagramTitle:Y,setAccTitle:Q,getAccTitle:J,setAccDescription:Z,getAccDescription:X,addSection:me,getSections:ve,setShowData:xe,getShowData:Se},we=s((e,a)=>{le(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Ce={parse:s(async e=>{const a=await ce("pie",e);w.debug(a),we(a,L)},"parse")},De=s(e=>`
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
`,"getStyles"),$e=De,ye=s(e=>{const a=[...e.values()].reduce((r,n)=>r+n,0),$=[...e.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return pe().value(r=>r.value).sort(null)($)},"createPieArcs"),Te=s((e,a,$,y)=>{w.debug(`rendering pie chart
`+e);const r=y.db,n=te(),T=ae(r.getConfig(),n.pie),A=40,o=18,p=4,c=450,d=c,f=ie(a),l=f.append("g");l.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[b]=re(i.pieOuterStrokeWidth);b??=2;const _=T.textPosition,g=Math.min(d,c)/2-A,M=G().innerRadius(0).outerRadius(g),B=G().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+b/2).attr("class","pieOuterCircle");const h=r.getSections(),O=ye(h),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(t=>{m+=t});const E=O.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),v=de(P).domain([...h.keys()]);l.selectAll("mySlices").data(E).enter().append("path").attr("d",M).attr("fill",t=>v(t.data.label)).attr("class","pieCircle"),l.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+B.centroid(t)+")").style("text-anchor","middle").attr("class","slice");const I=l.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([t,S])=>({label:t,value:S})),x=l.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{const F=o+p,H=F*k.length/2,K=12*o,V=S*F-H;return"translate("+K+","+V+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",t=>v(t.label)).style("stroke",t=>v(t.label)),x.append("text").attr("x",o+p).attr("y",o-p).text(t=>r.getShowData()?`${t.label} [${t.value}]`:t.label);const N=Math.max(...x.selectAll("text").nodes().map(t=>t?.getBoundingClientRect().width??0)),U=d+A+o+p+N,R=I.node()?.getBoundingClientRect().width??0,j=d/2-R/2,q=d/2+R/2,z=Math.min(0,j),W=Math.max(U,q)-z;f.attr("viewBox",`${z} 0 ${W} ${c}`),se(f,c,W,T.useMaxWidth)},"draw"),Ae={draw:Te},Fe={parser:Ce,db:L,renderer:Ae,styles:$e};export{Fe as diagram};
