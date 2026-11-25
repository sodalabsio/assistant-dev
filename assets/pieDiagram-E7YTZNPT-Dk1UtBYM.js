import{p as tt}from"./chunk-JWPE2WC7-l_aX545y.js";import{g as et,s as at,a as rt,b as it,p as ot,o as nt,_ as l,l as E,c as st,B as lt,F as ct,G as pt,d as dt,q as gt,D as mt}from"./mermaid.core-B3rHPW5V.js";import{p as ht}from"./cynefin-OW5HDTMX-3tXwnrm5.js";import{b2 as I,b3 as ft,b4 as ut}from"./reduxStore-AL64WkjP.js";import"./index-CKi47Ckh.js";import"./isObject-CGZ9pm3u.js";import"./recovery-nf3vfsQ-.js";import"./boot-DSBLJXVq.js";import"./keyUtils-Byiz9Hk3.js";import"./artifactVersionsSlice-CNydv2mD.js";import"./redux-toolkit.modern-BOkisxJQ.js";import"./conversationCatalogTable-D8t_wYL7.js";import"./delegationToolNames-BWcF3UND.js";import"./durability-BunWTrA1.js";import"./frontmatter-1kjWOa6N.js";import"./customProviders-BUHgAlVm.js";import"./accountRouting-C2n3xzY4.js";import"./accessStore-DKT8qv0v.js";import"./createSvgIcon-B79S6WdL.js";import"./llm-DX4Liurh.js";import"./csrf-Dwpw9bZ9.js";import"./settingsSlice-DdWcbD1n.js";import"./slackSocketMode-CRCHpoOr.js";import"./collectionsThunks-IY0yf-Vg.js";import"./VSCodeBridgeManager-Cl2E7Hjk.js";import"./createAgentHostDriver-DVjpUhon.js";import"./publicImagesSlice-BhJM-lxJ.js";import"./api-C8gBUo9V.js";import"./userImagesSlice-DpLVOJXW.js";import"./extractDocument-DXIyRmGz.js";import"./TextField-Dt6_kx4K.js";import"./usage-Cnxqg1-r.js";import"./accountRouter-BHBVQujp.js";import"./resolveAgentHost-w_9iolhJ.js";var vt=mt.pie,R={sections:new Map,showData:!1},b=R.sections,F=R.showData,St=structuredClone(vt),xt=l(()=>structuredClone(St),"getConfig"),wt=l(()=>{b=new Map,F=R.showData,gt()},"clear"),Ct=l(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);b.has(t)||(b.set(t,a),E.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),$t=l(()=>b,"getSections"),Dt=l(t=>{F=t},"setShowData"),yt=l(()=>F,"getShowData"),U={getConfig:xt,clear:wt,setDiagramTitle:nt,getDiagramTitle:ot,setAccTitle:it,getAccTitle:rt,setAccDescription:at,getAccDescription:et,addSection:Ct,getSections:$t,setShowData:Dt,getShowData:yt},bt=l((t,a)=>{tt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:l(async t=>{const a=await ht("pie",t);E.debug(a),bt(a,U)},"parse")},At=l(t=>`
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
`+t);const n=W.db,u=st(),m=lt(n.getConfig(),u.pie),G=40,i=18,c=4,C=450,S=C,T=ct(a),$=T.append("g");$.attr("transform","translate("+S/2+","+C/2+")");const{themeVariables:o}=u;let[H]=pt(o.pieOuterStrokeWidth);H??=2;const q=m.legendPosition,M=m.textPosition,V=m.donutHole>0&&m.donutHole<=.9?m.donutHole:0,h=Math.min(S,C)/2-G,X=I().innerRadius(V*h).outerRadius(h),Z=I().innerRadius(h*M).outerRadius(h*M),x=$.append("g");x.append("circle").attr("cx",0).attr("cy",0).attr("r",h+H/2).attr("class","pieOuterCircle");const D=n.getSections(),j=kt(D),J=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let A=0;D.forEach(e=>{A+=e});const O=j.filter(e=>(e.data.value/A*100).toFixed(0)!=="0"),_=ft(J).domain([...D.keys()]);x.selectAll("mySlices").data(O).enter().append("path").attr("d",X).attr("fill",e=>_(e.data.label)).attr("class",e=>{let r="pieCircle";return m.highlightSlice==="hover"?r+=" highlightedOnHover":m.highlightSlice===e.data.label&&(r+=" highlighted"),r}),x.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/A*100).toFixed(0)+"%").attr("transform",e=>"translate("+Z.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const K=$.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),w=[...D.entries()].map(([e,r])=>({label:e,value:r})),f=$.selectAll(".legend").data(w).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",e=>_(e.label)).style("stroke",e=>_(e.label)),f.append("text").attr("x",i+c).attr("y",i-c).text(e=>n.getShowData()?`${e.label} [${e.value}]`:e.label);const v=Math.max(...f.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let y=C,k=S+G;const s=i+c,z=w.length*s;switch(q){case"center":f.attr("transform",(e,r)=>{const p=s*w.length/2,d=-v/2-(i+c),g=r*s-p;return"translate("+d+","+g+")"});break;case"top":y+=z,f.attr("transform",(e,r)=>{const p=h,d=-v/2-(i+c),g=r*s-p;return`translate(${d}, ${g})`}),x.attr("transform",()=>`translate(0, ${z+s})`);break;case"bottom":y+=z,f.attr("transform",(e,r)=>{const p=-h-s,d=-v/2-(i+c),g=r*s-p;return"translate("+d+","+g+")"});break;case"left":k+=i+c+v,f.attr("transform",(e,r)=>{const p=s*w.length/2,d=-h-(i+c),g=r*s-p;return"translate("+d+","+g+")"}),x.attr("transform",()=>`translate(${v+i+c}, 0)`);break;default:k+=i+c+v,f.attr("transform",(e,r)=>{const p=s*w.length/2,d=12*i,g=r*s-p;return"translate("+d+","+g+")"});break}const P=K.node()?.getBoundingClientRect().width??0,Q=S/2-P/2,Y=S/2+P/2,B=Math.min(0,Q),N=Math.max(k,Y)-B;T.attr("viewBox",`${B} 0 ${N} ${y}`),dt(T,y,N,m.useMaxWidth)},"draw"),Et={draw:zt},me={parser:Tt,db:U,renderer:Et,styles:_t};export{me as diagram};
