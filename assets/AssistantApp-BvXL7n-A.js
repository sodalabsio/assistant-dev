const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-DwDS7ryW.js","assets/index-BuGzkSPn.js","assets/index-DJjK7Okd.css","assets/slackSocketMode-5TYJ2hHk.js","assets/oauth-yImE6aai.js","assets/durability-4iL47alT.js","assets/api-CqL7sijx.js","assets/reduxStore-2LgY-uv0.css","assets/faultExport-DYKvaQJt.js","assets/Assistant-Cr6psl3c.js","assets/ReduxAppDataRoot-B_xLkRIQ.js","assets/cronStream-CpnWPMtL.js","assets/canonicalProjectPatchSet-BPyMkR_3.js","assets/oauth-Cyy7pOl0.js","assets/App-BFEECHdw.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/Assistant-rclguOZ9.css"])))=>i.map(i=>d[i]);
import{c as Rn,r as ie,j as W,_ as ba,R as mc,b as gc}from"./index-BuGzkSPn.js";import{ce as _c,cf as eo,cg as vc,ch as Pn,ci as qi,cj as ji,ck as xc,aE as Sc,x as Rs,cl as Mc,j as yc,cm as Ec,cn as vl,co as Tc,bZ as to,cp as bc,cq as wc,cr as Ac,cs as Rc,ct as Cc,cu as Pc,cv as Lc,cw as no,cx as Dc,cy as Uc}from"./reduxStore-DwDS7ryW.js";import{d as Xn,R as Ic,a as Nc}from"./ReduxAppDataRoot-B_xLkRIQ.js";import{m as Fc,n as Oc,o as Bc,c as zc,q as kc,t as Hc,S as xl}from"./durability-4iL47alT.js";import{s as Vc,g as Gc}from"./App-BFEECHdw.js";import{u as Wc,m as wa,o as Xc}from"./slackSocketMode-5TYJ2hHk.js";const qc=n=>{const e=Rn.c(4),{children:t}=n,i=ie.useSyncExternalStore(_c,eo,eo);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[0]=r):r=e[0],ie.useEffect(Zc,r);let s;return e[1]!==t||e[2]!==i?(s=W.jsx(vc.Provider,{value:i,children:t}),e[1]=t,e[2]=i,e[3]=s):s=e[3],s};function jc(n){qi(n)&&ji("keyboard")}function Yc(n){qi(n)&&ji("pointer")}function $c(n){qi(n)&&ji("touch")}function Kc(n){qi(n)&&ji("wheel")}function Zc(){if(typeof window>"u"||typeof document>"u")return;let n=0;const e=jc,t=Yc,i=a=>{if(!qi(a))return;const o=Date.now();o-n<1e3||(n=o,ji("pointer",o))},r=$c,s=Kc;return document.addEventListener("keydown",e,{passive:!0,capture:!0}),document.addEventListener("pointerdown",t,{passive:!0,capture:!0}),document.addEventListener("pointermove",i,{passive:!0,capture:!0}),document.addEventListener("touchstart",r,{passive:!0,capture:!0}),document.addEventListener("wheel",s,{passive:!0,capture:!0}),document.addEventListener("visibilitychange",Pn),window.addEventListener("focus",Pn),window.addEventListener("blur",Pn),Pn(),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",i,{capture:!0}),document.removeEventListener("touchstart",r,{capture:!0}),document.removeEventListener("wheel",s,{capture:!0}),document.removeEventListener("visibilitychange",Pn),window.removeEventListener("focus",Pn),window.removeEventListener("blur",Pn)}}const io={critical:{background:"#3d0d0f",border:"#f85149",text:"#ffb4ac"},warning:{background:"#332600",border:"#d29922",text:"#f0d37a"}},ro=180,Jc=n=>{const e=Rn.c(34),{alert:t}=n,[i,r]=ie.useState(!1),s=io[t.severity]??io.warning,a=t.message.length>ro,o=i||!a?t.message:`${t.message.slice(0,ro)}…`,c=`1px solid ${s.border}`;let l;e[0]!==s.background||e[1]!==s.text||e[2]!==c?(l={pointerEvents:"auto",backgroundColor:s.background,border:c,color:s.text,borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"flex-start",gap:12,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.45)",fontSize:"0.9rem",lineHeight:1.45},e[0]=s.background,e[1]=s.text,e[2]=c,e[3]=l):l=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d={fontSize:"1.05rem",lineHeight:1.3},e[4]=d):d=e[4];const h=t.severity==="critical"?"🛑":"⚠️";let f;e[5]!==h?(f=W.jsx("span",{"aria-hidden":"true",style:d,children:h}),e[5]=h,e[6]=f):f=e[6];let p,g;e[7]===Symbol.for("react.memo_cache_sentinel")?(p={flex:1,minWidth:0},g={display:"block",marginBottom:2},e[7]=p,e[8]=g):(p=e[7],g=e[8]);let _;e[9]!==t.title?(_=W.jsx("strong",{style:g,children:t.title}),e[9]=t.title,e[10]=_):_=e[10];let m;e[11]===Symbol.for("react.memo_cache_sentinel")?(m={overflowWrap:"anywhere"},e[11]=m):m=e[11];let u;e[12]!==o?(u=W.jsx("span",{style:m,children:o}),e[12]=o,e[13]=u):u=e[13];let E;e[14]!==i||e[15]!==a||e[16]!==s.border?(E=a&&W.jsx("button",{type:"button",onClick:()=>r(eu),style:{marginLeft:8,background:"none",border:"none",color:s.border,cursor:"pointer",padding:0,fontSize:"0.85rem",textDecoration:"underline"},children:i?"Show less":"Show details"}),e[14]=i,e[15]=a,e[16]=s.border,e[17]=E):E=e[17];let b;e[18]!==u||e[19]!==E||e[20]!==_?(b=W.jsxs("div",{style:p,children:[_,u,E]}),e[18]=u,e[19]=E,e[20]=_,e[21]=b):b=e[21];let M;e[22]!==t.id?(M=()=>Oc(t.id),e[22]=t.id,e[23]=M):M=e[23];let L;e[24]!==s.text?(L={background:"none",border:"none",color:s.text,cursor:"pointer",fontSize:"1rem",lineHeight:1,padding:"2px 4px",opacity:.8},e[24]=s.text,e[25]=L):L=e[25];let R;e[26]!==M||e[27]!==L?(R=W.jsx("button",{type:"button","aria-label":"Dismiss storage alert",onClick:M,style:L,children:"×"}),e[26]=M,e[27]=L,e[28]=R):R=e[28];let A;return e[29]!==b||e[30]!==R||e[31]!==l||e[32]!==f?(A=W.jsxs("div",{role:"alert",style:l,children:[f,b,R]}),e[29]=b,e[30]=R,e[31]=l,e[32]=f,e[33]=A):A=e[33],A},Qc=()=>{const n=Rn.c(5),e=Fc();if(e.length===0)return null;let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"fixed",top:0,left:0,right:0,zIndex:1e4,display:"flex",flexDirection:"column",gap:6,padding:"8px 10px",pointerEvents:"none"},n[0]=t):t=n[0];let i;n[1]!==e?(i=e.map(tu),n[1]=e,n[2]=i):i=n[2];let r;return n[3]!==i?(r=W.jsx("div",{style:t,children:i}),n[3]=i,n[4]=r):r=n[4],r};function eu(n){return!n}function tu(n){return W.jsx(Jc,{alert:n},n.id)}function nu(){const n=Rn.c(4),e=Wc(),t=wa();let i,r;return n[0]!==e||n[1]!==t?(i=()=>{e&&Vc(t,e)},r=[e,t],n[0]=e,n[1]=t,n[2]=i,n[3]=r):(i=n[2],r=n[3]),ie.useEffect(i,r),null}const iu="perfHarness",ru="[data-editor-role]",su=20;let Et=!1,Cs="",Ps={},Ls,Ds,Aa=0,Sl=0,kn=null,Bi=0,zi,Us=[];const hn=[],xi=[],Fr=[],Ra=[],Ca=[],qn={eventTiming:!1,longTasks:!1,longAnimationFrames:!1};function Ct(){return typeof performance<"u"?performance.now():Date.now()}function Pa(){return typeof window>"u"?!1:new URL(window.location.href).searchParams.get(iu)==="1"}function La(n){const e=n.target;return e instanceof Element&&!!e.closest(ru)}function au(n){return n.ctrlKey||n.metaKey||n.altKey?!1:n.key.length===1||n.key==="Backspace"||n.key==="Delete"||n.key==="Enter"}function Ml(n){!Et||!La(n)||!au(n)||(kn={at:Ct(),target:n.target})}function yl(n){if(!Et||!La(n))return;const e=Ct(),t=kn&&kn.target===n.target&&e-kn.at<250?kn.at:e;kn=null,hn.push({sequence:++Aa,inputType:n.inputType||"unknown",startedAt:t,serializationMs:0,reduxUpdateMs:0})}function El(){for(let n=hn.length-1;n>=0;n-=1)if(hn[n].paintAt===void 0)return hn[n]}function Tl(n){if(!Et||!La(n))return;let e=El();e||(e={sequence:++Aa,inputType:n instanceof InputEvent&&n.inputType||"unknown",startedAt:Ct(),serializationMs:0,reduxUpdateMs:0},hn.push(e)),e.inputEventAt=Ct();const t=e.sequence;window.requestAnimationFrame(()=>{const i=hn.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Ct();i.paintAt=r,i.inputToPaintMs=r-i.startedAt})}function Xr(n,e){if(typeof PerformanceObserver>"u")return!1;try{if(!(PerformanceObserver.supportedEntryTypes?.includes(n)??!1))return!1;const i=new PerformanceObserver(r=>{if(Et)for(const s of r.getEntries())e(s)});return i.observe({type:n,buffered:!1}),Us.push(i),!0}catch{return!1}}function ou(){qn.eventTiming=Xr("event",n=>{const e=String(n.name||"");if(e!=="keydown"&&e!=="beforeinput"&&e!=="input")return;const t=Number(n.startTime);let i,r=Number.POSITIVE_INFINITY;for(const s of hn){const a=Math.abs(s.startedAt-t);a<r&&a<250&&(i=s,r=a)}i&&(i.eventTimingDurationMs=Math.max(i.eventTimingDurationMs||0,Number(n.duration)||0))}),qn.longTasks=Xr("longtask",n=>{Fr.push({kind:"long-task",startedAt:Number(n.startTime),durationMs:Number(n.duration)})}),qn.longAnimationFrames=Xr("long-animation-frame",n=>{Fr.push({kind:"long-animation-frame",startedAt:Number(n.startTime),durationMs:Number(n.duration),blockingDurationMs:typeof n.blockingDuration=="number"?n.blockingDuration:void 0})})}function bl(n){if(Et){if(zi!==void 0){const e=n-zi;e>=su&&Ra.push(e)}zi=n,Bi=window.requestAnimationFrame(bl)}}function lu(){document.addEventListener("keydown",Ml,!0),document.addEventListener("beforeinput",yl,!0),document.addEventListener("input",Tl,!0),ou(),zi=void 0,Bi=window.requestAnimationFrame(bl)}function so(){document.removeEventListener("keydown",Ml,!0),document.removeEventListener("beforeinput",yl,!0),document.removeEventListener("input",Tl,!0),Bi&&window.cancelAnimationFrame(Bi),Bi=0;for(const n of Us)n.disconnect();Us=[]}function cu(){hn.length=0,xi.length=0,Fr.length=0,Ra.length=0,Ca.length=0,Aa=0,Sl=0,kn=null,zi=void 0,qn.eventTiming=!1,qn.longTasks=!1,qn.longAnimationFrames=!1}function ao(){return{schemaVersion:1,name:Cs,metadata:{...Ps},startedAt:Ls,stoppedAt:Ds,recording:Et,support:{...qn},inputs:hn.map(n=>({...n})),tabs:xi.map(n=>({...n})),blockingEntries:Fr.map(n=>({...n})),frameGapsMs:[...Ra],marks:Ca.map(n=>({...n,detail:n.detail?{...n.detail}:void 0}))}}const uu={reset(){so(),Et=!1,Cs="",Ps={},Ls=void 0,Ds=void 0,cu()},start(n,e={}){this.reset(),Cs=n,Ps={...e},Ls=Ct(),Et=!0,lu()},mark(n,e){Et&&Ca.push({label:n,at:Ct(),detail:e})},stop(){return Et&&(Ds=Ct()),Et=!1,so(),ao()},snapshot:ao};function du(){if(Pa())return window.__assistantPerformanceHarness||(window.__assistantPerformanceHarness=uu),window.__assistantPerformanceHarness}function M_(n,e){if(!Et)return e();const t=Ct();try{return e()}finally{const i=Ct()-t,r=El();r&&(n==="editor-serialization"?r.serializationMs+=i:r.reduxUpdateMs+=i)}}function hu(n,e){Et&&xi.push({sequence:++Sl,fromTabId:n,toTabId:e,startedAt:Ct()})}function y_(n){if(!Et)return;const e=[...xi].reverse().find(i=>i.toTabId===n&&i.contentCommittedAt===void 0);if(!e)return;e.contentCommittedAt=Ct(),e.focusToCommitMs=e.contentCommittedAt-e.startedAt;const t=e.sequence;window.requestAnimationFrame(()=>{const i=xi.find(s=>s.sequence===t);if(!i||i.paintAt!==void 0)return;const r=Ct();i.paintAt=r,i.focusToPaintMs=r-i.startedAt})}function fu(n){if(!Et)return;const e=[...xi].reverse().find(t=>t.toTabId===n&&t.settledAt===void 0);e&&(e.settledAt=Ct(),e.focusToSettledMs=e.settledAt-e.startedAt)}const wl=Xn,Rr="assistant.migrationStress.fixture.v1",Pi="assistant.migrationStress.run.v1",Da=128*1024,Ua=32*1024,Ia=256*1024,Na=256*1024,Fa=64*1024,oo=200,qr=25,lo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function rt(n,e){if(!n)throw new Error(e)}function jr(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function pu(n){const e=jr(n?.reduxMiB,0);return rt(e>0,"Migration stress reduxMiB must be greater than zero."),rt(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(2,jr(n?.depotRatio,.1)),testRunsRatio:Math.min(1,jr(n?.testRunsRatio,.01))}}function Li(n,e){return n<=0?0:Math.ceil(n/e)}function Zt(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function mu(n){const e=pu(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),a=Math.round(t*e.depotRatio),o=Math.round(t*e.testRunsRatio);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:a,testRunPayloadBytes:o},counts:{messages:Li(i,Da),artifactVersions:Li(r,Ua),fileSaves:Li(s,Ia),depotObjects:Li(a,Na),testRunCollections:Li(o,Fa)},seededAt:new Date().toISOString()}}function Yi(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+lo.repeat(Math.ceil(i/lo.length)).slice(0,i)}function mi(n){return`migration-stress-message-${n}`}function Al(n){return`migration-stress-artifact-${n}`}function Rl(n){return`migration-stress-save-${n}`}function ki(n){return`migration-stress-depot-${n}`}function Cl(n){return`migration-stress-agent-${n}`}function gu(n,e,t){const i=mi(n),r="2026-07-24T00:00:00.000Z",s=Yi(t,i),a=n%3,o=a===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:a===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:o,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:a===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function _u(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function vu(n,e){const t=Al(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:Yi(e,t),originMsg:mi(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}function xu(n,e){const t=Rl(n);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,prevContent:"",newContentHash:`after-${n}`,newContent:Yi(e,t)}],metadata:{kind:"artifact",actor:"assistant"}}}async function Su(){const{getAssistantDataStore:n,persistor:e}=await ba(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-DwDS7ryW.js").then(s=>s.yA);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function co(n,e,t,i,r){if(i===0)return;const s=Ec(e,t),a=[...s.ids];for(let o=0;o<i;o+=oo){const c=Math.min(i,o+oo);await n.transaction(async l=>{for(let d=o;d<c;d+=1){const h=r(d);a.push(h.id),await l.putEntity(e,h.id,h)}await l.putEntityStructure(e,{ids:a,meta:s.meta})})}}async function Mu(n,e,t){const i=yc(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");if(await co(e,"messages",i.messages,n.counts.messages,s=>gu(s,r,Zt(n.budgets.messagePayloadBytes,Da,s))),await co(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,s=>vu(s,Zt(n.budgets.artifactPayloadBytes,Ua,s))),n.counts.fileSaves>0){const s=i.fileSaves||{},a={...s.operations||{}},o=[...s.operationOrder||[]];for(let c=0;c<n.counts.fileSaves;c+=1){const l=xu(c,Zt(n.budgets.fileSavePayloadBytes,Ia,c));a[l.id]=l,o.push(l.id)}await e.transaction(async c=>{await c.putDocument("fileSaves",{...s,operations:a,operationOrder:o,checkpoints:{...s.checkpoints||{}},checkpointOrder:[...s.checkpointOrder||[]]})})}}function yu(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function Eu(n){await Rs.clearAll();for(let e=0;e<n.counts.depotObjects;e+=qr){const t=Math.min(n.counts.depotObjects,e+qr),i=[];for(let r=e;r<t;r+=1){const s=Zt(n.budgets.depotPayloadBytes,Na,r);i.push({id:ki(r),type:r%2===0?"migration-stress-text":"migration-stress-binary",obj:r%2===0?{kind:"text",payload:Yi(s,ki(r))}:{kind:"binary",payload:yu(s,r)},timestamp:17848512e5+r,owners:[`message:${mi(r%Math.max(1,n.counts.messages))}`]})}await Rs.storeMany(i,{chunkSize:qr})}}async function Tu(n){const e=Bc.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();for(let t=0;t<n.counts.testRunCollections;t+=1){const i=Cl(t),r=Zt(n.budgets.testRunPayloadBytes,Fa,t);await e.setItem(`agent:${i}`,[{id:`migration-stress-run-${t}`,agentId:i,status:"completed",startedAt:17848512e5+t,completedAt:1784851201e3+t,syntheticPayload:Yi(r,i)}])}}function Cr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function rr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function Yr(){const n=wl.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:n.messages.ids.length,artifactVersionCount:n.artifactVersions.ids.length}}async function bu(){const n=Cr(Rr);rt(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=wl.getState();let t=0;for(let l=0;l<n.counts.messages;l+=1){const d=e.messages.entities[mi(l)],h=_u(d,l),f=Zt(n.budgets.messagePayloadBytes,Da,l);rt(typeof h=="string",`Synthetic message ${l} is missing its payload.`),rt(h.length===f,`Synthetic message ${l} payload length differs.`),rt(h.startsWith(`${mi(l)}|`)||h===mi(l).slice(0,f),`Synthetic message ${l} payload marker differs.`),t+=h.length}let i=0;for(let l=0;l<n.counts.artifactVersions;l+=1){const d=Sc(e.artifactVersions,Al(l)),h=Zt(n.budgets.artifactPayloadBytes,Ua,l);rt(d,`Synthetic artifact ${l} is missing.`),rt(d.content.length===h,`Synthetic artifact ${l} payload length differs.`),i+=d.content.length}let r=0;for(let l=0;l<n.counts.fileSaves;l+=1){const h=e.fileSaves?.operations?.[Rl(l)]?.files?.[0]?.newContent,f=Zt(n.budgets.fileSavePayloadBytes,Ia,l);rt(typeof h=="string",`Synthetic file save ${l} is missing.`),rt(h.length===f,`Synthetic file save ${l} payload length differs.`),r+=h.length}let s=0;for(let l=0;l<n.counts.depotObjects;l+=1){const d=await Rs.retrieve(ki(l)),h=Zt(n.budgets.depotPayloadBytes,Na,l);if(rt(d,`Synthetic depot object ${l} is missing.`),l%2===0)rt(d.kind==="text"&&typeof d.payload=="string",`Synthetic depot text object ${l} is malformed.`),rt(d.payload.length===h,`Synthetic depot text object ${l} payload length differs.`),rt(d.payload.startsWith(`${ki(l)}|`)||d.payload===ki(l).slice(0,h),`Synthetic depot text object ${l} marker differs.`),s+=d.payload.length;else{rt(d.kind==="binary"&&ArrayBuffer.isView(d.payload),`Synthetic depot binary object ${l} is malformed.`),rt(d.payload.byteLength===h,`Synthetic depot binary object ${l} payload length differs.`);const f=new Uint8Array(d.payload.buffer,d.payload.byteOffset,d.payload.byteLength);if(f.length>0){const p=l*31+17&255;rt(f[0]===p&&f[f.length-1]===p,`Synthetic depot binary object ${l} marker differs.`)}s+=d.payload.byteLength}}let a=0;for(let l=0;l<n.counts.testRunCollections;l+=1){const h=(await Mc(Cl(l)))[0]?.syntheticPayload,f=Zt(n.budgets.testRunPayloadBytes,Fa,l);rt(typeof h=="string",`Synthetic test-run collection ${l} is missing.`),rt(h.length===f,`Synthetic test-run collection ${l} payload length differs.`),a+=h.length}const o={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:i,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:r,depotObjects:n.counts.depotObjects,depotPayloadBytes:s,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:a},c=e.persistence.engine==="sqlite"?"sqlite":"legacy";return rt(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),rt(i===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),rt(r===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),rt(s===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),rt(a===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:c,verified:o}}const uo={async seedFixture(n){rt(Yr().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=mu(n);window.localStorage.removeItem(Pi);const{dataStore:t,snapshot:i}=await Su();return await Mu(e,t,i),await Eu(e),await Tu(e),rr(Rr,e),e},getFixturePlan:()=>Cr(Rr),getRunState:()=>Cr(Pi),getStateSummary:Yr,startMigration(){rt(Yr().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=Cr(Rr);rt(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return rr(Pi,e),xc.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail}}),t.phase==="reloading"&&(e.status="reload-requested"),rr(Pi,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),rr(Pi,e)}),e},verifyFixture:bu};function wu(){if(Pa()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=uo,()=>{window.__assistantMigrationStress===uo&&delete window.__assistantMigrationStress}}function Au(n,e){const i=vl(n,e).map(r=>n.messages.entities[r]).filter(Boolean);return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s?.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s?.sidecars||{}).length,0),attachments:i.reduce((r,s)=>r+("attachments"in(s||{})&&Array.isArray(s.attachments)?s.attachments.length:0),0)}}function ho(n,e){const t=n.ui.tabs.find(r=>r.id===e.tabId);if(!t)throw new Error(`Performance scenario tab is missing: ${e.tabId}`);if(t.conversationId!==e.conversationId)throw new Error(`Performance scenario tab ${e.tabId} points to the wrong conversation`);if(t.messageId!==e.routeMessageId)throw new Error(`Performance scenario tab ${e.tabId} points to the wrong route message`);if(!n.conversations.entities[e.conversationId])throw new Error(`Performance scenario conversation is missing: ${e.conversationId}`);if(!n.messages.entities[e.routeMessageId])throw new Error(`Performance scenario route message is missing: ${e.routeMessageId}`);const i=Au(n,e.routeMessageId);for(const r of Object.keys(e.fingerprint))if(i[r]!==e.fingerprint[r])throw new Error(`Performance scenario fingerprint mismatch for ${e.tabId}.${r}: expected ${e.fingerprint[r]}, got ${i[r]}`);return i}let Is=0,Hi=null,Ns,Or;function un(){return Xn.getState()}function Pl(){const n=un();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)||null}function Fs(){const n=Hi?un().messages.entities[Hi]:void 0;return n?.type==="user"?n:void 0}function Ru(){Or?.(),Or=Xn.subscribe(()=>{const n=Fs()?.text;n!==Ns&&(Ns=n,Is+=1)})}function fo(){const n=un(),e=Pl();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId||null,activeRouteMessageId:e?.messageId||null,draftMessageId:n.ui.draftMessageId,messageCount:n.messages.ids.length,conversationCount:n.conversations.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}function Cu(n){const e=un(),t=e.ui.tabs.find(i=>i.id===n);return t?vl(e,t.messageId).some(i=>{const r=e.messages.entities[i];return r?.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress")}):!1}function Pu(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function po(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function $r(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}function Ll(n){const e=un();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Pu(n)),activeResponse:Cu(n)}}function mo(n){const e=Ll(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const go={async prepareDeterministicMode(){Xn.dispatch(to({path:"features.memoryDiagnostics",value:!1})),Xn.dispatch(to({path:"features.memoryTimelineDiagnostics",value:!1})),bc(!1),wc(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await $r(2)},getStateSummary:fo,assertScenario(n){const e=un(),t=e.messages.entities[n.draft.messageId];if(e.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${e.ui.draftMessageId||"<none>"}`);if(!t||t.type!=="user")throw new Error(`Performance scenario draft is missing or not a user message: ${n.draft.messageId}`);if(t.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${t.text.length}`);return{slow:ho(e,n.slow),fast:ho(e,n.fast)}},focusTab(n){const e=un();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);hu(e.ui.activeTabId,n),Xn.dispatch(Tc(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(mo(n)&&(await $r(2),mo(n))){fu(n);return}await new Promise(r=>window.setTimeout(r,25))}const i=fo();throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:i,readiness:Ll(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=un(),r=i.ui.tabs.find(a=>a.id===n),s=r?i.messages.entities[r.messageId]:void 0;if(i.ui.activeTabId===n&&s?.type==="user"&&po(s.id)&&(await $r(2),po(s.id)))return{messageId:s.id};await new Promise(a=>window.setTimeout(a,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=Fs();if(!Hi||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:Hi,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:Is}},assertEditorText(n){const e=Fs();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){const e=un(),t=n||Pl()?.messageId,i=t?e.messages.entities[t]:void 0;if(!t||i?.type!=="user")throw new Error("Cannot reset performance counter without an active user message");Hi=t,Ns=i.text,Is=0}};function Lu(){if(Pa())return du(),Ru(),window.__assistantPerformanceDriver=go,()=>{Or?.(),Or=void 0,window.__assistantPerformanceDriver===go&&delete window.__assistantPerformanceDriver}}function Du(){const n=Xc(a=>a.persistence??{}),[e,t]=ie.useState(!1),[i,r]=ie.useState();if(n.phase!=="fault")return null;const s=async()=>{t(!0),r(void 0);try{const{createFaultModeExport:a,downloadFaultModeExport:o}=await ba(async()=>{const{createFaultModeExport:c,downloadFaultModeExport:l}=await import("./faultExport-DYKvaQJt.js");return{createFaultModeExport:c,downloadFaultModeExport:l}},__vite__mapDeps([8,5,1,2,0,3,4,6,7]));o(a(n.fault))}catch(a){r(a instanceof Error?a.message:String(a))}finally{t(!1)}};return W.jsx("div",{role:"alertdialog","aria-modal":"true",style:{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeItems:"center",padding:24,boxSizing:"border-box",background:"rgba(16, 18, 20, 0.97)",color:"#f0f3f6",fontFamily:"Inter, system-ui, sans-serif"},children:W.jsxs("section",{style:{width:"min(680px, 100%)",padding:28,border:"1px solid #4b2424",borderRadius:12,background:"#1f2329",boxShadow:"0 24px 80px rgba(0, 0, 0, 0.55)"},children:[W.jsx("p",{style:{margin:"0 0 8px",color:"#ff938a",fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Persistence fault"}),W.jsx("h1",{style:{margin:"0 0 14px",fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped saving to protect your data"}),W.jsx("p",{style:{margin:"0 0 12px",color:"#c5ccd3",lineHeight:1.55},children:"Assistant will not accept more changes after an ambiguous or failed database write. Reload to open the last complete SQLite state."}),W.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",borderRadius:8,background:"#13161a",color:"#ff938a",fontSize:12},children:n.fault||"SQLite persistence entered a fatal state."}),i?W.jsx("p",{style:{color:"#ff938a",lineHeight:1.5},children:i}):null,W.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[W.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.65rem 1rem",borderRadius:8,border:"1px solid #0969da",background:"#0969da",color:"#fff",cursor:"pointer",fontSize:"0.95rem",fontWeight:600},children:"Reload"}),W.jsx("button",{type:"button",disabled:e,onClick:()=>{s()},style:{padding:"0.65rem 1rem",borderRadius:8,border:"1px solid #3f4752",background:"#252b33",color:"#f0f3f6",cursor:e?"wait":"pointer",fontSize:"0.95rem",fontWeight:600},children:e?"Preparing snapshot…":"Download in-memory snapshot"})]}),W.jsx("p",{style:{margin:"16px 0 0",color:"#8c959f",fontSize:13,lineHeight:1.5},children:"The snapshot contains the current in-memory application state only — attachments and other binary payloads are not included, and recent changes may not have been committed. The SQLite database still holds the last fully committed state. Do not clear browser site data."})]})})}const Uu={"selector-invalid":"Assistant cannot determine which storage engine owns your data because the boot selector is malformed or unreadable.","opfs-unsupported":"This browser does not provide the OPFS support required to open SQLite persistence.","opfs-open-failed":"Assistant could not acquire or open its private OPFS database area.","database-missing":"The exact SQLite database selected for this profile is missing.","database-exists":"Assistant refused to replace an existing SQLite database while creating a new one.","identity-mismatch":"The database identity does not match the exact database selected for this profile.","not-sealed":"The selected database was never completely prepared and sealed for normal use.","already-sealed":"Assistant detected an invalid attempt to seal an already completed database.","integrity-failed":"SQLite reported that the database failed structural integrity checks.","storage-full":"The browser reported that durable storage is full.","io-error":"SQLite or OPFS reported an input/output failure while accessing the database.","fatal-latched":"An earlier persistence failure stopped this database session; reload is required.","invalid-request":"Assistant detected malformed or unsupported persisted data or a programming error in a database request.","replica-failed":"A full-database replica operation failed; the primary database has not been replaced.","restore-invalid":"The selected replica file did not pass complete restore validation.","worker-terminated":"The SQLite worker stopped unexpectedly, so the outcome of its last operation may be unknown.",internal:"Assistant encountered an unexpected persistence implementation error."},sr={padding:"0.65rem 1rem",borderRadius:8,border:"1px solid #3f4752",background:"#252b33",color:"#f0f3f6",cursor:"pointer",fontSize:"0.95rem",fontWeight:600};function _o(n){const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleString()}function Iu({error:n}){const e=ie.useMemo(()=>Gc(),[]),t=ie.useRef(null),[i,r]=ie.useState(),[s,a]=ie.useState(),[o,c]=ie.useState(),[l,d]=ie.useState();let h,f;try{const R=zc();R.engine==="sqlite"&&(h=R.selector.databaseName)}catch(R){f=R instanceof Error?R.message:String(R)}ie.useEffect(()=>{let R=!1;return kc().then(A=>{R||c(A)}),Hc().then(A=>{R||d(A)}),()=>{R=!0}},[]);const p=n instanceof xl?n.code:void 0,g=p?Uu[p]:"Assistant could not safely open the selected SQLite database and will not guess or fall back to another data source.";let _,m;l?l.supported?l.present?(_=`OPFS marker: present${l.createdAt?` (created ${_o(l.createdAt)})`:""}.`,m="A marker file outside the database pool survived, so OPFS was NOT cleared origin-wide: the loss is specific to the SQLite pool (for example the SAH pool's silent bad-digest reap, or targeted deletion)."):l.expectedCreatedAt?(_=`OPFS marker: missing (it was created ${_o(l.expectedCreatedAt)}).`,m='A marker file outside the database pool is gone too, which points to origin-wide OPFS clearing: browser eviction on an unpersisted origin, "Clear site data", or an external cleanup tool.'):_="OPFS marker: was never created on this profile, so an origin-wide wipe cannot be distinguished from pool-specific loss for this incident.":_="OPFS marker: could not be checked in this browser.":_="OPFS marker: checking…";const u=o===void 0?"Persistent storage: unknown (the browser did not report a grant state).":o?"Persistent storage: granted — this origin is protected from ordinary pressure-driven eviction.":"Persistent storage: NOT granted — quota-managed storage (including OPFS) on this origin is evictable by the browser.",E=async(R,A)=>{r(R),a(void 0);try{await A()}catch(D){a(D instanceof Error?D.message:String(D))}finally{r(void 0)}},b=async R=>{await E("Restoring replica…",async()=>{await Ac(R)})},M=async()=>{h&&await E("Exporting forensic bytes…",async()=>{const R=await Rc(h);Cc(`${h}.raw.db`,R)})},L=async()=>{window.prompt("Type RESET to permanently delete all Assistant SQLite storage.")==="RESET"&&await E("Resetting SQLite storage…",async()=>{await Pc(),window.location.reload()})};return W.jsx("main",{role:"alert",style:{minHeight:"100vh",boxSizing:"border-box",display:"grid",placeItems:"center",padding:24,background:e.background,color:e.textPrimary,fontFamily:"Inter, system-ui, sans-serif"},children:W.jsxs("section",{style:{width:"min(760px, 100%)",padding:28,border:`1px solid ${e.divider}`,borderRadius:12,background:e.paper},children:[W.jsx("p",{style:{margin:"0 0 8px",color:e.textSecondary,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"SQLite recovery"}),W.jsx("h1",{style:{margin:"0 0 14px",color:"#f85149",fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped to protect your data"}),p?W.jsxs("p",{style:{margin:"0 0 12px",fontFamily:"ui-monospace, monospace",fontWeight:700},children:["Error code: ",p]}):null,W.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,lineHeight:1.55},children:g}),h?W.jsxs("p",{style:{margin:"0 0 12px",color:e.textSecondary},children:["Selected database: ",W.jsx("code",{style:{color:e.textPrimary},children:h})]}):null,f?W.jsxs("p",{style:{margin:"0 0 12px",color:"#ff938a",lineHeight:1.5},children:["The persistence selector itself could not be read: ",f]}):null,W.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",borderRadius:8,background:"#13161a",color:"#ff938a",fontSize:12},children:n.message}),W.jsxs("div",{style:{margin:"0 0 12px",padding:12,borderRadius:8,border:`1px solid ${e.divider}`,fontSize:13,lineHeight:1.55,color:e.textSecondary},children:[W.jsx("p",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Storage forensics"}),W.jsx("p",{style:{margin:"0 0 4px"},children:u}),W.jsx("p",{style:{margin:0},children:_}),p==="database-missing"&&m?W.jsx("p",{style:{margin:"6px 0 0",color:e.textPrimary},children:m}):null]}),s?W.jsx("p",{style:{color:"#ff938a",lineHeight:1.5},children:s}):null,i?W.jsx("p",{style:{color:e.textSecondary},children:i}):null,W.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[W.jsx("button",{type:"button",disabled:!!i,onClick:()=>window.location.reload(),style:{...sr,background:e.button,borderColor:e.button},children:"Reload"}),W.jsx("button",{type:"button",disabled:!!i,onClick:()=>t.current?.click(),style:sr,children:"Restore from replica file"}),W.jsx("input",{ref:t,"data-performance-replica-input":"true",hidden:!0,type:"file",accept:".db,application/vnd.sqlite3",onChange:R=>{const A=R.currentTarget.files?.[0];R.currentTarget.value="",A&&b(A)}}),h?W.jsx("button",{type:"button",disabled:!!i,onClick:()=>{M()},style:sr,children:"Export raw database bytes (forensic)"}):null]}),W.jsx("p",{style:{margin:"14px 0 0",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"The forensic export is an unvalidated byte-for-byte rescue copy for support. It may be corrupt and is not a verified backup."}),W.jsxs("div",{style:{marginTop:26,paddingTop:20,borderTop:`1px solid ${e.divider}`},children:[W.jsx("h2",{style:{margin:"0 0 8px",color:"#ff938a",fontSize:"1rem"},children:"Danger zone"}),W.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"Reset permanently deletes every Assistant SQLite database and removes the engine selector. Legacy pre-migration data, if it still exists, becomes authoritative again after reload."}),W.jsx("button",{type:"button",disabled:!!i,onClick:()=>{L()},style:{...sr,borderColor:"#f85149",color:"#ff938a"},children:"Reset SQLite storage…"})]})]})})}const E_={transient:.12,messageState:.35},on={speed:.45,attenuation:1.2,fadeLifetime:2,packetLength:.25,coreWidth:2.2,bladeWidth:9,glowIntensity:1.35,haloStrength:.6,seamMergePx:22},vo=(n,e)=>{const t=[...n].sort((r,s)=>r-s),i=[];for(const r of t){const s=i[i.length-1];!s||r-s[s.length-1]>e?i.push([r]):s.push(r)}return i.map(r=>r.reduce((s,a)=>s+a,0)/r.length)},Nu=(n,e,t,i,r=on.seamMergePx)=>{if(e===0)return{xs:[],ys:[]};const s=new Set,a=new Set;for(let d=0;d<e;d+=1){const h=d*4,f=n[h],p=n[h+1],g=n[h+2],_=n[h+3];s.add(f),s.add(f+g),a.add(p),a.add(p+_)}const o=vo(s,2/Math.max(1,i.width)),c=vo(a,r/Math.max(1,i.height));return{xs:t==="ladder"&&o.length>1?[o[0],o[o.length-1]]:o,ys:c}},Fu=(n,e)=>{if(!n.length)return e;let t=n[0];for(const i of n)Math.abs(i-e)<Math.abs(t-e)&&(t=i);return t},Ou=(n,e,t)=>{const i=Math.max(t.width,t.height,1),r=(e.u-n.u)*t.width/i,s=(e.v-n.v)*t.height/i;return Math.hypot(r,s)},xo=(n,e,t,i,r)=>({from:n,to:e,startDistance:t,gain:i,length:Ou(n,e,r)}),So=(n,e,t,i)=>{const{xs:r,ys:s}=n;if(r.length<2||!s.length)return[];const a=s.reduce((u,E,b)=>Math.abs(E-e.v)<Math.abs(s[u]-e.v)?b:u,0);let o;if(t<0){o=0;for(let u=0;u<r.length;u+=1)r[u]<=e.u&&(o=u)}else{o=r.length-1;for(let u=0;u<r.length;u+=1)if(r[u]>=e.u){o=u;break}}const c={u:e.u,v:s[a]},l={u:r[o],v:s[a]},d=xo(c,l,0,1,i),h=[];d.length>1e-6&&h.push(d);const f=t<0?Math.min(r.length-1,o+1):Math.max(0,o-1),p=[{ix:o,iy:a,fromIx:f,fromIy:a,distance:d.length,gain:1}],g=new Set,_=2.2,m=280;for(;p.length&&h.length<m;){p.sort((A,D)=>A.distance-D.distance);const u=p.shift();if(u.distance>_)continue;const E=`${u.ix},${u.iy}|${u.fromIx},${u.fromIy}`;if(g.has(E))continue;g.add(E);const b=[];u.ix>0&&b.push({ix:u.ix-1,iy:u.iy}),u.ix<r.length-1&&b.push({ix:u.ix+1,iy:u.iy}),u.iy>0&&b.push({ix:u.ix,iy:u.iy-1}),u.iy<s.length-1&&b.push({ix:u.ix,iy:u.iy+1});const M=b.filter(A=>A.ix!==u.fromIx||A.iy!==u.fromIy),L=u.gain/Math.sqrt(Math.max(1,M.length)),R={u:r[u.ix],v:s[u.iy]};for(const A of M){const D={u:r[A.ix],v:s[A.iy]},S=xo(R,D,u.distance,L,i);S.length<=1e-6||(h.push(S),p.push({ix:A.ix,iy:A.iy,fromIx:u.ix,fromIy:u.iy,distance:u.distance+S.length,gain:L}))}}return h},jn=n=>Math.min(1,Math.max(0,n)),Mo=(n,e,t)=>{const i=n-e;if(i<0||i>t)return 0;const r=Math.pow(jn(1-i/t),.62),s=jn(i/Math.max(.008,t*.13));return r*Math.pow(s,.45)},yo=(n,e)=>{const t=e-n.startDistance,i=n.length>0?t/n.length:0;return{u:n.from.u+(n.to.u-n.from.u)*i,v:n.from.v+(n.to.v-n.from.v)*i}},Bu=(n,e,t)=>{const i=Math.max(0,e-t-n.startDistance),r=Math.min(n.length,e-n.startDistance);if(r<=i||r<=0||i>=n.length)return[];const s=n.startDistance+i,a=n.startDistance+r,o=e-Math.max(.008,t*.13),c=[s];o>s&&o<a&&c.push(o),c.push(a);const l=[];for(let d=0;d<c.length-1;d+=1){const h=c[d],f=c[d+1];l.push({from:yo(n,h),to:yo(n,f),startDistance:h,endDistance:f})}return l};function T_(n){let e,t,i;if(n.startsWith("#")){const r=n.slice(1);r.length===3?(e=parseInt(r[0]+r[0],16)/255,t=parseInt(r[1]+r[1],16)/255,i=parseInt(r[2]+r[2],16)/255):(e=parseInt(r.slice(0,2),16)/255,t=parseInt(r.slice(2,4),16)/255,i=parseInt(r.slice(4,6),16)/255)}else if(n.startsWith("rgb")){const r=n.match(/rgba?\(([^)]+)\)/);if(r){const s=r[1].split(",").map(a=>parseFloat(a.trim()));e=s[0]/255,t=s[1]/255,i=s[2]/255}else return 0}else return 0;return Oa([e,t,i])}function Oa([n,e,t]){const i=Math.max(n,e,t),r=Math.min(n,e,t);if(i===r)return 0;const s=i-r;return(i===n?(e-t)/s+(e<t?6:0):i===e?(t-n)/s+2:(n-e)/s+4)/6%1}const wn=128,Kr=1024,hi=1024,$t={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},Dl=mc.createContext(null),zu=n=>n.hue!==void 0?n.hue:n.rgb?Oa(n.rgb):0,Ln=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${jn(i)})`,gn=(n,e,t,i,r,s,a)=>{const o=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,d=(1-t.v)*window.innerHeight;if(Math.hypot(l-o,d-c)<.25)return;const h=n.createLinearGradient(o,c,l,d);h.addColorStop(0,i(s)),h.addColorStop(1,i(a)),n.strokeStyle=h,n.lineWidth=r,n.beginPath(),n.moveTo(o,c),n.lineTo(l,d),n.stroke()},ku=(n,e,t,i,r,s,a)=>{const o=Math.min(1.35,Math.max(.25,i.energy/3)),c=jn(r*o),l=jn(s*o);if(Math.max(c,l)<=.002)return;const d=Math.min(2.2,a.glowIntensity),h=a.bladeWidth*(1.25+a.haloStrength*.85),f=Math.max(a.coreWidth+2,a.bladeWidth*.64),p=Math.max(a.coreWidth+.7,f*.42),g=Math.max(.7,Math.min(p-.45,a.coreWidth));n.lineCap="butt",n.lineJoin="bevel",a.lightMode?(n.globalCompositeOperation="source-over",gn(n,e,t,_=>Ln(i.hue,100,86,_*.22*d),h,c,l),gn(n,e,t,_=>Ln(i.hue,100,76,_*.42*d),f,c,l),gn(n,e,t,_=>Ln(i.hue,94,53,_*.86*d),p,c,l),gn(n,e,t,_=>Ln(i.hue,100,79,_*.92),g,c,l)):(n.globalCompositeOperation="lighter",gn(n,e,t,_=>Ln(i.hue,100,52,_*.13*d),h,c,l),gn(n,e,t,_=>Ln(i.hue,100,58,_*.48*d),f,c,l),gn(n,e,t,_=>Ln(i.hue,100,64,_*.86),p,c,l),gn(n,e,t,_=>`rgba(255, 255, 255, ${jn(_*.94)})`,g,c,l))},Hu=n=>{const e=Rn.c(38),{children:t,topology:i,speed:r,attenuation:s,zIndex:a,enableGlobalClicks:o,pixelRatio:c,maxFPS:l}=n,d=i===void 0?"ladder":i,h=r===void 0?on.speed:r,f=s===void 0?on.attenuation:s,p=a===void 0?5:a,g=o===void 0?!1:o,_=l===void 0?120:l,m=ie.useRef(null);let u;e[0]===Symbol.for("react.memo_cache_sentinel")?(u=new Map,e[0]=u):u=e[0];const E=ie.useRef(u),b=ie.useRef(null);let M;e[1]===Symbol.for("react.memo_cache_sentinel")?(M=new Float32Array(wn*4),e[1]=M):M=e[1];const L=ie.useRef(M);let R;e[2]===Symbol.for("react.memo_cache_sentinel")?(R={xs:[],ys:[]},e[2]=R):R=e[2];const A=ie.useRef(R);let D;e[3]===Symbol.for("react.memo_cache_sentinel")?(D=[],e[3]=D):D=e[3];const S=ie.useRef(D),v=ie.useRef(!0),w=ie.useRef(null),F=ie.useRef(Vu),O=ie.useRef(Gu),G=ie.useRef(d),J=ie.useRef(h),V=ie.useRef(f),te=ie.useRef(_),H=wa();let oe;e[4]!==H?(oe=H.toLowerCase().includes("light"),e[4]=H,e[5]=oe):oe=e[5];const ce=oe,xe=ie.useRef(ce);let Ue,Ae;e[6]!==d?(Ue=()=>{G.current=d,v.current=!0},Ae=[d],e[6]=d,e[7]=Ue,e[8]=Ae):(Ue=e[7],Ae=e[8]),ie.useEffect(Ue,Ae);let q,Y;e[9]!==h?(q=()=>{J.current=h},Y=[h],e[9]=h,e[10]=q,e[11]=Y):(q=e[10],Y=e[11]),ie.useEffect(q,Y);let ue,se;e[12]!==f?(ue=()=>{V.current=f},se=[f],e[12]=f,e[13]=ue,e[14]=se):(ue=e[13],se=e[14]),ie.useEffect(ue,se);let me,Pe;e[15]!==_?(me=()=>{te.current=_},Pe=[_],e[15]=_,e[16]=me,e[17]=Pe):(me=e[16],Pe=e[17]),ie.useEffect(me,Pe);let be,He;e[18]!==ce?(be=()=>{xe.current=ce,O.current()},He=[ce],e[18]=ce,e[19]=be,e[20]=He):(be=e[19],He=e[20]),ie.useEffect(be,He);let Ke;e[21]===Symbol.for("react.memo_cache_sentinel")?(Ke=ae=>{const ne=E.current.get(ae.id)?.ref.current;ne&&b.current?.unobserve(ne),E.current.set(ae.id,ae),ae.ref.current&&b.current?.observe(ae.ref.current),v.current=!0},e[21]=Ke):Ke=e[21];const Xe=Ke;let C;e[22]===Symbol.for("react.memo_cache_sentinel")?(C=ae=>{const ne=E.current.get(ae)?.ref.current;ne&&b.current?.unobserve(ne),E.current.delete(ae),v.current=!0},e[22]=C):C=e[22];const ut=C;let ze;e[23]===Symbol.for("react.memo_cache_sentinel")?(ze=(ae,ne,_e)=>{F.current(ae,ne,_e)},e[23]=ze):ze=e[23];const Ve=ze;let Se;e[24]===Symbol.for("react.memo_cache_sentinel")?(Se=ae=>{const ne=E.current.get(ae)?.ref.current;if(!ne)return null;const _e=ne.getBoundingClientRect();return{u:(_e.left+_e.width/2)/window.innerWidth,v:1-(_e.top+_e.height/2)/window.innerHeight}},e[24]=Se):Se=e[24];const Ge=Se;let Ee;e[25]===Symbol.for("react.memo_cache_sentinel")?(Ee={register:Xe,unregister:ut,pulseAt:Ve,getNodeCenter:Ge},e[25]=Ee):Ee=e[25];const Ne=Ee;let Je,T;e[26]!==c?(Je=()=>{const ae=m.current,ne=ae?.getContext("2d",{alpha:!0});if(!ae||!ne)return;let _e=!1,Te=0;const Q=S.current,ve=Wu,Le=()=>{const P=window.innerWidth,le=window.innerHeight,ee=[...E.current.values()].slice(0,wn),he=L.current;ee.forEach((Z,$)=>{const pe=Z.ref.current?.getBoundingClientRect();if(!pe)return;const Re=$*4;he[Re]=pe.left/P,he[Re+1]=(le-pe.bottom)/le,he[Re+2]=pe.width/P,he[Re+3]=pe.height/le}),A.current=Nu(he,ee.length,G.current,ve());for(const Z of Q)Z.passes=So(A.current,Z.source,Z.direction,ve());v.current=!1},we=()=>{const P=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);ae.width=Math.round(window.innerWidth*P),ae.height=Math.round(window.innerHeight*P),ae.style.width=`${window.innerWidth}px`,ae.style.height=`${window.innerHeight}px`,ne.setTransform(P,0,0,P,0,0),v.current=!0,O.current()},de=P=>{if(w.current=null,_e)return;const le=te.current;if(le&&le>0&&P-Te<1e3/le){w.current=requestAnimationFrame(de);return}Te=P,v.current&&Le(),ne.clearRect(0,0,window.innerWidth,window.innerHeight);const ee={lightMode:xe.current,coreWidth:on.coreWidth,bladeWidth:on.bladeWidth,glowIntensity:on.glowIntensity,haloStrength:on.haloStrength},he=Q;for(let Z=he.length-1;Z>=0;Z=Z-1,Z){const $=he[Z],pe=(P-$.startedAt)/1e3,Re=pe*J.current,Qe=Math.max(.055,$.packetLength*(.65+$.radius*2)),je=jn(1-pe/(on.fadeLifetime+1.2));if(je<=0||Re>3){he.splice(Z,1);continue}for(const St of $.passes)for(const gt of Bu(St,Re,Qe)){const er=Math.exp(-V.current*gt.startDistance*.45),tr=Math.exp(-V.current*gt.endDistance*.45),en=Mo(Re,gt.startDistance,Qe)*er*je*St.gain,Ri=Mo(Re,gt.endDistance,Qe)*tr*je*St.gain;ku(ne,gt.from,gt.to,$,en,Ri,ee)}}ne.globalCompositeOperation="source-over",he.length&&(w.current=requestAnimationFrame(de))};O.current=()=>{!_e&&w.current===null&&(w.current=requestAnimationFrame(de))},F.current=(P,le,ee)=>{const he=ee===void 0?{}:ee;v.current&&Le();const Z={u:P,v:Fu(A.current.ys,le)},$={source:Z,hue:zu(he),energy:he.energy??2.5,radius:he.radius??.05,packetLength:he.packetLength??on.packetLength,startedAt:performance.now()};for(const pe of[-1,1])Q.push({...$,direction:pe,passes:So(A.current,Z,pe,ve())});O.current()};const Ie=()=>{v.current=!0,Q.length&&O.current()};return b.current=new ResizeObserver(Ie),E.current.forEach(P=>{P.ref.current&&b.current?.observe(P.ref.current)}),window.addEventListener("resize",we),document.addEventListener("scroll",Ie,!0),we(),()=>{_e=!0,window.removeEventListener("resize",we),document.removeEventListener("scroll",Ie,!0),b.current?.disconnect(),b.current=null,w.current!==null&&cancelAnimationFrame(w.current),w.current=null,Q.length=0,F.current=Xu,O.current=qu,ne.clearRect(0,0,window.innerWidth,window.innerHeight)}},T=[c],e[26]=c,e[27]=Je,e[28]=T):(Je=e[27],T=e[28]),ie.useEffect(Je,T);let x,N;e[29]!==g?(x=()=>{if(!g)return;const ae=ne=>{Ve(ne.clientX/window.innerWidth,1-ne.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",ae),()=>window.removeEventListener("click",ae)},N=[g,Ve],e[29]=g,e[30]=x,e[31]=N):(x=e[30],N=e[31]),ie.useEffect(x,N);const j=ce?"normal":"screen";let K;e[32]!==j||e[33]!==p?(K=W.jsx("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:p,mixBlendMode:j}}),e[32]=j,e[33]=p,e[34]=K):K=e[34];let X;return e[35]!==t||e[36]!==K?(X=W.jsxs(Dl.Provider,{value:Ne,children:[t,K]}),e[35]=t,e[36]=K,e[37]=X):X=e[37],X};function Vu(){}function Gu(){}function Wu(){return{width:window.innerWidth,height:window.innerHeight}}function Xu(){}function qu(){}const Ba="178",ju=0,Eo=1,Yu=2,Ul=1,$u=2,ln=3,An=0,Pt=1,cn=2,Tn=0,gi=1,Os=2,To=3,bo=4,Ku=5,Hn=100,Zu=101,Ju=102,Qu=103,ed=104,td=200,nd=201,id=202,rd=203,Bs=204,zs=205,sd=206,ad=207,od=208,ld=209,cd=210,ud=211,dd=212,hd=213,fd=214,ks=0,Hs=1,Vs=2,Si=3,Gs=4,Ws=5,Xs=6,qs=7,Il=0,pd=1,md=2,bn=0,gd=1,_d=2,vd=3,xd=4,Sd=5,Md=6,yd=7,Nl=300,Mi=301,yi=302,js=303,Ys=304,Hr=306,$s=1e3,Gn=1001,Ks=1002,Yt=1003,Ed=1004,ar=1005,xt=1006,Zr=1007,Wn=1008,pn=1009,Fl=1010,Ol=1011,Vi=1012,za=1013,$n=1014,Ht=1015,$i=1016,ka=1017,Ha=1018,Gi=1020,Bl=35902,zl=1021,kl=1022,Rt=1023,Wi=1026,Xi=1027,Hl=1028,Va=1029,Vl=1030,Ga=1031,Wa=1033,Pr=33776,Lr=33777,Dr=33778,Ur=33779,Zs=35840,Js=35841,Qs=35842,ea=35843,ta=36196,na=37492,ia=37496,ra=37808,sa=37809,aa=37810,oa=37811,la=37812,ca=37813,ua=37814,da=37815,ha=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Ir=36492,va=36494,xa=36495,Gl=36283,Sa=36284,Ma=36285,ya=36286,Td=3200,bd=3201,wd=0,Ad=1,En="",kt="srgb",Ei="srgb-linear",Br="linear",tt="srgb",Jn=7680,wo=519,Rd=512,Cd=513,Pd=514,Wl=515,Ld=516,Dd=517,Ud=518,Id=519,Ao=35044,Ro="300 es",dn=2e3,zr=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Ea=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Nd(n,e){return(n%e+e)%e}function Qr(n,e,t){return(1-t)*n+t*e}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==p||d!==g){let m=1-o;const u=c*f+l*p+d*g+h*_,E=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const L=Math.sqrt(b),R=Math.atan2(L,u*E);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const M=o*E;if(c=c*m+f*M,l=l*m+p*M,d=d*m+g*M,h=h*m+_*M,m===1-o){const L=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=L,l*=L,d*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+d*h+c*p-l*f,e[t+1]=c*g+d*f+l*h-o*p,e[t+2]=l*g+d*p+o*f-c*h,e[t+3]=d*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),h=o(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h+f*p*g;break;case"YZX":this._x=f*d*h+l*p*g,this._y=l*p*h+f*d*g,this._z=l*d*g-f*p*h,this._w=l*d*h-f*p*g;break;case"XZY":this._x=f*d*h-l*p*g,this._y=l*p*h-f*d*g,this._z=l*d*g+f*p*h,this._w=l*d*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*d,this.y=i+c*d+o*l-s*h,this.z=r+c*h+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return es.copy(this).projectOnVector(e),this.sub(es)}reflect(e){return this.sub(es.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new k,Co=new Zi;class Be{constructor(e,t,i,r,s,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],u=r[6],E=r[1],b=r[4],M=r[7],L=r[2],R=r[5],A=r[8];return s[0]=a*_+o*E+c*L,s[3]=a*m+o*b+c*R,s[6]=a*u+o*M+c*A,s[1]=l*_+d*E+h*L,s[4]=l*m+d*b+h*R,s[7]=l*u+d*M+h*A,s[2]=f*_+p*E+g*L,s[5]=f*m+p*b+g*R,s[8]=f*u+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,f=o*c-d*s,p=l*s-a*c,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ts.makeScale(e,t)),this}rotate(e){return this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new Be;function Xl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fd(){const n=kr("canvas");return n.style.display="block",n}const Po={};function _i(n){n in Po||(Po[n]=!0,console.warn(n))}function Od(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Bd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lo=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Do=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){const n={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===En?Br:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ei]:{primaries:e,whitePoint:i,transfer:Br,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Lo,fromXYZ:Do,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const $e=kd();function fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qn;class Hd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qn===void 0&&(Qn=kr("canvas")),Qn.width=e.width,Qn.height=e.height;const r=Qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fn(t[i]/255)*255):t[i]=fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vd=0;class Xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ns(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;const is=new k;class Lt extends bi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Gn,r=Gn,s=xt,a=Wn,o=Rt,c=pn,l=Lt.DEFAULT_ANISOTROPY,d=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ki(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Nl;Lt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(p+1)/2,L=(u+1)/2,R=(d+f)/4,A=(h+_)/4,D=(g+m)/4;return b>M&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=A/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=D/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-d)/E,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Wd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ql extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xd extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(s,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),lr.subVectors(this.max,Ui),ei.subVectors(e.a,Ui),ti.subVectors(e.b,Ui),ni.subVectors(e.c,Ui),_n.subVectors(ti,ei),vn.subVectors(ni,ti),Dn.subVectors(ei,ni);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Dn.z,Dn.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Dn.z,0,-Dn.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Dn.y,Dn.x,0];return!rs(t,ei,ti,ni,lr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,ei,ti,ni,lr))?!1:(cr.crossVectors(_n,vn),t=[cr.x,cr.y,cr.z],rs(t,ei,ti,ni,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tn=[new k,new k,new k,new k,new k,new k,new k,new k],Vt=new k,or=new Ji,ei=new k,ti=new k,ni=new k,_n=new k,vn=new k,Dn=new k,Ui=new k,lr=new k,cr=new k,Un=new k;function rs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Un.fromArray(n,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=i.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const qd=new Ji,Ii=new k,ss=new k;class qa{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ii,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(ss)),this.expandByPoint(Ii.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nn=new k,as=new k,ur=new k,xn=new k,os=new k,dr=new k,ls=new k;class jd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){as.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=xn.dot(this.direction),c=-xn.dot(ur),l=xn.lengthSq(),d=Math.abs(1-a*a);let h,f,p,g;if(d>0)if(h=a*c-o,f=a*o-c,g=s*d,h>=0)if(f>=-g)if(f<=g){const _=1/d;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(as).addScaledVector(ur,f),p}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const i=nn.dot(this.direction),r=nn.dot(nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,r,s){os.subVectors(t,e),dr.subVectors(i,e),ls.crossVectors(os,dr);let a=this.direction.dot(ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const c=o*this.direction.dot(dr.crossVectors(xn,dr));if(c<0)return null;const l=o*this.direction.dot(os.cross(xn));if(l<0||c+l>a)return null;const d=-o*xn.dot(ls);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,c,l,d,h,f,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,h,f,p,g,_,m)}set(e,t,i,r,s,a,o,c,l,d,h,f,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ii.setFromMatrixColumn(e,0).length(),s=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,g=o*d,_=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,p=c*h,g=l*d,_=l*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,p=c*h,g=l*d,_=l*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,p=a*h,g=o*d,_=o*h;t[0]=c*d,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+_,t[5]=a*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,$d)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Sn.crossVectors(i,It),Sn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Sn.crossVectors(i,It)),Sn.normalize(),hr.crossVectors(It,Sn),r[0]=Sn.x,r[4]=hr.x,r[8]=It.x,r[1]=Sn.y,r[5]=hr.y,r[9]=It.y,r[2]=Sn.z,r[6]=hr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],E=i[3],b=i[7],M=i[11],L=i[15],R=r[0],A=r[4],D=r[8],S=r[12],v=r[1],w=r[5],F=r[9],O=r[13],G=r[2],J=r[6],V=r[10],te=r[14],H=r[3],oe=r[7],ce=r[11],xe=r[15];return s[0]=a*R+o*v+c*G+l*H,s[4]=a*A+o*w+c*J+l*oe,s[8]=a*D+o*F+c*V+l*ce,s[12]=a*S+o*O+c*te+l*xe,s[1]=d*R+h*v+f*G+p*H,s[5]=d*A+h*w+f*J+p*oe,s[9]=d*D+h*F+f*V+p*ce,s[13]=d*S+h*O+f*te+p*xe,s[2]=g*R+_*v+m*G+u*H,s[6]=g*A+_*w+m*J+u*oe,s[10]=g*D+_*F+m*V+u*ce,s[14]=g*S+_*O+m*te+u*xe,s[3]=E*R+b*v+M*G+L*H,s[7]=E*A+b*w+M*J+L*oe,s[11]=E*D+b*F+M*V+L*ce,s[15]=E*S+b*O+M*te+L*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*c*h-r*l*h-s*o*f+i*l*f+r*o*p-i*c*p)+_*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*d-s*c*d)+m*(+t*l*h-t*o*p-s*a*h+i*a*p+s*o*d-i*l*d)+u*(-r*o*d-t*c*h+t*o*f+r*a*h-i*a*f+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],E=h*m*l-_*f*l+_*c*p-o*m*p-h*c*u+o*f*u,b=g*f*l-d*m*l-g*c*p+a*m*p+d*c*u-a*f*u,M=d*_*l-g*h*l+g*o*p-a*_*p-d*o*u+a*h*u,L=g*h*c-d*_*c-g*o*f+a*_*f+d*o*m-a*h*m,R=t*E+i*b+r*M+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*u-i*f*u)*A,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*u+i*c*u)*A,e[3]=(h*c*s-o*f*s-h*r*l+i*f*l+o*r*p-i*c*p)*A,e[4]=b*A,e[5]=(d*m*s-g*f*s+g*r*p-t*m*p-d*r*u+t*f*u)*A,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*u-t*c*u)*A,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*p+t*c*p)*A,e[8]=M*A,e[9]=(g*h*s-d*_*s-g*i*p+t*_*p+d*i*u-t*h*u)*A,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*u+t*o*u)*A,e[11]=(d*o*s-a*h*s-d*i*l+t*h*l+a*i*p-t*o*p)*A,e[12]=L*A,e[13]=(d*_*r-g*h*r+g*i*f-t*_*f-d*i*m+t*h*m)*A,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*A,e[15]=(a*h*r-d*o*r+d*i*c-t*h*c-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,h=o+o,f=s*l,p=s*d,g=s*h,_=a*d,m=a*h,u=o*h,E=c*l,b=c*d,M=c*h,L=i.x,R=i.y,A=i.z;return r[0]=(1-(_+u))*L,r[1]=(p+M)*L,r[2]=(g-b)*L,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(f+u))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+b)*A,r[9]=(m-E)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ii.set(r[0],r[1],r[2]).length();const a=ii.set(r[4],r[5],r[6]).length(),o=ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,d=1/a,h=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=d,Gt.elements[5]*=d,Gt.elements[6]*=d,Gt.elements[8]*=h,Gt.elements[9]*=h,Gt.elements[10]*=h,t.setFromRotationMatrix(Gt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=dn){const c=this.elements,l=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(o===dn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=dn){const c=this.elements,l=1/(t-e),d=1/(i-r),h=1/(a-s),f=(t+e)*l,p=(i+r)*d;let g,_;if(o===dn)g=(a+s)*h,_=-2*h;else if(o===zr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ii=new k,Gt=new ht,Yd=new k(0,0,0),$d=new k(1,1,1),Sn=new k,hr=new k,It=new k,Uo=new ht,Io=new Zi;class mn{constructor(e=0,t=0,i=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Io.setFromEuler(this),this.setFromQuaternion(Io,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kd=0;const No=new k,ri=new Zi,rn=new ht,fr=new k,Ni=new k,Zd=new k,Jd=new Zi,Fo=new k(1,0,0),Oo=new k(0,1,0),Bo=new k(0,0,1),zo={type:"added"},Qd={type:"removed"},si={type:"childadded",child:null},cs={type:"childremoved",child:null};class Ft extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new k,t=new mn,i=new Zi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ni,fr,this.up):rn.lookAt(fr,Ni,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),ri.setFromRotationMatrix(rn),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zo),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),cs.child=e,this.dispatchEvent(cs),cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zo),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new k(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new k,sn=new k,us=new k,an=new k,ai=new k,oi=new k,ko=new k,ds=new k,hs=new k,fs=new k,ps=new ct,ms=new ct,gs=new ct;class qt{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),sn.subVectors(i,t),us.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(sn),c=Wt.dot(us),l=sn.dot(sn),d=sn.dot(us),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*d)*f,g=(a*d-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return ps.setScalar(0),ms.setScalar(0),gs.setScalar(0),ps.fromBufferAttribute(e,t),ms.fromBufferAttribute(e,i),gs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ps,s.x),a.addScaledVector(ms,s.y),a.addScaledVector(gs,s.z),a}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),sn.subVectors(e,t),Wt.cross(sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Wt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ai.subVectors(r,i),oi.subVectors(s,i),ds.subVectors(e,i);const c=ai.dot(ds),l=oi.dot(ds);if(c<=0&&l<=0)return t.copy(i);hs.subVectors(e,r);const d=ai.dot(hs),h=oi.dot(hs);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(i).addScaledVector(ai,a);fs.subVectors(e,s);const p=ai.dot(fs),g=oi.dot(fs);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(oi,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return ko.subVectors(s,r),o=(h-d)/(h-d+(p-g)),t.copy(r).addScaledVector(ko,o);const u=1/(m+_+f);return a=_*u,o=f*u,t.copy(i).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function _s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Nd(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_s(a,s,e+1/3),this.g=_s(a,s,e),this.b=_s(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Yl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return $e.workingToColorSpace(vt.copy(this),e),Math.round(qe(vt.r*255,0,255))*65536+Math.round(qe(vt.g*255,0,255))*256+Math.round(qe(vt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,s=vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=d<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=kt){$e.workingToColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(pr);const i=Qr(Mn.h,pr.h,t),r=Qr(Mn.s,pr.s,t),s=Qr(Mn.l,pr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new nt;nt.NAMES=Yl;let eh=0;class Vr extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=gi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bs&&(i.blendSrc=this.blendSrc),this.blendDst!==zs&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $l extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new k,mr=new Ze;let th=0;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ao,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}}class Kl extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zl extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nh=0;const zt=new ht,vs=new Ft,li=new k,Nt=new Ji,Fi=new Ji,mt=new k;class Kn extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xl(e)?Zl:Kl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return vs.lookAt(e),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Nt.min,Fi.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,Fi.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(Fi.min),Nt.expandByPoint(Fi.max))}Nt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)mt.fromBufferAttribute(o,l),c&&(li.fromBufferAttribute(e,l),mt.add(li)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<i.count;D++)o[D]=new k,c[D]=new k;const l=new k,d=new k,h=new k,f=new Ze,p=new Ze,g=new Ze,_=new k,m=new k;function u(D,S,v){l.fromBufferAttribute(i,D),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),d.sub(l),h.sub(l),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(w),o[D].add(_),o[S].add(_),o[v].add(_),c[D].add(m),c[S].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,S=E.length;D<S;++D){const v=E[D],w=v.start,F=v.count;for(let O=w,G=w+F;O<G;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new k,M=new k,L=new k,R=new k;function A(D){L.fromBufferAttribute(r,D),R.copy(L);const S=o[D];b.copy(S),b.sub(L.multiplyScalar(L.dot(S))).normalize(),M.crossVectors(R,S);const w=M.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,w)}for(let D=0,S=E.length;D<S;++D){const v=E[D],w=v.start,F=v.count;for(let O=w,G=w+F;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,d=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,f=new l.constructor(c.length*d);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*d;for(let u=0;u<d;u++)f[g++]=l[p++]}return new Qt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const f=l[d],p=e(f,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new ht,In=new jd,gr=new qa,Vo=new k,_r=new k,vr=new k,xr=new k,xs=new k,Sr=new k,Go=new k,Mr=new k;class jt extends Ft{constructor(e=new Kn,t=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Sr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],h=s[c];d!==0&&(xs.fromBufferAttribute(h,e),a?Sr.addScaledVector(xs,d):Sr.addScaledVector(xs.sub(t),d))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(gr.containsPoint(In.origin)===!1&&(In.intersectSphere(gr,Vo)===null||In.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Ho.copy(s).invert(),In.copy(e.ray).applyMatrix4(Ho),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=b;M<L;M+=3){const R=o.getX(M),A=o.getX(M+1),D=o.getX(M+2);r=yr(this,u,e,i,l,d,h,R,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=yr(this,a,e,i,l,d,h,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,L=b;M<L;M+=3){const R=M,A=M+1,D=M+2;r=yr(this,u,e,i,l,d,h,R,A,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=m,b=m+1,M=m+2;r=yr(this,a,e,i,l,d,h,E,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ih(n,e,t,i,r,s,a,o){let c;if(e.side===Pt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===An,o),c===null)return null;Mr.copy(o),Mr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:n}}function yr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,_r),n.getVertexPosition(c,vr),n.getVertexPosition(l,xr);const d=ih(n,e,t,i,_r,vr,xr,Go);if(d){const h=new k;qt.getBarycoord(Go,_r,vr,xr,h),r&&(d.uv=qt.getInterpolatedAttribute(r,o,c,l,h,new Ze)),s&&(d.uv1=qt.getInterpolatedAttribute(s,o,c,l,h,new Ze)),a&&(d.normal=qt.getInterpolatedAttribute(a,o,c,l,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new k,materialIndex:0};qt.getNormal(_r,vr,xr,f.normal),d.face=f,d.barycoord=h}return d}class Qi extends Kn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(d,3)),this.setAttribute("uv",new Yn(h,2));function g(_,m,u,E,b,M,L,R,A,D,S){const v=M/A,w=L/D,F=M/2,O=L/2,G=R/2,J=A+1,V=D+1;let te=0,H=0;const oe=new k;for(let ce=0;ce<V;ce++){const xe=ce*w-O;for(let Ue=0;Ue<J;Ue++){const Ae=Ue*v-F;oe[_]=Ae*E,oe[m]=xe*b,oe[u]=G,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[u]=R>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Ue/A),h.push(1-ce/D),te+=1}}for(let ce=0;ce<D;ce++)for(let xe=0;xe<A;xe++){const Ue=f+xe+J*ce,Ae=f+xe+J*(ce+1),q=f+(xe+1)+J*(ce+1),Y=f+(xe+1)+J*ce;c.push(Ue,Ae,Y),c.push(Ae,q,Y),H+=6}o.addGroup(p,H,S),p+=H,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function rh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const sh={clone:Ti,merge:yt};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ql extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new k,Wo=new Ze,Xo=new Ze;class Xt extends Ql{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yn.x,yn.y).multiplyScalar(-e/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-e/yn.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,Xo),t.subVectors(Xo,Wo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,ui=1;class lh extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(ci,ui,e,t);r.layers=this.layers,this.add(r);const s=new Xt(ci,ui,e,t);s.layers=this.layers,this.add(s);const a=new Xt(ci,ui,e,t);a.layers=this.layers,this.add(a);const o=new Xt(ci,ui,e,t);o.layers=this.layers,this.add(o);const c=new Xt(ci,ui,e,t);c.layers=this.layers,this.add(c);const l=new Xt(ci,ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ec extends Lt{constructor(e=[],t=Mi,i,r,s,a,o,c,l,d){super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ec(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Tn});s.uniforms.tEquirect.value=t;const a=new jt(r,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=xt),new lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Er extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uh={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tc extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ms=new k,dh=new k,hh=new Be;class Bn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ms.subVectors(i,t).cross(dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ms),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hh.getNormalMatrix(e),r=this.coplanarPoint(Ms).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new qa,fh=new Ze(.5,.5),Tr=new k;class nc{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],u=r[12],E=r[13],b=r[14],M=r[15];if(i[0].setComponents(c-s,f-l,m-p,M-u).normalize(),i[1].setComponents(c+s,f+l,m+p,M+u).normalize(),i[2].setComponents(c+a,f+d,m+g,M+E).normalize(),i[3].setComponents(c-a,f-d,m-g,M-E).normalize(),i[4].setComponents(c-o,f-h,m-_,M-b).normalize(),t===dn)i[5].setComponents(c+o,f+h,m+_,M+b).normalize();else if(t===zr)i[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=fh.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Tr.x=r.normal.x>0?e.max.x:e.min.x,Tr.y=r.normal.y>0?e.max.y:e.min.y,Tr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ic extends Lt{constructor(e,t,i=$n,r,s,a,o=Yt,c=Yt,l,d=Wi,h=1){if(d!==Wi&&d!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wi extends Kn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,h=e/o,f=t/c,p=[],g=[],_=[],m=[];for(let u=0;u<d;u++){const E=u*f-a;for(let b=0;b<l;b++){const M=b*h-s;g.push(M,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<o;E++){const b=E+l*u,M=E+l*(u+1),L=E+1+l*(u+1),R=E+1+l*u;p.push(b,M,R),p.push(M,L,R)}this.setIndex(p),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mh extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ja extends Ql{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gh extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qo(n,e,t,i){const r=_h(i);switch(t){case zl:return n*e;case Hl:return n*e/r.components*r.byteLength;case Va:return n*e/r.components*r.byteLength;case Vl:return n*e*2/r.components*r.byteLength;case Ga:return n*e*2/r.components*r.byteLength;case kl:return n*e*3/r.components*r.byteLength;case Rt:return n*e*4/r.components*r.byteLength;case Wa:return n*e*4/r.components*r.byteLength;case Pr:case Lr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:case ea:return Math.max(n,16)*Math.max(e,8)/4;case Zs:case Qs:return Math.max(n,8)*Math.max(e,8)/2;case ta:case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case aa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ca:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ua:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ma:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ir:case va:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gl:case Sa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ma:case ya:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _h(n){switch(n){case pn:case Fl:return{byteLength:1,components:1};case Vi:case Ol:case $i:return{byteLength:2,components:1};case ka:case Ha:return{byteLength:2,components:4};case $n:case za:case Ht:return{byteLength:4,components:1};case Bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function rc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vh(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const d=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ah=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$h="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:xh,alphahash_pars_fragment:Sh,alphamap_fragment:Mh,alphamap_pars_fragment:yh,alphatest_fragment:Eh,alphatest_pars_fragment:Th,aomap_fragment:bh,aomap_pars_fragment:wh,batching_pars_vertex:Ah,batching_vertex:Rh,begin_vertex:Ch,beginnormal_vertex:Ph,bsdfs:Lh,iridescence_fragment:Dh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Ih,clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Fh,clipping_planes_vertex:Oh,color_fragment:Bh,color_pars_fragment:zh,color_pars_vertex:kh,color_vertex:Hh,common:Vh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:Xh,displacementmap_vertex:qh,emissivemap_fragment:jh,emissivemap_pars_fragment:Yh,colorspace_fragment:$h,colorspace_pars_fragment:Kh,envmap_fragment:Zh,envmap_common_pars_fragment:Jh,envmap_pars_fragment:Qh,envmap_pars_vertex:ef,envmap_physical_pars_fragment:hf,envmap_vertex:tf,fog_vertex:nf,fog_pars_vertex:rf,fog_fragment:sf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:_f,lights_physical_pars_fragment:vf,lights_fragment_begin:xf,lights_fragment_maps:Sf,lights_fragment_end:Mf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:bf,map_fragment:wf,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Df,morphcolor_vertex:Uf,morphnormal_vertex:If,morphtarget_pars_vertex:Nf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:kf,normal_vertex:Hf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:jf,packing:Yf,premultiplied_alpha_fragment:$f,project_vertex:Kf,dithering_fragment:Zf,dithering_pars_fragment:Jf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:rp,skinbase_vertex:sp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:hp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:vp,background_vert:xp,background_frag:Sp,backgroundCube_vert:Mp,backgroundCube_frag:yp,cube_vert:Ep,cube_frag:Tp,depth_vert:bp,depth_frag:wp,distanceRGBA_vert:Ap,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Up,meshbasic_frag:Ip,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:kp,meshphong_vert:Hp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:jp,points_frag:Yp,shadow_vert:$p,shadow_frag:Kp,sprite_vert:Zp,sprite_frag:Jp},fe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Kt={basic:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:yt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:yt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:yt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:yt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:yt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:yt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:yt([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:yt([fe.lights,fe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Kt.physical={uniforms:yt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const br={r:0,b:0,g:0},Fn=new mn,Qp=new ht;function em(n,e,t,i,r,s,a){const o=new nt(0);let c=s===!0?0:1,l,d,h=null,f=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1;const L=g(b);L===null?u(o,c):L&&L.isColor&&(u(L,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const L=g(M);L&&(L.isCubeTexture||L.mapping===Hr)?(d===void 0&&(d=new jt(new Qi(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ti(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Fn.copy(M.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Fn)),d.material.toneMapped=$e.getTransfer(L.colorSpace)!==tt,(h!==L||f!==L.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,h=L,f=L.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new jt(new wi(2,2),new At({name:"BackgroundMaterial",uniforms:Ti(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$e.getTransfer(L.colorSpace)!==tt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=L,f=L.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function u(b,M){b.getRGB(br,Jl(n)),i.buffers.color.setClear(br.r,br.g,br.b,M,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,u(o,c)},render:_,addToRenderList:m,dispose:E}}function tm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(v,w,F,O,G){let J=!1;const V=h(O,F,w);s!==V&&(s=V,l(s.object)),J=p(v,O,F,G),J&&g(v,O,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(v,w,F,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function d(v){return n.deleteVertexArray(v)}function h(v,w,F){const O=F.wireframe===!0;let G=i[v.id];G===void 0&&(G={},i[v.id]=G);let J=G[w.id];J===void 0&&(J={},G[w.id]=J);let V=J[O];return V===void 0&&(V=f(c()),J[O]=V),V}function f(v){const w=[],F=[],O=[];for(let G=0;G<t;G++)w[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,w,F,O){const G=s.attributes,J=w.attributes;let V=0;const te=F.getAttributes();for(const H in te)if(te[H].location>=0){const ce=G[H];let xe=J[H];if(xe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(v,w,F,O){const G={},J=w.attributes;let V=0;const te=F.getAttributes();for(const H in te)if(te[H].location>=0){let ce=J[H];ce===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor));const xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),G[H]=xe,V++}s.attributes=G,s.attributesNum=V,s.index=O}function _(){const v=s.newAttributes;for(let w=0,F=v.length;w<F;w++)v[w]=0}function m(v){u(v,0)}function u(v,w){const F=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;F[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),G[v]!==w&&(n.vertexAttribDivisor(v,w),G[v]=w)}function E(){const v=s.newAttributes,w=s.enabledAttributes;for(let F=0,O=w.length;F<O;F++)w[F]!==v[F]&&(n.disableVertexAttribArray(F),w[F]=0)}function b(v,w,F,O,G,J,V){V===!0?n.vertexAttribIPointer(v,w,F,G,J):n.vertexAttribPointer(v,w,F,O,G,J)}function M(v,w,F,O){_();const G=O.attributes,J=F.getAttributes(),V=w.defaultAttributeValues;for(const te in J){const H=J[te];if(H.location>=0){let oe=G[te];if(oe===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const ce=oe.normalized,xe=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const Ae=Ue.buffer,q=Ue.type,Y=Ue.bytesPerElement,ue=q===n.INT||q===n.UNSIGNED_INT||oe.gpuType===za;if(oe.isInterleavedBufferAttribute){const se=oe.data,me=se.stride,Pe=oe.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)u(H.location+be,se.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let be=0;be<H.locationSize;be++)b(H.location+be,xe/H.locationSize,q,ce,me*Y,(Pe+xe/H.locationSize*be)*Y,ue)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)u(H.location+se,oe.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let se=0;se<H.locationSize;se++)b(H.location+se,xe/H.locationSize,q,ce,xe*Y,xe/H.locationSize*se*Y,ue)}}else if(V!==void 0){const ce=V[te];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(H.location,ce);break;case 3:n.vertexAttrib3fv(H.location,ce);break;case 4:n.vertexAttrib4fv(H.location,ce);break;default:n.vertexAttrib1fv(H.location,ce)}}}}E()}function L(){D();for(const v in i){const w=i[v];for(const F in w){const O=w[F];for(const G in O)d(O[G].object),delete O[G];delete w[F]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const F in w){const O=w[F];for(const G in O)d(O[G].object),delete O[G];delete w[F]}delete i[v.id]}function A(v){for(const w in i){const F=i[w];if(F[v.id]===void 0)continue;const O=F[v.id];for(const G in O)d(O[G].object),delete O[G];delete F[v.id]}}function D(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function nm(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function a(l,d,h){h!==0&&(n.drawArraysInstanced(i,l,d,h),t.update(d,i,h))}function o(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,i,1)}function c(l,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,d,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function im(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Rt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ht&&!D)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:L,maxSamples:R}}function rm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,u=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const E=s?0:i,b=E*4;let M=u.clippingState||null;c.value=M,M=d(g,f,b,p);for(let L=0;L!==b;++L)M[L]=t[L];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=p+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,M=p;b!==_;++b,M+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sm(n){let e=new WeakMap;function t(a,o){return o===js?a.mapping=Mi:o===Ys&&(a.mapping=yi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===js||o===Ys)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ch(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pi=4,jo=[.125,.215,.35,.446,.526,.582],Vn=20,ys=new ja,Yo=new nt;let Es=null,Ts=0,bs=0,ws=!1;const zn=(1+Math.sqrt(5))/2,di=1/zn,$o=[new k(-zn,di,0),new k(zn,di,0),new k(-di,0,zn),new k(di,0,zn),new k(0,zn,-di),new k(0,zn,di),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],am=new k;class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=am}=s;Es=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,Ts,bs),this._renderer.xr.enabled=ws,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),bs=this._renderer.getActiveMipmapLevel(),ws=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:$i,format:Rt,colorSpace:Ei,depthBuffer:!1},r=Zo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(s)),this._blurMaterial=lm(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,i,r,s){const c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Yo),h.toneMapping=bn,h.autoClear=!1;const g=new $l({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new jt(new Qi,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(Yo),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[E],s.y,s.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[E]));const M=this._cubeSize;wr(r,b*M,E>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(_,c),h.render(e,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mi||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;wr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ys)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$o[(r-s-1)%$o.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new jt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const u=[];let E=0;for(let A=0;A<Vn;++A){const D=A/_,S=Math.exp(-D*D/2);u.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const M=this._sizeLods[r],L=3*M*(r>b-pi?r-b+pi:0),R=4*(this._cubeSize-M);wr(t,L,R,3*M,2*M),c.setRenderTarget(t),c.render(h,ys)}}function om(n){const e=[],t=[],i=[];let r=n;const s=n-pi+1+jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-pi?c=jo[a-n+pi-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,_=3,m=2,u=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,D=R>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(S,_*g*R),b.set(f,m*g*R);const v=[R,R,R,R,R,R];M.set(v,u*g*R)}const L=new Kn;L.setAttribute("position",new Qt(E,_)),L.setAttribute("uv",new Qt(b,m)),L.setAttribute("faceIndex",new Qt(M,u)),e.push(L),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zo(n,e,t){const i=new Jt(n,e,t);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lm(n,e,t){const i=new Float32Array(Vn),r=new k(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Jo(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Qo(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===js||c===Ys,d=c===Mi||c===yi;if(l||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ko(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||d&&p&&r(p)?(t===null&&(t=new Ko(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function um(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_i("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dm(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,M=E.length;b<M;b+=3){const L=E[b+0],R=E[b+1],A=E[b+2];f.push(L,R,R,A,A,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const L=b+0,R=b+1,A=b+2;f.push(L,R,R,A,A,L)}}else return;const m=new(Xl(f)?Zl:Kl)(f,1);m.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function hm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),t.update(p,i,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=p[E]*_[E];t.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function fm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pm(n,e,t){const i=new WeakMap,r=new ct;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let p=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",p)};f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let L=o.attributes.position.count*M,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*R*4*h),D=new ql(A,L,R,h);D.type=Ht,D.needsUpdate=!0;const S=M*4;for(let v=0;v<h;v++){const w=u[v],F=E[v],O=b[v],G=L*R*4*v;for(let J=0;J<w.count;J++){const V=J*S;g===!0&&(r.fromBufferAttribute(w,J),A[G+V+0]=r.x,A[G+V+1]=r.y,A[G+V+2]=r.z,A[G+V+3]=0),_===!0&&(r.fromBufferAttribute(F,J),A[G+V+4]=r.x,A[G+V+5]=r.y,A[G+V+6]=r.z,A[G+V+7]=0),m===!0&&(r.fromBufferAttribute(O,J),A[G+V+8]=r.x,A[G+V+9]=r.y,A[G+V+10]=r.z,A[G+V+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new Ze(L,R)},i.set(o,f),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mm(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const sc=new Lt,el=new ic(1,1),ac=new ql,oc=new Xd,lc=new ec,tl=[],nl=[],il=new Float32Array(16),rl=new Float32Array(9),sl=new Float32Array(4);function Ai(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tl[r];if(s===void 0&&(s=new Float32Array(r),tl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gr(n,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Sm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;sl.set(i),n.uniformMatrix2fv(this.addr,!1,sl),pt(t,i)}}function Mm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;rl.set(i),n.uniformMatrix3fv(this.addr,!1,rl),pt(t,i)}}function ym(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,i))return;il.set(i),n.uniformMatrix4fv(this.addr,!1,il),pt(t,i)}}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Am(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Lm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(el.compareFunction=Wl,s=el):s=sc,t.setTexture2D(e||s,r)}function Dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||oc,r)}function Um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lc,r)}function Im(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ac,r)}function Nm(n){switch(n){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return Sm;case 35675:return Mm;case 35676:return ym;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return bm;case 35669:case 35673:return wm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Im}}function Fm(n,e){n.uniform1fv(this.addr,e)}function Om(n,e){const t=Ai(e,this.size,2);n.uniform2fv(this.addr,t)}function Bm(n,e){const t=Ai(e,this.size,3);n.uniform3fv(this.addr,t)}function zm(n,e){const t=Ai(e,this.size,4);n.uniform4fv(this.addr,t)}function km(n,e){const t=Ai(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hm(n,e){const t=Ai(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vm(n,e){const t=Ai(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gm(n,e){n.uniform1iv(this.addr,e)}function Wm(n,e){n.uniform2iv(this.addr,e)}function Xm(n,e){n.uniform3iv(this.addr,e)}function qm(n,e){n.uniform4iv(this.addr,e)}function jm(n,e){n.uniform1uiv(this.addr,e)}function Ym(n,e){n.uniform2uiv(this.addr,e)}function $m(n,e){n.uniform3uiv(this.addr,e)}function Km(n,e){n.uniform4uiv(this.addr,e)}function Zm(n,e,t){const i=this.cache,r=e.length,s=Gr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sc,s[a])}function Jm(n,e,t){const i=this.cache,r=e.length,s=Gr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||oc,s[a])}function Qm(n,e,t){const i=this.cache,r=e.length,s=Gr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||lc,s[a])}function eg(n,e,t){const i=this.cache,r=e.length,s=Gr(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ac,s[a])}function tg(n){switch(n){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return km;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return jm;case 36294:return Ym;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}class ng{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}}class ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tg(t.type)}}class rg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const As=/(\w+)(\])?(\[|\.)?/g;function al(n,e){n.seq.push(e),n.map[e.id]=e}function sg(n,e,t){const i=n.name,r=i.length;for(As.lastIndex=0;;){const s=As.exec(i),a=As.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){al(t,l===void 0?new ng(o,n,e):new ig(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new rg(o),al(t,h)),t=h}}}class Nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);sg(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ol(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ag=37297;let og=0;function lg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ll=new Be;function cg(n){$e._getMatrix(ll,$e.workingColorSpace,n);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Br:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lg(n.getShaderSource(e),a)}else return r}function ug(n,e){const t=cg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dg(n,e){let t;switch(e){case gd:t="Linear";break;case _d:t="Reinhard";break;case vd:t="Cineon";break;case xd:t="ACESFilmic";break;case Md:t="AgX";break;case yd:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new k;function hg(){$e.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function pg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Oi(n){return n!==""}function ul(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(n){return n.replace(gg,vg)}const _g=new Map;function vg(n,e){let t=ke[e];if(t===void 0){const i=_g.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(n){return n.replace(xg,Sg)}function Sg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function yg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case yi:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===yi&&(e="ENVMAP_MODE_REFRACTION"),e}function Tg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function bg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wg(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Mg(t),l=yg(t),d=Eg(t),h=Tg(t),f=bg(t),p=fg(t),g=pg(s),_=r.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),u.length>0&&(u+=`
`)):(m=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),u=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?ke.tonemapping_pars_fragment:"",t.toneMapping!==bn?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ug("linearToOutputTexel",t.outputColorSpace),hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),a=Ta(a),a=ul(a,t),a=dl(a,t),o=Ta(o),o=ul(o,t),o=dl(o,t),a=hl(a),o=hl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=E+m+a,M=E+u+o,L=ol(r,r.VERTEX_SHADER,b),R=ol(r,r.FRAGMENT_SHADER,M);r.attachShader(_,L),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(w){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(L).trim(),G=r.getShaderInfoLog(R).trim();let J=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,R);else{const te=cl(r,L,"vertex"),H=cl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+te+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||G==="")&&(V=!1);V&&(w.diagnostics={runnable:J,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:u}})}r.deleteShader(L),r.deleteShader(R),D=new Nr(r,_),S=mg(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,ag)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let Ag=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cg(e),t.set(e,i)),i}}class Cg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Pg(n,e,t,i,r,s,a){const o=new jl,c=new Rg,l=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,w,F,O){const G=F.fog,J=O.geometry,V=S.isMeshStandardMaterial?F.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),H=te&&te.mapping===Hr?te.image.height:null,oe=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xe=ce!==void 0?ce.length:0;let Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let Ae,q,Y,ue;if(oe){const je=Kt[oe];Ae=je.vertexShader,q=je.fragmentShader}else Ae=S.vertexShader,q=S.fragmentShader,c.update(S),Y=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const se=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Pe=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,He=!!S.map,Ke=!!S.matcap,Xe=!!te,C=!!S.aoMap,ut=!!S.lightMap,ze=!!S.bumpMap,Ve=!!S.normalMap,Se=!!S.displacementMap,Ge=!!S.emissiveMap,Ee=!!S.metalnessMap,Ne=!!S.roughnessMap,Je=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,N=S.iridescence>0,j=S.sheen>0,K=S.transmission>0,X=Je&&!!S.anisotropyMap,ae=T&&!!S.clearcoatMap,ne=T&&!!S.clearcoatNormalMap,_e=T&&!!S.clearcoatRoughnessMap,Te=N&&!!S.iridescenceMap,Q=N&&!!S.iridescenceThicknessMap,ve=j&&!!S.sheenColorMap,Le=j&&!!S.sheenRoughnessMap,we=!!S.specularMap,de=!!S.specularColorMap,Ie=!!S.specularIntensityMap,P=K&&!!S.transmissionMap,le=K&&!!S.thicknessMap,ee=!!S.gradientMap,he=!!S.alphaMap,Z=S.alphaTest>0,$=!!S.alphaHash,pe=!!S.extensions;let Re=bn;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Qe={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ae,fragmentShader:q,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,instancingMorph:Pe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:Ke,envMap:Xe,envMapMode:Xe&&te.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:ut,bumpMap:ze,normalMap:Ve,displacementMap:f&&Se,emissiveMap:Ge,normalMapObjectSpace:Ve&&S.normalMapType===Ad,normalMapTangentSpace:Ve&&S.normalMapType===wd,metalnessMap:Ee,roughnessMap:Ne,anisotropy:Je,anisotropyMap:X,clearcoat:T,clearcoatMap:ae,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:x,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:ve,sheenRoughnessMap:Le,specularMap:we,specularColorMap:de,specularIntensityMap:Ie,transmission:K,transmissionMap:P,thicknessMap:le,gradientMap:ee,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:$,combine:S.combine,mapUv:He&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:ut&&_(S.lightMap.channel),bumpMapUv:ze&&_(S.bumpMap.channel),normalMapUv:Ve&&_(S.normalMap.channel),displacementMapUv:Se&&_(S.displacementMap.channel),emissiveMapUv:Ge&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:Ne&&_(S.roughnessMap.channel),anisotropyMapUv:X&&_(S.anisotropyMap.channel),clearcoatMapUv:ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:we&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:Ie&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ve||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(He||he),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:me,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:Ge&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)v.push(w),v.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(E(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const v=g[S.type];let w;if(v){const F=Kt[v];w=sh.clone(F.uniforms)}else w=S.uniforms;return w}function L(S,v){let w;for(let F=0,O=d.length;F<O;F++){const G=d[F];if(G.cacheKey===v){w=G,++w.usedTimes;break}}return w===void 0&&(w=new wg(n,v,S,s),d.push(w)),w}function R(S){if(--S.usedTimes===0){const v=d.indexOf(S);d[v]=d[d.length-1],d.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:D}}function Lg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ml(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,g,_,m){let u=n[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=_,u.group=m),e++,u}function o(h,f,p,g,_,m){const u=a(h,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,f,p,g,_,m){const u=a(h,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||Dg),i.length>1&&i.sort(f||pl),r.length>1&&r.sort(f||pl)}function d(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Ug(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ml,n.set(i,[a])):r>=s.length?(a=new ml,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ig(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new nt};break;case"SpotLight":t={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Ng(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fg=0;function Og(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bg(n){const e=new Ig,t=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new k);const r=new k,s=new ht,a=new ht;function o(l){let d=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,E=0,b=0,M=0,L=0,R=0,A=0;l.sort(Og);for(let S=0,v=l.length;S<v;S++){const w=l[S],F=w.color,O=w.intensity,G=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=F.r*O,h+=F.g*O,f+=F.b*O;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],O);A++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const te=w.shadow,H=t.get(w);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=w.shadow.matrix,E++}i.directional[p]=V,p++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[_]=V;const te=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,te.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[_]=te.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=J,M++}_++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const te=w.shadow,H=t.get(w);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=V,g++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(O),V.groundColor.copy(w.groundColor).multiplyScalar(O),i.hemi[u]=V,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==M||D.numSpotMaps!==L||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=M,D.numSpotMaps=L,D.numLightProbes=A,i.version=Fg++)}function c(l,d){let h=0,f=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const b=l[u];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(b.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function gl(n){const e=new Bg(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function zg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gl(n),e.set(r,[o])):s>=a.length?(o=new gl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vg(n,e,t){let i=new nc;const r=new Ze,s=new Ze,a=new ct,o=new ph({depthPacking:bd}),c=new mh,l={},d=t.maxTextureSize,h={[An]:Pt,[Pt]:An,[cn]:cn},f=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let u=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Tn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=u!==ln&&this.type===ln,G=u===ln&&this.type!==ln;for(let J=0,V=R.length;J<V;J++){const te=R[J],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||O===!0||G===!0){const xe=this.type!==ln?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new Jt(r.x,r.y,xe),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ce=H.getViewportCount();for(let xe=0;xe<ce;xe++){const Ue=H.getViewport(xe);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),F.viewport(a),H.updateMatrices(te,xe),i=H.getFrustum(),M(A,D,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===ln&&E(H,D),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,w)};function E(R,A){const D=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Jt(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,D,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,D,p,_,null)}function b(R,A,D,S){let v=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=D.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=v.uuid,O=A.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let J=G[O];J===void 0&&(J=v.clone(),G[O]=J,A.addEventListener("dispose",L)),v=J}if(v.visible=A.visible,v.wireframe=A.wireframe,S===ln?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=D}return v}function M(R,A,D,S,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ln)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const O=e.update(R),G=R.material;if(Array.isArray(G)){const J=O.groups;for(let V=0,te=J.length;V<te;V++){const H=J[V],oe=G[H.materialIndex];if(oe&&oe.visible){const ce=b(R,oe,S,v);R.onBeforeShadow(n,R,A,D,O,ce,H),n.renderBufferDirect(D,null,O,ce,R,H),R.onAfterShadow(n,R,A,D,O,ce,H)}}}else if(G.visible){const J=b(R,G,S,v);R.onBeforeShadow(n,R,A,D,O,J,null),n.renderBufferDirect(D,null,O,J,R,null),R.onAfterShadow(n,R,A,D,O,J,null)}}const F=R.children;for(let O=0,G=F.length;O<G;O++)M(F[O],A,D,S,v)}function L(R){R.target.removeEventListener("dispose",L);for(const D in l){const S=l[D],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Gg={[ks]:Hs,[Vs]:Xs,[Gs]:qs,[Si]:Ws,[Hs]:ks,[Xs]:Vs,[qs]:Gs,[Ws]:Si};function Wg(n,e){function t(){let P=!1;const le=new ct;let ee=null;const he=new ct(0,0,0,0);return{setMask:function(Z){ee!==Z&&!P&&(n.colorMask(Z,Z,Z,Z),ee=Z)},setLocked:function(Z){P=Z},setClear:function(Z,$,pe,Re,Qe){Qe===!0&&(Z*=Re,$*=Re,pe*=Re),le.set(Z,$,pe,Re),he.equals(le)===!1&&(n.clearColor(Z,$,pe,Re),he.copy(le))},reset:function(){P=!1,ee=null,he.set(-1,0,0,0)}}}function i(){let P=!1,le=!1,ee=null,he=null,Z=null;return{setReversed:function($){if(le!==$){const pe=e.get("EXT_clip_control");$?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),le=$;const Re=Z;Z=null,this.setClear(Re)}},getReversed:function(){return le},setTest:function($){$?se(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function($){ee!==$&&!P&&(n.depthMask($),ee=$)},setFunc:function($){if(le&&($=Gg[$]),he!==$){switch($){case ks:n.depthFunc(n.NEVER);break;case Hs:n.depthFunc(n.ALWAYS);break;case Vs:n.depthFunc(n.LESS);break;case Si:n.depthFunc(n.LEQUAL);break;case Gs:n.depthFunc(n.EQUAL);break;case Ws:n.depthFunc(n.GEQUAL);break;case Xs:n.depthFunc(n.GREATER);break;case qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=$}},setLocked:function($){P=$},setClear:function($){Z!==$&&(le&&($=1-$),n.clearDepth($),Z=$)},reset:function(){P=!1,ee=null,he=null,Z=null,le=!1}}}function r(){let P=!1,le=null,ee=null,he=null,Z=null,$=null,pe=null,Re=null,Qe=null;return{setTest:function(je){P||(je?se(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(je){le!==je&&!P&&(n.stencilMask(je),le=je)},setFunc:function(je,St,gt){(ee!==je||he!==St||Z!==gt)&&(n.stencilFunc(je,St,gt),ee=je,he=St,Z=gt)},setOp:function(je,St,gt){($!==je||pe!==St||Re!==gt)&&(n.stencilOp(je,St,gt),$=je,pe=St,Re=gt)},setLocked:function(je){P=je},setClear:function(je){Qe!==je&&(n.clearStencil(je),Qe=je)},reset:function(){P=!1,le=null,ee=null,he=null,Z=null,$=null,pe=null,Re=null,Qe=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,b=null,M=null,L=null,R=null,A=new nt(0,0,0),D=0,S=!1,v=null,w=null,F=null,O=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=te>=2);let oe=null,ce={};const xe=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Ae=new ct().fromArray(xe),q=new ct().fromArray(Ue);function Y(P,le,ee,he){const Z=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ee;pe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(le+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return $}const ue={};ue[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(Si),ze(!1),Ve(Eo),se(n.CULL_FACE),C(Tn);function se(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function me(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Pe(P,le){return h[P]!==le?(n.bindFramebuffer(P,le),h[P]=le,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function be(P,le){let ee=p,he=!1;if(P){ee=f.get(le),ee===void 0&&(ee=[],f.set(le,ee));const Z=P.textures;if(ee.length!==Z.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let $=0,pe=Z.length;$<pe;$++)ee[$]=n.COLOR_ATTACHMENT0+$;ee.length=Z.length,he=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,he=!0);he&&n.drawBuffers(ee)}function He(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Ke={[Hn]:n.FUNC_ADD,[Zu]:n.FUNC_SUBTRACT,[Ju]:n.FUNC_REVERSE_SUBTRACT};Ke[Qu]=n.MIN,Ke[ed]=n.MAX;const Xe={[td]:n.ZERO,[nd]:n.ONE,[id]:n.SRC_COLOR,[Bs]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[sd]:n.DST_ALPHA,[rd]:n.ONE_MINUS_SRC_COLOR,[zs]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[dd]:n.ONE_MINUS_CONSTANT_COLOR,[hd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function C(P,le,ee,he,Z,$,pe,Re,Qe,je){if(P===Tn){_===!0&&(me(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),P!==Ku){if(P!==m||je!==S){if((u!==Hn||M!==Hn)&&(n.blendEquation(n.FUNC_ADD),u=Hn,M=Hn),je)switch(P){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.ONE,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case To:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,b=null,L=null,R=null,A.set(0,0,0),D=0,m=P,S=je}return}Z=Z||le,$=$||ee,pe=pe||he,(le!==u||Z!==M)&&(n.blendEquationSeparate(Ke[le],Ke[Z]),u=le,M=Z),(ee!==E||he!==b||$!==L||pe!==R)&&(n.blendFuncSeparate(Xe[ee],Xe[he],Xe[$],Xe[pe]),E=ee,b=he,L=$,R=pe),(Re.equals(A)===!1||Qe!==D)&&(n.blendColor(Re.r,Re.g,Re.b,Qe),A.copy(Re),D=Qe),m=P,S=!1}function ut(P,le){P.side===cn?me(n.CULL_FACE):se(n.CULL_FACE);let ee=P.side===Pt;le&&(ee=!ee),ze(ee),P.blending===gi&&P.transparent===!1?C(Tn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(P){v!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),v=P)}function Ve(P){P!==ju?(se(n.CULL_FACE),P!==w&&(P===Eo?n.cullFace(n.BACK):P===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),w=P}function Se(P){P!==F&&(V&&n.lineWidth(P),F=P)}function Ge(P,le,ee){P?(se(n.POLYGON_OFFSET_FILL),(O!==le||G!==ee)&&(n.polygonOffset(le,ee),O=le,G=ee)):me(n.POLYGON_OFFSET_FILL)}function Ee(P){P?se(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Ne(P){P===void 0&&(P=n.TEXTURE0+J-1),oe!==P&&(n.activeTexture(P),oe=P)}function Je(P,le,ee){ee===void 0&&(oe===null?ee=n.TEXTURE0+J-1:ee=oe);let he=ce[ee];he===void 0&&(he={type:void 0,texture:void 0},ce[ee]=he),(he.type!==P||he.texture!==le)&&(oe!==ee&&(n.activeTexture(ee),oe=ee),n.bindTexture(P,le||ue[P]),he.type=P,he.texture=le)}function T(){const P=ce[oe];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){Ae.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Ae.copy(P))}function Le(P){q.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function we(P,le){let ee=l.get(le);ee===void 0&&(ee=new WeakMap,l.set(le,ee));let he=ee.get(P);he===void 0&&(he=n.getUniformBlockIndex(le,P.name),ee.set(P,he))}function de(P,le){const he=l.get(le).get(P);c.get(le)!==he&&(n.uniformBlockBinding(le,he,P.__bindingPointIndex),c.set(le,he))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,ce={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,b=null,M=null,L=null,R=null,A=new nt(0,0,0),D=0,S=!1,v=null,w=null,F=null,O=null,G=null,Ae.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:me,bindFramebuffer:Pe,drawBuffers:be,useProgram:He,setBlending:C,setMaterial:ut,setFlipSided:ze,setCullFace:Ve,setLineWidth:Se,setPolygonOffset:Ge,setScissorTest:Ee,activeTexture:Ne,bindTexture:Je,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Te,texImage3D:Q,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:ne,texStorage3D:_e,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:ae,scissor:ve,viewport:Le,reset:Ie}}function Xg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):kr("canvas")}function _(T,x,N){let j=1;const K=Je(T);if((K.width>N||K.height>N)&&(j=N/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(j*K.width),ae=Math.floor(j*K.height);h===void 0&&(h=g(X,ae));const ne=x?g(X,ae):h;return ne.width=X,ne.height=ae,ne.getContext("2d").drawImage(T,0,0,X,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+ae+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,x,N,j,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),x===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),x===n.RGBA){const ae=K?Br:$e.getTransfer(j);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=ae===tt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(T,x){let N;return T?x===null||x===$n||x===Gi?N=n.DEPTH24_STENCIL8:x===Ht?N=n.DEPTH32F_STENCIL8:x===Vi&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===Gi?N=n.DEPTH_COMPONENT24:x===Ht?N=n.DEPTH_COMPONENT32F:x===Vi&&(N=n.DEPTH_COMPONENT16),N}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Yt&&T.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&d.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),v(x)}function D(T){const x=i.get(T);if(x.__webglInit===void 0)return;const N=T.source,j=f.get(N);if(j){const K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(T),Object.keys(j).length===0&&f.delete(N)}i.remove(T)}function S(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const N=T.source,j=f.get(N);delete j[x.__cacheKey],a.memory.textures--}function v(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let K=0;K<x.__webglFramebuffer[j].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[j][K]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let j=0,K=N.length;j<K;j++){const X=i.get(N[j]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(N[j])}i.remove(T)}let w=0;function F(){w=0}function O(){const T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function G(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function J(T,x){const N=i.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(N,T,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function V(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){ue(N,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function te(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){ue(N,T,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function H(T,x){const N=i.get(T);if(T.version>0&&N.__version!==T.version){se(N,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const oe={[$s]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[Ks]:n.MIRRORED_REPEAT},ce={[Yt]:n.NEAREST,[Ed]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[xt]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},xe={[Rd]:n.NEVER,[Id]:n.ALWAYS,[Cd]:n.LESS,[Wl]:n.LEQUAL,[Pd]:n.EQUAL,[Ud]:n.GEQUAL,[Ld]:n.GREATER,[Dd]:n.NOTEQUAL};function Ue(T,x){if(x.type===Ht&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===xt||x.magFilter===Zr||x.magFilter===ar||x.magFilter===Wn||x.minFilter===xt||x.minFilter===Zr||x.minFilter===ar||x.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,oe[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ce[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ce[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Yt||x.minFilter!==ar&&x.minFilter!==Wn||x.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let K=f.get(j);K===void 0&&(K={},f.set(j,K));const X=G(x);if(X!==T.__cacheKey){K[X]===void 0&&(K[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[X].usedTimes++;const ae=K[T.__cacheKey];ae!==void 0&&(K[T.__cacheKey].usedTimes--,ae.usedTimes===0&&S(x)),T.__cacheKey=X,T.__webglTexture=K[X].texture}return N}function q(T,x,N){return Math.floor(Math.floor(T/N)/x)}function Y(T,x,N,j){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,N,j,x.data);else{X.sort((Q,ve)=>Q.start-ve.start);let ae=0;for(let Q=1;Q<X.length;Q++){const ve=X[ae],Le=X[Q],we=ve.start+ve.count,de=q(Le.start,x.width,4),Ie=q(ve.start,x.width,4);Le.start<=we+1&&de===Ie&&q(Le.start+Le.count-1,x.width,4)===de?ve.count=Math.max(ve.count,Le.start+Le.count-ve.start):(++ae,X[ae]=Le)}X.length=ae+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ve=X.length;Q<ve;Q++){const Le=X[Q],we=Math.floor(Le.start/4),de=Math.ceil(Le.count/4),Ie=we%x.width,P=Math.floor(we/x.width),le=de,ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ie,P,le,ee,N,j,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function ue(T,x,N){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const K=Ae(T,x),X=x.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+N);const ae=i.get(X);if(X.version!==ae.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const ne=$e.getPrimaries($e.workingColorSpace),_e=x.colorSpace===En?null:$e.getPrimaries(x.colorSpace),Te=x.colorSpace===En||ne===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Q=_(x.image,!1,r.maxTextureSize);Q=Ne(x,Q);const ve=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let we=b(x.internalFormat,ve,Le,x.colorSpace,x.isVideoTexture);Ue(j,x);let de;const Ie=x.mipmaps,P=x.isVideoTexture!==!0,le=ae.__version===void 0||K===!0,ee=X.dataReady,he=L(x,Q);if(x.isDepthTexture)we=M(x.format===Xi,x.type),le&&(P?t.texStorage2D(n.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,ve,Le,null));else if(x.isDataTexture)if(Ie.length>0){P&&le&&t.texStorage2D(n.TEXTURE_2D,he,we,Ie[0].width,Ie[0].height);for(let Z=0,$=Ie.length;Z<$;Z++)de=Ie[Z],P?ee&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,de.width,de.height,ve,Le,de.data):t.texImage2D(n.TEXTURE_2D,Z,we,de.width,de.height,0,ve,Le,de.data);x.generateMipmaps=!1}else P?(le&&t.texStorage2D(n.TEXTURE_2D,he,we,Q.width,Q.height),ee&&Y(x,Q,ve,Le)):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,ve,Le,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,Ie[0].width,Ie[0].height,Q.depth);for(let Z=0,$=Ie.length;Z<$;Z++)if(de=Ie[Z],x.format!==Rt)if(ve!==null)if(P){if(ee)if(x.layerUpdates.size>0){const pe=qo(de.width,de.height,x.format,x.type);for(const Re of x.layerUpdates){const Qe=de.data.subarray(Re*pe/de.data.BYTES_PER_ELEMENT,(Re+1)*pe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Re,de.width,de.height,1,ve,Qe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,Q.depth,ve,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,we,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,de.width,de.height,Q.depth,ve,Le,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,we,de.width,de.height,Q.depth,0,ve,Le,de.data)}else{P&&le&&t.texStorage2D(n.TEXTURE_2D,he,we,Ie[0].width,Ie[0].height);for(let Z=0,$=Ie.length;Z<$;Z++)de=Ie[Z],x.format!==Rt?ve!==null?P?ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,de.width,de.height,ve,Le,de.data):t.texImage2D(n.TEXTURE_2D,Z,we,de.width,de.height,0,ve,Le,de.data)}else if(x.isDataArrayTexture)if(P){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,we,Q.width,Q.height,Q.depth),ee)if(x.layerUpdates.size>0){const Z=qo(Q.width,Q.height,x.format,x.type);for(const $ of x.layerUpdates){const pe=Q.data.subarray($*Z/Q.data.BYTES_PER_ELEMENT,($+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ve,Le,pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,Le,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,ve,Le,Q.data);else if(x.isData3DTexture)P?(le&&t.texStorage3D(n.TEXTURE_3D,he,we,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,Le,Q.data)):t.texImage3D(n.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,ve,Le,Q.data);else if(x.isFramebufferTexture){if(le)if(P)t.texStorage2D(n.TEXTURE_2D,he,we,Q.width,Q.height);else{let Z=Q.width,$=Q.height;for(let pe=0;pe<he;pe++)t.texImage2D(n.TEXTURE_2D,pe,we,Z,$,0,ve,Le,null),Z>>=1,$>>=1}}else if(Ie.length>0){if(P&&le){const Z=Je(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,we,Z.width,Z.height)}for(let Z=0,$=Ie.length;Z<$;Z++)de=Ie[Z],P?ee&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,ve,Le,de):t.texImage2D(n.TEXTURE_2D,Z,we,ve,Le,de);x.generateMipmaps=!1}else if(P){if(le){const Z=Je(Q);t.texStorage2D(n.TEXTURE_2D,he,we,Z.width,Z.height)}ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Le,Q)}else t.texImage2D(n.TEXTURE_2D,0,we,ve,Le,Q);m(x)&&u(j),ae.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function se(T,x,N){if(x.image.length!==6)return;const j=Ae(T,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const X=i.get(K);if(K.version!==X.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const ae=$e.getPrimaries($e.workingColorSpace),ne=x.colorSpace===En?null:$e.getPrimaries(x.colorSpace),_e=x.colorSpace===En||ae===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!Te&&!Q?ve[$]=_(x.image[$],!0,r.maxCubemapSize):ve[$]=Q?x.image[$].image:x.image[$],ve[$]=Ne(x,ve[$]);const Le=ve[0],we=s.convert(x.format,x.colorSpace),de=s.convert(x.type),Ie=b(x.internalFormat,we,de,x.colorSpace),P=x.isVideoTexture!==!0,le=X.__version===void 0||j===!0,ee=K.dataReady;let he=L(x,Le);Ue(n.TEXTURE_CUBE_MAP,x);let Z;if(Te){P&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,Le.width,Le.height);for(let $=0;$<6;$++){Z=ve[$].mipmaps;for(let pe=0;pe<Z.length;pe++){const Re=Z[pe];x.format!==Rt?we!==null?P?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Re.width,Re.height,we,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Ie,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,0,0,Re.width,Re.height,we,de,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe,Ie,Re.width,Re.height,0,we,de,Re.data)}}}else{if(Z=x.mipmaps,P&&le){Z.length>0&&he++;const $=Je(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ie,$.width,$.height)}for(let $=0;$<6;$++)if(Q){P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,we,de,ve[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,ve[$].width,ve[$].height,0,we,de,ve[$].data);for(let pe=0;pe<Z.length;pe++){const Qe=Z[pe].image[$].image;P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,Qe.width,Qe.height,we,de,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Ie,Qe.width,Qe.height,0,we,de,Qe.data)}}else{P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,de,ve[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ie,we,de,ve[$]);for(let pe=0;pe<Z.length;pe++){const Re=Z[pe];P?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,0,0,we,de,Re.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,pe+1,Ie,we,de,Re.image[$])}}}m(x)&&u(n.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function me(T,x,N,j,K,X){const ae=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),_e=b(N.internalFormat,ae,ne,N.colorSpace),Te=i.get(x),Q=i.get(N);if(Q.__renderTarget=x,!Te.__hasExternalTextures){const ve=Math.max(1,x.width>>X),Le=Math.max(1,x.height>>X);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,X,_e,ve,Le,x.depth,0,ae,ne,null):t.texImage2D(K,X,_e,ve,Le,0,ae,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,Q.__webglTexture,0,Se(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,Q.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,K=j&&j.isDepthTexture?j.type:null,X=M(x.stencilBuffer,K),ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=Se(x);Ge(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,X,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,T)}else{const j=x.textures;for(let K=0;K<j.length;K++){const X=j[K],ae=s.convert(X.format,X.colorSpace),ne=s.convert(X.type),_e=b(X.internalFormat,ae,ne,X.colorSpace),Te=Se(x);N&&Ge(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,_e,x.width,x.height):Ge(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,_e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const K=j.__webglTexture,X=Se(x);if(x.depthTexture.format===Wi)Ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(x.depthTexture.format===Xi)Ge(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(T){const x=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?be(x.__webglFramebuffer[0],T):be(x.__webglFramebuffer,T)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[j],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,x,N){const j=i.get(T);x!==void 0&&me(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&He(T)}function Xe(T){const x=T.texture,N=i.get(T),j=i.get(x);T.addEventListener("dispose",A);const K=T.textures,X=T.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let _e=0;_e<x.mipmaps.length;_e++)N.__webglFramebuffer[ne][_e]=n.createFramebuffer()}else N.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)N.__webglFramebuffer[ne]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ae)for(let ne=0,_e=K.length;ne<_e;ne++){const Te=i.get(K[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ge(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];N.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Te=s.convert(_e.format,_e.colorSpace),Q=s.convert(_e.type),ve=b(_e.internalFormat,Te,Q,_e.colorSpace,T.isXRRenderTarget===!0),Le=Se(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ve,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)me(N.__webglFramebuffer[ne][_e],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else me(N.__webglFramebuffer[ne],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let ne=0,_e=K.length;ne<_e;ne++){const Te=K[ne],Q=i.get(Te);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ue(n.TEXTURE_2D,Te),me(N.__webglFramebuffer,T,Te,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),m(Te)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,j.__webglTexture),Ue(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)me(N.__webglFramebuffer[_e],T,x,n.COLOR_ATTACHMENT0,ne,_e);else me(N.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ne,0);m(x)&&u(ne),t.unbindTexture()}T.depthBuffer&&He(T)}function C(T){const x=T.textures;for(let N=0,j=x.length;N<j;N++){const K=x[N];if(m(K)){const X=E(T),ae=i.get(K).__webglTexture;t.bindTexture(X,ae),u(X),t.unbindTexture()}}}const ut=[],ze=[];function Ve(T){if(T.samples>0){if(Ge(T)===!1){const x=T.textures,N=T.width,j=T.height;let K=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(T),ne=x.length>1;if(ne)for(let Te=0;Te<x.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Te=0;Te<x.length;Te++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]);const Q=i.get(x[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,N,j,0,0,N,j,K,n.NEAREST),c===!0&&(ut.length=0,ze.length=0,ut.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ut.push(X),ze.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<x.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]);const Q=i.get(x[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Se(T){return Math.min(r.maxSamples,T.samples)}function Ge(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function Ne(T,x){const N=T.colorSpace,j=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ei&&N!==En&&($e.getTransfer(N)===tt?(j!==Rt||K!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ge}function qg(n,e){function t(i,r=En){let s;const a=$e.getTransfer(r);if(i===pn)return n.UNSIGNED_BYTE;if(i===ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fl)return n.BYTE;if(i===Ol)return n.SHORT;if(i===Vi)return n.UNSIGNED_SHORT;if(i===za)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===Ht)return n.FLOAT;if(i===$i)return n.HALF_FLOAT;if(i===zl)return n.ALPHA;if(i===kl)return n.RGB;if(i===Rt)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===Hl)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===Vl)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Wa)return n.RGBA_INTEGER;if(i===Pr||i===Lr||i===Dr||i===Ur)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zs||i===Js||i===Qs||i===ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ta||i===na||i===ia)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ta||i===na)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ra||i===sa||i===aa||i===oa||i===la||i===ca||i===ua||i===da||i===ha||i===fa||i===pa||i===ma||i===ga||i===_a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===la)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===da)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ha)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ga)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_a)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===va||i===xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ir)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gl||i===Sa||i===Ma||i===ya)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ir)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new At({vertexShader:jg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends bi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,h=null,f=null,p=null,g=null;const _=new $g,m=t.getContextAttributes();let u=null,E=null;const b=[],M=[],L=new Ze;let R=null;const A=new Xt;A.viewport=new ct;const D=new Xt;D.viewport=new ct;const S=[A,D],v=new gh;let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=b[q];return Y===void 0&&(Y=new Ss,b[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=b[q];return Y===void 0&&(Y=new Ss,b[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=b[q];return Y===void 0&&(Y=new Ss,b[q]=Y),Y.getHandSpace()};function O(q){const Y=M.indexOf(q.inputSource);if(Y===-1)return;const ue=b[Y];ue!==void 0&&(ue.update(q.inputSource,q.frame,l||a),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",J);for(let q=0;q<b.length;q++){const Y=M[q];Y!==null&&(M[q]=null,b[q].disconnect(Y))}w=null,F=null,_.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,E=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,se=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Xi:Wi,se=m.stencil?Gi:$n);const Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Jt(f.textureWidth,f.textureHeight,{format:Rt,type:pn,depthTexture:new ic(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Jt(p.framebufferWidth,p.framebufferHeight,{format:Rt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(q){for(let Y=0;Y<q.removed.length;Y++){const ue=q.removed[Y],se=M.indexOf(ue);se>=0&&(M[se]=null,b[se].disconnect(ue))}for(let Y=0;Y<q.added.length;Y++){const ue=q.added[Y];let se=M.indexOf(ue);if(se===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=M.length){M.push(ue),se=Pe;break}else if(M[Pe]===null){M[Pe]=ue,se=Pe;break}if(se===-1)break}const me=b[se];me&&me.connect(ue)}}const V=new k,te=new k;function H(q,Y,ue){V.setFromMatrixPosition(Y.matrixWorld),te.setFromMatrixPosition(ue.matrixWorld);const se=V.distanceTo(te),me=Y.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,be=me[14]/(me[10]-1),He=me[14]/(me[10]+1),Ke=(me[9]+1)/me[5],Xe=(me[9]-1)/me[5],C=(me[8]-1)/me[0],ut=(Pe[8]+1)/Pe[0],ze=be*C,Ve=be*ut,Se=se/(-C+ut),Ge=Se*-C;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ge),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ee=be+Se,Ne=He+Se,Je=ze-Ge,T=Ve+(se-Ge),x=Ke*He/Ne*Ee,N=Xe*He/Ne*Ee;q.projectionMatrix.makePerspective(Je,T,x,N,Ee,Ne),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,ue=q.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),v.near=D.near=A.near=Y,v.far=D.far=A.far=ue,(w!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,F=v.far),A.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,v.layers.mask=A.layers.mask|D.layers.mask;const se=q.parent,me=v.cameras;oe(v,se);for(let Pe=0;Pe<me.length;Pe++)oe(me[Pe],se);me.length===2?H(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),ce(q,v,se)};function ce(q,Y,ue){ue===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ea*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let xe=null;function Ue(q,Y){if(d=Y.getViewerPose(l||a),g=Y,d!==null){const ue=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let se=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let be=0;be<ue.length;be++){const He=ue[be];let Ke=null;if(p!==null)Ke=p.getViewport(He);else{const C=h.getViewSubImage(f,He);Ke=C.viewport,be===0&&(e.setRenderTargetTextures(E,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(E))}let Xe=S[be];Xe===void 0&&(Xe=new Xt,Xe.layers.enable(be),Xe.viewport=new ct,S[be]=Xe),Xe.matrix.fromArray(He.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(He.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),be===0&&(v.matrix.copy(Xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(Xe)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const be=h.getDepthInformation(ue[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let ue=0;ue<b.length;ue++){const se=M[ue],me=b[ue];se!==null&&me!==void 0&&me.update(se,Y,l||a)}xe&&xe(q,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ae=new rc;Ae.setAnimationLoop(Ue),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const On=new mn,Zg=new ht;function Jg(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Jl(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,b,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,E,b):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,On.copy(M),On.x*=-1,On.y*=-1,On.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(On)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const M=b.program;i.uniformBlockBinding(E,M)}function l(E,b){let M=r[E.id];M===void 0&&(g(E),M=d(E),r[E.id]=M,E.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(E,L);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function d(E){const b=h();E.__bindingPointIndex=b;const M=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=r[E.id],M=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,A=M.length;R<A;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,v=D.length;S<v;S++){const w=D[S];if(p(w,R,S,L)===!0){const F=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let J=0;J<O.length;J++){const V=O[J],te=_(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+G,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,M,L){const R=E.value,A=b+"_"+M;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const D=L[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return L[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(E){const b=E.uniforms;let M=0;const L=16;for(let A=0,D=b.length;A<D;A++){const S=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,w=S.length;v<w;v++){const F=S[v],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,J=O.length;G<J;G++){const V=O[G],te=_(V),H=M%L,oe=H%te.boundary,ce=H+oe;M+=oe,ce!==0&&L-ce<te.storage&&(M+=L-ce),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=te.storage}}}const R=M%L;return R>0&&(M+=L-R),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class e_{constructor(e={}){const{canvas:t=Fd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=kt;let R=0,A=0,D=null,S=-1,v=null;const w=new ct,F=new ct;let O=null;const G=new nt(0);let J=0,V=t.width,te=t.height,H=1,oe=null,ce=null;const xe=new ct(0,0,V,te),Ue=new ct(0,0,V,te);let Ae=!1;const q=new nc;let Y=!1,ue=!1;const se=new ht,me=new ht,Pe=new k,be=new ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function Xe(){return D===null?H:1}let C=i;function ut(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",$,!1),C===null){const U="webgl2";if(C=ut(U,y),C===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ze,Ve,Se,Ge,Ee,Ne,Je,T,x,N,j,K,X,ae,ne,_e,Te,Q,ve,Le,we,de,Ie,P;function le(){ze=new um(C),ze.init(),de=new qg(C,ze),Ve=new im(C,ze,e,de),Se=new Wg(C,ze),Ve.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),Ge=new fm(C),Ee=new Lg,Ne=new Xg(C,ze,Se,Ee,Ve,de,Ge),Je=new sm(M),T=new cm(M),x=new vh(C),Ie=new tm(C,x),N=new dm(C,x,Ge,Ie),j=new mm(C,N,x,Ge),ve=new pm(C,Ve,Ne),_e=new rm(Ee),K=new Pg(M,Je,T,ze,Ve,Ie,_e),X=new Jg(M,Ee),ae=new Ug,ne=new zg(ze),Q=new em(M,Je,T,Se,j,p,c),Te=new Vg(M,j,Ve),P=new Qg(C,Ge,Ve,Se),Le=new nm(C,ze,Ge),we=new hm(C,ze,Ge),Ge.programs=K.programs,M.capabilities=Ve,M.extensions=ze,M.properties=Ee,M.renderLists=ae,M.shadowMap=Te,M.state=Se,M.info=Ge}le();const ee=new Kg(M,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(V,te,!1))},this.getSize=function(y){return y.set(V,te)},this.setSize=function(y,U,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,te=U,t.width=Math.floor(y*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(V*H,te*H).floor()},this.setDrawingBufferSize=function(y,U,B){V=y,te=U,H=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,U,B,z){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,U,B,z),Se.viewport(w.copy(xe).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(Ue)},this.setScissor=function(y,U,B,z){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,U,B,z),Se.scissor(F.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(y){Se.setScissorTest(Ae=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,B=!0){let z=0;if(y){let I=!1;if(D!==null){const re=D.texture.format;I=re===Wa||re===Ga||re===Va}if(I){const re=D.texture.type,ge=re===pn||re===$n||re===Vi||re===Gi||re===ka||re===Ha,ye=Q.getClearColor(),Me=Q.getClearAlpha(),Fe=ye.r,Oe=ye.g,Ce=ye.b;ge?(g[0]=Fe,g[1]=Oe,g[2]=Ce,g[3]=Me,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Fe,_[1]=Oe,_[2]=Ce,_[3]=Me,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Q.dispose(),ae.dispose(),ne.dispose(),Ee.dispose(),Je.dispose(),T.dispose(),j.dispose(),Ie.dispose(),P.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",er),ee.removeEventListener("sessionend",tr),en.stop()};function he(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Ge.autoReset,U=Te.enabled,B=Te.autoUpdate,z=Te.needsUpdate,I=Te.type;le(),Ge.autoReset=y,Te.enabled=U,Te.autoUpdate=B,Te.needsUpdate=z,Te.type=I}function $(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pe(y){const U=y.target;U.removeEventListener("dispose",pe),Re(U)}function Re(y){Qe(y),Ee.remove(y)}function Qe(y){const U=Ee.get(y).programs;U!==void 0&&(U.forEach(function(B){K.releaseProgram(B)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,z,I,re){U===null&&(U=He);const ge=I.isMesh&&I.matrixWorld.determinant()<0,ye=cc(y,U,B,z,I);Se.setMaterial(z,ge);let Me=B.index,Fe=1;if(z.wireframe===!0){if(Me=N.getWireframeAttribute(B),Me===void 0)return;Fe=2}const Oe=B.drawRange,Ce=B.attributes.position;let We=Oe.start*Fe,et=(Oe.start+Oe.count)*Fe;re!==null&&(We=Math.max(We,re.start*Fe),et=Math.min(et,(re.start+re.count)*Fe)),Me!==null?(We=Math.max(We,0),et=Math.min(et,Me.count)):Ce!=null&&(We=Math.max(We,0),et=Math.min(et,Ce.count));const lt=et-We;if(lt<0||lt===1/0)return;Ie.setup(I,z,ye,B,Me);let st,it=Le;if(Me!==null&&(st=x.get(Me),it=we,it.setIndex(st)),I.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*Xe()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(I.isLine){let De=z.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*Xe()),I.isLineSegments?it.setMode(C.LINES):I.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else I.isPoints?it.setMode(C.POINTS):I.isSprite&&it.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)_i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))it.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const De=I._multiDrawStarts,ot=I._multiDrawCounts,Ye=I._multiDrawCount,Dt=Me?x.get(Me).bytesPerElement:1,Zn=Ee.get(z).currentProgram.getUniforms();for(let Ut=0;Ut<Ye;Ut++)Zn.setValue(C,"_gl_DrawID",Ut),it.render(De[Ut]/Dt,ot[Ut])}else if(I.isInstancedMesh)it.renderInstances(We,lt,I.count);else if(B.isInstancedBufferGeometry){const De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ot=Math.min(B.instanceCount,De);it.renderInstances(We,lt,ot)}else it.render(We,lt)};function je(y,U,B){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=Pt,y.needsUpdate=!0,ir(y,U,B),y.side=An,y.needsUpdate=!0,ir(y,U,B),y.side=cn):ir(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),u=ne.get(B),u.init(U),b.push(u),B.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),y!==B&&y.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const z=new Set;return y.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const re=I.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const ye=re[ge];je(ye,B,I),z.add(ye)}else je(re,B,I),z.add(re)}),u=b.pop(),z},this.compileAsync=function(y,U,B=null){const z=this.compile(y,U,B);return new Promise(I=>{function re(){if(z.forEach(function(ge){Ee.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){I(y);return}setTimeout(re,10)}ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let St=null;function gt(y){St&&St(y)}function er(){en.stop()}function tr(){en.start()}const en=new rc;en.setAnimationLoop(gt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(y){St=y,ee.setAnimationLoop(y),y===null?en.stop():en.start()},ee.addEventListener("sessionstart",er),ee.addEventListener("sessionend",tr),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,D),u=ne.get(y,b.length),u.init(U),b.push(u),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(me),ue=this.localClippingEnabled,Y=_e.init(this.clippingPlanes,ue),m=ae.get(y,E.length),m.init(),E.push(m),ee.enabled===!0&&ee.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&Ri(re,U,-1/0,M.sortObjects)}Ri(y,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(oe,ce),Ke=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ke&&Q.addToRenderList(m,y),this.info.render.frame++,Y===!0&&_e.beginShadows();const B=u.state.shadowsArray;Te.render(B,y,U),Y===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,I=m.transmissive;if(u.setupLights(),U.isArrayCamera){const re=U.cameras;if(I.length>0)for(let ge=0,ye=re.length;ge<ye;ge++){const Me=re[ge];Ka(z,I,y,Me)}Ke&&Q.render(y);for(let ge=0,ye=re.length;ge<ye;ge++){const Me=re[ge];$a(m,y,Me,Me.viewport)}}else I.length>0&&Ka(z,I,y,U),Ke&&Q.render(y),$a(m,y,U);D!==null&&A===0&&(Ne.updateMultisampleRenderTarget(D),Ne.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(M,y,U),Ie.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(u=b[b.length-1],Y===!0&&_e.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ri(y,U,B,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){z&&be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(me);const ge=j.update(y),ye=y.material;ye.visible&&m.push(y,ge,ye,B,be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const ge=j.update(y),ye=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),be.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),be.copy(ge.boundingSphere.center)),be.applyMatrix4(y.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Me=ge.groups;for(let Fe=0,Oe=Me.length;Fe<Oe;Fe++){const Ce=Me[Fe],We=ye[Ce.materialIndex];We&&We.visible&&m.push(y,ge,We,B,be.z,Ce)}}else ye.visible&&m.push(y,ge,ye,B,be.z,null)}}const re=y.children;for(let ge=0,ye=re.length;ge<ye;ge++)Ri(re[ge],U,B,z)}function $a(y,U,B,z){const I=y.opaque,re=y.transmissive,ge=y.transparent;u.setupLightsView(B),Y===!0&&_e.setGlobalState(M.clippingPlanes,B),z&&Se.viewport(w.copy(z)),I.length>0&&nr(I,U,B),re.length>0&&nr(re,U,B),ge.length>0&&nr(ge,U,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ka(y,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Jt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?$i:pn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=u.state.transmissionRenderTarget[z.id],ge=z.viewport||w;re.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),Me=M.getActiveCubeFace(),Fe=M.getActiveMipmapLevel();M.setRenderTarget(re),M.getClearColor(G),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Ke&&Q.render(B);const Oe=M.toneMapping;M.toneMapping=bn;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),Y===!0&&_e.setGlobalState(M.clippingPlanes,z),nr(y,B,z),Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re),ze.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let et=0,lt=U.length;et<lt;et++){const st=U[et],it=st.object,De=st.geometry,ot=st.material,Ye=st.group;if(ot.side===cn&&it.layers.test(z.layers)){const Dt=ot.side;ot.side=Pt,ot.needsUpdate=!0,Za(it,B,z,De,ot,Ye),ot.side=Dt,ot.needsUpdate=!0,We=!0}}We===!0&&(Ne.updateMultisampleRenderTarget(re),Ne.updateRenderTargetMipmap(re))}M.setRenderTarget(ye,Me,Fe),M.setClearColor(G,J),Ce!==void 0&&(z.viewport=Ce),M.toneMapping=Oe}function nr(y,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let I=0,re=y.length;I<re;I++){const ge=y[I],ye=ge.object,Me=ge.geometry,Fe=ge.group;let Oe=ge.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ye.layers.test(B.layers)&&Za(ye,U,B,Me,Oe,Fe)}}function Za(y,U,B,z,I,re){y.onBeforeRender(M,U,B,z,I,re),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),I.onBeforeRender(M,U,B,z,y,re),I.transparent===!0&&I.side===cn&&I.forceSinglePass===!1?(I.side=Pt,I.needsUpdate=!0,M.renderBufferDirect(B,U,z,I,y,re),I.side=An,I.needsUpdate=!0,M.renderBufferDirect(B,U,z,I,y,re),I.side=cn):M.renderBufferDirect(B,U,z,I,y,re),y.onAfterRender(M,U,B,z,I,re)}function ir(y,U,B){U.isScene!==!0&&(U=He);const z=Ee.get(y),I=u.state.lights,re=u.state.shadowsArray,ge=I.state.version,ye=K.getParameters(y,I.state,re,U,B),Me=K.getProgramCacheKey(ye);let Fe=z.programs;z.environment=y.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(y.isMeshStandardMaterial?T:Je).get(y.envMap||z.environment),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Fe===void 0&&(y.addEventListener("dispose",pe),Fe=new Map,z.programs=Fe);let Oe=Fe.get(Me);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===ge)return Qa(y,ye),Oe}else ye.uniforms=K.getUniforms(y),y.onBeforeCompile(ye,M),Oe=K.acquireProgram(ye,Me),Fe.set(Me,Oe),z.uniforms=ye.uniforms;const Ce=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=_e.uniform),Qa(y,ye),z.needsLights=dc(y),z.lightsStateVersion=ge,z.needsLights&&(Ce.ambientLightColor.value=I.state.ambient,Ce.lightProbe.value=I.state.probe,Ce.directionalLights.value=I.state.directional,Ce.directionalLightShadows.value=I.state.directionalShadow,Ce.spotLights.value=I.state.spot,Ce.spotLightShadows.value=I.state.spotShadow,Ce.rectAreaLights.value=I.state.rectArea,Ce.ltc_1.value=I.state.rectAreaLTC1,Ce.ltc_2.value=I.state.rectAreaLTC2,Ce.pointLights.value=I.state.point,Ce.pointLightShadows.value=I.state.pointShadow,Ce.hemisphereLights.value=I.state.hemi,Ce.directionalShadowMap.value=I.state.directionalShadowMap,Ce.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ce.spotShadowMap.value=I.state.spotShadowMap,Ce.spotLightMatrix.value=I.state.spotLightMatrix,Ce.spotLightMap.value=I.state.spotLightMap,Ce.pointShadowMap.value=I.state.pointShadowMap,Ce.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Oe,z.uniformsList=null,Oe}function Ja(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Nr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Qa(y,U){const B=Ee.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function cc(y,U,B,z,I){U.isScene!==!0&&(U=He),Ne.resetTextureUnits();const re=U.fog,ge=z.isMeshStandardMaterial?U.environment:null,ye=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ei,Me=(z.isMeshStandardMaterial?T:Je).get(z.envMap||ge),Fe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!B.morphAttributes.position,We=!!B.morphAttributes.normal,et=!!B.morphAttributes.color;let lt=bn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(lt=M.toneMapping);const st=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=st!==void 0?st.length:0,De=Ee.get(z),ot=u.state.lights;if(Y===!0&&(ue===!0||y!==v)){const Mt=y===v&&z.id===S;_e.setState(z,y,Mt)}let Ye=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ot.state.version||De.outputColorSpace!==ye||I.isBatchedMesh&&De.batching===!1||!I.isBatchedMesh&&De.batching===!0||I.isBatchedMesh&&De.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&De.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&De.instancing===!1||!I.isInstancedMesh&&De.instancing===!0||I.isSkinnedMesh&&De.skinning===!1||!I.isSkinnedMesh&&De.skinning===!0||I.isInstancedMesh&&De.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&De.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&De.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&De.instancingMorph===!1&&I.morphTexture!==null||De.envMap!==Me||z.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==_e.numPlanes||De.numIntersection!==_e.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Oe||De.morphTargets!==Ce||De.morphNormals!==We||De.morphColors!==et||De.toneMapping!==lt||De.morphTargetsCount!==it)&&(Ye=!0):(Ye=!0,De.__version=z.version);let Dt=De.currentProgram;Ye===!0&&(Dt=ir(z,U,I));let Zn=!1,Ut=!1,Ci=!1;const at=Dt.getUniforms(),Ot=De.uniforms;if(Se.useProgram(Dt.program)&&(Zn=!0,Ut=!0,Ci=!0),z.id!==S&&(S=z.id,Ut=!0),Zn||v!==y){Se.buffers.depth.getReversed()?(se.copy(y.projectionMatrix),Bd(se),zd(se),at.setValue(C,"projectionMatrix",se)):at.setValue(C,"projectionMatrix",y.projectionMatrix),at.setValue(C,"viewMatrix",y.matrixWorldInverse);const Tt=at.map.cameraPosition;Tt!==void 0&&Tt.setValue(C,Pe.setFromMatrixPosition(y.matrixWorld)),Ve.logarithmicDepthBuffer&&at.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Ut=!0,Ci=!0)}if(I.isSkinnedMesh){at.setOptional(C,I,"bindMatrix"),at.setOptional(C,I,"bindMatrixInverse");const Mt=I.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),at.setValue(C,"boneTexture",Mt.boneTexture,Ne))}I.isBatchedMesh&&(at.setOptional(C,I,"batchingTexture"),at.setValue(C,"batchingTexture",I._matricesTexture,Ne),at.setOptional(C,I,"batchingIdTexture"),at.setValue(C,"batchingIdTexture",I._indirectTexture,Ne),at.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&at.setValue(C,"batchingColorTexture",I._colorsTexture,Ne));const Bt=B.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&ve.update(I,B,Dt),(Ut||De.receiveShadow!==I.receiveShadow)&&(De.receiveShadow=I.receiveShadow,at.setValue(C,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ot.envMap.value=Me,Ot.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ut&&(at.setValue(C,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&uc(Ot,Ci),re&&z.fog===!0&&X.refreshFogUniforms(Ot,re),X.refreshMaterialUniforms(Ot,z,H,te,u.state.transmissionRenderTarget[y.id]),Nr.upload(C,Ja(De),Ot,Ne)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nr.upload(C,Ja(De),Ot,Ne),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(C,"center",I.center),at.setValue(C,"modelViewMatrix",I.modelViewMatrix),at.setValue(C,"normalMatrix",I.normalMatrix),at.setValue(C,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Mt=z.uniformsGroups;for(let Tt=0,Wr=Mt.length;Tt<Wr;Tt++){const Cn=Mt[Tt];P.update(Cn,Dt),P.bind(Cn,Dt)}}return Dt}function uc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function dc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,U,B){const z=Ee.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ee.get(y.texture).__webglTexture=U,Ee.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const B=Ee.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const hc=C.createFramebuffer();this.setRenderTarget=function(y,U=0,B=0){D=y,R=U,A=B;let z=!0,I=null,re=!1,ge=!1;if(y){const Me=Ee.get(y);if(Me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Me.__webglFramebuffer===void 0)Ne.setupRenderTarget(y);else if(Me.__hasExternalTextures)Ne.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(Me.__boundDepthTexture!==Ce){if(Ce!==null&&Ee.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(y)}}const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const Oe=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?I=Oe[U][B]:I=Oe[U],re=!0):y.samples>0&&Ne.useMultisampledRTT(y)===!1?I=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?I=Oe[B]:I=Oe,w.copy(y.viewport),F.copy(y.scissor),O=y.scissorTest}else w.copy(xe).multiplyScalar(H).floor(),F.copy(Ue).multiplyScalar(H).floor(),O=Ae;if(B!==0&&(I=hc),Se.bindFramebuffer(C.FRAMEBUFFER,I)&&z&&Se.drawBuffers(y,I),Se.viewport(w),Se.scissor(F),Se.setScissorTest(O),re){const Me=Ee.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,B)}else if(ge){const Me=Ee.get(y.texture),Fe=U;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.__webglTexture,B,Fe)}else if(y!==null&&B!==0){const Me=Ee.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(y,U,B,z,I,re,ge,ye=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){Se.bindFramebuffer(C.FRAMEBUFFER,Me);try{const Fe=y.textures[ye],Oe=Fe.format,Ce=Fe.type;if(!Ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&B>=0&&B<=y.height-I&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ye),C.readPixels(U,B,z,I,de.convert(Oe),de.convert(Ce),re))}finally{const Fe=D!==null?Ee.get(D).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(y,U,B,z,I,re,ge,ye=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me)if(U>=0&&U<=y.width-z&&B>=0&&B<=y.height-I){Se.bindFramebuffer(C.FRAMEBUFFER,Me);const Fe=y.textures[ye],Oe=Fe.format,Ce=Fe.type;if(!Ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ye),C.readPixels(U,B,z,I,de.convert(Oe),de.convert(Ce),0);const et=D!==null?Ee.get(D).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,et);const lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Od(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re),C.deleteBuffer(We),C.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,B=0){const z=Math.pow(2,-B),I=Math.floor(y.image.width*z),re=Math.floor(y.image.height*z),ge=U!==null?U.x:0,ye=U!==null?U.y:0;Ne.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ge,ye,I,re),Se.unbindTexture()};const fc=C.createFramebuffer(),pc=C.createFramebuffer();this.copyTextureToTexture=function(y,U,B=null,z=null,I=0,re=null){re===null&&(I!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=I,I=0):re=0);let ge,ye,Me,Fe,Oe,Ce,We,et,lt;const st=y.isCompressedTexture?y.mipmaps[re]:y.image;if(B!==null)ge=B.max.x-B.min.x,ye=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,Fe=B.min.x,Oe=B.min.y,Ce=B.isBox3?B.min.z:0;else{const Bt=Math.pow(2,-I);ge=Math.floor(st.width*Bt),ye=Math.floor(st.height*Bt),y.isDataArrayTexture?Me=st.depth:y.isData3DTexture?Me=Math.floor(st.depth*Bt):Me=1,Fe=0,Oe=0,Ce=0}z!==null?(We=z.x,et=z.y,lt=z.z):(We=0,et=0,lt=0);const it=de.convert(U.format),De=de.convert(U.type);let ot;U.isData3DTexture?(Ne.setTexture3D(U,0),ot=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),ot=C.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=C.getParameter(C.UNPACK_ROW_LENGTH),Dt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Zn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ut=C.getParameter(C.UNPACK_SKIP_ROWS),Ci=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);const at=y.isDataArrayTexture||y.isData3DTexture,Ot=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Bt=Ee.get(y),Mt=Ee.get(U),Tt=Ee.get(Bt.__renderTarget),Wr=Ee.get(Mt.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Cn=0;Cn<Me;Cn++)at&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(y).__webglTexture,I,Ce+Cn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,re,lt+Cn)),C.blitFramebuffer(Fe,Oe,ge,ye,We,et,ge,ye,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(I!==0||y.isRenderTargetTexture||Ee.has(y)){const Bt=Ee.get(y),Mt=Ee.get(U);Se.bindFramebuffer(C.READ_FRAMEBUFFER,fc),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,pc);for(let Tt=0;Tt<Me;Tt++)at?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,I,Ce+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,I),Ot?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.__webglTexture,re,lt+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mt.__webglTexture,re),I!==0?C.blitFramebuffer(Fe,Oe,ge,ye,We,et,ge,ye,C.COLOR_BUFFER_BIT,C.NEAREST):Ot?C.copyTexSubImage3D(ot,re,We,et,lt+Tt,Fe,Oe,ge,ye):C.copyTexSubImage2D(ot,re,We,et,Fe,Oe,ge,ye);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ot?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ot,re,We,et,lt,ge,ye,Me,it,De,st.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ot,re,We,et,lt,ge,ye,Me,it,st.data):C.texSubImage3D(ot,re,We,et,lt,ge,ye,Me,it,De,st):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,re,We,et,ge,ye,it,De,st.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,re,We,et,st.width,st.height,it,st.data):C.texSubImage2D(C.TEXTURE_2D,re,We,et,ge,ye,it,De,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ci),re===0&&U.generateMipmaps&&C.generateMipmap(ot),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B=null,z=null,I=0){return _i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,B,z,I)},this.initRenderTarget=function(y){Ee.get(y).__webglFramebuffer===void 0&&Ne.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,Se.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function t_(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let p=0;p<e;p++){const g=p*4,_=n[g],m=n[g+1],u=n[g+2],E=n[g+3];t.add(_),t.add(_+u),i.add(m),i.add(m+E)}const r=Array.from(t).sort((p,g)=>p-g),s=Array.from(i).sort((p,g)=>p-g);if(r.length===0||s.length===0)return{edges:[]};const a=r[0],o=r[r.length-1],c=s[0],l=s[s.length-1],d=new Set,h=[],f=(p,g)=>{const _=p.x<g.x||p.x===g.x&&p.y<=g.y?`${p.x},${p.y}|${g.x},${g.y}`:`${g.x},${g.y}|${p.x},${p.y}`;d.has(_)||(d.add(_),h.push({start:[p.x,p.y],end:[g.x,g.y]}))};return r.forEach(p=>{f({x:p,y:c},{x:p,y:l})}),s.forEach(p=>{f({x:a,y:p},{x:o,y:p})}),{edges:h}}function n_(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const _=g*4,m=n[_],u=n[_+1],E=n[_+2],b=n[_+3];r.push({x:m,y:u,width:E,height:b}),t=Math.min(t,m),i=Math.max(i,m+E)}r.sort((g,_)=>g.y-_.y);const s=new Set,a=(g,_)=>s.add(`${g},${_}`);r.forEach(g=>{const _=g.y+g.height;a(t,_),a(i,_)});const o=r[0].y;a(t,o),a(i,o);const c=Array.from(s).map(g=>{const[_,m]=g.split(",").map(Number);return{x:_,y:m}}).sort((g,_)=>g.y!==_.y?g.y-_.y:g.x-_.x),l=[],d=(g,_)=>{l.push({start:[g.x,g.y],end:[_.x,_.y]})},h=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<h.length-1;g++)d(h[g],h[g+1]);const f=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<f.length-1;g++)d(f[g],f[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,_)=>g-_).forEach(g=>{const _=h.find(u=>Math.abs(u.y-g)<1e-6),m=f.find(u=>Math.abs(u.y-g)<1e-6);_&&m&&d(_,m)}),{edges:l}}const fi=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,i_=`
  precision highp float;
  varying vec2 vUv;
  
  // Inputs describing the rail network as a set of line segments
  uniform int   uEdgeCount;                             // number of valid entries in uEdges
  uniform vec4  uEdges[${wn*4+20}];          // (x1, y1, x2, y2) per segment
  uniform float uLineWidth;                              // visual/physical half-width of a rail

  // Distance from point p to segment [a,b]
  float distanceToSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }

  // Unit tangent from a to b (falls back to +X if degenerate)
  vec2 getTangent(vec2 a, vec2 b) {
    vec2 dir = b - a;
    float len = length(dir);
    return len > 1e-6 ? dir / len : vec2(1.0, 0.0);
  }

  void main() {
    // We compute:
    // - minDist: smallest distance from vUv to any rail segment
    // - bestTan: tangent of the closest segment
    // - railCnt: number of overlapping segments within the line width
    float minDist = 1e6;
    vec2  bestTan = vec2(1.0, 0.0);
    int   railCnt = 0;

    for (int i = 0; i < ${wn*4+20}; ++i) {
      if (i >= uEdgeCount) break;

      vec4 e = uEdges[i];
      float d = distanceToSegment(vUv, e.xy, e.zw);

      if (d < uLineWidth) {
        // Inside the thickness of this rail segment
        railCnt += 1;
      }

      if (d < minDist) {
        minDist = d;
        bestTan = getTangent(e.xy, e.zw);
      }
    }

    // Edge type encodes how many directions you can exit: 0..3 -> 1..4 exits.
    int edgeType = clamp(railCnt - 1, 0, 3);

    // Signed distance: negative inside the rail, positive outside.
    float signedDist = minDist - uLineWidth;

    // Output guide texture channels:
    // R = signed distance; G,B = tangent; A = edgeType
    gl_FragColor = vec4(signedDist, bestTan.x, bestTan.y, float(edgeType));
  }
`,r_=`
  precision highp float;
  varying vec2 vUv;
  
  uniform sampler2D uGuideTexture;        // guide (R: sd, G/B: tangent, A: edgeType)
  uniform sampler2D uPrevState;           // previous simulation state (R/G energy, B hue)
  uniform float     uDeltaTime;           // seconds per step
  uniform float     uSpeed;               // units per second along the rail
  uniform float     uAttenuation;         // exponential decay rate
  uniform float     uEnergyConservation;  // cap on total (forward+backward) energy per texel
  uniform float     uRailEpsilon;         // optional: rail epsilon; defaulted if <= 0
  uniform float     uTTLDecayRate;        // normalized TTL decay rate (1 / seconds)

  // Sample/return helper for simulation texels
  struct Sample {
    vec4  e;            // energy/hue at the sampled point (from uPrevState)
    bool  onRail;       // true if within any rail (guide.r <= epsilon)
  };

  // Reads guide/state at arbitrary UV, with bounds and rail checks
  Sample sampleEnergy(vec2 uv) {
    Sample s; 
    s.e = vec4(0.0);
    s.onRail = false;

    // Outside texture boundaries → treated as blocked
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      return s;
    }

    vec4 g = texture2D(uGuideTexture, uv);
    // Backwards-compatible default epsilon if uniform not provided or <= 0
    float railEps = (uRailEpsilon > 0.0) ? uRailEpsilon : 0.01;

    // Positive signed distance beyond epsilon → off-rail → block
    if (g.r > railEps) {
      return s;
    }

    // On rail → valid sample
    s.onRail = true;
    s.e = texture2D(uPrevState, uv);
    return s;
  }
  
  void main() {
    vec4 guide = texture2D(uGuideTexture, vUv);

    // If we're off-rail at the current fragment, write nothing
    if (guide.r > 0.01) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Rail-aligned basis: tangent and its perpendicular
    vec2 tan = normalize(guide.gb);        // along the rail
    vec2 prp = vec2(-tan.y, tan.x);        // perpendicular to the rail

    float stepLen = uSpeed * uDeltaTime;   // distance to sample along tangent/prp

    // Neighbor samples: forward/backward along tangent, and the two perpendicular sides
    Sample fS = sampleEnergy(vUv - tan * stepLen);
    Sample bS = sampleEnergy(vUv + tan * stepLen);
    Sample pS = sampleEnergy(vUv - prp * stepLen);
    Sample nS = sampleEnergy(vUv + prp * stepLen);

    // Local forward/backward contributions come from the max channel of each neighbor
    float fE = 0.0; if (fS.onRail) fE = max(fS.e.r, fS.e.g);
    float bE = 0.0; if (bS.onRail) bE = max(bS.e.r, bS.e.g);

    // At junctions, split lateral energy among the available exits.
    // edgeType 0..3 encodes 1..4 exits, so split = 1 + guide.a
    float split = 1.0 + guide.a;
    float invSplit = 1.0 / split;

    if (pS.onRail) {
      float e = max(pS.e.r, pS.e.g) * invSplit; 
      fE = max(fE, e);
      bE = max(bE, e);
    }

    if (nS.onRail) {
      float e = max(nS.e.r, nS.e.g) * invSplit; 
      fE = max(fE, e);
      bE = max(bE, e);
    }

    // Exponential attenuation
    float decay = exp(-uAttenuation * uDeltaTime);
    fE *= decay;
    bE *= decay;

    // Energy conservation: clamp the sum to a maximum budget
    float total = fE + bE;
    if (total > uEnergyConservation) {
      float c = uEnergyConservation / total;
      fE *= c;
      bE *= c;
    }

    // Hue selection: pick the hue of the strongest contributing neighbor
    float hue  = 0.0;
    float best = 0.0;

    if (fS.onRail && fS.e.r > best) { best = fS.e.r; hue = fS.e.b; }
    if (bS.onRail && bS.e.g > best) { best = bS.e.g; hue = bS.e.b; }

    float pMax = max(pS.e.r, pS.e.g);
    if (pS.onRail && pMax > best) { best = pMax; hue = pS.e.b; }

    float nMax = max(nS.e.r, nS.e.g);
    if (nS.onRail && nMax > best) { best = nMax; hue = nS.e.b; }

    // TTL advection: take the freshest (max) TTL from neighbors and decrease linearly with time
    float ttl = 0.0;
    if (fS.onRail) ttl = max(ttl, fS.e.a);
    if (bS.onRail) ttl = max(ttl, bS.e.a);
    if (pS.onRail) ttl = max(ttl, pS.e.a);
    if (nS.onRail) ttl = max(ttl, nS.e.a);
    ttl = max(0.0, ttl - uTTLDecayRate * uDeltaTime);

    // Output: forward/back energy and chosen hue; alpha carries TTL (0..1)
    gl_FragColor = vec4(fE, bE, hue, ttl);
  }
`,s_=`
  precision highp float;
  varying vec2 vUv;
  
  uniform sampler2D uGuideTexture;     // guide to ensure we only inject on-rail
  uniform sampler2D uCurrentState;     // current simulation texture to be updated

  uniform vec2  uInjectionPoint;       // UV coordinate of injection center
  uniform float uInjectionRadius;      // radius of influence (UV units)
  uniform float uInjectionEnergy;      // energy added to both directions
  uniform float uHue;                  // hue value to stamp in
  uniform float uInjectionEpsilon;     // optional: on-rail threshold; defaulted if == 0
  
  void main() {
    vec4 state = texture2D(uCurrentState, vUv);
    vec4 guide = texture2D(uGuideTexture, vUv);
    
    float d = distance(vUv, uInjectionPoint);

    // Only inject on the rail interior (guide.r <= epsilon), with a soft radial falloff.
    // Default epsilon is 0.0 if the uniform is not set.
    float injEps = (uInjectionEpsilon != 0.0) ? uInjectionEpsilon : 0.0;
    if (guide.r < injEps && d < uInjectionRadius) {
      // Gaussian-like profile; tweak 0.1 factor to adjust spread softness
      float r2   = uInjectionRadius * uInjectionRadius;
      float str  = exp(-d * d / (r2 * 0.1));

      state.r += uInjectionEnergy * str;  // forward energy
      state.g += uInjectionEnergy * str;  // backward energy
      state.b  = uHue;                    // set hue
      state.a  = max(state.a, 1.0);       // seed TTL to full
    }

    gl_FragColor = state;
  }
`,a_=`
  precision highp float;
  varying vec2 vUv;

  // Resolution and textures
  uniform vec2  uRes;                        // render resolution in pixels
  uniform sampler2D uGuideTexture;           // guide texture
  uniform sampler2D uSimulationTexture;      // simulation state
  uniform float uTime;                       // time (unused but kept for compatibility)

  // Minimal, physically interpretable controls
  uniform float uRailHalfWidthUV;            // rail half-width used in guide generation (UV units)
  uniform float uCoreWidthPx;                // half-width of bright core in pixels
  uniform float uBladeWidthPx;               // half-width of entire blade glow in pixels

  // Debug/overlay controls
  uniform int   uDebugView;                  // 0=normal, 1..7 = debug views
  uniform bool  uOverlayVectors;             // draw tangent arrows sampled on a grid
  uniform float uVectorSpacingPx;            // spacing of arrows (px)
  uniform float uVectorLengthPx;             // arrow half-length (px)
  uniform float uVectorThicknessPx;          // arrow half-thickness (px)
  uniform float uEnergyScale;                // scales energy when visualizing fields
  uniform float uGamma;                      // gamma correction (1.0 = none)
  uniform bool  uShowCenterline;             // optional centerline overlay
  uniform float uCenterlineWidthPx;          // centerline half-width (px)
  uniform float uIntensityCutoff;            // alpha cutoff to avoid lingering dark halos
  // Luminance controls
  uniform float uGlowIntensity;              // scales overall emissive brightness
  uniform float uCoreGain;                   // core contribution weight
  uniform float uHaloStrength;               // halo contribution weight
  uniform float uWhiteHotStrength;           // blend toward white near the core
  uniform float uExposure;                   // simple exponential tonemapping exposure

  /* ------------------------------ helpers ------------------------------ */
  // Convert hue in [0,1) to RGB (saturated)
  vec3 hue2rgb(float h) {
    h = fract(h);
    float r = abs(h * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(h * 6.0 - 2.0);
    float b = 2.0 - abs(h * 6.0 - 4.0);
    return clamp(vec3(r, g, b), 0.0, 1.0);
  }

  // Sample tangent and signed distance at pixel-space anchor
  vec4 guideAtPx(vec2 px) {
    vec2 uv = px / uRes;
    return texture2D(uGuideTexture, uv);
  }

  // Draw a short line segment ("arrow body") centered on the nearest grid point, oriented along local tangent
  float arrowOverlay(vec2 fragPx) {
    if (!uOverlayVectors) return 0.0;
    float spacing = max(4.0, uVectorSpacingPx);
    vec2 cell = floor(fragPx / spacing) + 0.5;          // grid cell in arrow space
    vec2 gp   = cell * spacing;                         // nearest grid point (px)

    // Sample tangent at grid point
    vec4 g = guideAtPx(gp);
    vec2 t = normalize(g.gb);
    if (length(t) < 1e-6) t = vec2(1.0, 0.0);
    vec2 n = vec2(-t.y, t.x);

    // Local coordinates in (t, n) frame
    vec2 r = fragPx - gp;
    float halfL = max(2.0, uVectorLengthPx);
    float halfW = max(0.5, uVectorThicknessPx);
    float dTan = abs(dot(r, t));
    float dPrp = abs(dot(r, n));
    float onSeg = step(dTan, halfL) * smoothstep(halfW, 0.0, dPrp);
    // Dim off-rail arrows
    float onRail = step(g.r, 0.0);
    return onSeg * (0.6 + 0.4 * onRail);
  }

  void main() {
    // Sample guide info
    vec4 guide = texture2D(uGuideTexture, vUv);

    // Rail basis
    vec2 tan = normalize(guide.gb);
    if (length(tan) < 1e-6) tan = vec2(1.0, 0.0);
    vec2 prp = vec2(-tan.y, tan.x);

    // Distance from this pixel to the rail centreline in UV, then pixels
    float sd = guide.r; // signed distance to rail border (UV)
    float dCenterUV = abs(sd + uRailHalfWidthUV);
    float dPx = dCenterUV * uRes.x; // approximate px scale using X axis

    // For normal rendering we can early-out far from the blade for perf.
    // In debug views we keep drawing so visualizations cover the screen.
    if (uDebugView == 0) {
      if (dPx > uBladeWidthPx + 1.0) { discard; }
    }

    // Fetch local simulation sample for debug modes
    vec4 sUv = texture2D(uSimulationTexture, vUv);

    // Debug views (1..7)
    if (uDebugView == 1) {
      // 1) Signed distance visualization
      float m = clamp(0.5 - sd * 8.0, 0.0, 1.0);
      vec3 col = mix(vec3(0.06), vec3(1.0), m);
      col += arrowOverlay(vUv * uRes) * 0.75;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 2) {
      // 2) Tangent direction mapped to hue
      float ang = atan(tan.y, tan.x) / (6.28318530718) + 0.5; // 0..1
      vec3 col = hue2rgb(ang) * mix(0.25, 1.0, step(sd, 0.0));
      col += arrowOverlay(vUv * uRes) * 0.9;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 3) {
      // 3) Edge type (junction complexity)
      float et = clamp(guide.a, 0.0, 3.0);
      vec3 col = et < 0.5 ? vec3(0.2, 0.4, 1.0) :
                 et < 1.5 ? vec3(0.2, 1.0, 0.4) :
                 et < 2.5 ? vec3(1.0, 0.9, 0.2) : vec3(1.0, 0.3, 0.2);
      col *= mix(0.2, 1.0, step(sd, 0.0));
      col += arrowOverlay(vUv * uRes) * 0.9;
      if (uShowCenterline) {
        float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
        col = mix(col, vec3(1.0), c);
      }
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 4) {
      // 4) Forward energy (R)
      float e = sUv.r * uEnergyScale;
      vec3 col = vec3(e, 0.0, 0.0);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 5) {
      // 5) Backward energy (G)
      float e = sUv.g * uEnergyScale;
      vec3 col = vec3(0.0, e, 0.0);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    } else if (uDebugView == 6) {
      // 6) Total energy with TTL gating: alpha = energy * TTL (travelling fade)
      float e = clamp((sUv.r + sUv.g) * uEnergyScale, 0.0, 1.0);
      float ttl = clamp(sUv.a, 0.0, 1.0);
      float a = e * ttl;
      if (a <= uIntensityCutoff) { gl_FragColor = vec4(0.0); return; }
      vec3 col = hue2rgb(sUv.b);
      col += arrowOverlay(vUv * uRes) * 0.5;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, a);
      return;
    } else if (uDebugView == 7) {
      // 7) Hue only (ignore energy)
      vec3 col = hue2rgb(sUv.b);
      col += arrowOverlay(vUv * uRes) * 0.75;
      col = pow(max(col, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
      gl_FragColor = vec4(col, 1.0);
      return;
    }

    // Normal rendering path (mode 0): lightsaber-like profile with alpha-driven energy fade
    // Approximate closest-on-rail sample by peeking along the perpendicular
    vec4 sP = texture2D(uSimulationTexture, vUv + prp * dCenterUV);
    vec4 sM = texture2D(uSimulationTexture, vUv - prp * dCenterUV);
    float e0 = sUv.r + sUv.g;
    float eP = sP.r + sP.g;
    float eM = sM.r + sM.g;
    float e = e0; float hue = sUv.b;
    if (eP > e) { e = eP; hue = sP.b; }
    if (eM > e) { e = eM; hue = sM.b; }

    if (e <= 1e-4) { gl_FragColor = vec4(0.0); return; }

    // Radial profile
    float core = smoothstep(uCoreWidthPx, 0.0, dPx);
    float fall = 1.0 - smoothstep(uCoreWidthPx, uBladeWidthPx, dPx);
    // Use a softer alpha mask and a stronger emissive term to regain "glow"
    float shapeAlpha    = clamp(core + 0.5 * fall, 0.0, 1.0);
    float shapeEmission = max(1e-4, core * core * uCoreGain + fall * uHaloStrength);
    vec3  base = hue2rgb(hue);
    vec3  color = base * (uGlowIntensity * shapeEmission);
    // Energy + TTL-driven alpha (single fade with travelling front)
    float alphaE = clamp(e * uEnergyScale, 0.0, 1.0);
    float ttl    = clamp(sUv.a, 0.0, 1.0);
    float alpha  = clamp(alphaE * ttl * shapeAlpha, 0.0, 1.0);
    if (alpha <= uIntensityCutoff) { gl_FragColor = vec4(0.0); return; }
    // White-hot center for extra brilliance
    float whiteHot = smoothstep(0.8, 1.0, core) * alphaE;
    color = mix(color, vec3(1.0), clamp(uWhiteHotStrength * whiteHot, 0.0, 1.0));
    // Simple exposure tonemapping
    color = 1.0 - exp(-uExposure * color);

    // Optional overlays
    if (uShowCenterline) {
      float c = smoothstep(uCenterlineWidthPx, 0.0, dPx);
      color = mix(color, vec3(1.0), c);
    }
    color += arrowOverlay(vUv * uRes) * 0.9;

    // Gamma
    color = pow(max(color, 0.0), vec3(1.0 / max(uGamma, 1e-3)));
    gl_FragColor = vec4(color, alpha);
  }
`;class o_{constructor(e){this.renderer=e,this.guideTexture=new Jt(Kr,Kr,{format:Rt,type:Ht,minFilter:xt,magFilter:xt}),this.simulationTextures=[0,1].map(()=>new Jt(hi,hi,{format:Rt,type:Ht,minFilter:xt,magFilter:xt})),this.tempTexture=new Jt(hi,hi,{format:Rt,type:Ht,minFilter:xt,magFilter:xt}),this.guideMaterial=new At({vertexShader:fi,fragmentShader:i_,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((wn*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new At({vertexShader:fi,fragmentShader:r_,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new At({vertexShader:fi,fragmentShader:s_,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new Ze(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new jt(new wi(2,2),this.guideMaterial),this.scene=new tc,this.scene.add(this.quad),this.camera=new ja(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new At({vertexShader:fi,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,wn*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new At({vertexShader:fi,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:Kr,simResolution:hi,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const wt=n=>{const e=Rn.c(52),{label:t,value:i,min:r,max:s,step:a,onChange:o}=n;let c;e[0]!==i?(c=i.toString(),e[0]=i,e[1]=c):c=e[1];const[l,d]=ie.useState(c),[h,f]=ie.useState(!1),p=ie.useRef(null);let g,_;e[2]!==h||e[3]!==i?(g=()=>{h||d(i.toString())},_=[i,h],e[2]=h,e[3]=i,e[4]=g,e[5]=_):(g=e[4],_=e[5]),ie.useEffect(g,_);let m;e[6]!==l||e[7]!==o||e[8]!==i?(m=()=>{const Ae=parseFloat(l);isNaN(Ae)?d(i.toString()):o(Ae)},e[6]=l,e[7]=o,e[8]=i,e[9]=m):m=e[9];const u=m;let E;e[10]!==i?(E=()=>{f(!0),d(i.toString())},e[10]=i,e[11]=E):E=e[11];const b=E;let M;e[12]!==u?(M=()=>{f(!1),u()},e[12]=u,e[13]=M):M=e[13];const L=M;let R;e[14]!==u||e[15]!==i?(R=Ae=>{Ae.key==="Enter"?(u(),p.current?.blur()):Ae.key==="Escape"&&(d(i.toString()),f(!1),p.current?.blur())},e[14]=u,e[15]=i,e[16]=R):R=e[16];const A=R;let D,S;e[17]===Symbol.for("react.memo_cache_sentinel")?(D={marginBottom:8},S={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[17]=D,e[18]=S):(D=e[17],S=e[18]);let v;e[19]!==t?(v=W.jsx("span",{children:t}),e[19]=t,e[20]=v):v=e[20];let w;e[21]!==a||e[22]!==i?(w=i.toFixed(a<.01?3:2),e[21]=a,e[22]=i,e[23]=w):w=e[23];let F;e[24]!==w?(F=W.jsx("span",{children:w}),e[24]=w,e[25]=F):F=e[25];let O;e[26]!==v||e[27]!==F?(O=W.jsxs("div",{style:S,children:[v,F]}),e[26]=v,e[27]=F,e[28]=O):O=e[28];let G;e[29]!==o?(G=Ae=>o(parseFloat(Ae.target.value)),e[29]=o,e[30]=G):G=e[30];let J;e[31]===Symbol.for("react.memo_cache_sentinel")?(J={width:"100%",marginBottom:4},e[31]=J):J=e[31];let V;e[32]!==s||e[33]!==r||e[34]!==a||e[35]!==G||e[36]!==i?(V=W.jsx("input",{type:"range",min:r,max:s,step:a,value:i,onChange:G,style:J}),e[32]=s,e[33]=r,e[34]=a,e[35]=G,e[36]=i,e[37]=V):V=e[37];let te;e[38]===Symbol.for("react.memo_cache_sentinel")?(te=Ae=>d(Ae.target.value),e[38]=te):te=e[38];const H=h?"#333":"#222",oe=`1px solid ${h?"#666":"#444"}`;let ce;e[39]!==H||e[40]!==oe?(ce={width:"100%",background:H,color:"#fff",border:oe,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[39]=H,e[40]=oe,e[41]=ce):ce=e[41];let xe;e[42]!==L||e[43]!==b||e[44]!==A||e[45]!==l||e[46]!==ce?(xe=W.jsx("input",{ref:p,type:"text",value:l,onFocus:b,onChange:te,onBlur:L,onKeyDown:A,placeholder:"Enter value...",style:ce}),e[42]=L,e[43]=b,e[44]=A,e[45]=l,e[46]=ce,e[47]=xe):xe=e[47];let Ue;return e[48]!==O||e[49]!==V||e[50]!==xe?(Ue=W.jsxs("div",{style:D,children:[O,V,xe]}),e[48]=O,e[49]=V,e[50]=xe,e[51]=Ue):Ue=e[51],Ue},l_=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:a,onNudgeRender:o,onClose:c})=>{const[l,d]=ie.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),h=ie.useRef(!1),f=ie.useRef({x:0,y:0}),p=S=>{h.current=!0,f.current={x:S.clientX-l.x,y:S.clientY-l.y}},g=ie.useCallback(S=>{h.current&&d({x:S.clientX-f.current.x,y:S.clientY-f.current.y})},[]),_=ie.useCallback(()=>{h.current=!1},[]);ie.useEffect(()=>{if(h.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",_)}},[g,_,h.current]);const[m,u]=ie.useState(!1),[E,b]=ie.useState({speed:$t.speed,attenuation:$t.attenuation,lineWidth:.008,injectionRadius:$t.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),M=(S,v)=>{b(O=>({...O,[S]:v}));const w=e.current,F=t.current;if(!(!w||!F)){switch(S){case"speed":w.simulationMaterial.uniforms.uSpeed.value=v;break;case"attenuation":w.simulationMaterial.uniforms.uAttenuation.value=v;break;case"lineWidth":w.guideMaterial.uniforms.uLineWidth.value=v;break;case"injectionRadius":w.injectionMaterial.uniforms.uInjectionRadius.value=v;break;case"ttlLifetime":{const G=1/Math.max(.1,v);w.simulationMaterial.uniforms.uTTLDecayRate&&(w.simulationMaterial.uniforms.uTTLDecayRate.value=G);break}case"coreWidthPx":F.uCoreWidthPx&&(F.uCoreWidthPx.value=v);break;case"bladeWidthPx":F.uBladeWidthPx&&(F.uBladeWidthPx.value=v);break;case"energyScale":F.uEnergyScale&&(F.uEnergyScale.value=v);break;case"gamma":F.uGamma&&(F.uGamma.value=v);break;case"intensityCutoff":F.uIntensityCutoff&&(F.uIntensityCutoff.value=v);break;case"debugView":F.uDebugView&&(F.uDebugView.value=v);break;case"overlayVectors":F.uOverlayVectors&&(F.uOverlayVectors.value=!!v);break;case"vectorSpacingPx":F.uVectorSpacingPx&&(F.uVectorSpacingPx.value=v);break;case"vectorLengthPx":F.uVectorLengthPx&&(F.uVectorLengthPx.value=v);break;case"vectorThicknessPx":F.uVectorThicknessPx&&(F.uVectorThicknessPx.value=v);break;case"showCenterline":F.uShowCenterline&&(F.uShowCenterline.value=!!v);break;case"centerlineWidthPx":F.uCenterlineWidthPx&&(F.uCenterlineWidthPx.value=v);break}o?.()}};ie.useEffect(()=>{const S=e.current,v=t.current;!S||!v||b(w=>({...w,speed:S.simulationMaterial.uniforms.uSpeed?.value??w.speed,attenuation:S.simulationMaterial.uniforms.uAttenuation?.value??w.attenuation,lineWidth:S.guideMaterial.uniforms.uLineWidth?.value??w.lineWidth,injectionRadius:S.injectionMaterial.uniforms.uInjectionRadius?.value??w.injectionRadius,ttlLifetime:(S.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(S.simulationMaterial.uniforms.uTTLDecayRate?.value??1):w.ttlLifetime,coreWidthPx:v.uCoreWidthPx?.value??w.coreWidthPx,bladeWidthPx:v.uBladeWidthPx?.value??w.bladeWidthPx,energyScale:v.uEnergyScale?.value??w.energyScale,gamma:v.uGamma?.value??w.gamma,debugView:v.uDebugView?.value??w.debugView,overlayVectors:!!(v.uOverlayVectors?.value??w.overlayVectors),vectorSpacingPx:v.uVectorSpacingPx?.value??w.vectorSpacingPx,vectorLengthPx:v.uVectorLengthPx?.value??w.vectorLengthPx,vectorThicknessPx:v.uVectorThicknessPx?.value??w.vectorThicknessPx,showCenterline:!!(v.uShowCenterline?.value??w.showCenterline),centerlineWidthPx:v.uCenterlineWidthPx?.value??w.centerlineWidthPx,intensityCutoff:v.uIntensityCutoff?.value??w.intensityCutoff}))},[]);const[L,R]=ie.useState({fps:0,frame:0});ie.useEffect(()=>{let S=0,v=0,w=performance.now();const F=()=>{const O=performance.now();if(S+=O-w,v+=1,v>=60){const G=S/v;R({fps:Math.round(1e3/G),frame:parseFloat(G.toFixed(2))}),S=0,v=0}w=O,requestAnimationFrame(F)};F()},[]);const A=S=>{switch(S){case"default":M("speed",$t.speed),M("attenuation",$t.attenuation),M("lineWidth",.008),M("injectionRadius",$t.injectionRadius),M("ttlLifetime",2),M("coreWidthPx",2),M("bladeWidthPx",10),M("energyScale",1),M("gamma",1),M("debugView",0),M("overlayVectors",!1),M("showCenterline",!1);break;case"fast":M("speed",1.5),M("attenuation",.5),M("ttlLifetime",1);break;case"slow":M("speed",.3),M("attenuation",2.5),M("ttlLifetime",4);break;case"intense":M("coreWidthPx",Math.max(1,E.coreWidthPx*1.5)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*1.5)),M("energyScale",Math.max(1,E.energyScale*1.3));break;case"subtle":M("attenuation",2),M("coreWidthPx",Math.max(1,E.coreWidthPx*.7)),M("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*.8)),M("ttlLifetime",3);break}},D=(S,v)=>W.jsx("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>A(v),onMouseEnter:w=>w.currentTarget.style.background="#555",onMouseLeave:w=>w.currentTarget.style.background="#444",children:S},v);return W.jsxs("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[W.jsxs("div",{onMouseDown:p,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[W.jsxs("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]}),W.jsxs("div",{style:{display:"flex",gap:4},children:[W.jsx("button",{onClick:()=>a?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"}),c&&W.jsx("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"}),W.jsx("button",{onClick:()=>u(S=>!S),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"})]})]}),!m&&W.jsxs("div",{style:{padding:10},children:[W.jsx("div",{style:{marginBottom:12},children:W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[W.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[W.jsx("div",{children:"FPS"}),W.jsx("div",{style:{color:L.fps<30?"#f44":"#4f4"},children:L.fps})]}),W.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[W.jsx("div",{children:"Nodes"}),W.jsx("div",{children:i})]}),W.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[W.jsx("div",{children:"Res"}),W.jsx("div",{children:hi})]})]})}),W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"}),D("Def","default"),D("Fast","fast"),D("Slow","slow"),D("Int","intense"),D("Sub","subtle")]}),W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"}),W.jsx(wt,{label:"Speed",value:E.speed,min:.1,max:2,step:.1,onChange:S=>M("speed",S)}),W.jsx(wt,{label:"Attenuation",value:E.attenuation,min:.1,max:5,step:.1,onChange:S=>M("attenuation",S)}),W.jsx(wt,{label:"Rail width",value:E.lineWidth,min:.002,max:.05,step:.001,onChange:S=>M("lineWidth",S)}),W.jsx(wt,{label:"Fade lifetime (s)",value:E.ttlLifetime,min:.2,max:10,step:.1,onChange:S=>M("ttlLifetime",S)})]}),W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"}),W.jsx(wt,{label:"Radius",value:E.injectionRadius,min:.01,max:.3,step:.01,onChange:S=>M("injectionRadius",S)})]}),W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"}),W.jsx(wt,{label:"Core width (px)",value:E.coreWidthPx,min:1,max:40,step:1,onChange:S=>M("coreWidthPx",S)}),W.jsx(wt,{label:"Blade width (px)",value:E.bladeWidthPx,min:E.coreWidthPx+2,max:200,step:1,onChange:S=>M("bladeWidthPx",Math.max(S,E.coreWidthPx+2))}),W.jsx(wt,{label:"Energy scale",value:E.energyScale,min:.1,max:5,step:.1,onChange:S=>M("energyScale",S)}),W.jsx(wt,{label:"Gamma",value:E.gamma,min:.5,max:2.5,step:.1,onChange:S=>M("gamma",S)}),W.jsx(wt,{label:"Min intensity cutoff",value:E.intensityCutoff,min:0,max:.05,step:.001,onChange:S=>M("intensityCutoff",S)})]}),W.jsxs("div",{style:{marginBottom:12},children:[W.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"}),W.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([S,v])=>W.jsx("button",{onClick:()=>M("debugView",v),style:{padding:"2px 6px",fontSize:9,background:E.debugView===v?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:S},S))}),W.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[W.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"}),W.jsx("input",{type:"checkbox",checked:E.overlayVectors,onChange:S=>M("overlayVectors",S.target.checked)}),W.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"}),W.jsx("input",{type:"checkbox",checked:E.showCenterline,onChange:S=>M("showCenterline",S.target.checked)})]}),W.jsx(wt,{label:"Vector spacing (px)",value:E.vectorSpacingPx,min:4,max:64,step:1,onChange:S=>M("vectorSpacingPx",S)}),W.jsx(wt,{label:"Vector length (px)",value:E.vectorLengthPx,min:2,max:32,step:1,onChange:S=>M("vectorLengthPx",S)}),W.jsx(wt,{label:"Vector thickness (px)",value:E.vectorThicknessPx,min:.5,max:6,step:.25,onChange:S=>M("vectorThicknessPx",S)}),W.jsx(wt,{label:"Centerline width (px)",value:E.centerlineWidthPx,min:.5,max:8,step:.5,onChange:S=>M("centerlineWidthPx",S)})]})]})]})},c_=n=>n.hue!==void 0?n.hue:n.rgb?Oa(n.rgb):0,u_=({children:n,topology:e="ladder",speed:t=$t.speed,attenuation:i=$t.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:a="scope",debugPosition:o="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:d="default",maxFPS:h=120})=>{const f=ie.useRef(new Map),[,p]=ie.useState(0),g=ie.useRef(!1),_=ie.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,p(Y=>Y+1)}))},[]),u=wa().toLowerCase().indexOf("light")!==-1,E=ie.useCallback(Y=>{f.current.set(Y.id,Y);const ue=Y.ref.current;ue&&q.current&&q.current.observe(ue),Ae.current=!0,_()},[_]),b=ie.useCallback(Y=>{const se=f.current.get(Y)?.ref.current;se&&q.current&&q.current.unobserve(se),f.current.delete(Y),Ae.current=!0,_()},[_]),M=ie.useRef(performance.now()),L=ie.useRef(null),R=ie.useRef(null),A=ie.useRef(performance.now()),D=ie.useRef(h),S=ie.useRef(()=>{}),v=ie.useCallback(()=>{R.current===null&&(J.current=performance.now(),L.current&&(R.current=requestAnimationFrame(L.current)))},[]),w=ie.useCallback((Y,ue,se={})=>{const me=te.current;if(!me)return;let Pe=c_(se);u&&(Pe=(Pe+.5)%1);const be=se.energy??2.5,He=se.radius??$t.injectionRadius;me.injectionMaterial.uniforms.uInjectionRadius.value=He,me.injectPulse(Y,ue,Pe,be),M.current=performance.now(),v()},[u,v]);ie.useEffect(()=>{S.current=w},[w]),ie.useEffect(()=>{D.current=h},[h]);const F=ie.useCallback(Y=>{const se=f.current.get(Y)?.ref.current;if(!se)return null;const me=se.getBoundingClientRect();return{u:(me.left+me.width/2)/window.innerWidth,v:1-(me.top+me.height/2)/window.innerHeight}},[]),O=ie.useMemo(()=>({register:E,unregister:b,pulseAt:w,getNodeCenter:F}),[E,b,w,F]),G=ie.useRef(null),J=ie.useRef(performance.now()),V=ie.useRef(new Float32Array(wn*4)),te=ie.useRef(null),H=ie.useRef(null),[oe,ce]=ie.useState(s),xe=ie.useRef(null),Ue=ie.useRef(e),Ae=ie.useRef(!0);ie.useEffect(()=>{if(!G.current)return;M.current=performance.now();const Y=new e_({alpha:!0,antialias:!0,powerPreference:d}),ue=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;Y.setPixelRatio(ue),Y.setSize(window.innerWidth,window.innerHeight),G.current.appendChild(Y.domElement),xe.current=Y;const se=new tc,me=new ja(-1,1,1,-1,0,1),Pe=new o_(Y);te.current=Pe;const be=Pe.simulationMaterial.uniforms;be.uSpeed.value=t,be.uAttenuation.value=i,be.uEnergyConservation.value=$t.energyConservation;const He={uRes:{value:new Ze(window.innerWidth,window.innerHeight)},uGuideTexture:{value:Pe.getGuideTexture()},uSimulationTexture:{value:Pe.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:Pe.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};H.current=He;const Ke=new jt(new wi(2,2),new At({vertexShader:fi,fragmentShader:a_,uniforms:He,transparent:!0,depthWrite:!1,blending:Os}));se.add(Ke),Ae.current=!0;const Xe=1e4,C=()=>{const Ve=performance.now();if(Ve-M.current>Xe){R.current=null;return}const Se=D.current;if(Se&&Se>0){const T=1e3/Se;if(Ve-A.current<T){R.current=requestAnimationFrame(C);return}}const Ge=Math.min((Ve-J.current)/1e3,.033);J.current=Ve;const Ee=window.innerWidth,Ne=window.innerHeight,Je=Array.from(f.current.values()).slice(0,wn);Je.forEach((T,x)=>{const N=T.ref.current;if(!N)return;const j=N.getBoundingClientRect(),K=x*4,X=[j.left/Ee,(Ne-(j.top+j.height))/Ne,j.width/Ee,j.height/Ne];for(let ae=0;ae<4;ae++)Math.abs(V.current[K+ae]-X[ae])>.001&&(V.current[K+ae]=X[ae],Ae.current=!0)});for(let T=Je.length*4;T<V.current.length;T++)V.current[T]!==0&&(V.current[T]=0,Ae.current=!0);if(Ae.current){const T=Ue.current==="grid"?t_(V.current,Je.length).edges:n_(V.current,Je.length).edges;Pe.updateGuideTexture(T),Ae.current=!1}Pe.simulationStep(Ge),He.uSimulationTexture.value=Pe.getCurrentTexture(),He.uTime.value=Ve/1e3,He.uRailHalfWidthUV.value=Pe.guideMaterial.uniforms.uLineWidth.value,Y.setRenderTarget(null),Y.render(se,me),A.current=Ve,R.current=requestAnimationFrame(C)};L.current=C,R.current=requestAnimationFrame(C);const ut=()=>{He.uRes.value.set(window.innerWidth,window.innerHeight),Y.setSize(window.innerWidth,window.innerHeight),Ae.current=!0};window.addEventListener("resize",ut);const ze=G.current;return()=>{window.removeEventListener("resize",ut),R.current!==null&&cancelAnimationFrame(R.current),R.current=null,Pe.dispose(),Y.dispose(),ze&&Y.domElement.parentElement===ze&&ze.removeChild(Y.domElement)}},[i,c,l,d,t]),ie.useEffect(()=>{Ue.current=e,Ae.current=!0,v()},[e,v]),ie.useEffect(()=>{const Y=te.current;if(!Y)return;const ue=Y.simulationMaterial.uniforms;ue.uSpeed.value=t,ue.uAttenuation.value=i},[t,i]),ie.useEffect(()=>{if(!r)return;const Y=ue=>{const se=ue.clientX/window.innerWidth,me=1-ue.clientY/window.innerHeight;S.current&&S.current(se,me,{hue:.33})};return window.addEventListener("click",Y),()=>window.removeEventListener("click",Y)},[r]),ie.useEffect(()=>{const Y=xe.current;if(!Y)return;const ue=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;Y.setPixelRatio(ue)},[l]);const q=ie.useRef(null);return ie.useEffect(()=>(q.current=new ResizeObserver(()=>{Ae.current=!0,_()}),f.current.forEach(Y=>{const ue=Y.ref.current;ue&&q.current&&q.current.observe(ue)}),()=>q.current?.disconnect()),[_]),ie.useEffect(()=>ce(s),[s]),ie.useEffect(()=>{H.current&&(H.current.uCornerRadiusPx.value=c)},[c]),W.jsxs(Dl.Provider,{value:O,children:[n,W.jsx("div",{ref:G,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}}),oe&&W.jsx(l_,{scopeId:a,gpuSimRef:te,vizUniformsRef:H,nodeCount:f.current.size,position:o,onClose:()=>ce(!1)})]})},d_=n=>{const e=Rn.c(3),t=Lc("legacyGpuNetworkScope");let i;return e[0]!==n||e[1]!==t?(i=t?W.jsx(u_,{...n}):W.jsx(Hu,{...n}),e[0]=n,e[1]=t,e[2]=i):i=e[2],i},h_=ie.lazy(()=>ba(()=>import("./Assistant-Cr6psl3c.js").then(n=>n.A),__vite__mapDeps([9,1,2,3,4,0,5,6,7,10,11,12,13,14,15,16,17]))),_l=n=>{const e=Rn.c(17),{onReady:t}=n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=no(),e[0]=i):i=e[0];const[r,s]=ie.useState(i);let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=Dc(),e[1]=a):a=e[1];const[o,c]=ie.useState(a);let l,d;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let b=!1;return no()?(s(!0),()=>{b=!0}):(Uc().then(()=>{b||s(!0)}).catch(M=>{b||c(M instanceof Error?M:new Error(String(M)))}),()=>{b=!0})},d=[],e[2]=l,e[3]=d):(l=e[2],d=e[3]),ie.useEffect(l,d);let h,f;e[4]!==r?(h=()=>{if(!r)return;const b=Lu(),M=wu();return()=>{M?.(),b?.()}},f=[r],e[4]=r,e[5]=h,e[6]=f):(h=e[5],f=e[6]),ie.useEffect(h,f);let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p={width:"100%",height:"100%",overflow:"hidden"},e[7]=p):p=e[7];let g,_,m;e[8]===Symbol.for("react.memo_cache_sentinel")?(_=W.jsx(nu,{}),m=W.jsx(Qc,{}),g=W.jsx(Du,{}),e[8]=g,e[9]=_,e[10]=m):(g=e[8],_=e[9],m=e[10]);let u;e[11]!==o||e[12]!==t||e[13]!==r?(u=o instanceof xl?W.jsx(Iu,{error:o}):o?W.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",boxSizing:"border-box",textAlign:"center"},children:W.jsxs("div",{style:{maxWidth:760},children:[W.jsx("h2",{style:{marginBottom:"1rem",color:"#f85149"},children:"Assistant stopped to protect your data"}),W.jsx("p",{style:{margin:"0 0 1rem 0",lineHeight:1.5,color:"#f85149",overflowWrap:"anywhere"},children:o.message}),W.jsx("p",{style:{margin:"0 0 1.5rem 0",lineHeight:1.5,color:"#8b949e",fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`}),W.jsxs("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"0.75rem"},children:[W.jsx("button",{type:"button",onClick:f_,style:{padding:"0.6rem 1.4rem",fontSize:"1rem",borderRadius:"999px",border:"none",cursor:"pointer",backgroundColor:"#1f6feb",color:"#fff",fontWeight:500},children:"Reload Assistant"}),W.jsx("button",{type:"button",onClick:p_,title:"Preserves conversations and resets only tabs, panels, and layout state",style:{padding:"0.6rem 1.4rem",fontSize:"1rem",borderRadius:"999px",border:"1px solid #8b949e",cursor:"pointer",backgroundColor:"transparent",color:"#c9d1d9",fontWeight:500},children:"Reset layout & tabs"})]}),W.jsx("p",{style:{margin:"1rem 0 0",lineHeight:1.5,color:"#8b949e",fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."})]})}):r?W.jsx(h_,{onReady:t}):null,e[11]=o,e[12]=t,e[13]=r,e[14]=u):u=e[14];let E;return e[15]!==u?(E=W.jsx("div",{style:p,children:W.jsx(Ic,{runtime:Nc,store:Xn,children:W.jsx(qc,{children:W.jsxs(d_,{topology:"grid",cornerRadius:18,children:[_,m,g,u]})})})}),e[15]=u,e[16]=E):E=e[16],E};function f_(){return window.location.reload()}function p_(){return window.location.assign(gc())}const b_=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:_l,default:_l},Symbol.toStringTag,{value:"Module"}));export{b_ as A,E_ as N,Dl as a,T_ as h,M_ as m,y_ as r};
