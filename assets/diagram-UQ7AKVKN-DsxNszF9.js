import{p as I}from"./chunk-JWPE2WC7-DIo3Mb4G.js";import{s as _,g as F,p as D,o as E,a as z,b as P,_ as c,F as G,q as B,B as w,z as C,D as W,l as b,H,d as V}from"./mermaid.core-Bfa10bMx.js";import{p as j}from"./cynefin-OW5HDTMX-MHjBPAjP.js";import"./index-CKNUmH_F.js";import"./reduxStore-gx0CD172.js";import"./recovery-DBJbLsRX.js";import"./boot-D9KcHJz_.js";import"./keyUtils-Byiz9Hk3.js";import"./artifactVersionsSlice-B9WBrMSw.js";import"./redux-toolkit.modern-BCXeeUgq.js";import"./conversationCatalogTable-D8t_wYL7.js";import"./delegationToolNames-BWcF3UND.js";import"./durability-woD-Z6z5.js";import"./frontmatter-1kjWOa6N.js";import"./customProviders-BJa3hv1V.js";import"./accountRouting-DdNHrjb9.js";import"./accessStore-DKT8qv0v.js";import"./createSvgIcon-CEZtI9CT.js";import"./llm-vs9CI7KB.js";import"./csrf-Dwpw9bZ9.js";import"./settingsSlice-Bt53AcTN.js";import"./slackSocketMode-DGCVrBVL.js";import"./collectionsThunks-Cid-d2f0.js";import"./VSCodeBridgeManager-lXk5KNtG.js";import"./createAgentHostDriver-zsQw93EK.js";import"./publicImagesSlice-Cr7VkXGL.js";import"./api-BzaaWxIM.js";import"./userImagesSlice-C44PjpEz.js";import"./extractDocument-Cvr4HGHR.js";import"./TextField-DhblBhEg.js";import"./usage-iNGCGQCU.js";import"./accountRouter-DtXRuGdv.js";import"./resolveAgentHost-C8I9Nm2l.js";import"./isObject-CGZ9pm3u.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},y=32,A={axes:[],curves:[],options:x},g=structuredClone(A),U=W.radar,X=c(()=>w({...U,...C().radar}),"getConfig"),M=c(()=>g.axes,"getAxes"),q=c(()=>g.curves,"getCurves"),K=c(()=>g.options,"getOptions"),N=c(a=>{g.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),Y=c(a=>{g.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:Z(t.entries)}))},"setCurves"),Z=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>s.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),J=c(a=>{const t=a.reduce((e,r)=>(e[r.name]=r,e),{});g.options={showLegend:t.showLegend?.value??x.showLegend,ticks:t.ticks?.value??x.ticks,max:t.max?.value??x.max,min:t.min?.value??x.min,graticule:t.graticule?.value??x.graticule},g.options.ticks>y&&(b.warn(`Radar diagram ticks (${g.options.ticks}) exceeds maximum allowed (${y}). Using ${y} instead.`),g.options.ticks=y)},"setOptions"),Q=c(()=>{B(),g=structuredClone(A)},"clear"),$={getAxes:M,getCurves:q,getOptions:K,setAxes:N,setCurves:Y,setOptions:J,getConfig:X,clear:Q,setAccTitle:P,getAccTitle:z,setDiagramTitle:E,getDiagramTitle:D,getAccDescription:F,setAccDescription:_},tt=c(a=>{I(a,$);const{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),et={parse:c(async a=>{const t=await j("radar",a);b.debug(t),tt(t)},"parse")},at=c((a,t,e,r)=>{const s=r.db,i=s.getAxes(),l=s.getCurves(),o=s.getOptions(),n=s.getConfig(),p=s.getDiagramTitle(),m=G(t),d=rt(m,n),u=o.max??Math.max(...l.map(f=>Math.max(...f.entries))),h=o.min,v=Math.min(n.width,n.height)/2;st(d,i,v,o.ticks,o.graticule),ot(d,i,v,n),L(d,i,l,h,u,o.graticule,n),k(d,l,o.showLegend,n),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-n.height/2-n.marginTop)},"draw"),rt=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return V(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),st=c((a,t,e,r,s)=>{if(s==="circle")for(let i=0;i<r;i++){const l=e*(i+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(s==="polygon"){const i=t.length;for(let l=0;l<r;l++){const o=e*(l+1)/r,n=t.map((p,m)=>{const d=2*m*Math.PI/i-Math.PI/2,u=o*Math.cos(d),h=o*Math.sin(d);return`${u},${h}`}).join(" ");a.append("polygon").attr("points",n).attr("class","radarGraticule")}}},"drawGraticule"),ot=c((a,t,e,r)=>{const s=t.length;for(let i=0;i<s;i++){const l=t[i].label,o=2*i*Math.PI/s-Math.PI/2,n=Math.cos(o),p=Math.sin(o);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*n).attr("y2",e*r.axisScaleFactor*p).attr("class","radarAxisLine");const m=n>.01?"start":n<-.01?"end":"middle",d=p>.01?"hanging":p<-.01?"auto":"central",u=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*n+u*n).attr("y",e*r.axisLabelFactor*p+u*p).attr("text-anchor",m).attr("dominant-baseline",d).attr("class","radarAxisLabel")}},"drawAxes");function L(a,t,e,r,s,i,l){const o=t.length,n=Math.min(l.width,l.height)/2;e.forEach((p,m)=>{if(p.entries.length!==o)return;const d=p.entries.map((u,h)=>{const v=2*Math.PI*h/o-Math.PI/2,f=T(u,r,s,n),O=f*Math.cos(v),R=f*Math.sin(v);return{x:O,y:R}});i==="circle"?a.append("path").attr("d",S(d,l.curveTension)).attr("class",`radarCurve-${m}`):i==="polygon"&&a.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}c(L,"drawCurves");function T(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}c(T,"relativeRadius");function S(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const i=a[(s-1+e)%e],l=a[s],o=a[(s+1)%e],n=a[(s+2)%e],p={x:l.x+(o.x-i.x)*t,y:l.y+(o.y-i.y)*t},m={x:o.x-(n.x-l.x)*t,y:o.y-(n.y-l.y)*t};r+=` C${p.x},${p.y} ${m.x},${m.y} ${o.x},${o.y}`}return`${r} Z`}c(S,"closedRoundCurve");function k(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,i=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((o,n)=>{const p=a.append("g").attr("transform",`translate(${s}, ${i+n*l})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${n}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(o.label)})}c(k,"drawLegend");var nt={draw:at},it=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),lt=c(a=>{const t=H(),e=C(),r=w(t,e.themeVariables),s=w(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),ct=c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=lt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t,e)}
	`},"styles"),jt={parser:et,db:$,renderer:nt,styles:ct};export{jt as diagram};
