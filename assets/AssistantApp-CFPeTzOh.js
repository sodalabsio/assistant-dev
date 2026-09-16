const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/reduxStore-CG0pXndv.js","assets/index-DhHWgycz.js","assets/index-CIkfqCBi.css","assets/llm-CElRCl0P.js","assets/boot-C4V467nJ.js","assets/collectionsThunks-B7Uv9RDJ.js","assets/slackSocketMode-CqQ_qAx2.js","assets/durability-Vd4R_BMo.js","assets/publicImagesSlice-CIh_yk4F.js","assets/api-DHaMX06C.js","assets/userImagesSlice-BdjuCrMG.js","assets/ingestDocument-C-DoYj9y.js","assets/reduxStore-CWB6GqsP.css","assets/frameBuilders-3Fs_uZqw.js","assets/faultExport-Bcx0jM1Q.js","assets/Assistant-Ccb6dgjW.js","assets/ReduxAppDataRoot-NRblY6X2.js","assets/runtimeList-DeLXXXL_.js","assets/PaletteThemeProvider-3RgMXuYW.js","assets/isObject-CGZ9pm3u.js","assets/toNumber-DbsqjrQD.js","assets/runtimeList-AEWOLj28.css","assets/cronStream-CHtcuKJp.js","assets/canonicalProjectPatchSet-B5fDcwDl.js","assets/openrouter-D_ipdL9n.js","assets/pkce-CpKKDV7R.js","assets/oauth-CKngOZSX.js","assets/App-Dj82uHpS.js","assets/oauthCallbackContract-B3NnAqVX.js","assets/Assistant-CaQJH_Mi.css"])))=>i.map(i=>d[i]);
import{c as vn,j as q,r as se,w as un,s as Hl,_ as dn,d as Vl,g as Gl,f as Wl}from"./index-DhHWgycz.js";import{i as Tc,a as Xl,b as ql,r as jl,c as $l,R as Yl,d as wc,e as Kl,f as Zl,g as Ac,h as Rc,j as Cc,k as Pc,l as Ic,m as Lc,n as Jl,o as Ql,D as _n,N as Dc,p as eu,q as sa,s as tu,t as oa,u as nu,v as Uc,w as Vi,P as iu,U as ru}from"./PaletteThemeProvider-3RgMXuYW.js";import{d as $t,a as Nc,b as Oc,r as su,c as ou,R as au}from"./ReduxAppDataRoot-NRblY6X2.js";import{C as $r,c_ as Oo,c$ as cu,d0 as lu,d1 as uu,k as du,d2 as hu,d3 as fu,d4 as aa,d5 as pu,d6 as mu,b4 as gu,d7 as vu,d8 as Fc,a$ as Bc,d9 as Fo,da as _u,db as xu,dc as Su,dd as yu,de as ca,v as Mu,t as Eu,w as bu,df as Tu,dg as wu,dh as Au,di as Ru,dj as Cu,dk as Pu,dl as Iu,dm as Lu,dn as Du,dp as Uu,dq as zi,dr as Nu,ds as Ou,dt as kc,du as Bo,dv as Fu,dw as Bu,aZ as ku,bK as zu,dx as Hu,dy as Vu,dz as Gu,dA as Wu,dB as Xu,dC as qu,cZ as ju,dD as $u,dE as Yu,dF as Ku,dG as Zu,dH as la,dI as Ju,dJ as ua,dK as Qu,dL as ed,dM as td,T as ar,dN as da,ar as nd,E as ha}from"./reduxStore-CG0pXndv.js";import{f as id,j as rd,k as sd,l as od,u as ad}from"./durability-Vd4R_BMo.js";import{l as cd,c as ld,S as zc}from"./boot-C4V467nJ.js";import{h as ud,l as dd,s as Wi}from"./collectionsThunks-B7Uv9RDJ.js";import{g as Hc,o as zs,p as hd}from"./llm-CElRCl0P.js";import{t as Vc}from"./App-Dj82uHpS.js";const fa=180,fd=n=>{const e=vn.c(38),{alert:t}=n,[i,r]=se.useState(!1),s=$r(),o=t.severity==="critical"?s["status.error"]:s["status.warning"],a=t.message.length>fa,c=i||!a?t.message:`${t.message.slice(0,fa)}…`;let l;e[0]!==o?(l=un(o,.14),e[0]=o,e[1]=l):l=e[1];const h=`1px solid ${un(o,.72)}`,p=s["text.primary"];let f;e[2]!==l||e[3]!==h||e[4]!==p?(f={pointerEvents:"auto",backgroundColor:l,border:h,color:p,borderRadius:8,padding:"10px 14px",display:"flex",alignItems:"flex-start",gap:12,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.32)",fontSize:"0.9rem",lineHeight:1.45},e[2]=l,e[3]=h,e[4]=p,e[5]=f):f=e[5];let d;e[6]!==o?(d={color:o,fontSize:"1.05rem",lineHeight:1.3},e[6]=o,e[7]=d):d=e[7];const g=t.severity==="critical"?"🛑":"⚠️";let v;e[8]!==d||e[9]!==g?(v=q.jsx("span",{"aria-hidden":"true",style:d,children:g}),e[8]=d,e[9]=g,e[10]=v):v=e[10];let m,u;e[11]===Symbol.for("react.memo_cache_sentinel")?(m={flex:1,minWidth:0},u={display:"block",marginBottom:2},e[11]=m,e[12]=u):(m=e[11],u=e[12]);let E;e[13]!==t.title?(E=q.jsx("strong",{style:u,children:t.title}),e[13]=t.title,e[14]=E):E=e[14];let T;e[15]===Symbol.for("react.memo_cache_sentinel")?(T={overflowWrap:"anywhere"},e[15]=T):T=e[15];let y;e[16]!==c?(y=q.jsx("span",{style:T,children:c}),e[16]=c,e[17]=y):y=e[17];let D;e[18]!==i||e[19]!==a||e[20]!==o?(D=a&&q.jsx("button",{type:"button",onClick:()=>r(md),style:{marginLeft:8,background:"none",border:"none",color:o,cursor:"pointer",padding:0,fontSize:"0.85rem",textDecoration:"underline"},children:i?"Show less":"Show details"}),e[18]=i,e[19]=a,e[20]=o,e[21]=D):D=e[21];let R;e[22]!==E||e[23]!==y||e[24]!==D?(R=q.jsxs("div",{style:m,children:[E,y,D]}),e[22]=E,e[23]=y,e[24]=D,e[25]=R):R=e[25];let w;e[26]!==t.id?(w=()=>rd(t.id),e[26]=t.id,e[27]=w):w=e[27];const U=s["text.primary"];let S;e[28]!==U?(S={background:"none",border:"none",color:U,cursor:"pointer",fontSize:"1rem",lineHeight:1,padding:"2px 4px",opacity:.8},e[28]=U,e[29]=S):S=e[29];let _;e[30]!==w||e[31]!==S?(_=q.jsx("button",{type:"button","aria-label":"Dismiss storage alert",onClick:w,style:S,children:"×"}),e[30]=w,e[31]=S,e[32]=_):_=e[32];let b;return e[33]!==R||e[34]!==_||e[35]!==f||e[36]!==v?(b=q.jsxs("div",{role:"alert",style:f,children:[v,R,_]}),e[33]=R,e[34]=_,e[35]=f,e[36]=v,e[37]=b):b=e[37],b},pd=()=>{const n=vn.c(5),e=id();if(e.length===0)return null;let t;n[0]===Symbol.for("react.memo_cache_sentinel")?(t={position:"fixed",top:0,left:0,right:0,zIndex:1e4,display:"flex",flexDirection:"column",gap:6,padding:"8px 10px",pointerEvents:"none"},n[0]=t):t=n[0];let i;n[1]!==e?(i=e.map(gd),n[1]=e,n[2]=i):i=n[2];let r;return n[3]!==i?(r=q.jsx("div",{style:t,children:i}),n[3]=i,n[4]=r):r=n[4],r};function md(n){return!n}function gd(n){return q.jsx(fd,{alert:n},n.id)}function vd(){const n=vn.c(4),e=$r(),t=Oo();let i,r;return n[0]!==e||n[1]!==t?(i=()=>{Hl(t,e)},r=[e,t],n[0]=e,n[1]=t,n[2]=i,n[3]=r):(i=n[2],r=n[3]),se.useEffect(i,r),null}const Gc=$t,Ir="assistant.migrationStress.fixture.v1",Li="assistant.migrationStress.run.v1",ko=128*1024,zo=32*1024,Ho=256*1024,_d=256,xd=64,pa=200,Qr=25,ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_=+[]{}()<>/\\|;:,.!?~";function Je(n,e){if(!n)throw new Error(e)}function Di(n,e){const t=Number(n);return Number.isFinite(t)&&t>=0?t:e}function ga(n,e){const t=Number(n);return Number.isFinite(t)&&t>0?t:e}function Sd(n){const e=Di(n?.reduxMiB,0);return Je(e>0,"Migration stress reduxMiB must be greater than zero."),Je(e<=4096,"Migration stress reduxMiB must not exceed 4096 MiB."),{reduxMiB:e,depotRatio:Math.min(64,Di(n?.depotRatio,.1)),testRunsRatio:Math.min(64,Di(n?.testRunsRatio,.01)),depotMiB:n.depotMiB===void 0?null:Math.min(4096,Di(n.depotMiB,0)),testRunsMiB:n.testRunsMiB===void 0?null:Math.min(4096,Di(n.testRunsMiB,0)),depotRecordKiB:Math.min(256*1024,ga(n.depotRecordKiB,_d)),testRunCollectionKiB:Math.min(256*1024,ga(n.testRunCollectionKiB,xd))}}function Ui(n,e){return n<=0?0:Math.ceil(n/e)}function Jt(n,e,t){return Math.max(0,Math.min(e,n-t*e))}function yd(n){const e=Sd(n),t=Math.round(e.reduxMiB*1024*1024),i=Math.round(t*.7),r=Math.round(t*.26),s=Math.max(0,t-i-r),o=Math.round((e.depotMiB??e.reduxMiB*e.depotRatio)*1024*1024),a=Math.round((e.testRunsMiB??e.reduxMiB*e.testRunsRatio)*1024*1024),c=Math.round(e.depotRecordKiB*1024),l=Math.round(e.testRunCollectionKiB*1024);return{schemaVersion:1,requested:e,budgets:{reduxPayloadBytes:t,messagePayloadBytes:i,artifactPayloadBytes:r,fileSavePayloadBytes:s,depotPayloadBytes:o,testRunPayloadBytes:a},counts:{messages:Ui(i,ko),artifactVersions:Ui(r,zo),fileSaves:Ui(s,Ho),depotObjects:Ui(o,c),testRunCollections:Ui(a,l)},seededAt:new Date().toISOString()}}function Zi(n,e){if(n<=0)return"";const t=`${e}|`;if(t.length>=n)return t.slice(0,n);const i=n-t.length;return t+ma.repeat(Math.ceil(i/ma.length)).slice(0,i)}function Xi(n){return`migration-stress-message-${n}`}function Wc(n){return`migration-stress-artifact-${n}`}function Xc(n){return`migration-stress-save-${n}`}function Gi(n){return`migration-stress-depot-${n}`}function qc(n){return`migration-stress-agent-${n}`}function Md(n,e,t){const i=Xi(n),r="2026-07-24T00:00:00.000Z",s=Zi(t,i),o=n%3,a=o===0?{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"getFiles",arguments:"{}"}},result:{files:{[`/synthetic/${n}.txt`]:s},entryMetadata:{}},error:""}],model:"migration-stress",done:!0}:o===1?{text:s,toolUses:[],model:"migration-stress",done:!0}:{text:"",toolUses:[{call:{id:`call-${n}`,type:"function",function:{name:"search",arguments:"{}"}},result:{results:[{title:`Synthetic ${n}`,content:s}]},error:""}],model:"migration-stress",done:!0};return{_timestamp:17848512e5+n,id:i,type:"response",conversationId:e,chain:[{iteration:0,response:a,stepAugments:[],errors:[],origin:"assistant",metadata:{startTime:r,endTime:r,stage:"closed"}}],origin:{provider:"test",model:"migration-stress"},state:{type:"success"},processing:{},markers:{analysis:"none",definitions:"none",facts:"none",summary:"none"},ui:{annotationMode:"none",definitionState:"none",factCheckState:"none"},permittedToolClasses:[],attachments:[],metadata:{category:"migration-stress",index:n,creationTime:r,updateTime:r},sidecars:o===2?{synthetic:{payloadBytes:t}}:{},augments:[]}}function Ed(n,e){const t=n?.chain?.[0]?.response;return e%3===0?t?.toolUses?.[0]?.result?.files?.[`/synthetic/${e}.txt`]:e%3===1?t?.text:t?.toolUses?.[0]?.result?.results?.[0]?.content}function bd(n,e){const t=Wc(n);return{id:t,name:`/artifacts/migration-stress/${n}.md`,language:"markdown",type:"file",content:Zi(e,t),originMsg:Xi(n%Math.max(1,n+1)),createdAt:17848512e5+n,_timestamp:17848512e5+n,source:"response",versionLabel:"v1",isComplete:!0,description:"Synthetic migration stress artifact"}}function Td(n,e){const t=Xc(n);return{id:t,label:`Synthetic save ${n}`,timestamp:17848512e5+n,status:"committed",files:[{path:`/synthetic/save-${n}.txt`,prevContentHash:`before-${n}`,prevContent:"",newContentHash:`after-${n}`,newContent:Zi(e,t)}],metadata:{kind:"artifact",actor:"assistant"}}}async function wd(){const{getAssistantDataStore:n,persistor:e}=await dn(async()=>{const{getAssistantDataStore:i,persistor:r}=await import("./reduxStore-CG0pXndv.js").then(s=>s.z_);return{getAssistantDataStore:i,persistor:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));e.pause(),await e.flush();const t=await n();return{dataStore:t,snapshot:await t.loadSnapshot()}}async function es(n,e,t,i,r){if(i===0)return;const s=hu(e,t),o=[...s.ids];for(let a=0;a<i;a+=pa){const c=Math.min(i,a+pa);await n.transaction(async l=>{for(let h=a;h<c;h+=1){const p=r(h);o.push(p.id),await l.putEntity(e,p.id,p)}await l.putEntityStructure(e,{ids:o,meta:s.meta})})}}async function Ad(n,e,t){const i=du(t),r=String(i.conversations?.ids?.[0]||"migration-stress-unattached");await es(e,"messages",i.messages,n.counts.messages,o=>Md(o,r,Jt(n.budgets.messagePayloadBytes,ko,o))),await es(e,"artifactVersions",i.artifactVersions,n.counts.artifactVersions,o=>bd(o,Jt(n.budgets.artifactPayloadBytes,zo,o)));const s=i.fileSaves&&typeof i.fileSaves=="object"?i.fileSaves:{};await es(e,"fileSaves",{ids:Array.isArray(s.ids)?s.ids:[],entities:s.entities||{},checkpoints:s.checkpoints||{},checkpointOrder:s.checkpointOrder||[]},n.counts.fileSaves,o=>Td(o,Jt(n.budgets.fileSavePayloadBytes,Ho,o)))}function Rd(n,e){const t=new Uint8Array(n);return t.fill(e*31+17&255),t}async function Cd(n){await Wi.clearAll();const e=Math.round(n.requested.depotRecordKiB*1024);for(let t=0;t<n.counts.depotObjects;t+=Qr){const i=Math.min(n.counts.depotObjects,t+Qr),r=[];for(let s=t;s<i;s+=1){const o=Jt(n.budgets.depotPayloadBytes,e,s);r.push({id:Gi(s),type:s%2===0?"migration-stress-text":"migration-stress-binary",obj:s%2===0?{kind:"text",payload:Zi(o,Gi(s))}:{kind:"binary",payload:Rd(o,s)},timestamp:17848512e5+s,owners:[`message:${Xi(s%Math.max(1,n.counts.messages))}`]})}await Wi.storeMany(r,{chunkSize:Qr})}}async function Pd(n){const e=cd.createInstance({name:"assistant-agent-evals",storeName:"suite-runs-v2"});await e.clear();const t=Math.round(n.requested.testRunCollectionKiB*1024);for(let i=0;i<n.counts.testRunCollections;i+=1){const r=qc(i),s=Jt(n.budgets.testRunPayloadBytes,t,i);await e.setItem(`agent:${r}`,[{id:`migration-stress-run-${i}`,agentId:r,status:"completed",startedAt:17848512e5+i,completedAt:1784851201e3+i,syntheticPayload:Zi(s,r)}])}}function Lr(n){const e=window.localStorage.getItem(n);if(!e)return null;try{return JSON.parse(e)}catch{return null}}function cr(n,e){window.localStorage.setItem(n,JSON.stringify(e))}function ts(){const n=Gc.getState();return{engine:n.persistence.engine==="sqlite"?"sqlite":"legacy",persistencePhase:String(n.persistence.phase),messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),artifactVersionCount:n.artifactVersions.ids.length}}async function Id(){const n=Lr(Ir);Je(n?.schemaVersion===1,"Migration stress fixture metadata is missing.");const e=Gc.getState();let t=0;const i=lu().iterateConversations;Je(i,"Complete scope iterator is required to verify cold migration fixtures.");const r=new Set;for await(const d of i())for(const g of d.messages){const v=/^migration-stress-message-(\d+)$/.exec(g.id);if(!v)continue;const m=Number(v[1]);if(m>=n.counts.messages)continue;Je(!r.has(m),`Duplicate synthetic message ${m}.`);const u=Ed(g,m),E=Jt(n.budgets.messagePayloadBytes,ko,m);Je(typeof u=="string",`Synthetic message ${m} is missing its payload.`),Je(u.length===E,`Synthetic message ${m} payload length differs.`),Je(u.startsWith(`${Xi(m)}|`)||u===Xi(m).slice(0,E),`Synthetic message ${m} payload marker differs.`),t+=u.length,r.add(m)}Je(r.size===n.counts.messages,"Synthetic message inventory is incomplete.");let s=0;for(let d=0;d<n.counts.artifactVersions;d+=1){const g=ud(e.artifactVersions,Wc(d)),v=Jt(n.budgets.artifactPayloadBytes,zo,d);Je(g,`Synthetic artifact ${d} is missing.`);const m=await dd(g);Je(m.content.length===v,`Synthetic artifact ${d} payload length differs.`),s+=m.content.length}let o=0;for(let d=0;d<n.counts.fileSaves;d+=1){const v=e.fileSaves?.entities?.[Xc(d)]?.files?.[0]?.newContent,m=Jt(n.budgets.fileSavePayloadBytes,Ho,d);Je(typeof v=="string",`Synthetic file save ${d} is missing.`),Je(v.length===m,`Synthetic file save ${d} payload length differs.`),o+=v.length}let a=0;const c=Math.round(n.requested.depotRecordKiB*1024);for(let d=0;d<n.counts.depotObjects;d+=1){const g=await Wi.retrieve(Gi(d)),v=Jt(n.budgets.depotPayloadBytes,c,d);if(Je(g,`Synthetic depot object ${d} is missing.`),d%2===0)Je(g.kind==="text"&&typeof g.payload=="string",`Synthetic depot text object ${d} is malformed.`),Je(g.payload.length===v,`Synthetic depot text object ${d} payload length differs.`),Je(g.payload.startsWith(`${Gi(d)}|`)||g.payload===Gi(d).slice(0,v),`Synthetic depot text object ${d} marker differs.`),a+=g.payload.length;else{Je(g.kind==="binary"&&ArrayBuffer.isView(g.payload),`Synthetic depot binary object ${d} is malformed.`),Je(g.payload.byteLength===v,`Synthetic depot binary object ${d} payload length differs.`);const m=new Uint8Array(g.payload.buffer,g.payload.byteOffset,g.payload.byteLength);if(m.length>0){const u=d*31+17&255;Je(m[0]===u&&m[m.length-1]===u,`Synthetic depot binary object ${d} marker differs.`)}a+=g.payload.byteLength}}let l=0;const h=Math.round(n.requested.testRunCollectionKiB*1024);for(let d=0;d<n.counts.testRunCollections;d+=1){const v=(await uu(qc(d)))[0]?.syntheticPayload,m=Jt(n.budgets.testRunPayloadBytes,h,d);Je(typeof v=="string",`Synthetic test-run collection ${d} is missing.`),Je(v.length===m,`Synthetic test-run collection ${d} payload length differs.`),l+=v.length}const p={messages:n.counts.messages,messagePayloadBytes:t,artifactVersions:n.counts.artifactVersions,artifactPayloadBytes:s,fileSaves:n.counts.fileSaves,fileSavePayloadBytes:o,depotObjects:n.counts.depotObjects,depotPayloadBytes:a,testRunCollections:n.counts.testRunCollections,testRunPayloadBytes:l},f=e.persistence.engine==="sqlite"?"sqlite":"legacy";return Je(t===n.budgets.messagePayloadBytes,"Synthetic message payload total differs."),Je(s===n.budgets.artifactPayloadBytes,"Synthetic artifact payload total differs."),Je(o===n.budgets.fileSavePayloadBytes,"Synthetic file-save payload total differs."),Je(a===n.budgets.depotPayloadBytes,"Synthetic depot payload total differs."),Je(l===n.budgets.testRunPayloadBytes,"Synthetic test-run payload total differs."),{plan:n,engine:f,verified:p}}const va={async seedFixture(n){Je(ts().engine==="legacy","Migration stress fixtures can only be seeded in legacy mode.");const e=yd(n);window.localStorage.removeItem(Li);const{dataStore:t,snapshot:i}=await wd();return await Ad(e,t,i),await Cd(e),await Pd(e),cr(Ir,e),e},getFixturePlan:()=>Lr(Ir),getRunState:()=>Lr(Li),getStateSummary:ts,startMigration(){Je(ts().engine==="legacy","Migration stress cutover must start in legacy mode.");const n=Lr(Ir);Je(n?.schemaVersion===1,"Seed the migration stress fixture before starting cutover.");const e={schemaVersion:1,status:"running",startedAt:new Date().toISOString(),phases:[]};return cr(Li,e),cu.startMigration(t=>{e.phases.push({phase:t.phase,at:new Date().toISOString(),...t.detail===void 0?{}:{detail:t.detail},...t.stats===void 0?{}:{stats:t.stats}}),t.phase==="reloading"&&(e.status="reload-requested"),cr(Li,e)}).catch(t=>{e.status="failed",e.error=t instanceof Error?t.message:String(t),cr(Li,e)}),e},verifyFixture:Id};function Ld(){if(Tc()&&new URL(window.location.href).searchParams.get("migrationStress")==="1")return window.__assistantMigrationStress=va,()=>{window.__assistantMigrationStress===va&&delete window.__assistantMigrationStress}}function Dd(n,e,t){const i=e.getMessageAncestry(n,t,"resource");return{ancestryMessages:i.length,chainEntries:i.reduce((r,s)=>r+(s.type==="response"?s.chain.length:0),0),sidecarKeys:i.reduce((r,s)=>r+Object.keys(s.sidecars??{}).length,0),attachments:i.reduce((r,s)=>r+(s.type==="user"?s.attachments.length:0),0)}}function _a(n,e,t,i){if(!t)throw new Error(`Performance scenario tab is missing: ${i.tabId}`);if(t.conversationId!==i.conversationId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong conversation`);if(t.messageId!==i.routeMessageId)throw new Error(`Performance scenario tab ${i.tabId} points to the wrong route message`);n.getConversationById(i.conversationId),n.requireAncestryMessage(i.routeMessageId);const r=Dd(n,e,i.routeMessageId);for(const s of Object.keys(i.fingerprint))if(r[s]!==i.fingerprint[s])throw new Error(`Performance scenario fingerprint mismatch for ${i.tabId}.${s}: expected ${i.fingerprint[s]}, got ${r[s]}`);return r}const Xn=()=>Oc;let Hs=0,wn=null,vi,qi,Hr;function $n(){return $t.getState()}function Ud(){const n=$n();return n.ui.tabs.find(e=>e.id===n.ui.activeTabId)??null}function Vs(){vi&&Xn().scopes.release(vi),vi=void 0,wn=null,qi=void 0}function Dr(){if(!vi||!wn)return;const n=vi.requireMessage(wn);return n.type==="user"?n:void 0}function Nd(){Hr?.(),Hr=$t.subscribe(()=>{const n=Dr()?.text;n!==qi&&(qi=n,Hs+=1)})}function xa(){const n=$n(),e=Ud();return{activeTabId:n.ui.activeTabId,activeConversationId:e?.conversationId??null,activeRouteMessageId:e?.messageId??null,draftMessageId:n.ui.draftMessageId,messageCount:Object.values(n.conversationCatalog.entities).reduce((t,i)=>t+(i?.messageCount??0),0),conversationCount:n.conversationCatalog.ids.length,artifactVersionCount:n.artifactVersions.ids.length,persistence:{engine:n.persistence.engine,phase:n.persistence.phase,pendingWrites:n.persistence.pendingWrites},diagnostics:{memoryDiagnostics:!!n.settings.features.memoryDiagnostics,memoryTimelineDiagnostics:!!n.settings.features.memoryTimelineDiagnostics}}}async function Od(n){const t=$n().ui.tabs.find(i=>i.id===n);return t?Xn().scopes.withMessage(t.messageId,{reason:"performance-quiescence"},i=>Xn().reads.getMessageAncestry(i,t.messageId,"resource").some(r=>r.type==="response"&&(r.state.type==="created"||r.state.type==="in-progress"))):!1}function Fd(n){return`[data-performance-conversation-surface="true"][data-active-tab-id="${CSS.escape(n)}"][data-conversation-ready="true"]`}function Sa(n){return!!document.querySelector(`[data-editor-role="message"][data-message-id="${CSS.escape(n)}"] [contenteditable="true"]`)}async function ns(n){for(let e=0;e<n;e+=1)await new Promise(t=>window.requestAnimationFrame(()=>t()))}async function jc(n){const e=$n();return{persistenceReady:e.persistence.phase==="ready",pendingWrites:e.persistence.pendingWrites,activeTabMatches:e.ui.activeTabId===n,surfaceReady:!!document.querySelector(Fd(n)),activeResponse:await Od(n)}}async function ya(n){const e=await jc(n);return e.persistenceReady&&e.pendingWrites===0&&e.activeTabMatches&&e.surfaceReady&&!e.activeResponse}const Ma={async prepareDeterministicMode(){$t.dispatch(aa({path:"features.memoryDiagnostics",value:!1})),$t.dispatch(aa({path:"features.memoryTimelineDiagnostics",value:!1})),pu(!1),mu(!1),localStorage.setItem("assistant.performanceDiagnostics.enabled","false"),localStorage.setItem("assistant.memoryTimeline.desired","false"),await ns(2)},getStateSummary:xa,async assertScenario(n){const e=Xn(),t=await e.scopes.acquireConversations([n.slow.conversationId,n.fast.conversationId],{reason:"performance-scenario-validation"});try{const i=$n(),r=Nc.services.sources.messageRendering.getDraftUserMessage(n.draft.messageId);if(i.ui.draftMessageId!==n.draft.messageId)throw new Error(`Performance scenario draft mismatch: expected ${n.draft.messageId}, got ${i.ui.draftMessageId??"<none>"}`);if(r.text.length!==n.draft.expectedTextLength)throw new Error(`Performance scenario draft length mismatch: expected ${n.draft.expectedTextLength}, got ${r.text.length}`);return{slow:_a(t,e.reads,i.ui.tabs.find(s=>s.id===n.slow.tabId),n.slow),fast:_a(t,e.reads,i.ui.tabs.find(s=>s.id===n.fast.tabId),n.fast)}}finally{e.scopes.release(t)}},focusTab(n){const e=$n();if(!e.ui.tabs.some(t=>t.id===n))throw new Error(`Cannot focus missing performance scenario tab ${n}`);Vs(),ql(e.ui.activeTabId,n),$t.dispatch(fu(n))},async awaitQuiescence({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(await document.fonts?.ready;performance.now()<t;){if(await ya(n)&&(await ns(2),await ya(n))){jl(n);return}await new Promise(i=>window.setTimeout(i,25))}throw new Error(`Performance scenario did not become quiescent for ${n}: ${JSON.stringify({summary:xa(),readiness:await jc(n)})}`)},async awaitEditableUserMessage({tabId:n,timeoutMs:e=6e4}){const t=performance.now()+e;for(;performance.now()<t;){const i=$n(),r=i.ui.tabs.find(s=>s.id===n);if(i.ui.activeTabId===n&&r&&Sa(r.messageId)){const s=await Xn().scopes.acquireConversation(r.conversationId,{requiredMessageId:r.messageId,reason:"performance-editor-observation"}),o=s.requireMessage(r.messageId);if(o.type!=="user")throw Xn().scopes.release(s),new Error(`Editable performance target ${r.messageId} is not a user message`);if(await ns(2),Sa(o.id))return Vs(),vi=s,wn=o.id,qi=o.text,{messageId:o.id};Xn().scopes.release(s)}await new Promise(s=>window.setTimeout(s,25))}throw new Error(`Editable user message did not mount for tab ${n}`)},getEditorTargetDescriptor(){const n=Dr();if(!wn||!n)throw new Error("Performance scenario editor target is unavailable");return{messageId:wn,textLength:n.text.length,attachmentCount:n.attachments.length,updateCount:Hs}},assertEditorText(n){const e=Dr();if(!e)throw new Error("Performance scenario editor target is unavailable");if(e.text!==n)throw new Error(`Performance scenario final editor text mismatch: expected length ${n.length}, got ${e.text.length}`);return!0},resetEditorUpdateCount(n){if(n&&n!==wn)throw new Error("Acquire the editable performance target before resetting its counter");const e=Dr();if(!wn||!e)throw new Error("Cannot reset performance counter without an acquired user message");qi=e.text,Hs=0}};function Bd(){if(Tc())return Xl(),Nd(),window.__assistantPerformanceDriver=Ma,()=>{Hr?.(),Hr=void 0,Vs(),window.__assistantPerformanceDriver===Ma&&delete window.__assistantPerformanceDriver}}const kd="assistant.remote-control-instance.v1",Vr="instance",$c="identity",Ur="peers",Yc=4e3,zd={name:"HMAC",hash:"SHA-256"},Gs=32,Hd=128,Vd=120;function Ws(n){const e=n instanceof Uint8Array?n:new Uint8Array(n);let t="";for(let i=0;i<e.length;i+=1)t+=String.fromCharCode(e[i]);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Xs(n){if(typeof n!="string"||!/^[A-Za-z0-9_-]*$/.test(n))throw new Error("Not a base64url string.");const e=n.replace(/-/g,"+").replace(/_/g,"/"),t=e+"=".repeat((4-e.length%4)%4),i=atob(t),r=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s+=1)r[s]=i.charCodeAt(s);return r}function Gd(){return new Promise((n,e)=>{const t=indexedDB.open(kd,1);let i=!1;const r=setTimeout(()=>{i=!0,e(new Error("Remote-control instance storage is blocked."))},Yc);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(Vr)||t.result.createObjectStore(Vr)},t.onsuccess=()=>{if(clearTimeout(r),i){t.result.close();return}i=!0,t.result.onversionchange=()=>t.result.close(),n(t.result)},t.onerror=()=>{clearTimeout(r),i=!0,e(t.error||new Error("Remote-control instance storage failed."))}})}function Kc(){const n=async(e,t)=>{const i=await Gd();try{return await new Promise((r,s)=>{const o=i.transaction(Vr,e);let a;const c=setTimeout(()=>{try{o.abort()}catch{}s(new Error("Remote-control instance storage timed out."))},Yc);o.oncomplete=()=>{clearTimeout(c),r(a)},o.onabort=o.onerror=()=>{clearTimeout(c),s(o.error||new Error("Remote-control instance storage failed."))};const l=h=>{clearTimeout(c);try{o.abort()}catch{}s(h)};try{t(o.objectStore(Vr),h=>{a=h},l)}catch(h){l(h)}})}finally{i.close()}};return{read:e=>n("readonly",(t,i)=>{const r=t.get(e);r.onsuccess=()=>i(r.result)}),update:(e,t)=>n("readwrite",(i,r,s)=>{const o=i.get(e);o.onsuccess=()=>{try{const a=t(o.result??void 0);i.put(a,e),r(a)}catch(a){s(a)}}})}}function qs(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function Gr(n){return typeof n=="string"&&n.length>0&&n.length<=Hd&&!/[\s/\\]/.test(n)}function Wd(n){return!qs(n)||!Gr(n.instanceId)||typeof n.createdAt!="string"?null:{instanceId:n.instanceId,createdAt:n.createdAt}}function Xd(n){const e=n;return!!e&&typeof e=="object"&&e.type==="secret"&&!e.extractable&&e.algorithm?.name==="HMAC"&&e.usages.includes("sign")&&e.usages.includes("verify")}function is(n){if(!qs(n))return{};const e={};for(const[t,i]of Object.entries(n))!Gr(t)||!qs(i)||typeof i.name!="string"||typeof i.pairedAt!="string"||!Xd(i.key)||(e[t]={name:i.name,pairedAt:i.pairedAt,key:i.key});return e}function qd(n,e){return(typeof n=="string"?n.trim().slice(0,Vd):"")||e}function Zc(n="",e=""){const t=`${n} ${e}`.toLowerCase(),i=/iphone|ipad|ipod/.test(t)?"iOS":/android/.test(t)?"Android":/darwin|mac/.test(t)?"macOS":/win/.test(t)?"Windows":/cros/.test(t)?"ChromeOS":/linux|x11/.test(t)?"Linux":"this device",r=/Edg\//.test(e)?"Edge":/OPR\//.test(e)?"Opera":/Firefox\//.test(e)?"Firefox":/Chrome\//.test(e)?"Chrome":/Safari\//.test(e)?"Safari":"Browser";return{os:i,browser:r}}function Vo(n,e,t){const i=typeof navigator<"u"?navigator:void 0,{os:r,browser:s}=Zc(e??i?.platform??"",i?.userAgent??"");return n==="desktop"?`Desktop app on ${r}`:`${s} on ${r}`}function Jc(n,e={}){const t=e.subtle??(()=>globalThis.crypto.subtle),i=e.getRandomValues??(f=>{globalThis.crypto.getRandomValues(f)}),r=e.randomUUID??(()=>globalThis.crypto.randomUUID()),s=e.now??(()=>new Date),o=new Set;let a=null;const c=()=>{for(const f of Array.from(o))try{f()}catch(d){console.error("[remote-control] trusted-peer listener failed:",d)}},l=f=>{const d=new Uint8Array(new ArrayBuffer(f));return i(d),d},h=async()=>is(await n.read(Ur)),p=f=>new TextEncoder().encode(typeof f=="string"?f:$l(f));return{getInstanceIdentity(){if(a)return a;const f=n.update($c,d=>Wd(d)??{instanceId:r(),createdAt:s().toISOString()});return a=f.catch(d=>{throw a===f&&(a=null),d}),a},async listTrustedPeers(){return Object.entries(await h()).map(([f,d])=>({instanceId:f,name:d.name,pairedAt:d.pairedAt})).sort((f,d)=>f.pairedAt.localeCompare(d.pairedAt))},async hasTrustedPeer(f){return Gr(f)&&!!(await h())[f]},async trustPeer(f,d,g){if(!Gr(f))throw new Error("Invalid peer instance id.");const v=Xs(g);if(v.byteLength!==Gs)throw new Error("Pairing secret must be 32 bytes.");const m=await t().importKey("raw",v,zd,!1,["sign","verify"]);v.fill(0);const u={name:qd(d,f),pairedAt:s().toISOString(),key:m};return await n.update(Ur,E=>({...is(E),[f]:u})),c(),{instanceId:f,name:u.name,pairedAt:u.pairedAt}},async revokePeer(f){let d=!1;return await n.update(Ur,g=>{const v=is(g);return f in v&&(d=!0,delete v[f]),v}),d&&c(),d},subscribeTrustedPeers(f){return o.add(f),()=>{o.delete(f)}},async signTakeoverProof(f,d){const g=(await h())[f];return g?Ws(await t().sign("HMAC",g.key,p(d))):null},async verifyTakeoverProof(f,d,g){const v=(await h())[f];if(!v)return!1;let m;try{m=Xs(g)}catch{return!1}if(m.byteLength!==32)return!1;try{return await t().verify("HMAC",v.key,m,p(d))}catch{return!1}},generatePairingSecret(){return Ws(l(Gs))}}}let rs=null;function Ln(){return rs||(rs=Jc(Kc())),rs}const Qc=()=>Ln().getInstanceIdentity(),jd=()=>Ln().listTrustedPeers(),$d=(n,e,t)=>Ln().trustPeer(n,e,t),Yd=n=>Ln().revokePeer(n),Kd=n=>Ln().subscribeTrustedPeers(n),Zd=(n,e)=>Ln().signTakeoverProof(n,e),j0=Object.freeze(Object.defineProperty({__proto__:null,INSTANCE_IDENTITY_KEY:$c,PAIRING_SECRET_BYTES:Gs,TRUSTED_PEERS_KEY:Ur,createIndexedDbInstanceIdentityStorage:Kc,createInstanceIdentityStore:Jc,decodeBase64Url:Xs,describeDevice:Zc,encodeBase64Url:Ws,getDefaultInstanceIdentityStore:Ln,getDefaultInstanceName:Vo,getInstanceIdentity:Qc,listTrustedPeers:jd,revokePeer:Yd,signTakeoverProof:Zd,subscribeTrustedPeers:Kd,trustPeer:$d},Symbol.toStringTag,{value:"Module"}));class qe extends Error{constructor(e,t){super(t),this.code=e,this.name="RemoteCommandError"}code}function vt(n){return typeof n=="string"&&n.trim().length>0}function el(n){return n instanceof Error?n.message:String(n)}function tl(n=Yl){const e=new Map;return{get(t){return t?e.get(t):void 0},remember(t,i){if(t)for(e.delete(t),e.set(t,i);e.size>n;){const r=e.keys().next().value;if(r===void 0)break;e.delete(r)}}}}const Ea=1;function Wr(n){const e=new URL(n);return e.protocol==="http:"?e.protocol="ws:":e.protocol==="https:"&&(e.protocol="wss:"),e.toString()}function Jd(n,e){if(typeof WebSocket>"u")throw new Error("WebSocket is unavailable; remote-control hosting cannot start.");return new WebSocket(n,e)}function hn(n){return n instanceof Error?n.message:String(n)}function nl(n){const e=n.random??Math.random,t=n.now??(()=>new Date),i=n.socketFactory??Jd,r=n.minBackoffMs??1e3,s=n.maxBackoffMs??3e4;let o={status:"connecting",attempts:0},a=null,c=!1,l=null;const h=m=>{o={...o,...m},n.onState(o)},p=()=>!!a&&a.readyState===Ea,f=m=>{if(!a||a.readyState!==Ea)throw new Error("Remote-control host socket is not open");a.send(JSON.stringify(m))},d=m=>{try{return f(m),!0}catch(u){return h({lastError:hn(u)}),!1}},g=m=>{if(c||l)return;const u=o.attempts+1,E=Math.min(s,r*2**Math.min(u-1,10)),T=Math.round(E*(.75+.5*e()));h({status:"reconnecting",attempts:u,lastError:m,disconnectedAt:o.disconnectedAt??t().toISOString()}),l=setTimeout(()=>{l=null,v()},T)},v=async()=>{if(c)return;let m;try{m=await n.resolveUrl()}catch(E){g(hn(E));return}if(c)return;let u;try{u=i(m,n.resolveProtocols())}catch(E){g(hn(E));return}a=u,u.onopen=()=>{a===u&&(h({status:"online",attempts:0,connectedAt:t().toISOString(),disconnectedAt:void 0,lastError:void 0}),Promise.resolve().then(()=>n.onOpen()).catch(E=>h({lastError:hn(E)})))},u.onmessage=E=>{a===u&&n.onMessage(E.data)},u.onerror=()=>{},u.onclose=E=>{a===u&&(a=null,!c&&g(`closed (${E.code}${E.reason?` ${E.reason}`:""})`))}};return v(),{isOpen:p,send:f,trySend:d,getState:()=>o,stop(){c=!0,l&&clearTimeout(l),l=null},close(m=1e3,u="closed"){const E=a;a=null;try{E?.close(m,u)}catch{}}}}const ba=200;function Qd(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function il(n,e,t={}){const i=e instanceof Set?e:new Set(e),r=typeof t.query=="string"?t.query.trim().toLowerCase():"",s=typeof t.limit=="number"&&Number.isFinite(t.limit)?Math.floor(t.limit):ba,o=Math.max(1,Math.min(ba,s));return n.filter(a=>!a.hidden&&!a.remoteMirror&&(!r||(a.name||a.id).toLowerCase().includes(r))).sort((a,c)=>(c.updatedAt||0)-(a.updatedAt||0)).slice(0,o).map(a=>({id:a.id,title:a.name||a.id,updatedAt:Qd(a.updatedAt),hosted:i.has(a.id),...a.remoteOwnership?{remoteOwnership:a.remoteOwnership}:{}}))}function eh(n){return{instanceId:n.instanceId,name:n.name,hostKind:n.hostKind,...n.platform?{platform:n.platform}:{},startedAt:n.startedAt,hostingEnabled:!!n.settings?.enabled,acceptsHostRequests:n.settings?.acceptRemoteHostRequests!==!1,hostedConversationIds:Array.from(new Set(n.hostedConversationIds)),conversations:il(n.descriptors,n.hostedConversationIds)}}const th=500;function nh(n){const{executor:e,store:t,instanceId:i}=n,r=n.now??(()=>new Date),s=Kl(i),o=crypto.randomUUID(),a=new Set,c=tl(n.idempotencyLruSize),l=n.createConversation??(async()=>t.dispatch(gu()).unwrap()),h=n.setConversationTitle??(async(N,z)=>{await e.residency.scopes.withLocalConversation(N,{reason:"remote-control-create"},()=>{t.dispatch(vu({id:N,name:z,autoName:!1}))})}),p=n.sendFirstMessage??(async(N,z,ee)=>{await t.dispatch(Fc({parentId:z,message:Bc({conversationId:N,text:ee})})).unwrap()}),f=()=>n.getSettings()?.instanceName?.trim()||Vo(n.hostKind,n.platform);let d={status:"connecting",hostSessionId:o,instanceId:i,channelId:s,name:f(),viewers:0,revision:0,attempts:0,startedAt:r().toISOString()};const g=N=>{d={...d,...N};for(const z of Array.from(a))try{z(d)}catch(ee){console.error("[remote-control] instance listener failed:",ee)}};let v=!1,m=null,u=null,E=Promise.resolve();const T=()=>e.residency.catalog.getDescriptors({includeHidden:!1}),y=()=>eh({instanceId:i,name:f(),hostKind:n.hostKind,platform:n.platform,startedAt:d.startedAt,settings:n.getSettings(),hostedConversationIds:n.getHostedConversationIds(),descriptors:T()}),D=()=>({type:"remote.host.status",conversationId:s,hostSessionId:o,hostKind:n.hostKind,title:d.name,startedAt:d.startedAt,runStatus:"idle",instanceId:i}),R=nl({resolveUrl:async()=>{if(n.endpoint)return Wr(n.endpoint);const N=Zl(i,"host").replace(/^\//,""),{baseURL:z}=await Hc(N);return Wr(z)},resolveProtocols:()=>{const N=e.getState().settings?.apiKeys?.proxy||"";return N?[`proxy-key.${N}`]:void 0},socketFactory:n.socketFactory,random:n.random,now:r,minBackoffMs:n.minBackoffMs,maxBackoffMs:n.maxBackoffMs,onOpen:()=>{R.send(D()),w(!0)},onMessage:N=>J(N),onState:N=>{v||g({status:N.status,attempts:N.attempts,lastError:N.lastError,connectedAt:N.connectedAt,disconnectedAt:N.disconnectedAt})}}),w=N=>{if(v)return;let z;try{z=y()}catch($){g({lastError:hn($)});return}const ee=z.name!==d.name,fe=JSON.stringify(z);if(!N&&fe===m)return;if(!R.isOpen()){m=null,ee&&g({name:z.name});return}m=fe;const Ae=d.revision+1;g({revision:Ae,name:z.name});const we={type:"instance.status",conversationId:s,revision:Ae,instance:z};R.trySend(we)||(m=null),ee&&R.trySend(D())},U=()=>{v||u||(u=setTimeout(()=>{u=null,w(!1)},n.statusDebounceMs??th))},S=t.subscribe(U),_=(N,z)=>({type:"command.ack",conversationId:s,commandId:N,ok:!0,revision:{revision:d.revision},...z===void 0?{}:{result:z}}),b=(N,z,ee)=>({type:"command.ack",conversationId:s,commandId:N,ok:!1,error:{code:z,message:ee}}),P=()=>{if(n.getSettings()?.acceptRemoteHostRequests===!1)throw new qe("not-allowed","This instance does not accept remote host requests.")},O=N=>{if(!vt(N))throw new qe("unsupported","A conversationId is required.");const z=e.residency.catalog.getDescriptor(N);if(!z||z.hidden)throw new qe("not-found",`Conversation ${N} is not on this instance.`);const ee=Fo(z);if(ee==="mirror")throw new qe("not-owned","That conversation is a mirror of another instance.");if(ee==="transferred")throw new qe("not-owned","That conversation has been transferred to another instance.");return N},L=N=>{const z=n.requestHost(N);if(z==="not-found")throw new qe("not-found",`Conversation ${N} is not on this instance.`);if(z==="not-owned")throw new qe("not-owned","That conversation is not owned by this instance.");if(z==="capacity")throw new qe("not-allowed","This instance is already hosting the maximum number of conversations.")},F=async N=>{const z=N.command;switch(z.type){case"ping":return;case"requestHydrate":w(!0);return;case"instance.listConversations":return{conversations:il(T(),n.getHostedConversationIds(),{query:typeof z.query=="string"?z.query:void 0,limit:typeof z.limit=="number"?z.limit:void 0})};case"instance.hostConversation":{P(),L(O(z.conversationId)),w(!0);return}case"instance.unhostConversation":{if(P(),!vt(z.conversationId))throw new qe("unsupported","A conversationId is required.");n.requestUnhost(z.conversationId),w(!0);return}case"instance.createConversation":{P();const ee=await l(),fe=vt(z.title)?z.title.trim().slice(0,200):void 0;return fe&&await h(ee.conversationId,fe),L(ee.conversationId),vt(z.firstMessage)&&await p(ee.conversationId,ee.rootMessageId,z.firstMessage),w(!0),{conversationId:ee.conversationId}}default:throw new qe("unsupported",`Unsupported instance command '${String(N.command.type)}'.`)}},V=N=>{E=E.then(async()=>{const z=c.get(N.idempotencyKey);let ee;if(z)ee={...z,commandId:N.commandId};else{try{ee=_(N.commandId,await F(N))}catch(fe){ee=fe instanceof qe?b(N.commandId,fe.code,fe.message):b(N.commandId,"internal",el(fe))}c.remember(N.idempotencyKey,ee)}v||R.trySend(ee)}).catch(z=>g({lastError:hn(z)}))},J=N=>{let z;try{z=JSON.parse(String(N))}catch{return}if(!(!Ac(z)||z.conversationId!==s)){if(Rc(z)){R.trySend(z);return}if(Cc(z)){z.role==="host"&&g({viewers:z.viewers});return}if(Pc(z)){"viewers"in z&&typeof z.viewers=="number"&&g({viewers:z.viewers});return}if(Ic(z)){g({lastError:`${z.error.code}: ${z.error.message}`});return}if(Lc(z)){V(z);return}}};return{getState:()=>d,subscribe(N){return a.add(N),()=>{a.delete(N)}},publish(N=!1){N?(u&&clearTimeout(u),u=null,w(!0)):U()},async stop(){v||(v=!0,R.stop(),u&&clearTimeout(u),u=null,S(),await E.catch(()=>{}),R.close(wc.normal,"host-stopped"),g({status:"stopped",disconnectedAt:r().toISOString()}),a.clear())}}}function ih(n,e,t,i,r){const{executor:s,store:o}=n,a=r?.sink;let c=0,l=null,h=null,p=!1,f=!1,d=null,g=null,v=!1,m=-1,u="";const E=Su(),T=P=>{const O=Au(Ru(P.rootState),{});return JSON.stringify([Cu(P),[...Pu(O),...Iu(O),...Lu(O,s.getState().settings)].sort(),Object.values(P.rootState.weaves?.entities??{}).flatMap(L=>Object.values(L.edges).map(F=>F.handoffAttachmentId)).sort()])},y=async P=>{c+=1;const O=Wi.getMutationRevision(),L={executor:s,sessionId:e,conversationId:t,revision:c,reason:P,captureArtifactWorkingSet:E.captureFull};let F;if(a){const V=await dn(()=>import("./frameBuilders-3Fs_uZqw.js"),__vite__mapDeps([13,0,1,2,3,4,5,6,7,8,9,10,11,12])),J=await V.buildHeadlessConversationHydrateFrame(L);await V.validateHeadlessFrameForPublish(J.frame),await a(J.frame),F=J.snapshot}else F=await yu(L);d=ca(Mu(F)),m=O,u=T(d)},D=async()=>{if(!d){await y("resync");return}const{serializeHeadlessConversationMetadata:P}=await dn(async()=>{const{serializeHeadlessConversationMetadata:z}=await import("./reduxStore-CG0pXndv.js").then(ee=>ee.zZ);return{serializeHeadlessConversationMetadata:z}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),O=Eu(),L=await bu(s,t,{reason:"headless-publish-patch"},z=>P(s,z,t)),F=E.capturePatch(L,O);if(Wi.getMutationRevision()!==m||T(L)!==u){await y("resync");return}const V=Tu(d,L),J=c;c+=1;const N={sessionId:e,conversationId:t,baseRevision:J,revision:c,delta:V??null,artifactWorkingSet:F};if(a){const z=await dn(()=>import("./frameBuilders-3Fs_uZqw.js"),__vite__mapDeps([13,0,1,2,3,4,5,6,7,8,9,10,11,12])),ee=z.buildHeadlessConversationHydratePatchFrame(N);await z.validateHeadlessFrameForPublish(ee),await a(ee)}else await wu(N);d=ca(L)},R=async(P="resync")=>{if(!(p&&P!=="final")){if(P==="initial"||P==="reconnect"||P==="final"){await y(P);return}await D()}},w=()=>{p||!f||h||g||!v||(h=setTimeout(()=>{h=null,U().catch(P=>console.error("[headless] failed to publish snapshot patch:",P))},250))},U=async()=>{if(g)return g;if(!(!v||p))return v=!1,g=(async()=>{try{if(l){const P=l;l=null,await y(P)}else await R("resync")}catch(P){throw d=null,P}})().finally(()=>{g=null,w()}),g},S=()=>{p||(v=!0,w())},_=o.subscribe(S),b=_u(S);return{async start(){await R("initial"),f=!0,v&&S()},async requestFullSnapshot(P="reconnect"){p||!f||(l=P,v=!0,h&&clearTimeout(h),h=null,g&&await g.catch(()=>{}),!(p||!l)&&(h&&clearTimeout(h),h=null,await U()))},async stop(P="completed",O){p=!0,h&&clearTimeout(h),h=null,_(),b();try{await U().catch(F=>console.error("[headless] failed to drain snapshot patches before final snapshot:",F)),await R("final");const L={sessionId:e,conversationId:t,status:P,revision:c,error:O?{code:"headless-runtime-error",message:rh(O)}:void 0,timingSteps:i?.()};if(a){const F=await dn(()=>import("./frameBuilders-3Fs_uZqw.js"),__vite__mapDeps([13,0,1,2,3,4,5,6,7,8,9,10,11,12]));await a(F.buildHeadlessRunStatusFrame(L))}else await xu(L)}finally{d=null,u="",l=null,v=!1,f=!1,E.clear()}}}}function rh(n){if(n instanceof Error)return n.message;if(typeof n=="string")return n;if(n&&typeof n=="object"){const e=n;if(typeof e.message=="string"&&e.message.trim())return e.message;if(typeof e.error=="string"&&e.error.trim())return e.error}try{return JSON.stringify(n)}catch{return String(n)}}const sh=new Set(["no explicit intent provided.","unspecified","n/a","none"]);function Qn(n){return n.trim().toLowerCase().replace(/[.\s]+$/g,"")}function oh(n){const e=[],t=n.commandFacts?.executionContext,i=t?.workspaceProjection;n.runnerKind==="environment"?e.push("Runs inside an isolated, throwaway execution environment — not on your machine or workspace."):n.runnerKind==="local-helper"?e.push("Runs directly on your local machine."):i?.enabled===!0?e.push(i.writesDiscardedOnExit===!0||i.writePolicy==="discard"?"Sandboxed run: any file writes are discarded when the command finishes.":"Runs against a projected overlay of the workspace."):t?.writesPersistToWorkspace===!0&&e.push("Runs against the live workspace — any file writes persist.");const r=t?.vfsLoad?.requestedPathCount;return typeof r=="number"&&r>0&&e.push(`Afterwards, ${r} file path${r===1?"":"s"} will be captured back into the conversation.`),e}function ah(n){const e=n.intentSummary?.trim()||"Terminal command",t=n.statedIntent?.description?.trim(),i=t&&!sh.has(t.toLowerCase())&&Qn(t)!==Qn(e)?t:void 0,r=n.justification?.trim(),s=r&&Qn(r)!==Qn(e)&&(!i||Qn(r)!==Qn(i))?r:void 0;return{headline:e,what:i,why:s,contextNotes:oh(n)}}const ch={none:0,safe:1,dangerous:2},lh={none:0,"non-sensitive":1,sensitive:2},uh={none:0,"anti-pattern":1,misalignment:2};function ss(n,e){let t;for(const i of e)i===void 0||n[i]===void 0||(t===void 0||n[i]>n[t])&&(t=i);return t}function dh(n){return n==="dangerous"?{tone:"concern",text:"Makes changes that are hard to undo (source edits, deletions, remote or system state)."}:n==="safe"?{tone:"ok",text:"Only makes recoverable changes (caches, build artifacts, temporary files)."}:n==="none"?{tone:"ok",text:"Does not modify any state."}:null}function hh(n){return n==="sensitive"?{tone:"concern",text:"Touches or could reveal secrets — credentials, keys, or environment contents."}:null}function fh(n){return n==="misalignment"?{tone:"concern",text:"Shows signs of actively misaligned behaviour — treat this request with real suspicion."}:n==="anti-pattern"?{tone:"concern",text:"Sidesteps the integrated tooling this system prefers for this kind of task (a flagged anti-pattern)."}:null}const os=6;function ph(n){const e=Object.values(n.review?.witnesses||{}).filter(d=>!!d),t=e.flatMap(d=>d.effects||[]),i=[],r=[],s=[],o=dh(ss(ch,e.map(d=>d.mutation)));o&&(o.tone==="concern"?i:s).push(o);const a=hh(ss(lh,e.map(d=>d.disclosure)));a&&i.push(a);const c=fh(ss(uh,e.map(d=>d.alignment)));c&&i.push(c),e.some(d=>d.status==="failed")&&i.push({tone:"concern",text:"An independent reviewer did not finish, so part of this assessment is unknown."});for(const d of["deny","concern","maybe"])for(const g of t)g.kind===d&&i.push({tone:"concern",text:g.headline,detail:g.detail});for(const d of t)d.kind==="will"?r.push({tone:"info",text:d.headline,detail:d.detail}):d.kind==="tip"&&r.push({tone:"info",text:`Tip: ${d.headline}`,detail:d.detail});for(const d of t)d.kind==="wont"&&s.push({tone:"ok",text:d.headline,detail:d.detail});const l=new Set,h=[],p=(d,g)=>{const v=d.text.trim().toLowerCase();!v||l.has(v)||h.length>=g||(l.add(v),h.push(d))};for(const d of i)p(d,os);const f=s.length>0?1:0;for(const d of r)p(d,os-f);for(const d of s)p(d,os);return h}const mh={"near-certain":"near-certain",strong:"strong confidence",plausible:"a tentative read",uncertain:"low confidence"};function Ta(n){return n==="approve-once"?{text:"Assistant thinks you would approve this",tone:"approve"}:n==="deny"?{text:"Assistant thinks you would want this denied",tone:"deny"}:n==="override-block"?{text:"Assistant thinks you would override the block and run this anyway",tone:"caution"}:n==="ask-user"?{text:"Assistant thinks this one needs your own judgement",tone:"neutral"}:{text:`Assistant predicts ${n}`,tone:"neutral"}}function $0(n){return n==="approve-once"?"approve this once":n==="deny"?"deny this":n==="override-block"?"override the block and run this":n==="ask-user"?"leave this to you":n}function gh(n){return n==="approve-once"?"approving this":n==="deny"?"denying this":n==="override-block"?"overriding the block":n==="ask-user"?"asking you":n}function Y0(n){const{prediction:e,draft:t,pending:i}=n;if(e){if(e.confidenceTier==="insufficient-data")return{settled:!0,tone:"neutral",headline:"Assistant does not have enough evidence about your preferences to predict this one.",commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Missing evidence: ${e.insufficientDataReason}`:void 0};const r=Ta(e.predictedAction),s=mh[e.confidenceTier]||e.confidenceTier;return{settled:!0,tone:r.tone,headline:`${r.text} (${s}).`,commandExplanation:e.commandExplanation,rationale:e.rationale,caveat:e.insufficientDataReason?`Why not automated: ${e.insufficientDataReason}`:void 0}}return t?.predictedAction?{settled:!1,tone:Ta(t.predictedAction).tone,headline:`Assistant is leaning towards ${gh(t.predictedAction)}…`,commandExplanation:t.commandExplanation,rationale:t.rationale}:t||i?{settled:!1,tone:"neutral",headline:"Assistant is checking your calibrated preferences…",commandExplanation:t?.commandExplanation}:null}const K0=Object.freeze({right:"approve",left:"deny",up:"details",down:"defer"});function Z0(n,e){if(e.length===0)return n;const t=new Set(e),i=[],r=[];for(const s of n)(t.has(s.id)?r:i).push(s);return[...i,...r]}function J0(n,e,t){const i=Math.abs(n),r=Math.abs(e);return i<t&&r<t?null:i>=r?n>0?"right":"left":e>0?"down":"up"}const wi="Only terminal commands have a prediction to defer to. Choose approve or deny.",vh="Terminal preference prediction is off for this target, so there is nothing to defer to. Turn it on in Settings → Workspace Files → VS Code Bridge.";function _h(n,e){const t=n.payload?.result,i=t?.review?.decision,r=i?.decision==="block",s=i?.canOverride===!0,o=i?.severity,a=o==="block"?"block":o==="danger"?"danger":o==="caution"||o==="unknown"?"caution":o==="safe"?"safe":"info",c=r?{id:"override-block",label:"Override and run",shortLabel:"Override",tooltip:s?"Run this command anyway, knowingly proceeding past the reviewers’ hard concern.":"This block cannot be overridden, so the command cannot be run from here.",tone:"danger",enabled:s,disabledReason:s?void 0:"The reviewers raised a hard concern that cannot be overridden. Deny, or ask for a narrower command.",plan:{kind:"terminal",decision:"override-block"}}:{id:"approve-once",label:"Approve once",shortLabel:"Approve",tooltip:"Run this exact command one time only. Similar future commands will ask again.",tone:"approve",enabled:!0,plan:{kind:"terminal",decision:"approve-once"}},l=e.terminalPredictionEnabled!==!1,h=[t?.connectionName,t?Du(t):void 0].filter(Boolean),p=t?ah(t):void 0,f=t?ph(t):[];return{approvalId:n.id,kind:n.kind,eyebrow:h.join(" · ")||n.detail||"Terminal command",headline:t?.intentSummary||n.title||"Terminal command",bodyLabel:p?.what?"What Assistant wants to do":void 0,body:p?.what||i?.summary||n.detail,assistantReason:p?.why,contextNotes:p?.contextNotes,tone:a,badge:r?"blocked":o,monospace:t?.command,highlightsLabel:f.length>0?"What the reviewers found":void 0,highlights:f.map(d=>({tone:d.tone,text:d.text})),approve:c,deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Reject this command. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"terminal",decision:"deny"}},defer:l?{available:!0}:{available:!1,unavailableReason:vh},hasDetails:!0}}function xh(n){const e=n.payload,t=e?.activatable||[],i=[];return t.length>0&&i.push({tone:"info",text:`Activates: ${t.join(", ")}`}),e?.alreadyActive?.length&&i.push({tone:"ok",text:`Already active: ${e.alreadyActive.join(", ")}`}),e?.denied?.length&&i.push({tone:"concern",text:`Unavailable: ${e.denied.join(", ")}`}),{approvalId:n.id,kind:n.kind,eyebrow:"Capability activation",headline:n.title||"Activate capabilities",body:e?.reason||n.detail,tone:"info",highlights:i,approve:{id:"allow",label:"Allow",shortLabel:"Allow",tooltip:"Activate these capabilities for this conversation thread.",tone:"approve",enabled:t.length>0,disabledReason:t.length>0?void 0:"There is nothing left to activate for this request.",plan:{kind:"capability",decision:"allow"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Leave these capabilities switched off.",tone:"deny",enabled:!0,plan:{kind:"capability",decision:"deny"}},secondary:{id:"always-allow",label:"Always allow",shortLabel:"Always",tooltip:"Activate now and stop asking for these capabilities.",tone:"neutral",enabled:t.length>0,plan:{kind:"capability",decision:"always-allow"}},defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function Sh(n){const e=n.payload,t=e?.escalations||[],i=t.slice(0,3).map(r=>({tone:"concern",text:`${r.taskId}: ${r.routedModel} costs ${r.ratio.toFixed(1)}× ${r.comparableModel}`}));return{approvalId:n.id,kind:n.kind,eyebrow:"Subagent cost gate",headline:n.title||"Routed subagent models cost more than expected",body:e?`${t.length} route${t.length===1?"":"s"} exceed the ${e.thresholdMultiplier}× threshold. The eligible parent profile is ${e.parentModel}.`:n.detail,tone:"caution",badge:"cost",highlights:i,approve:{id:"use_routed",label:"Use routed models",shortLabel:"Routed",tooltip:"Spend the extra and run the subagents on the models the router chose.",tone:"approve",enabled:!0,plan:{kind:"cost-escalation",choice:"use_routed"}},deny:{id:"use_comparable",label:"Use parent profile",shortLabel:"Cheaper",tooltip:"Downgrade the escalated routes to the eligible parent profile instead.",tone:"neutral",enabled:!0,plan:{kind:"cost-escalation",choice:"use_comparable"}},defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function yh(n){const e=n.payload,t=[];if(e){t.push({tone:"info",text:`Image: ${e.image}${e.profileId?` (profile ${e.profileId})`:""}`}),t.push({tone:e.network==="none"?"ok":"info",text:e.network==="none"?"Network: fully isolated (no network access)":"Network: outbound only (no inbound access; host networking is never used)"}),t.push(e.workspaceMount?{tone:"concern",text:`Mounts workspace root '${e.workspaceMount.rootName}' read-only at /workspace-src`}:{tone:"ok",text:"No workspace folders are mounted into the container"}),e.gpu&&t.push({tone:"concern",text:"Requests GPU access (--gpus all)"});const i=[e.resources?.cpuCores?`${e.resources.cpuCores} CPU cores`:null,e.resources?.memoryMb?`${e.resources.memoryMb} MiB memory`:null].filter(Boolean);t.push({tone:"ok",text:`Hardened sandbox: all capabilities dropped, no privilege escalation, resource-capped${i.length?` (${i.join(", ")})`:""}`})}return{approvalId:n.id,kind:n.kind,eyebrow:e?.connectionName?`Local Docker · ${e.connectionName}`:"Local Docker environment",headline:n.title||"Run a local Docker environment?",body:"Assistant wants to start a sandboxed Docker container on your machine. After you approve, commands inside this container run without further per-command prompts until it is destroyed.",tone:"caution",badge:"local",monospace:e?.image,highlightsLabel:"What this container gets",highlights:t,approve:{id:"approve-once",label:"Run container",shortLabel:"Run",tooltip:"Start this container on your machine with the listed sandbox settings.",tone:"approve",enabled:!0,plan:{kind:"local-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not start the container. Nothing runs, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"local-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function wa(n,e){return`${!n||n==="NONE"?"CPU-only":`${n} accelerator`}${e?", high-RAM":", standard RAM"}`}function Mh(n){const e=n.payload,t=[];e&&(t.push({tone:"info",text:`Account: ${e.accountEmail||"the connected Google Workspace account"}`}),e.planLabel&&t.push({tone:"info",text:`Plan: ${e.planLabel}`}),typeof e.currentBalance=="number"&&Number.isFinite(e.currentBalance)&&t.push({tone:"info",text:`Observed compute units: ${e.currentBalance}${e.checkedAt?` at ${new Date(e.checkedAt).toLocaleString()}`:""} (rechecked after approval)`}),t.push({tone:e.accelerator&&e.accelerator!=="NONE"?"concern":"info",text:`Machine: ${wa(e.accelerator,e.highMemory)}`}),t.push({tone:"concern",text:"Spends your Colab compute units until the environment is destroyed or the runtime idles out"}),t.push({tone:"concern",text:"Consumer Google service under Google's terms (outside the university's Workspace agreement) — keep sensitive, confidential, or identifiable data off this runtime"}),t.push({tone:"ok",text:"Google credentials are transient server-request credentials, never persisted on the gateway"}),t.push({tone:"concern",text:"Paid benefits and positive units must remain verified. Managed work stops on depletion or verification expiry (at most 180 seconds); closing this tab stops renewal. Allocation release is separate and may remain pending. Storage is non-durable; this is not a spending cap."}));const i=wa(e?.accelerator,e?.highMemory);return{approvalId:n.id,kind:n.kind,eyebrow:e?.accountEmail?`Google Colab · ${e.accountEmail}`:"Google Colab runtime",headline:n.title||"Assign a Google Colab runtime?",body:`Assistant wants to assign a Google Colab runtime on ${e?.accountEmail?`${e.accountEmail}'s`:"your"} account (${i}${e?.planLabel?`, ${e.planLabel}`:""}). This spends your Colab compute units until the environment is destroyed or the runtime idles out. Colab is a consumer Google service governed by Google's terms rather than the university's Workspace agreement, so keep sensitive, confidential, or personally identifiable data off this runtime. After you approve, commands inside the runtime run without further per-command prompts.`,tone:"caution",badge:"colab",monospace:e?.sessionName,highlightsLabel:"What this assigns",highlights:t,approve:{id:"approve-once",label:"Assign runtime",shortLabel:"Assign",tooltip:"Assign this Colab runtime on your Google account now.",tone:"approve",enabled:!0,plan:{kind:"colab-environment-create",decision:"approve-once"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Do not assign a runtime. Nothing is created, and Assistant is told you declined.",tone:"deny",enabled:!0,plan:{kind:"colab-environment-create",decision:"deny"}},defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function Eh(n){const e=n.payload,t=e?.requesterInstanceName||"Another Assistant instance",i=e?.conversationTitle||"this conversation";return{approvalId:n.id,kind:n.kind,eyebrow:"Remote control · ownership transfer",headline:n.title||`${t} wants to take over “${i}”`,body:`The conversation moves to ${t} and becomes read-only here until you take it back. Nothing is sent anywhere except to your own account's instances.`,tone:"caution",badge:"takeover",highlightsLabel:"What happens",highlights:[{tone:"info",text:`Requesting instance: ${t}${e?.requesterInstanceId?` (${e.requesterInstanceId})`:""}`},{tone:"concern",text:"This instance stops hosting the conversation and can no longer reply to it"},{tone:"ok",text:"A read-only copy stays here; you can take the conversation back later"}],approve:{id:"approve",label:"Approve",shortLabel:"Approve",tooltip:"Hand this conversation to the requesting instance once.",tone:"approve",enabled:!0,plan:{kind:"remote-takeover",decision:"approve"}},deny:{id:"deny",label:"Deny",shortLabel:"Deny",tooltip:"Keep the conversation here. The requesting instance is told you declined.",tone:"deny",enabled:!0,plan:{kind:"remote-takeover",decision:"deny"}},secondary:{id:"approve-and-trust",label:"Approve and always allow",shortLabel:"Trust",tooltip:"Hand it over and pair the requesting instance, so it can take over without asking when that setting is on.",tone:"neutral",enabled:!0,plan:{kind:"remote-takeover",decision:"approve-and-trust"}},defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function bh(n){return{approvalId:n.id,kind:n.kind,eyebrow:"Request",headline:n.title||"Approval request",body:n.detail||"This request must be answered where it was raised.",tone:"info",highlights:[],defer:{available:!1,unavailableReason:wi},hasDetails:!0}}function Th(n,e={}){return n.kind==="terminal-command"?_h(n,e):n.kind==="capability-activation"?xh(n):n.kind==="subagent-cost-escalation"?Sh(n):n.kind==="local-environment-create"?yh(n):n.kind==="colab-environment-create"?Mh(n):n.kind==="remote-takeover"?Eh(n):bh(n)}function Q0(n,e){if(e==="details")return{details:!0};if(e==="defer")return n.defer.available?{defer:!0}:{blockedReason:n.defer.unavailableReason||"This request cannot be deferred."};const t=e==="approve"?n.approve:n.deny;return t?t.enabled?{action:t}:{blockedReason:t.disabledReason||"That action is not available for this request."}:{blockedReason:"This request must be answered where it was raised. Open the details to jump to it."}}function wh(n,e){switch(e.kind){case"terminal":return zi(n.id,{decision:e.decision});case"capability":return Ou(n.id,e.decision),!0;case"cost-escalation":return Nu(n.id,{choice:e.choice,remember:!1}),!0;case"local-environment-create":return zi(n.id,{decision:e.decision});case"colab-environment-create":return zi(n.id,{decision:e.decision});case"remote-takeover":return zi(n.id,{decision:e.decision});case"defer":return Uu(n.id),!0;default:return!1}}const Ah=new Set(["mcp-local-start","mcp-elicitation","local-environment-create","remote-takeover"]),Rh={"mcp-local-start":"Starts a local process on your computer; approve it there.","mcp-elicitation":"Needs a form answer; open it on your computer.","local-environment-create":"Grants command execution on your computer; approve it there.","remote-takeover":"Another instance wants this conversation; decide on the computer that hosts it."};function Ch(n){return!n||!n.enabled?null:{option:{id:n.id,label:n.label,destructive:n.tone==="danger"||n.tone==="deny"?!0:void 0},plan:{kind:"deck",plan:n.plan}}}function Ph(n){return Number.isFinite(n)?new Date(n).toISOString():new Date(0).toISOString()}function rl(n){const e=new Map,t={id:n.id,kind:n.kind,title:n.title||"Approval request",summary:n.detail||"",createdAt:Ph(n.createdAt)};if(Ah.has(n.kind))return{approval:{...t,summary:Rh[n.kind]||t.summary,remoteResolvable:!1,options:[]},plans:e};if(n.kind==="mcp-tool-call")return e.set("approve-once",{kind:"mcp-decision",decision:"approve-once"}),e.set("deny",{kind:"mcp-decision",decision:"deny"}),{approval:{...t,remoteResolvable:!0,options:[{id:"approve-once",label:"Approve once"},{id:"deny",label:"Deny",destructive:!0}]},plans:e};const i=Th(n),r=[];for(const o of[i.approve,i.secondary,i.deny]){const a=Ch(o);!a||e.has(a.option.id)||(e.set(a.option.id,a.plan),r.push(a.option))}const s=[i.headline!==t.title?i.headline:void 0,i.body].filter(o=>!!(o&&o.trim())).join(" — ")||t.summary;return{approval:{...t,summary:s,remoteResolvable:r.length>0,options:r},plans:e}}function Ih(n,e=Bo()){const t=e.filter(i=>i.conversationId===n).map(i=>rl(i).approval);return{type:"remote.approvals",conversationId:n,approvals:t}}function Lh(n,e){const t=Fu(n);if(!t)return{ok:!1,code:"not-found",message:"That approval is no longer pending."};const i=rl(t);if(!i.approval.remoteResolvable)return{ok:!1,code:"not-remote-resolvable",message:i.approval.summary||"This approval must be answered on your computer."};const r=i.plans.get(e);return r?(r.kind==="deck"?wh(t,r.plan):zi(n,{decision:r.decision}))?{ok:!0}:{ok:!1,code:"not-found",message:"That approval was already answered."}:{ok:!1,code:"unsupported",message:`Unknown option '${e}' for approval ${t.kind}.`}}function Dh(n){const e=n.subscribe??kc,t=n.getSnapshot??Bo;let i=null,r=null,s=Promise.resolve();const o=a=>{const c=Ih(n.conversationId,t()),l=JSON.stringify(c.approvals);return!a&&l===r||(r=l,s=s.then(()=>n.sink(c)).catch(h=>{r=null,n.onError?.(h)})),s};return{start(){i||(i=e(()=>{o(!1)}),o(!0))},publish:()=>o(!0),stop(){i?.(),i=null,r=null}}}const Uh="remote-takeover:",Nh=async({id:n,conversationId:e,payload:t})=>{const r=await Bu(n,void 0,{kind:"remote-takeover",title:`${t.requesterInstanceName} wants to take over “${t.conversationTitle}”`,detail:"The conversation will move to that instance and become read-only here until you take it back.",conversationId:e,payload:t}).outcome;return r.kind==="resolved"?r.submission.decision:"expired"};function Oh(n){return n==="running"||n==="blocked"}async function Fh(n,e){const t=e.now??Date.now,i=n.command.requester;if(!i||!vt(i.instanceId))throw new qe("unsupported","transferOwnership requires requester.instanceId.");if(i.instanceId===e.hostInstanceId)throw new qe("unsupported","An instance cannot take over its own conversation.");const r=vt(i.name)?i.name.trim().slice(0,120):i.instanceId,s=e.getLock();if(s==="missing")throw new qe("not-found",`Conversation ${n.conversationId} is not on this instance.`);if(s==="mirror")throw new qe("not-owned","This conversation is a mirror of another instance; ask the instance that hosts it.");if(s==="transferred")throw new qe("not-owned","This conversation has already been transferred to another instance.");if(Oh(e.getRunStatus()))throw new qe("not-idle","A response is running or waiting for input; try again when the conversation is idle.");let o=null;const a=n.command.proof;if(e.getSettings()?.takeover?.autoAllowTrusted&&a&&vt(a.issuedAt)&&vt(a.mac)&&await e.identity.hasTrustedPeer(i.instanceId)){const p=Date.parse(a.issuedAt);if(!Number.isFinite(p)||Math.abs(t()-p)>Jl)throw new qe("expired","The takeover proof is too old; retry the request.");await e.identity.verifyTakeoverProof(i.instanceId,{conversationId:n.conversationId,hostInstanceId:e.hostInstanceId,requesterInstanceId:i.instanceId,commandId:n.commandId,issuedAt:a.issuedAt},a.mac)&&(o="auto")}if(!o){const p=e.requestApproval??Nh;try{o=await p({id:`${Uh}${n.commandId}`,conversationId:n.conversationId,payload:{conversationId:n.conversationId,conversationTitle:n.conversationTitle,requesterInstanceId:i.instanceId,requesterInstanceName:r,requestedAt:t()}})}catch(f){throw new qe("not-idle",f instanceof Error?f.message:String(f))}}if(o==="deny")throw new qe("denied","The host declined the takeover.");if(o==="expired")throw new qe("expired","Nobody answered the takeover request in time.");const l=await e.captureFinalSnapshot(),h={finalRevision:l,hostInstanceId:e.hostInstanceId};if(o==="approve-and-trust"){const p=e.identity.generatePairingSecret();await e.identity.trustPeer(i.instanceId,r,p),h.pairing={secret:p}}return{result:h,transfer:{toInstanceId:i.instanceId,toInstanceName:r,finalRevision:l,decision:o,at:new Date(t()).toISOString()}}}function Bh(n){const{executor:e,store:t,conversationId:i}=n,r=n.cancelMessage??((g,v)=>zu.getInstance().cancelMessage(g,v)),s=n.resolveApproval??Lh,o=n.respondToInteraction??((g,v,m)=>e.residency.scopes.withMessage(g,{reason:"remote-control-resolve-interaction"},u=>su(u,g,v,m))),a=tl(n.idempotencyLruSize),c=(g,v)=>({type:"command.ack",conversationId:i,commandId:g,ok:!0,revision:{revision:n.getRevision()},...v===void 0?{}:{result:v}}),l=(g,v,m)=>({type:"command.ack",conversationId:i,commandId:g,ok:!1,error:{code:v,message:m}}),h=()=>e.residency.scopes.withLocalConversation(i,{reason:"remote-control-send-message"},g=>{const v=ou(g.getConversation(),m=>g.getMessage(m));return v.leafMessageId||v.rootMessageId}),p=async g=>{let v=!1;try{v=await e.residency.scopes.withMessage(g,{reason:"remote-control-command"},m=>{const u=m.getMessage(g);return!!u&&u.conversationId===i})}catch{v=!1}if(!v)throw new qe("not-found",`Message ${g} is not part of this conversation.`)},f=()=>{const g=e.residency.catalog;if(!g?.getDescriptor)return null;const v=g.getDescriptor(i);return v?Fo(v):"missing"},d=async g=>{const v=g.command;switch(v.type){case"ping":return;case"requestHydrate":await n.publisher.requestFullSnapshot("reconnect");return;case"sendMessage":{if(!vt(v.text))throw new qe("unsupported","sendMessage requires non-empty text.");const m=g.expectedRevision?.revision;if(typeof m=="number"&&m<n.getRevision())throw new qe("stale-revision",`Expected revision ${m} but the conversation is at ${n.getRevision()}.`);const u=vt(v.parentId)?v.parentId:await h();if(!u)throw new qe("not-found","The conversation has no message to reply to.");vt(v.parentId)&&await p(u);const E=Bc({conversationId:i,text:v.text});await t.dispatch(Fc({parentId:u,message:E})).unwrap();return}case"requestResponse":{if(!vt(v.messageId))throw new qe("unsupported","requestResponse requires a messageId.");await p(v.messageId),await t.dispatch(ku({messageId:v.messageId})).unwrap();return}case"cancelResponse":{if(!vt(v.messageId))throw new qe("unsupported","cancelResponse requires a messageId.");if(!r(v.messageId,vt(v.reason)?v.reason:"Cancelled from remote control"))throw new qe("no-live-run",`Message ${v.messageId} has no cancellable run.`);return}case"resolveInteraction":{if(!vt(v.messageId)||!vt(v.requestId))throw new qe("unsupported","resolveInteraction requires messageId and requestId.");await p(v.messageId);const m=v.response,u=m&&typeof m=="object"&&!Array.isArray(m)?{requestId:v.requestId,...m}:{requestId:v.requestId,payload:m};if(!await o(v.messageId,v.requestId,u))throw new qe("no-live-run",`Message ${v.messageId} has no live run to answer.`);return}case"resolveApproval":{if(!vt(v.approvalId)||!vt(v.optionId))throw new qe("unsupported","resolveApproval requires approvalId and optionId.");const m=s(v.approvalId,v.optionId);if(!m.ok)throw new qe(m.code,m.message);return}case"transferOwnership":{if(!n.instanceId||!n.captureFinalSnapshot||!n.identity||!n.getRunStatus)throw new qe("unsupported","This host does not support ownership transfer.");const m=await Fh({conversationId:i,conversationTitle:n.getConversationTitle?.()||i,commandId:g.commandId,command:v},{hostInstanceId:n.instanceId,getSettings:()=>n.getSettings?.(),getRunStatus:n.getRunStatus,getLock:f,captureFinalSnapshot:n.captureFinalSnapshot,identity:n.identity,requestApproval:n.requestApproval,now:n.now});return n.onTransfer?.(m.transfer),m.result}default:throw new qe("unsupported",`Unsupported command type '${String(g.command.type)}'.`)}};return{async handle(g){const v=a.get(g.idempotencyKey);if(v)return{...v,commandId:g.commandId};let m;try{m=c(g.commandId,await d(g))}catch(u){m=u instanceof qe?l(g.commandId,u.code,u.message):l(g.commandId,"internal",el(u))}return a.remember(g.idempotencyKey,m),m}}}const kh=new Set(["created","in-progress"]);function zh(n){const e=n.sidecars?.agentRuntime;return e?.pendingInteractions?Object.values(e.pendingInteractions).some(t=>t?.status==="pending"):!1}function Hh(n,e,t=[]){const i=n.conversations.entities[e],r=i?.tree?.relationships??{},s=new Set(Object.keys(r));i?.tree?.root&&s.add(i.tree.root);let o=null,a=null;for(const c of s){const l=n.messages.entities[c];if(!(!l||l.conversationId!==e)){if(l.userInteraction?.required||zh(l)){o||(o={status:"blocked",messageId:c,responseId:l.type==="response"?c:void 0});continue}l.type==="response"&&kh.has(l.state?.type)&&(!a||l._timestamp>a.message._timestamp)&&(a={message:l})}}if(!o){const c=t.find(l=>l.conversationId===e||l.messageId!==void 0&&s.has(l.messageId));c&&(o={status:"blocked",messageId:c.messageId})}return o||(a?{status:"running",messageId:a.message.id,responseId:a.message.id}:{status:"idle"})}function Vh(n){const{executor:e,store:t,conversationId:i}=n,r=n.now??(()=>new Date),s=n.runStatusDebounceMs??100,o=crypto.randomUUID(),a=new Set,c=()=>t.getState().conversations?.entities?.[i]?.name||e.residency.catalog.getDescriptor(i)?.name||i;let l={status:"connecting",hostSessionId:o,conversationId:i,instanceId:n.instanceId,hostKind:n.hostKind,title:c(),startedAt:r().toISOString(),viewers:0,revision:0,runStatus:"idle",attempts:0};const h=L=>{l={...l,...L};for(const F of Array.from(a))try{F(l)}catch(V){console.error("[remote-control] host listener failed:",V)}};let p=!1,f=!1,d=!1,g=null,v=null,m=Promise.resolve();const u=()=>({type:"remote.host.status",conversationId:i,hostSessionId:o,hostKind:n.hostKind,title:l.title,startedAt:l.startedAt,runStatus:l.runStatus,instanceId:n.instanceId,...l.transfer?{transfer:{toInstanceId:l.transfer.toInstanceId,finalRevision:l.transfer.finalRevision}}:{}}),E=nl({resolveUrl:async()=>{if(n.endpoint)return Wr(n.endpoint);const L=Ql(i,"host").replace(/^\//,""),{baseURL:F}=await Hc(L);return Wr(F)},resolveProtocols:()=>{const L=e.getState().settings?.apiKeys?.proxy||"";return L?[`proxy-key.${L}`]:void 0},socketFactory:n.socketFactory,random:n.random,now:r,minBackoffMs:n.minBackoffMs,maxBackoffMs:n.maxBackoffMs,onOpen:()=>b(),onMessage:L=>O(L),onState:L=>{p||h({status:L.status,attempts:L.attempts,lastError:L.lastError,connectedAt:L.connectedAt,disconnectedAt:L.disconnectedAt})}}),y=ih({executor:e,store:t},o,i,void 0,{sink:async L=>{(L.type==="conversation.hydrate"||L.type==="conversation.hydratePatch")&&h({revision:L.revision.revision}),L.type!=="run.status"&&(d&&L.type==="conversation.hydratePatch"||(L.type==="conversation.hydrate"&&(d=!1),E.isOpen()&&E.send(L)))}}),D=Dh({conversationId:i,sink:async L=>{E.isOpen()&&E.send(L)},onError:L=>h({lastError:hn(L)})}),R=Bh({executor:e,store:t,conversationId:i,publisher:y,getRevision:()=>l.revision,instanceId:n.instanceId,getRunStatus:()=>l.runStatus,getConversationTitle:()=>l.title,getSettings:()=>n.getSettings?.(),captureFinalSnapshot:async()=>(await y.requestFullSnapshot("resync"),l.revision),identity:n.identity??Ln(),requestApproval:n.requestApproval,onTransfer:L=>{g=L,h({transfer:L}),E.trySend(u())}}),w=(L=!1)=>{if(p)return;const F=Hh(t.getState(),i,Bo()),V=c(),J=F.status!==l.runStatus||F.messageId!==l.runMessageId,N=V!==l.title;if(!(!J&&!N&&!L)&&(h({runStatus:F.status,runMessageId:F.messageId,title:V}),!!E.isOpen())){if(J||L){const z={type:"run.status",conversationId:i,status:F.status,messageId:F.messageId,responseId:F.responseId,revision:{revision:l.revision},updatedAt:r().toISOString()};E.trySend(z)}E.trySend(u())}},U=()=>{p||v||(v=setTimeout(()=>{v=null,w()},s))},S=t.subscribe(U),_=kc(U),b=async()=>{try{if(E.send(u()),f?(d=!0,await y.requestFullSnapshot("reconnect")):(f=!0,await y.start()),p)return;await D.publish(),w(!0)}catch(L){h({lastError:hn(L)})}},P=L=>{m=m.then(async()=>{const F=await R.handle(L);if(!p&&(E.trySend(F),g)){const V=g;g=null,F.ok&&n.onTransferred?.(V)}}).catch(F=>h({lastError:hn(F)}))},O=L=>{let F;try{F=JSON.parse(String(L))}catch{return}if(!(!Ac(F)||F.conversationId!==i)){if(Rc(F)){E.trySend(F);return}if(Cc(F)){F.role==="host"&&h({viewers:F.viewers});return}if(Pc(F)){"viewers"in F&&typeof F.viewers=="number"&&h({viewers:F.viewers});return}if(Ic(F)){h({lastError:`${F.error.code}: ${F.error.message}`});return}if(Lc(F)){P(F);return}}};return{getState:()=>l,subscribe(L){return a.add(L),()=>{a.delete(L)}},async stop(){if(!p){if(p=!0,E.stop(),v&&clearTimeout(v),v=null,S(),_(),D.stop(),await m.catch(()=>{}),f)try{await y.stop("completed")}catch(L){console.warn("[remote-control] final hydrate was not delivered:",L)}E.close(wc.normal,"host-stopped"),h({status:"stopped",disconnectedAt:r().toISOString()}),a.clear()}}}}const Gh=8,Aa=32,Ra=Object.freeze({enabled:!1,hosting:!1,conversationCount:0,viewerCount:0,blockedCount:0,sessions:Object.freeze({}),instanceName:"",instanceOnline:!1,instanceViewers:0,remotelyRequestedConversationIds:Object.freeze([])});function as(n){const e=new Set,t=[];for(const i of n)typeof i!="string"||!i||e.has(i)||(e.add(i),t.push(i));return t}function Wh(n){const e=n.settings;if(!e?.enabled||!n.isPrimaryTab)return[];const t=r=>(n.exists?n.exists(r):!0)&&(n.isHostable?n.isHostable(r):!0),i=e.mode==="selected"?as(e.selectedConversationIds??[]).slice(0,Aa):as(n.openConversationIds).slice(0,Gh);return as([...i,...n.requestedConversationIds??[]]).filter(t).slice(0,Aa)}async function Xh(n,e,t){const[{updateConversationMetadata:i},{updateSettings:r}]=await Promise.all([dn(()=>import("./reduxStore-CG0pXndv.js").then(o=>o.zS),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),dn(()=>import("./reduxStore-CG0pXndv.js").then(o=>o.zR),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))]);await n.executor.residency.scopes.withLocalConversation(e,{reason:"remote-control-transfer"},()=>{n.store.dispatch(i({id:e,remoteOwnership:{state:"transferred",toInstanceId:t.toInstanceId,toInstanceName:t.toInstanceName,at:t.at}}))});const s=n.getSettings()?.remoteControl?.selectedConversationIds??[];s.includes(e)&&n.store.dispatch(r({path:"remoteControl.selectedConversationIds",value:s.filter(o=>o!==e)}))}function qh(){const n=new Set,e=new Map,t=new Set,i=new Set;let r=null,s=Ra,o=null,a=[],c=null,l=null;const h=()=>{for(const b of Array.from(n))try{b(s)}catch(P){console.error("[remote-control] manager listener failed:",P)}},p=()=>(o?.getDesktopBridge??zs)(),f=()=>o?.getSettings()?.remoteControl,d=()=>o?f()?.instanceName?.trim()||Vo(o.hostKind??"browser",o.platform):"",g=b=>o?(o.conversationExists??(P=>!!o.executor.residency.catalog.getDescriptor(P)))(b):!1,v=b=>!o||i.has(b)?!1:Fo(o.executor.residency.catalog.getDescriptor(b))===null,m=()=>{const b={};let P=0,O=0;for(const[J,N]of e){const z=N.session.getState();b[J]=z,P+=z.viewers,z.runStatus==="blocked"&&(O+=1)}const L=r?.session.getState();s={enabled:!!o,hosting:e.size>0,conversationCount:e.size,viewerCount:P,blockedCount:O,sessions:Object.freeze(b),instanceId:o?.instanceId,instanceName:L?.name??d(),instanceOnline:L?.status==="online",instanceViewers:L?.viewers??0,remotelyRequestedConversationIds:Object.freeze(Array.from(t))};const F={hosting:s.hosting,conversationCount:s.conversationCount,viewerCount:s.viewerCount},V=JSON.stringify(F);if(V!==l){l=V;const J=p();J&&J.setHostingState(F).catch(N=>console.warn("[remote-control] desktop hosting state rejected:",N))}h()},u=(b,P)=>{const O=e.get(b);if(O){if(O.lastRunStatus!=="blocked"&&P.runStatus==="blocked"){const L=p();L&&L.notify({title:"Assistant needs your input",body:P.title,conversationId:b}).catch(F=>console.warn("[remote-control] desktop notification rejected:",F))}O.lastRunStatus=P.runStatus,m()}},E=(b,P)=>{const O=o;if(!O)return;i.add(b),t.delete(b);const L=y(b);(async()=>{try{await L,await(O.applyTransfer??((F,V)=>Xh(O,F,V)))(b,P)}catch(F){console.error("[remote-control] failed to record the ownership transfer:",F)}finally{i.delete(b),o===O&&w()}})()},T=b=>{if(!o||e.has(b))return;const P=o.createSession??Vh;let O;try{O=P({executor:o.executor,store:o.store,conversationId:b,hostKind:o.hostKind??"browser",instanceId:o.instanceId,getSettings:f,identity:o.identity,requestApproval:o.requestApproval,onTransferred:F=>E(b,F)})}catch(F){console.error("[remote-control] failed to start host session:",F);return}const L={session:O,unsubscribe:()=>{},lastRunStatus:O.getState().runStatus};e.set(b,L),L.unsubscribe=O.subscribe(F=>u(b,F))},y=b=>{const P=e.get(b);return P?(e.delete(b),P.unsubscribe(),P.session.stop().catch(O=>console.warn("[remote-control] host session stop failed:",O))):Promise.resolve()},D=()=>{if(!o||r)return;const b=o.createInstanceSession??nh;let P;try{P=b({executor:o.executor,store:o.store,instanceId:o.instanceId,hostKind:o.hostKind??"browser",platform:o.platform,getSettings:f,getHostedConversationIds:()=>Array.from(e.keys()),requestHost:O=>_.requestHost(O),requestUnhost:O=>_.requestUnhost(O)})}catch(O){console.error("[remote-control] failed to start instance session:",O);return}r={session:P,unsubscribe:()=>{}},r.unsubscribe=P.subscribe(()=>m())},R=()=>{const b=r;b&&(r=null,b.unsubscribe(),b.session.stop().catch(P=>console.warn("[remote-control] instance session stop failed:",P)))},w=()=>{if(!o)return;const b=f();!!b?.enabled&&o.isPrimaryTab()?D():R();const O=Wh({settings:b,isPrimaryTab:o.isPrimaryTab(),openConversationIds:o.getOpenConversationIds(),requestedConversationIds:Array.from(t),exists:g,isHostable:v}),L=new Set(O);for(const F of Array.from(e.keys()))L.has(F)||y(F);for(const F of O)T(F);for(const F of Array.from(t))g(F)||t.delete(F);r?.session.publish(),m()},U=()=>{!o||c||(c=setTimeout(()=>{c=null,w()},o.debounceMs??300))},S=()=>{c&&clearTimeout(c),c=null;for(const P of a.splice(0))P();for(const P of Array.from(e.keys()))y(P);R(),t.clear(),i.clear(),o=null,l=null;const b=zs();b&&b.setHostingState({hosting:!1,conversationCount:0,viewerCount:0}).catch(()=>{}),s=Ra,h()},_={start(b){return o&&S(),o=b,a=[b.store.subscribe(U)],b.subscribePrimaryTab&&a.push(b.subscribePrimaryTab(U)),w(),S},stop:S,reevaluate:()=>{c&&clearTimeout(c),c=null,w()},requestHost(b){return!o||!f()?.enabled?"capacity":g(b)?v(b)?(t.add(b),c&&clearTimeout(c),c=null,w(),e.has(b)?"hosted":(t.delete(b),m(),"capacity")):"not-owned":"not-found"},requestUnhost(b){t.delete(b)&&(c&&clearTimeout(c),c=null,w())},getSnapshot:()=>s,subscribe(b){return n.add(b),()=>{n.delete(b)}}};return _}const jh=qh();function $h(){const n=vn.c(8),e=Hu(),t=Vu(),i=!!(e.canUseRemoteControl&&t.remoteControl?.enabled),r=t.remoteControl?.desktop?.keepRunningInBackground,s=t.remoteControl?.desktop?.launchAtLogin;let o,a;n[0]!==i?(o=()=>{if(!i)return;let h=!1,p=null;return Qc().then(f=>{const{instanceId:d}=f;if(h)return;const g=Gu($t,Oc,Wu());p=jh.start({store:$t,executor:g,instanceId:d,getSettings:nf,isPrimaryTab:tf,subscribePrimaryTab:ef,getOpenConversationIds:Zh,hostKind:hd()?"desktop":"browser",platform:typeof navigator<"u"?navigator.platform:void 0})}).catch(Kh),()=>{h=!0,p?.()}},a=[i],n[0]=i,n[1]=o,n[2]=a):(o=n[1],a=n[2]),se.useEffect(o,a);let c,l;n[3]!==i||n[4]!==r||n[5]!==s?(c=()=>{const h=zs();h&&h.setPreferences({keepRunningInBackground:i?r??!0:!1,launchAtLogin:i?s??!1:!1}).catch(Yh)},l=[i,r,s],n[3]=i,n[4]=r,n[5]=s,n[6]=c,n[7]=l):(c=n[6],l=n[7]),se.useEffect(c,l)}function Yh(n){return console.warn("[remote-control] desktop preferences rejected:",n)}function Kh(n){return console.error("[remote-control] instance identity unavailable; hosting not started:",n)}function Zh(){return Xu($t.getState()).filter(Qh).map(Jh)}function Jh(n){return n.conversationId}function Qh(n){return n.tabRole==="conversation"}function ef(n){return Vc.onStatusChange(()=>n())}function tf(){return Vc.isPrimary()}function nf(){return $t.getState().settings}function rf(){return $h(),null}function sf(){const n=qu(h=>h.persistence??{}),e=$r(),t=ju(),[i,r]=se.useState(!1),[s,o]=se.useState();if(n.phase!=="fault")return null;const a=e["status.error"],c=Vl(e.button,"#ffffff","#000000",t),l=async()=>{r(!0),o(void 0);try{const{createFaultModeExport:h,downloadFaultModeExport:p}=await dn(async()=>{const{createFaultModeExport:f,downloadFaultModeExport:d}=await import("./faultExport-Bcx0jM1Q.js");return{createFaultModeExport:f,downloadFaultModeExport:d}},__vite__mapDeps([14,4,1,2,5,3,7,0,6,8,9,10,11,12]));p(h(n.fault))}catch(h){o(h instanceof Error?h.message:String(h))}finally{r(!1)}};return q.jsx("div",{role:"alertdialog","aria-modal":"true",style:{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeItems:"center",padding:24,boxSizing:"border-box",background:un(e.background,.97),color:e["text.primary"],fontFamily:"Inter, system-ui, sans-serif"},children:q.jsxs("section",{style:{width:"min(680px, 100%)",padding:28,border:`1px solid ${un(a,.48)}`,borderRadius:12,background:e.paper,boxShadow:"0 24px 80px rgba(0, 0, 0, 0.45)"},children:[q.jsx("p",{style:{margin:"0 0 8px",color:a,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Persistence fault"}),q.jsx("h1",{style:{margin:"0 0 14px",fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped saving to protect your data"}),q.jsx("p",{style:{margin:"0 0 12px",color:e["text.secondary"],lineHeight:1.55},children:"Assistant will not accept more changes after an ambiguous or failed database write. Reload to open the last complete SQLite state."}),q.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${un(a,.4)}`,borderRadius:8,background:un(a,.1),color:a,fontSize:12},children:n.fault||"SQLite persistence entered a fatal state."}),s?q.jsx("p",{style:{color:a,lineHeight:1.5},children:s}):null,q.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[q.jsx("button",{type:"button",onClick:()=>window.location.reload(),style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.button}`,background:e.button,color:c,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},children:"Reload"}),q.jsx("button",{type:"button",disabled:i,onClick:()=>{l()},style:{padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:i?e["status.disabled"]:e["text.primary"],cursor:i?"wait":"pointer",fontSize:"0.95rem",fontWeight:600},children:i?"Preparing snapshot…":"Download in-memory snapshot"})]}),q.jsx("p",{style:{margin:"16px 0 0",color:e["text.secondary"],fontSize:13,lineHeight:1.5},children:"The snapshot contains the current in-memory application state only — attachments and other binary payloads are not included, and recent changes may not have been committed. The SQLite database still holds the last fully committed state. Do not clear browser site data."})]})})}const of={"selector-invalid":"Assistant cannot determine which storage engine owns your data because the boot selector is malformed or unreadable.","opfs-unsupported":"This browser does not provide the OPFS support required to open SQLite persistence.","opfs-open-failed":"Assistant could not acquire or open its private OPFS database area.","database-missing":"The exact SQLite database selected for this profile is missing.","database-exists":"Assistant refused to replace an existing SQLite database while creating a new one.","identity-mismatch":"The database identity does not match the exact database selected for this profile.","not-sealed":"The selected database was never completely prepared and sealed for normal use.","already-sealed":"Assistant detected an invalid attempt to seal an already completed database.","integrity-failed":"SQLite reported that the database failed structural integrity checks.","storage-full":"The browser reported that durable storage is full.","io-error":"SQLite or OPFS reported an input/output failure while accessing the database.","fatal-latched":"An earlier persistence failure stopped this database session; reload is required.","invalid-request":"Assistant detected malformed or unsupported persisted data or a programming error in a database request.","replica-failed":"A full-database replica operation failed; the primary database has not been replaced.","restore-invalid":"The selected replica file did not pass complete restore validation.","worker-terminated":"The SQLite worker stopped unexpectedly, so the outcome of its last operation may be unknown.",internal:"Assistant encountered an unexpected persistence implementation error."};function Ca(n){const e=new Date(n);return Number.isNaN(e.getTime())?n:e.toLocaleString()}function af({error:n}){const e=se.useMemo(()=>Gl(),[]),t={padding:"0.65rem 1rem",borderRadius:8,border:`1px solid ${e.divider}`,background:e.paper,color:e.textPrimary,cursor:"pointer",fontSize:"0.95rem",fontWeight:600},i=se.useRef(null),[r,s]=se.useState(),[o,a]=se.useState(),[c,l]=se.useState(),[h,p]=se.useState();let f,d;try{const w=ld();w.engine==="sqlite"&&(f=w.selector.databaseName)}catch(w){d=w instanceof Error?w.message:String(w)}se.useEffect(()=>{let w=!1;return sd().then(U=>{w||l(U)}),od().then(U=>{w||p(U)}),()=>{w=!0}},[]);const g=n instanceof zc?n.code:void 0,v=g?of[g]:"Assistant could not safely open the selected SQLite database and will not guess or fall back to another data source.";let m,u;h?h.supported?h.present?(m=`OPFS marker: present${h.createdAt?` (created ${Ca(h.createdAt)})`:""}.`,u="A marker file outside the database pool survived, so OPFS was NOT cleared origin-wide: the loss is specific to the SQLite pool (for example the SAH pool's silent bad-digest reap, or targeted deletion)."):h.expectedCreatedAt?(m=`OPFS marker: missing (it was created ${Ca(h.expectedCreatedAt)}).`,u='A marker file outside the database pool is gone too, which points to origin-wide OPFS clearing: browser eviction on an unpersisted origin, "Clear site data", or an external cleanup tool.'):m="OPFS marker: was never created on this profile, so an origin-wide wipe cannot be distinguished from pool-specific loss for this incident.":m="OPFS marker: could not be checked in this browser.":m="OPFS marker: checking…";const E=c===void 0?"Persistent storage: unknown (the browser did not report a grant state).":c?"Persistent storage: granted — this origin is protected from ordinary pressure-driven eviction.":"Persistent storage: NOT granted — quota-managed storage (including OPFS) on this origin is evictable by the browser.",T=async(w,U)=>{s(w),a(void 0);try{await U()}catch(S){a(S instanceof Error?S.message:String(S))}finally{s(void 0)}},y=async w=>{await T("Restoring replica…",async()=>{await $u(w)})},D=async()=>{f&&await T("Exporting forensic bytes…",async()=>{const w=await Yu(f);Ku(`${f}.raw.db`,w)})},R=async()=>{window.prompt("Type RESET to permanently delete all Assistant SQLite storage.")==="RESET"&&await T("Resetting SQLite storage…",async()=>{await Zu(),window.location.reload()})};return q.jsx("main",{role:"alert",style:{minHeight:"100vh",boxSizing:"border-box",display:"grid",placeItems:"center",padding:24,background:e.background,color:e.textPrimary,fontFamily:"Inter, system-ui, sans-serif"},children:q.jsxs("section",{style:{width:"min(760px, 100%)",padding:28,border:`1px solid ${e.divider}`,borderRadius:12,background:e.paper},children:[q.jsx("p",{style:{margin:"0 0 8px",color:e.textSecondary,fontSize:13,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"SQLite recovery"}),q.jsx("h1",{style:{margin:"0 0 14px",color:e.statusError,fontSize:"clamp(1.5rem, 4vw, 2.1rem)"},children:"Assistant stopped to protect your data"}),g?q.jsxs("p",{style:{margin:"0 0 12px",fontFamily:"ui-monospace, monospace",fontWeight:700},children:["Error code: ",g]}):null,q.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,lineHeight:1.55},children:v}),f?q.jsxs("p",{style:{margin:"0 0 12px",color:e.textSecondary},children:["Selected database: ",q.jsx("code",{style:{color:e.textPrimary},children:f})]}):null,d?q.jsxs("p",{style:{margin:"0 0 12px",color:e.statusError,lineHeight:1.5},children:["The persistence selector itself could not be read: ",d]}):null,q.jsx("pre",{style:{margin:"16px 0",padding:12,maxHeight:180,overflow:"auto",whiteSpace:"pre-wrap",overflowWrap:"anywhere",border:`1px solid ${un(e.statusError,.4)}`,borderRadius:8,background:un(e.statusError,.1),color:e.statusError,fontSize:12},children:n.message}),q.jsxs("div",{style:{margin:"0 0 12px",padding:12,borderRadius:8,border:`1px solid ${e.divider}`,fontSize:13,lineHeight:1.55,color:e.textSecondary},children:[q.jsx("p",{style:{margin:"0 0 6px",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Storage forensics"}),q.jsx("p",{style:{margin:"0 0 4px"},children:E}),q.jsx("p",{style:{margin:0},children:m}),g==="database-missing"&&u?q.jsx("p",{style:{margin:"6px 0 0",color:e.textPrimary},children:u}):null]}),o?q.jsx("p",{style:{color:e.statusError,lineHeight:1.5},children:o}):null,r?q.jsx("p",{style:{color:e.textSecondary},children:r}):null,q.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,marginTop:20},children:[q.jsx("button",{type:"button",disabled:!!r,onClick:()=>window.location.reload(),style:{...t,background:e.button,borderColor:e.button,color:e.buttonForeground},children:"Reload"}),q.jsx("button",{type:"button",disabled:!!r,onClick:()=>i.current?.click(),style:t,children:"Restore from replica file"}),q.jsx("input",{ref:i,"data-performance-replica-input":"true",hidden:!0,type:"file",accept:".db,application/vnd.sqlite3",onChange:w=>{const U=w.currentTarget.files?.[0];w.currentTarget.value="",U&&y(U)}}),f?q.jsx("button",{type:"button",disabled:!!r,onClick:()=>{D()},style:t,children:"Export raw database bytes (forensic)"}):null]}),q.jsx("p",{style:{margin:"14px 0 0",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"The forensic export is an unvalidated byte-for-byte rescue copy for support. It may be corrupt and is not a verified backup."}),q.jsxs("div",{style:{marginTop:26,paddingTop:20,borderTop:`1px solid ${e.divider}`},children:[q.jsx("h2",{style:{margin:"0 0 8px",color:e.statusError,fontSize:"1rem"},children:"Danger zone"}),q.jsx("p",{style:{margin:"0 0 12px",color:e.textSecondary,fontSize:13,lineHeight:1.5},children:"Reset permanently deletes every Assistant SQLite database and removes the engine selector. Legacy pre-migration data, if it still exists, becomes authoritative again after reload."}),q.jsx("button",{type:"button",disabled:!!r,onClick:()=>{R()},style:{...t,borderColor:e.statusError,color:e.statusError},children:"Reset SQLite storage…"})]})]})})}const Pn=128,cs=1024,pi=1024,Kt={speed:.9,attenuation:1.2,energyConservation:1,injectionRadius:.1},cf=n=>n.hue!==void 0?n.hue:n.rgb?Uc(n.rgb):0,Un=(n,e,t,i)=>`hsla(${Math.round((n%1+1)%1*360)}, ${e}%, ${t}%, ${Vi(i)})`,xn=(n,e,t,i,r,s,o)=>{const a=e.u*window.innerWidth,c=(1-e.v)*window.innerHeight,l=t.u*window.innerWidth,h=(1-t.v)*window.innerHeight;if(Math.hypot(l-a,h-c)<.25)return;const p=n.createLinearGradient(a,c,l,h);p.addColorStop(0,i(s)),p.addColorStop(1,i(o)),n.strokeStyle=p,n.lineWidth=r,n.beginPath(),n.moveTo(a,c),n.lineTo(l,h),n.stroke()},lf=(n,e,t,i,r,s,o)=>{const a=Math.min(1.35,Math.max(.25,i.energy/3)),c=Vi(r*a),l=Vi(s*a);if(Math.max(c,l)<=.002)return;const h=Math.min(2.2,o.glowIntensity),p=o.bladeWidth*(1.25+o.haloStrength*.85),f=Math.max(o.coreWidth+2,o.bladeWidth*.64),d=Math.max(o.coreWidth+.7,f*.42),g=Math.max(.7,Math.min(d-.45,o.coreWidth));n.lineCap="butt",n.lineJoin="bevel",o.lightMode?(n.globalCompositeOperation="source-over",xn(n,e,t,v=>Un(i.hue,100,86,v*.22*h),p,c,l),xn(n,e,t,v=>Un(i.hue,100,76,v*.42*h),f,c,l),xn(n,e,t,v=>Un(i.hue,94,53,v*.86*h),d,c,l),xn(n,e,t,v=>Un(i.hue,100,79,v*.92),g,c,l)):(n.globalCompositeOperation="lighter",xn(n,e,t,v=>Un(i.hue,100,52,v*.13*h),p,c,l),xn(n,e,t,v=>Un(i.hue,100,58,v*.48*h),f,c,l),xn(n,e,t,v=>Un(i.hue,100,64,v*.86),d,c,l),xn(n,e,t,v=>`rgba(255, 255, 255, ${Vi(v*.94)})`,g,c,l))},uf=n=>{const e=vn.c(38),{children:t,topology:i,speed:r,attenuation:s,zIndex:o,enableGlobalClicks:a,pixelRatio:c,maxFPS:l}=n,h=i===void 0?"ladder":i,p=r===void 0?_n.speed:r,f=s===void 0?_n.attenuation:s,d=o===void 0?5:o,g=a===void 0?!1:a,v=l===void 0?120:l,m=se.useRef(null);let u;e[0]===Symbol.for("react.memo_cache_sentinel")?(u=new Map,e[0]=u):u=e[0];const E=se.useRef(u),T=se.useRef(null);let y;e[1]===Symbol.for("react.memo_cache_sentinel")?(y=new Float32Array(Pn*4),e[1]=y):y=e[1];const D=se.useRef(y);let R;e[2]===Symbol.for("react.memo_cache_sentinel")?(R={xs:[],ys:[]},e[2]=R):R=e[2];const w=se.useRef(R);let U;e[3]===Symbol.for("react.memo_cache_sentinel")?(U=[],e[3]=U):U=e[3];const S=se.useRef(U),_=se.useRef(!0),b=se.useRef(null),P=se.useRef(df),O=se.useRef(hf),L=se.useRef(h),F=se.useRef(p),V=se.useRef(f),J=se.useRef(v),N=Oo();let z;e[4]!==N?(z=N.toLowerCase().includes("light"),e[4]=N,e[5]=z):z=e[5];const ee=z,fe=se.useRef(ee);let Ae,we;e[6]!==h?(Ae=()=>{L.current=h,_.current=!0},we=[h],e[6]=h,e[7]=Ae,e[8]=we):(Ae=e[7],we=e[8]),se.useEffect(Ae,we);let $,K;e[9]!==p?($=()=>{F.current=p},K=[p],e[9]=p,e[10]=$,e[11]=K):($=e[10],K=e[11]),se.useEffect($,K);let ue,ae;e[12]!==f?(ue=()=>{V.current=f},ae=[f],e[12]=f,e[13]=ue,e[14]=ae):(ue=e[13],ae=e[14]),se.useEffect(ue,ae);let ge,Ie;e[15]!==v?(ge=()=>{J.current=v},Ie=[v],e[15]=v,e[16]=ge,e[17]=Ie):(ge=e[16],Ie=e[17]),se.useEffect(ge,Ie);let Te,He;e[18]!==ee?(Te=()=>{fe.current=ee,O.current()},He=[ee],e[18]=ee,e[19]=Te,e[20]=He):(Te=e[19],He=e[20]),se.useEffect(Te,He);let Ze;e[21]===Symbol.for("react.memo_cache_sentinel")?(Ze=ce=>{const re=E.current.get(ce.id)?.ref.current;re&&T.current?.unobserve(re),E.current.set(ce.id,ce),ce.ref.current&&T.current?.observe(ce.ref.current),_.current=!0},e[21]=Ze):Ze=e[21];const Xe=Ze;let C;e[22]===Symbol.for("react.memo_cache_sentinel")?(C=ce=>{const re=E.current.get(ce)?.ref.current;re&&T.current?.unobserve(re),E.current.delete(ce),_.current=!0},e[22]=C):C=e[22];const dt=C;let ke;e[23]===Symbol.for("react.memo_cache_sentinel")?(ke=(ce,re,_e)=>{P.current(ce,re,_e)},e[23]=ke):ke=e[23];const Ve=ke;let Se;e[24]===Symbol.for("react.memo_cache_sentinel")?(Se=ce=>{const re=E.current.get(ce)?.ref.current;if(!re)return null;const _e=re.getBoundingClientRect();return{u:(_e.left+_e.width/2)/window.innerWidth,v:1-(_e.top+_e.height/2)/window.innerHeight}},e[24]=Se):Se=e[24];const Ge=Se;let Ee;e[25]===Symbol.for("react.memo_cache_sentinel")?(Ee={register:Xe,unregister:dt,pulseAt:Ve,getNodeCenter:Ge},e[25]=Ee):Ee=e[25];const Ne=Ee;let et,A;e[26]!==c?(et=()=>{const ce=m.current,re=ce?.getContext("2d",{alpha:!0});if(!ce||!re)return;let _e=!1,be=0;const ne=S.current,xe=ff,Le=()=>{const I=window.innerWidth,le=window.innerHeight,ie=[...E.current.values()].slice(0,Pn),he=D.current;ie.forEach((te,Z)=>{const me=te.ref.current?.getBoundingClientRect();if(!me)return;const Ce=Z*4;he[Ce]=me.left/I,he[Ce+1]=(le-me.bottom)/le,he[Ce+2]=me.width/I,he[Ce+3]=me.height/le}),w.current=nu(he,ie.length,L.current,xe());for(const te of ne)te.passes=sa(w.current,te.source,te.direction,xe());_.current=!1},Re=()=>{const I=typeof c=="number"?Math.max(.5,Math.min(c,2)):Math.min(window.devicePixelRatio||1,2);ce.width=Math.round(window.innerWidth*I),ce.height=Math.round(window.innerHeight*I),ce.style.width=`${window.innerWidth}px`,ce.style.height=`${window.innerHeight}px`,re.setTransform(I,0,0,I,0,0),_.current=!0,O.current()},de=I=>{if(b.current=null,_e)return;const le=J.current;if(le&&le>0&&I-be<1e3/le){b.current=requestAnimationFrame(de);return}be=I,_.current&&Le(),re.clearRect(0,0,window.innerWidth,window.innerHeight);const ie={lightMode:fe.current,coreWidth:_n.coreWidth,bladeWidth:_n.bladeWidth,glowIntensity:_n.glowIntensity,haloStrength:_n.haloStrength},he=ne;for(let te=he.length-1;te>=0;te=te-1,te){const Z=he[te],me=(I-Z.startedAt)/1e3,Ce=me*F.current,tt=Math.max(.055,Z.packetLength*(.65+Z.radius*2)),$e=Vi(1-me/(_n.fadeLifetime+1.2));if($e<=0||Ce>3){he.splice(te,1);continue}for(const Mt of Z.passes)for(const _t of tu(Mt,Ce,tt)){const ir=Math.exp(-V.current*_t.startDistance*.45),rr=Math.exp(-V.current*_t.endDistance*.45),tn=oa(Ce,_t.startDistance,tt)*ir*$e*Mt.gain,Pi=oa(Ce,_t.endDistance,tt)*rr*$e*Mt.gain;lf(re,_t.from,_t.to,Z,tn,Pi,ie)}}re.globalCompositeOperation="source-over",he.length&&(b.current=requestAnimationFrame(de))};O.current=()=>{!_e&&b.current===null&&(b.current=requestAnimationFrame(de))},P.current=(I,le,ie)=>{const he=ie===void 0?{}:ie;_.current&&Le();const te={u:I,v:eu(w.current.ys,le)},Z={source:te,hue:cf(he),energy:he.energy??2.5,radius:he.radius??.05,packetLength:he.packetLength??_n.packetLength,startedAt:performance.now()};for(const me of[-1,1])ne.push({...Z,direction:me,passes:sa(w.current,te,me,xe())});O.current()};const Ue=()=>{_.current=!0,ne.length&&O.current()};return T.current=new ResizeObserver(Ue),E.current.forEach(I=>{I.ref.current&&T.current?.observe(I.ref.current)}),window.addEventListener("resize",Re),document.addEventListener("scroll",Ue,!0),Re(),()=>{_e=!0,window.removeEventListener("resize",Re),document.removeEventListener("scroll",Ue,!0),T.current?.disconnect(),T.current=null,b.current!==null&&cancelAnimationFrame(b.current),b.current=null,ne.length=0,P.current=pf,O.current=mf,re.clearRect(0,0,window.innerWidth,window.innerHeight)}},A=[c],e[26]=c,e[27]=et,e[28]=A):(et=e[27],A=e[28]),se.useEffect(et,A);let x,H;e[29]!==g?(x=()=>{if(!g)return;const ce=re=>{Ve(re.clientX/window.innerWidth,1-re.clientY/window.innerHeight,{hue:.33})};return window.addEventListener("click",ce),()=>window.removeEventListener("click",ce)},H=[g,Ve],e[29]=g,e[30]=x,e[31]=H):(x=e[30],H=e[31]),se.useEffect(x,H);const Y=ee?"normal":"screen";let Q;e[32]!==Y||e[33]!==d?(Q=q.jsx("canvas",{ref:m,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:d,mixBlendMode:Y}}),e[32]=Y,e[33]=d,e[34]=Q):Q=e[34];let j;return e[35]!==t||e[36]!==Q?(j=q.jsxs(Dc.Provider,{value:Ne,children:[t,Q]}),e[35]=t,e[36]=Q,e[37]=j):j=e[37],j};function df(){}function hf(){}function ff(){return{width:window.innerWidth,height:window.innerHeight}}function pf(){}function mf(){}const Go="178",gf=0,Pa=1,vf=2,sl=1,_f=2,cn=3,In=0,Pt=1,ln=2,Rn=0,_i=1,js=2,Ia=3,La=4,xf=5,Gn=100,Sf=101,yf=102,Mf=103,Ef=104,bf=200,Tf=201,wf=202,Af=203,$s=204,Ys=205,Rf=206,Cf=207,Pf=208,If=209,Lf=210,Df=211,Uf=212,Nf=213,Of=214,Ks=0,Zs=1,Js=2,yi=3,Qs=4,eo=5,to=6,no=7,ol=0,Ff=1,Bf=2,Cn=0,kf=1,zf=2,Hf=3,Vf=4,Gf=5,Wf=6,Xf=7,al=300,Mi=301,Ei=302,io=303,ro=304,Yr=306,so=1e3,qn=1001,oo=1002,Yt=1003,qf=1004,lr=1005,yt=1006,ls=1007,jn=1008,mn=1009,cl=1010,ll=1011,ji=1012,Wo=1013,Kn=1014,Ht=1015,Ji=1016,Xo=1017,qo=1018,$i=1020,ul=35902,dl=1021,hl=1022,Ct=1023,Yi=1026,Ki=1027,fl=1028,jo=1029,pl=1030,$o=1031,Yo=1033,Nr=33776,Or=33777,Fr=33778,Br=33779,ao=35840,co=35841,lo=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37808,go=37809,vo=37810,_o=37811,xo=37812,So=37813,yo=37814,Mo=37815,Eo=37816,bo=37817,To=37818,wo=37819,Ao=37820,Ro=37821,kr=36492,Co=36494,Po=36495,ml=36283,Io=36284,Lo=36285,Do=36286,jf=3200,$f=3201,Yf=0,Kf=1,An="",zt="srgb",bi="srgb-linear",Xr="linear",it="srgb",ei=7680,Da=519,Zf=512,Jf=513,Qf=514,gl=515,ep=516,tp=517,np=518,ip=519,Ua=35044,Na="300 es",fn=2e3,qr=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,Uo=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function rp(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class er{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],p=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(p!==v||c!==f||l!==d||h!==g){let m=1-a;const u=c*f+l*d+h*g+p*v,E=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const D=Math.sqrt(T),R=Math.atan2(D,u*E);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}const y=a*E;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,p=p*m+v*y,m===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=D,l*=D,h*=D,p*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],p=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*d-l*f,e[t+1]=c*g+h*f+l*p-a*d,e[t+2]=l*g+h*d+a*f-c*p,e[t+3]=h*g-a*p-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),p=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"YZX":this._x=f*h*p+l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p-f*d*g;break;case"XZY":this._x=f*h*p-l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],f=i+a+p;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>p){const d=2*Math.sqrt(1+i-a-p);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>p){const d=2*Math.sqrt(1+a-i-p);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+p-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+c*l+o*p-a*h,this.y=i+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hs.copy(this).projectOnVector(e),this.sub(hs)}reflect(e){return this.sub(hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hs=new X,Oa=new er;class Be{constructor(e,t,i,r,s,o,a,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],p=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],u=r[6],E=r[1],T=r[4],y=r[7],D=r[2],R=r[5],w=r[8];return s[0]=o*v+a*E+c*D,s[3]=o*m+a*T+c*R,s[6]=o*u+a*y+c*w,s[1]=l*v+h*E+p*D,s[4]=l*m+h*T+p*R,s[7]=l*u+h*y+p*w,s[2]=f*v+d*E+g*D,s[5]=f*m+d*T+g*R,s[8]=f*u+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=t*p+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fs.makeScale(e,t)),this}rotate(e){return this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new Be;function vl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sp(){const n=jr("canvas");return n.style.display="block",n}const Fa={};function xi(n){n in Fa||(Fa[n]=!0,console.warn(n))}function op(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ap(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ba=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const n={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=pn(r.r),r.g=pn(r.g),r.b=pn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===An?Xr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bi]:{primaries:e,whitePoint:i,transfer:Xr,toXYZ:Ba,fromXYZ:ka,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Ba,fromXYZ:ka,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const Ke=lp();function pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Si(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ti===void 0&&(ti=jr("canvas")),ti.width=e.width,ti.height=e.height;const r=ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pn(t[i]/255)*255):t[i]=pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ps(r[o].image)):s.push(ps(r[o]))}else s=ps(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;const ms=new X;class It extends Ai{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=qn,r=qn,s=yt,o=jn,a=Ct,c=mn,l=It.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Qi(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ms).x}get height(){return this.source.getSize(ms).y}get depth(){return this.source.getSize(ms).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=al;It.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],p=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(d+1)/2,D=(u+1)/2,R=(h+f)/4,w=(p+v)/4,U=(g+m)/4;return T>y&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=w/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=U/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=U/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-v)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Ai{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new It(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends fp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _l extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vt):Vt.fromBufferAttribute(s,o),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),dr.subVectors(this.max,Oi),ni.subVectors(e.a,Oi),ii.subVectors(e.b,Oi),ri.subVectors(e.c,Oi),Sn.subVectors(ii,ni),yn.subVectors(ri,ii),Nn.subVectors(ni,ri);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Nn.z,Nn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Nn.z,0,-Nn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Nn.y,Nn.x,0];return!gs(t,ni,ii,ri,dr)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,ni,ii,ri,dr))?!1:(hr.crossVectors(Sn,yn),t=[hr.x,hr.y,hr.z],gs(t,ni,ii,ri,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nn=[new X,new X,new X,new X,new X,new X,new X,new X],Vt=new X,ur=new tr,ni=new X,ii=new X,ri=new X,Sn=new X,yn=new X,Nn=new X,Oi=new X,dr=new X,hr=new X,On=new X;function gs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){On.fromArray(n,s);const a=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=t.dot(On),h=i.dot(On);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mp=new tr,Fi=new X,vs=new X;class Zo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(vs)),this.expandByPoint(Fi.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rn=new X,_s=new X,fr=new X,Mn=new X,xs=new X,pr=new X,Ss=new X;class gp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_s.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fr),a=Mn.dot(this.direction),c=-Mn.dot(fr),l=Mn.lengthSq(),h=Math.abs(1-o*o);let p,f,d,g;if(h>0)if(p=o*c-a,f=o*a-c,g=s*h,p>=0)if(f>=-g)if(f<=g){const v=1/h;p*=v,f*=v,d=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f=-s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-o*s+a)),f=p>0?-s:Math.min(Math.max(-s,-c),s),d=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(p=Math.max(0,-(o*s+a)),f=p>0?s:Math.min(Math.max(-s,-c),s),d=-p*p+f*(f+2*c)+l);else f=o>0?-s:s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(_s).addScaledVector(fr,f),d}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),r=rn.dot(rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,r,s){xs.subVectors(t,e),pr.subVectors(i,e),Ss.crossVectors(xs,pr);let o=this.direction.dot(Ss),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const c=a*this.direction.dot(pr.crossVectors(Mn,pr));if(c<0)return null;const l=a*this.direction.dot(xs.cross(Mn));if(l<0||c+l>o)return null;const h=-a*Mn.dot(Ss);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,c,l,h,p,f,d,g,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,p,f,d,g,v,m)}set(e,t,i,r,s,o,a,c,l,h,p,f,d,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*p,g=l*h,v=l*p;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*p,g=l*h,v=l*p;t[0]=f-v*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*p,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*p,t[8]=g*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*p+g,t[10]=f-v*p}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=f*p+v,t[5]=o*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*h,t[10]=v*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,_p)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),En.crossVectors(i,Ut),En.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),En.crossVectors(i,Ut)),En.normalize(),mr.crossVectors(Ut,En),r[0]=En.x,r[4]=mr.x,r[8]=Ut.x,r[1]=En.y,r[5]=mr.y,r[9]=Ut.y,r[2]=En.z,r[6]=mr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],p=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],u=i[14],E=i[3],T=i[7],y=i[11],D=i[15],R=r[0],w=r[4],U=r[8],S=r[12],_=r[1],b=r[5],P=r[9],O=r[13],L=r[2],F=r[6],V=r[10],J=r[14],N=r[3],z=r[7],ee=r[11],fe=r[15];return s[0]=o*R+a*_+c*L+l*N,s[4]=o*w+a*b+c*F+l*z,s[8]=o*U+a*P+c*V+l*ee,s[12]=o*S+a*O+c*J+l*fe,s[1]=h*R+p*_+f*L+d*N,s[5]=h*w+p*b+f*F+d*z,s[9]=h*U+p*P+f*V+d*ee,s[13]=h*S+p*O+f*J+d*fe,s[2]=g*R+v*_+m*L+u*N,s[6]=g*w+v*b+m*F+u*z,s[10]=g*U+v*P+m*V+u*ee,s[14]=g*S+v*O+m*J+u*fe,s[3]=E*R+T*_+y*L+D*N,s[7]=E*w+T*b+y*F+D*z,s[11]=E*U+T*P+y*V+D*ee,s[15]=E*S+T*O+y*J+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*c*p-r*l*p-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+m*(+t*l*p-t*a*d-s*o*p+i*o*d+s*a*h-i*l*h)+u*(-r*a*h-t*c*p+t*a*f+r*o*p-i*o*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],u=e[15],E=p*m*l-v*f*l+v*c*d-a*m*d-p*c*u+a*f*u,T=g*f*l-h*m*l-g*c*d+o*m*d+h*c*u-o*f*u,y=h*v*l-g*p*l+g*a*d-o*v*d-h*a*u+o*p*u,D=g*p*c-h*v*c-g*a*f+o*v*f+h*a*m-o*p*m,R=t*E+i*T+r*y+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(v*f*s-p*m*s-v*r*d+i*m*d+p*r*u-i*f*u)*w,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*u+i*c*u)*w,e[3]=(p*c*s-a*f*s-p*r*l+i*f*l+a*r*d-i*c*d)*w,e[4]=T*w,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*u+t*f*u)*w,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*u-t*c*u)*w,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*d+t*c*d)*w,e[8]=y*w,e[9]=(g*p*s-h*v*s-g*i*d+t*v*d+h*i*u-t*p*u)*w,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*u+t*a*u)*w,e[11]=(h*a*s-o*p*s-h*i*l+t*p*l+o*i*d-t*a*d)*w,e[12]=D*w,e[13]=(h*v*r-g*p*r+g*i*f-t*v*f-h*i*m+t*p*m)*w,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*w,e[15]=(o*p*r-h*a*r+h*i*c-t*p*c-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,f=s*l,d=s*h,g=s*p,v=o*h,m=o*p,u=a*p,E=c*l,T=c*h,y=c*p,D=i.x,R=i.y,w=i.z;return r[0]=(1-(v+u))*D,r[1]=(d+y)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(f+u))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+T)*w,r[9]=(m-E)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const o=si.set(r[4],r[5],r[6]).length(),a=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,h=1/o,p=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=p,Gt.elements[9]*=p,Gt.elements[10]*=p,t.setFromRotationMatrix(Gt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===fn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===qr)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fn){const c=this.elements,l=1/(t-e),h=1/(i-r),p=1/(o-s),f=(t+e)*l,d=(i+r)*h;let g,v;if(a===fn)g=(o+s)*p,v=-2*p;else if(a===qr)g=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const si=new X,Gt=new ft,vp=new X(0,0,0),_p=new X(1,1,1),En=new X,mr=new X,Ut=new X,za=new ft,Ha=new er;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Va=new X,oi=new er,sn=new ft,gr=new X,Bi=new X,Sp=new X,yp=new er,Ga=new X(1,0,0),Wa=new X(0,1,0),Xa=new X(0,0,1),qa={type:"added"},Mp={type:"removed"},ai={type:"childadded",child:null},ys={type:"childremoved",child:null};class Ot extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new X,t=new gn,i=new er,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Bi,gr,this.up):sn.lookAt(gr,Bi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(sn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new X(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new X,on=new X,Ms=new X,an=new X,ci=new X,li=new X,ja=new X,Es=new X,bs=new X,Ts=new X,ws=new ut,As=new ut,Rs=new ut;class qt{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),on.subVectors(i,t),Ms.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(on),c=Wt.dot(Ms),l=on.dot(on),h=on.dot(Ms),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;const f=1/p,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(o,an.y),c.addScaledVector(a,an.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ws.setScalar(0),As.setScalar(0),Rs.setScalar(0),ws.fromBufferAttribute(e,t),As.fromBufferAttribute(e,i),Rs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ws,s.x),o.addScaledVector(As,s.y),o.addScaledVector(Rs,s.z),o}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),on.subVectors(e,t),Wt.cross(on).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Wt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ci.subVectors(r,i),li.subVectors(s,i),Es.subVectors(e,i);const c=ci.dot(Es),l=li.dot(Es);if(c<=0&&l<=0)return t.copy(i);bs.subVectors(e,r);const h=ci.dot(bs),p=li.dot(bs);if(h>=0&&p<=h)return t.copy(r);const f=c*p-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ci,o);Ts.subVectors(e,s);const d=ci.dot(Ts),g=li.dot(Ts);if(g>=0&&d<=g)return t.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(li,a);const m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return ja.subVectors(s,r),a=(p-h)/(p-h+(d-g)),t.copy(r).addScaledVector(ja,a);const u=1/(m+v+f);return o=v*u,a=f*u,t.copy(i).addScaledVector(ci,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=rp(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Cs(o,s,e+1/3),this.g=Cs(o,s,e),this.b=Cs(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Sl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ke.workingToColorSpace(St.copy(this),e),Math.round(je(St.r*255,0,255))*65536+Math.round(je(St.g*255,0,255))*256+Math.round(je(St.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=zt){Ke.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(vr);const i=ds(bn.h,vr.h,t),r=ds(bn.s,vr.s,t),s=ds(bn.l,vr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new rt;rt.NAMES=Sl;let Ep=0;class Kr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=_i,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$s,this.blendDst=Ys,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$s&&(i.blendSrc=this.blendSrc),this.blendDst!==Ys&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yl extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new X,_r=new Qe;let bp=0;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ua,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ua&&(e.usage=this.usage),e}}class Ml extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class El extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tp=0;const kt=new ft,Ps=new Ot,ui=new X,Nt=new tr,ki=new tr,gt=new X;class Zn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?El:Ml)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return Ps.lookAt(e),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,ki.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,ki.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(ki.min),Nt.expandByPoint(ki.max))}Nt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)gt.fromBufferAttribute(a,l),c&&(ui.fromBufferAttribute(e,l),gt.add(ui)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new X,c[U]=new X;const l=new X,h=new X,p=new X,f=new Qe,d=new Qe,g=new Qe,v=new X,m=new X;function u(U,S,_){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),p.fromBufferAttribute(i,_),f.fromBufferAttribute(s,U),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,_),h.sub(l),p.sub(l),d.sub(f),g.sub(f);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(b),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[U].add(v),a[S].add(v),a[_].add(v),c[U].add(m),c[S].add(m),c[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,S=E.length;U<S;++U){const _=E[U],b=_.start,P=_.count;for(let O=b,L=b+P;O<L;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new X,y=new X,D=new X,R=new X;function w(U){D.fromBufferAttribute(r,U),R.copy(D);const S=a[U];T.copy(S),T.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(R,S);const b=y.dot(c[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,b)}for(let U=0,S=E.length;U<S;++U){const _=E[U],b=_.start,P=_.count;for(let O=b,L=b+P;O<L;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,h=new X,p=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let u=0;u<h;u++)f[g++]=l[d++]}return new en(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){const f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){const d=l[p];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],p=s[l];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new ft,Fn=new gp,xr=new Zo,Ya=new X,Sr=new X,yr=new X,Mr=new X,Is=new X,Er=new X,Ka=new X,br=new X;class jt extends Ot{constructor(e=new Zn,t=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],p=s[c];h!==0&&(Is.fromBufferAttribute(p,e),o?Er.addScaledVector(Is,h):Er.addScaledVector(Is.sub(t),h))}t.add(Er)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),!(xr.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(xr,Ya)===null||Fn.origin.distanceToSquared(Ya)>(e.far-e.near)**2))&&($a.copy(s).invert(),Fn.copy(e.ray).applyMatrix4($a),!(i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,D=T;y<D;y+=3){const R=a.getX(y),w=a.getX(y+1),U=a.getX(y+2);r=Tr(this,u,e,i,l,h,p,R,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){const E=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=Tr(this,o,e,i,l,h,p,E,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=E,D=T;y<D;y+=3){const R=y,w=y+1,U=y+2;r=Tr(this,u,e,i,l,h,p,R,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,u=v;m<u;m+=3){const E=m,T=m+1,y=m+2;r=Tr(this,o,e,i,l,h,p,E,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wp(n,e,t,i,r,s,o,a){let c;if(e.side===Pt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===In,a),c===null)return null;br.copy(a),br.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:n}}function Tr(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Sr),n.getVertexPosition(c,yr),n.getVertexPosition(l,Mr);const h=wp(n,e,t,i,Sr,yr,Mr,Ka);if(h){const p=new X;qt.getBarycoord(Ka,Sr,yr,Mr,p),r&&(h.uv=qt.getInterpolatedAttribute(r,a,c,l,p,new Qe)),s&&(h.uv1=qt.getInterpolatedAttribute(s,a,c,l,p,new Qe)),o&&(h.normal=qt.getInterpolatedAttribute(o,a,c,l,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new X,materialIndex:0};qt.getNormal(Sr,yr,Mr,f.normal),h.face=f,h.barycoord=p}return h}class nr extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],p=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(h,3)),this.setAttribute("uv",new Yn(p,2));function g(v,m,u,E,T,y,D,R,w,U,S){const _=y/w,b=D/U,P=y/2,O=D/2,L=R/2,F=w+1,V=U+1;let J=0,N=0;const z=new X;for(let ee=0;ee<V;ee++){const fe=ee*b-O;for(let Ae=0;Ae<F;Ae++){const we=Ae*_-P;z[v]=we*E,z[m]=fe*T,z[u]=L,l.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[u]=R>0?1:-1,h.push(z.x,z.y,z.z),p.push(Ae/w),p.push(1-ee/U),J+=1}}for(let ee=0;ee<U;ee++)for(let fe=0;fe<w;fe++){const Ae=f+fe+F*ee,we=f+fe+F*(ee+1),$=f+(fe+1)+F*(ee+1),K=f+(fe+1)+F*ee;c.push(Ae,we,K),c.push(we,$,K),N+=6}a.addGroup(d,N,S),d+=N,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ti(n[t]);for(const r in i)e[r]=i[r]}return e}function Ap(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Rp={clone:Ti,merge:bt};var Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new X,Za=new Qe,Ja=new Qe;class Xt extends Tl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Za,Ja),t.subVectors(Ja,Za)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,hi=1;class Ip extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(di,hi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(di,hi,e,t);s.layers=this.layers,this.add(s);const o=new Xt(di,hi,e,t);o.layers=this.layers,this.add(o);const a=new Xt(di,hi,e,t);a.layers=this.layers,this.add(a);const c=new Xt(di,hi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(di,hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wl extends It{constructor(e=[],t=Mi,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new Rt({name:"CubemapFromEquirect",uniforms:Ti(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Rn});s.uniforms.tEquirect.value=t;const o=new jt(r,s),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=yt),new Ip(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class wr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Al extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ds=new X,Up=new X,Np=new Be;class Hn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ds.subVectors(i,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ds),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),r=this.coplanarPoint(Ds).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Zo,Op=new Qe(.5,.5),Ar=new X;class Rl{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],p=r[6],f=r[7],d=r[8],g=r[9],v=r[10],m=r[11],u=r[12],E=r[13],T=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,m-d,y-u).normalize(),i[1].setComponents(c+s,f+l,m+d,y+u).normalize(),i[2].setComponents(c+o,f+h,m+g,y+E).normalize(),i[3].setComponents(c-o,f-h,m-g,y-E).normalize(),i[4].setComponents(c-a,f-p,m-v,y-T).normalize(),t===fn)i[5].setComponents(c+a,f+p,m+v,y+T).normalize();else if(t===qr)i[5].setComponents(a,p,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){Bn.center.set(0,0,0);const t=Op.distanceTo(e.center);return Bn.radius=.7071067811865476+t,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ar.x=r.normal.x>0?e.max.x:e.min.x,Ar.y=r.normal.y>0?e.max.y:e.min.y,Ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cl extends It{constructor(e,t,i=Kn,r,s,o,a=Yt,c=Yt,l,h=Yi,p=1){if(h!==Yi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:p};super(f,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ri extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,p=e/a,f=t/c,d=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const E=u*f-o;for(let T=0;T<l;T++){const y=T*p-s;g.push(y,-E,0),v.push(0,0,1),m.push(T/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){const T=E+l*u,y=E+l*(u+1),D=E+1+l*(u+1),R=E+1+l*u;d.push(T,y,R),d.push(y,D,R)}this.setIndex(d),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fp extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bp extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jo extends Tl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kp extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Qa(n,e,t,i){const r=zp(i);switch(t){case dl:return n*e;case fl:return n*e/r.components*r.byteLength;case jo:return n*e/r.components*r.byteLength;case pl:return n*e*2/r.components*r.byteLength;case $o:return n*e*2/r.components*r.byteLength;case hl:return n*e*3/r.components*r.byteLength;case Ct:return n*e*4/r.components*r.byteLength;case Yo:return n*e*4/r.components*r.byteLength;case Nr:case Or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:case uo:return Math.max(n,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(n,8)*Math.max(e,8)/2;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kr:case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ml:case Io:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zp(n){switch(n){case mn:case cl:return{byteLength:1,components:1};case ji:case ll:case Ji:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Kn:case Wo:case Ht:return{byteLength:4,components:1};case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function Pl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,p=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,c,l){const h=c.array,p=c.updateRanges;if(n.bindBuffer(l,a),p.length===0)n.bufferSubData(l,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){const g=p[f],v=p[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,p[f]=v)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){const v=p[d];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,zm=`struct PhysicalMaterial {
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
}`,Hm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#define LAMBERT
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
}`,rv=`#define LAMBERT
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
}`,sv=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,av=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,uv=`#define PHONG
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
}`,dv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,fv=`#define TOON
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
}`,pv=`#define TOON
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
}`,mv=`uniform float size;
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
}`,gv=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,_v=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Vp,alphahash_pars_fragment:Gp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:jp,aomap_fragment:$p,aomap_pars_fragment:Yp,batching_pars_vertex:Kp,batching_vertex:Zp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:sm,clipping_planes_vertex:om,color_fragment:am,color_pars_fragment:cm,color_pars_vertex:lm,color_vertex:um,common:dm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:fm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:vm,colorspace_fragment:_m,colorspace_pars_fragment:xm,envmap_fragment:Sm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Mm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:bm,fog_vertex:Tm,fog_pars_vertex:wm,fog_fragment:Am,fog_pars_fragment:Rm,gradientmap_pars_fragment:Cm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Om,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:zm,lights_fragment_begin:Hm,lights_fragment_maps:Vm,lights_fragment_end:Gm,logdepthbuf_fragment:Wm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:qm,logdepthbuf_vertex:jm,map_fragment:$m,map_pars_fragment:Ym,map_particle_fragment:Km,map_particle_pars_fragment:Zm,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:sg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:cg,normal_vertex:lg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:vg,project_vertex:_g,dithering_fragment:xg,dithering_pars_fragment:Sg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:bg,shadowmap_vertex:Tg,shadowmask_pars_fragment:wg,skinbase_vertex:Ag,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Ig,specularmap_pars_fragment:Lg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ug,transmission_fragment:Ng,transmission_pars_fragment:Og,uv_pars_fragment:Fg,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:zg,background_vert:Hg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:jg,depth_frag:$g,distanceRGBA_vert:Yg,distanceRGBA_frag:Kg,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:ev,meshbasic_vert:tv,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:rv,meshmatcap_vert:sv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:cv,meshphong_vert:lv,meshphong_frag:uv,meshphysical_vert:dv,meshphysical_frag:hv,meshtoon_vert:fv,meshtoon_frag:pv,points_vert:mv,points_frag:gv,shadow_vert:vv,shadow_frag:_v,sprite_vert:xv,sprite_frag:Sv},pe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Zt={basic:{uniforms:bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new rt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([pe.lights,pe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Rr={r:0,b:0,g:0},kn=new gn,yv=new ft;function Mv(n,e,t,i,r,s,o){const a=new rt(0);let c=s===!0?0:1,l,h,p=null,f=0,d=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1;const D=g(T);D===null?u(a,c):D&&D.isColor&&(u(D,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===Yr)?(h===void 0&&(h=new jt(new nr(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ti(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),kn.copy(y.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(kn)),h.material.toneMapped=Ke.getTransfer(D.colorSpace)!==it,(p!==D||f!==D.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,p=D,f=D.version,d=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new jt(new Ri(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ti(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(D.colorSpace)!==it,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||f!==D.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,p=D,f=D.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,y){T.getRGB(Rr,bl(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(a,c)},render:v,addToRenderList:m,dispose:E}}function Ev(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,b,P,O,L){let F=!1;const V=p(O,P,b);s!==V&&(s=V,l(s.object)),F=d(_,O,P,L),F&&g(_,O,P,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(_,b,P,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function p(_,b,P){const O=P.wireframe===!0;let L=i[_.id];L===void 0&&(L={},i[_.id]=L);let F=L[b.id];F===void 0&&(F={},L[b.id]=F);let V=F[O];return V===void 0&&(V=f(c()),F[O]=V),V}function f(_){const b=[],P=[],O=[];for(let L=0;L<t;L++)b[L]=0,P[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:O,object:_,attributes:{},index:null}}function d(_,b,P,O){const L=s.attributes,F=b.attributes;let V=0;const J=P.getAttributes();for(const N in J)if(J[N].location>=0){const ee=L[N];let fe=F[N];if(fe===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),ee===void 0||ee.attribute!==fe||fe&&ee.data!==fe.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(_,b,P,O){const L={},F=b.attributes;let V=0;const J=P.getAttributes();for(const N in J)if(J[N].location>=0){let ee=F[N];ee===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));const fe={};fe.attribute=ee,ee&&ee.data&&(fe.data=ee.data),L[N]=fe,V++}s.attributes=L,s.attributesNum=V,s.index=O}function v(){const _=s.newAttributes;for(let b=0,P=_.length;b<P;b++)_[b]=0}function m(_){u(_,0)}function u(_,b){const P=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;P[_]=1,O[_]===0&&(n.enableVertexAttribArray(_),O[_]=1),L[_]!==b&&(n.vertexAttribDivisor(_,b),L[_]=b)}function E(){const _=s.newAttributes,b=s.enabledAttributes;for(let P=0,O=b.length;P<O;P++)b[P]!==_[P]&&(n.disableVertexAttribArray(P),b[P]=0)}function T(_,b,P,O,L,F,V){V===!0?n.vertexAttribIPointer(_,b,P,L,F):n.vertexAttribPointer(_,b,P,O,L,F)}function y(_,b,P,O){v();const L=O.attributes,F=P.getAttributes(),V=b.defaultAttributeValues;for(const J in F){const N=F[J];if(N.location>=0){let z=L[J];if(z===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(z=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(z=_.instanceColor)),z!==void 0){const ee=z.normalized,fe=z.itemSize,Ae=e.get(z);if(Ae===void 0)continue;const we=Ae.buffer,$=Ae.type,K=Ae.bytesPerElement,ue=$===n.INT||$===n.UNSIGNED_INT||z.gpuType===Wo;if(z.isInterleavedBufferAttribute){const ae=z.data,ge=ae.stride,Ie=z.offset;if(ae.isInstancedInterleavedBuffer){for(let Te=0;Te<N.locationSize;Te++)u(N.location+Te,ae.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Te=0;Te<N.locationSize;Te++)m(N.location+Te);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Te=0;Te<N.locationSize;Te++)T(N.location+Te,fe/N.locationSize,$,ee,ge*K,(Ie+fe/N.locationSize*Te)*K,ue)}else{if(z.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,z.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ae=0;ae<N.locationSize;ae++)m(N.location+ae);n.bindBuffer(n.ARRAY_BUFFER,we);for(let ae=0;ae<N.locationSize;ae++)T(N.location+ae,fe/N.locationSize,$,ee,fe*K,fe/N.locationSize*ae*K,ue)}}else if(V!==void 0){const ee=V[J];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(N.location,ee);break;case 3:n.vertexAttrib3fv(N.location,ee);break;case 4:n.vertexAttrib4fv(N.location,ee);break;default:n.vertexAttrib1fv(N.location,ee)}}}}E()}function D(){U();for(const _ in i){const b=i[_];for(const P in b){const O=b[P];for(const L in O)h(O[L].object),delete O[L];delete b[P]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const b=i[_.id];for(const P in b){const O=b[P];for(const L in O)h(O[L].object),delete O[L];delete b[P]}delete i[_.id]}function w(_){for(const b in i){const P=i[b];if(P[_.id]===void 0)continue;const O=P[_.id];for(const L in O)h(O[L].object),delete O[L];delete P[_.id]}}function U(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function bv(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,p){p!==0&&(n.drawArraysInstanced(i,l,h,p),t.update(h,i,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];t.update(d,i,1)}function c(l,h,p,f){if(p===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Tv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Ct&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ht&&!U)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function wv(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Hn,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const d=p.length!==0||f||i!==0||r;return r=f,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,d){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const E=s?0:i,T=E*4;let y=u.clippingState||null;c.value=y,y=h(g,f,T,d);for(let D=0;D!==T;++D)y[D]=t[D];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,d,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const u=d+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let T=0,y=d;T!==v;++T,y+=4)o.copy(p[T]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Av(n){let e=new WeakMap;function t(o,a){return a===io?o.mapping=Mi:a===ro&&(o.mapping=Ei),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===ro)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lp(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const gi=4,ec=[.125,.215,.35,.446,.526,.582],Wn=20,Us=new Jo,tc=new rt;let Ns=null,Os=0,Fs=0,Bs=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,nc=[new X(-Vn,fi,0),new X(Vn,fi,0),new X(-fi,0,Vn),new X(fi,0,Vn),new X(0,Vn,-fi),new X(0,Vn,fi),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Rv=new X;class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Rv}=s;Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Os,Fs),this._renderer.xr.enabled=Bs,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Os=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Ji,format:Ct,colorSpace:bi,depthBuffer:!1},r=rc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(s)),this._blurMaterial=Pv(s,e,t)}return r}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,i,r,s){const c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(tc),p.toneMapping=Cn,p.autoClear=!1;const g=new yl({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),v=new jt(new nr,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(tc),m=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));const y=this._cubeSize;Cr(r,T*y,E>2?y:0,y,y),p.setRenderTarget(r),m&&p.render(v,c),p.render(e,c)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=d,p.autoClear=f,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mi||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Us)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nc[(r-s-1)%nc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new jt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const u=[];let E=0;for(let w=0;w<Wn;++w){const U=w/v,S=Math.exp(-U*U/2);u.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const y=this._sizeLods[r],D=3*y*(r>T-gi?r-T+gi:0),R=4*(this._cubeSize-y);Cr(t,D,R,3*y,2*y),c.setRenderTarget(t),c.render(p,Us)}}function Cv(n){const e=[],t=[],i=[];let r=n;const s=n-gi+1+ec.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-gi?c=ec[o-n+gi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,p=1+l,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,v=3,m=2,u=1,E=new Float32Array(v*g*d),T=new Float32Array(m*g*d),y=new Float32Array(u*g*d);for(let R=0;R<d;R++){const w=R%3*2/3-1,U=R>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];E.set(S,v*g*R),T.set(f,m*g*R);const _=[R,R,R,R,R,R];y.set(_,u*g*R)}const D=new Zn;D.setAttribute("position",new en(E,v)),D.setAttribute("uv",new en(T,m)),D.setAttribute("faceIndex",new en(y,u)),e.push(D),r>gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rc(n,e,t){const i=new Qt(n,e,t);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pv(n,e,t){const i=new Float32Array(Wn),r=new X(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function sc(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function oc(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function Iv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===io||c===ro,h=c===Mi||c===Ei;if(l||h){let p=e.get(a);const f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ic(n)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new ic(n)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Lv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dv(n,e,t,i){const r={},s=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(p){const f=p.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(p){const f=[],d=p.index,g=p.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let T=0,y=E.length;T<y;T+=3){const D=E[T+0],R=E[T+1],w=E[T+2];f.push(D,R,R,w,w,D)}}else if(g!==void 0){const E=g.array;v=g.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const D=T+0,R=T+1,w=T+2;f.push(D,R,R,w,w,D)}}else return;const m=new(vl(f)?El:Ml)(f,1);m.version=v;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const f=s.get(p);if(f){const d=p.index;d!==null&&f.version<d.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function Uv(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,i,1)}function p(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,d[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let u=0;for(let E=0;E<g;E++)u+=d[E]*v[E];t.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Nv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ov(n,e,t){const i=new WeakMap,r=new ut;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==p){let d=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",d)};f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let D=a.attributes.position.count*y,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*R*4*p),U=new _l(w,D,R,p);U.type=Ht,U.needsUpdate=!0;const S=y*4;for(let _=0;_<p;_++){const b=u[_],P=E[_],O=T[_],L=D*R*4*_;for(let F=0;F<b.count;F++){const V=F*S;g===!0&&(r.fromBufferAttribute(b,F),w[L+V+0]=r.x,w[L+V+1]=r.y,w[L+V+2]=r.z,w[L+V+3]=0),v===!0&&(r.fromBufferAttribute(P,F),w[L+V+4]=r.x,w[L+V+5]=r.y,w[L+V+6]=r.z,w[L+V+7]=0),m===!0&&(r.fromBufferAttribute(O,F),w[L+V+8]=r.x,w[L+V+9]=r.y,w[L+V+10]=r.z,w[L+V+11]=O.itemSize===4?r.w:1)}}f={count:p,texture:U,size:new Qe(D,R)},i.set(a,f),a.addEventListener("dispose",d)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Fv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return p}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Il=new It,ac=new Cl(1,1),Ll=new _l,Dl=new pp,Ul=new wl,cc=[],lc=[],uc=new Float32Array(16),dc=new Float32Array(9),hc=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cc[r];if(s===void 0&&(s=new Float32Array(r),cc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zr(n,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;hc.set(i),n.uniformMatrix2fv(this.addr,!1,hc),mt(t,i)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;dc.set(i),n.uniformMatrix3fv(this.addr,!1,dc),mt(t,i)}}function Wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;uc.set(i),n.uniformMatrix4fv(this.addr,!1,uc),mt(t,i)}}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ac.compareFunction=gl,s=ac):s=Il,t.setTexture2D(e||s,r)}function e_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dl,r)}function t_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ul,r)}function n_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ll,r)}function i_(n){switch(n){case 5126:return Bv;case 35664:return kv;case 35665:return zv;case 35666:return Hv;case 35674:return Vv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return jv;case 35669:case 35673:return $v;case 5125:return Yv;case 36294:return Kv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function r_(n,e){n.uniform1fv(this.addr,e)}function s_(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function o_(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function a_(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function c_(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l_(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u_(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function d_(n,e){n.uniform1iv(this.addr,e)}function h_(n,e){n.uniform2iv(this.addr,e)}function f_(n,e){n.uniform3iv(this.addr,e)}function p_(n,e){n.uniform4iv(this.addr,e)}function m_(n,e){n.uniform1uiv(this.addr,e)}function g_(n,e){n.uniform2uiv(this.addr,e)}function v_(n,e){n.uniform3uiv(this.addr,e)}function __(n,e){n.uniform4uiv(this.addr,e)}function x_(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Il,s[o])}function S_(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dl,s[o])}function y_(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ul,s[o])}function M_(n,e,t){const i=this.cache,r=e.length,s=Zr(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ll,s[o])}function E_(n){switch(n){case 5126:return r_;case 35664:return s_;case 35665:return o_;case 35666:return a_;case 35674:return c_;case 35675:return l_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return h_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return v_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class b_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}}class T_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}}class w_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function fc(n,e){n.seq.push(e),n.map[e.id]=e}function A_(n,e,t){const i=n.name,r=i.length;for(ks.lastIndex=0;;){const s=ks.exec(i),o=ks.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){fc(t,l===void 0?new b_(a,n,e):new T_(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new w_(a),fc(t,p)),t=p}}}class zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);A_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function pc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const R_=37297;let C_=0;function P_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mc=new Be;function I_(n){Ke._getMatrix(mc,Ke.workingColorSpace,n);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Xr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+P_(n.getShaderSource(e),o)}else return r}function L_(n,e){const t=I_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D_(n,e){let t;switch(e){case kf:t="Linear";break;case zf:t="Reinhard";break;case Hf:t="Cineon";break;case Vf:t="ACESFilmic";break;case Wf:t="AgX";break;case Xf:t="Neutral";break;case Gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new X;function U_(){Ke.getLuminanceCoefficients(Pr);const n=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function O_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hi(n){return n!==""}function vc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(B_,z_)}const k_=new Map;function z_(n,e){let t=ze[e];if(t===void 0){const i=k_.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(n){return n.replace(H_,V_)}function V_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function G_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Ei:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ei&&(e="ENVMAP_MODE_REFRACTION"),e}function q_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ol:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case Bf:e="ENVMAP_BLENDING_ADD";break}return e}function j_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=G_(t),l=W_(t),h=X_(t),p=q_(t),f=j_(t),d=N_(t),g=O_(s),v=r.createProgram();let m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hi).join(`
`),u.length>0&&(u+=`
`)):(m=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),u=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),o=No(o),o=vc(o,t),o=_c(o,t),a=No(a),a=vc(a,t),a=_c(a,t),o=xc(o),a=xc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=E+m+o,y=E+u+a,D=pc(r,r.VERTEX_SHADER,T),R=pc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,D),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(b){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(D).trim(),L=r.getShaderInfoLog(R).trim();let F=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,R);else{const J=gc(r,D,"vertex"),N=gc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+J+`
`+N)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(O===""||L==="")&&(V=!1);V&&(b.diagnostics={runnable:F,programLog:P,vertexShader:{log:O,prefix:m},fragmentShader:{log:L,prefix:u}})}r.deleteShader(D),r.deleteShader(R),U=new zr(r,v),S=F_(r,v)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,R_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let Y_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Z_(e),t.set(e,i)),i}}class Z_{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}}function J_(n,e,t,i,r,s,o){const a=new xl,c=new K_,l=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,_,b,P,O){const L=P.fog,F=O.geometry,V=S.isMeshStandardMaterial?P.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),N=J&&J.mapping===Yr?J.image.height:null,z=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=ee!==void 0?ee.length:0;let Ae=0;F.morphAttributes.position!==void 0&&(Ae=1),F.morphAttributes.normal!==void 0&&(Ae=2),F.morphAttributes.color!==void 0&&(Ae=3);let we,$,K,ue;if(z){const $e=Zt[z];we=$e.vertexShader,$=$e.fragmentShader}else we=S.vertexShader,$=S.fragmentShader,c.update(S),K=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const ae=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,He=!!S.map,Ze=!!S.matcap,Xe=!!J,C=!!S.aoMap,dt=!!S.lightMap,ke=!!S.bumpMap,Ve=!!S.normalMap,Se=!!S.displacementMap,Ge=!!S.emissiveMap,Ee=!!S.metalnessMap,Ne=!!S.roughnessMap,et=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,H=S.iridescence>0,Y=S.sheen>0,Q=S.transmission>0,j=et&&!!S.anisotropyMap,ce=A&&!!S.clearcoatMap,re=A&&!!S.clearcoatNormalMap,_e=A&&!!S.clearcoatRoughnessMap,be=H&&!!S.iridescenceMap,ne=H&&!!S.iridescenceThicknessMap,xe=Y&&!!S.sheenColorMap,Le=Y&&!!S.sheenRoughnessMap,Re=!!S.specularMap,de=!!S.specularColorMap,Ue=!!S.specularIntensityMap,I=Q&&!!S.transmissionMap,le=Q&&!!S.thicknessMap,ie=!!S.gradientMap,he=!!S.alphaMap,te=S.alphaTest>0,Z=!!S.alphaHash,me=!!S.extensions;let Ce=Cn;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const tt={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:we,fragmentShader:$,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:bi,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:Ze,envMap:Xe,envMapMode:Xe&&J.mapping,envMapCubeUVHeight:N,aoMap:C,lightMap:dt,bumpMap:ke,normalMap:Ve,displacementMap:f&&Se,emissiveMap:Ge,normalMapObjectSpace:Ve&&S.normalMapType===Kf,normalMapTangentSpace:Ve&&S.normalMapType===Yf,metalnessMap:Ee,roughnessMap:Ne,anisotropy:et,anisotropyMap:j,clearcoat:A,clearcoatMap:ce,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:x,iridescence:H,iridescenceMap:be,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:xe,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:de,specularIntensityMap:Ue,transmission:Q,transmissionMap:I,thicknessMap:le,gradientMap:ie,opaque:S.transparent===!1&&S.blending===_i&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:te,alphaHash:Z,combine:S.combine,mapUv:He&&v(S.map.channel),aoMapUv:C&&v(S.aoMap.channel),lightMapUv:dt&&v(S.lightMap.channel),bumpMapUv:ke&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:Ge&&v(S.emissiveMap.channel),metalnessMapUv:Ee&&v(S.metalnessMap.channel),roughnessMapUv:Ne&&v(S.roughnessMap.channel),anisotropyMapUv:j&&v(S.anisotropyMap.channel),clearcoatMapUv:ce&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(S.sheenRoughnessMap.channel),specularMapUv:Re&&v(S.specularMap.channel),specularColorMapUv:de&&v(S.specularColorMap.channel),specularIntensityMapUv:Ue&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:le&&v(S.thicknessMap.channel),alphaMapUv:he&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ve||et),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(He||he),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ge,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ae,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:Ge&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function u(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)_.push(b),_.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(E(_,S),T(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function E(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function T(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const _=g[S.type];let b;if(_){const P=Zt[_];b=Rp.clone(P.uniforms)}else b=S.uniforms;return b}function D(S,_){let b;for(let P=0,O=h.length;P<O;P++){const L=h[P];if(L.cacheKey===_){b=L,++b.usedTimes;break}}return b===void 0&&(b=new $_(n,_,S,s),h.push(b)),b}function R(S){if(--S.usedTimes===0){const _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:U}}function Q_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,f,d,g,v,m){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},n[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=m),e++,u}function a(p,f,d,g,v,m){const u=o(p,f,d,g,v,m);d.transmission>0?i.push(u):d.transparent===!0?r.push(u):t.push(u)}function c(p,f,d,g,v,m){const u=o(p,f,d,g,v,m);d.transmission>0?i.unshift(u):d.transparent===!0?r.unshift(u):t.unshift(u)}function l(p,f){t.length>1&&t.sort(p||e0),i.length>1&&i.sort(f||yc),r.length>1&&r.sort(f||yc)}function h(){for(let p=e,f=n.length;p<f;p++){const d=n[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function t0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mc,n.set(i,[o])):r>=s.length?(o=new Mc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function n0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new rt};break;case"SpotLight":t={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function i0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r0=0;function s0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function o0(n){const e=new n0,t=i0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new ft,o=new ft;function a(l){let h=0,p=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,g=0,v=0,m=0,u=0,E=0,T=0,y=0,D=0,R=0,w=0;l.sort(s0);for(let S=0,_=l.length;S<_;S++){const b=l[S],P=b.color,O=b.intensity,L=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*O,p+=P.g*O,f+=P.b*O;else if(b.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(b.sh.coefficients[V],O);w++}else if(b.isDirectionalLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,N=t.get(b);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=b.shadow.matrix,E++}i.directional[d]=V,d++}else if(b.isSpotLight){const V=e.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(P).multiplyScalar(O),V.distance=L,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,i.spot[v]=V;const J=b.shadow;if(b.map&&(i.spotLightMap[D]=b.map,D++,J.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[v]=J.matrix,b.castShadow){const N=t.get(b);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=F,y++}v++}else if(b.isRectAreaLight){const V=e.get(b);V.color.copy(P).multiplyScalar(O),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=V,m++}else if(b.isPointLight){const V=e.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const J=b.shadow,N=t.get(b);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=b.shadow.matrix,T++}i.point[g]=V,g++}else if(b.isHemisphereLight){const V=e.get(b);V.skyColor.copy(b.color).multiplyScalar(O),V.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[u]=V,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==E||U.numPointShadows!==T||U.numSpotShadows!==y||U.numSpotMaps!==D||U.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=E,U.numPointShadows=T,U.numSpotShadows=y,U.numSpotMaps=D,U.numLightProbes=w,i.version=r0++)}function c(l,h){let p=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const T=l[u];if(T.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Ec(n){const e=new o0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function a0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ec(n),e.set(r,[a])):s>=o.length?(a=new Ec(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
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
}`;function u0(n,e,t){let i=new Rl;const r=new Qe,s=new Qe,o=new ut,a=new Fp({depthPacking:$f}),c=new Bp,l={},h=t.maxTextureSize,p={[In]:Pt,[Pt]:In,[ln]:ln},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:c0,fragmentShader:l0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let u=this.type;this.render=function(R,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),_=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Rn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const O=u!==cn&&this.type===cn,L=u===cn&&this.type!==cn;for(let F=0,V=R.length;F<V;F++){const J=R[F],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();if(r.multiply(z),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/z.y),r.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null||O===!0||L===!0){const fe=this.type!==cn?{minFilter:Yt,magFilter:Yt}:{};N.map!==null&&N.map.dispose(),N.map=new Qt(r.x,r.y,fe),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ee=N.getViewportCount();for(let fe=0;fe<ee;fe++){const Ae=N.getViewport(fe);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),P.viewport(o),N.updateMatrices(J,fe),i=N.getFrustum(),y(w,U,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===cn&&E(N,U),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,b)};function E(R,w){const U=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qt(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,U,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,U,d,v,null)}function T(R,w,U,S){let _=null;const b=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)_=b;else if(_=U.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=_.uuid,O=w.uuid;let L=l[P];L===void 0&&(L={},l[P]=L);let F=L[O];F===void 0&&(F=_.clone(),L[O]=F,w.addEventListener("dispose",D)),_=F}if(_.visible=w.visible,_.wireframe=w.wireframe,S===cn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:p[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const P=n.properties.get(_);P.light=U}return _}function y(R,w,U,S,_){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===cn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const O=e.update(R),L=R.material;if(Array.isArray(L)){const F=O.groups;for(let V=0,J=F.length;V<J;V++){const N=F[V],z=L[N.materialIndex];if(z&&z.visible){const ee=T(R,z,S,_);R.onBeforeShadow(n,R,w,U,O,ee,N),n.renderBufferDirect(U,null,O,ee,R,N),R.onAfterShadow(n,R,w,U,O,ee,N)}}}else if(L.visible){const F=T(R,L,S,_);R.onBeforeShadow(n,R,w,U,O,F,null),n.renderBufferDirect(U,null,O,F,R,null),R.onAfterShadow(n,R,w,U,O,F,null)}}const P=R.children;for(let O=0,L=P.length;O<L;O++)y(P[O],w,U,S,_)}function D(R){R.target.removeEventListener("dispose",D);for(const U in l){const S=l[U],_=R.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const d0={[Ks]:Zs,[Js]:to,[Qs]:no,[yi]:eo,[Zs]:Ks,[to]:Js,[no]:Qs,[eo]:yi};function h0(n,e){function t(){let I=!1;const le=new ut;let ie=null;const he=new ut(0,0,0,0);return{setMask:function(te){ie!==te&&!I&&(n.colorMask(te,te,te,te),ie=te)},setLocked:function(te){I=te},setClear:function(te,Z,me,Ce,tt){tt===!0&&(te*=Ce,Z*=Ce,me*=Ce),le.set(te,Z,me,Ce),he.equals(le)===!1&&(n.clearColor(te,Z,me,Ce),he.copy(le))},reset:function(){I=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,ie=null,he=null,te=null;return{setReversed:function(Z){if(le!==Z){const me=e.get("EXT_clip_control");Z?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),le=Z;const Ce=te;te=null,this.setClear(Ce)}},getReversed:function(){return le},setTest:function(Z){Z?ae(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Z){ie!==Z&&!I&&(n.depthMask(Z),ie=Z)},setFunc:function(Z){if(le&&(Z=d0[Z]),he!==Z){switch(Z){case Ks:n.depthFunc(n.NEVER);break;case Zs:n.depthFunc(n.ALWAYS);break;case Js:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case Qs:n.depthFunc(n.EQUAL);break;case eo:n.depthFunc(n.GEQUAL);break;case to:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Z}},setLocked:function(Z){I=Z},setClear:function(Z){te!==Z&&(le&&(Z=1-Z),n.clearDepth(Z),te=Z)},reset:function(){I=!1,ie=null,he=null,te=null,le=!1}}}function r(){let I=!1,le=null,ie=null,he=null,te=null,Z=null,me=null,Ce=null,tt=null;return{setTest:function($e){I||($e?ae(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function($e){le!==$e&&!I&&(n.stencilMask($e),le=$e)},setFunc:function($e,Mt,_t){(ie!==$e||he!==Mt||te!==_t)&&(n.stencilFunc($e,Mt,_t),ie=$e,he=Mt,te=_t)},setOp:function($e,Mt,_t){(Z!==$e||me!==Mt||Ce!==_t)&&(n.stencilOp($e,Mt,_t),Z=$e,me=Mt,Ce=_t)},setLocked:function($e){I=$e},setClear:function($e){tt!==$e&&(n.clearStencil($e),tt=$e)},reset:function(){I=!1,le=null,ie=null,he=null,te=null,Z=null,me=null,Ce=null,tt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},p={},f=new WeakMap,d=[],g=null,v=!1,m=null,u=null,E=null,T=null,y=null,D=null,R=null,w=new rt(0,0,0),U=0,S=!1,_=null,b=null,P=null,O=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,J=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=J>=1):N.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=J>=2);let z=null,ee={};const fe=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),we=new ut().fromArray(fe),$=new ut().fromArray(Ae);function K(I,le,ie,he){const te=new Uint8Array(4),Z=n.createTexture();n.bindTexture(I,Z),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<ie;me++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(le+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return Z}const ue={};ue[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(yi),ke(!1),Ve(Pa),ae(n.CULL_FACE),C(Rn);function ae(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ge(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ie(I,le){return p[I]!==le?(n.bindFramebuffer(I,le),p[I]=le,I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(I,le){let ie=d,he=!1;if(I){ie=f.get(le),ie===void 0&&(ie=[],f.set(le,ie));const te=I.textures;if(ie.length!==te.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,me=te.length;Z<me;Z++)ie[Z]=n.COLOR_ATTACHMENT0+Z;ie.length=te.length,he=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,he=!0);he&&n.drawBuffers(ie)}function He(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ze={[Gn]:n.FUNC_ADD,[Sf]:n.FUNC_SUBTRACT,[yf]:n.FUNC_REVERSE_SUBTRACT};Ze[Mf]=n.MIN,Ze[Ef]=n.MAX;const Xe={[bf]:n.ZERO,[Tf]:n.ONE,[wf]:n.SRC_COLOR,[$s]:n.SRC_ALPHA,[Lf]:n.SRC_ALPHA_SATURATE,[Pf]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[Af]:n.ONE_MINUS_SRC_COLOR,[Ys]:n.ONE_MINUS_SRC_ALPHA,[If]:n.ONE_MINUS_DST_COLOR,[Cf]:n.ONE_MINUS_DST_ALPHA,[Df]:n.CONSTANT_COLOR,[Uf]:n.ONE_MINUS_CONSTANT_COLOR,[Nf]:n.CONSTANT_ALPHA,[Of]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,le,ie,he,te,Z,me,Ce,tt,$e){if(I===Rn){v===!0&&(ge(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),I!==xf){if(I!==m||$e!==S){if((u!==Gn||y!==Gn)&&(n.blendEquation(n.FUNC_ADD),u=Gn,y=Gn),$e)switch(I){case _i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.ONE,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case La:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,T=null,D=null,R=null,w.set(0,0,0),U=0,m=I,S=$e}return}te=te||le,Z=Z||ie,me=me||he,(le!==u||te!==y)&&(n.blendEquationSeparate(Ze[le],Ze[te]),u=le,y=te),(ie!==E||he!==T||Z!==D||me!==R)&&(n.blendFuncSeparate(Xe[ie],Xe[he],Xe[Z],Xe[me]),E=ie,T=he,D=Z,R=me),(Ce.equals(w)===!1||tt!==U)&&(n.blendColor(Ce.r,Ce.g,Ce.b,tt),w.copy(Ce),U=tt),m=I,S=!1}function dt(I,le){I.side===ln?ge(n.CULL_FACE):ae(n.CULL_FACE);let ie=I.side===Pt;le&&(ie=!ie),ke(ie),I.blending===_i&&I.transparent===!1?C(Rn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;a.setTest(he),he&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){_!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),_=I)}function Ve(I){I!==gf?(ae(n.CULL_FACE),I!==b&&(I===Pa?n.cullFace(n.BACK):I===vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),b=I}function Se(I){I!==P&&(V&&n.lineWidth(I),P=I)}function Ge(I,le,ie){I?(ae(n.POLYGON_OFFSET_FILL),(O!==le||L!==ie)&&(n.polygonOffset(le,ie),O=le,L=ie)):ge(n.POLYGON_OFFSET_FILL)}function Ee(I){I?ae(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ne(I){I===void 0&&(I=n.TEXTURE0+F-1),z!==I&&(n.activeTexture(I),z=I)}function et(I,le,ie){ie===void 0&&(z===null?ie=n.TEXTURE0+F-1:ie=z);let he=ee[ie];he===void 0&&(he={type:void 0,texture:void 0},ee[ie]=he),(he.type!==I||he.texture!==le)&&(z!==ie&&(n.activeTexture(ie),z=ie),n.bindTexture(I,le||ue[I]),he.type=I,he.texture=le)}function A(){const I=ee[z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(I){we.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function Le(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Re(I,le){let ie=l.get(le);ie===void 0&&(ie=new WeakMap,l.set(le,ie));let he=ie.get(I);he===void 0&&(he=n.getUniformBlockIndex(le,I.name),ie.set(I,he))}function de(I,le){const he=l.get(le).get(I);c.get(le)!==he&&(n.uniformBlockBinding(le,he,I.__bindingPointIndex),c.set(le,he))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},z=null,ee={},p={},f=new WeakMap,d=[],g=null,v=!1,m=null,u=null,E=null,T=null,y=null,D=null,R=null,w=new rt(0,0,0),U=0,S=!1,_=null,b=null,P=null,O=null,L=null,we.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:ge,bindFramebuffer:Ie,drawBuffers:Te,useProgram:He,setBlending:C,setMaterial:dt,setFlipSided:ke,setCullFace:Ve,setLineWidth:Se,setPolygonOffset:Ge,setScissorTest:Ee,activeTexture:Ne,bindTexture:et,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:be,texImage3D:ne,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:re,texStorage3D:_e,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:ce,scissor:xe,viewport:Le,reset:Ue}}function f0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qe,h=new WeakMap;let p;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):jr("canvas")}function v(A,x,H){let Y=1;const Q=et(A);if((Q.width>H||Q.height>H)&&(Y=H/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*Q.width),ce=Math.floor(Y*Q.height);p===void 0&&(p=g(j,ce));const re=x?g(j,ce):p;return re.width=j,re.height=ce,re.getContext("2d").drawImage(A,0,0,j,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+ce+")."),re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,x,H,Y,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=x;if(x===n.RED&&(H===n.FLOAT&&(j=n.R32F),H===n.HALF_FLOAT&&(j=n.R16F),H===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.R8UI),H===n.UNSIGNED_SHORT&&(j=n.R16UI),H===n.UNSIGNED_INT&&(j=n.R32UI),H===n.BYTE&&(j=n.R8I),H===n.SHORT&&(j=n.R16I),H===n.INT&&(j=n.R32I)),x===n.RG&&(H===n.FLOAT&&(j=n.RG32F),H===n.HALF_FLOAT&&(j=n.RG16F),H===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RG8UI),H===n.UNSIGNED_SHORT&&(j=n.RG16UI),H===n.UNSIGNED_INT&&(j=n.RG32UI),H===n.BYTE&&(j=n.RG8I),H===n.SHORT&&(j=n.RG16I),H===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGB8UI),H===n.UNSIGNED_SHORT&&(j=n.RGB16UI),H===n.UNSIGNED_INT&&(j=n.RGB32UI),H===n.BYTE&&(j=n.RGB8I),H===n.SHORT&&(j=n.RGB16I),H===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),H===n.UNSIGNED_INT&&(j=n.RGBA32UI),H===n.BYTE&&(j=n.RGBA8I),H===n.SHORT&&(j=n.RGBA16I),H===n.INT&&(j=n.RGBA32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),x===n.RGBA){const ce=Q?Xr:Ke.getTransfer(Y);H===n.FLOAT&&(j=n.RGBA32F),H===n.HALF_FLOAT&&(j=n.RGBA16F),H===n.UNSIGNED_BYTE&&(j=ce===it?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,x){let H;return A?x===null||x===Kn||x===$i?H=n.DEPTH24_STENCIL8:x===Ht?H=n.DEPTH32F_STENCIL8:x===ji&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===$i?H=n.DEPTH_COMPONENT24:x===Ht?H=n.DEPTH_COMPONENT32F:x===ji&&(H=n.DEPTH_COMPONENT16),H}function D(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==yt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),U(x),x.isVideoTexture&&h.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),_(x)}function U(A){const x=i.get(A);if(x.__webglInit===void 0)return;const H=A.source,Y=f.get(H);if(Y){const Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys(Y).length===0&&f.delete(H)}i.remove(A)}function S(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const H=A.source,Y=f.get(H);delete Y[x.__cacheKey],o.memory.textures--}function _(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let Y=0,Q=H.length;Y<Q;Y++){const j=i.get(H[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(H[Y])}i.remove(A)}let b=0;function P(){b=0}function O(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function L(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function F(A,x){const H=i.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,A,x);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function V(A,x){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function J(A,x){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ue(H,A,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function N(A,x){const H=i.get(A);if(A.version>0&&H.__version!==A.version){ae(H,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const z={[so]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},ee={[Yt]:n.NEAREST,[qf]:n.NEAREST_MIPMAP_NEAREST,[lr]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[ls]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},fe={[Zf]:n.NEVER,[ip]:n.ALWAYS,[Jf]:n.LESS,[gl]:n.LEQUAL,[Qf]:n.EQUAL,[np]:n.GEQUAL,[ep]:n.GREATER,[tp]:n.NOTEQUAL};function Ae(A,x){if(x.type===Ht&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===yt||x.magFilter===ls||x.magFilter===lr||x.magFilter===jn||x.minFilter===yt||x.minFilter===ls||x.minFilter===lr||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,z[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,z[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,z[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ee[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ee[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Yt||x.minFilter!==lr&&x.minFilter!==jn||x.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function we(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const j=L(x);if(j!==A.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[j].usedTimes++;const ce=Q[A.__cacheKey];ce!==void 0&&(Q[A.__cacheKey].usedTimes--,ce.usedTimes===0&&S(x)),A.__cacheKey=j,A.__webglTexture=Q[j].texture}return H}function $(A,x,H){return Math.floor(Math.floor(A/H)/x)}function K(A,x,H,Y){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,Y,x.data);else{j.sort((ne,xe)=>ne.start-xe.start);let ce=0;for(let ne=1;ne<j.length;ne++){const xe=j[ce],Le=j[ne],Re=xe.start+xe.count,de=$(Le.start,x.width,4),Ue=$(xe.start,x.width,4);Le.start<=Re+1&&de===Ue&&$(Le.start+Le.count-1,x.width,4)===de?xe.count=Math.max(xe.count,Le.start+Le.count-xe.start):(++ce,j[ce]=Le)}j.length=ce+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ne=0,xe=j.length;ne<xe;ne++){const Le=j[ne],Re=Math.floor(Le.start/4),de=Math.ceil(Le.count/4),Ue=Re%x.width,I=Math.floor(Re/x.width),le=de,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ue,I,le,ie,H,Y,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function ue(A,x,H){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=we(A,x),j=x.source;t.bindTexture(Y,A.__webglTexture,n.TEXTURE0+H);const ce=i.get(j);if(j.version!==ce.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const re=Ke.getPrimaries(Ke.workingColorSpace),_e=x.colorSpace===An?null:Ke.getPrimaries(x.colorSpace),be=x.colorSpace===An||re===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=v(x.image,!1,r.maxTextureSize);ne=Ne(x,ne);const xe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type);let Re=T(x.internalFormat,xe,Le,x.colorSpace,x.isVideoTexture);Ae(Y,x);let de;const Ue=x.mipmaps,I=x.isVideoTexture!==!0,le=ce.__version===void 0||Q===!0,ie=j.dataReady,he=D(x,ne);if(x.isDepthTexture)Re=y(x.format===Ki,x.type),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,xe,Le,null));else if(x.isDataTexture)if(Ue.length>0){I&&le&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ue[0].width,Ue[0].height);for(let te=0,Z=Ue.length;te<Z;te++)de=Ue[te],I?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,xe,Le,de.data):t.texImage2D(n.TEXTURE_2D,te,Re,de.width,de.height,0,xe,Le,de.data);x.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,he,Re,ne.width,ne.height),ie&&K(x,ne,xe,Le)):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,xe,Le,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,Ue[0].width,Ue[0].height,ne.depth);for(let te=0,Z=Ue.length;te<Z;te++)if(de=Ue[te],x.format!==Ct)if(xe!==null)if(I){if(ie)if(x.layerUpdates.size>0){const me=Qa(de.width,de.height,x.format,x.type);for(const Ce of x.layerUpdates){const tt=de.data.subarray(Ce*me/de.data.BYTES_PER_ELEMENT,(Ce+1)*me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ce,de.width,de.height,1,xe,tt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,xe,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Re,de.width,de.height,ne.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ne.depth,xe,Le,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Re,de.width,de.height,ne.depth,0,xe,Le,de.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,he,Re,Ue[0].width,Ue[0].height);for(let te=0,Z=Ue.length;te<Z;te++)de=Ue[te],x.format!==Ct?xe!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,xe,de.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de.width,de.height,xe,Le,de.data):t.texImage2D(n.TEXTURE_2D,te,Re,de.width,de.height,0,xe,Le,de.data)}else if(x.isDataArrayTexture)if(I){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Re,ne.width,ne.height,ne.depth),ie)if(x.layerUpdates.size>0){const te=Qa(ne.width,ne.height,x.format,x.type);for(const Z of x.layerUpdates){const me=ne.data.subarray(Z*te/ne.data.BYTES_PER_ELEMENT,(Z+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,xe,Le,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Le,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,xe,Le,ne.data);else if(x.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,he,Re,ne.width,ne.height,ne.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Le,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,xe,Le,ne.data);else if(x.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,he,Re,ne.width,ne.height);else{let te=ne.width,Z=ne.height;for(let me=0;me<he;me++)t.texImage2D(n.TEXTURE_2D,me,Re,te,Z,0,xe,Le,null),te>>=1,Z>>=1}}else if(Ue.length>0){if(I&&le){const te=et(Ue[0]);t.texStorage2D(n.TEXTURE_2D,he,Re,te.width,te.height)}for(let te=0,Z=Ue.length;te<Z;te++)de=Ue[te],I?ie&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe,Le,de):t.texImage2D(n.TEXTURE_2D,te,Re,xe,Le,de);x.generateMipmaps=!1}else if(I){if(le){const te=et(ne);t.texStorage2D(n.TEXTURE_2D,he,Re,te.width,te.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Le,ne)}else t.texImage2D(n.TEXTURE_2D,0,Re,xe,Le,ne);m(x)&&u(Y),ce.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,H){if(x.image.length!==6)return;const Y=we(A,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+H);const ce=Ke.getPrimaries(Ke.workingColorSpace),re=x.colorSpace===An?null:Ke.getPrimaries(x.colorSpace),_e=x.colorSpace===An||ce===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!be&&!ne?xe[Z]=v(x.image[Z],!0,r.maxCubemapSize):xe[Z]=ne?x.image[Z].image:x.image[Z],xe[Z]=Ne(x,xe[Z]);const Le=xe[0],Re=s.convert(x.format,x.colorSpace),de=s.convert(x.type),Ue=T(x.internalFormat,Re,de,x.colorSpace),I=x.isVideoTexture!==!0,le=j.__version===void 0||Y===!0,ie=Q.dataReady;let he=D(x,Le);Ae(n.TEXTURE_CUBE_MAP,x);let te;if(be){I&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ue,Le.width,Le.height);for(let Z=0;Z<6;Z++){te=xe[Z].mipmaps;for(let me=0;me<te.length;me++){const Ce=te[me];x.format!==Ct?Re!==null?I?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Ce.width,Ce.height,Re,de,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Ce.width,Ce.height,0,Re,de,Ce.data)}}}else{if(te=x.mipmaps,I&&le){te.length>0&&he++;const Z=et(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Re,de,xe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,xe[Z].width,xe[Z].height,0,Re,de,xe[Z].data);for(let me=0;me<te.length;me++){const tt=te[me].image[Z].image;I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,tt.width,tt.height,Re,de,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,tt.width,tt.height,0,Re,de,tt.data)}}else{I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,de,xe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,Re,de,xe[Z]);for(let me=0;me<te.length;me++){const Ce=te[me];I?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Re,de,Ce.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,Re,de,Ce.image[Z])}}}m(x)&&u(n.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ge(A,x,H,Y,Q,j){const ce=s.convert(H.format,H.colorSpace),re=s.convert(H.type),_e=T(H.internalFormat,ce,re,H.colorSpace),be=i.get(x),ne=i.get(H);if(ne.__renderTarget=x,!be.__hasExternalTextures){const xe=Math.max(1,x.width>>j),Le=Math.max(1,x.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,_e,xe,Le,x.depth,0,ce,re,null):t.texImage2D(Q,j,_e,xe,Le,0,ce,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,0,Se(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(A,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=y(x.stencilBuffer,Q),ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Se(x);Ge(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,j,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,A)}else{const Y=x.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],ce=s.convert(j.format,j.colorSpace),re=s.convert(j.type),_e=T(j.internalFormat,ce,re,j.colorSpace),be=Se(x);H&&Ge(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,_e,x.width,x.height):Ge(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,_e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const Q=Y.__webglTexture,j=Se(x);if(x.depthTexture.format===Yi)Ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Ki)Ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function He(A){const x=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Te(x.__webglFramebuffer[0],A):Te(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(A,x,H){const Y=i.get(A);x!==void 0&&ge(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&He(A)}function Xe(A){const x=A.texture,H=i.get(A),Y=i.get(x);A.addEventListener("dispose",w);const Q=A.textures,j=A.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[re]=[];for(let _e=0;_e<x.mipmaps.length;_e++)H.__webglFramebuffer[re][_e]=n.createFramebuffer()}else H.__webglFramebuffer[re]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)H.__webglFramebuffer[re]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ce)for(let re=0,_e=Q.length;re<_e;re++){const be=i.get(Q[re]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Ge(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const _e=Q[re];H.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[re]);const be=s.convert(_e.format,_e.colorSpace),ne=s.convert(_e.type),xe=T(_e.internalFormat,be,ne,_e.colorSpace,A.isXRRenderTarget===!0),Le=Se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,xe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,H.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ge(H.__webglFramebuffer[re][_e],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e);else ge(H.__webglFramebuffer[re],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(x)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let re=0,_e=Q.length;re<_e;re++){const be=Q[re],ne=i.get(be);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Ae(n.TEXTURE_2D,be),ge(H.__webglFramebuffer,A,be,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(be)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Ae(re,x),x.mipmaps&&x.mipmaps.length>0)for(let _e=0;_e<x.mipmaps.length;_e++)ge(H.__webglFramebuffer[_e],A,x,n.COLOR_ATTACHMENT0,re,_e);else ge(H.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,re,0);m(x)&&u(re),t.unbindTexture()}A.depthBuffer&&He(A)}function C(A){const x=A.textures;for(let H=0,Y=x.length;H<Y;H++){const Q=x[H];if(m(Q)){const j=E(A),ce=i.get(Q).__webglTexture;t.bindTexture(j,ce),u(j),t.unbindTexture()}}}const dt=[],ke=[];function Ve(A){if(A.samples>0){if(Ge(A)===!1){const x=A.textures,H=A.width,Y=A.height;let Q=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(A),re=x.length>1;if(re)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const _e=A.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<x.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const ne=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,H,Y,0,0,H,Y,Q,n.NEAREST),c===!0&&(dt.length=0,ke.length=0,dt.push(n.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(j),ke.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const ne=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Se(A){return Math.min(r.maxSamples,A.samples)}function Ge(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ne(A,x){const H=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==bi&&H!==An&&(Ke.getTransfer(H)===it?(Y!==Ct||Q!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=N,this.rebindTextures=Ze,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function p0(n,e){function t(i,r=An){let s;const o=Ke.getTransfer(r);if(i===mn)return n.UNSIGNED_BYTE;if(i===Xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ul)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cl)return n.BYTE;if(i===ll)return n.SHORT;if(i===ji)return n.UNSIGNED_SHORT;if(i===Wo)return n.INT;if(i===Kn)return n.UNSIGNED_INT;if(i===Ht)return n.FLOAT;if(i===Ji)return n.HALF_FLOAT;if(i===dl)return n.ALPHA;if(i===hl)return n.RGB;if(i===Ct)return n.RGBA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===fl)return n.RED;if(i===jo)return n.RED_INTEGER;if(i===pl)return n.RG;if(i===$o)return n.RG_INTEGER;if(i===Yo)return n.RGBA_INTEGER;if(i===Nr||i===Or||i===Fr||i===Br)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ao||i===co||i===lo||i===uo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ho||i===fo||i===po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ho||i===fo)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===po)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mo||i===go||i===vo||i===_o||i===xo||i===So||i===yo||i===Mo||i===Eo||i===bo||i===To||i===wo||i===Ao||i===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===go)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_o)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===To)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wo)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ao)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ro)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kr||i===Co||i===Po)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kr)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===Io||i===Lo||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Io)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
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

}`;class v0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new It,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rt({vertexShader:m0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _0 extends Ai{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,d=null,g=null;const v=new v0,m=t.getContextAttributes();let u=null,E=null;const T=[],y=[],D=new Qe;let R=null;const w=new Xt;w.viewport=new ut;const U=new Xt;U.viewport=new ut;const S=[w,U],_=new kp;let b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=T[$];return K===void 0&&(K=new Ls,T[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=T[$];return K===void 0&&(K=new Ls,T[$]=K),K.getGripSpace()},this.getHand=function($){let K=T[$];return K===void 0&&(K=new Ls,T[$]=K),K.getHandSpace()};function O($){const K=y.indexOf($.inputSource);if(K===-1)return;const ue=T[K];ue!==void 0&&(ue.update($.inputSource,$.frame,l||o),ue.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",F);for(let $=0;$<T.length;$++){const K=y[$];K!==null&&(y[$]=null,T[$].disconnect(K))}b=null,P=null,v.reset(),e.setRenderTarget(u),d=null,f=null,p=null,r=null,E=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",L),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ae=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?Ki:Yi,ae=m.stencil?$i:Kn);const Ie={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Qt(f.textureWidth,f.textureHeight,{format:Ct,type:mn,depthTexture:new Cl(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Qt(d.framebufferWidth,d.framebufferHeight,{format:Ct,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F($){for(let K=0;K<$.removed.length;K++){const ue=$.removed[K],ae=y.indexOf(ue);ae>=0&&(y[ae]=null,T[ae].disconnect(ue))}for(let K=0;K<$.added.length;K++){const ue=$.added[K];let ae=y.indexOf(ue);if(ae===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=y.length){y.push(ue),ae=Ie;break}else if(y[Ie]===null){y[Ie]=ue,ae=Ie;break}if(ae===-1)break}const ge=T[ae];ge&&ge.connect(ue)}}const V=new X,J=new X;function N($,K,ue){V.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const ae=V.distanceTo(J),ge=K.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,Te=ge[14]/(ge[10]-1),He=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],Xe=(ge[9]-1)/ge[5],C=(ge[8]-1)/ge[0],dt=(Ie[8]+1)/Ie[0],ke=Te*C,Ve=Te*dt,Se=ae/(-C+dt),Ge=Se*-C;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ge),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ee=Te+Se,Ne=He+Se,et=ke-Ge,A=Ve+(ae-Ge),x=Ze*He/Ne*Ee,H=Xe*He/Ne*Ee;$.projectionMatrix.makePerspective(et,A,x,H,Ee,Ne),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function z($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let K=$.near,ue=$.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=U.near=w.near=K,_.far=U.far=w.far=ue,(b!==_.near||P!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,P=_.far),w.layers.mask=$.layers.mask|2,U.layers.mask=$.layers.mask|4,_.layers.mask=w.layers.mask|U.layers.mask;const ae=$.parent,ge=_.cameras;z(_,ae);for(let Ie=0;Ie<ge.length;Ie++)z(ge[Ie],ae);ge.length===2?N(_,w,U):_.projectionMatrix.copy(w.projectionMatrix),ee($,_,ae)};function ee($,K,ue){ue===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ue.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Uo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let fe=null;function Ae($,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let ae=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let Te=0;Te<ue.length;Te++){const He=ue[Te];let Ze=null;if(d!==null)Ze=d.getViewport(He);else{const C=p.getViewSubImage(f,He);Ze=C.viewport,Te===0&&(e.setRenderTargetTextures(E,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(E))}let Xe=S[Te];Xe===void 0&&(Xe=new Xt,Xe.layers.enable(Te),Xe.viewport=new ut,S[Te]=Xe),Xe.matrix.fromArray(He.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(He.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Te===0&&(_.matrix.copy(Xe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(Xe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){const Te=p.getDepthInformation(ue[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let ue=0;ue<T.length;ue++){const ae=y[ue],ge=T[ue];ae!==null&&ge!==void 0&&ge.update(ae,K,l||o)}fe&&fe($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const we=new Pl;we.setAnimationLoop(Ae),this.setAnimationLoop=function($){fe=$},this.dispose=function(){}}}const zn=new gn,x0=new ft;function S0(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,bl(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,T,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,T):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=e.get(u),T=E.envMap,y=E.envMapRotation;T&&(m.envMap.value=T,zn.copy(y),zn.x*=-1,zn.y*=-1,zn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(zn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,T){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=T*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function y0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const y=T.program;i.uniformBlockBinding(E,y)}function l(E,T){let y=r[E.id];y===void 0&&(g(E),y=h(E),r[E.id]=y,E.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(E,D);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function h(E){const T=p();E.__bindingPointIndex=T;const y=n.createBuffer(),D=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],y=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,w=y.length;R<w;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,_=U.length;S<_;S++){const b=U[S];if(d(b,R,S,D)===!0){const P=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let F=0;F<O.length;F++){const V=O[F],J=v(V);typeof V=="number"||typeof V=="boolean"?(b.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,P+L,b.__data)):V.isMatrix3?(b.__data[0]=V.elements[0],b.__data[1]=V.elements[1],b.__data[2]=V.elements[2],b.__data[3]=0,b.__data[4]=V.elements[3],b.__data[5]=V.elements[4],b.__data[6]=V.elements[5],b.__data[7]=0,b.__data[8]=V.elements[6],b.__data[9]=V.elements[7],b.__data[10]=V.elements[8],b.__data[11]=0):(V.toArray(b.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,T,y,D){const R=E.value,w=T+"_"+y;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const U=D[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return D[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(E){const T=E.uniforms;let y=0;const D=16;for(let w=0,U=T.length;w<U;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let _=0,b=S.length;_<b;_++){const P=S[_],O=Array.isArray(P.value)?P.value:[P.value];for(let L=0,F=O.length;L<F;L++){const V=O[L],J=v(V),N=y%D,z=N%J.boundary,ee=N+z;y+=z,ee!==0&&D-ee<J.storage&&(y+=D-ee),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=J.storage}}}const R=y%D;return R>0&&(y+=D-R),E.__size=y,E.__cache={},this}function v(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class M0{constructor(e={}){const{canvas:t=sp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=zt;let R=0,w=0,U=null,S=-1,_=null;const b=new ut,P=new ut;let O=null;const L=new rt(0);let F=0,V=t.width,J=t.height,N=1,z=null,ee=null;const fe=new ut(0,0,V,J),Ae=new ut(0,0,V,J);let we=!1;const $=new Rl;let K=!1,ue=!1;const ae=new ft,ge=new ft,Ie=new X,Te=new ut,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Xe(){return U===null?N:1}let C=i;function dt(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Z,!1),C===null){const B="webgl2";if(C=dt(B,M),C===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ke,Ve,Se,Ge,Ee,Ne,et,A,x,H,Y,Q,j,ce,re,_e,be,ne,xe,Le,Re,de,Ue,I;function le(){ke=new Lv(C),ke.init(),de=new p0(C,ke),Ve=new Tv(C,ke,e,de),Se=new h0(C,ke),Ve.reverseDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),Ge=new Nv(C),Ee=new Q_,Ne=new f0(C,ke,Se,Ee,Ve,de,Ge),et=new Av(y),A=new Iv(y),x=new Hp(C),Ue=new Ev(C,x),H=new Dv(C,x,Ge,Ue),Y=new Fv(C,H,x,Ge),xe=new Ov(C,Ve,Ne),_e=new wv(Ee),Q=new J_(y,et,A,ke,Ve,Ue,_e),j=new S0(y,Ee),ce=new t0,re=new a0(ke),ne=new Mv(y,et,A,Se,Y,d,c),be=new u0(y,Y,Ve),I=new y0(C,Ge,Ve,Se),Le=new bv(C,ke,Ge),Re=new Uv(C,ke,Ge),Ge.programs=Q.programs,y.capabilities=Ve,y.extensions=ke,y.properties=Ee,y.renderLists=ce,y.shadowMap=be,y.state=Se,y.info=Ge}le();const ie=new _0(y,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(V,J,!1))},this.getSize=function(M){return M.set(V,J)},this.setSize=function(M,B,G=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,J=B,t.width=Math.floor(M*N),t.height=Math.floor(B*N),G===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(V*N,J*N).floor()},this.setDrawingBufferSize=function(M,B,G){V=M,J=B,N=G,t.width=Math.floor(M*G),t.height=Math.floor(B*G),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(fe)},this.setViewport=function(M,B,G,W){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,B,G,W),Se.viewport(b.copy(fe).multiplyScalar(N).round())},this.getScissor=function(M){return M.copy(Ae)},this.setScissor=function(M,B,G,W){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,B,G,W),Se.scissor(P.copy(Ae).multiplyScalar(N).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(M){Se.setScissorTest(we=M)},this.setOpaqueSort=function(M){z=M},this.setTransparentSort=function(M){ee=M},this.getClearColor=function(M){return M.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,G=!0){let W=0;if(M){let k=!1;if(U!==null){const oe=U.texture.format;k=oe===Yo||oe===$o||oe===jo}if(k){const oe=U.texture.type,ve=oe===mn||oe===Kn||oe===ji||oe===$i||oe===Xo||oe===qo,Me=ne.getClearColor(),ye=ne.getClearAlpha(),Oe=Me.r,Fe=Me.g,Pe=Me.b;ve?(g[0]=Oe,g[1]=Fe,g[2]=Pe,g[3]=ye,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Oe,v[1]=Fe,v[2]=Pe,v[3]=ye,C.clearBufferiv(C.COLOR,0,v))}else W|=C.COLOR_BUFFER_BIT}B&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ne.dispose(),ce.dispose(),re.dispose(),Ee.dispose(),et.dispose(),A.dispose(),Y.dispose(),Ue.dispose(),I.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ir),ie.removeEventListener("sessionend",rr),tn.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=Ge.autoReset,B=be.enabled,G=be.autoUpdate,W=be.needsUpdate,k=be.type;le(),Ge.autoReset=M,be.enabled=B,be.autoUpdate=G,be.needsUpdate=W,be.type=k}function Z(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function me(M){const B=M.target;B.removeEventListener("dispose",me),Ce(B)}function Ce(M){tt(M),Ee.remove(M)}function tt(M){const B=Ee.get(M).programs;B!==void 0&&(B.forEach(function(G){Q.releaseProgram(G)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,G,W,k,oe){B===null&&(B=He);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Me=Nl(M,B,G,W,k);Se.setMaterial(W,ve);let ye=G.index,Oe=1;if(W.wireframe===!0){if(ye=H.getWireframeAttribute(G),ye===void 0)return;Oe=2}const Fe=G.drawRange,Pe=G.attributes.position;let We=Fe.start*Oe,nt=(Fe.start+Fe.count)*Oe;oe!==null&&(We=Math.max(We,oe.start*Oe),nt=Math.min(nt,(oe.start+oe.count)*Oe)),ye!==null?(We=Math.max(We,0),nt=Math.min(nt,ye.count)):Pe!=null&&(We=Math.max(We,0),nt=Math.min(nt,Pe.count));const lt=nt-We;if(lt<0||lt===1/0)return;Ue.setup(k,W,Me,G,ye);let ot,st=Le;if(ye!==null&&(ot=x.get(ye),st=Re,st.setIndex(ot)),k.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*Xe()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(k.isLine){let De=W.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*Xe()),k.isLineSegments?st.setMode(C.LINES):k.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else k.isPoints?st.setMode(C.POINTS):k.isSprite&&st.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))st.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,ct=k._multiDrawCounts,Ye=k._multiDrawCount,Lt=ye?x.get(ye).bytesPerElement:1,Jn=Ee.get(W).currentProgram.getUniforms();for(let Dt=0;Dt<Ye;Dt++)Jn.setValue(C,"_gl_DrawID",Dt),st.render(De[Dt]/Lt,ct[Dt])}else if(k.isInstancedMesh)st.renderInstances(We,lt,k.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ct=Math.min(G.instanceCount,De);st.renderInstances(We,lt,ct)}else st.render(We,lt)};function $e(M,B,G){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=Pt,M.needsUpdate=!0,or(M,B,G),M.side=In,M.needsUpdate=!0,or(M,B,G),M.side=ln):or(M,B,G)}this.compile=function(M,B,G=null){G===null&&(G=M),u=re.get(G),u.init(B),T.push(u),G.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const W=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const Me=oe[ve];$e(Me,G,k),W.add(Me)}else $e(oe,G,k),W.add(oe)}),u=T.pop(),W},this.compileAsync=function(M,B,G=null){const W=this.compile(M,B,G);return new Promise(k=>{function oe(){if(W.forEach(function(ve){Ee.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){k(M);return}setTimeout(oe,10)}ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Mt=null;function _t(M){Mt&&Mt(M)}function ir(){tn.stop()}function rr(){tn.start()}const tn=new Pl;tn.setAnimationLoop(_t),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(M){Mt=M,ie.setAnimationLoop(M),M===null?tn.stop():tn.start()},ie.addEventListener("sessionstart",ir),ie.addEventListener("sessionend",rr),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,B,U),u=re.get(M,T.length),u.init(B),T.push(u),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,K=_e.init(this.clippingPlanes,ue),m=ce.get(M,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&Pi(oe,B,-1/0,y.sortObjects)}Pi(M,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(z,ee),Ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ze&&ne.addToRenderList(m,M),this.info.render.frame++,K===!0&&_e.beginShadows();const G=u.state.shadowsArray;be.render(G,M,B),K===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(u.setupLights(),B.isArrayCamera){const oe=B.cameras;if(k.length>0)for(let ve=0,Me=oe.length;ve<Me;ve++){const ye=oe[ve];ta(W,k,M,ye)}Ze&&ne.render(M);for(let ve=0,Me=oe.length;ve<Me;ve++){const ye=oe[ve];ea(m,M,ye,ye.viewport)}}else k.length>0&&ta(W,k,M,B),Ze&&ne.render(M),ea(m,M,B);U!==null&&w===0&&(Ne.updateMultisampleRenderTarget(U),Ne.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(y,M,B),Ue.resetDefaultState(),S=-1,_=null,T.pop(),T.length>0?(u=T[T.length-1],K===!0&&_e.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Pi(M,B,G,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){W&&Te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const ve=Y.update(M),Me=M.material;Me.visible&&m.push(M,ve,Me,G,Te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const ve=Y.update(M),Me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Te.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Te.copy(ve.boundingSphere.center)),Te.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){const ye=ve.groups;for(let Oe=0,Fe=ye.length;Oe<Fe;Oe++){const Pe=ye[Oe],We=Me[Pe.materialIndex];We&&We.visible&&m.push(M,ve,We,G,Te.z,Pe)}}else Me.visible&&m.push(M,ve,Me,G,Te.z,null)}}const oe=M.children;for(let ve=0,Me=oe.length;ve<Me;ve++)Pi(oe[ve],B,G,W)}function ea(M,B,G,W){const k=M.opaque,oe=M.transmissive,ve=M.transparent;u.setupLightsView(G),K===!0&&_e.setGlobalState(y.clippingPlanes,G),W&&Se.viewport(b.copy(W)),k.length>0&&sr(k,B,G),oe.length>0&&sr(oe,B,G),ve.length>0&&sr(ve,B,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ta(M,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Qt(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ji:mn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const oe=u.state.transmissionRenderTarget[W.id],ve=W.viewport||b;oe.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);const Me=y.getRenderTarget(),ye=y.getActiveCubeFace(),Oe=y.getActiveMipmapLevel();y.setRenderTarget(oe),y.getClearColor(L),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&ne.render(G);const Fe=y.toneMapping;y.toneMapping=Cn;const Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),K===!0&&_e.setGlobalState(y.clippingPlanes,W),sr(M,G,W),Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe),ke.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let nt=0,lt=B.length;nt<lt;nt++){const ot=B[nt],st=ot.object,De=ot.geometry,ct=ot.material,Ye=ot.group;if(ct.side===ln&&st.layers.test(W.layers)){const Lt=ct.side;ct.side=Pt,ct.needsUpdate=!0,na(st,G,W,De,ct,Ye),ct.side=Lt,ct.needsUpdate=!0,We=!0}}We===!0&&(Ne.updateMultisampleRenderTarget(oe),Ne.updateRenderTargetMipmap(oe))}y.setRenderTarget(Me,ye,Oe),y.setClearColor(L,F),Pe!==void 0&&(W.viewport=Pe),y.toneMapping=Fe}function sr(M,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,oe=M.length;k<oe;k++){const ve=M[k],Me=ve.object,ye=ve.geometry,Oe=ve.group;let Fe=ve.material;Fe.allowOverride===!0&&W!==null&&(Fe=W),Me.layers.test(G.layers)&&na(Me,B,G,ye,Fe,Oe)}}function na(M,B,G,W,k,oe){M.onBeforeRender(y,B,G,W,k,oe),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(y,B,G,W,M,oe),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=Pt,k.needsUpdate=!0,y.renderBufferDirect(G,B,W,k,M,oe),k.side=In,k.needsUpdate=!0,y.renderBufferDirect(G,B,W,k,M,oe),k.side=ln):y.renderBufferDirect(G,B,W,k,M,oe),M.onAfterRender(y,B,G,W,k,oe)}function or(M,B,G){B.isScene!==!0&&(B=He);const W=Ee.get(M),k=u.state.lights,oe=u.state.shadowsArray,ve=k.state.version,Me=Q.getParameters(M,k.state,oe,B,G),ye=Q.getProgramCacheKey(Me);let Oe=W.programs;W.environment=M.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(M.isMeshStandardMaterial?A:et).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",me),Oe=new Map,W.programs=Oe);let Fe=Oe.get(ye);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===ve)return ra(M,Me),Fe}else Me.uniforms=Q.getUniforms(M),M.onBeforeCompile(Me,y),Fe=Q.acquireProgram(Me,ye),Oe.set(ye,Fe),W.uniforms=Me.uniforms;const Pe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=_e.uniform),ra(M,Me),W.needsLights=Fl(M),W.lightsStateVersion=ve,W.needsLights&&(Pe.ambientLightColor.value=k.state.ambient,Pe.lightProbe.value=k.state.probe,Pe.directionalLights.value=k.state.directional,Pe.directionalLightShadows.value=k.state.directionalShadow,Pe.spotLights.value=k.state.spot,Pe.spotLightShadows.value=k.state.spotShadow,Pe.rectAreaLights.value=k.state.rectArea,Pe.ltc_1.value=k.state.rectAreaLTC1,Pe.ltc_2.value=k.state.rectAreaLTC2,Pe.pointLights.value=k.state.point,Pe.pointLightShadows.value=k.state.pointShadow,Pe.hemisphereLights.value=k.state.hemi,Pe.directionalShadowMap.value=k.state.directionalShadowMap,Pe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pe.spotShadowMap.value=k.state.spotShadowMap,Pe.spotLightMatrix.value=k.state.spotLightMatrix,Pe.spotLightMap.value=k.state.spotLightMap,Pe.pointShadowMap.value=k.state.pointShadowMap,Pe.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function ia(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=zr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function ra(M,B){const G=Ee.get(M);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Nl(M,B,G,W,k){B.isScene!==!0&&(B=He),Ne.resetTextureUnits();const oe=B.fog,ve=W.isMeshStandardMaterial?B.environment:null,Me=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:bi,ye=(W.isMeshStandardMaterial?A:et).get(W.envMap||ve),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let lt=Cn;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(lt=y.toneMapping);const ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=ot!==void 0?ot.length:0,De=Ee.get(W),ct=u.state.lights;if(K===!0&&(ue===!0||M!==_)){const Et=M===_&&W.id===S;_e.setState(W,M,Et)}let Ye=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ct.state.version||De.outputColorSpace!==Me||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==ye||W.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==_e.numPlanes||De.numIntersection!==_e.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==We||De.morphColors!==nt||De.toneMapping!==lt||De.morphTargetsCount!==st)&&(Ye=!0):(Ye=!0,De.__version=W.version);let Lt=De.currentProgram;Ye===!0&&(Lt=or(W,B,k));let Jn=!1,Dt=!1,Ii=!1;const at=Lt.getUniforms(),Ft=De.uniforms;if(Se.useProgram(Lt.program)&&(Jn=!0,Dt=!0,Ii=!0),W.id!==S&&(S=W.id,Dt=!0),Jn||_!==M){Se.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),ap(ae),cp(ae),at.setValue(C,"projectionMatrix",ae)):at.setValue(C,"projectionMatrix",M.projectionMatrix),at.setValue(C,"viewMatrix",M.matrixWorldInverse);const Tt=at.map.cameraPosition;Tt!==void 0&&Tt.setValue(C,Ie.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&at.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Dt=!0,Ii=!0)}if(k.isSkinnedMesh){at.setOptional(C,k,"bindMatrix"),at.setOptional(C,k,"bindMatrixInverse");const Et=k.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),at.setValue(C,"boneTexture",Et.boneTexture,Ne))}k.isBatchedMesh&&(at.setOptional(C,k,"batchingTexture"),at.setValue(C,"batchingTexture",k._matricesTexture,Ne),at.setOptional(C,k,"batchingIdTexture"),at.setValue(C,"batchingIdTexture",k._indirectTexture,Ne),at.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&at.setValue(C,"batchingColorTexture",k._colorsTexture,Ne));const Bt=G.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&xe.update(k,G,Lt),(Dt||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,at.setValue(C,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ft.envMap.value=ye,Ft.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ft.envMapIntensity.value=B.environmentIntensity),Dt&&(at.setValue(C,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Ol(Ft,Ii),oe&&W.fog===!0&&j.refreshFogUniforms(Ft,oe),j.refreshMaterialUniforms(Ft,W,N,J,u.state.transmissionRenderTarget[M.id]),zr.upload(C,ia(De),Ft,Ne)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(zr.upload(C,ia(De),Ft,Ne),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(C,"center",k.center),at.setValue(C,"modelViewMatrix",k.modelViewMatrix),at.setValue(C,"normalMatrix",k.normalMatrix),at.setValue(C,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Et=W.uniformsGroups;for(let Tt=0,Jr=Et.length;Tt<Jr;Tt++){const Dn=Et[Tt];I.update(Dn,Lt),I.bind(Dn,Lt)}}return Lt}function Ol(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Fl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,B,G){const W=Ee.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=B,Ee.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const G=Ee.get(M);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};const Bl=C.createFramebuffer();this.setRenderTarget=function(M,B=0,G=0){U=M,R=B,w=G;let W=!0,k=null,oe=!1,ve=!1;if(M){const ye=Ee.get(M);if(ye.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(ye.__webglFramebuffer===void 0)Ne.setupRenderTarget(M);else if(ye.__hasExternalTextures)Ne.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Pe=M.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&Ee.has(Pe)&&(M.width!==Pe.image.width||M.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(M)}}const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const Fe=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?k=Fe[B][G]:k=Fe[B],oe=!0):M.samples>0&&Ne.useMultisampledRTT(M)===!1?k=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[G]:k=Fe,b.copy(M.viewport),P.copy(M.scissor),O=M.scissorTest}else b.copy(fe).multiplyScalar(N).floor(),P.copy(Ae).multiplyScalar(N).floor(),O=we;if(G!==0&&(k=Bl),Se.bindFramebuffer(C.FRAMEBUFFER,k)&&W&&Se.drawBuffers(M,k),Se.viewport(b),Se.scissor(P),Se.setScissorTest(O),oe){const ye=Ee.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,ye.__webglTexture,G)}else if(ve){const ye=Ee.get(M.texture),Oe=B;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.__webglTexture,G,Oe)}else if(M!==null&&G!==0){const ye=Ee.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ye.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(M,B,G,W,k,oe,ve,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){Se.bindFramebuffer(C.FRAMEBUFFER,ye);try{const Oe=M.textures[Me],Fe=Oe.format,Pe=Oe.type;if(!Ve.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&G>=0&&G<=M.height-k&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(B,G,W,k,de.convert(Fe),de.convert(Pe),oe))}finally{const Oe=U!==null?Ee.get(U).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(M,B,G,W,k,oe,ve,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye)if(B>=0&&B<=M.width-W&&G>=0&&G<=M.height-k){Se.bindFramebuffer(C.FRAMEBUFFER,ye);const Oe=M.textures[Me],Fe=Oe.format,Pe=Oe.type;if(!Ve.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Me),C.readPixels(B,G,W,k,de.convert(Fe),de.convert(Pe),0);const nt=U!==null?Ee.get(U).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,nt);const lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await op(C,lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,We),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(We),C.deleteSync(lt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,G=0){const W=Math.pow(2,-G),k=Math.floor(M.image.width*W),oe=Math.floor(M.image.height*W),ve=B!==null?B.x:0,Me=B!==null?B.y:0;Ne.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ve,Me,k,oe),Se.unbindTexture()};const kl=C.createFramebuffer(),zl=C.createFramebuffer();this.copyTextureToTexture=function(M,B,G=null,W=null,k=0,oe=null){oe===null&&(k!==0?(xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let ve,Me,ye,Oe,Fe,Pe,We,nt,lt;const ot=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(G!==null)ve=G.max.x-G.min.x,Me=G.max.y-G.min.y,ye=G.isBox3?G.max.z-G.min.z:1,Oe=G.min.x,Fe=G.min.y,Pe=G.isBox3?G.min.z:0;else{const Bt=Math.pow(2,-k);ve=Math.floor(ot.width*Bt),Me=Math.floor(ot.height*Bt),M.isDataArrayTexture?ye=ot.depth:M.isData3DTexture?ye=Math.floor(ot.depth*Bt):ye=1,Oe=0,Fe=0,Pe=0}W!==null?(We=W.x,nt=W.y,lt=W.z):(We=0,nt=0,lt=0);const st=de.convert(B.format),De=de.convert(B.type);let ct;B.isData3DTexture?(Ne.setTexture3D(B,0),ct=C.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ne.setTexture2DArray(B,0),ct=C.TEXTURE_2D_ARRAY):(Ne.setTexture2D(B,0),ct=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment);const Ye=C.getParameter(C.UNPACK_ROW_LENGTH),Lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Jn=C.getParameter(C.UNPACK_SKIP_PIXELS),Dt=C.getParameter(C.UNPACK_SKIP_ROWS),Ii=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pe);const at=M.isDataArrayTexture||M.isData3DTexture,Ft=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const Bt=Ee.get(M),Et=Ee.get(B),Tt=Ee.get(Bt.__renderTarget),Jr=Ee.get(Et.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Tt.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let Dn=0;Dn<ye;Dn++)at&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,k,Pe+Dn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.get(B).__webglTexture,oe,lt+Dn)),C.blitFramebuffer(Oe,Fe,ve,Me,We,nt,ve,Me,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||Ee.has(M)){const Bt=Ee.get(M),Et=Ee.get(B);Se.bindFramebuffer(C.READ_FRAMEBUFFER,kl),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,zl);for(let Tt=0;Tt<ye;Tt++)at?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,k,Pe+Tt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,k),Ft?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,oe,lt+Tt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,oe),k!==0?C.blitFramebuffer(Oe,Fe,ve,Me,We,nt,ve,Me,C.COLOR_BUFFER_BIT,C.NEAREST):Ft?C.copyTexSubImage3D(ct,oe,We,nt,lt+Tt,Oe,Fe,ve,Me):C.copyTexSubImage2D(ct,oe,We,nt,Oe,Fe,ve,Me);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ft?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ct,oe,We,nt,lt,ve,Me,ye,st,De,ot.data):B.isCompressedArrayTexture?C.compressedTexSubImage3D(ct,oe,We,nt,lt,ve,Me,ye,st,ot.data):C.texSubImage3D(ct,oe,We,nt,lt,ve,Me,ye,st,De,ot):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,We,nt,ve,Me,st,De,ot.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,We,nt,ot.width,ot.height,st,ot.data):C.texSubImage2D(C.TEXTURE_2D,oe,We,nt,ve,Me,st,De,ot);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ye),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Jn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Dt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ii),oe===0&&B.generateMipmaps&&C.generateMipmap(ct),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,B,G=null,W=null,k=0){return xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,G,W,k)},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&Ne.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ne.setTextureCube(M,0):M.isData3DTexture?Ne.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ne.setTexture2DArray(M,0):Ne.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){R=0,w=0,U=null,Se.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function E0(n,e){if(e===0)return{edges:[]};const t=new Set,i=new Set;for(let d=0;d<e;d++){const g=d*4,v=n[g],m=n[g+1],u=n[g+2],E=n[g+3];t.add(v),t.add(v+u),i.add(m),i.add(m+E)}const r=Array.from(t).sort((d,g)=>d-g),s=Array.from(i).sort((d,g)=>d-g);if(r.length===0||s.length===0)return{edges:[]};const o=r[0],a=r[r.length-1],c=s[0],l=s[s.length-1],h=new Set,p=[],f=(d,g)=>{const v=d.x<g.x||d.x===g.x&&d.y<=g.y?`${d.x},${d.y}|${g.x},${g.y}`:`${g.x},${g.y}|${d.x},${d.y}`;h.has(v)||(h.add(v),p.push({start:[d.x,d.y],end:[g.x,g.y]}))};return r.forEach(d=>{f({x:d,y:c},{x:d,y:l})}),s.forEach(d=>{f({x:o,y:d},{x:a,y:d})}),{edges:p}}function b0(n,e){if(e===0)return{edges:[]};let t=1,i=0;const r=[];for(let g=0;g<e;g++){const v=g*4,m=n[v],u=n[v+1],E=n[v+2],T=n[v+3];r.push({x:m,y:u,width:E,height:T}),t=Math.min(t,m),i=Math.max(i,m+E)}r.sort((g,v)=>g.y-v.y);const s=new Set,o=(g,v)=>s.add(`${g},${v}`);r.forEach(g=>{const v=g.y+g.height;o(t,v),o(i,v)});const a=r[0].y;o(t,a),o(i,a);const c=Array.from(s).map(g=>{const[v,m]=g.split(",").map(Number);return{x:v,y:m}}).sort((g,v)=>g.y!==v.y?g.y-v.y:g.x-v.x),l=[],h=(g,v)=>{l.push({start:[g.x,g.y],end:[v.x,v.y]})},p=c.filter(g=>Math.abs(g.x-t)<1e-6);for(let g=0;g<p.length-1;g++)h(p[g],p[g+1]);const f=c.filter(g=>Math.abs(g.x-i)<1e-6);for(let g=0;g<f.length-1;g++)h(f[g],f[g+1]);return[...new Set(c.map(g=>g.y))].sort((g,v)=>g-v).forEach(g=>{const v=p.find(u=>Math.abs(u.y-g)<1e-6),m=f.find(u=>Math.abs(u.y-g)<1e-6);v&&m&&h(v,m)}),{edges:l}}const mi=`
  // Fullscreen quad vertex shader.
  // - Passes through the built-in attribute 'uv' into 'vUv'.
  // - Produces clip-space position from the built-in attribute 'position'.
  varying vec2 vUv;

  void main() {
    vUv = uv;                     // UV in [0,1]^2
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,T0=`
  precision highp float;
  varying vec2 vUv;
  
  // Inputs describing the rail network as a set of line segments
  uniform int   uEdgeCount;                             // number of valid entries in uEdges
  uniform vec4  uEdges[${Pn*4+20}];          // (x1, y1, x2, y2) per segment
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

    for (int i = 0; i < ${Pn*4+20}; ++i) {
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
`,w0=`
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
`,A0=`
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
`,R0=`
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
`;class C0{constructor(e){this.renderer=e,this.guideTexture=new Qt(cs,cs,{format:Ct,type:Ht,minFilter:yt,magFilter:yt}),this.simulationTextures=[0,1].map(()=>new Qt(pi,pi,{format:Ct,type:Ht,minFilter:yt,magFilter:yt})),this.tempTexture=new Qt(pi,pi,{format:Ct,type:Ht,minFilter:yt,magFilter:yt}),this.guideMaterial=new Rt({vertexShader:mi,fragmentShader:T0,uniforms:{uEdgeCount:{value:0},uEdges:{value:new Float32Array((Pn*4+20)*4)},uLineWidth:{value:.008}}}),this.simulationMaterial=new Rt({vertexShader:mi,fragmentShader:w0,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uPrevState:{value:null},uDeltaTime:{value:.016},uSpeed:{value:1},uAttenuation:{value:1},uEnergyConservation:{value:1},uRailEpsilon:{value:0},uTTLDecayRate:{value:.5}}}),this.injectionMaterial=new Rt({vertexShader:mi,fragmentShader:A0,uniforms:{uGuideTexture:{value:this.guideTexture.texture},uCurrentState:{value:null},uInjectionPoint:{value:new Qe(.5,.5)},uInjectionRadius:{value:.1},uInjectionEnergy:{value:2},uHue:{value:0},uInjectionEpsilon:{value:0}}}),this.quad=new jt(new Ri(2,2),this.guideMaterial),this.scene=new Al,this.scene.add(this.quad),this.camera=new Jo(-1,1,1,-1,0,1),this.clearBuffers()}renderer;guideTexture;simulationTextures;tempTexture;guideMaterial;simulationMaterial;injectionMaterial;quad;scene;camera;current=0;isInitialized=!1;clearBuffers(){const e=new Rt({vertexShader:mi,fragmentShader:"void main(){gl_FragColor=vec4(0.0);}"});this.quad.material=e,[...this.simulationTextures,this.tempTexture].forEach(t=>{this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera)}),this.renderer.setRenderTarget(null),e.dispose()}updateGuideTexture(e){const t=Math.min(e.length,Pn*4+20),i=this.guideMaterial.uniforms.uEdges.value;e.slice(0,t).forEach((r,s)=>i.set([...r.start,...r.end],s*4)),this.guideMaterial.uniforms.uEdgeCount.value=t,this.quad.material=this.guideMaterial,this.renderer.setRenderTarget(this.guideTexture),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.isInitialized=!0}simulationStep(e){if(!this.isInitialized)return;const t=this.current,i=1-t;this.simulationMaterial.uniforms.uPrevState.value=this.simulationTextures[t].texture,this.simulationMaterial.uniforms.uDeltaTime.value=e,this.quad.material=this.simulationMaterial,this.renderer.setRenderTarget(this.simulationTextures[i]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.current=i}injectPulse(e,t,i,r=2){if(!this.isInitialized)return;this.injectionMaterial.uniforms.uCurrentState.value=this.simulationTextures[this.current].texture,this.injectionMaterial.uniforms.uInjectionPoint.value.set(e,t),this.injectionMaterial.uniforms.uInjectionEnergy.value=r,this.injectionMaterial.uniforms.uHue.value=i,this.quad.material=this.injectionMaterial,this.renderer.setRenderTarget(this.tempTexture),this.renderer.render(this.scene,this.camera);const s=new Rt({vertexShader:mi,fragmentShader:"varying vec2 vUv; uniform sampler2D t; void main(){gl_FragColor=texture2D(t,vUv);} ",uniforms:{t:{value:this.tempTexture.texture}}});this.quad.material=s,this.renderer.setRenderTarget(this.simulationTextures[this.current]),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),s.dispose()}getCurrentTexture(){return this.simulationTextures[this.current].texture}getPreviousSimulationTexture(){return this.simulationTextures[1-this.current].texture}getTempTexture(){return this.tempTexture.texture}getGuideTexture(){return this.guideTexture.texture}getTextureInfo(){return{guideResolution:cs,simResolution:pi,currentBuffer:this.current,isInitialized:this.isInitialized,edgeCount:this.guideMaterial.uniforms.uEdgeCount.value}}dispose(){this.guideTexture.dispose(),this.tempTexture.dispose(),this.simulationTextures.forEach(e=>e.dispose()),this.guideMaterial.dispose(),this.simulationMaterial.dispose(),this.injectionMaterial.dispose()}}const At=n=>{const e=vn.c(52),{label:t,value:i,min:r,max:s,step:o,onChange:a}=n;let c;e[0]!==i?(c=i.toString(),e[0]=i,e[1]=c):c=e[1];const[l,h]=se.useState(c),[p,f]=se.useState(!1),d=se.useRef(null);let g,v;e[2]!==p||e[3]!==i?(g=()=>{p||h(i.toString())},v=[i,p],e[2]=p,e[3]=i,e[4]=g,e[5]=v):(g=e[4],v=e[5]),se.useEffect(g,v);let m;e[6]!==l||e[7]!==a||e[8]!==i?(m=()=>{const we=parseFloat(l);isNaN(we)?h(i.toString()):a(we)},e[6]=l,e[7]=a,e[8]=i,e[9]=m):m=e[9];const u=m;let E;e[10]!==i?(E=()=>{f(!0),h(i.toString())},e[10]=i,e[11]=E):E=e[11];const T=E;let y;e[12]!==u?(y=()=>{f(!1),u()},e[12]=u,e[13]=y):y=e[13];const D=y;let R;e[14]!==u||e[15]!==i?(R=we=>{we.key==="Enter"?(u(),d.current?.blur()):we.key==="Escape"&&(h(i.toString()),f(!1),d.current?.blur())},e[14]=u,e[15]=i,e[16]=R):R=e[16];const w=R;let U,S;e[17]===Symbol.for("react.memo_cache_sentinel")?(U={marginBottom:8},S={display:"flex",justifyContent:"space-between",fontSize:10,color:"#ccc",marginBottom:2},e[17]=U,e[18]=S):(U=e[17],S=e[18]);let _;e[19]!==t?(_=q.jsx("span",{children:t}),e[19]=t,e[20]=_):_=e[20];let b;e[21]!==o||e[22]!==i?(b=i.toFixed(o<.01?3:2),e[21]=o,e[22]=i,e[23]=b):b=e[23];let P;e[24]!==b?(P=q.jsx("span",{children:b}),e[24]=b,e[25]=P):P=e[25];let O;e[26]!==_||e[27]!==P?(O=q.jsxs("div",{style:S,children:[_,P]}),e[26]=_,e[27]=P,e[28]=O):O=e[28];let L;e[29]!==a?(L=we=>a(parseFloat(we.target.value)),e[29]=a,e[30]=L):L=e[30];let F;e[31]===Symbol.for("react.memo_cache_sentinel")?(F={width:"100%",marginBottom:4},e[31]=F):F=e[31];let V;e[32]!==s||e[33]!==r||e[34]!==o||e[35]!==L||e[36]!==i?(V=q.jsx("input",{type:"range",min:r,max:s,step:o,value:i,onChange:L,style:F}),e[32]=s,e[33]=r,e[34]=o,e[35]=L,e[36]=i,e[37]=V):V=e[37];let J;e[38]===Symbol.for("react.memo_cache_sentinel")?(J=we=>h(we.target.value),e[38]=J):J=e[38];const N=p?"#333":"#222",z=`1px solid ${p?"#666":"#444"}`;let ee;e[39]!==N||e[40]!==z?(ee={width:"100%",background:N,color:"#fff",border:z,borderRadius:3,padding:"4px 6px",fontSize:11,boxSizing:"border-box"},e[39]=N,e[40]=z,e[41]=ee):ee=e[41];let fe;e[42]!==D||e[43]!==T||e[44]!==w||e[45]!==l||e[46]!==ee?(fe=q.jsx("input",{ref:d,type:"text",value:l,onFocus:T,onChange:J,onBlur:D,onKeyDown:w,placeholder:"Enter value...",style:ee}),e[42]=D,e[43]=T,e[44]=w,e[45]=l,e[46]=ee,e[47]=fe):fe=e[47];let Ae;return e[48]!==O||e[49]!==V||e[50]!==fe?(Ae=q.jsxs("div",{style:U,children:[O,V,fe]}),e[48]=O,e[49]=V,e[50]=fe,e[51]=Ae):Ae=e[51],Ae},P0=({scopeId:n="scope",gpuSimRef:e,vizUniformsRef:t,nodeCount:i,position:r="top-right",isPaused:s=!1,setPaused:o,onNudgeRender:a,onClose:c})=>{const[l,h]=se.useState(()=>{switch(r){case"top-left":return{x:20,y:20};case"top-right":return{x:window.innerWidth-240,y:20};case"bottom-left":return{x:20,y:window.innerHeight-400};case"bottom-right":return{x:window.innerWidth-240,y:window.innerHeight-400};default:return{x:20,y:20}}}),p=se.useRef(!1),f=se.useRef({x:0,y:0}),d=S=>{p.current=!0,f.current={x:S.clientX-l.x,y:S.clientY-l.y}},g=se.useCallback(S=>{p.current&&h({x:S.clientX-f.current.x,y:S.clientY-f.current.y})},[]),v=se.useCallback(()=>{p.current=!1},[]);se.useEffect(()=>{if(p.current)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",v),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",v)}},[g,v,p.current]);const[m,u]=se.useState(!1),[E,T]=se.useState({speed:Kt.speed,attenuation:Kt.attenuation,lineWidth:.008,injectionRadius:Kt.injectionRadius,ttlLifetime:2,coreWidthPx:2,bladeWidthPx:10,energyScale:1,gamma:1,debugView:0,overlayVectors:!1,vectorSpacingPx:16,vectorLengthPx:8,vectorThicknessPx:1.25,showCenterline:!1,centerlineWidthPx:1.25,intensityCutoff:.01}),y=(S,_)=>{T(O=>({...O,[S]:_}));const b=e.current,P=t.current;if(!(!b||!P)){switch(S){case"speed":b.simulationMaterial.uniforms.uSpeed.value=_;break;case"attenuation":b.simulationMaterial.uniforms.uAttenuation.value=_;break;case"lineWidth":b.guideMaterial.uniforms.uLineWidth.value=_;break;case"injectionRadius":b.injectionMaterial.uniforms.uInjectionRadius.value=_;break;case"ttlLifetime":{const L=1/Math.max(.1,_);b.simulationMaterial.uniforms.uTTLDecayRate&&(b.simulationMaterial.uniforms.uTTLDecayRate.value=L);break}case"coreWidthPx":P.uCoreWidthPx&&(P.uCoreWidthPx.value=_);break;case"bladeWidthPx":P.uBladeWidthPx&&(P.uBladeWidthPx.value=_);break;case"energyScale":P.uEnergyScale&&(P.uEnergyScale.value=_);break;case"gamma":P.uGamma&&(P.uGamma.value=_);break;case"intensityCutoff":P.uIntensityCutoff&&(P.uIntensityCutoff.value=_);break;case"debugView":P.uDebugView&&(P.uDebugView.value=_);break;case"overlayVectors":P.uOverlayVectors&&(P.uOverlayVectors.value=!!_);break;case"vectorSpacingPx":P.uVectorSpacingPx&&(P.uVectorSpacingPx.value=_);break;case"vectorLengthPx":P.uVectorLengthPx&&(P.uVectorLengthPx.value=_);break;case"vectorThicknessPx":P.uVectorThicknessPx&&(P.uVectorThicknessPx.value=_);break;case"showCenterline":P.uShowCenterline&&(P.uShowCenterline.value=!!_);break;case"centerlineWidthPx":P.uCenterlineWidthPx&&(P.uCenterlineWidthPx.value=_);break}a?.()}};se.useEffect(()=>{const S=e.current,_=t.current;!S||!_||T(b=>({...b,speed:S.simulationMaterial.uniforms.uSpeed?.value??b.speed,attenuation:S.simulationMaterial.uniforms.uAttenuation?.value??b.attenuation,lineWidth:S.guideMaterial.uniforms.uLineWidth?.value??b.lineWidth,injectionRadius:S.injectionMaterial.uniforms.uInjectionRadius?.value??b.injectionRadius,ttlLifetime:(S.simulationMaterial.uniforms.uTTLDecayRate?.value??0)>0?1/(S.simulationMaterial.uniforms.uTTLDecayRate?.value??1):b.ttlLifetime,coreWidthPx:_.uCoreWidthPx?.value??b.coreWidthPx,bladeWidthPx:_.uBladeWidthPx?.value??b.bladeWidthPx,energyScale:_.uEnergyScale?.value??b.energyScale,gamma:_.uGamma?.value??b.gamma,debugView:_.uDebugView?.value??b.debugView,overlayVectors:!!(_.uOverlayVectors?.value??b.overlayVectors),vectorSpacingPx:_.uVectorSpacingPx?.value??b.vectorSpacingPx,vectorLengthPx:_.uVectorLengthPx?.value??b.vectorLengthPx,vectorThicknessPx:_.uVectorThicknessPx?.value??b.vectorThicknessPx,showCenterline:!!(_.uShowCenterline?.value??b.showCenterline),centerlineWidthPx:_.uCenterlineWidthPx?.value??b.centerlineWidthPx,intensityCutoff:_.uIntensityCutoff?.value??b.intensityCutoff}))},[]);const[D,R]=se.useState({fps:0,frame:0});se.useEffect(()=>{let S=0,_=0,b=performance.now();const P=()=>{const O=performance.now();if(S+=O-b,_+=1,_>=60){const L=S/_;R({fps:Math.round(1e3/L),frame:parseFloat(L.toFixed(2))}),S=0,_=0}b=O,requestAnimationFrame(P)};P()},[]);const w=S=>{switch(S){case"default":y("speed",Kt.speed),y("attenuation",Kt.attenuation),y("lineWidth",.008),y("injectionRadius",Kt.injectionRadius),y("ttlLifetime",2),y("coreWidthPx",2),y("bladeWidthPx",10),y("energyScale",1),y("gamma",1),y("debugView",0),y("overlayVectors",!1),y("showCenterline",!1);break;case"fast":y("speed",1.5),y("attenuation",.5),y("ttlLifetime",1);break;case"slow":y("speed",.3),y("attenuation",2.5),y("ttlLifetime",4);break;case"intense":y("coreWidthPx",Math.max(1,E.coreWidthPx*1.5)),y("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*1.5)),y("energyScale",Math.max(1,E.energyScale*1.3));break;case"subtle":y("attenuation",2),y("coreWidthPx",Math.max(1,E.coreWidthPx*.7)),y("bladeWidthPx",Math.max(E.coreWidthPx+2,E.bladeWidthPx*.8)),y("ttlLifetime",3);break}},U=(S,_)=>q.jsx("button",{style:{padding:"2px 6px",fontSize:9,background:"#444",color:"#fff",border:"1px solid #666",borderRadius:3,marginRight:3,marginBottom:3},onClick:()=>w(_),onMouseEnter:b=>b.currentTarget.style.background="#555",onMouseLeave:b=>b.currentTarget.style.background="#444",children:S},_);return q.jsxs("div",{style:{position:"fixed",left:l.x,top:l.y,width:220,background:"rgba(20,20,20,0.95)",border:"1px solid #444",borderRadius:6,color:"#fff",fontFamily:"monospace",fontSize:11,zIndex:1e4,pointerEvents:"auto",maxHeight:"calc(100vh - 40px)",overflowY:"auto"},children:[q.jsxs("div",{onMouseDown:d,style:{padding:"6px 10px",background:"#333",cursor:"move",borderRadius:"6px 6px 0 0",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #444",userSelect:"none"},children:[q.jsxs("span",{style:{fontWeight:"bold",fontSize:10},children:[n," debug"]}),q.jsxs("div",{style:{display:"flex",gap:4},children:[q.jsx("button",{onClick:()=>o?.(!s),title:s?"Resume simulation":"Pause simulation",style:{background:"none",border:"1px solid #666",color:"#fff",fontSize:10,borderRadius:3,padding:"0 6px",cursor:"pointer"},children:s?"▶":"⏸"}),c&&q.jsx("button",{onClick:c,style:{background:"none",border:"none",color:"#f44",fontSize:12,cursor:"pointer"},children:"×"}),q.jsx("button",{onClick:()=>u(S=>!S),style:{background:"none",border:"none",color:"#fff",fontSize:12},children:m?"▼":"▲"})]})]}),!m&&q.jsxs("div",{style:{padding:10},children:[q.jsx("div",{style:{marginBottom:12},children:q.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,fontSize:9},children:[q.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[q.jsx("div",{children:"FPS"}),q.jsx("div",{style:{color:D.fps<30?"#f44":"#4f4"},children:D.fps})]}),q.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[q.jsx("div",{children:"Nodes"}),q.jsx("div",{children:i})]}),q.jsxs("div",{style:{textAlign:"center",background:"#333",padding:3,borderRadius:3},children:[q.jsx("div",{children:"Res"}),q.jsx("div",{children:pi})]})]})}),q.jsxs("div",{style:{marginBottom:12},children:[q.jsx("div",{style:{color:"#aaa",fontSize:10,marginBottom:4},children:"Presets"}),U("Def","default"),U("Fast","fast"),U("Slow","slow"),U("Int","intense"),U("Sub","subtle")]}),q.jsxs("div",{style:{marginBottom:12},children:[q.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Simulation"}),q.jsx(At,{label:"Speed",value:E.speed,min:.1,max:2,step:.1,onChange:S=>y("speed",S)}),q.jsx(At,{label:"Attenuation",value:E.attenuation,min:.1,max:5,step:.1,onChange:S=>y("attenuation",S)}),q.jsx(At,{label:"Rail width",value:E.lineWidth,min:.002,max:.05,step:.001,onChange:S=>y("lineWidth",S)}),q.jsx(At,{label:"Fade lifetime (s)",value:E.ttlLifetime,min:.2,max:10,step:.1,onChange:S=>y("ttlLifetime",S)})]}),q.jsxs("div",{style:{marginBottom:12},children:[q.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Injection"}),q.jsx(At,{label:"Radius",value:E.injectionRadius,min:.01,max:.3,step:.01,onChange:S=>y("injectionRadius",S)})]}),q.jsxs("div",{style:{marginBottom:12},children:[q.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Visualization"}),q.jsx(At,{label:"Core width (px)",value:E.coreWidthPx,min:1,max:40,step:1,onChange:S=>y("coreWidthPx",S)}),q.jsx(At,{label:"Blade width (px)",value:E.bladeWidthPx,min:E.coreWidthPx+2,max:200,step:1,onChange:S=>y("bladeWidthPx",Math.max(S,E.coreWidthPx+2))}),q.jsx(At,{label:"Energy scale",value:E.energyScale,min:.1,max:5,step:.1,onChange:S=>y("energyScale",S)}),q.jsx(At,{label:"Gamma",value:E.gamma,min:.5,max:2.5,step:.1,onChange:S=>y("gamma",S)}),q.jsx(At,{label:"Min intensity cutoff",value:E.intensityCutoff,min:0,max:.05,step:.001,onChange:S=>y("intensityCutoff",S)})]}),q.jsxs("div",{style:{marginBottom:12},children:[q.jsx("div",{style:{color:"#aaa",fontSize:10,borderBottom:"1px solid #333",marginBottom:4},children:"Debug view & overlays"}),q.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8},children:[["Norm",0],["SDF",1],["Tan",2],["Edge",3],["Fwd",4],["Back",5],["Total",6],["Hue",7]].map(([S,_])=>q.jsx("button",{onClick:()=>y("debugView",_),style:{padding:"2px 6px",fontSize:9,background:E.debugView===_?"#777":"#444",color:"#fff",border:"1px solid #666",borderRadius:3},children:S},S))}),q.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr",alignItems:"center",gap:6,marginBottom:6},children:[q.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Vector overlay"}),q.jsx("input",{type:"checkbox",checked:E.overlayVectors,onChange:S=>y("overlayVectors",S.target.checked)}),q.jsx("label",{style:{fontSize:10,color:"#ccc"},children:"Centerline"}),q.jsx("input",{type:"checkbox",checked:E.showCenterline,onChange:S=>y("showCenterline",S.target.checked)})]}),q.jsx(At,{label:"Vector spacing (px)",value:E.vectorSpacingPx,min:4,max:64,step:1,onChange:S=>y("vectorSpacingPx",S)}),q.jsx(At,{label:"Vector length (px)",value:E.vectorLengthPx,min:2,max:32,step:1,onChange:S=>y("vectorLengthPx",S)}),q.jsx(At,{label:"Vector thickness (px)",value:E.vectorThicknessPx,min:.5,max:6,step:.25,onChange:S=>y("vectorThicknessPx",S)}),q.jsx(At,{label:"Centerline width (px)",value:E.centerlineWidthPx,min:.5,max:8,step:.5,onChange:S=>y("centerlineWidthPx",S)})]})]})]})},I0=n=>n.hue!==void 0?n.hue:n.rgb?Uc(n.rgb):0,L0=({children:n,topology:e="ladder",speed:t=Kt.speed,attenuation:i=Kt.attenuation,enableGlobalClicks:r=!1,showDebug:s=!1,scopeId:o="scope",debugPosition:a="top-right",cornerRadius:c=0,pixelRatio:l,powerPreference:h="default",maxFPS:p=120})=>{const f=se.useRef(new Map),[,d]=se.useState(0),g=se.useRef(!1),v=se.useCallback(()=>{g.current||(g.current=!0,Promise.resolve().then(()=>{g.current=!1,d(K=>K+1)}))},[]),u=Oo().toLowerCase().indexOf("light")!==-1,E=se.useCallback(K=>{f.current.set(K.id,K);const ue=K.ref.current;ue&&$.current&&$.current.observe(ue),we.current=!0,v()},[v]),T=se.useCallback(K=>{const ae=f.current.get(K)?.ref.current;ae&&$.current&&$.current.unobserve(ae),f.current.delete(K),we.current=!0,v()},[v]),y=se.useRef(performance.now()),D=se.useRef(null),R=se.useRef(null),w=se.useRef(performance.now()),U=se.useRef(p),S=se.useRef(()=>{}),_=se.useCallback(()=>{R.current===null&&(F.current=performance.now(),D.current&&(R.current=requestAnimationFrame(D.current)))},[]),b=se.useCallback((K,ue,ae={})=>{const ge=J.current;if(!ge)return;let Ie=I0(ae);u&&(Ie=(Ie+.5)%1);const Te=ae.energy??2.5,He=ae.radius??Kt.injectionRadius;ge.injectionMaterial.uniforms.uInjectionRadius.value=He,ge.injectPulse(K,ue,Ie,Te),y.current=performance.now(),_()},[u,_]);se.useEffect(()=>{S.current=b},[b]),se.useEffect(()=>{U.current=p},[p]);const P=se.useCallback(K=>{const ae=f.current.get(K)?.ref.current;if(!ae)return null;const ge=ae.getBoundingClientRect();return{u:(ge.left+ge.width/2)/window.innerWidth,v:1-(ge.top+ge.height/2)/window.innerHeight}},[]),O=se.useMemo(()=>({register:E,unregister:T,pulseAt:b,getNodeCenter:P}),[E,T,b,P]),L=se.useRef(null),F=se.useRef(performance.now()),V=se.useRef(new Float32Array(Pn*4)),J=se.useRef(null),N=se.useRef(null),[z,ee]=se.useState(s),fe=se.useRef(null),Ae=se.useRef(e),we=se.useRef(!0);se.useEffect(()=>{if(!L.current)return;y.current=performance.now();const K=new M0({alpha:!0,antialias:!0,powerPreference:h}),ue=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;K.setPixelRatio(ue),K.setSize(window.innerWidth,window.innerHeight),L.current.appendChild(K.domElement),fe.current=K;const ae=new Al,ge=new Jo(-1,1,1,-1,0,1),Ie=new C0(K);J.current=Ie;const Te=Ie.simulationMaterial.uniforms;Te.uSpeed.value=t,Te.uAttenuation.value=i,Te.uEnergyConservation.value=Kt.energyConservation;const He={uRes:{value:new Qe(window.innerWidth,window.innerHeight)},uGuideTexture:{value:Ie.getGuideTexture()},uSimulationTexture:{value:Ie.getCurrentTexture()},uTime:{value:0},uRailHalfWidthUV:{value:Ie.guideMaterial.uniforms.uLineWidth.value},uCoreWidthPx:{value:2},uBladeWidthPx:{value:10},uCornerRadiusPx:{value:c},uDebugView:{value:0},uOverlayVectors:{value:!1},uVectorSpacingPx:{value:16},uVectorLengthPx:{value:8},uVectorThicknessPx:{value:1.25},uEnergyScale:{value:1},uGamma:{value:1},uShowCenterline:{value:!1},uCenterlineWidthPx:{value:1.25},uIntensityCutoff:{value:.01},uGlowIntensity:{value:1.35},uCoreGain:{value:1},uHaloStrength:{value:.6},uWhiteHotStrength:{value:.25},uExposure:{value:1}};N.current=He;const Ze=new jt(new Ri(2,2),new Rt({vertexShader:mi,fragmentShader:R0,uniforms:He,transparent:!0,depthWrite:!1,blending:js}));ae.add(Ze),we.current=!0;const Xe=1e4,C=()=>{const Ve=performance.now();if(Ve-y.current>Xe){R.current=null;return}const Se=U.current;if(Se&&Se>0){const A=1e3/Se;if(Ve-w.current<A){R.current=requestAnimationFrame(C);return}}const Ge=Math.min((Ve-F.current)/1e3,.033);F.current=Ve;const Ee=window.innerWidth,Ne=window.innerHeight,et=Array.from(f.current.values()).slice(0,Pn);et.forEach((A,x)=>{const H=A.ref.current;if(!H)return;const Y=H.getBoundingClientRect(),Q=x*4,j=[Y.left/Ee,(Ne-(Y.top+Y.height))/Ne,Y.width/Ee,Y.height/Ne];for(let ce=0;ce<4;ce++)Math.abs(V.current[Q+ce]-j[ce])>.001&&(V.current[Q+ce]=j[ce],we.current=!0)});for(let A=et.length*4;A<V.current.length;A++)V.current[A]!==0&&(V.current[A]=0,we.current=!0);if(we.current){const A=Ae.current==="grid"?E0(V.current,et.length).edges:b0(V.current,et.length).edges;Ie.updateGuideTexture(A),we.current=!1}Ie.simulationStep(Ge),He.uSimulationTexture.value=Ie.getCurrentTexture(),He.uTime.value=Ve/1e3,He.uRailHalfWidthUV.value=Ie.guideMaterial.uniforms.uLineWidth.value,K.setRenderTarget(null),K.render(ae,ge),w.current=Ve,R.current=requestAnimationFrame(C)};D.current=C,R.current=requestAnimationFrame(C);const dt=()=>{He.uRes.value.set(window.innerWidth,window.innerHeight),K.setSize(window.innerWidth,window.innerHeight),we.current=!0};window.addEventListener("resize",dt);const ke=L.current;return()=>{window.removeEventListener("resize",dt),R.current!==null&&cancelAnimationFrame(R.current),R.current=null,Ie.dispose(),K.dispose(),ke&&K.domElement.parentElement===ke&&ke.removeChild(K.domElement)}},[i,c,l,h,t]),se.useEffect(()=>{Ae.current=e,we.current=!0,_()},[e,_]),se.useEffect(()=>{const K=J.current;if(!K)return;const ue=K.simulationMaterial.uniforms;ue.uSpeed.value=t,ue.uAttenuation.value=i},[t,i]),se.useEffect(()=>{if(!r)return;const K=ue=>{const ae=ue.clientX/window.innerWidth,ge=1-ue.clientY/window.innerHeight;S.current&&S.current(ae,ge,{hue:.33})};return window.addEventListener("click",K),()=>window.removeEventListener("click",K)},[r]),se.useEffect(()=>{const K=fe.current;if(!K)return;const ue=typeof l=="number"?Math.max(.5,Math.min(l,2)):window.devicePixelRatio||1;K.setPixelRatio(ue)},[l]);const $=se.useRef(null);return se.useEffect(()=>($.current=new ResizeObserver(()=>{we.current=!0,v()}),f.current.forEach(K=>{const ue=K.ref.current;ue&&$.current&&$.current.observe(ue)}),()=>$.current?.disconnect()),[v]),se.useEffect(()=>ee(s),[s]),se.useEffect(()=>{N.current&&(N.current.uCornerRadiusPx.value=c)},[c]),q.jsxs(Dc.Provider,{value:O,children:[n,q.jsx("div",{ref:L,style:{position:"fixed",inset:0,pointerEvents:"none",mixBlendMode:"difference"}}),z&&q.jsx(P0,{scopeId:o,gpuSimRef:J,vizUniformsRef:N,nodeCount:f.current.size,position:a,onClose:()=>ee(!1)})]})},D0=n=>{const e=vn.c(8),t=la("networkScopeEffects"),i=la("legacyGpuNetworkScope"),r=ad(),s=Ju();let o,a;if(e[0]!==t||e[1]!==r||e[2]!==s?(o=()=>{r&&t&&s.updateSettings({path:"features.networkScopeEffects",value:!1})},a=[t,r,s],e[0]=t,e[1]=r,e[2]=s,e[3]=o,e[4]=a):(o=e[3],a=e[4]),se.useEffect(o,a),!t||r)return n.children;let c;return e[5]!==n||e[6]!==i?(c=i?q.jsx(L0,{...n}):q.jsx(uf,{...n}),e[5]=n,e[6]=i,e[7]=c):c=e[7],c},U0=se.lazy(()=>dn(()=>import("./Assistant-Ccb6dgjW.js").then(n=>n.A),__vite__mapDeps([15,1,2,0,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29])));function N0(n){const e=vn.c(33),{error:t}=n,i=$r(),r=i["text.primary"];let s;e[0]!==i.background||e[1]!==r?(s={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",p:"2rem",boxSizing:"border-box",textAlign:"center",color:r,backgroundColor:i.background},e[0]=i.background,e[1]=r,e[2]=s):s=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o={maxWidth:760},e[3]=o):o=e[3];const a=i["status.error"];let c;e[4]!==a?(c=q.jsx(ar,{component:"h2",variant:"h5",sx:{mb:2,color:a},children:"Assistant stopped to protect your data"}),e[4]=a,e[5]=c):c=e[5];const l=i["status.error"];let h;e[6]!==l?(h={mb:2,lineHeight:1.5,color:l,overflowWrap:"anywhere"},e[6]=l,e[7]=h):h=e[7];let p;e[8]!==t.message||e[9]!==h?(p=q.jsx(ar,{sx:h,children:t.message}),e[8]=t.message,e[9]=h,e[10]=p):p=e[10];const f=i["text.secondary"];let d;e[11]!==f?(d=q.jsx(ar,{sx:{mb:3,lineHeight:1.5,color:f,fontSize:"0.95rem"},children:`Do not clear this browser's site data and do not delete or "reset" Assistant storage — your data may still be recoverable from this browser profile. Try reloading first; if this screen keeps appearing, contact support with a screenshot of this message.`}),e[11]=f,e[12]=d):d=e[12];let g;e[13]===Symbol.for("react.memo_cache_sentinel")?(g=q.jsx(da,{variant:"contained",onClick:F0,children:"Reload Assistant"}),e[13]=g):g=e[13];const v=i.divider,m=i["text.primary"];let u;e[14]!==i.button?(u=un(i.button,.08),e[14]=i.button,e[15]=u):u=e[15];let E;e[16]!==u?(E={backgroundColor:u},e[16]=u,e[17]=E):E=e[17];let T;e[18]!==i.divider||e[19]!==m||e[20]!==E?(T=q.jsxs(nd,{direction:"row",justifyContent:"center",flexWrap:"wrap",gap:1.5,children:[g,q.jsx(da,{variant:"outlined",onClick:O0,title:"Preserves conversations and resets only tabs, panels, and layout state",sx:{borderColor:v,color:m,"&:hover":E},children:"Reset layout & tabs"})]}),e[18]=i.divider,e[19]=m,e[20]=E,e[21]=T):T=e[21];const y=i["text.secondary"];let D;e[22]!==y?(D=q.jsx(ar,{sx:{mt:2,lineHeight:1.5,color:y,fontSize:"0.85rem"},children:"The reset preserves conversations and stored Assistant data."}),e[22]=y,e[23]=D):D=e[23];let R;e[24]!==d||e[25]!==T||e[26]!==D||e[27]!==c||e[28]!==p?(R=q.jsxs(ha,{sx:o,children:[c,p,d,T,D]}),e[24]=d,e[25]=T,e[26]=D,e[27]=c,e[28]=p,e[29]=R):R=e[29];let w;return e[30]!==R||e[31]!==s?(w=q.jsx(ha,{sx:s,children:R}),e[30]=R,e[31]=s,e[32]=w):w=e[32],w}function O0(){return window.location.assign(Wl())}function F0(){return window.location.reload()}const bc=n=>{const e=vn.c(25),{onReady:t}=n;let i;e[0]===Symbol.for("react.memo_cache_sentinel")?(i=ua(),e[0]=i):i=e[0];const[r,s]=se.useState(i);let o;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=Qu(),e[1]=o):o=e[1];const[a,c]=se.useState(o);let l,h;e[2]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let R=!1;return ua()?(s(!0),()=>{R=!0}):(ed().then(()=>{R||s(!0)}).catch(w=>{R||c(w instanceof Error?w:new Error(String(w)))}),()=>{R=!0})},h=[],e[2]=l,e[3]=h):(l=e[2],h=e[3]),se.useEffect(l,h);let p,f;e[4]!==r?(p=()=>{if(!r)return;const R=Bd(),w=Ld();return()=>{w?.(),R?.()}},f=[r],e[4]=r,e[5]=p,e[6]=f):(p=e[5],f=e[6]),se.useEffect(p,f);let d,g;e[7]!==a||e[8]!==r?(d=()=>{if(!(!r||a))return td.startAutoConnect()},g=[r,a],e[7]=a,e[8]=r,e[9]=d,e[10]=g):(d=e[9],g=e[10]),se.useEffect(d,g);let v;e[11]===Symbol.for("react.memo_cache_sentinel")?(v={width:"100%",height:"100%",overflow:"hidden"},e[11]=v):v=e[11];let m;e[12]===Symbol.for("react.memo_cache_sentinel")?(m=q.jsx(vd,{}),e[12]=m):m=e[12];let u;e[13]!==a||e[14]!==r?(u=r&&!a?q.jsx(rf,{}):null,e[13]=a,e[14]=r,e[15]=u):u=e[15];let E,T;e[16]===Symbol.for("react.memo_cache_sentinel")?(E=q.jsx(pd,{}),T=q.jsx(sf,{}),e[16]=E,e[17]=T):(E=e[16],T=e[17]);let y;e[18]!==a||e[19]!==t||e[20]!==r?(y=a instanceof zc?q.jsx(af,{error:a}):a?q.jsx(N0,{error:a}):r?q.jsx(U0,{onReady:t}):null,e[18]=a,e[19]=t,e[20]=r,e[21]=y):y=e[21];let D;return e[22]!==u||e[23]!==y?(D=q.jsx("div",{style:v,children:q.jsx(au,{runtime:Nc,store:$t,children:q.jsx(iu,{children:q.jsx(ru,{children:q.jsxs(D0,{topology:"grid",cornerRadius:18,children:[m,u,E,T,y]})})})})}),e[22]=u,e[23]=y,e[24]=D):D=e[24],D},ex=Object.freeze(Object.defineProperty({__proto__:null,AssistantApp:bc,default:bc},Symbol.toStringTag,{value:"Module"}));export{ex as A,K0 as S,J0 as a,wa as b,jh as c,Th as d,Y0 as e,Qc as f,Vo as g,Kd as h,Yd as i,j0 as j,jd as l,Z0 as o,$0 as p,Q0 as r,wh as s};
